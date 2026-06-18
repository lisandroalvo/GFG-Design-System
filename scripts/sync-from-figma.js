#!/usr/bin/env node

/**
 * Sync Design System from Figma
 * 
 * This script fetches the latest design tokens and component properties
 * from Figma and updates the local files.
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'OjFchNAdeHiNH5W4wYLSGS';

if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_TOKEN environment variable is required');
  process.exit(1);
}

console.log('🎨 Syncing design system from Figma...');
console.log(`📁 File: ${FIGMA_FILE_KEY}`);

/**
 * Fetch data from Figma API
 */
function fetchFigma(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Figma API error: ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Extract component properties from Figma file
 */
async function syncComponentProperties() {
  console.log('\n📦 Fetching component properties...');
  
  const fileData = await fetchFigma(`/v1/files/${FIGMA_FILE_KEY}`);
  const components = {};
  
  // Extract component sets and their properties
  function traverseNode(node) {
    if (node.type === 'COMPONENT_SET') {
      const props = {};
      
      if (node.componentPropertyDefinitions) {
        Object.entries(node.componentPropertyDefinitions).forEach(([key, def]) => {
          props[def.name] = {
            type: def.type,
            values: def.variantOptions || [],
            default: def.defaultValue,
          };
        });
      }
      
      components[node.name] = {
        nodeId: node.id,
        rawSetName: node.name,
        props: props,
        variants: node.children?.map(child => ({
          name: child.name,
          nodeId: child.id,
        })) || [],
      };
    }
    
    if (node.children) {
      node.children.forEach(traverseNode);
    }
  }
  
  traverseNode(fileData.document);
  
  // Save to file
  const outputPath = path.join(__dirname, '../design-tokens/component-properties.json');
  fs.writeFileSync(outputPath, JSON.stringify(components, null, 2));
  
  console.log(`✅ Saved ${Object.keys(components).length} components to ${outputPath}`);
  return components;
}

/**
 * Extract design tokens (colors, typography, etc.)
 */
async function syncDesignTokens() {
  console.log('\n🎨 Fetching design tokens...');
  
  const fileData = await fetchFigma(`/v1/files/${FIGMA_FILE_KEY}`);
  const styles = await fetchFigma(`/v1/files/${FIGMA_FILE_KEY}/styles`);
  
  const tokens = {
    colors: {},
    typography: {},
    spacing: {},
  };
  
  // Extract color styles
  if (styles.meta && styles.meta.styles) {
    for (const style of styles.meta.styles) {
      if (style.style_type === 'FILL') {
        tokens.colors[style.name] = {
          id: style.node_id,
          key: style.key,
        };
      } else if (style.style_type === 'TEXT') {
        tokens.typography[style.name] = {
          id: style.node_id,
          key: style.key,
        };
      }
    }
  }
  
  // Save to file
  const outputPath = path.join(__dirname, '../design-tokens/tokens.json');
  fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2));
  
  console.log(`✅ Saved design tokens to ${outputPath}`);
  return tokens;
}

/**
 * Main sync function
 */
async function main() {
  try {
    await syncComponentProperties();
    await syncDesignTokens();
    
    console.log('\n✨ Sync complete!');
    console.log('\n📝 Summary:');
    console.log('   - Component properties updated');
    console.log('   - Design tokens refreshed');
    console.log('\n💡 Review the changes and commit if everything looks good.');
    
  } catch (error) {
    console.error('\n❌ Sync failed:', error.message);
    process.exit(1);
  }
}

main();
