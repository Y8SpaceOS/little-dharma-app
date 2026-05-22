import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/storyWorldTrustMicrocopyService.ts');
const docsPath = path.join(root, 'docs/child/STORY_WORLD_TRUST_MICROCOPY_V1.md');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');
const storyWorldDataPath = path.join(root, 'src/data/storyWorld.ts');

let failures = 0;
let warnings = 0;

const pass = (msg) => console.log(`PASS: ${msg}`);
const warn = (msg) => { warnings += 1; console.log(`WARN: ${msg}`); };
const fail = (msg) => { failures += 1; console.log(`FAIL: ${msg}`); };

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

const exists = (p, name) => {
  if (fs.existsSync(p)) { pass(`${name} exists`); return true; }
  fail(`${name} missing`); return false;
};

const serviceOk = exists(servicePath, 'storyWorldTrustMicrocopyService');
const docsOk = exists(docsPath, 'STORY_WORLD_TRUST_MICROCOPY_V1 docs');
const worldsOk = exists(worldsPath, 'app/(child)/worlds.tsx');
const dataOk = exists(storyWorldDataPath, 'src/data/storyWorld.ts');

if (serviceOk) {
  const service = fs.readFileSync(servicePath, 'utf8');
  checkContains(service, [
    'export const storyWorldTrustMicrocopyModelVersion',
    'export const buildStoryWorldTrustMicrocopy',
    'export const getStoryWorldChooseDoorwayCopy',
    'export const getStoryWorldNoRaceCopy',
    'export const getStoryWorldReadinessCopy',
    'export const getStoryWorldFamilyReadingCopy',
    'export const getStoryWorldSacredCareCopy',
    'export const getStoryWorldLuvluHelperCopy',
    'export const getStoryWorldComingSoonCareCopy',
    'export const getStoryWorldTrustMicrocopySummary',
  ], 'required service exports are present');

  checkNoMatches(service, [/AsyncStorage/i, /markStoryComplete\s*\(/, /markJourneyStoryCompleted\s*\(/, /setJourneyProgress\s*\(/, /pruneStoryCompletions\s*\(/], 'no persistence/progress mutation calls');

  checkNoMatches(service, [
    /fetch\s*\(/i, /axios/i, /supabase/i, /firebase/i, /\bauth\b/i, /\bbackend\b/i, /\bpayment\b/i,
    /analytics/i, /telemetry/i, /tracking/i, /email/i, /push/i, /sms/i, /whatsapp/i, /social/i,
    /referral/i, /invite/i, /Share\.share\s*\(/i, /navigator\.share\s*\(/i, /expo-sharing/i, /expo-notifications/i, /expo-mail-composer/i,
    /expo-sms/i, /expo-linking/i, /expo-file-system/i, /expo-media-library/i,
  ], 'no backend/network/sharing/notification/media integrations');

  const lower = service.toLowerCase();
  checkContains(lower, ['choose one doorway', 'no race', 'stories can wait', 'family', 'shared with care', 'luvlu can help', 'getting ready'], 'required trust themes included');

  checkNoMatches(service, [/privacy policy/i, /parent controls/i, /account/i, /premium/i, /locked/i, /unlock/i], 'no legal-heavy/monetization/gating terms in service');
  checkNoMatches(service, [/\bxp\b/i, /\bcoins\b/i, /\bstreak\b/i, /\bleaderboard\b/i, /\brank\b/i, /\bscore\b/i, /\bperformance\b/i, /achievement unlocked/i, /\bviral\b/i], 'no hard gamification terms in service');
  checkNoMatches(service, [/story\s+library/i, /exact child age/i], 'no Story Library or exact child age collection phrasing');
}

if (docsOk) {
  const docs = fs.readFileSync(docsPath, 'utf8');
  checkContains(docs, [
    '## PR title and purpose', '## Roadmap alignment',
    '## Why Story World Trust Microcopy follows Child Home Trust Microcopy',
    '## Story World trust microcopy goal', '## What this microcopy is', '## What this microcopy is not',
    '## Child-facing copy principles', '## Doorway choice copy rules', '## No-race copy rules',
    '## Readiness/waiting copy rules', '## Family reading copy rules', '## Sacred care copy rules',
    '## Luvlu helper copy rules', '## Coming-soon care copy rules', '## UI integration status',
    '## No backend/no tracking assumptions', '## No hard gamification rules', '## Story World doorway preservation rules',
    '## Relationship to Child Home Trust Microcopy v1', '## Relationship to Story Detail Trust Microcopy v1',
    '## What this PR changes', '## What this PR does not do', '## Follow-up recommendations for PR #143 and PR #144',
    '## Final PR #142 readiness statement',
  ], 'docs include required sections');
  checkContains(docs, ['No backend/auth/cloud sync/payment work is introduced.', 'No analytics/telemetry/tracking implementation is introduced.', 'PR #143: Story Detail Trust Microcopy v1', 'PR #144: Completion Trust Microcopy v1'], 'docs include assumptions and roadmap follow-ups');
}

if (worldsOk) {
  const worlds = fs.readFileSync(worldsPath, 'utf8');
  if (worlds.includes('buildStoryWorldTrustMicrocopy')) pass('minimal UI binding found in app/(child)/worlds.tsx');
  else warn('UI binding deferred in app/(child)/worlds.tsx; allowed but verify sprint intent');

  checkNoMatches(worlds, [/router\.replace\(/, /router\.push\([^)]*story-library/i, /Open Story Library/i], 'no Story Library regression or new nav behavior');
}

if (worldsOk) {
  const worlds = fs.readFileSync(worldsPath, 'utf8');
  const expected = ['Krishna Stories', 'Ganesha Stories', 'Ramayana Journey', 'Hanuman Stories', 'Bedtime Stories', 'Values Stories', 'Festival Stories'];
  const indexList = expected.map((v) => worlds.indexOf(`'${v}'`));
  if (indexList.every((idx) => idx >= 0) && indexList.every((idx, i, arr) => i === 0 || idx > arr[i - 1])) pass('canonical doorway titles remain in expected order');
  else fail('canonical doorway titles missing or out of expected order');
}

const pkgPath = path.join(root, 'package.json');
if (exists(pkgPath, 'package.json')) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg?.scripts?.['validate:story-world-trust-microcopy-v1'] === 'node scripts/validate-story-world-trust-microcopy-v1.mjs') pass('package script validate:story-world-trust-microcopy-v1 is configured');
  else fail('package script validate:story-world-trust-microcopy-v1 is missing or incorrect');
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}

console.log(`\nResult: PASS (${warnings} warnings)`);
