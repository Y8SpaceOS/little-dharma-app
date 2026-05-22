import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reqFiles = [
  'src/types/runtimeStoryResolver.ts',
  'src/services/runtimeStoryResolverV2.ts',
  'docs/content/RUNTIME_STORY_RESOLVER_V2.md',
  'src/types/contentModel.ts',
  'src/types/contentImport.ts',
  'src/types/editorialQa.ts',
  'src/data/contentRegistry.ts',
  'src/data/contentImportPipeline.ts',
  'src/data/editorialQaValidator.ts',
  'src/services/journeys.ts'
];

const pass = (m) => console.log(`PASS: ${m}`);
const warn = (m) => console.log(`WARN: ${m}`);
const fail = (m) => { console.error(`FAIL: ${m}`); failed = true; };
let failed = false;

const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(root, f));

for (const f of reqFiles) exists(f) ? pass(`${f} exists`) : fail(`${f} missing`);

if (!failed) {
  const typeFile = read('src/types/runtimeStoryResolver.ts');
  ['RuntimeStorySource','RuntimeStoryEligibility','RuntimeResolvedStoryV2','RuntimeStoryResolverSummary'].forEach((x)=>
    new RegExp(`\\b${x}\\b`).test(typeFile) ? pass(`type ${x} found`) : fail(`type ${x} missing`)
  );

  const resolver = read('src/services/runtimeStoryResolverV2.ts');
  [
    'runtimeStoryResolverVersion',
    'getRuntimeStoryEligibility',
    'resolveRuntimeStoryV2BySlug',
    'resolveRuntimeStoryV2ById',
    'getRuntimeStoryResolverSummary',
    'mapRegistryStoryToRuntimeResolvedStoryV2',
    'mapLegacyJourneyToRuntimeResolvedStoryV2'
  ].forEach((x)=> new RegExp(`export\\s+(const|function)\\s+${x}\\b`).test(resolver) ? pass(`export ${x} found`) : fail(`export ${x} missing`));

  /contentRegistry/.test(resolver) ? pass('resolver uses content registry') : fail('resolver must use content registry');
  /(editorialQaValidator|validateImportedStoryEditorialQa|editorialQaPolicy)/.test(resolver) ? pass('resolver uses editorial QA gate') : fail('resolver must use editorial QA');
  /(getStoryJourneyBySlug|legacy_vrindavan)/.test(resolver) ? pass('legacy fallback path present') : fail('legacy fallback missing');
  /preview/.test(resolver) ? pass('preview scaffold blocking logic present') : fail('preview scaffold blocking missing');

  /(fetch\(|axios|from ['"]node:fs['"]|from ['"]fs['"])/.test(resolver)
    ? fail('resolver includes network/filesystem usage')
    : pass('resolver avoids network/filesystem usage');

  /(supabase|auth|payment|checkout|microphone|recording|analytics|telemetry)/i.test(resolver)
    ? fail('resolver appears to import prohibited backend/auth/payment/audio/mic/analytics concerns')
    : pass('resolver avoids prohibited concerns');

  const doc = read('docs/content/RUNTIME_STORY_RESOLVER_V2.md').toLowerCase();
  [
    'pr title and purpose','roadmap alignment','why runtime story resolver v2 is needed','relationship to content model v2',
    'relationship to content registry refactor','relationship to story import pipeline v1','relationship to editorial qa validator v1',
    'current runtime reality','resolver source priority','registry eligibility rules','editorial qa gating rules',
    'legacy vrindavan fallback rules','preview scaffold blocking rules','missing story behavior','runtimeresolvedstoryv2 shape',
    'local-first/no-backend assumptions','what this pr changes','what this pr does not do','migration safety rules',
    'follow-up recommendations for pr #123 and pr #124','final pr #122 readiness statement'
  ].forEach((s)=> doc.includes(s) ? pass(`doc section includes: ${s}`) : fail(`doc missing section: ${s}`));

  doc.includes('pr #123: story world data-driven browse') ? pass('roadmap follow-up PR #123 aligned') : fail('PR #123 follow-up missing/misaligned');
  doc.includes('pr #124: journey data model v1') ? pass('roadmap follow-up PR #124 aligned') : fail('PR #124 follow-up missing/misaligned');

  const appFiles = fs.readdirSync(path.join(root, 'app'), { withFileTypes: true });
  const hasPrototypeLeak = ['424','425','486','487'].some((n)=>JSON.stringify(appFiles).includes(n));
  !hasPrototypeLeak ? pass('no prototype screen files detected in app root listing') : fail('prototype screen leakage detected');

  const routes = read('app/(child)/treasures.tsx') + read('app/world/[slug].tsx') + read('app/story/[slug].tsx');
  routes.includes('Story Library') ? fail('child-facing route copy regressed to Story Library') : pass('child-facing route copy avoids Story Library regression');

  /(XP|coins|streak|leaderboard|ranking)/i.test(routes) ? warn('hard gamification term found in active child routes (legacy content/manual review)') : pass('no hard gamification terms in active child routes');
  /fake phone chrome/i.test(routes) ? fail('fake phone chrome string found') : pass('no fake phone chrome strings in active routes');

  const storyRoute = read('app/story/[slug].tsx');
  /runtimeStoryResolverV2/.test(storyRoute) ? pass('story route integrated with v2 resolver') : warn('story route not integrated with v2 resolver yet (deferred safe integration)');
}

if (failed) process.exit(1);
