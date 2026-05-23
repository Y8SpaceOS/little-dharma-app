import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/myTreasuresTrustCopyService.ts');
const docsPath = path.join(root, 'docs/child/MY_TREASURES_TRUST_COPY_V1.md');
const routePath = path.join(root, 'app/(child)/treasures.tsx');

const pass = (m) => console.log(`PASS: ${m}`);
const warn = (m) => console.log(`WARN: ${m}`);
const fail = (m) => { console.error(`FAIL: ${m}`); failures++; };
let failures = 0;

const mustExist = [servicePath, docsPath];
for (const file of mustExist) {
  if (fs.existsSync(file)) pass(`${path.relative(root, file)} exists`);
  else fail(`${path.relative(root, file)} is missing`);
}

const service = fs.existsSync(servicePath) ? fs.readFileSync(servicePath, 'utf8') : '';
const docs = fs.existsSync(docsPath) ? fs.readFileSync(docsPath, 'utf8') : '';
const route = fs.existsSync(routePath) ? fs.readFileSync(routePath, 'utf8') : '';

const exportsRequired = [
  'myTreasuresTrustCopyModelVersion',
  'buildMyTreasuresTrustCopy',
  'getMyTreasuresGentleTitleCopy',
  'getMyTreasuresMemoryCopy',
  'getMyTreasuresNoScoreCopy',
  'getMyTreasuresNoRaceCopy',
  'getMyTreasuresRevisitCopy',
  'getMyTreasuresLocalMemoryCopy',
  'getMyTreasuresSacredCareCopy',
  'getMyTreasuresLuvluBoundaryCopy',
  'getMyTreasuresTrustCopySummary',
];
for (const name of exportsRequired) {
  service.includes(name) ? pass(`service includes ${name}`) : fail(`service missing ${name}`);
}

const forbiddenServiceCalls = [
  'AsyncStorage.setItem', 'markStoryComplete', 'markJourneyStoryCompleted', 'setJourneyProgress',
  'pruneStoryCompletions', 'getAllStoryCompletions', 'getAllJourneyProgress'
];
for (const token of forbiddenServiceCalls) {
  service.includes(token) ? fail(`service contains forbidden call/token: ${token}`) : pass(`service excludes forbidden call/token: ${token}`);
}

const requiredPhrases = [
  /Treasures are memories, not scores/i,
  /No race, no rank, no streak/i,
  /revisit a story anytime/i,
  /stay on this device/i,
  /Sacred stories.*care/i,
  /Luvlu.*helper.*not a reward/i,
];
for (const phrase of requiredPhrases) {
  phrase.test(service) ? pass(`service includes required trust phrase: ${phrase}`) : fail(`service missing required trust phrase: ${phrase}`);
}

const docsSections = [
  '## PR title and purpose','## Roadmap alignment','## Why My Treasures Trust Copy follows Parent Controls Journey Settings Copy',
  '## My Treasures trust copy goal','## What this copy is','## What this copy is not','## Child-facing treasures principles',
  '## Treasures-as-memories copy rules','## No-score/no-rank/no-streak copy rules','## Revisit story copy rules',
  '## Local memory copy rules','## Sacred care copy rules','## Luvlu boundary copy rules','## UI integration status',
  '## No backend/no tracking assumptions','## No notifications/no sharing assumptions','## No AI personalization assumptions',
  '## No reward/badge/coin assumptions','## No hard gamification rules','## Treasure/completion behavior preservation rules',
  '## Journey progress behavior preservation rules','## Story runtime/audio preservation rules',
  '## Relationship to Story Completion Moment v1','## Relationship to Parent Weekly Summary Copy Polish v1',
  '## Relationship to Parent Controls Journey Settings Copy v1','## What this PR changes','## What this PR does not do',
  '## Follow-up recommendations for PR #150 and PR #151','## Final PR #149 readiness statement'
];
for (const section of docsSections) {
  docs.includes(section) ? pass(`docs include section: ${section}`) : fail(`docs missing section: ${section}`);
}

if (/PR #150: Story World Empty\/Coming Soon Trust Copy v1/i.test(docs) && /PR #151: Story Reader Gentle Pace Copy v1/i.test(docs)) {
  pass('docs follow-up recommendations match roadmap names');
} else {
  fail('docs follow-up recommendations do not match expected roadmap names');
}

if (route.includes('buildMyTreasuresTrustCopy') || route.includes('getMyTreasuresMemoryCopy')) {
  pass('UI route includes trust copy binding on existing treasures route');
} else {
  warn('UI binding appears deferred; service/docs-only delivery detected');
}

const globalForbidden = [
  'new URL(', 'fetch(', 'axios', 'supabase', 'notification', 'whatsapp', 'sms', 'mailto', 'share(',
  'analytics', 'telemetry', 'track(', 'leaderboard', 'streak', 'coins', 'badge', 'achievement'
];
for (const token of globalForbidden) {
  if (service.toLowerCase().includes(token.toLowerCase()) && !/not|no/.test(service.toLowerCase().slice(Math.max(0, service.toLowerCase().indexOf(token)-25), service.toLowerCase().indexOf(token)+25))) {
    fail(`service contains potentially disallowed term without negative framing: ${token}`);
  }
}

if (failures > 0) {
  console.error(`\nMy Treasures Trust Copy v1 validation failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log('\nMy Treasures Trust Copy v1 validation passed.');
