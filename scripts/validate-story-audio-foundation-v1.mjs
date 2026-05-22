#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/storyAudioFoundationService.ts');
const docPath = path.join(root, 'docs/runtime/STORY_AUDIO_FOUNDATION_V1.md');
const storyScreenPath = path.join(root, 'app/story/[slug].tsx');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');

const passes = [];
const warns = [];
const fails = [];

const hasFile = (p) => fs.existsSync(p);
const read = (p) => fs.readFileSync(p, 'utf8');
const assertPass = (condition, passMsg, failMsg) => (condition ? passes.push(passMsg) : fails.push(failMsg));

assertPass(hasFile(servicePath), 'Service file exists.', 'Missing src/services/storyAudioFoundationService.ts.');
assertPass(hasFile(docPath), 'Documentation file exists.', 'Missing docs/runtime/STORY_AUDIO_FOUNDATION_V1.md.');

const service = hasFile(servicePath) ? read(servicePath) : '';
const docs = hasFile(docPath) ? read(docPath) : '';
const storyScreen = hasFile(storyScreenPath) ? read(storyScreenPath) : '';

for (const requiredExport of [
  'storyAudioFoundationModelVersion',
  'getStoryAudioAvailability',
  'getStoryAudioVoiceOptions',
  'buildStoryAudioPlayerState',
  'getDefaultStoryAudioMode',
  'getStoryAudioTrustNote',
  'shouldShowAudioEntryPoint',
  'shouldSuppressMascotDuringAudio',
  'getStoryAudioUnavailableReason',
]) {
  assertPass(service.includes(requiredExport), `Service includes ${requiredExport}.`, `Service missing required export/member ${requiredExport}.`);
}

for (const mode of ['read_myself', 'listen', 'read_together']) {
  assertPass(service.includes(`'${mode}'`), `Mode '${mode}' present.`, `Mode '${mode}' missing.`);
}
for (const state of ['unavailable', 'metadata_only', 'local_ready']) {
  assertPass(service.includes(`'${state}'`), `Availability '${state}' present.`, `Availability '${state}' missing.`);
}

assertPass(service.includes('noMicRequired: true'), 'noMicRequired is hard-set true.', 'noMicRequired true invariant missing.');
assertPass(!/noMicRequired\s*:\s*false/.test(service), 'Service never sets noMicRequired false.', 'Service sets noMicRequired false.');

for (const banned of ['recording', 'expo-av', 'expo-audio', 'fetch(', 'axios', 'http://', 'https://', 'apiKey', 'telemetry', 'analytics']) {
  if (service.toLowerCase().includes(banned.toLowerCase())) {
    fails.push(`Service contains banned token: ${banned}`);
  }
}

assertPass(service.includes("availability === 'local_ready'"), 'Playable state tied to local_ready.', 'Service may pretend playable audio without local_ready evidence.');
assertPass(service.includes("? 'listen' : 'read_myself'"), 'Default mode rule read_myself unless local_ready found.', 'Default mode rule missing.');

for (const sacred of ['deity_focal', 'shloka_or_prayer', 'ritual_context']) {
  assertPass(service.includes(sacred), `Sacred suppression includes ${sacred}.`, `Sacred suppression missing ${sacred}.`);
}
assertPass(service.includes('if (!sacredRespectLevel) return true;'), 'Unknown sacredRespectLevel suppresses mascot.', 'Missing unknown sacredRespectLevel suppression.');

if (storyScreen.includes('Audio coming soon') || storyScreen.includes('No microphone needed')) {
  passes.push('Story screen includes non-playing audio readiness copy.');
} else {
  warns.push('UI binding appears deferred (no readiness copy found in app/story/[slug].tsx).');
}

for (const bannedUi of [/\bautoplay\b/i, /\bpremium\b/i, /\blocked\b/i, /\bplay now\b/i, /\bplay\b/i]) {
  if (bannedUi.test(storyScreen) && !/canPlayNow/.test(storyScreen)) fails.push(`Story screen includes prohibited UI pattern: ${bannedUi}`);
}

assertPass(!/app\/.+\[.+\].+Audio/.test(service), 'No new routes created from service.', 'Potential route changes detected.');

if (hasFile(worldsPath)) {
  const worlds = read(worldsPath);
  assertPass(worlds.length > 0, 'Story World doorway file still present.', 'Story World doorway file missing/empty.');
}

assertPass(!storyScreen.includes('Story Library'), 'No Story Library regression in story route copy.', 'Story Library term found in child-facing story route.');
for (const term of ['streak', 'leaderboard']) {
  assertPass(!storyScreen.toLowerCase().includes(term), `No hard gamification term: ${term}.`, `Hard gamification term found: ${term}.`);
}

for (const requiredHeading of [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Story Audio Foundation follows Story Completion Moment',
  'Audio product goal',
  'Audio foundation scope',
  'Out of scope',
  'Audio model',
  'Audio availability rules',
  'Voice option metadata rules',
  'Default mode rules',
  'Player state rules',
  'Sacred respect and mascot suppression rules',
  'Privacy/no-microphone rules',
  'Local-first/no-backend assumptions',
  'Runtime integration status',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #131 and PR #132',
  'Final PR #130 readiness statement',
]) {
  assertPass(docs.includes(requiredHeading), `Docs include section: ${requiredHeading}.`, `Docs missing section: ${requiredHeading}.`);
}
assertPass(docs.includes('PR #131: Ramayana Audio v1'), 'Docs include PR #131 roadmap follow-up.', 'Docs missing or mismatching PR #131 follow-up.');
assertPass(docs.includes('PR #132: Bhagavad Gita for Children Editorial Framework v1'), 'Docs include PR #132 roadmap follow-up.', 'Docs missing or mismatching PR #132 follow-up.');

for (const seed of ['src/data/seed/ramayanaPack1.ts', 'src/data/seed/krishnaChildhoodPack1.ts', 'src/data/seed/ganeshaWisdomPack1.ts']) {
  assertPass(hasFile(path.join(root, seed)), `Seed file present: ${seed}.`, `Seed file missing: ${seed}.`);
}

for (const line of passes) console.log(`PASS: ${line}`);
for (const line of warns) console.log(`WARN: ${line}`);
for (const line of fails) console.log(`FAIL: ${line}`);

if (fails.length > 0) process.exit(1);
