/**
 * sync-tokens.mjs
 * Pulls latest component metadata + styles from Figma and updates design-tokens/.
 * Run: FIGMA_TOKEN=xxx node scripts/sync-tokens.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';
const TOKEN = process.env.FIGMA_TOKEN;

if (!TOKEN) { console.error('❌ Set FIGMA_TOKEN env var'); process.exit(1); }

async function figma(endpoint) {
  const res = await fetch(`https://api.figma.com/v1${endpoint}`, {
    headers: { 'X-Figma-Token': TOKEN },
  });
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  return res.json();
}

console.log('🔄 Syncing from Figma...\n');

// 1. Fetch components
const compData = await figma(`/files/${FILE_KEY}/components`);
const components = compData.meta?.components || [];
console.log(`✅ ${components.length} components fetched`);

// 2. Fetch component sets (top-level sets)
const setData = await figma(`/files/${FILE_KEY}/component_sets`);
const componentSets = setData.meta?.component_sets || [];
console.log(`✅ ${componentSets.length} component sets fetched`);

// 3. Fetch styles
const styleData = await figma(`/files/${FILE_KEY}/styles`);
const styles = styleData.meta?.styles || [];
console.log(`✅ ${styles.length} styles fetched`);

// 4. Build organized output
const setMap = {};
componentSets.forEach(s => {
  const cleanName = s.name.replace(/^</, '').replace(/>.*$/, '').trim();
  setMap[s.node_id] = { name: s.name, cleanName, nodeId: s.node_id };
});

// Group components by their containing set
const bySet = {};
components.forEach(c => {
  const setName = c.containing_frame?.name || 'Unknown';
  if (!bySet[setName]) bySet[setName] = [];
  bySet[setName].push({
    name: c.name,
    nodeId: c.node_id,
    key: c.key,
    description: c.description || '',
  });
});

// 5. Save raw data
fs.writeFileSync(
  path.join(ROOT, 'design-tokens/raw-components.json'),
  JSON.stringify(compData, null, 2)
);

fs.writeFileSync(
  path.join(ROOT, 'design-tokens/raw-styles.json'),
  JSON.stringify(styleData, null, 2)
);

// 6. Build sync summary
const summary = {
  syncedAt: new Date().toISOString(),
  figmaFileKey: FILE_KEY,
  totalComponents: components.length,
  totalComponentSets: componentSets.length,
  totalStyles: styles.length,
  componentSets: componentSets.map(s => ({
    name: s.name,
    nodeId: s.node_id,
    key: s.key,
    description: s.description || '',
  })),
  styles: styles.map(s => ({
    name: s.name,
    nodeId: s.node_id,
    styleType: s.style_type,
    key: s.key,
  })),
};

fs.writeFileSync(
  path.join(ROOT, 'design-tokens/sync-summary.json'),
  JSON.stringify(summary, null, 2)
);

console.log('\n📦 Files updated:');
console.log('  design-tokens/raw-components.json');
console.log('  design-tokens/raw-styles.json');
console.log('  design-tokens/sync-summary.json');
console.log(`\n✅ Sync complete at ${summary.syncedAt}`);
