#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const mdPath = path.join(root, 'docs', 'MANUAL_QA_REGRESSION_MATRIX.md');
const matrixPath = path.join(root, 'docs', 'content', 'manual-qa-regression-matrix.csv');
const runLogPath = path.join(root, 'docs', 'content', 'manual-qa-run-log-template.csv');

const requiredMatrixColumns = [
  'testId','qaArea','userRole','surface','precondition','steps','expectedResult','severityIfFail','status','notes'
];
const requiredRunLogColumns = [
  'runId','date','tester','device','osVersion','buildSource','testId','result','issueSeverity','issueDescription','screenshotOrVideoRef','notes'
];
const requiredQaAreas = new Set([
  'app launch','onboarding/profile','child home','story path','story detail','ritual','quiz','completion','bedtime','treasures','values garden','parent dashboard','trust privacy center','navigation','safety privacy','layout readability','no dark patterns'
]);
const allowedSeverities = new Set(['P0_blocker','P1_critical','P2_major','P3_minor']);
const allowedStatuses = new Set(['pending_manual_qa','pass','minor_issue','blocked']);

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing required file: ${path.relative(root, filePath)}`);
    return false;
  }
  return true;
}

function parseCsvQuoteAware(input) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];
    const next = input[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === ',' && !inQuotes) {
      row.push(field);
      field = '';
      continue;
    }

    if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(field);
      const hasAnyContent = row.some((cell) => cell.trim() !== '');
      if (hasAnyContent) rows.push(row);
      row = [];
      field = '';
      continue;
    }

    field += ch;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    const hasAnyContent = row.some((cell) => cell.trim() !== '');
    if (hasAnyContent) rows.push(row);
  }

  if (inQuotes) {
    throw new Error('CSV parse error: unmatched quote');
  }

  return rows;
}

function toRecords(rows) {
  if (rows.length === 0) return { headers: [], records: [] };
  const headers = rows[0].map((h) => h.trim());
  const records = rows.slice(1).map((r) => {
    const rec = {};
    headers.forEach((h, i) => {
      rec[h] = (r[i] ?? '').trim();
    });
    return rec;
  });
  return { headers, records };
}

const filesOk = [mdPath, matrixPath, runLogPath].map(ensureFile).every(Boolean);
if (!filesOk) process.exit(process.exitCode || 1);

const md = fs.readFileSync(mdPath, 'utf8');
const matrixCsv = fs.readFileSync(matrixPath, 'utf8');
const runLogCsv = fs.readFileSync(runLogPath, 'utf8');

let matrixParsed;
let runLogParsed;
try {
  matrixParsed = toRecords(parseCsvQuoteAware(matrixCsv));
  runLogParsed = toRecords(parseCsvQuoteAware(runLogCsv));
} catch (err) {
  fail(err.message);
  process.exit(1);
}

for (const col of requiredMatrixColumns) {
  if (!matrixParsed.headers.includes(col)) fail(`Matrix CSV missing column: ${col}`);
}
for (const col of requiredRunLogColumns) {
  if (!runLogParsed.headers.includes(col)) fail(`Run-log CSV missing column: ${col}`);
}

if (matrixParsed.records.length < 30) {
  fail(`Matrix CSV must have at least 30 rows; found ${matrixParsed.records.length}`);
}

const seenQaAreas = new Set();
for (const [index, row] of matrixParsed.records.entries()) {
  const label = `matrix row ${index + 2}`;
  for (const requiredField of ['testId','qaArea','userRole','surface','steps','expectedResult','severityIfFail','status']) {
    if (!row[requiredField]) fail(`${label} missing ${requiredField}`);
  }
  if (row.qaArea) seenQaAreas.add(row.qaArea);
  if (row.severityIfFail && !allowedSeverities.has(row.severityIfFail)) {
    fail(`${label} has invalid severityIfFail: ${row.severityIfFail}`);
  }
  if (row.status && !allowedStatuses.has(row.status)) {
    fail(`${label} has invalid status: ${row.status}`);
  }
}

for (const qaArea of requiredQaAreas) {
  if (!seenQaAreas.has(qaArea)) fail(`Matrix CSV missing qaArea coverage: ${qaArea}`);
}

const mdChecks = [
  ['run-log result values', ['pass','fail','blocked','not_run']],
  ['severity model', ['P0_blocker','P1_critical','P2_major','P3_minor']],
  ['release gate language', [
    'Private beta cannot ship with any open P0',
    'Private beta should not ship with open P1 unless explicitly accepted',
    'P2 issues require owner decision',
    'P3 issues can be batched',
    'Manual iPhone QA must be run before release sign-off',
    'Automated validators passing is necessary but not sufficient'
  ]],
  ['manual iPhone QA requirement', ['physical iPhone / Expo Go evidence','pending_manual_qa']]
];

for (const [group, phrases] of mdChecks) {
  for (const phrase of phrases) {
    if (!md.includes(phrase)) fail(`MD file missing ${group} phrase: ${phrase}`);
  }
}

if (process.exitCode && process.exitCode !== 0) {
  process.exit(process.exitCode);
}

console.log('✅ Manual QA regression matrix validation passed.');
