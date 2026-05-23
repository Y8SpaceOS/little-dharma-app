import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
let failed = false;
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { failed = true; console.log(`FAIL ${m}`); };
const read = (f) => fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';

const requiredFiles = ['src/types/runtimeReadyStoryGate.ts','src/services/runtimeReadyStoryGateService.ts','docs/content/RUNTIME_READY_STORY_GATE_V1.md'];
requiredFiles.forEach((f)=>fs.existsSync(path.join(root,f))?pass(`${f} exists`):fail(`${f} missing`));
const types = read('src/types/runtimeReadyStoryGate.ts');
const service = read('src/services/runtimeReadyStoryGateService.ts');
const docs = read('docs/content/RUNTIME_READY_STORY_GATE_V1.md');
const pkg = JSON.parse(read('package.json') || '{}');

['RuntimeReadyStoryGateModelVersion','RuntimeReadyGateDecision','RuntimeReadyGateSeverity','RuntimeReadyGateIssue','RuntimeReadyGateStoryInput','RuntimeReadyGatePanelCheck','RuntimeReadyGateParentNoteCheck','RuntimeReadyGateReflectionCheck','RuntimeReadyGateCategoryCheck','RuntimeReadyGateJourneyCheck','RuntimeReadyGateResolverCheck','RuntimeReadyGateReport','RuntimeReadyGateCounterImpact','RuntimeReadyGateConfig'].forEach((e)=>types.includes(`export type ${e}`)?pass(`type export ${e}`):fail(`missing type export ${e}`));
['runtimeReadyStoryGateModelVersion','buildRuntimeReadyStoryGateConfig','evaluateRuntimeReadyStory','evaluateRuntimeReadyStories','createRuntimeReadyGateReport','getRuntimeReadyStoryGateRequiredFields','getRuntimeReadyStoryGateRules','getRuntimeReadyStoryGateCounterImpact','getRuntimeReadyStoryGateSummary'].forEach((e)=>service.includes(`export function ${e}`)||service.includes(`export const ${e}`)?pass(`service export ${e}`):fail(`missing service export ${e}`));
['info','warn','fail'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`severity ${v}`):fail(`missing severity ${v}`));
['runtime_ready_candidate','qa_ready_only','blocked','needs_editorial_review','needs_runtime_fields'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`decision ${v}`):fail(`missing decision ${v}`));
['modelVersion','storyId','title','currentStatus','decision','issues','panelCheck','parentNoteCheck','reflectionCheck','categoryCheck','journeyCheck','resolverCheck','counterImpact','sourceFiles','limitations'].forEach((f)=>types.includes(f)?pass(`report field ${f}`):fail(`missing report field ${f}`));
['missing_story_id','missing_title','missing_source_tradition','missing_age_bands','missing_panels_minimum','panel_missing_text','missing_parent_note_source_context','missing_parent_note_discussion_prompt','missing_reflection_prompt','invalid_category_mapping','journey_order_missing','getRuntimeStoryEligibility','exact_child_age_detected','hard_gamification_language_detected','story_library_child_facing_disallowed','backend_tracking_sharing_notification_language_detected','sacred_content_trivialization_detected'].forEach((k)=>service.includes(k)?pass(`service check ${k}`):fail(`missing service check ${k}`));

['writeFile','appendFile','AsyncStorage','contentRegistryStories.push','contentRegistryStoryPacks.push','markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions','getAllStoryCompletions','getAllJourneyProgress','fetch('].forEach((b)=>service.includes(b)?fail(`forbidden call ${b}`):pass(`forbidden call absent ${b}`));
const imports = service.split('\n').filter((l)=>l.trim().startsWith('import ')).join(' ').toLowerCase();
['expo-sharing','expo-notifications','expo-mail-composer','expo-sms','linking','axios','supabase','openai','segment','mixpanel'].forEach((k)=>imports.includes(k)?fail(`forbidden import ${k}`):pass(`forbidden import absent ${k}`));

['PR title and purpose','Roadmap alignment','Why Runtime-Ready Story Gate follows Bulk Content Import Pipeline v2','Runtime-ready story gate goal','What this gate is','What this gate is not','Runtime-ready definition','Runtime-ready versus QA-ready','Runtime-ready versus published-local','Runtime-ready versus audio-ready','Required story fields','Panel quality rules','Parent note rules','Reflection prompt rules','Category mapping rules','Dharma Journey mapping rules','Resolver eligibility rules','Blocked story rules','Gate decision model','Gate report structure','Counter impact reporting','Relationship to Story Experience Index Model v1','Relationship to Bulk Content Import Pipeline v2','Relationship to Content Scale Recovery Control Tower v1','Relationship to Runtime Story Resolver v2','Relationship to future PR #159–170 content packs','No backend/no tracking assumptions','No notifications/no sharing assumptions','No AI personalization assumptions','No reward/gamification assumptions','Runtime behavior preservation rules','Story completion behavior preservation rules','Journey progress behavior preservation rules','Story reader/audio preservation rules','What this PR changes','What this PR does not do','Follow-up recommendations for PR #158 and PR #159','Final PR #157 readiness statement','PR #207 target alignment'].forEach((h)=>docs.includes(h)?pass(`docs include ${h}`):fail(`docs missing ${h}`));
['PR #158: Audio-Ready Script Gate v1','PR #159: Ramayana Expansion Recovery Pack v1'].forEach((x)=>docs.includes(x)?pass(`follow-up ${x}`):fail(`missing follow-up ${x}`));
(pkg.scripts?.['validate:runtime-ready-story-gate-v1']==='node scripts/validate-runtime-ready-story-gate-v1.mjs')?pass('package script registered'):fail('package script missing');

const changed = getChangedFiles();
const routeChanges = changed.filter((f)=>['app/','app/(child)/','app/(parent)/','app/story/'].some((p)=>f.startsWith(p)));
routeChanges.length ? fail(`route changes detected: ${routeChanges.join(', ')}`) : pass('no app route changes detected');
const contentPackChanges = changed.filter((f)=>f.includes('contentPack')||f.includes('content-packs')||f.includes('/packs/'));
contentPackChanges.length ? fail(`content pack-like changes detected: ${contentPackChanges.join(', ')}`) : pass('no content pack additions detected');

if (failed) process.exit(1);
pass('Runtime-Ready Story Gate v1 validation complete');

function getChangedFiles(){
  const run=(c)=>{try{return execSync(c,{cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim();}catch{return '';}};
  const hasHead1=run('git rev-parse --verify HEAD~1');
  if(hasHead1) return (run('git diff --name-only HEAD~1..HEAD')||'').split('\n').map((s)=>s.trim()).filter(Boolean);
  const baseMain=run('git merge-base HEAD main')||run('git merge-base HEAD master');
  if(baseMain) return (run(`git diff --name-only ${baseMain}..HEAD`)||'').split('\n').map((s)=>s.trim()).filter(Boolean);
  warn('Unable to determine git diff base; skipping strict diff guards.');
  return [];
}
