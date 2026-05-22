#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let failCount = 0;
let warnCount = 0;

const logPass = (msg) => console.log(`PASS ${msg}`);
const logWarn = (msg) => { warnCount += 1; console.log(`WARN ${msg}`); };
const logFail = (msg) => { failCount += 1; console.log(`FAIL ${msg}`); };
const resolve = (p) => path.join(root, p);
const exists = (p) => fs.existsSync(resolve(p));
const read = (p) => fs.readFileSync(resolve(p), 'utf8');

const requiredFiles = [
  'src/types/contentImport.ts',
  'src/data/contentImportPipeline.ts',
  'src/data/imports/vrindavanPreviewImportManifest.ts',
  'docs/content/STORY_IMPORT_PIPELINE_V1.md',
  'src/types/contentModel.ts',
  'src/data/contentRegistry.ts',
  'src/data/contentModelAdapters.ts'
];
requiredFiles.forEach((file) => (exists(file) ? logPass(`File exists: ${file}`) : logFail(`Missing required file: ${file}`)));

if (exists('src/types/contentImport.ts')) {
  const content = read('src/types/contentImport.ts');
  [
    'ContentImportManifest','ImportedStoryDraft','ImportedStoryPanelDraft','ImportedStoryPackDraft',
    'ImportedDharmaJourneyDraft','ContentImportMode','ContentImportValidationResult'
  ].forEach((name) => new RegExp(`export\\s+type\\s+${name}\\b`).test(content)
    ? logPass(`Type found: ${name}`)
    : logFail(`Missing type: ${name}`));
}

if (exists('src/data/contentImportPipeline.ts')) {
  const pipeline = read('src/data/contentImportPipeline.ts');
  [
    'validateContentImportManifest','convertImportedStoryDraftToStory','convertImportedStoryPackDraftToStoryPack',
    'convertImportedDharmaJourneyDraftToDharmaJourney','getContentImportPipelineSummary'
  ].forEach((name) => new RegExp(`export\\s+function\\s+${name}\\b`).test(pipeline)
    ? logPass(`Pipeline function found: ${name}`)
    : logFail(`Missing pipeline function: ${name}`));

  /runtime resolver replacement/i.test(pipeline)
    ? logWarn('Pipeline references runtime resolver replacement phrasing; verify comments only.')
    : logPass('No active runtime resolver replacement markers in pipeline source');
}

if (exists('src/data/imports/vrindavanPreviewImportManifest.ts')) {
  const manifest = read('src/data/imports/vrindavanPreviewImportManifest.ts');
  /preview|scaffold/i.test(manifest)
    ? logPass('Example manifest is explicitly marked preview/scaffold')
    : logFail('Example manifest must explicitly indicate preview/scaffold status');

  const storyIdCount = (manifest.match(/\bid:\s*'vrindavan-preview-/g) || []).length;
  storyIdCount <= 5
    ? logPass(`Example manifest story count within limit (${storyIdCount} <= 5)`)
    : logFail(`Example manifest exceeds 5 imported stories (${storyIdCount})`);

  /story library/i.test(manifest)
    ? logFail('Story Library regression found in import example')
    : logPass('Import example avoids Story Library phrasing');

  /\bxp\b|coins?|streaks?|leaderboards?|rankings?/i.test(manifest)
    ? logFail('Hard gamification term found in import example')
    : logPass('No hard gamification terms found in import example');
}

if (exists('docs/content/STORY_IMPORT_PIPELINE_V1.md')) {
  const docs = read('docs/content/STORY_IMPORT_PIPELINE_V1.md').toLowerCase();
  const sections = [
    'pr title and purpose','roadmap alignment','why the import pipeline is needed','relationship to content model v2',
    'relationship to content registry refactor','current content reality','import manifest design','importedstorydraft design',
    'importedstorypackdraft design','importeddharmajourneydraft design','validation result design','local-first assumptions',
    'no-backend/no-remote-import assumptions','status lifecycle rules','runtime eligibility rules','sacred/cultural respect guardrails',
    'luvlu usage boundaries','parent trust requirements','example manifest notes','what this pr does not do',
    'follow-up recommendations for pr #121 and pr #122','final pr #120 readiness statement'
  ];
  sections.forEach((section) => docs.includes(section) ? logPass(`Docs section present: ${section}`) : logFail(`Missing docs section: ${section}`));

  docs.includes('pr #121: editorial qa validator v1') ? logPass('Roadmap follow-up PR #121 label is aligned') : logFail('Missing or incorrect PR #121 follow-up label');
  docs.includes('pr #122: runtime story resolver v2') ? logPass('Roadmap follow-up PR #122 label is aligned') : logFail('Missing or incorrect PR #122 follow-up label');
}

const runtimeFiles = [...listFiles('app'), ...listFiles('src')];
const activeChildRoutes = ['app/(child)/today.tsx','app/(child)/worlds.tsx','app/(child)/treasures.tsx','app/world/[slug].tsx','app/story/[slug].tsx'].filter(exists);
const importScopeFiles = ['src/data/imports/vrindavanPreviewImportManifest.ts','src/data/contentImportPipeline.ts'];
const childFacingScopeFiles = [...activeChildRoutes, 'src/data/imports/vrindavanPreviewImportManifest.ts'];
if (runtimeFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-8][0-9]|487)/i.test(path.basename(f)))) {
  logFail('Prototype leakage: Screens 424–487 style runtime file detected in app/ or src/.');
} else {
  logPass('No Screens 424–487 runtime files detected in app/ or src/.');
}

containsPatternInFiles(runtimeFiles, /fake phone chrome|status bar mock|iphone frame|android frame/i)
  ? logFail('Fake phone chrome strings detected in app/ or src/.')
  : logPass('No fake phone chrome strings detected in app/ or src/.');

containsPatternInFiles(importScopeFiles, /fetch\(|axios|stripe|checkout\(|expo-av|expo-audio|startAudioRecording|startRecording|microphone|recording/i)
  ? logFail('Active network/payment/mic/recording implementation introduced in import pipeline scope files.')
  : logPass('No active network/payment/mic/recording implementation detected in import pipeline scope files.');

containsPatternInFiles(childFacingScopeFiles, /story library/i)
  ? logFail('Story Library phrase detected in active child routes or import scope.')
  : logPass('Story World phrasing guardrail passes (no Story Library in active child routes/import scope).');

logWarn('Pipeline currently targets preview/import scaffold coverage only; full editorial QA validation is planned in PR #121.');

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
  return files.some((file) => exists(file) && pattern.test(read(file)));
}
