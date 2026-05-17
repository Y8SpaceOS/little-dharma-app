#!/usr/bin/env node
import fs from 'node:fs';

const qaDoc = 'docs/MY_TREASURES_V2_QA.md';
const qaCsv = 'docs/content/my-treasures-v2-qa.csv';
const treasuresScreen = 'app/(child)/treasures.tsx';
const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const requiredRowFields = ['qaArea', 'surface', 'expectedBehavior', 'status'];
const allowedStatuses = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const requiredTreasuresConcepts = [
  'My Treasures',
  'Values Garden',
  'Earned Badges',
  'Words I Carry',
  'Private on this device',
  'Vrindavan memories saved'
];
const forbiddenPhrases = [
  'collect them all',
  'beat your friends',
  'rank higher',
  'keep your streak',
  'good children',
  'bad children',
  'unlock only if',
  'share your treasures',
  'public profile',
  'limited time'
];

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
if (!fs.existsSync(treasuresScreen)) fail(`${treasuresScreen} is missing.`);

const raw = fs.readFileSync(qaCsv, 'utf8').replace(/^\uFEFF/, '').trim();
if (!raw) fail(`${qaCsv} is empty.`);

const lines = raw.split(/\r?\n/).filter(Boolean);
if (lines.length < 2) fail(`${qaCsv} must include a header and at least one row.`);

const headers = parseCsvLine(lines[0]).map((h) => h.trim());
for (const col of requiredColumns) {
  if (!headers.includes(col)) fail(`Missing required CSV column: ${col}`);
}

if (lines.length - 1 < 12) fail(`Expected at least 12 QA rows, found ${lines.length - 1}.`);

const headerIndex = new Map(headers.map((h, idx) => [h, idx]));
for (let i = 1; i < lines.length; i += 1) {
  const row = parseCsvLine(lines[i]);
  if (row.length !== headers.length) fail(`Row ${i + 1} has ${row.length} columns; expected ${headers.length}.`);

  for (const field of requiredRowFields) {
    const val = row[headerIndex.get(field)]?.trim();
    if (!val) fail(`Row ${i + 1} has empty required field: ${field}`);
  }

  const status = row[headerIndex.get('status')]?.trim();
  if (!allowedStatuses.has(status)) fail(`Row ${i + 1} has invalid status: ${status}`);
}

const treasuresText = fs.readFileSync(treasuresScreen, 'utf8');
for (const concept of requiredTreasuresConcepts) {
  if (!treasuresText.includes(concept)) fail(`${treasuresScreen} is missing required concept text: ${concept}`);
}

const qaDocText = fs.readFileSync(qaDoc, 'utf8');
const lowerTreasures = treasuresText.toLowerCase();
const lowerQaDoc = qaDocText.toLowerCase();
for (const phrase of forbiddenPhrases) {
  if (lowerTreasures.includes(phrase)) fail(`Forbidden phrase found in ${treasuresScreen}: ${phrase}`);
  if (lowerQaDoc.includes(phrase)) fail(`Forbidden phrase found in ${qaDoc}: ${phrase}`);
}

console.log('✅ My Treasures v2 QA artifacts validated.');
