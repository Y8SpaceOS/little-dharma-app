#!/usr/bin/env node
import fs from 'node:fs';

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

console.log('validate-prototype-visual-parity-foundation-v1: PASS');
