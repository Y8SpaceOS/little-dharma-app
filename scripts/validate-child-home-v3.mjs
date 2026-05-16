#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const qaDoc = path.join(root, 'docs/CHILD_HOME_V3_QA.md');
const qaCsv = path.join(root, 'docs/content/child-home-v3-qa.csv');
const todayFile = path.join(root, 'app/(child)/today.tsx');

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatus = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const forbiddenPhrases = [
  'keep your streak',
  'must continue',
  'good children',
  'bad children',
  'unlock rewards only if',
  'beat your friends',
  'lose progress'
];

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

for (const file of [qaDoc, qaCsv, todayFile]) {
  if (!fs.existsSync(file)) fail(`Missing required file: ${path.relative(root, file)}`);
}

const csv = fs.readFileSync(qaCsv, 'utf8').trim();
const rows = csv.split('\n').map((line) => line.split(','));
if (rows.length < 13) fail('QA CSV must include at least 12 data rows');

const header = rows[0];
for (const col of requiredColumns) {
  if (!header.includes(col)) fail(`Missing required CSV column: ${col}`);
}

const idx = Object.fromEntries(requiredColumns.map((col) => [col, header.indexOf(col)]));
for (let i = 1; i < rows.length; i += 1) {
  const row = rows[i];
  for (const key of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    if (!row[idx[key]] || !row[idx[key]].trim()) fail(`Row ${i + 1} missing ${key}`);
  }
  if (!allowedStatus.has(row[idx.status].trim())) fail(`Row ${i + 1} has invalid status: ${row[idx.status]}`);
}

const today = fs.readFileSync(todayFile, 'utf8');
for (const token of ['Companion', 'Today', 'Journey']) {
  if (!today.includes(token)) fail(`today.tsx missing required invitation concept token: ${token}`);
}

const textTargets = [fs.readFileSync(todayFile, 'utf8').toLowerCase(), fs.readFileSync(qaDoc, 'utf8').toLowerCase()];
for (const phrase of forbiddenPhrases) {
  if (textTargets.some((t) => t.includes(phrase))) fail(`Forbidden phrase found: "${phrase}"`);
}

console.log('✅ Child Home v3 validator passed');
