#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const PASS = 'PASS';
const WARN = 'WARN';
const FAIL = 'FAIL';
const checks = [];

const add = (s, m) => checks.push({ s, m });
const resolve = (p) => path.join(root, p);
const exists = (p) => fs.existsSync(resolve(p));
const read = (p) => fs.readFileSync(resolve(p), 'utf8');

const seed = 'src/data/seed/krishnaChildhoodPack1.ts';
const registry = 'src/data/krishnaChildhoodPack1Registry.ts';
const docs = 'docs/content/KRISHNA_CHILDHOOD_PACK_1.md';
const contentRegistry = 'src/data/contentRegistry.ts';
const vrindavanSeed = 'src/data/seed/vrindavan.ts';

[seed, registry, docs, contentRegistry, vrindavanSeed].forEach((f) => add(exists(f) ? PASS : FAIL, `${f} exists`));

const seedText = exists(seed) ? read(seed) : '';
const regText = exists(registry) ? read(registry) : '';
const docsText = exists(docs) ? read(docs) : '';
const crText = exists(contentRegistry) ? read(contentRegistry) : '';
const vrindavanText = exists(vrindavanSeed) ? read(vrindavanSeed) : '';

add(/krishnaChildhoodPack1Stories/.test(crText) && /krishnaChildhoodPack1StoryPack/.test(crText) && /krishnaChildhoodPack1Journey/.test(crText) ? PASS : FAIL, 'Content registry imports/uses Krishna Childhood Pack 1');

const storyCount = (seedText.match(/status:\s*'(qa_ready|runtime_ready|available)'/g) || []).length;
add(storyCount >= 3 && storyCount <= 5 ? PASS : FAIL, `Krishna story count between 3 and 5 (found ${storyCount})`);

const requiredFields = ['id', 'slug', 'title', 'shortTitle', 'summary', 'sourceTradition', 'sourceTextOrTraditionNote', 'storyPackId', 'journeyId', 'journeyOrder', 'ageBands', 'recommendedAgeBand', 'durationMinutes', 'primaryValue', 'secondaryValues', 'characters', 'panels', 'parentNote', 'reflectionPrompt', 'ritualPrompt', 'completionBlessing', 'sacredRespectLevel', 'illustrationPrompt', 'audioMetadata', 'status'];
for (const field of requiredFields) add(seedText.includes(`${field}:`) ? PASS : FAIL, `Required field present in seed: ${field}`);

add((seedText.match(/parentNote:/g) || []).length === storyCount ? PASS : FAIL, 'All stories include parentNote');
add((seedText.match(/illustrationPrompt:/g) || []).length === storyCount ? PASS : FAIL, 'All stories include illustrationPrompt');
add((seedText.match(/noMicRequired:\s*true/g) || []).length === storyCount ? PASS : FAIL, 'All stories include audioMetadata.noMicRequired true');
add((seedText.match(/sacredRespectLevel:/g) || []).length === storyCount ? PASS : FAIL, 'All stories include sacredRespectLevel');
add(!/storyPackId:\s*'((?!krishna-childhood-pack-1).)*'/.test(seedText) ? PASS : FAIL, 'All stories use storyPackId krishna-childhood-pack-1');
add(!/journeyId:\s*'((?!krishna-childhood-pack-1).)*'/.test(seedText) ? PASS : FAIL, 'All stories use journeyId krishna-childhood-pack-1');
add(/category:\s*'krishna'/.test(regText) ? PASS : FAIL, 'Story pack category is krishna');
add(/id:\s*'krishna-childhood-pack-1'/.test(regText) && /krishnaChildhoodPack1Journey/.test(regText) ? PASS : FAIL, 'Journey exists for krishna-childhood-pack-1');

const bannedGamification = /\b(xp|coins|streaks|leaderboards|rankings)\b/i;
add(!bannedGamification.test(seedText) ? PASS : FAIL, 'No hard gamification terms in Krishna stories');
add(!/Story Library/i.test(seedText + docsText + crText) ? PASS : FAIL, 'No Story Library regression');
const panelTexts = [...seedText.matchAll(/text:\s*'([^']+)'/g)].map((m) => m[1]).join('\n');
const unsafePanelLanguage = /violence|blood|attack|monster|terrifying|fearful miracle|punishment-heavy|shame-heavy|humiliation/i;
add(!unsafePanelLanguage.test(panelTexts) ? PASS : FAIL, 'No violence/fear-heavy miracle/shame-heavy parenting language in Krishna panels');
const prankHeavy = /trick everyone|prank|mischief for laughs|tease until crying/i;
add(!prankHeavy.test(seedText) ? PASS : FAIL, 'No prank-heavy or mischief-without-values framing');
const comedicDeity = /silly deity|joke god|cartoon god|clown deity/i;
add(!comedicDeity.test(seedText) ? PASS : FAIL, 'No over-comedic deity treatment');
add(!/preview.*status:\s*'available'|status:\s*'available'.*preview/is.test(seedText + regText) ? PASS : FAIL, 'No preview scaffold stories marked available');
add(/runtimeAvailabilityGated:\s*true/.test(regText) ? PASS : FAIL, 'Runtime availability gated by status and editorial QA');

add(vrindavanText.includes('vrindavan') ? PASS : FAIL, 'Existing Vrindavan seed file remains present and not overwritten');

const sections = [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Krishna Childhood Pack 1 follows Ramayana Pack 1',
  'Content scope',
  'Stories included',
  'Age-band strategy',
  'Sacred/cultural respect approach',
  'Parent trust approach',
  'Editorial QA expectations',
  'Runtime availability rules',
  'Relationship to Content Model v2',
  'Relationship to Content Registry',
  'Relationship to Editorial QA Validator v1',
  'Relationship to Runtime Story Resolver v2',
  'Relationship to Journey Data Model v1',
  'Relationship to existing Vrindavan content',
  'Local-first/no-backend assumptions',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #127 and PR #128',
  'Final PR #126 readiness statement'
];
sections.forEach((s) => add(docsText.includes(s) ? PASS : FAIL, `Docs section present: ${s}`));
add(docsText.includes('PR #127: Ganesha Wisdom Pack 1') ? PASS : FAIL, 'Follow-up includes PR #127 roadmap item');
add(docsText.includes('PR #128: Parent Journey Progress Dashboard v1') ? PASS : FAIL, 'Follow-up includes PR #128 roadmap item');

add(!exists('app/world/krishna-childhood-pack-1.tsx') ? PASS : FAIL, 'No new app routes for Krishna pack');
const worlds = exists('app/(child)/worlds.tsx') ? read('app/(child)/worlds.tsx') : '';
add(worlds.includes('Krishna Stories') && worlds.includes('Festival Stories') ? PASS : FAIL, 'No Story World doorway order change (spot check)');
add(!/(supabase|fetch\(|axios|payment|checkout|microphone|recording|expo-audio|expo-av)/i.test(seedText + regText + crText) ? PASS : FAIL, 'No backend/auth/payment/mic/recording/network implementation');
const appEntries = exists('app') ? fs.readdirSync(resolve('app')).join('\n') : '';
const srcEntries = exists('src') ? fs.readdirSync(resolve('src')).join('\n') : '';
add(!/screen[-_ ]?(42[4-9]|4[3-8][0-9]|487)/i.test(appEntries + srcEntries) ? PASS : FAIL, 'No Screens 424–487 runtime files in app/ or src');
const childRoutes = ['app/(child)/worlds.tsx', 'app/(child)/today.tsx', 'app/(child)/treasures.tsx'].filter(exists).map(read).join('\n');
add(!/Story Library/i.test(childRoutes) ? PASS : FAIL, 'Child-facing active routes use Story World language');

if ((seedText.match(/status:\s*'qa_ready'/g) || []).length === storyCount) {
  add(WARN, 'All Krishna stories are qa_ready and may not be runtime available yet (acceptable for PR #126).');
}

for (const check of checks) console.log(`${check.s}: ${check.m}`);
if (checks.some((c) => c.s === FAIL)) process.exit(1);
