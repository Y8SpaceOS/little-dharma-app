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

const allowedContentLabels = new Set([
  'canonical_story',
  'traditional_retelling',
  'festival_cultural_context',
  'original_little_dharma_story',
  'everyday_values_story',
  'bedtime_reflection',
  'parent_child_ritual'
]);

const allowedSourceSensitivityTiers = new Set([
  'tier_1_canonical_sacred',
  'tier_2_traditional_retelling',
  'tier_3_cultural_festival',
  'tier_4_original_values',
  'tier_5_everyday_modern'
]);

const allowedQaStatuses = new Set([
  'ready_for_private_beta',
  'minor_revision_needed',
  'major_revision_needed',
  'blocked'
]);

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function parseCsvLine(line) {
  const cells = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      cells.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }

  cells.push(current.trim());
  return cells;
}

if (!existsSync(qaDocPath)) fail(`Missing required file: ${qaDocPath}`);
if (!existsSync(qaCsvPath)) fail(`Missing required file: ${qaCsvPath}`);

const csvRaw = readFileSync(qaCsvPath, 'utf8').trim();
if (!csvRaw) fail('CSV file is empty');

const lines = csvRaw.split(/\r?\n/).filter(Boolean);
if (lines.length < 2) fail('CSV must include header and at least one data row');

const headers = parseCsvLine(lines[0]);
for (const required of requiredColumns) {
  if (!headers.includes(required)) fail(`Missing required CSV column: ${required}`);
}

const rows = lines.slice(1).map(parseCsvLine);
if (rows.length < 7) fail(`Expected at least 7 QA rows, found ${rows.length}`);

const slugIndex = headers.indexOf('storySlug');
const statusIndex = headers.indexOf('qaStatus');
const actionIndex = headers.indexOf('recommendedAction');
const labelIndex = headers.indexOf('contentLabelRecommendation');
const tierIndex = headers.indexOf('sourceSensitivityTierRecommendation');

rows.forEach((row, idx) => {
  const rowNumber = idx + 2;
  const storySlug = row[slugIndex] || '';
  const qaStatus = row[statusIndex] || '';
  const recommendedAction = row[actionIndex] || '';
  const contentLabel = row[labelIndex] || '';
  const sourceTier = row[tierIndex] || '';

  if (!storySlug) fail(`Row ${rowNumber} missing storySlug`);
  if (!qaStatus) fail(`Row ${rowNumber} missing qaStatus`);
  if (!recommendedAction) fail(`Row ${rowNumber} missing recommendedAction`);

  if (!allowedContentLabels.has(contentLabel)) {
    fail(`Row ${rowNumber} has invalid contentLabelRecommendation: ${contentLabel}`);
  }

  if (!allowedSourceSensitivityTiers.has(sourceTier)) {
    fail(`Row ${rowNumber} has invalid sourceSensitivityTierRecommendation: ${sourceTier}`);
  }

  if (!allowedQaStatuses.has(qaStatus)) {
    fail(`Row ${rowNumber} has invalid qaStatus: ${qaStatus}`);
  }
});

console.log('✅ Vrindavan Week 1 QA artifacts validated successfully.');
