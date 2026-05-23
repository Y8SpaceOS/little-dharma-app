import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/storyWorldEmptyComingSoonTrustCopyService.ts');
const docsPath = path.join(root, 'docs/child/STORY_WORLD_EMPTY_COMING_SOON_TRUST_COPY_V1.md');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');
const worldDetailPath = path.join(root, 'app/world/[slug].tsx');
const browseServicePath = path.join(root, 'src/services/storyWorldBrowseService.ts');

const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { console.error(`FAIL ${m}`); failures += 1; };

let failures = 0;

const requireFile = (p, label) => {
  if (!fs.existsSync(p)) fail(`${label} missing: ${path.relative(root, p)}`);
  else pass(`${label} exists`);
};

requireFile(servicePath, 'Service file');
requireFile(docsPath, 'Docs file');

const service = fs.existsSync(servicePath) ? fs.readFileSync(servicePath, 'utf8') : '';
const docs = fs.existsSync(docsPath) ? fs.readFileSync(docsPath, 'utf8') : '';
const worlds = fs.existsSync(worldsPath) ? fs.readFileSync(worldsPath, 'utf8') : '';
const worldDetail = fs.existsSync(worldDetailPath) ? fs.readFileSync(worldDetailPath, 'utf8') : '';
const browse = fs.existsSync(browseServicePath) ? fs.readFileSync(browseServicePath, 'utf8') : '';

const requiredExports = [
  'storyWorldEmptyComingSoonTrustCopyModelVersion',
  'buildStoryWorldEmptyComingSoonTrustCopy',
  'getStoryWorldPreparingCopy',
  'getStoryWorldPreparedWithCareCopy',
  'getStoryWorldNothingLockedCopy',
  'getStoryWorldChooseAnotherDoorwayCopy',
  'getStoryWorldStoriesCanWaitCopy',
  'getStoryWorldNoRaceCopy',
  'getStoryWorldSacredRespectCopy',
  'getStoryWorldLuvluGentleGuideCopy',
  'getStoryWorldEmptyComingSoonTrustCopySummary'
];
for (const name of requiredExports) {
  if (!new RegExp(`export\\s+(const|function)\\s+${name}\\b`).test(service)) fail(`Missing export ${name}`);
}
if (failures === 0) pass('Required exports present');

const bannedCalls = ['AsyncStorage', 'markStoryComplete', 'markJourneyStoryCompleted', 'setJourneyProgress', 'pruneStoryCompletions', 'getAllStoryCompletions', 'getAllJourneyProgress'];
for (const token of bannedCalls) {
  if (service.includes(token)) fail(`Service contains banned token: ${token}`);
}

const requiredCopyPhrases = [
  'This world is getting ready',
  'prepared with care',
  'Nothing is locked here',
  'choose another doorway',
  'Stories can wait',
  'no race',
  'prepared with respect',
  'Luvlu can help you choose gently'
];
for (const phrase of requiredCopyPhrases) {
  if (!service.toLowerCase().includes(phrase.toLowerCase())) fail(`Service missing required phrase: ${phrase}`);
}

const prohibited = ['premium','upgrade','paywall','unlock','gated','achievement','badge','coins','xp','score','rank','leaderboard','streak','level up','performance','engagement','retention','growth loop','habit loop','viral','referral','tracking','analytics','telemetry','push','notification','whatsapp'];
for (const term of prohibited) {
  const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&')}\\b`, 'i');
  if (regex.test(service)) fail(`Service includes prohibited term: ${term}`);
}
if (/reward/i.test(service) && !/without tokens or rewards/i.test(service)) fail('Service includes disallowed reward framing');

const requiredDocSections = [
  'PR title and purpose','Roadmap alignment','Why Story World Empty/Coming Soon Trust Copy follows My Treasures Trust Copy','Story World empty/coming-soon trust copy goal','What this copy is','What this copy is not','Child-facing empty/coming-soon principles','Preparing-with-care copy rules','Nothing-locked copy rules','Choose-another-doorway copy rules','Stories-can-wait copy rules','No-race copy rules','Sacred respect copy rules','Luvlu guide boundary copy rules','UI integration status','No backend/no tracking assumptions','No notifications/no sharing assumptions','No AI personalization assumptions','No reward/badge/coin assumptions','No locked/premium/paywall assumptions','No hard gamification rules','Story World doorway preservation rules','Runtime availability preservation rules','Story completion behavior preservation rules','Journey progress behavior preservation rules','Story runtime/audio preservation rules','Relationship to Story World Trust Microcopy v1','Relationship to My Treasures Trust Copy v1','Relationship to Runtime Story Resolver v2','What this PR changes','What this PR does not do','Follow-up recommendations for PR #151 and PR #152','Final PR #150 readiness statement'
];
for (const section of requiredDocSections) {
  if (!docs.toLowerCase().includes(section.toLowerCase())) fail(`Docs missing section: ${section}`);
}

if (!docs.includes('PR #151: Story Reader Gentle Pace Copy v1') || !docs.includes('PR #152: Parent Trust Copy Inventory v1')) fail('Docs follow-up recommendations mismatch');

const doorwayOrder = ['Krishna Stories','Ganesha Stories','Ramayana Journey','Hanuman Stories','Bedtime Stories','Values Stories','Festival Stories'];
const orderMatches = doorwayOrder.every((title, idx) => new RegExp(`['\"]${title}['\"][^\n]*`).test(browse) && browse.indexOf(title) >= 0 && (idx === 0 || browse.indexOf(doorwayOrder[idx - 1]) < browse.indexOf(title)));
if (!orderMatches) fail('Canonical doorway order changed or not found in browse service');
else pass('Canonical doorway order preserved');

if (worlds.includes('Story Library') || worldDetail.includes('Story Library') || service.includes('Story Library')) fail('Story Library regression found');

if (worlds === fs.readFileSync(worldsPath, 'utf8') && worldDetail === fs.readFileSync(worldDetailPath, 'utf8')) warn('UI binding deferred (no changes detected in worlds/detail routes)');

if (failures > 0) {
  console.error(`\n${failures} validation failure(s).`);
  process.exit(1);
}

console.log('\nPASS Story World Empty/Coming Soon Trust Copy v1 validation passed.');
