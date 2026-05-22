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

const seed = 'src/data/seed/ganeshaWisdomPack1.ts';
const registry = 'src/data/ganeshaWisdomPack1Registry.ts';
const docs = 'docs/content/GANESHA_WISDOM_PACK_1.md';
const contentRegistry = 'src/data/contentRegistry.ts';
const vrindavanSeed = 'src/data/seed/vrindavan.ts';
const ramayanaSeed = 'src/data/seed/ramayanaPack1.ts';
const krishnaSeed = 'src/data/seed/krishnaChildhoodPack1.ts';

[seed, registry, docs, contentRegistry, vrindavanSeed, ramayanaSeed, krishnaSeed].forEach((f) => add(exists(f) ? PASS : FAIL, `${f} exists`));

const seedText = exists(seed) ? read(seed) : '';
const regText = exists(registry) ? read(registry) : '';
const docsText = exists(docs) ? read(docs) : '';
const crText = exists(contentRegistry) ? read(contentRegistry) : '';
const vrindavanText = exists(vrindavanSeed) ? read(vrindavanSeed) : '';
const ramayanaText = exists(ramayanaSeed) ? read(ramayanaSeed) : '';
const krishnaText = exists(krishnaSeed) ? read(krishnaSeed) : '';

const storyBlocks = seedText.match(/\{[\s\S]*?status:\s*'(?:qa_ready|runtime_ready|available)'[\s\S]*?\n\s*\}/g) || [];
const stories = storyBlocks.map((block) => ({
  title: (block.match(/title:\s*'([^']+)'/) || [])[1] ?? '',
  slug: (block.match(/slug:\s*'([^']+)'/) || [])[1] ?? '',
  status: (block.match(/status:\s*'([^']+)'/) || [])[1] ?? '',
  ageBandsRaw: (block.match(/ageBands:\s*\[([^\]]+)\]/) || [])[1] ?? '',
  recommendedAgeBand: (block.match(/recommendedAgeBand:\s*'([^']+)'/) || [])[1] ?? ''
}));

add(/ganeshaWisdomPack1Stories/.test(crText) && /ganeshaWisdomPack1StoryPack/.test(crText) && /ganeshaWisdomPack1Journey/.test(crText) ? PASS : FAIL, 'Content registry imports/uses Ganesha Wisdom Pack 1');
add(stories.length >= 3 && stories.length <= 5 ? PASS : FAIL, `Ganesha story count between 3 and 5 (found ${stories.length})`);

const requiredFields = ['id','slug','title','shortTitle','summary','sourceTradition','sourceTextOrTraditionNote','storyPackId','journeyId','journeyOrder','ageBands','recommendedAgeBand','durationMinutes','primaryValue','secondaryValues','characters','panels','parentNote','reflectionPrompt','ritualPrompt','completionBlessing','sacredRespectLevel','illustrationPrompt','audioMetadata','status'];
for (const field of requiredFields) add(seedText.includes(`${field}:`) ? PASS : FAIL, `Required field present in seed: ${field}`);

add((seedText.match(/parentNote:/g) || []).length === stories.length ? PASS : FAIL, 'All stories include parentNote');
add((seedText.match(/illustrationPrompt:/g) || []).length === stories.length ? PASS : FAIL, 'All stories include illustrationPrompt');
add((seedText.match(/noMicRequired:\s*true/g) || []).length === stories.length ? PASS : FAIL, 'All stories include audioMetadata.noMicRequired true');
add((seedText.match(/sacredRespectLevel:/g) || []).length === stories.length ? PASS : FAIL, 'All stories include sacredRespectLevel');
add((seedText.match(/ageBands:/g) || []).length === stories.length ? PASS : FAIL, 'All stories include ageBands');
add((seedText.match(/recommendedAgeBand:/g) || []).length === stories.length ? PASS : FAIL, 'All stories include recommendedAgeBand');
add(!/storyPackId:\s*'((?!ganesha-wisdom-pack-1).)*'/.test(seedText) ? PASS : FAIL, 'All stories use storyPackId ganesha-wisdom-pack-1');
add(!/journeyId:\s*'((?!ganesha-wisdom-pack-1).)*'/.test(seedText) ? PASS : FAIL, 'All stories use journeyId ganesha-wisdom-pack-1');

const prefixed = stories.filter((s) => s.slug.startsWith('ganesha-wisdom-')).length;
add(prefixed === stories.length ? PASS : FAIL, 'All Ganesha story slugs are namespaced with ganesha-wisdom-');

const otherSlugs = [...vrindavanText.matchAll(/slug:\s*'([^']+)'/g), ...ramayanaText.matchAll(/slug:\s*'([^']+)'/g), ...krishnaText.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const collisions = stories.filter((s) => otherSlugs.includes(s.slug)).map((s) => s.slug);
add(collisions.length === 0 ? PASS : FAIL, `No slug collisions with existing pack slugs${collisions.length ? ` (${collisions.join(', ')})` : ''}`);

add(/category:\s*'ganesha'/.test(regText) ? PASS : FAIL, 'Story pack category is ganesha');
add(/id:\s*'ganesha-wisdom-pack-1'/.test(regText) && /ganeshaWisdomPack1Journey/.test(regText) ? PASS : FAIL, 'Journey exists for ganesha-wisdom-pack-1');

const bannedGamification = /\b(xp|coins|streaks|leaderboards|rankings)\b/i;
add(!bannedGamification.test(seedText + docsText) ? PASS : FAIL, 'No hard gamification terms');
add(!/Story Library/i.test(seedText + docsText + crText) ? PASS : FAIL, 'No Story Library regression');
const panelTexts = [...seedText.matchAll(/text:\s*'([^']+)'/g)].map((m) => m[1]).join('\n');
add(!/violence|blood|attack|weapon|terrifying|horror|fear-heavy miracle|punishment-heavy|shame-heavy|humiliation/i.test(panelTexts) ? PASS : FAIL, 'No violence/fear-heavy miracle/shame-heavy parenting language appears in panel text');
add(!/elephant joke|funny trunk gag|body[- ]?sham|appearance joke|clown deity|cartoon god|silly deity/i.test(seedText) ? PASS : FAIL, 'No slapstick elephant jokes/body-shaming/over-comedic deity treatment');
add(!/preview.*status:\s*'available'|status:\s*'available'.*preview/is.test(seedText + regText) ? PASS : FAIL, 'No preview scaffold stories are marked available');
add(/runtimeAvailabilityGated:\s*true/.test(regText) ? PASS : FAIL, 'Runtime availability is gated by status and editorial QA');

const requiredSections = [
  'PR title and purpose','Roadmap alignment','Why Ganesha Wisdom Pack 1 follows Krishna Childhood Pack 1','Content scope','Stories included','Age-band strategy','Story-to-Age Mapping','Sacred/cultural respect approach','Parent trust approach','Editorial QA expectations','Runtime availability rules','Relationship to Content Model v2','Relationship to Content Registry','Relationship to Editorial QA Validator v1','Relationship to Runtime Story Resolver v2','Relationship to Journey Data Model v1','Relationship to existing Ganesha Story World foundation items','Local-first/no-backend assumptions','What this PR changes','What this PR does not do','Follow-up recommendations for PR #128 and PR #129','Final PR #127 readiness statement'
];
requiredSections.forEach((s) => add(docsText.includes(s) ? PASS : FAIL, `Docs section present: ${s}`));

const mapping = (docsText.split('## Story-to-Age Mapping')[1] || '').split('## Sacred/cultural respect approach')[0] || '';
add(mapping.includes('| Story | Age Bands | Recommended Age | Why |') ? PASS : FAIL, 'Docs include Story-to-Age Mapping');
stories.forEach((s) => add(mapping.includes(s.title) ? PASS : FAIL, `Story-to-Age Mapping includes: ${s.title}`));
add(docsText.includes('PR #128: Parent Journey Progress Dashboard v1') ? PASS : FAIL, 'Follow-up roadmap includes PR #128');
add(docsText.includes('PR #129: Story Completion Moment v1') ? PASS : FAIL, 'Follow-up roadmap includes PR #129');

add(!exists('app/world/ganesha-wisdom-pack-1.tsx') ? PASS : FAIL, 'No new app routes');
const worlds = exists('app/(child)/worlds.tsx') ? read('app/(child)/worlds.tsx') : '';
add(worlds.includes('Krishna Stories') && worlds.includes('Festival Stories') ? PASS : FAIL, 'No Story World doorway order change (spot check)');
add(!/(supabase|fetch\(|axios|payment|checkout|microphone|recording|expo-audio|expo-av)/i.test(seedText + regText + crText) ? PASS : FAIL, 'No backend/auth/payment/mic/recording/network implementation');
const appEntries = exists('app') ? fs.readdirSync(resolve('app')).join('\n') : '';
const srcEntries = exists('src') ? fs.readdirSync(resolve('src')).join('\n') : '';
add(!/screen[-_ ]?(42[4-9]|4[3-8][0-9]|487)/i.test(appEntries + srcEntries) ? PASS : FAIL, 'No Screens 424–487 runtime files in app/ or src');
const childRoutes = ['app/(child)/worlds.tsx', 'app/(child)/today.tsx', 'app/(child)/treasures.tsx'].filter(exists).map(read).join('\n');
add(!/Story Library/i.test(childRoutes) ? PASS : FAIL, 'Child-facing active routes use Story World language');

if (stories.length > 0 && stories.every((s) => s.status === 'qa_ready')) add(WARN, 'All Ganesha stories are qa_ready and may not be runtime available yet (acceptable for PR #127).');

for (const c of checks) console.log(`${c.s}: ${c.m}`);
if (checks.some((c) => c.s === FAIL)) process.exit(1);
