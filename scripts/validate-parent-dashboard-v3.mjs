import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const qaDoc = path.join(root, 'docs/PARENT_DASHBOARD_V3_QA.md');
const qaCsv = path.join(root, 'docs/content/parent-dashboard-v3-qa.csv');
const dashboard = path.join(root, 'app/(parent)/dashboard.tsx');

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatus = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const requiredConcepts = ['Parent Dashboard', 'journey', 'values', 'privacy'];
const forbiddenPhrases = ['behind', 'break the streak', 'compare with other children', 'rank', 'score', 'performance', 'weakness', 'bad behaviour', 'share report', 'public profile', 'limited time'];

function fail(msg) { console.error(`❌ ${msg}`); process.exit(1); }
function ok(msg) { console.log(`✅ ${msg}`); }

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') { cur += '"'; i += 1; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      row.push(cur); cur = '';
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(cur);
      if (row.some((cell) => cell.trim().length > 0)) rows.push(row);
      row = []; cur = '';
    } else cur += ch;
  }
  if (cur.length > 0 || row.length > 0) { row.push(cur); if (row.some((c) => c.trim().length > 0)) rows.push(row); }
  return rows;
}

if (!fs.existsSync(qaDoc)) fail('Missing docs/PARENT_DASHBOARD_V3_QA.md');
if (!fs.existsSync(qaCsv)) fail('Missing docs/content/parent-dashboard-v3-qa.csv');
ok('Required QA files exist');

const csvRows = parseCsv(fs.readFileSync(qaCsv, 'utf8'));
if (csvRows.length < 2) fail('CSV must include header and rows');
const header = csvRows[0];
requiredColumns.forEach((col) => { if (!header.includes(col)) fail(`Missing required CSV column: ${col}`); });
const idx = Object.fromEntries(requiredColumns.map((c) => [c, header.indexOf(c)]));
const dataRows = csvRows.slice(1);
if (dataRows.length < 12) fail('CSV must include at least 12 QA rows');

for (const [r, row] of dataRows.entries()) {
  for (const key of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    const v = (row[idx[key]] ?? '').trim();
    if (!v) fail(`Row ${r + 2} missing ${key}`);
  }
  const status = (row[idx.status] ?? '').trim();
  if (!allowedStatus.has(status)) fail(`Row ${r + 2} has invalid status: ${status}`);
}
ok('CSV structure and statuses validated');

const dashboardText = fs.readFileSync(dashboard, 'utf8');
requiredConcepts.forEach((concept) => {
  if (!dashboardText.toLowerCase().includes(concept.toLowerCase())) fail(`Dashboard missing required concept: ${concept}`);
});
ok('Dashboard concepts validated');

const qaDocText = fs.readFileSync(qaDoc, 'utf8').toLowerCase();
const dashboardLower = dashboardText.toLowerCase();
for (const phrase of forbiddenPhrases) {
  const p = phrase.toLowerCase();
  if (dashboardLower.includes(p) || qaDocText.includes(p)) fail(`Forbidden phrase present: ${phrase}`);
}
ok('Forbidden phrase check passed');

console.log('✅ Parent Dashboard v3 validator passed');
