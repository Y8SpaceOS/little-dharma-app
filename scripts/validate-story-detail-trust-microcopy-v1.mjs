import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/storyDetailTrustMicrocopyService.ts');
const docsPath = path.join(root, 'docs/child/STORY_DETAIL_TRUST_MICROCOPY_V1.md');
const storyRoutePath = path.join(root, 'app/story/[slug].tsx');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');
const todayPath = path.join(root, 'app/(child)/today.tsx');

let failures = 0;
let warnings = 0;

const pass = (msg) => console.log(`PASS: ${msg}`);
const warn = (msg) => { warnings += 1; console.log(`WARN: ${msg}`); };
const fail = (msg) => { failures += 1; console.log(`FAIL: ${msg}`); };

const exists = (p, name) => {
  if (fs.existsSync(p)) {
    pass(`${name} exists`);
    return true;
  }
  fail(`${name} missing`);
  return false;
};

const checkContains = (content, values, label) => {
  const missing = values.filter((value) => !content.includes(value));
  if (missing.length === 0) pass(label);
  else fail(`${label} (missing: ${missing.join(', ')})`);
};

const checkNoMatches = (content, patterns, label) => {
  const found = patterns.filter((pattern) => pattern.test(content));
  if (found.length === 0) pass(label);
  else fail(`${label} (found prohibited patterns)`);
};

const serviceOk = exists(servicePath, 'storyDetailTrustMicrocopyService');
const docsOk = exists(docsPath, 'STORY_DETAIL_TRUST_MICROCOPY_V1 docs');
const storyRouteOk = exists(storyRoutePath, 'app/story/[slug].tsx');
const worldsOk = exists(worldsPath, 'app/(child)/worlds.tsx');
const todayOk = exists(todayPath, 'app/(child)/today.tsx');

if (serviceOk) {
  const service = fs.readFileSync(servicePath, 'utf8');
  const lower = service.toLowerCase();

  checkContains(service, [
    'export const storyDetailTrustMicrocopyModelVersion',
    'export const buildStoryDetailTrustMicrocopy',
    'export const getStoryDetailStartReadinessCopy',
    'export const getStoryDetailNoRaceCopy',
    'export const getStoryDetailSlowReadingCopy',
    'export const getStoryDetailFamilyReadingCopy',
    'export const getStoryDetailSacredCareCopy',
    'export const getStoryDetailLuvluHelperCopy',
    'export const getStoryDetailProgressGentleCopy',
    'export const getStoryDetailTrustMicrocopySummary',
  ], 'required service exports are present');

  checkNoMatches(service, [/AsyncStorage/i, /markStoryComplete\s*\(/, /markJourneyStoryCompleted\s*\(/, /setJourneyProgress\s*\(/, /pruneStoryCompletions\s*\(/], 'no persistence/progress mutation calls');

  checkNoMatches(service, [
    /fetch\s*\(/i, /axios/i, /supabase/i, /firebase/i, /backend/i, /auth/i, /payment/i,
    /email/i, /push/i, /sms/i, /whatsapp/i, /social/i, /referral/i, /invite/i, /\bshare\b/i,
    /expo-sharing/i, /expo-notifications/i, /expo-mail-composer/i, /expo-sms/i, /expo-linking/i,
    /expo-file-system/i, /expo-media-library/i, /expo-av/i, /analytics/i, /telemetry/i,
  ], 'no backend/network/sharing/notification/media/analytics integrations');

  if ((/start when you feel ready/i.test(lower) || /read when you feel ready/i.test(lower))
    && /no race/i.test(lower)
    && (/read slowly/i.test(lower) || /one calm story/i.test(lower))
    && /family/i.test(lower)
    && /(shared with care|handled with care)/i.test(lower)
    && /luvlu can help/i.test(lower)
    && /(not scored|gentle progress|progress is gentle)/i.test(lower)) {
    pass('service includes required trust microcopy themes');
  } else {
    fail('service is missing one or more required trust microcopy themes');
  }

  checkNoMatches(service, [
    /analytics/i, /telemetry/i, /tracking/i, /backend/i, /account/i, /privacy policy/i,
    /parent controls/i, /payment/i, /premium/i, /locked/i, /unlock/i,
  ], 'service excludes prohibited parent/legal/monetization terms');

  checkNoMatches(service, [
    /\bxp\b/i, /\bcoins\b/i, /\bstreak\b/i, /\bleaderboard\b/i, /\brank\b/i,
    /\bscore\b/i, /\bperformance\b/i, /achievement unlocked/i, /referral/i, /viral/i,
    /unlock/i, /premium/i, /locked/i,
  ], 'service excludes hard gamification terms');

  checkNoMatches(service, [/story\s+library/i, /exact child age/i], 'service excludes Story Library and exact child age collection language');
}

if (docsOk) {
  const docs = fs.readFileSync(docsPath, 'utf8');
  checkContains(docs, [
    '## PR title and purpose', '## Roadmap alignment',
    '## Why Story Detail Trust Microcopy follows Story World Trust Microcopy',
    '## Story Detail trust microcopy goal', '## What this microcopy is', '## What this microcopy is not',
    '## Child-facing copy principles', '## Start/readiness copy rules', '## No-race copy rules',
    '## Slow reading copy rules', '## Family reading copy rules', '## Sacred care copy rules',
    '## Luvlu helper copy rules', '## Gentle progress copy rules', '## UI integration status',
    '## No backend/no tracking assumptions', '## No hard gamification rules',
    '## Story runtime preservation rules', '## Audio behavior preservation rules',
    '## Relationship to Child Home Trust Microcopy v1', '## Relationship to Story World Trust Microcopy v1',
    '## Relationship to Completion Trust Microcopy v1', '## What this PR changes', '## What this PR does not do',
    '## Follow-up recommendations for PR #144 and PR #145', '## Final PR #143 readiness statement',
  ], 'docs include required sections');

  checkContains(docs, [
    'No backend/auth/cloud sync/payment work is introduced.',
    'No analytics/telemetry/tracking implementation is introduced.',
    '## No hard gamification rules',
    '## Story runtime preservation rules',
    '## Audio behavior preservation rules',
    'PR #144: Completion Trust Microcopy v1',
    'PR #145: Audio Entry Trust Microcopy v1',
  ], 'docs include required assumptions and roadmap follow-ups');
}

if (storyRouteOk) {
  const storyRoute = fs.readFileSync(storyRoutePath, 'utf8');
  if (storyRoute.includes('buildStoryDetailTrustMicrocopy')) pass('minimal UI binding found in app/story/[slug].tsx');
  else warn('UI binding deferred in app/story/[slug].tsx; allowed if intentionally deferred');

  checkNoMatches(storyRoute, [/router\.push\(/, /router\.replace\(/, /new\s+Link\s*\(/], 'no new navigation behavior in story route');
}

if (worldsOk && todayOk) {
  const worlds = fs.readFileSync(worldsPath, 'utf8');
  const today = fs.readFileSync(todayPath, 'utf8');
  checkNoMatches(worlds + '\n' + today, [/Story Library/i], 'no Story Library regression in child surfaces');
}

const pkgPath = path.join(root, 'package.json');
if (exists(pkgPath, 'package.json')) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg?.scripts?.['validate:story-detail-trust-microcopy-v1'] === 'node scripts/validate-story-detail-trust-microcopy-v1.mjs') pass('package script validate:story-detail-trust-microcopy-v1 is configured');
  else fail('package script validate:story-detail-trust-microcopy-v1 is missing or incorrect');
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${warnings} warnings)`);
