#!/usr/bin/env node
/**
 * Sync component property definitions from Figma — full pass.
 *
 * Strategy (in priority order):
 *   1) Use Figma's componentPropertyDefinitions when present (most accurate:
 *      includes BOOLEAN / TEXT / INSTANCE_SWAP that aren't variant axes).
 *   2) For sets without componentPropertyDefinitions (often legacy sets like
 *      Switch), parse variant axes from the children's names in
 *      design-tokens/organized-components.json.
 *
 * Writes design-tokens/component-properties.json for runtime consumption.
 */
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = 'OjFchNAdeHiNH5W4wYLSGS';

if (!TOKEN) {
  console.error('Missing FIGMA_TOKEN in .env');
  process.exit(1);
}

function get(path) {
  return new Promise((resolve, reject) => {
    https.request({
      hostname: 'api.figma.com',
      path,
      method: 'GET',
      headers: { 'X-Figma-Token': TOKEN }
    }, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => resolve({ status: r.statusCode, body: d }));
    }).on('error', reject).end();
  });
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const cleanPropName = name => name.split('#')[0].trim();

function normaliseProps(propDefs) {
  const props = [];
  for (const [rawName, def] of Object.entries(propDefs || {})) {
    let name = cleanPropName(rawName);
    if (def.type === 'VARIANT') {
      props.push({
        name,
        values: def.variantOptions || [],
        default: def.defaultValue,
        isBoolean: false,
      });
    } else if (def.type === 'BOOLEAN') {
      // Runtime convention adds '?' itself — strip Figma's trailing '?' to avoid '??'
      const cleanName = name.replace(/\?+$/, '');
      props.push({
        name: cleanName,
        values: ['True', 'False'],
        default: def.defaultValue === true || def.defaultValue === 'True',
        isBoolean: true,
      });
    } else if (def.type === 'TEXT') {
      props.push({ name, type: 'text', default: def.defaultValue || '' });
    } else if (def.type === 'INSTANCE_SWAP') {
      props.push({
        name,
        type: 'instance',
        default: def.defaultValue || '',
        instanceOptions: def.preferredValues || [],
      });
    }
  }
  return props.sort((a, b) => {
    const w = p => p.type === 'text' ? 2 : p.type === 'instance' ? 3 : p.isBoolean ? 1 : 0;
    return w(a) - w(b);
  });
}

// Parse variant axes from a list of variant child names
// e.g. ['Size=Medium, Color=Primary, State=Enabled', 'Size=Large, Color=Error, ...']
function propsFromVariantNames(variants) {
  const axes = {};
  variants.forEach(v => {
    const name = v.name || '';
    const pairs = name.split(',').map(s => s.trim()).filter(Boolean);
    pairs.forEach(p => {
      const m = p.match(/^([^=]+?)(\??)=(.+)$/);
      if (!m) return;
      const key = m[1].trim();
      const isBool = m[2] === '?';
      const val = m[3].trim();
      if (!axes[key]) axes[key] = { isBoolean: isBool, values: new Set() };
      axes[key].values.add(val);
    });
  });
  // Sanitise — discard noisy values like '-', 'true'/'false' lowercased dupes
  const props = [];
  for (const [name, info] of Object.entries(axes)) {
    let values = [...info.values].filter(v => v !== '-' && v !== '');
    // Normalise boolean values
    if (info.isBoolean) {
      values = ['True', 'False'];
    } else {
      // De-dupe case-insensitively, prefer the version with more uppercase letters
      const seen = {};
      values.forEach(v => {
        const k = v.toLowerCase();
        if (!seen[k] || (v.match(/[A-Z]/g) || []).length > (seen[k].match(/[A-Z]/g) || []).length) {
          seen[k] = v;
        }
      });
      values = Object.values(seen);
    }
    if (values.length === 0) continue;
    props.push({
      name,
      values,
      default: values[0],
      isBoolean: info.isBoolean,
    });
  }
  return props;
}

(async () => {
  // Load organized-components.json for fallback variant parsing
  const od = JSON.parse(fs.readFileSync('design-tokens/organized-components.json', 'utf8'));
  const variantsBySet = {};
  for (const cat of Object.values(od.byCategory)) {
    for (const setName of Object.keys(cat.componentSets || {})) {
      const cleanName = setName.replace(/[<>]/g, '').trim();
      const arr = cat.componentSets[setName] || [];
      if (arr.length && arr[0].variants) {
        variantsBySet[cleanName] = arr[0].variants;
      } else if (arr.length) {
        // organized-components.json structure: each entry IS a component-set summary; variants live in the parent components array
        // The "components" array of each category lists individual component variants
      }
    }
    // Build per-set variant lists from the flat components array
    (cat.components || []).forEach(c => {
      const setName = (c.setName || '').replace(/[<>]/g, '').trim();
      if (!setName) return;
      if (!variantsBySet[setName]) variantsBySet[setName] = [];
      // Pull each component's variants if it has variantCount > 0
      // Note: actual variant child names live in raw components.json — we'll read it too
    });
  }

  // Read raw components.json which has every variant as a flat list with names
  const raw = JSON.parse(fs.readFileSync('design-tokens/components.json', 'utf8'));
  const allVariants = raw.components || [];

  // Group variants by their containing set (we need to figure out which set each belongs to).
  // Use Figma file index to map componentId -> componentSetId -> setName.
  console.log('🔄 Fetching file index from Figma…');
  const indexRes = await get('/v1/files/' + FILE_KEY);
  if (indexRes.status !== 200) {
    console.error('Failed to fetch file:', indexRes.body.slice(0, 200));
    process.exit(1);
  }
  const fileData = JSON.parse(indexRes.body);
  const componentMeta = fileData.components || {};       // id -> { name, componentSetId, ... }
  const setMeta = fileData.componentSets || {};          // setId -> { name, ... }
  console.log('   Components in file:', Object.keys(componentMeta).length);
  console.log('   ComponentSets in file:', Object.keys(setMeta).length);

  // Build setName -> [variant child names]
  const variantsFromFile = {};
  for (const [compId, info] of Object.entries(componentMeta)) {
    const setId = info.componentSetId;
    if (!setId) continue;
    const setInfo = setMeta[setId];
    if (!setInfo) continue;
    const cleanName = setInfo.name.replace(/[<>]/g, '').trim();
    if (!variantsFromFile[cleanName]) variantsFromFile[cleanName] = [];
    variantsFromFile[cleanName].push({ id: compId, name: info.name });
  }

  // Pick target sets:
  //   - All <Component> sets
  //   - Plus any non-bracketed set whose name appears as a known component (e.g. "Alert")
  const knownComponentNames = new Set(Object.keys(variantsFromFile));
  const targets = [];
  const seen = new Set();
  for (const [id, info] of Object.entries(setMeta)) {
    const cleanName = info.name.replace(/[<>]/g, '').trim();
    const isBracketed = /^<.+>$/.test(info.name);
    const isKnownPlain = !isBracketed && knownComponentNames.has(cleanName) && !info.name.startsWith('*') && !info.name.startsWith('_');
    if ((isBracketed || isKnownPlain) && !seen.has(cleanName)) {
      targets.push({ id, name: cleanName, rawName: info.name });
      seen.add(cleanName);
    }
  }
  console.log('   Target component sets:', targets.length);

  const result = {};
  let done = 0;
  for (const group of chunk(targets, 25)) {
    const ids = group.map(t => t.id).join(',');
    const r = await get('/v1/files/' + FILE_KEY + '/nodes?ids=' + encodeURIComponent(ids) + '&depth=1');
    if (r.status !== 200) continue;
    const data = JSON.parse(r.body);
    for (const t of group) {
      done++;
      const node = data.nodes[t.id];
      if (!node || !node.document) continue;
      const propDefs = node.document.componentPropertyDefinitions || {};
      let props;
      let source;
      if (Object.keys(propDefs).length > 0) {
        props = normaliseProps(propDefs);
        source = 'componentPropertyDefinitions';
      } else {
        // Fallback: parse from variant names
        const variants = variantsFromFile[t.name] || [];
        props = propsFromVariantNames(variants);
        source = 'variant-name parse';
      }
      result[t.name] = {
        nodeId: t.id,
        rawSetName: t.rawName,
        source,
        figmaPropCount: Object.keys(propDefs).length,
        variantCount: (variantsFromFile[t.name] || []).length,
        props,
      };
    }
    process.stdout.write(`   synced ${done}/${targets.length}\r`);
  }
  console.log();

  const out = {
    _source: 'Synced from Figma file ' + FILE_KEY,
    _generatedAt: new Date().toISOString(),
    _totalSets: Object.keys(result).length,
    _strategy: 'Prefer componentPropertyDefinitions; fall back to variant-name parse',
    components: result,
  };
  fs.writeFileSync('design-tokens/component-properties.json', JSON.stringify(out, null, 2));
  // Also emit a runtime-loadable JS wrapper so static deploys can use it via a <script> tag.
  fs.writeFileSync(
    'design-tokens/component-properties.js',
    '// Auto-generated by sync-component-props.cjs — do not edit by hand.\n' +
    'window.COMPONENT_PROPERTIES = ' + JSON.stringify(out, null, 2) + ';\n'
  );
  console.log('✅ Wrote design-tokens/component-properties.json (' + Object.keys(result).length + ' components)');
  console.log('✅ Wrote design-tokens/component-properties.js  (runtime wrapper)');

  // Sanity report
  let withDefs = 0, withFallback = 0, empty = 0;
  for (const v of Object.values(result)) {
    if (v.source === 'componentPropertyDefinitions') withDefs++;
    else if (v.props.length) withFallback++;
    else empty++;
  }
  console.log('   • from componentPropertyDefinitions:', withDefs);
  console.log('   • from variant-name parse:        ', withFallback);
  console.log('   • empty (skipped):                ', empty);
})();
