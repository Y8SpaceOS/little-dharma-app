#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const mustHave = [
  'src/design/visualSystem.ts',
  'docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_V1_QA.md',
  'app/(child)/today.tsx',
  'app/(child)/worlds.tsx',
  'app/story/[slug].tsx',
  'app/world/[slug].tsx'
];

for (const file of mustHave) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const visualSystem = fs.readFileSync('src/design/visualSystem.ts', 'utf8');
for (const token of ['saffron', 'cream', 'lotus', 'sky', 'leaf', 'diya', 'warmBrown', 'roundedCard', 'parentTrustNoteCard', 'luvluBubble', 'emptyStateCard']) {
  if (!visualSystem.includes(token)) throw new Error(`visualSystem missing: ${token}`);
}

const today = fs.readFileSync('app/(child)/today.tsx', 'utf8');
const worlds = fs.readFileSync('app/(child)/worlds.tsx', 'utf8');
if (!today.includes('visualStyles.softSectionHeader')) throw new Error('Child Home missing visual system section header usage');
if (!today.includes('Parent trust note')) throw new Error('Child Home missing parent-trust runtime copy');
if (!worlds.includes('visualStyles.chip')) throw new Error('Story World missing chip runtime integration');
if (!worlds.includes('Story World')) throw new Error('Story World heading missing');

const story = fs.readFileSync('app/story/[slug].tsx', 'utf8');
if (!story.includes('visualStyles.roundedCard')) throw new Error('Story detail missing rounded card integration');
if (!story.includes('Luvlu')) throw new Error('Story detail missing Luvlu copy');

const qa = fs.readFileSync('docs/LITTLE_DHARMA_PROTOTYPE_VISUAL_PARITY_V1_QA.md', 'utf8');
for (const phrase of ['implemented this sprint', 'Prototype mapping', 'Remaining parity gaps']) {
  if (!qa.includes(phrase)) throw new Error(`QA doc missing section phrase: ${phrase}`);
}

const queuePath = path.resolve('docs/MASTER_SPRINT_QUEUE.md');
const queue = fs.readFileSync(queuePath, 'utf8');
const sprint76Section = queue.match(/### Sprint 76 —[\s\S]*?(?=\n### Sprint 77 —|\n### Sprints )/);
if (!sprint76Section) throw new Error('MASTER_SPRINT_QUEUE missing Sprint 76 section');
const sprint76StatusLines = sprint76Section[0].match(/- \*\*Status:\*\* .+/g) ?? [];
if (sprint76StatusLines.length !== 1) throw new Error(`Sprint 76 must have exactly one status line, found ${sprint76StatusLines.length}`);
if (sprint76StatusLines[0].trim() !== '- **Status:** done') throw new Error('Sprint 76 status must be exactly "- **Status:** done"');

for (let sprint = 77; sprint <= 150; sprint += 1) {
  const section = queue.match(new RegExp(`### Sprint ${sprint} —[\\s\\S]*?(?=\\n### Sprint ${sprint + 1} —|\\n### Sprints |$)`));
  if (!section) continue;
  const statuses = section[0].match(/- \*\*Status:\*\* .+/g) ?? [];
  if (!statuses.includes('- **Status:** not started')) {
    throw new Error(`Sprint ${sprint} must remain "- **Status:** not started"`);
  }
}

const csvRaw = fs.readFileSync('docs/content/post-foundation-product-build-roadmap.csv', 'utf8').trim().split(/\r?\n/);
const header = csvRaw[0].split(',');
const sprintIdx = header.indexOf('sprintNumber');
const statusIdx = header.indexOf('status');
if (sprintIdx === -1 || statusIdx === -1) throw new Error('Roadmap CSV missing sprintNumber/status columns');

const sprintCounts = new Map();
let found76 = false;
for (const rowText of csvRaw.slice(1)) {
  const row = rowText.split(',');
  const sprint = Number(row[sprintIdx]);
  const status = row[statusIdx];
  sprintCounts.set(sprint, (sprintCounts.get(sprint) ?? 0) + 1);
  if (sprint === 76) {
    found76 = true;
    if (status !== 'done') throw new Error('Sprint 76 row in roadmap CSV must be done');
  }
  if (sprint >= 77 && sprint <= 150 && status !== 'not_started') {
    throw new Error(`Sprint ${sprint} row in roadmap CSV must remain not_started`);
  }
}
if (!found76) throw new Error('Roadmap CSV missing Sprint 76 row');
for (const [sprint, count] of sprintCounts.entries()) {
  if (count > 1) throw new Error(`Duplicate sprint row in roadmap CSV: sprint ${sprint} appears ${count} times`);
}

console.log('validate-prototype-visual-parity-foundation-v1: PASS');
