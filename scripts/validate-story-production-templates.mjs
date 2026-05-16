#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const requiredFiles = [
  'docs/CONTENT_PRODUCTION_PIPELINE.md',
  'docs/content/story-production-brief-template.md',
  'docs/CONTENT_DRAFTING_PROMPTS.md',
  'docs/content/story-production-batch-template.csv',
];

const requiredColumns = [
  'batchId',
  'baseStoryId',
  'targetAgeBand',
  'contentWorld',
  'primaryValue',
  'sourceSensitivityTier',
  'releasePhase',
  'productionStage',
  'assignedTo',
  'draftStatus',
  'authenticityReviewStatus',
  'parentTrustReviewStatus',
  'childReadabilityReviewStatus',
  'finalApprovalStatus',
  'notes',
];

let hasError = false;
for (const file of requiredFiles) {
  const absolute = resolve(file);
  if (!existsSync(absolute)) {
    console.error(`Missing required file: ${file}`);
    hasError = true;
  }
}

if (!hasError) {
  const csv = readFileSync(resolve('docs/content/story-production-batch-template.csv'), 'utf8').trim();
  const [headerLine] = csv.split('\n');
  const headers = headerLine.split(',').map((h) => h.trim());

  const missing = requiredColumns.filter((col) => !headers.includes(col));
  if (missing.length > 0) {
    console.error(`Missing required CSV columns: ${missing.join(', ')}`);
    hasError = true;
  }
}

if (hasError) {
  process.exit(1);
}

console.log('Story production template validation passed.');
