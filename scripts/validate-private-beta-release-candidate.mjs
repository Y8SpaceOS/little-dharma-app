#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exitCode = 1;
}
function ok(msg) { console.log(`✅ ${msg}`); }

function readFile(rel) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    fail(`Missing required file: ${rel}`);
    return '';
  }
  return fs.readFileSync(abs, 'utf8');
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
      if (ch === '"' && next === '"') { field += '"'; i += 1; }
      else if (ch === '"') inQuotes = false;
      else field += ch;
      continue;
    }
    if (ch === '"') inQuotes = true;
    else if (ch === ',') { row.push(field); field = ''; }
    else if (ch === '\n') {
      row.push(field);
      if (row.some((c) => c.trim() !== '')) rows.push(row);
      row = []; field = '';
    } else if (ch !== '\r') field += ch;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((c) => c.trim() !== '')) rows.push(row);
  }
  const [header = [], ...body] = rows;
  return { header, body };
}

const report = 'docs/PRIVATE_BETA_RELEASE_CANDIDATE_REPORT.md';
const gateCsv = 'docs/content/private-beta-rc-gate-checklist.csv';
const autoCsv = 'docs/content/private-beta-rc-automated-checks-ledger.csv';
const blockerCsv = 'docs/content/private-beta-rc-blocker-log.csv';
const manualCsv = 'docs/content/private-beta-rc-manual-qa-evidence-template.csv';
const queueFile = 'docs/MASTER_SPRINT_QUEUE.md';

[report, gateCsv, autoCsv, blockerCsv, manualCsv, queueFile].forEach(readFile);

function validateCsv(file, requiredCols, minRows) {
  const { header, body } = parseCsv(readFile(file));
  const missing = requiredCols.filter((c) => !header.includes(c));
  if (missing.length) fail(`${file} missing columns: ${missing.join(', ')}`);
  else ok(`${file} has required columns.`);
  if (body.length < minRows) fail(`${file} needs at least ${minRows} rows, found ${body.length}`);
  else ok(`${file} has ${body.length} rows.`);
  return { header, body };
}

const gate = validateCsv(gateCsv, ['gateArea','gateItem','evidenceSource','requiredFor','status','owner','notes'], 20);
const auto = validateCsv(autoCsv, ['checkName','command','required','expectedResult','status','notes'], 20);
const blocker = validateCsv(blockerCsv, ['blockerId','blockerArea','blockerDescription','severity','owner','status','releaseImpact','notes'], 8);
const manual = validateCsv(manualCsv, ['runId','date','tester','device','osVersion','buildSource','flow','result','issueSeverity','evidenceRef','notes'], 12);

function checkEnum({ header, body }, col, allowed, file) {
  const idx = header.indexOf(col);
  for (let i = 0; i < body.length; i += 1) {
    const v = (body[i][idx] ?? '').trim();
    if (!allowed.has(v)) fail(`${file} row ${i + 2} invalid ${col}: ${v}`);
  }
}

checkEnum(gate, 'status', new Set(['pass','pending_manual_qa','pending_owner_review','blocked','accepted_risk']), gateCsv);
checkEnum(auto, 'status', new Set(['pass','pending_run','failed','blocked']), autoCsv);
checkEnum(blocker, 'status', new Set(['open','mitigated','accepted','not_applicable']), blockerCsv);
checkEnum(manual, 'result', new Set(['pass','fail','blocked','not_run']), manualCsv);
checkEnum(manual, 'issueSeverity', new Set(['none','P0_blocker','P1_critical','P2_major','P3_minor']), manualCsv);
checkEnum(blocker, 'severity', new Set(['P0_blocker','P1_critical','P2_major','P3_minor']), blockerCsv);

const reportText = readFile(report).toLowerCase();
['private beta release candidate','conditional no-go','manual iphone qa','automated checks','parent trust','safety/privacy','content readiness','no runtime analytics','no backend/cloud sync','app store readiness','known blockers','go/no-go','not production readiness'].forEach((p)=>{
  if (!reportText.includes(p)) fail(`Report missing required phrase: ${p}`);
});
['release approved','app store approved','production ready','fully accessible','wcag compliant','legally approved','privacy certified','all bugs resolved','guaranteed learning','guaranteed behavior improvement','therapy','treatment','diagnosis','child performance score','leaderboard','streak pressure'].forEach((p)=>{
  if (reportText.includes(p)) fail(`Report contains forbidden overclaim phrase: ${p}`);
});

function extractSprintSection(queueText, sprintNumber, sprintTitle) {
  const heading = `### Sprint ${sprintNumber} — ${sprintTitle}`;
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(^|\\n)${escapedHeading}\\n([\\s\\S]*?)(?=\\n### Sprint \\d+ — |$)`);
  const match = queueText.match(pattern);
  if (!match) return '';
  return `${heading}\n${match[2]}`;
}

const queueText = readFile(queueFile);
const sprint60Section = extractSprintSection(queueText, 60, 'Private Beta Release Candidate');
if (!sprint60Section) fail('MASTER_SPRINT_QUEUE missing Sprint 60 section.');
if (sprint60Section && !sprint60Section.includes('- **Status:** done')) {
  fail('MASTER_SPRINT_QUEUE must mark Sprint 60 done inside Sprint 60 section.');
}

const sprint61Section = extractSprintSection(queueText, 61, 'Private Beta Sprint 61: Retention Experiments');
if (!sprint61Section) fail('MASTER_SPRINT_QUEUE missing Sprint 61 section.');
if (sprint61Section && !sprint61Section.includes('- **Status:** not started')) {
  fail('Sprint 61 must remain not started inside Sprint 61 section.');
}
if (!queueText.includes('Sprint 14 — Test Harness Reliability and Coverage Targets:** not completed; deferred intentionally.')) fail('Sprint 14 deferred note missing.');
if (!queueText.includes('Sprint 15 — Developer Environment Bootstrap Guide:** not completed; deferred intentionally.')) fail('Sprint 15 deferred note missing.');

if (process.exitCode) process.exit(process.exitCode);
console.log('✅ Private beta release candidate validation passed.');
