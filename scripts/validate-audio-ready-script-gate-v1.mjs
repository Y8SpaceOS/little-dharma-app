import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const root = process.cwd();
let failed = false;
const pass = (m) => console.log(`PASS ${m}`);
const warn = (m) => console.log(`WARN ${m}`);
const fail = (m) => { failed = true; console.log(`FAIL ${m}`); };
const read = (f) => fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';

const typesFile = 'src/types/audioReadyScriptGate.ts';
const serviceFile = 'src/services/audioReadyScriptGateService.ts';
const docsFile = 'docs/content/AUDIO_READY_SCRIPT_GATE_V1.md';
[typesFile, serviceFile, docsFile].forEach((f) => fs.existsSync(path.join(root, f)) ? pass(`${f} exists`) : fail(`${f} missing`));

const types = read(typesFile);
const service = read(serviceFile);
const docs = read(docsFile);
const pkg = JSON.parse(read('package.json') || '{}');

['AudioReadyScriptGateModelVersion','AudioReadyGateDecision','AudioReadyGateSeverity','AudioReadyGateIssue','AudioReadyGateStoryInput','AudioReadyNarrationScriptCheck','AudioReadyVoiceDirectionCheck','AudioReadyPronunciationCheck','AudioReadyPacingCheck','AudioReadySacredCareCheck','AudioReadyRuntimeDependencyCheck','AudioReadyGateReport','AudioReadyGateCounterImpact','AudioReadyGateConfig'].forEach((e)=>types.includes(`export type ${e}`)?pass(`type export ${e}`):fail(`missing type export ${e}`));
['audioReadyScriptGateModelVersion','buildAudioReadyScriptGateConfig','evaluateAudioReadyScript','evaluateAudioReadyScripts','createAudioReadyGateReport','getAudioReadyScriptGateRequiredFields','getAudioReadyScriptGateRules','getAudioReadyScriptGateCounterImpact','getAudioReadyScriptGateSummary'].forEach((e)=>service.includes(`export function ${e}`)||service.includes(`export const ${e}`)?pass(`service export ${e}`):fail(`missing service export ${e}`));
['info','warn','fail'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`severity ${v}`):fail(`missing severity ${v}`));
['audio_script_ready_candidate','runtime_ready_but_audio_needed','blocked','needs_pronunciation_review','needs_pacing_review','needs_sacred_care_review'].forEach((v)=>(types+service).includes(`'${v}'`)?pass(`decision ${v}`):fail(`missing decision ${v}`));
['modelVersion','storyId','title','currentStatus','decision','issues','narrationScriptCheck','voiceDirectionCheck','pronunciationCheck','pacingCheck','sacredCareCheck','runtimeDependencyCheck','counterImpact','sourceFiles','limitations'].forEach((f)=>types.includes(f)?pass(`report field ${f}`):fail(`missing report field ${f}`));
['missing_narration_script','missing_voice_direction','missing_pronunciation_notes','missing_pacing_notes','placeholder_audio_text_detected','celebrity_impersonation_request_detected','deity_impersonation_request_detected','microphone_recording_or_child_voice_capture_detected','exact_child_age_detected','hard_gamification_language_detected','story_library_child_facing_disallowed','backend_tracking_sharing_notification_language_detected','sacred_content_trivialization_detected','speed_race_streak_framing_detected'].forEach((k)=>service.includes(k)?pass(`service check ${k}`):fail(`missing service check ${k}`));

['writeFile','appendFile','AsyncStorage','markStoryComplete','markJourneyStoryCompleted','setJourneyProgress','pruneStoryCompletions','getAllStoryCompletions','getAllJourneyProgress','fetch('].forEach((x)=>service.includes(x)?fail(`forbidden call ${x}`):pass(`forbidden call absent ${x}`));
const imports = service.split('\n').filter((l)=>l.trim().startsWith('import ')).join(' ').toLowerCase();
['expo-sharing','expo-notifications','expo-mail-composer','expo-sms','expo-av','linking','axios','supabase','openai','elevenlabs','segment','mixpanel'].forEach((k)=>imports.includes(k)?fail(`forbidden import ${k}`):pass(`forbidden import absent ${k}`));

['PR title and purpose','Roadmap alignment','Why Audio-Ready Script Gate follows Runtime-Ready Story Gate v1','Audio-ready script gate goal','What this gate is','What this gate is not','Audio-ready script definition','Audio-ready versus runtime-ready','Audio-ready versus playback-ready','Audio-ready versus published-local','Required audio script fields','Narration script rules','Voice direction rules','Pronunciation note rules','Pacing note rules','Sacred care audio rules','Runtime dependency rules','Blocked audio script rules','Gate decision model','Gate report structure','Counter impact reporting','Relationship to Story Experience Index Model v1','Relationship to Bulk Content Import Pipeline v2','Relationship to Runtime-Ready Story Gate v1','Relationship to Content Scale Recovery Control Tower v1','Relationship to Story Audio Foundation v1','Relationship to future PR #159–170 content packs','No backend/no tracking assumptions','No notifications/no sharing assumptions','No AI personalization assumptions','No microphone/no recording assumptions','No TTS/no ElevenLabs/no voice API assumptions','No reward/gamification assumptions','Runtime behavior preservation rules','Story completion behavior preservation rules','Journey progress behavior preservation rules','Story reader/audio playback preservation rules','What this PR changes','What this PR does not do','Follow-up recommendations for PR #159 and PR #160','Final PR #158 readiness statement','PR #207 target alignment'].forEach((h)=>docs.includes(h)?pass(`docs include ${h}`):fail(`docs missing ${h}`));
['PR #159: Ramayana Expansion Recovery Pack v1','PR #160: Krishna Childhood Expansion Recovery Pack v1','350+ audio-ready scripts'].forEach((s)=>docs.includes(s)?pass(`docs include ${s}`):fail(`docs missing ${s}`));
(pkg.scripts?.['validate:audio-ready-script-gate-v1']==='node scripts/validate-audio-ready-script-gate-v1.mjs')?pass('package script registered'):fail('package script missing');

const changed = getChangedFiles();
const routeChanges = changed.filter((f)=>['app/','app/(child)/','app/(parent)/'].some((p)=>f.startsWith(p)));
routeChanges.length ? fail(`route changes detected: ${routeChanges.join(', ')}`) : pass('no app route changes detected');
const contentPackChanges = changed.filter((f)=>f.includes('contentPack')||f.includes('content-packs')||f.includes('/packs/'));
contentPackChanges.length ? fail(`content pack-like changes detected: ${contentPackChanges.join(', ')}`) : pass('no content pack changes detected');
const audioFileChanges = changed.filter((f)=>/\.(mp3|wav|m4a|aac|ogg)$/i.test(f));
audioFileChanges.length ? fail(`audio file changes detected: ${audioFileChanges.join(', ')}`) : pass('no audio files added');

if (failed) process.exit(1);
pass('Audio-Ready Script Gate v1 validation complete');

function getChangedFiles(){
  const run=(c)=>{try{return execSync(c,{cwd:root,stdio:['ignore','pipe','ignore']}).toString().trim();}catch{return '';}};
  const hasHead1=run('git rev-parse --verify HEAD~1');
  if(hasHead1) return (run('git diff --name-only HEAD~1..HEAD')||'').split('\n').map((s)=>s.trim()).filter(Boolean);
  const baseMain=run('git merge-base HEAD main')||run('git merge-base HEAD master');
  if(baseMain) return (run(`git diff --name-only ${baseMain}..HEAD`)||'').split('\n').map((s)=>s.trim()).filter(Boolean);
  warn('Unable to determine git diff base; skipping strict diff guards.');
  return [];
}
