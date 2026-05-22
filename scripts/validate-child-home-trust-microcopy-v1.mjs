import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/childHomeTrustMicrocopyService.ts');
const docsPath = path.join(root, 'docs/child/CHILD_HOME_TRUST_MICROCOPY_V1.md');
const todayPath = path.join(root, 'app/(child)/today.tsx');

let failures = 0;
let warnings = 0;

const pass = (msg) => console.log(`PASS: ${msg}`);
const warn = (msg) => { warnings += 1; console.log(`WARN: ${msg}`); };
const fail = (msg) => { failures += 1; console.log(`FAIL: ${msg}`); };

const exists = (filePath, label) => {
  if (fs.existsSync(filePath)) {
    pass(`${label} exists`);
    return true;
  }
  fail(`${label} is missing`);
  return false;
};

const checkContains = (content, values, label) => {
  const missing = values.filter((value) => !content.includes(value));
  if (missing.length === 0) {
    pass(label);
  } else {
    fail(`${label} (missing: ${missing.join(', ')})`);
  }
};

const checkNoMatches = (content, patterns, label) => {
  const found = patterns.filter((pattern) => pattern.test(content));
  if (found.length === 0) {
    pass(label);
  } else {
    fail(`${label} (found prohibited patterns)`);
  }
};

const serviceOk = exists(servicePath, 'childHomeTrustMicrocopyService');
const docsOk = exists(docsPath, 'CHILD_HOME_TRUST_MICROCOPY_V1 docs');
exists(todayPath, 'child today route');

if (serviceOk) {
  const service = fs.readFileSync(servicePath, 'utf8');
  checkContains(service, [
    'export const childHomeTrustMicrocopyModelVersion',
    'export const buildChildHomeTrustMicrocopy',
    'export const getChildHomeCalmWorldCopy',
    'export const getChildHomeNoRaceCopy',
    'export const getChildHomeChoiceCopy',
    'export const getChildHomeFamilyReadingCopy',
    'export const getChildHomeSacredCareCopy',
    'export const getChildHomeLuvluHelperCopy',
    'export const getChildHomeTrustMicrocopySummary',
  ], 'required service exports are present');

  checkNoMatches(service, [
    /AsyncStorage/i,
    /markStoryComplete\s*\(/,
    /markJourneyStoryCompleted\s*\(/,
    /setJourneyProgress\s*\(/,
    /pruneStoryCompletions\s*\(/,
  ], 'service has no persistence or progress mutation calls');

  checkNoMatches(service, [
    /fetch\s*\(/,
    /axios/i,
    /supabase/i,
    /firebase/i,
    /auth/i,
    /payment/i,
    /email/i,
    /push/i,
    /sms/i,
    /whatsapp/i,
    /social/i,
    /\breferral\b/i,
    /invite/i,
    /Share\.share\s*\(/,
    /navigator\.share\s*\(/,
    /expo-sharing/i,
    /expo-notifications/i,
    /expo-mail-composer/i,
    /expo-sms/i,
    /expo-linking/i,
    /expo-file-system/i,
    /expo-media-library/i,
  ], 'service has no backend/network/sharing/notifications/media integrations');

  checkContains(service.toLowerCase(), [
    'no race',
    'read when you feel ready',
    'family',
    'shared with care',
    'luvlu can help',
  ], 'service includes required child trust copy themes');

  checkNoMatches(service, [
    /analytics/i,
    /telemetry/i,
    /tracking/i,
    /backend/i,
    /account/i,
    /privacy policy/i,
    /parent controls/i,
  ], 'service excludes parent/legal-heavy terms from child microcopy');

  checkNoMatches(service, [
    /\bxp\b/i,
    /\bcoins\b/i,
    /\bstreak\b/i,
    /\bleaderboard\b/i,
    /\brank\b/i,
    /\bscore\b/i,
    /\bperformance\b/i,
    /achievement unlocked/i,
    /\breferral\b/i,
    /\bviral\b/i,
    /\bunlock\b/i,
    /\bpremium\b/i,
    /story\s+library/i,
  ], 'service excludes hard gamification and Story Library terms');

  checkNoMatches(service, [
    /exact child age/i,
  ], 'service does not collect or mention exact child age collection');
}

if (docsOk) {
  const docs = fs.readFileSync(docsPath, 'utf8');
  checkContains(docs, [
    '## PR title and purpose',
    '## Roadmap alignment',
    '## Why Child Home Trust Microcopy follows Parent Onboarding Trust Copy',
    '## Child home trust microcopy goal',
    '## What this microcopy is',
    '## What this microcopy is not',
    '## Child-facing copy principles',
    '## Calm world copy rules',
    '## No-race copy rules',
    '## Choice/readiness copy rules',
    '## Family reading copy rules',
    '## Sacred care copy rules',
    '## Luvlu helper copy rules',
    '## UI integration status',
    '## No backend/no tracking assumptions',
    '## No hard gamification rules',
    '## Relationship to Parent Onboarding Trust Copy v1',
    '## Relationship to Privacy Center Copy Hardening v1',
    '## Relationship to Story World Trust Microcopy v1',
    '## What this PR changes',
    '## What this PR does not do',
    '## Follow-up recommendations for PR #142 and PR #143',
    '## Final PR #141 readiness statement',
  ], 'docs include required sections');

  checkContains(docs, [
    'No backend/auth/cloud sync/payment work is introduced.',
    'No analytics/telemetry/tracking implementation is introduced.',
    'No XP, coins, streaks, leaderboards, ranking, score, unlock, premium, referral, or viral mechanics are introduced.',
    'PR #142: Story World Trust Microcopy v1',
    'PR #143: Story Detail Trust Microcopy v1',
  ], 'docs include assumptions, gamification constraints, and roadmap follow-ups');
}

if (fs.existsSync(todayPath)) {
  const today = fs.readFileSync(todayPath, 'utf8');
  if (today.includes('buildChildHomeTrustMicrocopy')) {
    pass('today route includes optional trust microcopy binding');
  } else {
    warn('UI binding appears deferred in today route; allowed but verify sprint intent');
  }

  checkNoMatches(today, [
    /Open Story Library/i,
  ], 'today route has no Story Library regression');
}

const routePaths = [
  path.join(root, 'app/(child)/today.tsx'),
  path.join(root, 'app/(child)/worlds.tsx'),
  path.join(root, 'app/world/[slug].tsx'),
  path.join(root, 'app/story/[slug].tsx'),
];

if (routePaths.every((p) => fs.existsSync(p))) {
  pass('existing child/story routes remain present; no new route required for this validator');
}

const scriptFile = path.join(root, 'package.json');
if (fs.existsSync(scriptFile)) {
  const pkg = JSON.parse(fs.readFileSync(scriptFile, 'utf8'));
  if (pkg?.scripts?.['validate:child-home-trust-microcopy-v1'] === 'node scripts/validate-child-home-trust-microcopy-v1.mjs') {
    pass('package script validate:child-home-trust-microcopy-v1 is configured');
  } else {
    fail('package script validate:child-home-trust-microcopy-v1 is missing or incorrect');
  }
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${warnings} warnings)`);
