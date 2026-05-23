import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
let failed = false;
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { failed = true; console.log(`FAIL ${m}`); };

const req = [
  'src/types/bulkContentImportPipeline.ts',
  'src/services/bulkContentImportPipelineService.ts',
  'docs/content/BULK_CONTENT_IMPORT_PIPELINE_V2.md'
];
req.forEach((f) => fs.existsSync(path.join(root, f)) ? pass(`${f} exists`) : fail(`${f} missing`));

const types = read('src/types/bulkContentImportPipeline.ts');
const service = read('src/services/bulkContentImportPipelineService.ts');
const docs = read('docs/content/BULK_CONTENT_IMPORT_PIPELINE_V2.md');
const pkg = JSON.parse(read('package.json') || '{}');

[
  'BulkContentImportPipelineModelVersion','BulkContentImportPackInput','BulkContentImportStoryInput','BulkContentImportStoryPanelInput','BulkContentImportParentNoteInput','BulkContentImportAudioScriptInput','BulkContentImportJourneyMappingInput','BulkContentImportCategoryMappingInput','BulkContentImportValidationIssue','BulkContentImportValidationSeverity','BulkContentImportDryRunReport','BulkContentImportCounterImpact','BulkContentImportReadinessDecision','BulkContentImportPipelineConfig'
].forEach((e)=>types.includes(`export type ${e}`)?pass(`type export ${e}`):fail(`missing type export ${e}`));

['bulkContentImportPipelineModelVersion','buildBulkContentImportPipelineConfig','validateBulkContentImportPack','createBulkContentImportDryRunReport','getBulkContentImportRequiredFields','getBulkContentImportReadinessRules','getBulkContentImportCounterImpact','getBulkContentImportPipelineSummary'].forEach((e)=>service.includes(`export function ${e}`)||service.includes(`export const ${e}`)?pass(`service export ${e}`):fail(`missing service export ${e}`));

['info','warn','fail'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`severity value ${v}`):fail(`missing severity value ${v}`));
['index_only','qa_ready_candidate','runtime_ready_candidate','audio_script_ready_candidate','blocked'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`readiness decision ${v}`):fail(`missing readiness decision ${v}`));

['packId','packTitle','sourceTradition','primaryCategoryId','intendedJourneyIds','targetAgeBands','stories','importBatchId','createdForPr'].forEach((f)=>types.includes(f)?pass(`pack field ${f}`):fail(`missing pack field ${f}`));
['modelVersion','importBatchId','packId','totalStoriesSubmitted','storiesAcceptedForIndex','qaReadyCandidates','runtimeReadyCandidates','audioScriptReadyCandidates','blockedStories','validationIssues','counterImpact','categoryImpact','journeyImpact','readinessDecisions','sourceFiles','limitations'].forEach((f)=>types.includes(f)?pass(`dry-run field ${f}`):fail(`missing dry-run field ${f}`));

['duplicate_story_id','missing_story_id','missing_title','missing_source_tradition','qa_missing_panels','runtime_missing_panels','audio_missing_narration_script','exact_child_age_detected','forbidden_gamification_language','story_library_disallowed','backend_tracking_sharing_language'].forEach((k)=>service.includes(k)?pass(`service check present ${k}`):fail(`service check missing ${k}`));

['writeFile','appendFile','AsyncStorage','contentRegistryStories.push','contentRegistryStoryPacks.push','markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions','getAllStoryCompletions','getAllJourneyProgress'].forEach((b)=>service.includes(b)?fail(`forbidden mutation call ${b}`):pass(`forbidden mutation call absent ${b}`));
const serviceImports = service.split('\n').filter((line)=>line.trim().startsWith('import ')).join(' ').toLowerCase();
['expo-sharing','expo-notifications','expo-mail-composer','expo-sms','whatsapp','supabase','axios'].forEach((k)=>serviceImports.includes(k)?fail(`forbidden import ${k}`):pass(`forbidden import absent ${k}`));
['fetch('].forEach((k)=>service.toLowerCase().includes(k)?fail(`forbidden network call ${k}`):pass(`forbidden network call absent ${k}`));

[
  'PR title and purpose','Roadmap alignment','Why Bulk Content Import Pipeline follows Story Experience Index Model','Bulk Content Import Pipeline goal','What this pipeline is','What this pipeline is not','Import pack input contract','Story input contract','Panel input contract','Parent note input contract','Audio script input contract','Category mapping rules','Dharma Journey mapping rules','Index candidate rules','QA-ready candidate rules','Runtime-ready candidate rules','Audio-script-ready candidate rules','Blocked story rules','Dry-run report structure','Counter impact reporting','Relationship to Story Experience Index Model v1','Relationship to Content Scale Recovery Control Tower v1','Relationship to Runtime Story Resolver v2','Relationship to future PR #159–170 content packs','No backend/no tracking assumptions','No notifications/no sharing assumptions','No AI personalization assumptions','No reward/gamification assumptions','Runtime behavior preservation rules','Story completion behavior preservation rules','Journey progress behavior preservation rules','Story reader/audio preservation rules','What this PR changes','What this PR does not do','Follow-up recommendations for PR #157 and PR #158','Final PR #156 readiness statement','PR #207 target alignment'
].forEach((h)=>docs.includes(h)?pass(`docs include ${h}`):fail(`docs missing ${h}`));

docs.includes('PR #157: Runtime-Ready Story Gate v1') ? pass('PR #157 follow-up aligned') : fail('missing PR #157 follow-up');
docs.includes('PR #158: Audio-Ready Script Gate v1') ? pass('PR #158 follow-up aligned') : fail('missing PR #158 follow-up');

(pkg.scripts?.['validate:bulk-content-import-pipeline-v2'] === 'node scripts/validate-bulk-content-import-pipeline-v2.mjs') ? pass('package script registered') : fail('package script missing');

const changedFiles = getChangedFiles();
const forbiddenRoutePrefixes = ['app/', 'app/(child)/', 'app/(parent)/', 'app/story/'];
const routeChanges = changedFiles.filter((file) => forbiddenRoutePrefixes.some((prefix) => file.startsWith(prefix)));
routeChanges.length ? fail(`route changes detected: ${routeChanges.join(', ')}`) : pass('no app route changes detected');

const contentPackChanges = changedFiles.filter((f)=>f.includes('contentPack')||f.includes('content-packs')||f.includes('/packs/'));
contentPackChanges.length ? fail(`content pack-like changes detected: ${contentPackChanges.join(', ')}`) : pass('no content pack additions detected');

const examplePath = 'docs/content/examples/BULK_CONTENT_IMPORT_PIPELINE_V2_EXAMPLE.json';
if (fs.existsSync(examplePath)) {
  warn('optional example fixture exists; ensure docs-only usage');
  const references = getRepoFiles().filter((f)=>f!==examplePath && read(f).includes('BULK_CONTENT_IMPORT_PIPELINE_V2_EXAMPLE.json'));
  references.length ? fail(`example fixture imported outside docs-only scope: ${references.join(', ')}`) : pass('example fixture not imported into runtime data');
} else {
  pass('optional example fixture not added');
}

if (failed) process.exit(1);
pass('Bulk Content Import Pipeline v2 validation complete');

function read(file){ return fs.existsSync(file) ? fs.readFileSync(file,'utf8') : ''; }
function getRepoFiles(){
  return execSync('rg --files', { cwd: root, stdio: ['ignore','pipe','ignore'] }).toString().trim().split('\n').filter(Boolean);
}
function getChangedFiles() {
  const run = (cmd) => { try { return execSync(cmd, { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { return ''; } };
  const hasHead1 = run('git rev-parse --verify HEAD~1');
  if (hasHead1) return (run('git diff --name-only HEAD~1..HEAD') || '').split('\n').map((s) => s.trim()).filter(Boolean);
  const baseMain = run('git merge-base HEAD main') || run('git merge-base HEAD master');
  if (baseMain) return (run(`git diff --name-only ${baseMain}..HEAD`) || '').split('\n').map((s) => s.trim()).filter(Boolean);
  warn('Unable to determine git diff base; skipping strict diff guards.');
  return [];
}
