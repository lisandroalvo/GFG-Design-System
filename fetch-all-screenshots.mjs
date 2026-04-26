/**
 * Fetch Figma screenshots for all components
 * This script will be run manually with MCP access
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';

// Read the metadata
const metadataPath = path.join(__dirname, 'design-tokens/organized-components.json');
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

// Collect all components
const allComponents = [];
Object.entries(metadata.byPage).forEach(([category, pageData]) => {
  if (pageData.components) {
    pageData.components.forEach(comp => {
      allComponents.push({
        ...comp,
        category
      });
    });
  }
});

console.log(`📸 Found ${allComponents.length} components to screenshot\n`);

// Create a list for manual MCP calls
console.log('🔧 INSTRUCTIONS:');
console.log('Copy and paste these MCP calls one by one:\n');
console.log('For each component, call: mcp0_get_screenshot\n');

allComponents.forEach((comp, index) => {
  console.log(`// ${index + 1}. ${comp.name} (${comp.category})`);
  console.log(`fileKey: ${FILE_KEY}`);
  console.log(`nodeId: ${comp.nodeId}`);
  console.log('');
});

console.log('\n💾 Save the screenshot URLs to update the metadata');
console.log('   Format: { name, nodeId, screenshotUrl, width, height }');

// Export component list for reference
const componentList = allComponents.map(c => ({
  name: c.name,
  nodeId: c.nodeId,
  category: c.category,
  screenshotUrl: null // To be filled in
}));

fs.writeFileSync(
  path.join(__dirname, 'screenshot-urls.json'),
  JSON.stringify(componentList, null, 2)
);

console.log('\n✅ Created screenshot-urls.json template');
console.log('   Fill in the screenshotUrl for each component after fetching');
