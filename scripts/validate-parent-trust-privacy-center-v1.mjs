import fs from 'node:fs';
import path from 'node:path';

const qaDocPath = path.join('docs', 'PARENT_TRUST_PRIVACY_CENTER_V1_QA.md');
const qaCsvPath = path.join('docs', 'content', 'parent-trust-privacy-center-v1-qa.csv');
const privacyRoutePath = path.join('app', '(parent)', 'privacy.tsx');
const parentDashboardPath = path.join('app', '(parent)', 'dashboard.tsx');

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatuses = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const requiredConcepts = ['Trust', 'Privacy', 'local', 'parent', 'no public profile'];
const forbiddenPhrases = [
  'certified safe',
  'guaranteed privacy',
  'COPPA compliant',
  'GDPR compliant',
  'doctor approved',
  'clinically proven',
  'fully secure',
  'military grade',
  'tracking analytics',
  'leaderboard',
  'ranking'
];

function parseCsvLine(line) {
  const cells = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      cells.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  cells.push(current);
  return cells.map((cell) => cell.trim());
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

if (!fs.existsSync(qaDocPath)) fail(`Missing QA document: ${qaDocPath}`);
if (!fs.existsSync(qaCsvPath)) fail(`Missing QA CSV: ${qaCsvPath}`);
if (!fs.existsSync(privacyRoutePath)) fail(`Missing Trust & Privacy route: ${privacyRoutePath}`);
if (!fs.existsSync(parentDashboardPath)) fail(`Missing parent dashboard: ${parentDashboardPath}`);

const csvRaw = fs.readFileSync(qaCsvPath, 'utf8').replace(/\r\n/g, '\n').trim();
if (!csvRaw) fail('QA CSV is empty');

const lines = csvRaw.split('\n').filter((line) => line.trim().length > 0);
if (lines.length < 2) fail('QA CSV must include a header and at least one row');

const header = parseCsvLine(lines[0]);
for (const column of requiredColumns) {
  if (!header.includes(column)) fail(`QA CSV missing required column: ${column}`);
}

const rows = lines.slice(1).map((line) => {
  const values = parseCsvLine(line);
  const row = {};
  header.forEach((key, index) => {
    row[key] = values[index] ?? '';
  });
  return row;
});

if (rows.length < 12) fail(`Expected at least 12 QA rows, found ${rows.length}`);

for (const [index, row] of rows.entries()) {
  for (const required of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    if (!row[required] || row[required].trim().length === 0) {
      fail(`Row ${index + 2} is missing required field: ${required}`);
    }
  }

  if (!allowedStatuses.has(row.status)) {
    fail(`Row ${index + 2} has invalid status: ${row.status}`);
  }
}

const privacyCopy = fs.readFileSync(privacyRoutePath, 'utf8');
for (const concept of requiredConcepts) {
  if (!privacyCopy.toLowerCase().includes(concept.toLowerCase())) {
    fail(`Trust center copy missing required concept: ${concept}`);
  }
}

const dashboardCopy = fs.readFileSync(parentDashboardPath, 'utf8');
if (!dashboardCopy.includes('/(parent)/privacy')) {
  fail('Parent dashboard does not contain Trust & Privacy Center link/CTA');
}

const qaDocCopy = fs.readFileSync(qaDocPath, 'utf8');
const changedUiScope = `${privacyCopy}\n${dashboardCopy}\n${qaDocCopy}`.toLowerCase();
for (const phrase of forbiddenPhrases) {
  if (changedUiScope.includes(phrase.toLowerCase())) {
    fail(`Forbidden phrase found in changed UI/QA scope: ${phrase}`);
  }
}

console.log('✅ Parent Trust & Privacy Center v1 validator passed.');
