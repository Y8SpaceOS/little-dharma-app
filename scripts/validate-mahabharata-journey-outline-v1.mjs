import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const outlinePath = path.join(root, 'src/data/mahabharataJourneyOutlineV1.ts');
const docPath = path.join(root, 'docs/content/MAHABHARATA_JOURNEY_OUTLINE_V1.md');
const packagePath = path.join(root, 'package.json');
const worldsPath = path.join(root, 'app/(child)/worlds.tsx');
const contentRegistryPath = path.join(root, 'src/data/contentRegistry.ts');

const pass = (msg) => console.log(`PASS ${msg}`);
const warn = (msg) => console.log(`WARN ${msg}`);
const fail = (msg) => {
  console.error(`FAIL ${msg}`);
  hasFail = true;
};

let hasFail = false;

const exists = (filePath, label) => {
  if (!fs.existsSync(filePath)) {
    fail(`${label} missing at ${path.relative(root, filePath)}`);
    return false;
  }
  pass(`${label} exists`);
  return true;
};

const outlineExists = exists(outlinePath, 'Outline data file');
const docExists = exists(docPath, 'Documentation file');
exists(packagePath, 'package.json');
exists(contentRegistryPath, 'Content registry file');
exists(worldsPath, 'Story world browse file');

let outlineText = '';
if (outlineExists) {
  outlineText = fs.readFileSync(outlinePath, 'utf8');

  const requiredExports = [
    'mahabharataJourneyOutlineModelVersion',
    'mahabharataJourneyOutlinePrinciples',
    'mahabharataJourneyOutlineSections',
    'mahabharataJourneyOutlineEpisodes',
    'mahabharataJourneyOutlineAgeBandStrategy',
    'mahabharataJourneyOutlineRuntimeReadiness',
    'mahabharataJourneyOutlineEditorialDependencies',
    'mahabharataJourneyOutlineSummary',
  ];

  for (const exp of requiredExports) {
    if (outlineText.includes(`export const ${exp}`)) {
      pass(`Required export present: ${exp}`);
    } else {
      fail(`Missing required export: ${exp}`);
    }
  }

  const sectionTitleCount = (outlineText.match(/title:\s*'[^']+'/g) || []).length;
  if (sectionTitleCount >= 7) {
    pass('Outline includes at least 7 titled entries (sections and episodes include sufficient structure)');
  } else {
    fail('Outline titled entries below expected minimum; at least 7 sections expected or explicit rationale required');
  }

  const sectionCount = (outlineText.match(/focus:\s*'[^']+'/g) || []).length;
  if (sectionCount >= 7) {
    pass(`Section count appears to be ${sectionCount} (>= 7)`);
  } else if (outlineText.toLowerCase().includes('rationale')) {
    warn('Section count appears below 7 but rationale text appears present');
  } else {
    fail('Section count appears below 7 and no rationale detected');
  }

  const episodeCount = (outlineText.match(/futureStorySlugSuggestion:/g) || []).length;
  if (episodeCount >= 10) {
    pass(`Episode count appears to be ${episodeCount} (>= 10)`);
  } else {
    fail(`Episode count too low: ${episodeCount}`);
  }

  const requiredEpisodeFields = [
    'id:',
    'title:',
    'childFacingTitle:',
    'sequenceOrder:',
    'sectionId:',
    'summary:',
    'primaryValue:',
    'recommendedAgeBands:',
    'parentGuidanceRequired:',
    'complexityLevel:',
    'restrictedElementsToAvoid:',
    'sacredRespectNotes:',
    "editorialStatus: 'outline_only'",
    "runtimeStatus: 'not_runtime_available'",
  ];

  for (const field of requiredEpisodeFields) {
    if (outlineText.includes(field)) pass(`Episode field/status found: ${field}`);
    else fail(`Missing required episode field/status: ${field}`);
  }

  const badEpisodeStatusPatterns = [
    /editorialStatus:\s*'qa_ready'/,
    /runtimeStatus:\s*'runtime_ready'/,
    /runtimeStatus:\s*'available'/,
  ];
  for (const pattern of badEpisodeStatusPatterns) {
    if (pattern.test(outlineText)) fail(`Disallowed episode status found: ${pattern}`);
    else pass(`No disallowed episode status pattern: ${pattern}`);
  }

  const forbiddenInOutline = [
    'panels:',
    'storyPanels',
    'narration',
    'audioUrl',
    'tts',
    'elevenlabs',
    'fetch(',
    'axios',
    'microphone',
    'recording',
  ];

  for (const token of forbiddenInOutline) {
    if (outlineText.toLowerCase().includes(token.toLowerCase())) fail(`Forbidden playable/runtime token in outline: ${token}`);
  }
  pass('No forbidden playable/runtime tokens detected in outline file scan');
}

if (docExists) {
  const docText = fs.readFileSync(docPath, 'utf8').toLowerCase();
  const requiredSections = [
    'pr title and purpose',
    'roadmap alignment',
    'why mahabharata journey outline follows mahabharata editorial framework',
    'journey outline goal',
    'what this outline is',
    'what this outline is not',
    'source sensitivity',
    'editorial framework dependency',
    'journey section structure',
    'episode outline table',
    'age-band strategy',
    'parent-guided episode rules',
    'draupadi dignity handling',
    'complex character handling',
    'war/conflict handling',
    'krishna/sacred guidance handling',
    'runtime availability rules',
    'future content-pack readiness rules',
    'local-first/no-backend assumptions',
    'relationship to content model v2',
    'relationship to journey data model v1',
    'relationship to editorial qa validator v1',
    'relationship to runtime story resolver v2',
    'relationship to mahabharata editorial framework v1',
    'what this pr changes',
    'what this pr does not do',
    'follow-up recommendations for pr #135 and pr #136',
    'final pr #134 readiness statement',
  ];

  for (const section of requiredSections) {
    if (docText.includes(section)) pass(`Doc section present: ${section}`);
    else fail(`Missing doc section: ${section}`);
  }

  if (docText.includes('parent weekly summary v1')) pass('Follow-up PR #135 naming aligns with roadmap naming');
  else fail('Follow-up PR #135 naming mismatch');

  if (docText.includes('journey detail parent trust copy v1')) {
    pass('Follow-up PR #136 naming present as requested');
  } else {
    warn('Could not infer exact PR #136 naming in docs; manual roadmap confirmation recommended');
  }

  if (docText.includes('story library')) {
    fail('Story Library regression token found in documentation');
  } else {
    pass('No Story Library regression detected in documentation');
  }
}

const registryText = fs.existsSync(contentRegistryPath) ? fs.readFileSync(contentRegistryPath, 'utf8').toLowerCase() : '';
if (registryText.includes('mahabharata') && registryText.includes('runtime_ready')) {
  fail('Potential Mahabharata runtime_ready entry detected in content registry');
} else {
  pass('No Mahabharata runtime_ready signal detected in content registry scan');
}

const worldsText = fs.existsSync(worldsPath) ? fs.readFileSync(worldsPath, 'utf8').toLowerCase() : '';
if (worldsText.includes('mahabharata') && (worldsText.includes('doorway') || worldsText.includes('journey'))) {
  warn('Mahabharata tokens appear in story world browse file; verify no doorway order/output change manually');
} else {
  pass('No Mahabharata browse-doorway additions detected in story world browse file scan');
}

const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
if (packageJson.scripts?.['validate:mahabharata-journey-outline-v1'] === 'node scripts/validate-mahabharata-journey-outline-v1.mjs') {
  pass('Package script validate:mahabharata-journey-outline-v1 configured');
} else {
  fail('Missing/incorrect package script validate:mahabharata-journey-outline-v1');
}

if (hasFail) {
  console.error('\nValidation FAILED for Mahabharata Journey Outline v1.');
  process.exit(1);
}

console.log('\nValidation PASSED for Mahabharata Journey Outline v1.');
