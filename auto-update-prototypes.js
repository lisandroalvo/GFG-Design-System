// Automatically find and update prototype mappings in design-system-final.html
const https = require('https');
const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || 'YOUR_FIGMA_TOKEN_HERE';
const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';

function fetchFigmaFile() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.figma.com',
            path: `/v1/files/${FILE_KEY}`,
            method: 'GET',
            headers: {
                'X-Figma-Token': FIGMA_TOKEN
            }
        };

        https.get(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Status: ${res.statusCode}`));
                }
            });
        }).on('error', reject);
    });
}

function findPrototypeFrames(node, pageName = '', results = []) {
    // Check if this is a frame with "Prototype" in the name
    if (node.type === 'FRAME' && node.name && node.name.toLowerCase().includes('prototype')) {
        results.push({
            name: node.name,
            nodeId: node.id,
            page: pageName,
            type: node.type
        });
    }
    
    // Recursively search children
    if (node.children) {
        for (const child of node.children) {
            findPrototypeFrames(child, pageName, results);
        }
    }
    
    return results;
}

async function updatePrototypeMap() {
    console.log('🔍 Searching for prototype frames in Figma...\n');
    
    const fileData = await fetchFigmaFile();
    const allPrototypes = [];
    
    // Search each page
    for (const page of fileData.document.children) {
        const prototypes = findPrototypeFrames(page, page.name);
        allPrototypes.push(...prototypes);
    }
    
    if (allPrototypes.length === 0) {
        console.log('❌ No frames with "Prototype" in the name found.');
        console.log('\n💡 Make sure you have frames named like:');
        console.log('   - Alert/Prototype');
        console.log('   - Button/Prototype');
        return;
    }
    
    console.log(`✅ Found ${allPrototypes.length} prototype frame(s):\n`);
    
    // Build the prototypeMap object
    const prototypeMapEntries = {};
    allPrototypes.forEach(proto => {
        const componentName = proto.name.replace('/Prototype', '').replace('/prototype', '');
        prototypeMapEntries[componentName] = proto.nodeId;
        console.log(`   ${componentName} → ${proto.nodeId}`);
    });
    
    // Read the HTML file
    const htmlPath = path.join(__dirname, 'design-system-final.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Generate the new prototypeMap code
    const prototypeMapCode = `const prototypeMap = {
${Object.entries(prototypeMapEntries).map(([name, nodeId]) => 
    `            '${name}': '${nodeId}',  // Auto-detected from Figma`
).join('\n')}
        };`;
    
    // Replace the existing prototypeMap
    const regex = /const prototypeMap = \{[\s\S]*?\};/;
    if (regex.test(htmlContent)) {
        htmlContent = htmlContent.replace(regex, prototypeMapCode);
        fs.writeFileSync(htmlPath, htmlContent, 'utf8');
        console.log('\n✅ Updated design-system-final.html with prototype mappings!');
        console.log('\n📋 Prototype Map:');
        console.log(prototypeMapCode);
    } else {
        console.log('\n❌ Could not find prototypeMap in design-system-final.html');
    }
}

updatePrototypeMap().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
});
