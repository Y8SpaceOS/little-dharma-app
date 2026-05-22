#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const frameworkPath = path.join(root, 'src/data/bhagavadGitaEditorialFrameworkV1.ts');
const docPath = path.join(root, 'docs/editorial/BHAGAVAD_GITA_FOR_CHILDREN_EDITORIAL_FRAMEWORK_V1.md');

let failCount = 0;
let warnCount = 0;

const pass = (msg) => console.log(`PASS ${msg}`);
const warn = (msg) => {
  warnCount += 1;
  console.log(`WARN ${msg}`);
};
const fail = (msg) => {
  failCount += 1;
  console.error(`FAIL ${msg}`);
};

const readFile = (filePath) => (fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '');

const framework = readFile(frameworkPath);
const docs = readFile(docPath);

fs.existsSync(frameworkPath)
  ? pass('Framework file exists.')
  : fail('Missing src/data/bhagavadGitaEditorialFrameworkV1.ts.');

fs.existsSync(docPath)
  ? pass('Editorial framework doc exists.')
  : fail('Missing docs/editorial/BHAGAVAD_GITA_FOR_CHILDREN_EDITORIAL_FRAMEWORK_V1.md.');

const expectedExports = [
  'bhagavadGitaEditorialFrameworkModelVersion',
  'bhagavadGitaForChildrenEditorialPrinciples',
  'bhagavadGitaAllowedThemes',
  'bhagavadGitaRestrictedThemes',
  'bhagavadGitaAgeBandGuidance',
  'bhagavadGitaSacredRespectRules',
  'bhagavadGitaParentTrustRules',
  'bhagavadGitaRuntimeReadinessChecklist',
  'bhagavadGitaEditorialReviewChecklist',
  'bhagavadGitaFrameworkSummary',
];

expectedExports.forEach((name) => {
  framework.includes(`export const ${name}`)
    ? pass(`Framework exports ${name}.`)
    : fail(`Framework missing export ${name}.`);
});

[
  'courage with gentleness',
  'doing the right thing',
  'calm action',
  'self-control',
  'devotion',
  'friendship with the Divine',
  'gratitude',
  'focus',
  'humility',
  'compassion',
  'truthful speech',
  'wise choices',
  'service',
  'inner steadiness',
].forEach((theme) => {
  framework.toLowerCase().includes(theme.toLowerCase())
    ? pass(`Allowed theme present: ${theme}.`)
    : fail(`Missing allowed theme: ${theme}.`);
});

const requiredRestrictedThemes = [
  'battlefield violence as spectacle',
  'weapon focus',
  'death/fear-heavy framing',
  'caste/duty absolutism',
  'blind obedience',
  'theological superiority',
  'sectarian claims',
  'fatalism',
];
requiredRestrictedThemes.forEach((theme) => {
  framework.toLowerCase().includes(theme.toLowerCase())
    ? pass(`Restricted theme present: ${theme}.`)
    : fail(`Missing restricted theme: ${theme}.`);
});

['3-5', '6-8', '9-12', 'family'].forEach((band) => {
  framework.includes(band)
    ? pass(`Age-band guidance includes ${band}.`)
    : fail(`Age-band guidance missing ${band}.`);
});

['bhagavadGitaSacredRespectRules', 'bhagavadGitaParentTrustRules', 'bhagavadGitaRuntimeReadinessChecklist', 'bhagavadGitaEditorialReviewChecklist'].forEach((name) => {
  framework.includes(name) ? pass(`Framework includes ${name}.`) : fail(`Missing ${name}.`);
});

const requiredDocSections = [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Bhagavad Gita framework follows Ramayana Audio v1',
  'Editorial goal',
  'What this framework is',
  'What this framework is not',
  'Source sensitivity',
  'Child-safety principles',
  'Sacred respect principles',
  'Allowed themes',
  'Restricted themes',
  'Age-band guidance',
  'Parent trust rules',
  'Shloka and sacred sound rules',
  'Krishna and Arjuna portrayal rules',
  'Battlefield context rules',
  'Story adaptation rules',
  'Reflection prompt rules',
  'Audio readiness rules',
  'Runtime readiness checklist',
  'Editorial review checklist',
  'Relationship to Content Model v2',
  'Relationship to Editorial QA Validator v1',
  'Relationship to Runtime Story Resolver v2',
  'Relationship to Story Audio Foundation v1',
  'Local-first/no-backend assumptions',
  'What this PR changes',
  'What this PR does not do',
  'Follow-up recommendations for PR #133 and PR #134',
  'Final PR #132 readiness statement',
];
requiredDocSections.forEach((section) => {
  docs.toLowerCase().includes(section.toLowerCase())
    ? pass(`Doc section present: ${section}.`)
    : fail(`Doc section missing: ${section}.`);
});

const forbiddenPatterns = [
  { label: 'new app routes', pattern: /app\/[^\s]+\.(tsx|ts)/i, path: 'app' },
];
if (forbiddenPatterns.length) {
  pass('No new app route checks are enforced via git status in CI assumptions.');
}

const grepFiles = [
  'src/data/contentRegistry.ts',
  'app/(child)/worlds.tsx',
  'app/world/[slug].tsx',
  'app/story/[slug].tsx',
  'src/services/runtimeStoryResolverV2.ts',
];
grepFiles.forEach((relativePath) => {
  fs.existsSync(path.join(root, relativePath))
    ? pass(`Baseline file remains present: ${relativePath}.`)
    : fail(`Baseline file missing: ${relativePath}.`);
});

const combinedNewContent = `${framework}\n${docs}`.toLowerCase();
['story library', 'xp boost', 'leaderboard', 'streak race'].forEach((term) => {
  combinedNewContent.includes(term)
    ? fail(`Detected disallowed phrase in new framework/docs: ${term}.`)
    : pass(`No disallowed phrase detected: ${term}.`);
});

['api', 'tts', 'elevenlabs', 'microphone', 'recording', 'telemetry', 'analytics', 'payment', 'auth'].forEach((term) => {
  combinedNewContent.includes(term)
    ? warn(`Term appears in framework/docs and should be contextual-only: ${term}.`)
    : pass(`No implementation hint in framework/docs for: ${term}.`);
});

if (docs.includes('PR #133: Mahabharata Editorial Framework v1')) {
  pass('PR #133 follow-up naming is exact.');
} else {
  fail('PR #133 follow-up must be exactly "Mahabharata Editorial Framework v1".');
}

if (docs.match(/PR #134:\s*Mahabharata Journey Outline v1/i)) {
  pass('PR #134 follow-up matches existing roadmap naming.');
} else {
  warn('Could not verify PR #134 exact naming from existing docs; manual confirmation required.');
}

if (failCount > 0) {
  console.error(`\nValidation failed with ${failCount} FAIL and ${warnCount} WARN.`);
  process.exit(1);
}

console.log(`\nValidation passed with 0 FAIL and ${warnCount} WARN.`);
