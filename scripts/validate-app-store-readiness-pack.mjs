#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exitCode = 1;
}

function ok(msg) {
  console.log(`✅ ${msg}`);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') inQuotes = true;
    else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n') {
      row.push(field);
      if (row.some((c) => c.trim() !== '')) rows.push(row);
      row = [];
      field = '';
    } else if (ch !== '\r') {
      field += ch;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((c) => c.trim() !== '')) rows.push(row);
  }

  const [header, ...body] = rows;
  return { header: header ?? [], body };
}

function read(rel) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) {
    fail(`Missing required file: ${rel}`);
    return null;
  }
  return fs.readFileSync(p, 'utf8');
}

const files = {
  pack: 'docs/APP_STORE_READINESS_PACK.md',
  metadata: 'docs/content/app-store-metadata-draft.csv',
  checklist: 'docs/content/app-store-readiness-checklist.csv',
  screenshots: 'docs/content/app-store-screenshot-plan.csv',
  risks: 'docs/content/app-store-known-risk-ledger.csv',
  packageJson: 'package.json'
};

const required = Object.values(files);
for (const file of required) read(file);

const csvSpecs = [
  { file: files.metadata, cols: ['metadataArea', 'draftValue', 'status', 'notes'], minRows: 15, statusCol: 'status', status: new Set(['draft', 'needs_owner_input', 'pending_manual_review', 'blocked']) },
  { file: files.checklist, cols: ['checklistArea', 'item', 'owner', 'requiredBefore', 'status', 'notes'], minRows: 15, statusCol: 'status', status: new Set(['not_started', 'in_progress', 'ready_for_review', 'pending_manual_review', 'blocked', 'done']) },
  { file: files.screenshots, cols: ['screenshotId', 'surface', 'purpose', 'requiredDevice', 'captureInstructions', 'status', 'notes'], minRows: 8, statusCol: 'status', status: new Set(['planned', 'pending_capture', 'captured', 'blocked']) },
  { file: files.risks, cols: ['riskId', 'riskArea', 'riskDescription', 'severity', 'mitigation', 'owner', 'status', 'notes'], minRows: 8, statusCol: 'status', status: new Set(['open', 'mitigated', 'accepted', 'blocked']) }
];

for (const spec of csvSpecs) {
  const { header, body } = parseCsv(read(spec.file));
  const missing = spec.cols.filter((c) => !header.includes(c));
  if (missing.length) fail(`${spec.file} missing columns: ${missing.join(', ')}`);
  else ok(`${spec.file} contains required columns.`);
  if (body.length < spec.minRows) fail(`${spec.file} has ${body.length} rows, expected at least ${spec.minRows}.`);
  else ok(`${spec.file} has ${body.length} rows (>= ${spec.minRows}).`);

  const statusIdx = header.indexOf(spec.statusCol);
  for (const [i, r] of body.entries()) {
    const value = (r[statusIdx] ?? '').trim();
    if (!spec.status.has(value)) fail(`${spec.file} row ${i + 2} has invalid status: ${value}`);
  }
}

const risks = parseCsv(read(files.risks));
const sevIdx = risks.header.indexOf('severity');
const allowedSeverity = new Set(['P0_blocker', 'P1_critical', 'P2_major', 'P3_minor']);
for (const [i, row] of risks.body.entries()) {
  const severity = (row[sevIdx] ?? '').trim();
  if (!allowedSeverity.has(severity)) fail(`Risk CSV row ${i + 2} has invalid severity: ${severity}`);
}

const packText = read(files.pack).toLowerCase();
const requiredPhrases = [
  'app store readiness pack', 'private beta', 'parent trust', 'child safety', 'privacy', 'local-first',
  'no runtime analytics', 'support/contact', 'screenshot capture plan', 'known-risk ledger', 'manual iphone qa', 'go/no-go', 'not app store approval'
];
for (const phrase of requiredPhrases) {
  if (!packText.includes(phrase)) fail(`Readiness pack missing phrase: ${phrase}`);
}

const forbidden = [
  'guaranteed learning', 'guaranteed behavior improvement', 'therapy', 'treatment', 'diagnosis', 'clinically proven',
  'certified safe', 'fully accessible', 'wcag compliant', 'app store approved', 'production-grade crash reporting',
  'production-grade analytics', 'cloud sync enabled', 'public community', 'leaderboard', 'streak pressure'
];
const metadataText = read(files.metadata).toLowerCase();
for (const phrase of forbidden) {
  if (packText.includes(phrase)) fail(`Forbidden phrase found in readiness pack: ${phrase}`);
  if (metadataText.includes(phrase)) fail(`Forbidden phrase found in metadata CSV: ${phrase}`);
}

const pkg = JSON.parse(read(files.packageJson));
const depText = JSON.stringify({ dependencies: pkg.dependencies ?? {}, devDependencies: pkg.devDependencies ?? {} }).toLowerCase();
if (depText.includes('app-store-readiness')) fail('package.json appears to include app-store-readiness dependency changes.');
else ok('package.json has no app-store-readiness dependency markers.');

if (process.exitCode) process.exit(process.exitCode);
console.log('✅ App Store readiness pack validation passed.');
