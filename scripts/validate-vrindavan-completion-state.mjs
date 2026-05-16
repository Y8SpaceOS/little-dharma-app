import { readFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';

const qaDocPath = 'docs/VRINDAVAN_21_DAY_COMPLETION_QA.md';
const qaCsvPath = 'docs/content/vrindavan-21-day-completion-qa.csv';
const completionCopyFiles = ['app/(child)/today.tsx', 'src/services/progress.ts', 'app/(parent)/dashboard.tsx'];
const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatus = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const forbiddenPhrases = ['break your streak', 'better than others', 'must continue', 'bad child', 'failed', 'prove completion'];

const fail = (m) => { console.error(`❌ ${m}`); process.exit(1); };

await access(qaDocPath, constants.F_OK).catch(() => fail(`${qaDocPath} is missing`));
await access(qaCsvPath, constants.F_OK).catch(() => fail(`${qaCsvPath} is missing`));

const qaDoc = (await readFile(qaDocPath, 'utf8')).toLowerCase();
for (const phrase of forbiddenPhrases) {
  if (qaDoc.includes(phrase)) fail(`Forbidden phrase "${phrase}" found in ${qaDocPath}`);
}

const csv = await readFile(qaCsvPath, 'utf8');
const lines = csv.split(/\r?\n/).filter((line) => line.trim().length > 0);
if (lines.length < 2) fail('QA CSV must include a header and data rows');

const headers = lines[0].split(',').map((x) => x.trim());
for (const col of requiredColumns) {
  if (!headers.includes(col)) fail(`Missing required CSV column: ${col}`);
}

const rows = lines.slice(1).map((line) => line.split(',').map((x) => x.trim()));
if (rows.length < 10) fail(`QA CSV must include at least 10 rows; found ${rows.length}`);

const indexOf = Object.fromEntries(requiredColumns.map((c) => [c, headers.indexOf(c)]));
rows.forEach((row, idx) => {
  const rowNum = idx + 2;
  for (const col of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    if (!row[indexOf[col]]) fail(`Row ${rowNum} is missing required field: ${col}`);
  }
  if (!allowedStatus.has(row[indexOf.status])) {
    fail(`Row ${rowNum} has invalid status: ${row[indexOf.status]}`);
  }
});

for (const file of completionCopyFiles) {
  const body = (await readFile(file, 'utf8')).toLowerCase();
  for (const phrase of forbiddenPhrases) {
    if (body.includes(phrase)) fail(`Forbidden phrase "${phrase}" found in ${file}`);
  }
}

console.log('✅ Vrindavan completion-state QA artifacts are valid.');
