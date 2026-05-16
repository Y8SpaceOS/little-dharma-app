import { existsSync, readFileSync } from 'node:fs';

const architectureDocPath = 'docs/VRINDAVAN_WEEK2_CONTENT_ARCHITECTURE.md';
const architectureCsvPath = 'docs/content/vrindavan-week2-content-architecture.csv';

const requiredColumns = [
  'plannedStoryNumber',
  'futureSlug',
  'workingTitle',
  'primaryValue',
  'supportingValue',
  'contentLabel',
  'sourceSensitivityTier',
  'sourceSummary',
  'parentSourceNote',
  'authenticityRisk',
  'storyObjective',
  'storyArc',
  'panelsOrBeats',
  'ritualTitle',
  'ritualPhrase',
  'pausePrompt',
  'quizQuestion',
  'quizAnswerDirection',
  'carryingWord',
  'badgeOrTreasure',
  'parentMirrorPrompt',
  'bedtimeReflection',
  'productionStatus',
  'qaNotes'
];

const requiredNonEmptyFields = [
  'futureSlug',
  'workingTitle',
  'primaryValue',
  'contentLabel',
  'sourceSensitivityTier',
  'carryingWord',
  'productionStatus'
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

const allowedProductionStatuses = new Set([
  'selected',
  'brief_created',
  'drafted',
  'authenticity_review',
  'parent_trust_review',
  'child_readability_review',
  'revision_needed',
  'approved_for_runtime_handoff',
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

if (!existsSync(architectureDocPath)) fail(`Missing required file: ${architectureDocPath}`);
if (!existsSync(architectureCsvPath)) fail(`Missing required file: ${architectureCsvPath}`);

const csvRaw = readFileSync(architectureCsvPath, 'utf8').trim();
if (!csvRaw) fail('CSV file is empty');

const lines = csvRaw.split(/\r?\n/).filter(Boolean);
if (lines.length < 2) fail('CSV must include header and at least one row');

const headers = parseCsvLine(lines[0]);
for (const col of requiredColumns) {
  if (!headers.includes(col)) fail(`Missing required CSV column: ${col}`);
}

const rows = lines.slice(1).map(parseCsvLine);
if (rows.length !== 7) fail(`Expected exactly 7 story rows, found ${rows.length}`);

const indexOf = (name) => headers.indexOf(name);

rows.forEach((row, idx) => {
  const rowNumber = idx + 2;

  for (const field of requiredNonEmptyFields) {
    const value = row[indexOf(field)] || '';
    if (!value) fail(`Row ${rowNumber} missing required value: ${field}`);
  }

  const contentLabel = row[indexOf('contentLabel')] || '';
  if (!allowedContentLabels.has(contentLabel)) {
    fail(`Row ${rowNumber} has invalid contentLabel: ${contentLabel}`);
  }

  const sourceTier = row[indexOf('sourceSensitivityTier')] || '';
  if (!allowedSourceSensitivityTiers.has(sourceTier)) {
    fail(`Row ${rowNumber} has invalid sourceSensitivityTier: ${sourceTier}`);
  }

  const productionStatus = row[indexOf('productionStatus')] || '';
  if (!allowedProductionStatuses.has(productionStatus)) {
    fail(`Row ${rowNumber} has invalid productionStatus: ${productionStatus}`);
  }
});

console.log('✅ Vrindavan Week 2 content architecture artifacts validated successfully.');
