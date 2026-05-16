import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const qaDoc = path.join(root, 'docs/RITUAL_MOMENT_V2_QA.md');
const qaCsv = path.join(root, 'docs/content/ritual-moment-v2-qa.csv');
const storyScreen = path.join(root, 'app/story/[slug].tsx');

const allowedStatus = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const forbiddenPhrases = [
  'keep your streak',
  'must say',
  'say perfectly',
  'bad child',
  'beat your friends',
  'unlock only if'
];

const fail = (message) => {
  console.error(`❌ ${message}`);
  process.exit(1);
};

const ensureFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fail(`Missing required file: ${path.relative(root, filePath)}`);
  }
};

const parseCsvLine = (line) => line.split(',').map((v) => v.trim());

ensureFile(qaDoc);
ensureFile(qaCsv);
ensureFile(storyScreen);

const csvText = fs.readFileSync(qaCsv, 'utf8').trim();
if (!csvText) fail('QA CSV is empty');
const csvLines = csvText.split(/\r?\n/).filter(Boolean);
if (csvLines.length < 2) fail('QA CSV must include header and at least one row');

const headers = parseCsvLine(csvLines[0]);
for (const column of requiredColumns) {
  if (!headers.includes(column)) fail(`QA CSV missing required column: ${column}`);
}

const rows = csvLines.slice(1).map(parseCsvLine);
if (rows.length < 12) fail('QA CSV must include at least 12 QA rows');

const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
for (const [i, row] of rows.entries()) {
  const rowNumber = i + 2;
  for (const required of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    if (!row[idx[required]]) fail(`Row ${rowNumber} is missing required value for ${required}`);
  }
  const status = row[idx.status];
  if (!allowedStatus.has(status)) {
    fail(`Row ${rowNumber} has invalid status '${status}'`);
  }
}

const storyText = fs.readFileSync(storyScreen, 'utf8');
for (const label of ['Say', 'Breathe', 'Reflect']) {
  if (!storyText.includes(label)) fail(`Story ritual UI is missing concept/label: ${label}`);
}

const qaDocText = fs.readFileSync(qaDoc, 'utf8').toLowerCase();
const storyLower = storyText.toLowerCase();
for (const phrase of forbiddenPhrases) {
  const lowerPhrase = phrase.toLowerCase();
  if (storyLower.includes(lowerPhrase) || qaDocText.includes(lowerPhrase)) {
    fail(`Forbidden phrase found: ${phrase}`);
  }
}

console.log('✅ Ritual Moment v2 validator passed.');
