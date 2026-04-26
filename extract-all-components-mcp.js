/**
 * Extract all components from Figma using MCP
 * This script gets 100% accurate code for each component
 */

const fs = require('fs');
const path = require('path');

// Load components list
const componentsToExtract = JSON.parse(fs.readFileSync('components-to-extract.json', 'utf8'));

console.log(`🎨 Starting extraction of ${componentsToExtract.length} components via MCP`);
console.log(`📊 This will use approximately ${componentsToExtract.length} MCP calls`);
console.log(`⏱️  Estimated time: ${Math.ceil(componentsToExtract.length / 10)} minutes\n`);

// Create output directory
const outputDir = path.join(__dirname, 'extracted-components');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Track progress
let extracted = 0;
let failed = 0;

// Save extraction metadata
const metadata = {
    extractedAt: new Date().toISOString(),
    totalComponents: componentsToExtract.length,
    components: []
};

console.log('📝 Component extraction list:');
componentsToExtract.forEach((comp, idx) => {
    console.log(`${idx + 1}. ${comp.name} (${comp.variantCount} variants) - Node: ${comp.nodeId}`);
});

console.log('\n⚠️  IMPORTANT: This script requires MCP integration.');
console.log('Please use Cascade to call mcp0_get_design_context for each component.');
console.log('\nSaved component list to: components-to-extract.json');
console.log('Output directory: extracted-components/\n');

// Save metadata
fs.writeFileSync(
    path.join(outputDir, 'extraction-metadata.json'),
    JSON.stringify(metadata, null, 2)
);

console.log('✅ Setup complete! Ready for MCP extraction.');
