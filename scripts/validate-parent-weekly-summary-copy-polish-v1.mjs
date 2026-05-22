import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicePath = path.join(root, 'src/services/parentWeeklySummaryCopyPolishService.ts');
const docsPath = path.join(root, 'docs/parent/PARENT_WEEKLY_SUMMARY_COPY_POLISH_V1.md');
const dashboardPath = path.join(root, 'app/(parent)/dashboard.tsx');
const pkgPath = path.join(root, 'package.json');

let failures = 0;
let warnings = 0;

const pass = (m) => console.log(`PASS: ${m}`);
const warn = (m) => { warnings += 1; console.log(`WARN: ${m}`); };
const fail = (m) => { failures += 1; console.log(`FAIL: ${m}`); };

const readIfExists = (filePath) => (fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '');
const assertExists = (filePath, label) => fs.existsSync(filePath) ? pass(`${label} exists`) : fail(`${label} missing`);

assertExists(servicePath, 'parentWeeklySummaryCopyPolishService');
assertExists(docsPath, 'PARENT_WEEKLY_SUMMARY_COPY_POLISH_V1 docs');
assertExists(pkgPath, 'package.json');

const service = readIfExists(servicePath);
const docs = readIfExists(docsPath);
const dashboard = readIfExists(dashboardPath);

if (service) {
  const lower = service.toLowerCase();
  const requiredExports = [
    'parentWeeklySummaryCopyPolishModelVersion',
    'buildParentWeeklySummaryCopyPolish',
    'getParentWeeklySummaryGentleTitleCopy',
    'getParentWeeklySummaryTrustIntroCopy',
    'getParentWeeklySummaryLocalFirstCopy',
    'getParentWeeklySummaryNoPressureCopy',
    'getParentWeeklySummaryStoriesRememberedCopy',
    'getParentWeeklySummaryValuesConversationCopy',
    'getParentWeeklySummaryGentleNextStepCopy',
    'getParentWeeklySummaryReturnLaterCopy',
    'getParentWeeklySummarySacredCareCopy',
    'getParentWeeklySummaryCopyPolishSummary',
  ];

  const missingExports = requiredExports.filter((name) => !service.includes(`export const ${name}`) && !service.includes(`export function ${name}`));
  missingExports.length ? fail(`required exports missing: ${missingExports.join(', ')}`) : pass('required exports present');

  const forbiddenPatterns = [
    /asyncstorage/i, /markStoryComplete\s*\(/, /markJourneyStoryCompleted\s*\(/, /setJourneyProgress\s*\(/,
    /pruneStoryCompletions\s*\(/, /getAllStoryCompletions\s*\(/, /getAllJourneyProgress\s*\(/,
    /fetch\s*\(/i, /axios/i, /supabase/i, /firebase/i, /auth/i, /payment/i, /telemetry/i, /analytics/i,
    /expo-sharing/i, /expo-notifications/i, /expo-mail-composer/i, /expo-sms/i, /linking/i, /whatsapp/i,
    /social/i, /referral/i, /invite/i, /share\s*\(/i, /notification/i
  ];

  const forbiddenHit = forbiddenPatterns.find((r) => r.test(service));
  forbiddenHit ? fail(`forbidden behavior or import found: ${forbiddenHit}`) : pass('no forbidden persistence, network, sharing, or tracking implementation');

  const requiredThemes = [
    /gentle/i,
    /(stored on this device|stays on this device)/i,
    /no score, no ranking, no pressure/i,
    /stories remembered/i,
    /(values explored.*conversation starters|values.*conversation)/i,
    /(gentle next story|optional)/i,
    /(continue whenever|return.*later)/i,
    /(sacred.*handled with care|sacred.*care)/i,
  ];
  requiredThemes.every((r) => r.test(service)) ? pass('required copy themes present') : fail('missing one or more required copy themes');

  const prohibitedTerms = ['assessment','report card','performance','leaderboard','streak','engagement','retention','growth loop','habit loop','viral','referral','tracking','analytics','telemetry','push','notification','whatsapp'];
  for (const term of prohibitedTerms) {
    if (lower.includes(term)) fail(`prohibited term found in service: ${term}`);
  }

  if (/(\brank\b|\bshare\b)/i.test(service) && !/no score, no ranking, no pressure/i.test(service)) {
    fail('rank/share appears outside explicit no-pressure context');
  } else {
    pass('rank/share usage constrained to allowed no-pressure context');
  }
}

if (docs) {
  const requiredSections = [
    '## PR title and purpose','## Roadmap alignment','## Why Parent Weekly Summary Copy Polish follows Parent Reflection Prompt Copy',
    '## Parent weekly summary copy polish goal','## What this copy is','## What this copy is not','## Parent-facing weekly summary principles',
    '## Gentle summary copy rules','## Local-first copy rules','## No-score/no-ranking/no-pressure copy rules','## Stories remembered copy rules',
    '## Values conversation copy rules','## Gentle next-step copy rules','## Return-later copy rules','## Sacred care copy rules',
    '## UI integration status','## No backend/no tracking assumptions','## No notifications/no sharing assumptions','## No AI generation assumptions',
    '## No hard gamification rules','## Weekly summary data preservation rules','## Completion/progress behavior preservation rules',
    '## Story runtime/audio preservation rules','## Relationship to Parent Weekly Summary v1','## Relationship to Parent Reflection Prompt Copy v1',
    '## Relationship to Privacy Center Copy Hardening v1','## What this PR changes','## What this PR does not do',
    '## Follow-up recommendations for PR #148 and PR #149','## Final PR #147 readiness statement'
  ];
  const missingSections = requiredSections.filter((s) => !docs.includes(s));
  missingSections.length ? fail(`docs missing sections: ${missingSections.join(' | ')}`) : pass('docs include required sections');

  if (docs.includes('PR #148: Parent Controls Journey Settings Copy v1') && docs.includes('PR #149: My Treasures Trust Copy v1')) pass('follow-up recommendations roadmap-aligned');
  else fail('follow-up recommendations mismatch roadmap naming');
}

if (dashboard) {
  if (dashboard.includes("from '@/services/parentWeeklySummaryCopyPolishService'")) pass('dashboard copy-only binding added');
  else warn('UI binding deferred in dashboard route');

  if (/router\.push\(|href=.*\/(parent|child)\/.*/i.test(dashboard) && !dashboard.includes("href='/(parent)/controls'") ) {
    fail('unexpected navigation or CTA additions detected in dashboard');
  } else {
    pass('no unexpected navigation additions detected for weekly summary copy change');
  }
}

if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg?.scripts?.['validate:parent-weekly-summary-copy-polish-v1'] === 'node scripts/validate-parent-weekly-summary-copy-polish-v1.mjs'
    ? pass('package script configured')
    : fail('package script missing/incorrect');
}

if (failures > 0) {
  console.log(`\nResult: FAIL (${failures} failures, ${warnings} warnings)`);
  process.exit(1);
}
console.log(`\nResult: PASS (${warnings} warnings)`);
