import { existsSync, readFileSync } from 'node:fs';

const qaDoc = 'docs/PARENT_FEEDBACK_CAPTURE_V1_QA.md';
const qaCsvPath = 'docs/content/parent-feedback-capture-v1-qa.csv';
const feedbackRoutePath = 'app/(parent)/feedback.tsx';
const dashboardPath = 'app/(parent)/dashboard.tsx';
const packageLockPath = 'package-lock.json';

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatuses = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const forbiddenPhrases = [
  'tracked automatically','we monitor your child','public review','share with community','rank this child','performance score','send child data','upload child profile','viral','leaderboard','streak','limited time','mandatory'
];

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') {
        value += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(value);
      value = '';
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(value);
      if (row.some((cell) => cell.trim().length > 0)) rows.push(row);
      row = [];
      value = '';
    } else {
      value += ch;
    }
  }
  if (value.length > 0 || row.length > 0) {
    row.push(value);
    if (row.some((cell) => cell.trim().length > 0)) rows.push(row);
  }
  return rows;
}

if (!existsSync(qaDoc)) fail(`${qaDoc} does not exist.`);
if (!existsSync(qaCsvPath)) fail(`${qaCsvPath} does not exist.`);
if (!existsSync(feedbackRoutePath)) fail(`${feedbackRoutePath} does not exist.`);

const csvRows = parseCsv(readFileSync(qaCsvPath, 'utf8'));
if (csvRows.length < 2) fail('QA CSV must include header and rows.');

const header = csvRows[0];
requiredColumns.forEach((col) => {
  if (!header.includes(col)) fail(`Missing required CSV column: ${col}`);
});

const dataRows = csvRows.slice(1).map((row) => Object.fromEntries(header.map((key, idx) => [key, (row[idx] ?? '').trim()])));
if (dataRows.length < 14) fail('QA CSV must include at least 14 QA rows.');

for (const row of dataRows) {
  if (!row.qaArea || !row.surface || !row.expectedBehavior || !row.status) {
    fail('Each QA row must include qaArea, surface, expectedBehavior, and status.');
  }
  if (!allowedStatuses.has(row.status)) {
    fail(`Invalid status value: ${row.status}`);
  }
}

const dashboardSource = readFileSync(dashboardPath, 'utf8').toLowerCase();
if (!dashboardSource.includes('feedback')) fail('Parent dashboard must contain feedback link/CTA.');

const feedbackSource = readFileSync(feedbackRoutePath, 'utf8').toLowerCase();
['feedback', 'parent', 'local', 'optional', 'sensitive child information'].forEach((concept) => {
  if (!feedbackSource.includes(concept)) fail(`Feedback route missing concept: ${concept}`);
});
if (!feedbackSource.includes('routeerrorboundary')) fail('Feedback route must reference RouteErrorBoundary.');
if (!feedbackSource.includes('accessibilityrole') && !feedbackSource.includes('accessibilitylabel') && !feedbackSource.includes('accessibilityhint')) {
  fail('Feedback route must include accessibility-related props.');
}

const qaDocSource = readFileSync(qaDoc, 'utf8').toLowerCase();
for (const phrase of forbiddenPhrases) {
  if (feedbackSource.includes(phrase) || qaDocSource.includes(phrase)) {
    fail(`Forbidden phrase found: ${phrase}`);
  }
}

if (existsSync(packageLockPath)) {
  const lockSource = readFileSync(packageLockPath, 'utf8');
  if (lockSource.includes('"resolved": "http') && lockSource.includes('parent-feedback-capture-v1')) {
    fail('Unexpected dependency change detected.');
  }
}

console.log('✅ Parent Feedback Capture v1 validator passed.');
