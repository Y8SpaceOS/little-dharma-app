import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/completionTrustMicrocopyService.ts');
const docsPath = path.join(root, 'docs/child/COMPLETION_TRUST_MICROCOPY_V1.md');
const storyRoutePath = path.join(root, 'app/story/[slug].tsx');
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
const noMatch = (content, patterns, label) => {
  const hits = patterns.filter((pattern) => pattern.test(content));
  if (hits.length) fail(`${label} (found prohibited patterns)`);
  else pass(label);
};
const hasAll = (content, values, label) => {
  const missing = values.filter((value) => !content.includes(value));
  if (missing.length) fail(`${label} (missing: ${missing.join(', ')})`);
  else pass(label);
};

const serviceOk = exists(servicePath, 'completionTrustMicrocopyService');
const docsOk = exists(docsPath, 'COMPLETION_TRUST_MICROCOPY_V1 docs');
const storyOk = exists(storyRoutePath, 'app/story/[slug].tsx');

if (serviceOk) {
  const service = fs.readFileSync(servicePath, 'utf8');
  const lower = service.toLowerCase();

  hasAll(service, [
    'export const completionTrustMicrocopyModelVersion',
    'export const buildCompletionTrustMicrocopy',
    'export const getCompletionCalmFinishCopy',
    'export const getCompletionNoScoreCopy',
    'export const getCompletionRestReadinessCopy',
    'export const getCompletionFamilyReflectionCopy',
    'export const getCompletionSacredCareCopy',
    'export const getCompletionLuvluGentleCelebrationCopy',
    'export const getCompletionProgressGentleCopy',
    'export const getCompletionTrustMicrocopySummary',
  ], 'required service exports are present');

  noMatch(service, [/AsyncStorage/i, /markStoryComplete\s*\(/, /markJourneyStoryCompleted\s*\(/, /setJourneyProgress\s*\(/, /pruneStoryCompletions\s*\(/], 'no persistence/progress mutation calls');
  noMatch(service, [
    /fetch\s*\(/i, /axios/i, /supabase/i, /firebase/i, /backend/i, /auth/i, /payment/i,
    /analytics/i, /telemetry/i, /tracking/i, /email/i, /push/i, /sms/i, /whatsapp/i,
    /social/i, /referral/i, /invite/i, /expo-sharing/i, /expo-notifications/i,
    /expo-mail-composer/i, /expo-sms/i, /expo-linking/i, /expo-file-system/i,
    /expo-media-library/i, /expo-av/i,
  ], 'no backend/network/sharing/notification/media/analytics integrations');

  if (/finished one calm story/i.test(lower)
    && /no score/i.test(lower)
    && /rest when you feel ready/i.test(lower)
    && /(talk about this story with your family|family)/i.test(lower)
    && /(remembered with care|shared with care|handled with care)/i.test(lower)
    && /luvlu/i.test(lower)
    && /(gentle helper|gentle companion)/i.test(lower)
    && /not competitive/i.test(lower)) {
    pass('service includes required completion trust themes');
  } else {
    fail('service is missing one or more required completion trust themes');
  }

  noMatch(service, [
    /privacy policy/i, /parent controls/i, /account/i, /premium/i, /locked/i,
    /unlock/i,
  ], 'service excludes prohibited parent/legal/monetization terms');

  if (/(\bxp\b|\bcoins\b|\bstreak\b|\bleaderboard\b|\brank\b|\bperformance\b|achievement unlocked|viral|referral|badge|reward)/i.test(service)) {
    fail('service includes hard gamification terms');
  } else if (/\bscore\b/i.test(service) && !/no score/i.test(lower)) {
    fail('service includes score language outside no-score context');
  } else {
    pass('service excludes hard gamification terms');
  }

  noMatch(service, [/story\s+library/i, /exact child age/i], 'service excludes Story Library and exact child age collection language');
}

if (docsOk) {
  const docs = fs.readFileSync(docsPath, 'utf8');
  hasAll(docs, [
    '## PR title and purpose', '## Roadmap alignment',
    '## Why Completion Trust Microcopy follows Story Detail Trust Microcopy',
    '## Completion trust microcopy goal', '## What this microcopy is', '## What this microcopy is not',
    '## Child-facing copy principles', '## Calm finish copy rules', '## No-score copy rules',
    '## Rest/readiness copy rules', '## Family reflection copy rules', '## Sacred care copy rules',
    '## Luvlu gentle celebration copy rules', '## Gentle progress copy rules', '## UI integration status',
    '## No backend/no tracking assumptions', '## No hard gamification rules',
    '## Completion behavior preservation rules', '## Story runtime preservation rules',
    '## Audio behavior preservation rules', '## Relationship to Story Detail Trust Microcopy v1',
    '## Relationship to Story Completion Moment v1', '## Relationship to Audio Entry Trust Microcopy v1',
    '## What this PR changes', '## What this PR does not do',
    '## Follow-up recommendations for PR #145 and PR #146', '## Final PR #144 readiness statement',
  ], 'docs include required sections');

  hasAll(docs, [
    'No backend/auth/cloud sync/payment/API work is introduced.',
    'No analytics/telemetry/tracking implementation is introduced.',
    'PR #145: Audio Entry Trust Microcopy v1',
    'PR #146: Parent Reflection Prompt Copy v1',
  ], 'docs include required assumptions and roadmap follow-ups');
}

if (storyOk) {
  const route = fs.readFileSync(storyRoutePath, 'utf8');
  if (route.includes('buildCompletionTrustMicrocopy')) pass('UI binding added in app/story/[slug].tsx');
  else warn('UI binding deferred in app/story/[slug].tsx');

  noMatch(route, [/router\.push\(/, /router\.replace\(/], 'no new navigation behavior in story route');
}

if (exists(pkgPath, 'package.json')) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg?.scripts?.['validate:completion-trust-microcopy-v1'] === 'node scripts/validate-completion-trust-microcopy-v1.mjs') pass('package script validate:completion-trust-microcopy-v1 is configured');
  else fail('package script validate:completion-trust-microcopy-v1 is missing or incorrect');
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${warnings} warnings)`);
