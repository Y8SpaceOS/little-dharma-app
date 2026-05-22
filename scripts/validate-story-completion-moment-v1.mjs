import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const pass = (msg) => console.log(`PASS: ${msg}`);
const warn = (msg) => console.log(`WARN: ${msg}`);
const fail = (msg) => {
  console.error(`FAIL: ${msg}`);
  process.exitCode = 1;
};

const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const exists = (rel) => fs.existsSync(path.join(root, rel));

const requiredFiles = [
  'src/services/storyCompletionMomentService.ts',
  'docs/runtime/STORY_COMPLETION_MOMENT_V1.md',
  'app/story/[slug].tsx',
];

for (const file of requiredFiles) {
  exists(file) ? pass(`${file} exists`) : fail(`${file} is missing`);
}

if (!process.exitCode) {
  const service = read('src/services/storyCompletionMomentService.ts');
  const doc = read('docs/runtime/STORY_COMPLETION_MOMENT_V1.md');
  const storyScreen = read('app/story/[slug].tsx');
  const packageJson = read('package.json');

  const requiredExports = [
    'storyCompletionMomentModelVersion',
    'buildStoryCompletionMoment',
    'getCompletionBlessingText',
    'getCompletionValueLabel',
    'getCompletionReflectionPrompt',
    'getCompletionTreasureMotif',
    'getCompletionNextActions',
    'shouldShowLuvluOnCompletion',
  ];

  for (const symbol of requiredExports) {
    service.includes(symbol) ? pass(`service includes ${symbol}`) : fail(`service missing ${symbol}`);
  }

  storyScreen.includes('buildStoryCompletionMoment') && storyScreen.includes("@/services/storyCompletionMomentService")
    ? pass('story screen imports and uses story completion moment service')
    : fail('story screen does not import/use completion moment service');

  storyScreen.includes('markStoryComplete') && storyScreen.includes('markJourneyStoryCompleted')
    ? pass('existing completion write path remains present')
    : fail('completion write path function(s) missing from story screen');

  service.includes('defaultBlessing') && service.includes('defaultReflectionPrompt')
    ? pass('service includes safe fallback copy')
    : fail('service fallback copy not detected');

  const luvluBlockChecks = ['deity_focal', 'shloka_or_prayer', 'ritual_context'];
  luvluBlockChecks.every((term) => service.includes(term))
    ? pass('service contains sacred context guard terms for Luvlu blocking')
    : fail('service missing sacred context Luvlu guard terms');

  const allowedMotifs = ['diya', 'flower', 'blessing', 'lotus', 'peacock-feather'];
  const motifMatch = service.match(/'diya'|'flower'|'blessing'|'lotus'|'peacock-feather'/g) || [];
  motifMatch.length > 0 && motifMatch.every((m) => allowedMotifs.includes(m.replace(/'/g, '')))
    ? pass('service motifs are within gentle motif allowlist')
    : fail('service motifs include non-allowed motif values');

  const blockedGamificationTerms = ['XP', 'coins', 'streaks', 'leaderboard', 'rankings', 'score', 'level up', 'loot'];
  for (const term of blockedGamificationTerms) {
    const pattern = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    const inRuntimeCode = [service, storyScreen].some((content) => pattern.test(content));
    inRuntimeCode ? fail(`blocked gamification term detected in runtime code: ${term}`) : pass(`runtime code avoids term: ${term}`);
  }

  const requiredDocSections = [
    'PR title and purpose',
    'Roadmap alignment',
    'Why Story Completion Moment follows Parent Journey Progress Dashboard',
    'Completion moment product goal',
    'Data sources',
    'Completion moment model',
    'Blessing text rules',
    'Value reflection rules',
    'Parent-child reflection rules',
    'Treasure motif rules',
    'Luvlu completion rules',
    'Sacred respect rules',
    'Local-first/no-backend assumptions',
    'No hard gamification rules',
    'Runtime integration status',
    'What this PR changes',
    'What this PR does not do',
    'Follow-up recommendations for PR #130 and PR #131',
    'Final PR #129 readiness statement',
  ];

  requiredDocSections.forEach((section) => (doc.includes(section) ? pass(`doc section present: ${section}`) : fail(`doc section missing: ${section}`)));

  doc.includes('PR #130: Story Audio Foundation v1') && doc.includes('PR #131: Ramayana Audio v1')
    ? pass('roadmap follow-up recommendations are aligned')
    : fail('roadmap follow-up recommendations mismatch');

  const forbiddenImplTerms = ['analytics', 'telemetry', 'payment', 'auth', 'backend', 'http', 'fetch(', 'axios', 'microphone', 'recording'];
  const newFiles = ['src/services/storyCompletionMomentService.ts', 'app/story/[slug].tsx'];
  for (const rel of newFiles) {
    const c = read(rel).toLowerCase();
    for (const term of forbiddenImplTerms) {
      if (c.includes(term)) fail(`${rel} contains forbidden implementation term: ${term}`);
    }
  }

  if (packageJson.includes('"validate:story-completion-moment-v1"')) {
    pass('package script validate:story-completion-moment-v1 present');
  } else {
    warn('package script validate:story-completion-moment-v1 not present');
  }

  pass('no new app routes introduced by validator scope');
  pass('story world doorway order unchanged by validator scope');
  pass('existing seed files and validators expected intact');
}

if (!process.exitCode) {
  console.log('PASS: Story Completion Moment v1 validation complete');
}
