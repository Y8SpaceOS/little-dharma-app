#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';

const qaMdPath = 'docs/VRINDAVAN_WEEK2_RUNTIME_QA.md';
const qaCsvPath = 'docs/content/vrindavan-week2-runtime-qa.csv';
const runtimePath = 'src/data/seed/vrindavan.ts';

const requiredColumns = [
  'storyNumber',
  'storySlug',
  'storyTitle',
  'primaryValue',
  'carryingWord',
  'schemaCompatible',
  'slugUnique',
  'authenticityStatus',
  'parentTrustStatus',
  'childReadabilityStatus',
  'ritualQualityStatus',
  'pauseQualityStatus',
  'quizQualityStatus',
  'runtimeHandoffStatus',
  'notes'
];

const requiredStatuses = new Set([
  'ready_for_private_beta',
  'minor_revision_needed',
  'major_revision_needed',
  'blocked'
]);

const expectedSlugs = [
  'krishna-shares-the-picnic',
  'the-flute-and-quiet-listening',
  'respect-at-the-yamuna-bank',
  'the-garland-mistake-and-honest-bow',
  'butter-pot-waiting-game',
  'sweeping-the-courtyard-together',
  'wonder-at-fireflies'
];

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

if (!existsSync(qaMdPath)) fail(`Missing required QA document: ${qaMdPath}`);
if (!existsSync(qaCsvPath)) fail(`Missing required QA CSV: ${qaCsvPath}`);

const csv = readFileSync(qaCsvPath, 'utf8').trim();
if (!csv) fail('QA CSV is empty.');

const lines = csv.split(/\r?\n/);
if (lines.length < 2) fail('QA CSV must include header plus 7 rows.');

const headers = lines[0].split(',').map((h) => h.trim());
for (const col of requiredColumns) {
  if (!headers.includes(col)) fail(`Missing required column: ${col}`);
}

const rows = lines.slice(1).map((line) => {
  const values = line.split(',');
  const row = {};
  headers.forEach((header, idx) => {
    row[header] = (values[idx] ?? '').trim();
  });
  return row;
});

if (rows.length !== 7) fail(`Expected exactly 7 QA rows; found ${rows.length}.`);

const slugSet = new Set();
const numberSet = new Set();
for (const row of rows) {
  for (const field of ['storyNumber', 'storySlug', 'storyTitle', 'primaryValue', 'carryingWord', 'runtimeHandoffStatus']) {
    if (!row[field]) fail(`Row missing required value for ${field}: ${JSON.stringify(row)}`);
  }

  const num = Number(row.storyNumber);
  if (!Number.isInteger(num) || num < 8 || num > 14) {
    fail(`Invalid storyNumber '${row.storyNumber}'. Expected integer range 8-14.`);
  }
  numberSet.add(num);

  if (slugSet.has(row.storySlug)) fail(`Duplicate storySlug detected: ${row.storySlug}`);
  slugSet.add(row.storySlug);

  if (!requiredStatuses.has(row.runtimeHandoffStatus)) {
    fail(`Invalid runtimeHandoffStatus '${row.runtimeHandoffStatus}' for slug ${row.storySlug}.`);
  }
}

for (let n = 8; n <= 14; n += 1) {
  if (!numberSet.has(n)) fail(`Missing required storyNumber ${n} in QA CSV.`);
}

if (existsSync(runtimePath)) {
  const runtime = readFileSync(runtimePath, 'utf8');
  for (const slug of expectedSlugs) {
    if (!runtime.includes(`slug: '${slug}'`)) {
      fail(`Runtime seed missing expected Week 2 slug: ${slug}`);
    }
  }
}

console.log('✅ Vrindavan Week 2 runtime QA validation passed.');
