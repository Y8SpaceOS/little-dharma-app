#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const passes = [];
const warns = [];
const fails = [];

const paths = {
  ramayanaAudio: path.join(root, 'src/data/ramayanaAudioV1.ts'),
  ramayanaSeed: path.join(root, 'src/data/seed/ramayanaPack1.ts'),
  storyAudioService: path.join(root, 'src/services/storyAudioFoundationService.ts'),
  docs: path.join(root, 'docs/runtime/RAMAYANA_AUDIO_V1.md'),
  worlds: path.join(root, 'app/(child)/worlds.tsx'),
  storyRoute: path.join(root, 'app/story/[slug].tsx'),
  routesRoot: path.join(root, 'app'),
};

const read = (p) => fs.readFileSync(p, 'utf8');
const exists = (p) => fs.existsSync(p);
const assertPass = (condition, pass, fail) => (condition ? passes.push(pass) : fails.push(fail));

assertPass(exists(paths.ramayanaAudio), 'ramayanaAudioV1 adapter exists.', 'Missing src/data/ramayanaAudioV1.ts.');
assertPass(exists(paths.docs), 'Ramayana Audio v1 docs exist.', 'Missing docs/runtime/RAMAYANA_AUDIO_V1.md.');
assertPass(exists(paths.ramayanaSeed), 'Ramayana Pack 1 seed exists.', 'Missing src/data/seed/ramayanaPack1.ts.');

const ramayanaAudio = exists(paths.ramayanaAudio) ? read(paths.ramayanaAudio) : '';
const seed = exists(paths.ramayanaSeed) ? read(paths.ramayanaSeed) : '';
const service = exists(paths.storyAudioService) ? read(paths.storyAudioService) : '';
const docs = exists(paths.docs) ? read(paths.docs) : '';
const worlds = exists(paths.worlds) ? read(paths.worlds) : '';
const storyRoute = exists(paths.storyRoute) ? read(paths.storyRoute) : '';

const expectedIds = [
  'ramayana-pack1-ramas-kind-promise',
  'ramayana-pack1-sitas-garden-of-care',
  'ramayana-pack1-lakshmanas-loving-service',
  'ramayana-pack1-hanuman-listens-before-he-leaps',
  'ramayana-pack1-a-bridge-built-together',
];
const expectedSlugs = [
  'ramas-kind-promise',
  'sitas-garden-of-care',
  'lakshmanas-loving-service',
  'hanuman-listens-before-he-leaps',
  'a-bridge-built-together',
];

assertPass((seed.match(/\bstatus:\s*'qa_ready'/g) ?? []).length === 5, 'Ramayana story statuses remain qa_ready.', 'Ramayana statuses changed from qa_ready.');
assertPass((seed.match(/\bid:\s*'ramayana-pack1-/g) ?? []).length === 5, 'Ramayana story count remains 5.', 'Ramayana story count is not 5.');
for (const id of expectedIds) assertPass(seed.includes(id), `Seed retains story id ${id}.`, `Missing/changed Ramayana story id: ${id}.`);
for (const slug of expectedSlugs) assertPass(seed.includes(`slug: '${slug}'`), `Seed retains story slug ${slug}.`, `Missing/changed Ramayana story slug: ${slug}.`);

for (const id of expectedIds) assertPass(ramayanaAudio.includes(`storyId: '${id}'`), `Audio metadata includes ${id}.`, `Missing audio metadata for ${id}.`);
for (const required of ["noMicRequired: true", "'warm-indian-female'", "'warm-indian-male'", 'parentTrustNote', 'sacredAudioNotes', 'narrationScriptStatus']) {
  assertPass(ramayanaAudio.includes(required), `Audio metadata contains ${required}.`, `Audio metadata missing ${required}.`);
}

const badPlayableClaim = /audioStatus:\s*'local_ready'[\s\S]*?canPlayNow:\s*true/;
if (badPlayableClaim.test(ramayanaAudio)) fails.push('Ramayana metadata claims local playable audio.');
else passes.push('Ramayana metadata does not claim local playback.');

assertPass(!/audioAvailable:\s*true/.test(seed), 'No Ramayana seed audioAvailable true claims.', 'Ramayana seed sets audioAvailable true without local evidence.');
assertPass(!/localAssetKey:\s*'[^']+/.test(ramayanaAudio), 'No non-null localAssetKey claims.', 'Found non-null localAssetKey without local asset evidence.');

for (const banned of ['recording permission', 'expo-av', 'elevenlabs', 'api key', 'fetch(', 'axios', 'telemetry', 'analytics', 'payment', 'auth']) {
  const haystack = `${ramayanaAudio}\n${service}`.toLowerCase();
  if (haystack.includes(banned.toLowerCase())) fails.push(`Banned runtime token found: ${banned}`);
}

for (const exportName of ['getStoryAudioAvailability', 'buildStoryAudioPlayerState', 'shouldSuppressMascotDuringAudio']) {
  assertPass(service.includes(exportName), `Story Audio Foundation export remains: ${exportName}.`, `Story Audio Foundation missing ${exportName}.`);
}
assertPass(service.includes('noMicRequired: true'), 'Story Audio Foundation keeps noMicRequired true.', 'Story Audio Foundation noMicRequired invariant missing.');
for (const sacred of ['deity_focal', 'shloka_or_prayer', 'ritual_context', 'if (!sacredRespectLevel) return true;']) {
  assertPass(service.includes(sacred), `Mascot suppression rule retained: ${sacred}.`, `Mascot suppression rule missing: ${sacred}.`);
}

const appFiles = fs.readdirSync(paths.routesRoot);
const suspiciousRoute = appFiles.some((f) => /^audio(\.|\/|$)/i.test(f));
assertPass(!suspiciousRoute, 'No new audio route root added.', 'Detected potential new audio route under app/.');

assertPass(worlds.length > 0, 'Story World doorway file remains present.', 'Story World doorway file missing/empty.');
assertPass(!storyRoute.includes('Story Library'), 'No Story Library regression in child-facing story route.', 'Story Library term found in child-facing route.');
for (const term of ['leaderboard', 'streak', 'coins']) {
  assertPass(!storyRoute.toLowerCase().includes(term), `No hard gamification term in story route: ${term}.`, `Hard gamification term found: ${term}.`);
}

for (const requiredDocHeading of [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Ramayana Audio follows Story Audio Foundation',
  'Audio content scope',
  'Ramayana Pack 1 coverage',
  'Voice option metadata',
  'Narration script status',
  'Audio availability rules',
  'Local asset policy',
  'Playback status',
  'Sacred respect rules',
  'Mascot suppression rules',
  'Parent trust and no-microphone rules',
  'Local-first/no-backend assumptions',
  'Relationship to Story Audio Foundation v1',
  'Relationship to Ramayana Journey Pack 1',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #132 and PR #133',
  'Final PR #131 readiness statement',
]) {
  assertPass(docs.includes(requiredDocHeading), `Docs include: ${requiredDocHeading}.`, `Docs missing: ${requiredDocHeading}.`);
}
assertPass(docs.includes('PR #132: Bhagavad Gita for Children Editorial Framework v1'), 'Docs include PR #132 follow-up alignment.', 'Docs missing PR #132 follow-up alignment.');
assertPass(docs.includes('PR #133: Mahabharata Editorial Framework v1'), 'Docs include PR #133 follow-up alignment.', 'Docs missing PR #133 follow-up alignment.');

if (!ramayanaAudio.includes('localAssetKey:')) warns.push('No localAssetKey field found (expected in v1 adapter shape).');
if (!fs.existsSync(path.join(root, 'assets/audio'))) warns.push('No local audio asset directory found; acceptable for metadata-first PR #131.');

for (const msg of passes) console.log(`PASS: ${msg}`);
for (const msg of warns) console.log(`WARN: ${msg}`);
for (const msg of fails) console.log(`FAIL: ${msg}`);
if (fails.length > 0) process.exit(1);
