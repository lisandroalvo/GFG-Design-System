import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';
const TOKEN = process.env.FIGMA_TOKEN;
const OUT_DIR = path.join(__dirname, 'public/component-thumbs');

if (!TOKEN) {
  console.error('Set FIGMA_TOKEN env var before running.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'design-tokens/organized-components.json'), 'utf8'));

// Collect all components with nodeIds
const components = [];
Object.values(data.byPage).forEach(page => {
  if (page.components) {
    page.components.forEach(c => {
      if (c.nodeId) components.push({ name: c.name, nodeId: c.nodeId });
    });
  }
});

console.log(`Fetching thumbnails for ${components.length} components...`);

// Figma API accepts up to ~100 node IDs per request — split into batches of 50
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchImageUrls(nodeIds) {
  const ids = nodeIds.map(id => id.replace(':', '-')).join(',');
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${ids}&format=png&scale=2`;
  const res = await fetch(url, { headers: { 'X-Figma-Token': TOKEN } });
  if (!res.ok) throw new Error(`Figma API error ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.images || {};
}

async function downloadImage(url, filePath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(buffer));
}

const imageMap = {};

const batches = chunk(components, 50);
for (const batch of batches) {
  const nodeIds = batch.map(c => c.nodeId);
  console.log(`  Fetching URLs for ${batch.map(c => c.name).join(', ')}...`);

  const images = await fetchImageUrls(nodeIds);

  for (const comp of batch) {
    const apiNodeId = comp.nodeId.replace(':', '-');
    const imgUrl = images[apiNodeId] || images[comp.nodeId];
    if (!imgUrl) {
      console.warn(`  ⚠️  No image URL for ${comp.name} (${comp.nodeId})`);
      continue;
    }
    const outFile = path.join(OUT_DIR, `${comp.name}.png`);
    try {
      await downloadImage(imgUrl, outFile);
      imageMap[comp.name] = `/component-thumbs/${comp.name}.png`;
      console.log(`  ✅ ${comp.name}`);
    } catch (e) {
      console.warn(`  ❌ ${comp.name}: ${e.message}`);
    }
  }
}

// Save the image map so the HTML can reference it
fs.writeFileSync(
  path.join(__dirname, 'public/component-thumbs/index.json'),
  JSON.stringify(imageMap, null, 2)
);

console.log(`\nDone! ${Object.keys(imageMap).length}/${components.length} thumbnails saved.`);
console.log('Map written to public/component-thumbs/index.json');
