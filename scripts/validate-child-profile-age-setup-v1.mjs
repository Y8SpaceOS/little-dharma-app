import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'docs/CHILD_PROFILE_AGE_SETUP_V1_QA.md',
  'docs/content/child-profile-age-setup-v1-qa.csv',
  'src/lib/childProfile.ts'
];

function fail(msg) { console.error(`❌ ${msg}`); process.exit(1); }
function ok(msg) { console.log(`✅ ${msg}`); }
function mustExist(rel) { if (!fs.existsSync(path.join(root, rel))) fail(`Missing required file: ${rel}`); ok(`Found ${rel}`); }

function parseCsv(text) {
  const rows = [];
  let row = []; let cell = ''; let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') { cell += '"'; i += 1; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) { row.push(cell); cell = ''; }
    else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && text[i + 1] === '\n') i += 1;
      row.push(cell); cell = '';
      if (row.some((c) => c.length > 0)) rows.push(row);
      row = [];
    } else cell += ch;
  }
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

for (const rel of requiredFiles) mustExist(rel);
const csvPath = path.join(root, 'docs/content/child-profile-age-setup-v1-qa.csv');
const csvRows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
if (csvRows.length < 2) fail('QA CSV has no data rows.');
const headers = csvRows[0];
for (const col of ['qaArea','surface','expectedBehavior','status','notes']) if (!headers.includes(col)) fail(`Missing required CSV column: ${col}`);
const h = Object.fromEntries(headers.map((name, i) => [name, i]));
const data = csvRows.slice(1);
if (data.length < 18) fail('QA CSV must contain at least 18 rows.');
const statusAllowed = new Set(['pass','pending_manual_qa','minor_issue','blocked']);
for (const [idx, r] of data.entries()) {
  for (const col of ['qaArea','surface','expectedBehavior','status']) if (!r[h[col]]?.trim()) fail(`Missing ${col} in row ${idx + 2}`);
  if (!statusAllowed.has(r[h.status])) fail(`Invalid status in row ${idx + 2}: ${r[h.status]}`);
}
ok('QA CSV structure validated');

const onboarding = fs.readFileSync(path.join(root, 'app/onboarding.tsx'), 'utf8');
if (!/childProfile|child setup|saveChildProfile|getChildProfile/i.test(onboarding)) fail('Onboarding does not reference child profile setup.');
if (!/getChildProfile/.test(onboarding)) fail('Onboarding does not hydrate child profile data on load.');
if (!/isChildProfileHydrated/.test(onboarding)) fail('Onboarding missing child profile hydration guard state.');
if (!/savedChildProfile/.test(onboarding)) fail('Onboarding missing saved child profile merge behavior.');
const dashboard = fs.readFileSync(path.join(root, 'app/(parent)/dashboard.tsx'), 'utf8');
if (!/child profile|childProfile|getChildProfile/i.test(dashboard)) fail('Parent dashboard does not reference child profile summary.');
const today = fs.readFileSync(path.join(root, 'app/(child)/today.tsx'), 'utf8');
if (!/Little One/.test(today)) fail('Child home fallback greeting not found.');

const qaDoc = fs.readFileSync(path.join(root, 'docs/CHILD_PROFILE_AGE_SETUP_V1_QA.md'), 'utf8').toLowerCase();
for (const phrase of ['local-only','optional','skippable','broad age band','no exact birthdate','no backend','no analytics','no age-band routing','manual iphone qa']) {
  if (!qaDoc.includes(phrase)) fail(`QA doc missing phrase: ${phrase}`);
}

const forbidden = ['mandatory','required profile','upload child data','child tracking','we monitor your child','performance score','rank','leaderboard','streak','limited time','targeted ads','personalised advertising','personalized advertising','exact date of birth','school name','location tracking'];
const childLib = fs.readFileSync(path.join(root, 'src/lib/childProfile.ts'), 'utf8');
if (!/clearChildProfile/.test(childLib)) fail('childProfile utility missing clear/reset helper.');

const filesToCheck = ['src/lib/childProfile.ts','app/onboarding.tsx','app/(parent)/dashboard.tsx','app/(child)/today.tsx','docs/CHILD_PROFILE_AGE_SETUP_V1_QA.md','docs/content/child-profile-age-setup-v1-qa.csv'];
for (const rel of filesToCheck) {
  const t = fs.readFileSync(path.join(root, rel), 'utf8').toLowerCase();
  for (const word of forbidden) if (t.includes(word)) fail(`Forbidden phrase '${word}' found in ${rel}`);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (pkg.scripts?.['validate-child-profile-age-setup-v1']) fail('Do not add validator to package.json scripts.');
ok('All Sprint 62 child profile checks passed');
