import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const qaDoc = path.join(root, 'docs/VRINDAVAN_WEEK3_RUNTIME_QA.md');
const qaCsv = path.join(root, 'docs/content/vrindavan-week3-runtime-qa.csv');
const seedPath = path.join(root, 'src/data/seed/vrindavan.ts');

const requiredColumns = [
  'storyNumber','storySlug','storyTitle','primaryValue','carryingWord','schemaCompatible','slugUnique',
  'authenticityStatus','parentTrustStatus','childReadabilityStatus','ritualQualityStatus','pauseQualityStatus',
  'quizQualityStatus','runtimeHandoffStatus','notes'
];
const requiredNonEmpty = ['storyNumber','storySlug','storyTitle','primaryValue','carryingWord','runtimeHandoffStatus'];
const handoffStatuses = new Set(['ready_for_private_beta','minor_revision_needed','major_revision_needed','blocked']);
const week3Slugs = [
  'krishna-cares-for-the-smallest-calf','moonlight-calm-under-the-kadamba-tree','the-friendship-repair-circle',
  'krishna-speaks-bravely-and-kindly','the-wise-choice-at-the-crossroads','morning-devotion-in-vrindavan','the-gratitude-circle-at-sunset'
];
const week2Slugs = [
  'krishna-shares-the-picnic','the-flute-and-quiet-listening','respect-at-the-yamuna-bank',
  'the-garland-mistake-and-honest-bow','butter-pot-waiting-game','sweeping-the-courtyard-together','wonder-at-fireflies'
];

function assert(cond, msg) { if (!cond) throw new Error(msg); }
function parseCsv(text) {
  const rows = []; let row = []; let cell = ''; let inQuotes = false;
  for (let i=0;i<text.length;i++) {
    const ch = text[i], next = text[i+1];
    if (ch === '"') { if (inQuotes && next === '"') { cell += '"'; i++; } else { inQuotes = !inQuotes; } }
    else if (ch === ',' && !inQuotes) { row.push(cell); cell = ''; }
    else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      row.push(cell); cell='';
      if (row.some((v) => v.length > 0)) rows.push(row);
      row=[];
    } else cell += ch;
  }
  if (cell.length || row.length) { row.push(cell); if (row.some((v)=>v.length>0)) rows.push(row); }
  return rows;
}

assert(fs.existsSync(qaDoc), 'Missing docs/VRINDAVAN_WEEK3_RUNTIME_QA.md');
assert(fs.existsSync(qaCsv), 'Missing docs/content/vrindavan-week3-runtime-qa.csv');
assert(fs.existsSync(seedPath), 'Missing src/data/seed/vrindavan.ts');

const rows = parseCsv(fs.readFileSync(qaCsv, 'utf8'));
assert(rows.length >= 2, 'CSV must include header and rows');
const headers = rows[0];
for (const c of requiredColumns) assert(headers.includes(c), `Missing required column: ${c}`);
const dataRows = rows.slice(1).map((r) => Object.fromEntries(headers.map((h, i) => [h, (r[i] ?? '').trim()])));
assert(dataRows.length === 7, `Expected exactly 7 QA rows, found ${dataRows.length}`);
for (const r of dataRows) {
  for (const k of requiredNonEmpty) assert(r[k], `Row missing required field ${k} for slug ${r.storySlug || '(unknown)'}`);
  assert(handoffStatuses.has(r.runtimeHandoffStatus), `Invalid runtimeHandoffStatus for ${r.storySlug}: ${r.runtimeHandoffStatus}`);
}
const nums = dataRows.map((r) => Number(r.storyNumber)).sort((a,b)=>a-b);
assert(JSON.stringify(nums) === JSON.stringify([15,16,17,18,19,20,21]), `Story numbers must be 15-21; got ${nums.join(',')}`);
const slugs = dataRows.map((r) => r.storySlug);
assert(new Set(slugs).size === slugs.length, 'CSV slugs must be unique');

const seed = fs.readFileSync(seedPath, 'utf8');
for (const slug of week3Slugs) assert(seed.includes(`slug: '${slug}'`), `Week 3 slug missing in seed: ${slug}`);
for (const slug of week2Slugs) assert(seed.includes(`slug: '${slug}'`), `Week 2 slug missing in seed: ${slug}`);

console.log('validate-vrindavan-week3-runtime: PASS');
