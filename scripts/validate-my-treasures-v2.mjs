#!/usr/bin/env node
import fs from 'node:fs';

const qaDoc = 'docs/MY_TREASURES_V2_QA.md';
const qaCsv = 'docs/content/my-treasures-v2-qa.csv';
const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatuses = new Set(['pass', 'fail', 'pending_manual_qa']);

function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }

  out.push(cur);
  return out;
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

if (!fs.existsSync(qaDoc)) fail(`${qaDoc} is missing.`);
if (!fs.existsSync(qaCsv)) fail(`${qaCsv} is missing.`);

const raw = fs.readFileSync(qaCsv, 'utf8').replace(/^\uFEFF/, '').trim();
if (!raw) fail(`${qaCsv} is empty.`);

const lines = raw.split(/\r?\n/).filter(Boolean);
if (lines.length < 2) fail(`${qaCsv} must include a header and at least one row.`);

const headers = parseCsvLine(lines[0]).map((h) => h.trim());
for (const col of requiredColumns) {
  if (!headers.includes(col)) fail(`Missing required CSV column: ${col}`);
}

if (lines.length - 1 < 12) fail(`Expected at least 12 QA rows, found ${lines.length - 1}.`);

const statusIndex = headers.indexOf('status');
for (let i = 1; i < lines.length; i += 1) {
  const row = parseCsvLine(lines[i]);
  if (row.length !== headers.length) fail(`Row ${i + 1} has ${row.length} columns; expected ${headers.length}.`);
  const status = row[statusIndex]?.trim();
  if (!allowedStatuses.has(status)) fail(`Row ${i + 1} has invalid status: ${status}`);
}

console.log('✅ My Treasures v2 QA artifacts validated.');
