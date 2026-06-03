const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Design System Components...\n');

const extractedDir = path.join(__dirname, 'extracted-components');
const files = fs.readdirSync(extractedDir).filter(f => f.endsWith('.tsx'));

console.log(`✅ Found ${files.length} component files\n`);

let verified = 0;
let errors = [];

files.forEach(file => {
  const filePath = path.join(extractedDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const componentName = file.replace('.tsx', '');
  
  // Check for required elements
  const hasType = content.includes('type ') || content.includes('interface ');
  const hasFunction = content.includes('function ');
  const hasExport = content.includes('export default');
  const hasJSX = content.includes('return (') && content.includes('<');
  const hasDataNodeId = content.includes('data-node-id');
  
  if (hasType && hasFunction && hasExport && hasJSX && hasDataNodeId) {
    verified++;
    console.log(`✅ ${componentName}`);
  } else {
    const missing = [];
    if (!hasType) missing.push('TypeScript types');
    if (!hasFunction) missing.push('function definition');
    if (!hasExport) missing.push('default export');
    if (!hasJSX) missing.push('JSX return');
    if (!hasDataNodeId) missing.push('Figma node ID');
    
    errors.push(`❌ ${componentName} - Missing: ${missing.join(', ')}`);
    console.log(`❌ ${componentName} - Missing: ${missing.join(', ')}`);
  }
});

console.log(`\n📊 Verification Results:`);
console.log(`   ✅ Verified: ${verified}/${files.length}`);
console.log(`   ❌ Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n⚠️  Components with issues:');
  errors.forEach(err => console.log(`   ${err}`));
} else {
  console.log('\n🎉 All components verified successfully!');
}

// Check component registry
console.log('\n🔍 Checking component registry...');
const registryPath = path.join(__dirname, 'src', 'componentRegistry.ts');
if (fs.existsSync(registryPath)) {
  const registryContent = fs.readFileSync(registryPath, 'utf8');
  const importCount = (registryContent.match(/import .* from/g) || []).length;
  console.log(`✅ Component registry exists with ${importCount} imports`);
} else {
  console.log('❌ Component registry not found');
}

// Check metadata
console.log('\n🔍 Checking component metadata...');
const metadataPath = path.join(__dirname, 'design-tokens', 'organized-components.json');
if (fs.existsSync(metadataPath)) {
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  const componentCount = Object.values(metadata.byPage || {})
    .reduce((sum, page) => sum + (page.components?.length || 0), 0);
  console.log(`✅ Metadata exists with ${componentCount} components`);
  console.log(`✅ Total variants: ${metadata.stats?.totalComponents || 'N/A'}`);
} else {
  console.log('❌ Metadata not found');
}

console.log('\n✅ Verification complete!');
