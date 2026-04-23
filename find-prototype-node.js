// Helper script to find the node ID of your Alert/Prototype frame
// This will help you get the correct node ID to add to the prototypeMap

const https = require('https');

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

async function main() {
    console.log('🔍 Searching for prototype frames in Figma file...\n');
    
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
        console.log('   - etc.');
    } else {
        console.log('✅ Found prototype frames:\n');
        allPrototypes.forEach(proto => {
            console.log(`📄 Page: ${proto.page}`);
            console.log(`   Name: ${proto.name}`);
            console.log(`   Node ID: ${proto.nodeId}`);
            console.log(`   Add to prototypeMap: '<ComponentName>': '${proto.nodeId}',\n`);
        });
        
        console.log('\n📋 Copy these to your prototypeMap in design-system-final.html:');
        console.log('const prototypeMap = {');
        allPrototypes.forEach(proto => {
            const componentName = proto.name.replace('/Prototype', '');
            console.log(`    '<${componentName}>': '${proto.nodeId}',`);
        });
        console.log('};');
    }
}

main().catch(console.error);
