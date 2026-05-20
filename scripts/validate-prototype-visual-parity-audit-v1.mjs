#!/usr/bin/env node
import fs from 'node:fs';

const auditPath = 'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md';
if (!fs.existsSync(auditPath)) throw new Error('Missing audit doc: docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_AUDIT.md');
const audit = fs.readFileSync(auditPath, 'utf8');

const screens = ['App Entry','Onboarding','Child Home','Story World','Story Detail','Story Reader','Story Completion','Dharma Journeys','Journey Detail','Values','My Treasures'];
for (const screen of screens) {
  const sectionRegex = new RegExp(`##\\s+\\d+\\)\\s+${screen}[\\s\\S]*?(?=\\n##\\s+\\d+\\)|\\n---|$)`, 'i');
  const section = audit.match(sectionRegex)?.[0];
  if (!section) throw new Error(`Missing screen section: ${screen}`);
  for (const field of ['Implemented route/file:','Reference screen IDs:','Visual parity score:','What matches:','What does not match:','Required repair:','Repair priority:','Merge blocker:']) {
    if (!section.includes(field)) throw new Error(`Screen "${screen}" missing field: ${field}`);
  }
  const scoreMatch = section.match(/Visual parity score:\*\*\s+\*\*([1-5])\/5\*\*/);
  if (!scoreMatch) throw new Error(`Screen "${screen}" must have 1-5 visual parity score`);
  const score = Number(scoreMatch[1]);
  if (score < 4 && !/Repair priority:\*\*\s+\*\*P[0-2]\*\*/.test(section)) {
    throw new Error(`Screen "${screen}" scored below 4 but is missing repair priority`);
  }
}

if (!audit.includes('Scoring Definition') || !audit.includes('5** = almost same as prototype') || !audit.includes('1** = wrong screen')) {
  throw new Error('Scoring definition block missing or incomplete');
}
if (!/P0[\s\S]*P1[\s\S]*P2/.test(audit)) throw new Error('P0/P1/P2 priority definition missing');
if (!/Dharma Journeys[\s\S]*especially Screen 20/i.test(audit)) throw new Error('Dharma Journeys must explicitly map to Screen 20');
if (!/Sprint 81 status[\s\S]*not started/i.test(audit)) throw new Error('Audit must explicitly state Sprint 81 not started');
if (!/no backend\/auth\/cloud sync\/CMS\/analytics expansion, no audio\/mic\/voice command features, no hard gamification additions/i.test(audit)) {
  throw new Error('Audit must explicitly state no backend/audio/mic/voice command/hard gamification added');
}

console.log('validate-prototype-visual-parity-audit-v1: PASS');
