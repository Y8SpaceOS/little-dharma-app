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

['src/types/editorialQa.ts','src/data/editorialQaPolicy.ts','src/data/editorialQaValidator.ts','docs/content/EDITORIAL_QA_VALIDATOR_V1.md','src/types/contentImport.ts','src/data/contentImportPipeline.ts','src/data/imports/vrindavanPreviewImportManifest.ts','src/types/contentModel.ts','src/data/contentRegistry.ts'].forEach((file) => exists(file) ? logPass(`File exists: ${file}`) : logFail(`Missing required file: ${file}`));

if (exists('src/types/editorialQa.ts')) {
  const content = read('src/types/editorialQa.ts');
  ['EditorialQaSeverity','EditorialQaCategory','EditorialQaFinding','EditorialQaResult','EditorialQaPolicy'].forEach((name) => new RegExp(`export\\s+type\\s+${name}\\b`).test(content) ? logPass(`Type found: ${name}`) : logFail(`Missing type: ${name}`));
}

if (exists('src/data/editorialQaPolicy.ts')) {
  /export\s+const\s+defaultEditorialQaPolicy\b/.test(read('src/data/editorialQaPolicy.ts')) ? logPass('Policy export found: defaultEditorialQaPolicy') : logFail('Missing policy export: defaultEditorialQaPolicy');
}

if (exists('src/data/editorialQaValidator.ts')) {
  const validator = read('src/data/editorialQaValidator.ts');
  ['validateImportedStoryEditorialQa','validateImportManifestEditorialQa','getEditorialQaSummary','isStoryRuntimeEligibleByEditorialQa'].forEach((name) => new RegExp(`export\\s+function\\s+${name}\\b`).test(validator) ? logPass(`Validator function found: ${name}`) : logFail(`Missing validator function: ${name}`));
  [/blockedGamificationTerms|containsGamification/i,/Story Library/i,/sacredRespectLevel/i,/parentNote\./i,/noMicRequired/i,/runtimeEligibleStatuses|runtime_eligib/i].forEach((pat, idx) => pat.test(validator) ? logPass(`Core validator check present #${idx + 1}`) : logFail(`Missing core validator check #${idx + 1}`));
  /runtime resolver replacement/i.test(validator) ? logWarn('Validator references runtime resolver replacement phrasing; verify comment/context only.') : logPass('No active runtime resolver replacement in editorial validator source');
}

if (exists('docs/content/EDITORIAL_QA_VALIDATOR_V1.md')) {
  const docs = read('docs/content/EDITORIAL_QA_VALIDATOR_V1.md').toLowerCase();
  ['pr title and purpose','roadmap alignment','why editorial qa is needed','relationship to content model v2','relationship to story import pipeline v1','current content reality','editorial qa policy','finding severity rules','editorial qa categories','structure checks','age-band checks','sacred/cultural respect checks','parent trust checks','values metadata checks','panel quality checks','child language checks','runtime eligibility checks','luvlu boundary checks','audio metadata checks','illustration guardrail checks','preview scaffold rules','local-first/no-backend assumptions','what this pr does not do','follow-up recommendations for pr #122 and pr #123','final pr #121 readiness statement'].forEach((s) => docs.includes(s) ? logPass(`Docs section present: ${s}`) : logFail(`Missing docs section: ${s}`));
  docs.includes('pr #122: runtime story resolver v2') ? logPass('Roadmap follow-up PR #122 label is aligned') : logFail('Missing or incorrect PR #122 follow-up label');
  docs.includes('pr #123: story world data-driven browse') ? logPass('Roadmap follow-up PR #123 label is aligned') : logFail('Missing or incorrect PR #123 follow-up label');
}

const runtimeFiles = [...listFiles('app'), ...listFiles('src')];
const changedRoutes = listFiles('app').filter((f) => /\.(tsx|ts|js|jsx)$/.test(f));
const childFacingScopeFiles = ['src/data/imports/vrindavanPreviewImportManifest.ts', ...runtimeFiles.filter((f) => /^app\//.test(f))];

runtimeFiles.some((f) => /screen[-_ ]?(42[4-9]|4[3-8][0-9]|487)/i.test(path.basename(f))) ? logFail('Prototype leakage: Screens 424–487 style runtime file detected in app/ or src/.') : logPass('No Screens 424–487 runtime files detected in app/ or src/.');
containsPatternInFiles(runtimeFiles, /fake phone chrome|status bar mock|iphone frame|android frame/i) ? logFail('Fake phone chrome strings detected in app/ or src/.') : logPass('No fake phone chrome strings detected in app/ or src/.');
const editorialScopeFiles = ['src/data/editorialQaValidator.ts','src/data/editorialQaPolicy.ts','src/types/editorialQa.ts','src/data/imports/vrindavanPreviewImportManifest.ts'];
containsPatternInFiles(editorialScopeFiles, /fetch\(|axios|stripe|checkout\(|expo-av|expo-audio|startAudioRecording|startRecording|microphone|recording/i) ? logFail('Active network/payment/mic/recording implementation introduced in editorial QA scope files.') : logPass('No active network/payment/mic/recording implementation introduced in editorial QA scope files.');
containsPatternInFiles(childFacingScopeFiles, /\bstory library\b/i) ? logFail('Story Library phrase detected in child-facing active routes/import examples.') : logPass('Story World phrasing guardrail passes (no Story Library regression).');
containsPatternInFiles(['src/data/imports/vrindavanPreviewImportManifest.ts'], /\bxp\b|coins?|streaks?|leaderboards?|rankings?|level up|win reward/i) ? logFail('Hard gamification terms found in preview import example.') : logPass('No hard gamification terms found in preview import example.');
/resolveRuntimeStory|runtime resolver v2|storyworld.*render.*migrate/i.test(exists('src/data/storyWorld.ts') ? read('src/data/storyWorld.ts') : '') ? logFail('Potential active runtime resolver replacement or Story World rendering migration detected.') : logPass('No active runtime resolver replacement or Story World visible rendering migration detected.');
logPass(`App route file count snapshot: ${changedRoutes.length} (no route additions asserted by git diff check in CI/manual review).`);

logWarn('Full runtime resolver integration remains scheduled for PR #122.');

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
