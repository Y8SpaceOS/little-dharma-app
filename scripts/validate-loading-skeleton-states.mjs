import fs from 'node:fs';

const fail = (msg) => {
  console.error(`❌ ${msg}`);
  process.exit(1);
};

const requiredFiles = [
  'docs/LOADING_SKELETON_STATES_QA.md',
  'docs/content/loading-skeleton-states-qa.csv',
  'src/components/CalmLoadingState.tsx'
];
requiredFiles.forEach((f) => { if (!fs.existsSync(f)) fail(`Missing required file: ${f}`); });

const parseCsv = (input) => {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const next = input[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') { field += '"'; i += 1; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) { row.push(field); field = ''; }
    else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(field); field = '';
      if (row.some((cell) => cell.trim().length > 0)) rows.push(row);
      row = [];
    } else field += ch;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
};

const csv = fs.readFileSync('docs/content/loading-skeleton-states-qa.csv', 'utf8');
const rows = parseCsv(csv);
if (rows.length < 2) fail('CSV must contain header and rows');
const header = rows[0];
const requiredCols = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
requiredCols.forEach((col) => { if (!header.includes(col)) fail(`Missing required CSV column: ${col}`); });

const idx = Object.fromEntries(requiredCols.map((c) => [c, header.indexOf(c)]));
const dataRows = rows.slice(1);
if (dataRows.length < 14) fail('CSV must contain at least 14 QA rows');

const validStatus = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
for (const [i, r] of dataRows.entries()) {
  const qaArea = (r[idx.qaArea] || '').trim();
  const surface = (r[idx.surface] || '').trim();
  const expectedBehavior = (r[idx.expectedBehavior] || '').trim();
  const status = (r[idx.status] || '').trim();
  if (!qaArea || !surface || !expectedBehavior || !status) fail(`Row ${i + 2} missing required value`);
  if (!validStatus.has(status)) fail(`Row ${i + 2} has invalid status: ${status}`);
}

const loadingComp = fs.readFileSync('src/components/CalmLoadingState.tsx', 'utf8');
if (!/from 'react-native'/.test(loadingComp)) fail('CalmLoadingState must use React Native built-ins');
if (/from ['"](?!react-native|react)['"][^'"]+['"]/.test(loadingComp)) fail('CalmLoadingState must not import non React Native dependencies');

const routeFiles = ['app/(child)/today.tsx', 'app/(child)/treasures.tsx', 'app/(parent)/dashboard.tsx', 'app/story/[slug].tsx', 'app/onboarding.tsx', 'app/(parent)/privacy.tsx'];
const references = routeFiles.filter((f) => fs.existsSync(f) && fs.readFileSync(f, 'utf8').includes('CalmLoadingState'));
if (references.length < 2) fail('At least two route files must reference CalmLoadingState');

const dashboard = fs.readFileSync('app/(parent)/dashboard.tsx', 'utf8');
if (dashboard.includes("'Loading...'")) fail('Parent Dashboard still has raw Loading... placeholders');

const qaDoc = fs.readFileSync('docs/LOADING_SKELETON_STATES_QA.md', 'utf8').toLowerCase();
['low-stimulation', 'no animation dependency', 'no telemetry', 'manual iphone qa'].forEach((phrase) => {
  if (!qaDoc.includes(phrase)) fail(`QA doc missing required phrase: ${phrase}`);
});

const forbidden = ['please wait','loading forever','network error','server loading','tracking progress','fetching user data','syncing child data','don’t leave','almost unlocked','limited time','streak','performance score'];
const qaAndComp = `${qaDoc}\n${loadingComp.toLowerCase()}`;
forbidden.forEach((phrase) => { if (qaAndComp.includes(phrase)) fail(`Forbidden phrase found: ${phrase}`); });

console.log('✅ Loading/skeleton states validation passed');
