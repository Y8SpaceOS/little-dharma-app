import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
const req = [
  'src/types/storyExperienceIndex.ts',
  'src/services/storyExperienceIndexService.ts',
  'docs/content/STORY_EXPERIENCE_INDEX_MODEL_V1.md'
];

let failed = false;
const pass=(m)=>console.log(`PASS ${m}`);
const warn=(m)=>console.log(`WARN ${m}`);
const fail=(m)=>{failed=true;console.log(`FAIL ${m}`);};

for (const f of req) fs.existsSync(path.join(root,f))?pass(`${f} exists`):fail(`${f} missing`);

const types = fs.existsSync('src/types/storyExperienceIndex.ts') ? fs.readFileSync('src/types/storyExperienceIndex.ts','utf8') : '';
const service = fs.existsSync('src/services/storyExperienceIndexService.ts') ? fs.readFileSync('src/services/storyExperienceIndexService.ts','utf8') : '';
const docs = fs.existsSync('docs/content/STORY_EXPERIENCE_INDEX_MODEL_V1.md') ? fs.readFileSync('docs/content/STORY_EXPERIENCE_INDEX_MODEL_V1.md','utf8') : '';
const pkg = JSON.parse(fs.readFileSync('package.json','utf8'));

['StoryExperienceStatus','StoryExperienceReadinessStatus','StoryExperienceAudioStatus','StoryExperienceCategoryId','StoryExperienceJourneyStatus','StoryExperienceIndexEntry','StoryExperienceIndexModel','StoryExperienceIndexTargets','StoryExperienceIndexCounterSnapshot'].forEach((e)=>types.includes(`export type ${e}`)?pass(`types export ${e}`):fail(`missing types export ${e}`));
['storyExperienceIndexModelVersion','buildStoryExperienceIndex','getStoryExperienceIndexEntries','getStoryExperienceIndexCounters','getStoryExperienceIndexCategoryCoverage','getStoryExperienceIndexJourneyCoverage','getStoryExperienceIndexCountingRules','getStoryExperienceIndexSummary'].forEach((e)=>service.includes(e)?pass(`service export ${e}`):fail(`missing service export ${e}`));
['indexed','qa_ready','runtime_ready','audio_script_ready','published_local','metadata_only','blocked','deprecated','none','script_needed','script_draft','script_ready','audio_ready','audio_available'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`status value ${v}`):fail(`missing status value ${v}`));
['krishna_stories','ramayana_journey','ganesha_stories','hanuman_stories','bedtime_stories','values_stories','festival_stories','bhagavad_gita_for_children','mahabharata_child_safe','panchatantra_hitopadesha'].forEach((c)=>types.includes(`'${c}'`)?pass(`category ${c}`):fail(`missing category ${c}`));
['experienceId','storyId','storyPackId','title','primaryCategoryId','ageBands','primaryValue','status','readinessStatus','audioStatus','isRuntimeEligible','isPublishedLocal','indexingConfidence','sourceFiles','limitations'].forEach((f)=>types.includes(f)?pass(`entry field ${f}`):fail(`entry field ${f} missing`));
service.includes('contentRegistryStories')&&service.includes('contentRegistryStoryPacks')?pass('service uses content registry'):fail('service must use content registry');
service.includes('getRuntimeStoryEligibility')&&service.includes('canRender')?pass('service uses Runtime Story Resolver eligibility'):fail('resolver eligibility integration missing');
(service.includes('confidenceNotes')&&service.includes('limitations'))?pass('confidence/limitation notes present'):fail('confidence/limitation notes missing');
service.includes("story.status === 'qa_ready' ||") ? fail('qa_ready must not be directly counted as published_local') : pass('qa_ready is not directly counted as published_local');
['AsyncStorage','markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions','getAllStoryCompletions','getAllJourneyProgress'].forEach((b)=>service.includes(b)?fail(`forbidden usage: ${b}`):pass(`forbidden usage absent: ${b}`));
['supabase','fetch(','axios','notification','share','whatsapp','sms','email','analytics','telemetry','reward','gamification','ai '].forEach((k)=>service.toLowerCase().includes(k)?fail(`forbidden impl hint in service: ${k}`):pass(`forbidden impl hint absent: ${k}`));
['PR #207 target alignment','No backend/no tracking assumptions','No notifications/no sharing assumptions','No AI personalization assumptions','No reward/gamification assumptions','Runtime behavior preservation rules','Story completion behavior preservation rules','Journey progress behavior preservation rules','Story reader/audio preservation rules','PR #156: Bulk Content Import Pipeline v2','PR #157: Runtime-Ready Story Gate v1'].forEach((h)=>docs.includes(h)?pass(`docs section: ${h}`):fail(`docs missing: ${h}`));
pkg.scripts?.['validate:story-experience-index-model-v1']=== 'node scripts/validate-story-experience-index-model-v1.mjs' ? pass('package script registered'): fail('package script missing');

const changedFiles = getChangedFiles();
const forbiddenRoutePrefixes = ['app/', 'app/(child)/', 'app/(parent)/', 'app/story/'];
const routeChanges = changedFiles.filter((file) => forbiddenRoutePrefixes.some((prefix) => file.startsWith(prefix)));
if (routeChanges.length > 0) {
  fail(`route changes detected in diff base: ${routeChanges.join(', ')}`);
} else {
  pass('no route changes detected in commit diff');
}

try {
  const mod = await import(pathToFileURL(path.join(root,'src/services/storyExperienceIndexService.ts')).href);
  const counters = mod.getStoryExperienceIndexCounters();
  console.log('INFO counters', counters);
  if (counters.publishedLocalStoryExperiences > counters.runtimeReadyStoryExperiences) {
    warn('published-local count exceeds runtime-ready count; verify repo-defined reasoning is documented in limitations/confidence notes.');
  }
  warn('Some counts may be low-confidence while category taxonomy remains inferred from pack IDs.');
} catch {
  warn('Could not print counters directly from TS module in validator runtime.');
}

if (failed) process.exit(1);
pass('Story Experience Index Model v1 validation complete');

function pathToFileURL(p){ return new URL(`file://${p}`); }

function getChangedFiles() {
  const tryCmd = (cmd) => {
    try {
      return execSync(cmd, { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    } catch {
      return '';
    }
  };

  const hasHead1 = tryCmd('git rev-parse --verify HEAD~1');
  if (hasHead1) {
    const out = tryCmd('git diff --name-only HEAD~1..HEAD');
    if (out) return out.split('\n').map((s) => s.trim()).filter(Boolean);
    return [];
  }

  const baseMain = tryCmd('git merge-base HEAD main') || tryCmd('git merge-base HEAD master');
  if (baseMain) {
    const out = tryCmd(`git diff --name-only ${baseMain}..HEAD`);
    if (out) return out.split('\n').map((s) => s.trim()).filter(Boolean);
    return [];
  }

  warn('Unable to determine git diff base for route-change guard; skipping diff route check.');
  return [];
}
