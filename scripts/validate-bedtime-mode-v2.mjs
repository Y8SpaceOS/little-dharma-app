import { readFileSync, existsSync } from 'node:fs';

const qaDocPath = 'docs/BEDTIME_MODE_V2_QA.md';
const qaCsvPath = 'docs/content/bedtime-mode-v2-qa.csv';
const storyScreenPath = 'app/story/[slug].tsx';

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatuses = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const forbiddenPhrases = [
  'keep your streak',
  'must sleep',
  'good children sleep',
  'bad children',
  'share your bedtime',
  'unlock tomorrow',
  'beat your friends'
];

const fail = (message) => {
  console.error(`❌ ${message}`);
  process.exit(1);
};

if (!existsSync(qaDocPath)) fail(`${qaDocPath} is missing.`);
if (!existsSync(qaCsvPath)) fail(`${qaCsvPath} is missing.`);
if (!existsSync(storyScreenPath)) fail(`${storyScreenPath} is missing.`);

const csv = readFileSync(qaCsvPath, 'utf8').trim();
const lines = csv.split('\n').filter(Boolean);
if (lines.length < 2) fail('QA CSV has no data rows.');

const header = lines[0].split(',').map((cell) => cell.trim());
for (const col of requiredColumns) {
  if (!header.includes(col)) fail(`QA CSV is missing required column: ${col}`);
}

const colIdx = Object.fromEntries(requiredColumns.map((col) => [col, header.indexOf(col)]));
const rows = lines.slice(1).map((line) => line.split(','));
if (rows.length < 12) fail(`QA CSV must contain at least 12 rows; found ${rows.length}.`);

for (const [i, row] of rows.entries()) {
  const rowNum = i + 2;
  for (const field of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    const value = (row[colIdx[field]] || '').trim();
    if (!value) fail(`Row ${rowNum} missing required field: ${field}`);
  }
  const status = (row[colIdx.status] || '').trim();
  if (!allowedStatuses.has(status)) {
    fail(`Row ${rowNum} has invalid status: ${status}`);
  }
}

const storyScreen = readFileSync(storyScreenPath, 'utf8').toLowerCase();
if (!storyScreen.includes('bedtime')) fail('Story screen missing bedtime concept.');
if (!storyScreen.includes('reflection')) fail('Story screen missing reflection concept.');
if (!(storyScreen.includes('breath') || storyScreen.includes('gratitude'))) {
  fail('Story screen missing breath or gratitude concept.');
}

const qaDoc = readFileSync(qaDocPath, 'utf8').toLowerCase();
for (const phrase of forbiddenPhrases) {
  const p = phrase.toLowerCase();
  if (storyScreen.includes(p)) fail(`Forbidden phrase found in story UI: "${phrase}"`);
  if (qaDoc.includes(p)) fail(`Forbidden phrase found in QA doc: "${phrase}"`);
}

console.log('✅ Bedtime Mode v2 validation passed.');
