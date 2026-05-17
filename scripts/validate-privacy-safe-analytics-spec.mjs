#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const specPath = path.join(root, 'docs/PRIVACY_SAFE_ANALYTICS_SPEC.md');
const taxonomyPath = path.join(root, 'docs/content/privacy-safe-event-taxonomy.csv');
const qaPath = path.join(root, 'docs/content/privacy-safe-analytics-spec-qa.csv');
const pkgPath = path.join(root, 'package.json');

const requiredTaxonomyColumns = [
  'eventName','eventCategory','purpose','allowedFields','forbiddenFields','consentRequired','implementationStatus','riskLevel','notes',
];
const requiredQaColumns = ['qaArea','expectedBehavior','status','notes'];
const allowedImplementationStatus = new Set(['proposed_only','blocked_until_privacy_review','prohibited']);
const allowedRiskLevel = new Set(['low','medium','high','prohibited']);
const allowedQaStatus = new Set(['pass','pending_manual_review','minor_issue','blocked']);

const requiredSpecTerms = [
  'no runtime instrumentation','no analytics sdk','no backend telemetry','parent trust','child safety','data minimization','consent','retention','vendor','dark-pattern',
];
const prohibitedConceptTerms = [
  'child identity tracking','free-text feedback contents','raw story reflections','device fingerprinting','advertising identifiers','location tracking','performance scoring','leaderboard',
];

const blockedVendors = ['amplitude','mixpanel','segment','posthog','firebase','google-analytics','sentry'];
const runtimeFiles = [
  'app/(child)/today.tsx','app/story/[slug].tsx','app/(child)/treasures.tsx','app/(parent)/dashboard.tsx','app/(parent)/privacy.tsx','app/(parent)/feedback.tsx',
];

function fail(msg) { console.error(`❌ ${msg}`); process.exit(1); }
function ok(msg) { console.log(`✅ ${msg}`); }

function ensureFileExists(filePath) {
  if (!fs.existsSync(filePath)) fail(`Missing required file: ${path.relative(root, filePath)}`);
}

function parseCsv(content) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < content.length; i += 1) {
    const ch = content[i];
    const next = content[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') { field += '"'; i += 1; }
      else { inQuotes = !inQuotes; }
    } else if (ch === ',' && !inQuotes) { row.push(field); field = ''; }
    else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i += 1;
      row.push(field); field = '';
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
    } else { field += ch; }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); if (row.some((cell) => cell.length > 0)) rows.push(row); }
  if (inQuotes) fail('CSV parse error: unmatched quote');
  return rows;
}

function toObjects(rows, requiredCols, label) {
  if (!rows.length) fail(`${label} CSV is empty`);
  const headers = rows[0].map((h) => h.trim());
  for (const col of requiredCols) if (!headers.includes(col)) fail(`${label} missing required column: ${col}`);
  return rows.slice(1).map((r) => Object.fromEntries(headers.map((h, i) => [h, (r[i] ?? '').trim()])));
}

ensureFileExists(specPath); ensureFileExists(taxonomyPath); ensureFileExists(qaPath); ensureFileExists(pkgPath);
ok('Required spec and CSV files exist');

const spec = fs.readFileSync(specPath, 'utf8').toLowerCase();
for (const term of requiredSpecTerms) if (!spec.includes(term)) fail(`Spec missing required term: ${term}`);
for (const term of prohibitedConceptTerms) if (!spec.includes(term)) fail(`Spec missing prohibited concept term: ${term}`);
ok('Spec contains required policy language');

const taxonomyRows = toObjects(parseCsv(fs.readFileSync(taxonomyPath, 'utf8')), requiredTaxonomyColumns, 'taxonomy');
const qaRows = toObjects(parseCsv(fs.readFileSync(qaPath, 'utf8')), requiredQaColumns, 'qa');

if (taxonomyRows.length < 20) fail(`Taxonomy requires at least 20 rows, found ${taxonomyRows.length}`);
const proposedCount = taxonomyRows.filter((r) => r.implementationStatus === 'proposed_only').length;
const prohibitedCount = taxonomyRows.filter((r) => r.implementationStatus === 'prohibited').length;
const blockedCount = taxonomyRows.filter((r) => r.implementationStatus === 'blocked_until_privacy_review').length;
if (proposedCount < 12) fail(`Need at least 12 proposed_only rows, found ${proposedCount}`);
if (prohibitedCount < 6) fail(`Need at least 6 prohibited rows, found ${prohibitedCount}`);
if (blockedCount < 2) fail(`Need at least 2 blocked_until_privacy_review rows, found ${blockedCount}`);

for (const row of taxonomyRows) {
  if (!allowedImplementationStatus.has(row.implementationStatus)) fail(`Invalid implementationStatus: ${row.implementationStatus}`);
  if (!allowedRiskLevel.has(row.riskLevel)) fail(`Invalid riskLevel: ${row.riskLevel}`);
}
ok('Taxonomy row counts and enums are valid');

for (const row of qaRows) if (!allowedQaStatus.has(row.status)) fail(`Invalid QA status: ${row.status}`);
ok('QA CSV enums are valid');

const pkg = fs.readFileSync(pkgPath, 'utf8').toLowerCase();
for (const vendor of blockedVendors) {
  if (pkg.includes(`"${vendor}"`) || pkg.includes(`${vendor}/`)) fail(`Blocked analytics dependency detected in package.json: ${vendor}`);
}
ok('No blocked analytics dependencies found in package.json');

for (const rel of runtimeFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) continue;
  const content = fs.readFileSync(full, 'utf8').toLowerCase();
  for (const vendor of blockedVendors) if (content.includes(vendor)) fail(`Blocked vendor reference found in runtime file ${rel}: ${vendor}`);
}
ok('No blocked vendor references found in runtime files');

ok('Privacy-safe analytics spec validation passed');
