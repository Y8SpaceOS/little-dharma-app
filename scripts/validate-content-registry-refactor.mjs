#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let failCount = 0;
let warnCount = 0;

function logPass(msg) { console.log(`PASS ${msg}`); }
function logWarn(msg) { warnCount += 1; console.log(`WARN ${msg}`); }
function logFail(msg) { failCount += 1; console.log(`FAIL ${msg}`); }

function resolve(p) { return path.join(root, p); }
function exists(p) { return fs.existsSync(resolve(p)); }
function read(p) { return fs.readFileSync(resolve(p), 'utf8'); }

const requiredFiles = [
  'src/data/contentRegistry.ts',
  'docs/content/CONTENT_REGISTRY_REFACTOR.md',
  'src/types/contentModel.ts',
  'src/data/contentModelAdapters.ts',
  'src/data/seed/vrindavan.ts',
  'src/data/storyWorld.ts',
  'src/services/journeys.ts'
];

for (const file of requiredFiles) {
  exists(file) ? logPass(`File exists: ${file}`) : logFail(`Missing required file: ${file}`);
}

const registryPath = 'src/data/contentRegistry.ts';
const docsPath = 'docs/content/CONTENT_REGISTRY_REFACTOR.md';
if (exists(registryPath)) {
  const registry = read(registryPath);
  const requiredExports = [
    'contentRegistryVersion','contentRegistryStories','contentRegistryStoriesById','contentRegistryStoriesBySlug',
    'contentRegistryStoryPacks','contentRegistryStoryPacksById','contentRegistryJourneys','contentRegistryJourneysById',
    'getContentRegistryStoryBySlug','getContentRegistryStoryById','getContentRegistryPackById','getContentRegistryJourneyById','getContentRegistryCoverageSummary'
  ];

  for (const name of requiredExports) {
    new RegExp(`export\\s+(const|function)\\s+${name}\\b`).test(registry)
      ? logPass(`Registry export found: ${name}`)
      : logFail(`Missing registry export: ${name}`);
  }

  /from ['"]@\/types\/contentModel['"]/.test(registry)
    ? logPass('Registry imports Content Model v2 types')
    : logFail('Registry does not import Content Model v2 types');

  /vrindavanStoryPackets/.test(registry)
    ? logPass('Registry uses Vrindavan seed packets')
    : logFail('Registry does not use vrindavanStoryPackets');

  /mapVrindavanPacketToStoryModelV2|contentModelAdapters/.test(registry)
    ? logPass('Registry uses content model adapters/equivalent mapping')
    : logFail('Registry does not use content model adapters/equivalent mapping');

  /contentRegistryStoryPacks:\s*StoryPack\[]\s*=\s*\[(.|\n)*?\{/.test(registry)
    ? logPass('Registry includes at least one StoryPack')
    : logFail('Registry must include at least one StoryPack');

  /contentRegistryJourneys:\s*DharmaJourney\[]\s*=\s*\[(.|\n)*?\{/.test(registry)
    ? logPass('Registry includes at least one DharmaJourney')
    : logFail('Registry must include at least one DharmaJourney');
}

if (exists(docsPath)) {
  const docs = read(docsPath).toLowerCase();
  const requiredSections = [
    'pr title and purpose','roadmap alignment','why a content registry is needed','relationship to content model v2',
    'current content reality','what becomes registry-backed in this pr','what remains runtime-backed by existing resolver',
    'registry exports','story registry design','storypack registry design','dharmajourney registry design','slug vs id rules',
    'local-first assumptions','no-backend/no-import assumptions','migration safety rules','existing 21 vrindavan mapping',
    'known limitations','what this pr does not do','follow-up recommendations for pr #120 and pr #121','final pr #119 readiness statement'
  ];
  for (const section of requiredSections) {
    docs.includes(section) ? logPass(`Docs section present: ${section}`) : logFail(`Missing docs section: ${section}`);
  }

  docs.includes('pr #120: story import pipeline v1')
    ? logPass('Roadmap follow-up present: PR #120 Story Import Pipeline v1')
    : logFail('Missing/incorrect roadmap follow-up for PR #120');

  docs.includes('pr #121: editorial qa validator v1')
    ? logPass('Roadmap follow-up present: PR #121 Editorial QA Validator v1')
    : logFail('Missing/incorrect roadmap follow-up for PR #121');
}

// no new route files
const tracked = fs.existsSync(resolve('.git'))
  ? fs.readFileSync(resolve('.git/index'), { encoding: 'binary' })
  : '';
void tracked;

const appFiles = listFiles('app').filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));
const badScreenNames = [/screen[-_ ]?4(2[4-9]|[3-8][0-9]|9[0-9])/i, /screen[-_ ]?48[0-7]/i];
const srcFiles = listFiles('src');
const allRuntimeFiles = [...appFiles, ...srcFiles];

if (allRuntimeFiles.some((f) => badScreenNames.some((re) => re.test(path.basename(f))))) {
  logFail('Prototype leakage: found runtime files matching Screens 424–487 naming pattern');
} else {
  logPass('No Screens 424–487 runtime files detected in app/ or src/');
}

const fakeChromePattern = /fake phone chrome|status bar mock|iphone frame|android frame/i;
if (containsPatternInFiles(allRuntimeFiles, fakeChromePattern)) {
  logFail('Fake phone chrome string detected in app/ or src/');
} else {
  logPass('No fake phone chrome strings detected in app/ or src/');
}

const activeImplPattern = /fetch\(|axios|from ['\"]@supabase\/supabase-js['\"]|stripe\.|checkout\(|expo-av|expo-audio|Audio\.|startAudioRecording|startRecording/i;
if (containsPatternInFiles(['src/data/contentRegistry.ts','src/services/contentRegistryService.ts'], activeImplPattern)) {
  logFail('Active network/payment/mic/recording/analytics implementation introduced in registry scope');
} else {
  logPass('No active scope creep implementation detected in registry scope files');
}

const childRouteFiles = ['app/(child)/worlds.tsx', 'app/(child)/treasures.tsx', 'app/world/[slug].tsx', 'app/story/[slug].tsx'].filter(exists);
const hardGamificationPattern = /\bxp\b|coins?|streaks?|leaderboards?|rankings?/i;
if (containsPatternInFiles(childRouteFiles, hardGamificationPattern)) {
  logFail('Hard gamification term found in active child runtime route files');
} else {
  logPass('No hard gamification terms found in active child runtime route files');
}

const storyLibraryPattern = /story library/i;
if (containsPatternInFiles(childRouteFiles, storyLibraryPattern)) {
  logFail('Story Library regression found in active child-facing routes');
} else {
  logPass('Active child-facing routes avoid Story Library phrasing');
}

logWarn('Registry coverage may be partial until full runtime resolver migration in future PRs (expected for PR #119).');

if (failCount > 0) {
  console.log(`\nResult: FAIL (${failCount} failures, ${warnCount} warnings)`);
  process.exit(1);
}
console.log(`\nResult: PASS (${warnCount} warnings)`);

function listFiles(dir) {
  const dirPath = resolve(dir);
  if (!fs.existsSync(dirPath)) return [];
  const out = [];
  const stack = [dirPath];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else out.push(path.relative(root, full));
    }
  }
  return out;
}

function containsPatternInFiles(files, pattern) {
  for (const file of files) {
    if (!exists(file)) continue;
    const content = read(file);
    if (pattern.test(content)) return true;
  }
  return false;
}
