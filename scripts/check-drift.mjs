/**
 * check-drift.mjs
 * Compares Figma component sets vs React extracted components and reports drift.
 * Run: FIGMA_TOKEN=xxx node scripts/check-drift.mjs
 * Exit code 1 if drift detected (fails CI).
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

console.log('🔍 Checking Figma ↔ React drift...\n');

// Internal Figma sets that are NOT UI components (helpers, charts, spacing, etc.)
const IGNORE_SETS = new Set([
  'TableHeadRow','TableCellRow','TableCell','TableHead','TableBody',
  'DataGrid','DataGrid | Header Rows','DataGrid | Header','DataGrid | Cell',
  'DataGrid | Header Rows | Column Group','DataGrid | Header | Column Group',
  'TimeField','TimelineDot','TimelineItem','TimelineContent','TimelineSeparator',
  'Step','DialogContent','Dialog Elements',
  'Spacing | Horizontal','Spacing | Vertical',
  'Star','Dot','task_alt','favorite','star',
  'FormGroup','FormGroup | RadioGroup',
  'Aspect ratio','ScatterChart','PieChart','BarChart / Horizontal','BarChart / Vertical',
  'SliderMark','SliderThumb','SliderTrack','SliderRail','SliderValue Label',
  'Native / Date Time Picker',
  'Elements / Axis X | Values Top','Elements / Axis X | Groups Top',
  'Elements / Lines','Elements / Legend','Elements / Series Bar',
  'Rich Text Editor','Drag and Drop','Drag and Drop ',
  'TableHeadRow','TableCellRow',
  'Progress','Step Icon','Step','LineChart','BarChart',
  'FormControlLabel','DataGrid Menu','DataGrid Toolbar',
  'Snackbar Content','Alert Title',
  'InputAdornment','OutlinedInput','FilledInput','Input',
  'TabPanel','TabScrollButton',
  'Avatars','Inner Slider',
  'StaticDateTimePicker','MobileDateTimePicker','StaticDatePicker','MobileDatePicker',
  'StaticTimePicker','MobileTimePicker','DesktopDatePicker','DesktopTimePicker',
]);

// 1. Get Figma component sets
const setData = await figma(`/files/${FILE_KEY}/component_sets`);
const figmaSets = (setData.meta?.component_sets || [])
  .filter(s => !s.name.startsWith('*') && !s.name.startsWith('Elements') && !s.name.startsWith('Native'))
  .map(s => ({
    name: s.name.replace(/^</, '').replace(/>.*$/, '').trim(),
    rawName: s.name,
    nodeId: s.node_id,
  }))
  .filter(s => !IGNORE_SETS.has(s.name) && !IGNORE_SETS.has(s.rawName));

// 2. Get React components on disk
const extractedDir = path.join(ROOT, 'extracted-components');
const reactComponents = fs.readdirSync(extractedDir)
  .filter(f => f.endsWith('.tsx'))
  .map(f => f.replace('.tsx', ''));

// 3. Get Code Connect files
const ccDir = path.join(ROOT, 'code-connect');
const connectedComponents = fs.existsSync(ccDir)
  ? fs.readdirSync(ccDir).filter(f => f.endsWith('.figma.tsx')).map(f => f.replace('.figma.tsx', ''))
  : [];

// 4. Load organized components for nodeId check
const organized = JSON.parse(fs.readFileSync(path.join(ROOT, 'design-tokens/organized-components.json'), 'utf8'));
const organizedComponents = [];
Object.values(organized.byPage).forEach(page => {
  if (page.components) page.components.forEach(c => organizedComponents.push(c));
});

// 5. Analyze drift
const report = {
  timestamp: new Date().toISOString(),
  summary: {},
  issues: [],
  healthy: [],
};

// Check: React components missing from Figma
const figmaNames = new Set(figmaSets.map(s => s.name));
const missingFromFigma = reactComponents.filter(name => {
  const hasFigmaSet = figmaNames.has(name) ||
    figmaSets.some(s => s.name.toLowerCase() === name.toLowerCase());
  return !hasFigmaSet;
});

// Check: Figma sets missing React implementation
const reactNames = new Set(reactComponents);
const missingReact = figmaSets.filter(s => !reactNames.has(s.name));

// Check: Components missing Figma nodeId
const missingNodeId = organizedComponents.filter(c => !c.nodeId).map(c => c.name);

// Check: Components missing Code Connect
const missingCodeConnect = reactComponents.filter(name => !connectedComponents.includes(name));

// Build report
if (missingReact.length > 0) {
  report.issues.push({
    type: 'MISSING_REACT_IMPL',
    severity: 'error',
    message: `${missingReact.length} Figma component sets have no React implementation`,
    components: missingReact.map(s => s.name),
  });
}

if (missingNodeId.length > 0) {
  report.issues.push({
    type: 'MISSING_FIGMA_NODE_ID',
    severity: 'warning',
    message: `${missingNodeId.length} components have no Figma node ID (no design reference)`,
    components: missingNodeId,
  });
}

if (missingCodeConnect.length > 0) {
  report.issues.push({
    type: 'MISSING_CODE_CONNECT',
    severity: 'info',
    message: `${missingCodeConnect.length} components have no Code Connect file`,
    components: missingCodeConnect,
  });
}

report.summary = {
  figmaComponentSets: figmaSets.length,
  reactComponents: reactComponents.length,
  connectedComponents: connectedComponents.length,
  issueCount: report.issues.length,
  errorCount: report.issues.filter(i => i.severity === 'error').length,
  warningCount: report.issues.filter(i => i.severity === 'warning').length,
};

// 6. Print report
console.log('📊 DRIFT REPORT');
console.log('═══════════════════════════════════════');
console.log(`  Figma component sets : ${report.summary.figmaComponentSets}`);
console.log(`  React components     : ${report.summary.reactComponents}`);
console.log(`  Code Connect files   : ${report.summary.connectedComponents}`);
console.log('');

if (report.issues.length === 0) {
  console.log('✅ No drift detected — Figma and React are in sync!');
} else {
  report.issues.forEach(issue => {
    const icon = issue.severity === 'error' ? '❌' : issue.severity === 'warning' ? '⚠️ ' : 'ℹ️ ';
    console.log(`${icon} [${issue.severity.toUpperCase()}] ${issue.message}`);
    issue.components.slice(0, 10).forEach(c => console.log(`     - ${c}`));
    if (issue.components.length > 10) console.log(`     ... and ${issue.components.length - 10} more`);
    console.log('');
  });
}

// 7. Save report
fs.writeFileSync(
  path.join(ROOT, 'design-tokens/drift-report.json'),
  JSON.stringify(report, null, 2)
);
console.log('📄 Full report saved to design-tokens/drift-report.json');

// Exit 1 if errors (fails CI)
const hasErrors = report.issues.some(i => i.severity === 'error');
if (hasErrors) {
  console.log('\n❌ Drift detected — fix errors before merging.');
  process.exit(1);
} else {
  console.log('\n✅ All checks passed.');
  process.exit(0);
}
