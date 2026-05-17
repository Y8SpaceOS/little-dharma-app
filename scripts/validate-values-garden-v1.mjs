import fs from 'node:fs';
import path from 'node:path';

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatus = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const forbiddenPhrases = [
  'collect them all',
  'beat your friends',
  'rank higher',
  'keep your streak',
  'good children',
  'bad children',
  'unlock only if',
  'share your garden',
  'public profile'
];

const qaDocPath = path.resolve('docs/VALUES_GARDEN_V1_QA.md');
const qaCsvPath = path.resolve('docs/content/values-garden-v1-qa.csv');
const treasuresPath = path.resolve('app/(child)/treasures.tsx');

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

if (!fs.existsSync(qaDocPath)) fail('Missing docs/VALUES_GARDEN_V1_QA.md');
if (!fs.existsSync(qaCsvPath)) fail('Missing docs/content/values-garden-v1-qa.csv');
if (!fs.existsSync(treasuresPath)) fail('Missing app/(child)/treasures.tsx');

const csv = fs.readFileSync(qaCsvPath, 'utf8').trim();
const lines = csv.split(/\r?\n/).filter(Boolean);
if (lines.length < 13) fail('CSV must include header + at least 12 data rows');

const headers = lines[0].split(',').map((h) => h.trim());
for (const column of requiredColumns) {
  if (!headers.includes(column)) fail(`CSV missing required column: ${column}`);
}

const index = Object.fromEntries(headers.map((h, i) => [h, i]));
for (let i = 1; i < lines.length; i += 1) {
  const row = lines[i].split(',');
  const qaArea = (row[index.qaArea] ?? '').trim();
  const surface = (row[index.surface] ?? '').trim();
  const expectedBehavior = (row[index.expectedBehavior] ?? '').trim();
  const status = (row[index.status] ?? '').trim();

  if (!qaArea || !surface || !expectedBehavior || !status) {
    fail(`Row ${i + 1} has missing required fields`);
  }

  if (!allowedStatus.has(status)) {
    fail(`Row ${i + 1} has invalid status: ${status}`);
  }
}

const treasuresText = fs.readFileSync(treasuresPath, 'utf8').toLowerCase();
for (const requiredText of ['values garden', 'value', 'private']) {
  if (!treasuresText.includes(requiredText)) {
    fail(`Treasures screen missing required text: ${requiredText}`);
  }
}

const qaDocText = fs.readFileSync(qaDocPath, 'utf8').toLowerCase();
const combined = `${treasuresText}\n${qaDocText}`;
for (const phrase of forbiddenPhrases) {
  if (combined.includes(phrase)) {
    fail(`Forbidden phrase found: ${phrase}`);
  }
}

console.log('✅ Values Garden v1 validation passed');
