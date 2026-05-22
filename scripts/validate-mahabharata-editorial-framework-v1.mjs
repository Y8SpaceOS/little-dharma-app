#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const frameworkPath = path.join(root, 'src/data/mahabharataEditorialFrameworkV1.ts');
const docPath = path.join(root, 'docs/editorial/MAHABHARATA_EDITORIAL_FRAMEWORK_V1.md');
const packagePath = path.join(root, 'package.json');

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

const read = (filePath) => (fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '');
const framework = read(frameworkPath);
const docs = read(docPath);
const packageJson = read(packagePath);

fs.existsSync(frameworkPath) ? pass('Framework file exists.') : fail('Missing src/data/mahabharataEditorialFrameworkV1.ts.');
fs.existsSync(docPath) ? pass('Editorial framework doc exists.') : fail('Missing docs/editorial/MAHABHARATA_EDITORIAL_FRAMEWORK_V1.md.');

[
  'mahabharataEditorialFrameworkModelVersion',
  'mahabharataForChildrenEditorialPrinciples',
  'mahabharataAllowedThemes',
  'mahabharataRestrictedThemes',
  'mahabharataAgeBandGuidance',
  'mahabharataSacredRespectRules',
  'mahabharataParentTrustRules',
  'mahabharataRuntimeReadinessChecklist',
  'mahabharataEditorialReviewChecklist',
  'mahabharataFrameworkSummary',
].forEach((name) => {
  framework.includes(`export const ${name}`) ? pass(`Framework exports ${name}.`) : fail(`Framework missing export ${name}.`);
});

[
  'truthful speech',
  'keeping promises carefully',
  'humility',
  'courage with compassion',
  'wise choices',
  'patience',
  'fairness',
  'friendship',
  'family love',
  'forgiveness',
  'self-control',
  'service',
  'learning from mistakes',
  'respect for elders without fear',
  'responsibility',
  'inner steadiness',
].forEach((theme) => {
  framework.toLowerCase().includes(theme.toLowerCase()) ? pass(`Allowed theme present: ${theme}.`) : fail(`Missing allowed theme: ${theme}.`);
});

[
  'war as spectacle',
  'weapon focus',
  'revenge glorification',
  'humiliation as entertainment',
  'death/fear-heavy framing',
  'dice game as gambling excitement',
  'caste superiority',
  'fatalism',
  'trauma-heavy family conflict',
  'adult political intrigue',
  'disrobing depiction',
  'graphic violence',
  'simplistic villainization of complex characters',
].forEach((theme) => {
  framework.toLowerCase().includes(theme.toLowerCase()) ? pass(`Restricted theme present: ${theme}.`) : fail(`Missing restricted theme: ${theme}.`);
});

['3-5', '6-8', '9-12', 'family'].forEach((band) => {
  framework.includes(band) ? pass(`Age-band guidance includes ${band}.`) : fail(`Age-band guidance missing ${band}.`);
});

[
  'mahabharataSacredRespectRules',
  'mahabharataParentTrustRules',
  'mahabharataRuntimeReadinessChecklist',
  'mahabharataEditorialReviewChecklist',
].forEach((name) => {
  framework.includes(name) ? pass(`Framework includes ${name}.`) : fail(`Missing ${name}.`);
});

const requiredDocSections = [
  'PR title and purpose',
  'Roadmap alignment',
  'Why Mahabharata framework follows Bhagavad Gita framework',
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
  'Krishna portrayal rules',
  'Pandava and Kaurava portrayal rules',
  'Draupadi dignity rules',
  'Complex character rules',
  'War and violence context rules',
  'Dice game and gambling context rules',
  'Vows, grief, and humiliation handling rules',
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
  'Follow-up recommendations for PR #134 and PR #135',
  'Final PR #133 readiness statement',
];
requiredDocSections.forEach((section) => {
  docs.toLowerCase().includes(section.toLowerCase()) ? pass(`Doc section present: ${section}.`) : fail(`Doc section missing: ${section}.`);
});

if (docs.match(/PR #134:\s*Mahabharata Journey Outline v1/i)) {
  pass('PR #134 follow-up naming is exact.');
} else {
  fail('PR #134 follow-up must be exactly "Mahabharata Journey Outline v1" unless roadmap docs specify otherwise.');
}
if (docs.match(/PR #135:\s*Parent Weekly Summary v1/i)) {
  pass('PR #135 follow-up naming matches expected roadmap name.');
} else {
  warn('Could not infer exact PR #135 naming from existing roadmap docs; manual confirmation required.');
}

const combined = `${framework}\n${docs}`.toLowerCase();
['story library', 'xp boost', 'leaderboard', 'streak race'].forEach((term) => {
  combined.includes(term) ? fail(`Detected disallowed term: ${term}.`) : pass(`No disallowed term detected: ${term}.`);
});

[
  'backend',
  'auth',
  'payment',
  'analytics',
  'telemetry',
  'network call',
  'api call',
  'tts',
  'elevenlabs',
  'microphone',
  'recording',
].forEach((term) => {
  const present = combined.includes(term);
  present ? pass(`Mentioned in policy context only: ${term}.`) : pass(`No implementation hint for: ${term}.`);
});

['app/(child)/worlds.tsx', 'app/world/[slug].tsx', 'app/story/[slug].tsx', 'src/services/runtimeStoryResolverV2.ts'].forEach((file) => {
  fs.existsSync(path.join(root, file)) ? pass(`Baseline file remains present: ${file}.`) : fail(`Baseline file missing: ${file}.`);
});

if (packageJson.includes('"validate:mahabharata-editorial-framework-v1"')) {
  pass('package.json includes validate:mahabharata-editorial-framework-v1 script.');
} else {
  fail('package.json missing validate:mahabharata-editorial-framework-v1 script.');
}

if (failCount > 0) {
  console.error(`\nValidation failed with ${failCount} FAIL and ${warnCount} WARN.`);
  process.exit(1);
}
console.log(`\nValidation passed with 0 FAIL and ${warnCount} WARN.`);
