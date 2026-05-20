#!/usr/bin/env node
import fs from 'node:fs';

const reqFiles = ['app/index.tsx', 'app/onboarding.tsx', 'app/(child)/today.tsx', 'app/(child)/worlds.tsx', 'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md', 'docs/TASK_LOG.md'];
for (const f of reqFiles) if (!fs.existsSync(f)) throw new Error(`Missing required file: ${f}`);

const index = fs.readFileSync('app/index.tsx', 'utf8');
for (const token of ['Begin Little Dharma', 'Reset Onboarding (Local QA)', 'Luvlu guide', '🪔', '🌸', '☀️', '☁️', '🍃']) if (!index.includes(token)) throw new Error(`app/index.tsx missing visual marker: ${token}`);

const onboarding = fs.readFileSync('app/onboarding.tsx', 'utf8');
for (const token of ['Choose child age band, not exact DOB', 'Local-first / privacy-safe trust', 'Luvlu helper', '🪔', '🌸', '☀️']) if (!onboarding.includes(token)) throw new Error(`app/onboarding.tsx missing required marker: ${token}`);

const today = fs.readFileSync('app/(child)/today.tsx', 'utf8');
for (const token of ['Choose your path', 'Story World doorway', 'Luvlu helper bubble', '☁️', '🍃']) if (!today.includes(token)) throw new Error(`app/(child)/today.tsx missing required marker: ${token}`);

const worlds = fs.readFileSync('app/(child)/worlds.tsx', 'utf8');
for (const token of ['Story World', 'Choose a doorway', 'Enter this doorway', 'Krishna Stories', 'Ganesha Stories', 'Ramayana Journey', 'Hanuman Stories', 'Bedtime Stories', 'Values Stories', 'Festival Stories']) if (!worlds.includes(token)) throw new Error(`app/(child)/worlds.tsx missing required marker: ${token}`);

const audit = fs.readFileSync('docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md', 'utf8');
for (const screen of ['App Entry', 'Onboarding', 'Child Home', 'Story World']) {
  const section = audit.match(new RegExp(`##\\s+\\d+\\)\\s+${screen}[\\s\\S]*?(?=\\n##\\s+\\d+\\)|$)`))?.[0] ?? '';
  if (!section.includes('Previous score:** **3/5**')) throw new Error(`${screen} section missing previous score 3/5`);
  if (!section.includes('Visual parity score:** **4/5**')) throw new Error(`${screen} section missing updated 4/5 score`);
  if (!section.includes('Merge blocker:** **no**')) throw new Error(`${screen} section must be merge blocker no`);
}
for (const screen of ['Story Detail', 'Story Reader', 'Story Completion', 'Dharma Journeys', 'Journey Detail', 'Values', 'My Treasures']) {
  const section = audit.match(new RegExp(`##\\s+\\d+\\)\\s+${screen}[\\s\\S]*?(?=\\n##\\s+\\d+\\)|$)`))?.[0] ?? '';
  if (!section || section.includes('Visual parity score:** **4/5**') || section.includes('Visual parity score: **4/5**') || section.includes('Visual parity score:** **5/5**') || section.includes('Visual parity score: **5/5**')) throw new Error(`${screen} must remain below 4/5 in this batch`);
}

const globalChecks = ['Sprint 81 status in this audit: **not started**', 'no backend/auth/cloud sync/CMS/analytics expansion, no audio/mic/voice command features, no hard gamification additions'];
for (const phrase of globalChecks) if (!audit.includes(phrase)) throw new Error(`Audit missing guardrail phrase: ${phrase}`);

const taskLog = fs.readFileSync('docs/TASK_LOG.md', 'utf8');
if (!taskLog.includes('Sprint 80B Prototype Visual Parity Repair Batch 1')) throw new Error('TASK_LOG missing Sprint 80B append entry');

console.log('validate-prototype-visual-parity-repair-batch-1-v1: PASS');
