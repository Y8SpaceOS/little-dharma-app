#!/usr/bin/env node
import fs from 'node:fs';

const auditPath = 'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md';
const taskLogPath = 'docs/TASK_LOG.md';
if (!fs.existsSync(auditPath)) throw new Error('Missing audit doc');
if (!fs.existsSync(taskLogPath)) throw new Error('Missing TASK_LOG');

const audit = fs.readFileSync(auditPath, 'utf8');
const taskLog = fs.readFileSync(taskLogPath, 'utf8');

for (const screen of ['App Entry', 'Onboarding', 'Child Home', 'Story World']) {
  const section = audit.match(new RegExp(`##\\s+\\d+\\)\\s+${screen}[\\s\\S]*?(?=\\n##\\s+\\d+\\)|$)`))?.[0] ?? '';
  if (!section) throw new Error(`Missing section: ${screen}`);
  if (!section.includes('Previous score:** **3/5**')) throw new Error(`${screen} must keep previous score 3/5 reference`);
  if (!section.includes('Visual parity score:** **3/5**')) throw new Error(`${screen} must remain 3/5 until manual screenshot approval`);
  if (!section.includes('Merge blocker:** **yes**')) throw new Error(`${screen} must remain merge blocker yes while paused`);
}

if (!audit.includes('Prototype-led reconstruction workflow (PR #94 pause directive)')) throw new Error('Audit missing PR #94 pause workflow section');
for (const phrase of [
  'PR #94 is **paused** and must **not merge** in its current state',
  'extract design tokens and component anatomy from prototype HTML/reference screens',
  'reconstruct **Screen 01** first as the parity proof surface',
  'Visual parity score upgrades to 4/5+ are disallowed without manual screenshot confirmation'
]) {
  if (!audit.includes(phrase)) throw new Error(`Audit missing workflow phrase: ${phrase}`);
}

if (!taskLog.includes('PR #94 paused after manual QA parity failure')) throw new Error('TASK_LOG missing PR #94 pause append entry');

console.log('validate-prototype-visual-parity-repair-batch-1-v1: PASS (pause-mode)');
