import { readFileSync, existsSync } from 'node:fs';

const qaDocPath = 'docs/VRINDAVAN_WEEK1_CONTENT_QA.md';
const qaCsvPath = 'docs/content/vrindavan-week1-content-qa.csv';

const requiredColumns = [
  'storySlug',
  'storyTitle',
  'primaryValue',
  'contentLabelRecommendation',
  'sourceSensitivityTierRecommendation',
  'authenticityRisk',
  'parentTrustRisk',
  'childReadabilityRisk',
  'ritualQualityRisk',
  'pauseQualityRisk',
  'quizQualityRisk',
  'carryingWordFit',
  'recommendedAction',
  'qaStatus',
  'notes'
];

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

if (!existsSync(qaDocPath)) fail(`Missing required file: ${qaDocPath}`);
if (!existsSync(qaCsvPath)) fail(`Missing required file: ${qaCsvPath}`);

const csvRaw = readFileSync(qaCsvPath, 'utf8').trim();
if (!csvRaw) fail('CSV file is empty');

const lines = csvRaw.split(/\r?\n/).filter(Boolean);
if (lines.length < 2) fail('CSV must include header and at least one data row');

const headers = lines[0].split(',').map((column) => column.trim());
for (const required of requiredColumns) {
  if (!headers.includes(required)) fail(`Missing required CSV column: ${required}`);
}

const rows = lines.slice(1).map((line) => line.split(','));
if (rows.length < 7) fail(`Expected at least 7 QA rows, found ${rows.length}`);

const slugIndex = headers.indexOf('storySlug');
const statusIndex = headers.indexOf('qaStatus');
const actionIndex = headers.indexOf('recommendedAction');

rows.forEach((row, idx) => {
  const rowNumber = idx + 2;
  const storySlug = (row[slugIndex] || '').trim();
  const qaStatus = (row[statusIndex] || '').trim();
  const recommendedAction = (row[actionIndex] || '').trim();

  if (!storySlug) fail(`Row ${rowNumber} missing storySlug`);
  if (!qaStatus) fail(`Row ${rowNumber} missing qaStatus`);
  if (!recommendedAction) fail(`Row ${rowNumber} missing recommendedAction`);
});

console.log('✅ Vrindavan Week 1 QA artifacts validated successfully.');
