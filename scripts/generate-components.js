#!/usr/bin/env node

/**
 * Generate React Components from Figma Data
 * 
 * This script reads the synced component properties and design tokens
 * and updates the React component files automatically.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Generating React components from Figma data...');

/**
 * Load synced data
 */
function loadData() {
  const componentsPath = path.join(__dirname, '../design-tokens/component-properties.json');
  const tokensPath = path.join(__dirname, '../design-tokens/tokens.json');
  
  const components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
  const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  
  return { components, tokens };
}

/**
 * Update component documentation with latest properties
 */
function updateComponentDocs(componentName, componentData) {
  const storiesPath = path.join(
    __dirname,
    `../apps/storybook/src/components/${componentName}/${componentName}.stories.tsx`
  );
  
  if (!fs.existsSync(storiesPath)) {
    console.log(`⚠️  Skipping ${componentName} - stories file not found`);
    return false;
  }
  
  let content = fs.readFileSync(storiesPath, 'utf8');
  
  // Update Figma node ID if it changed
  if (componentData.nodeId) {
    content = content.replace(
      /Node `\d+:\d+`/g,
      `Node \`${componentData.nodeId}\``
    );
  }
  
  // Update variant count if it changed
  if (componentData.variants) {
    const variantCount = componentData.variants.length;
    content = content.replace(
      /· \d+ variants/g,
      `· ${variantCount} variants`
    );
  }
  
  fs.writeFileSync(storiesPath, content, 'utf8');
  console.log(`✅ Updated ${componentName}.stories.tsx`);
  return true;
}

/**
 * Update theme file with latest color tokens
 */
function updateTheme(tokens) {
  const themePath = path.join(__dirname, '../apps/storybook/src/tokens/gfgTheme.ts');
  
  if (!fs.existsSync(themePath)) {
    console.log('⚠️  Theme file not found');
    return false;
  }
  
  // For now, just log that tokens are available
  // In the future, we could auto-update color values here
  console.log(`✅ Theme file exists (${Object.keys(tokens.colors || {}).length} color tokens available)`);
  return true;
}

/**
 * Generate component metadata file
 */
function generateMetadata(components) {
  const metadata = {
    generatedAt: new Date().toISOString(),
    totalComponents: Object.keys(components).length,
    components: Object.entries(components).map(([name, data]) => ({
      name,
      nodeId: data.nodeId,
      variantCount: data.variants?.length || 0,
      props: data.props || {},
    })),
  };
  
  const outputPath = path.join(__dirname, '../apps/storybook/src/figma-metadata.json');
  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2), 'utf8');
  console.log(`✅ Generated metadata file with ${metadata.totalComponents} components`);
  return true;
}

/**
 * Main generation function
 */
async function main() {
  try {
    const { components, tokens } = loadData();
    
    console.log(`\n📦 Processing ${Object.keys(components).length} components...`);
    
    // Update documentation for key components
    const keyComponents = ['Badge', 'Button', 'Alert', 'Card', 'TextField', 'Dialog'];
    let updatedCount = 0;
    
    for (const componentName of keyComponents) {
      if (components[componentName]) {
        if (updateComponentDocs(componentName, components[componentName])) {
          updatedCount++;
        }
      }
    }
    
    // Update theme
    updateTheme(tokens);
    
    // Generate metadata
    generateMetadata(components);
    
    console.log('\n✨ Code generation complete!');
    console.log(`\n📝 Summary:`);
    console.log(`   - Updated ${updatedCount} component story files`);
    console.log(`   - Theme file checked`);
    console.log(`   - Metadata file generated`);
    console.log('\n💡 Changes are ready to commit!');
    
  } catch (error) {
    console.error('\n❌ Code generation failed:', error.message);
    process.exit(1);
  }
}

main();
