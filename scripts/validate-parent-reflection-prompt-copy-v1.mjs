import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/parentReflectionPromptCopyService.ts');
const docsPath = path.join(root, 'docs/parent/PARENT_REFLECTION_PROMPT_COPY_V1.md');
const storyPath = path.join(root, 'app/story/[slug].tsx');
const pkgPath = path.join(root, 'package.json');

let failures = 0;
let warnings = 0;

const pass = (m) => console.log(`PASS: ${m}`);
const warn = (m) => { warnings += 1; console.log(`WARN: ${m}`); };
const fail = (m) => { failures += 1; console.log(`FAIL: ${m}`); };

const exists = (p, label) => fs.existsSync(p) ? (pass(`${label} exists`), true) : (fail(`${label} missing`), false);

const serviceOk = exists(servicePath, 'parentReflectionPromptCopyService');
const docsOk = exists(docsPath, 'PARENT_REFLECTION_PROMPT_COPY_V1 docs');
exists(storyPath, 'app/story/[slug].tsx');
exists(pkgPath, 'package.json');

if (serviceOk) {
  const s = fs.readFileSync(servicePath, 'utf8');
  const lower = s.toLowerCase();
  const requiredExports = [
    'parentReflectionPromptCopyModelVersion','buildParentReflectionPromptCopy','getParentReflectionGentleIntroCopy','getParentReflectionOptionalCopy','getParentReflectionNoQuizCopy','getParentReflectionValueQuestionCopy','getParentReflectionPeaceQuestionCopy','getParentReflectionFamilyConversationCopy','getParentReflectionSacredCareCopy','getParentReflectionReturnLaterCopy','getParentReflectionPromptCopySummary'
  ];
  const missing = requiredExports.filter((x) => !s.includes(`export const ${x}`) && !s.includes(`export function ${x}`));
  missing.length ? fail(`required exports missing: ${missing.join(', ')}`) : pass('required exports present');

  const forbidden = [/AsyncStorage/i,/markStoryComplete\s*\(/,/markJourneyStoryCompleted\s*\(/,/setJourneyProgress\s*\(/,/pruneStoryCompletions\s*\(/,/fetch\s*\(/i,/axios/i,/supabase/i,/firebase/i,/analytics/i,/telemetry/i,/tracking/i,/expo-sharing/i,/expo-notifications/i,/expo-mail-composer/i,/expo-sms/i,/whatsapp/i,/share\.share\s*\(/i,/navigator\.share/i];
  const hit = forbidden.find((r) => r.test(s));
  hit ? fail(`forbidden implementation found: ${hit}`) : pass('no forbidden persistence/backend/sharing/tracking implementations');

  const themes = [
    /reflection is optional/i,
    /no quiz, no score, no pressure/i,
    /(kindness|value)/i,
    /(peaceful|calm)/i,
    /family conversation/i,
    /(sacred stories.*care|discussed with care|handled with care)/i,
    /(another day|return.*later)/i,
  ];
  themes.every((r) => r.test(lower)) ? pass('required reflection themes present') : fail('missing one or more required reflection themes');

  const hardTerms = ['assessment','report card','performance','rank','streak','engagement','retention','growth loop','habit loop','viral','referral','share','tracking','analytics','telemetry','push','notification','whatsapp'];
  for (const t of hardTerms) {
    if (lower.includes(t)) {
      if (/no quiz, no score, no pressure/.test(lower) && t === 'score') pass('score appears only in no-pressure context');
      else fail(`prohibited term found in service: ${t}`);
    }
  }
}

if (docsOk) {
  const d = fs.readFileSync(docsPath, 'utf8');
  const sections = [
    '## PR title and purpose','## Roadmap alignment','## Why Parent Reflection Prompt Copy follows Audio Entry Trust Microcopy','## Parent reflection prompt copy goal','## What this copy is','## What this copy is not','## Parent-facing reflection principles','## Optional reflection copy rules','## No-quiz/no-score copy rules','## Value question copy rules','## Peace/calm question copy rules','## Family conversation copy rules','## Sacred care copy rules','## Return-later copy rules','## UI integration status','## No backend/no tracking assumptions','## No notifications/no sharing assumptions','## No AI generation assumptions','## No hard gamification rules','## Completion behavior preservation rules','## Story runtime/audio preservation rules','## Relationship to Completion Trust Microcopy v1','## Relationship to Parent Weekly Summary v1','## Relationship to Parent Sharing Copy v1','## What this PR changes','## What this PR does not do','## Follow-up recommendations for PR #147 and PR #148','## Final PR #146 readiness statement'
  ];
  const missing = sections.filter((x) => !d.includes(x));
  missing.length ? fail(`docs missing sections: ${missing.join(' | ')}`) : pass('docs include required sections');
  if (d.includes('PR #147: Parent Weekly Summary Copy Polish v1') && d.includes('PR #148: Parent Controls Journey Settings Copy v1')) pass('follow-up roadmap naming aligned');
  else fail('follow-up roadmap naming mismatch');
}

if (fs.existsSync(storyPath)) {
  const route = fs.readFileSync(storyPath, 'utf8');
  if (route.includes('buildParentReflectionPromptCopy')) pass('UI binding added in app/story/[slug].tsx');
  else warn('UI binding deferred');
  if (/href=.*parent|router\.push\(/i.test(route)) fail('possible navigation addition detected in story route');
}

if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg?.scripts?.['validate:parent-reflection-prompt-copy-v1'] === 'node scripts/validate-parent-reflection-prompt-copy-v1.mjs'
    ? pass('package script configured')
    : fail('package script missing/incorrect');
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}
console.log(`\nResult: PASS (${warnings} warnings)`);
