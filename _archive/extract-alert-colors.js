const https = require('https');
const fs = require('fs');
require('dotenv').config();

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// All Alert variant node IDs (from organized-components.json)
const variants = [
    { name: 'Error-Filled', id: '6595:48260' },
    { name: 'Error-Outlined', id: '6595:48268' },
    { name: 'Error-Standard', id: '6595:48276' },
    { name: 'Warning-Filled', id: '6595:48262' },
    { name: 'Warning-Outlined', id: '6595:48270' },
    { name: 'Warning-Standard', id: '6595:48278' },
    { name: 'Info-Filled', id: '6595:48264' },
    { name: 'Info-Outlined', id: '6595:48272' },
    { name: 'Info-Standard', id: '6595:48280' },
    { name: 'Success-Filled', id: '6595:48266' },
    { name: 'Success-Outlined', id: '6595:48274' },
    { name: 'Success-Standard', id: '6595:48282' }
];

const ids = variants.map(v => v.id).join(',');

const options = {
    hostname: 'api.figma.com',
    path: `/v1/files/OjFchNAdeHiNH5W4wYLSGS/nodes?ids=${ids}&depth=10`,
    method: 'GET',
    headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const json = JSON.parse(data);
        const colorMap = {};
        
        variants.forEach(variant => {
            const node = json.nodes[variant.id]?.document;
            if (node) {
                const bg = node.fills?.[0]?.color;
                const border = node.strokes?.[0]?.color;
                
                // Get text color
                let textColor = null;
                function findText(n) {
                    if (n.type === 'TEXT' && n.fills?.[0]) {
                        textColor = rgbToHex(n.fills[0].color.r, n.fills[0].color.g, n.fills[0].color.b);
                        return true;
                    }
                    if (n.children) {
                        return n.children.some(findText);
                    }
                }
                findText(node);
                
                colorMap[variant.name] = {
                    bg: bg ? rgbToHex(bg.r, bg.g, bg.b) : '#FFFFFF',
                    border: border ? rgbToHex(border.r, border.g, border.b) : null,
                    text: textColor || '#000000',
                    icon: textColor || '#000000'
                };
            }
        });
        
        console.log('Alert Color Map:');
        console.log(JSON.stringify(colorMap, null, 2));
        
        fs.writeFileSync('alert-colors.json', JSON.stringify(colorMap, null, 2));
        console.log('\n✅ Saved to alert-colors.json');
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.end();
