import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/audioEntryTrustMicrocopyService.ts');
const docsPath = path.join(root, 'docs/child/AUDIO_ENTRY_TRUST_MICROCOPY_V1.md');
const storyRoutePath = path.join(root, 'app/story/[slug].tsx');
const worldRoutePath = path.join(root, 'app/world/[slug].tsx');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');
const todayPath = path.join(root, 'app/(child)/today.tsx');
const storyWorldDataPath = path.join(root, 'src/data/storyWorld.ts');
const ramayanaAudioPath = path.join(root, 'src/data/ramayanaAudioV1.ts');
const pkgPath = path.join(root, 'package.json');

let failures = 0;
let warnings = 0;

const pass = (msg) => console.log(`PASS: ${msg}`);
const warn = (msg) => { warnings += 1; console.log(`WARN: ${msg}`); };
const fail = (msg) => { failures += 1; console.log(`FAIL: ${msg}`); };

const exists = (p, name) => {
  if (fs.existsSync(p)) { pass(`${name} exists`); return true; }
  fail(`${name} missing`);
  return false;
};

const assertHasAll = (content, values, label) => {
  const missing = values.filter((value) => !content.includes(value));
  if (missing.length) fail(`${label} (missing: ${missing.join(', ')})`);
  else pass(label);
};

const assertNoPattern = (content, patterns, label) => {
  const hit = patterns.find((pattern) => pattern.test(content));
  if (hit) fail(`${label} (found: ${hit})`);
  else pass(label);
};

const serviceOk = exists(servicePath, 'audioEntryTrustMicrocopyService');
const docsOk = exists(docsPath, 'AUDIO_ENTRY_TRUST_MICROCOPY_V1 docs');
const storyOk = exists(storyRoutePath, 'app/story/[slug].tsx');
exists(worldRoutePath, 'app/world/[slug].tsx');
exists(worldsPath, 'app/(child)/worlds.tsx');
exists(todayPath, 'app/(child)/today.tsx');
exists(storyWorldDataPath, 'src/data/storyWorld.ts');
exists(ramayanaAudioPath, 'src/data/ramayanaAudioV1.ts');

if (serviceOk) {
  const service = fs.readFileSync(servicePath, 'utf8');
  const lower = service.toLowerCase();

  assertHasAll(service, [
    'export const audioEntryTrustMicrocopyModelVersion',
    'export const buildAudioEntryTrustMicrocopy',
    'export const getAudioEntryOptionalListeningCopy',
    'export const getAudioEntryReadMyselfCopy',
    'export const getAudioEntryNoMicRecordingCopy',
    'export const getAudioEntryFamilyListeningCopy',
    'export const getAudioEntrySacredCareCopy',
    'export const getAudioEntryComingSoonCopy',
    'export const getAudioEntryParentApprovedCopy',
    'export const getAudioEntryTrustMicrocopySummary',
  ], 'required service exports are present');

  assertNoPattern(service, [
    /AsyncStorage/i,
    /markStoryComplete\s*\(/,
    /markJourneyStoryCompleted\s*\(/,
    /setJourneyProgress\s*\(/,
    /pruneStoryCompletions\s*\(/,
  ], 'service has no persistence/progress mutation calls');

  assertNoPattern(service, [
    /fetch\s*\(/i, /axios/i, /supabase/i, /firebase/i, /backend/i, /auth/i, /payment/i,
    /analytics/i, /telemetry/i, /tracking/i, /email/i, /push/i, /sms/i, /whatsapp/i,
    /social/i, /referral/i, /invite/i, /network/i,
    /Share\.share\s*\(/i, /navigator\.share/i,
    /expo-sharing/i, /expo-notifications/i, /expo-mail-composer/i, /expo-sms/i, /expo-linking/i,
    /expo-file-system/i, /expo-media-library/i, /expo-av/i, /tts/i, /recordAudio/i, /recordingPermission/i,
  ], 'service has no backend/network/sharing/media/analytics/audio-recording integrations');

  if (
    /listening is optional/i.test(lower)
    && /read myself is always okay/i.test(lower)
    && /no microphone or recording/i.test(lower)
    && /(read with your family|family)/i.test(lower)
    && /(shared with care|handled with care)/i.test(lower)
    && /audio will arrive gently when ready/i.test(lower)
    && /(parent-approved|calm)/i.test(lower)
  ) pass('service includes required trust microcopy themes');
  else fail('service is missing one or more required trust microcopy themes');

  assertNoPattern(service, [
    /\bplay\b/i, /listen now/i, /start audio/i, /tap to listen/i,
  ], 'service excludes active playback claims');

  assertNoPattern(service, [
    /analytics/i, /telemetry/i, /tracking/i, /backend/i, /account/i, /payment/i, /premium/i, /locked/i, /unlock/i,
  ], 'service excludes prohibited monetization/tracking/legal-heavy terms');

  assertNoPattern(service, [
    /\bxp\b/i, /\bcoins\b/i, /\bstreak\b/i, /leaderboard/i, /\brank\b/i, /\bscore\b/i,
    /performance/i, /achievement unlocked/i, /referral/i, /viral/i, /badge/i, /reward/i,
  ], 'service excludes hard gamification terms');

  assertNoPattern(service, [/story\s+library/i, /exact child age/i], 'service excludes Story Library and exact age collection language');
}

if (docsOk) {
  const docs = fs.readFileSync(docsPath, 'utf8');
  assertHasAll(docs, [
    '## PR title and purpose',
    '## Roadmap alignment',
    '## Why Audio Entry Trust Microcopy follows Completion Trust Microcopy',
    '## Audio entry trust microcopy goal',
    '## What this microcopy is',
    '## What this microcopy is not',
    '## Child-facing audio copy principles',
    '## Optional listening copy rules',
    '## Read-myself copy rules',
    '## No microphone/recording copy rules',
    '## Family listening/reading copy rules',
    '## Sacred care copy rules',
    '## Coming-soon audio copy rules',
    '## Parent-approved audio copy rules',
    '## UI integration status',
    '## No backend/no tracking assumptions',
    '## No playback/no TTS/no mic assumptions',
    '## No hard gamification rules',
    '## Audio behavior preservation rules',
    '## Story runtime preservation rules',
    '## Relationship to Story Audio Foundation v1',
    '## Relationship to Ramayana Audio v1',
    '## Relationship to Completion Trust Microcopy v1',
    '## What this PR changes',
    '## What this PR does not do',
    '## Follow-up recommendations for PR #146 and PR #147',
    '## Final PR #145 readiness statement',
  ], 'docs include required sections');

  assertHasAll(docs, [
    'No backend/auth/cloud sync/payment/API work is introduced.',
    'No analytics/telemetry/tracking implementation is introduced.',
    'No playback logic is added.',
    'No TTS, audio APIs, microphone access, recording, or permissions are introduced.',
    'PR #146: Parent Reflection Prompt Copy v1',
    'PR #147: Parent Weekly Summary Copy Polish v1',
  ], 'docs include required assumptions and roadmap follow-ups');
}

if (storyOk) {
  const route = fs.readFileSync(storyRoutePath, 'utf8');
  if (route.includes('buildAudioEntryTrustMicrocopy')) pass('UI binding added in app/story/[slug].tsx');
  else warn('UI binding deferred in app/story/[slug].tsx');

  const usesAudioTrustService = route.includes('buildAudioEntryTrustMicrocopy')
    || route.includes('audioTrustMicrocopy');
  const rendersNoMicCopy = route.includes('audioTrustMicrocopy.noMicRecordingCopy');
  if (usesAudioTrustService && !rendersNoMicCopy) {
    fail('story route uses audio-entry trust microcopy but does not render audioTrustMicrocopy.noMicRecordingCopy');
  } else if (usesAudioTrustService && rendersNoMicCopy) {
    pass('story route renders audioTrustMicrocopy.noMicRecordingCopy in audio trust block');
  }

  assertNoPattern(route, [
    /Listen Now/i, />\s*Play\s*</i, /tap to listen/i,
  ], 'story route has no new active playback CTA controls');
}

if (exists(pkgPath, 'package.json')) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg?.scripts?.['validate:audio-entry-trust-microcopy-v1'] === 'node scripts/validate-audio-entry-trust-microcopy-v1.mjs') pass('package script validate:audio-entry-trust-microcopy-v1 is configured');
  else fail('package script validate:audio-entry-trust-microcopy-v1 is missing or incorrect');
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${warnings} warnings)`);
