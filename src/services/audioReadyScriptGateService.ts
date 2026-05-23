import type { Story } from '@/types/contentModel';
import type {
  AudioReadyGateConfig,
  AudioReadyGateCounterImpact,
  AudioReadyGateDecision,
  AudioReadyGateIssue,
  AudioReadyGateReport,
  AudioReadyGateStoryInput,
  AudioReadyScriptGateModelVersion
} from '@/types/audioReadyScriptGate';

export const audioReadyScriptGateModelVersion: AudioReadyScriptGateModelVersion = 'pr158-audio-ready-script-gate-v1';

export function buildAudioReadyScriptGateConfig(): AudioReadyGateConfig { return { modelVersion: audioReadyScriptGateModelVersion, minNarrationCharacters: 220, pr207AudioReadyTarget: 350, blockedTerms: { placeholderAudioText: ['lorem ipsum', 'todo audio', 'tbd audio', 'placeholder audio', 'coming soon audio'], celebrityImpersonation: ['in the voice of', 'sound like celebrity', 'imitate actor'], deityImpersonation: ['speak as krishna', 'speak as rama', 'speak as deity', 'deity voice impression'], childVoiceCaptureOrMic: ['record your voice', 'child should record', 'microphone', 'mic input', 'voice capture'], backendTrackingSharingNotifications: ['analytics', 'telemetry', 'track event', 'push notification', 'email reminder', 'sms reminder', 'whatsapp', 'share link', 'referral code', 'invite code', 'backend sync'], hardGamification: ['leaderboard', 'high score', 'xp bonus', 'reward streak', 'race to finish'], storyLibrary: ['story library'], exactChildAge: ['years old', 'year-old', 'age 4', 'age 5', 'age 6', 'age 7', 'age 8', 'age 9', 'age 10', 'age 11', 'age 12'], sacredTrivialization: ['funny god prank', 'cartoon god battle royale', 'silly puja speedrun', 'magic cheat code deity'], speedRaceStreak: ['speedrun', 'race', 'streak', 'fastest wins'], uiOnlyInstructions: ['tap next', 'click continue', 'open settings', 'go to parent dashboard'] } }; }

export function evaluateAudioReadyScript(story: AudioReadyGateStoryInput, config = buildAudioReadyScriptGateConfig()): AudioReadyGateReport { return createAudioReadyGateReport(story, config); }
export function evaluateAudioReadyScripts(stories: AudioReadyGateStoryInput[], config = buildAudioReadyScriptGateConfig()): AudioReadyGateReport[] { return stories.map((s) => createAudioReadyGateReport(s, config)); }

export function createAudioReadyGateReport(story: AudioReadyGateStoryInput, config = buildAudioReadyScriptGateConfig()): AudioReadyGateReport {
  const issues: AudioReadyGateIssue[] = [];
  const sourceText = JSON.stringify(story).toLowerCase();
  const storyId = getStoryId(story) || 'missing_story_id';
  const title = getTitle(story) || 'Untitled';
  const narrationScript = getNarrationScript(story);
  const voiceDirection = getVoiceDirection(story);
  const pronunciationNotes = getPronunciationNotes(story);
  const pacingNotes = getPacingNotes(story);
  const sacredTermsPresent = hasAny(sourceText, ['krishna', 'rama', 'sita', 'hanuman', 'ganesha', 'deity', 'mantra', 'shloka', 'puja', 'temple']);

  if (!getStoryId(story)) issues.push(issue('fail', 'missing_story_id', 'Story is missing storyId.', 'storyId'));
  if (!getTitle(story)) issues.push(issue('fail', 'missing_title', 'Story is missing title.', 'title'));
  if (!hasRuntimeReadinessContext(story)) issues.push(issue('fail', 'missing_runtime_readiness_context', 'Runtime readiness context or intent is required.', 'status_or_statusIntent'));
  if (!getSourceTradition(story)) issues.push(issue('fail', 'missing_source_tradition', 'sourceTradition is required.', 'sourceTradition'));
  if (!Array.isArray(getAgeBands(story)) || getAgeBands(story).length === 0) issues.push(issue('fail', 'missing_age_bands', 'ageBands are required.', 'ageBands'));
  if (!getPrimaryValue(story)) issues.push(issue('fail', 'missing_primary_value', 'primaryValue is required.', 'primaryValue'));
  if (!narrationScript.trim()) issues.push(issue('fail', 'missing_narration_script', 'audioScript.narrationScript is required.', 'audioScript.narrationScript'));
  if (!voiceDirection.trim()) issues.push(issue('fail', 'missing_voice_direction', 'audioScript.voiceDirection is required.', 'audioScript.voiceDirection'));
  if (!pronunciationNotes.trim()) issues.push(issue('fail', 'missing_pronunciation_notes', 'audioScript.pronunciationNotes is required.', 'audioScript.pronunciationNotes'));
  if (!pacingNotes.trim()) issues.push(issue('fail', 'missing_pacing_notes', 'audioScript.pacingNotes is required.', 'audioScript.pacingNotes'));
  if (sacredTermsPresent && !getSacredRespectNotes(story)) issues.push(issue('fail', 'missing_sacred_respect_notes', 'sacredRespectNotes required when sacred content appears.', 'sacredRespectNotes'));

  addBlockedLanguageIssues(sourceText, config, issues);
  if (narrationScript.trim() && narrationScript.trim().length < config.minNarrationCharacters) issues.push(issue('fail', 'narration_too_short', 'narrationScript is too short for a real audio pass.', 'audioScript.narrationScript'));
  if (hasAny(narrationScript.toLowerCase(), config.blockedTerms.uiOnlyInstructions)) issues.push(issue('fail', 'ui_only_instructions_in_narration', 'Narration script contains UI-only instructions.', 'audioScript.narrationScript'));
  if (sacredTermsPresent && hasAny(pronunciationNotes.toLowerCase(), ['just wing it', 'say however', 'funny accent'])) issues.push(issue('fail', 'pronunciation_mock_treatment', 'Pronunciation notes must avoid mock/casual treatment.', 'audioScript.pronunciationNotes'));
  if (sacredTermsPresent && !hasAny(pronunciationNotes.toLowerCase(), ['pronounce', 'phonetic', 'stress', 'syllable'])) issues.push(issue('warn', 'sacred_pronunciation_guidance_recommended', 'Sacred names/terms should include pronunciation guidance.', 'audioScript.pronunciationNotes'));
  if (isBedtimeOrCalm(story) && !hasAny(pacingNotes.toLowerCase(), ['slow', 'calm', 'gentle', 'pause'])) issues.push(issue('warn', 'bedtime_pacing_guidance_recommended', 'Bedtime/calm stories should include slower pacing guidance.', 'audioScript.pacingNotes'));

  const hasFail = issues.some((i) => i.severity === 'fail');
  const hasPronunWarn = issues.some((i) => i.code.includes('pronunciation'));
  const hasPacingWarn = issues.some((i) => i.code.includes('pacing'));
  const hasSacredWarn = issues.some((i) => i.code.includes('sacred'));
  const decision: AudioReadyGateDecision = hasFail
    ? 'blocked'
    : hasSacredWarn
      ? 'needs_sacred_care_review'
      : hasPronunWarn
        ? 'needs_pronunciation_review'
        : hasPacingWarn
          ? 'needs_pacing_review'
          : hasAudioFields(story)
            ? 'audio_script_ready_candidate'
            : 'runtime_ready_but_audio_needed';

  return {
    modelVersion: audioReadyScriptGateModelVersion,
    storyId,
    title,
    currentStatus: getCurrentStatus(story),
    decision,
    issues,
    narrationScriptCheck: { present: Boolean(narrationScript.trim()), isPlaceholder: hasAny(narrationScript.toLowerCase(), config.blockedTerms.placeholderAudioText), hasMinimumLength: narrationScript.trim().length >= config.minNarrationCharacters, avoidsUiOnlyInstructions: !hasAny(narrationScript.toLowerCase(), config.blockedTerms.uiOnlyInstructions), avoidsBlockedLanguage: !hasAny(narrationScript.toLowerCase(), config.blockedTerms.backendTrackingSharingNotifications), avoidsQuizScoreFraming: !hasAny(narrationScript.toLowerCase(), ['quiz', 'score', 'rank']), avoidsSacredTrivialization: !hasAny(narrationScript.toLowerCase(), config.blockedTerms.sacredTrivialization) },
    voiceDirectionCheck: { present: Boolean(voiceDirection.trim()), warmParentTrustedChildSafeTone: hasAny(voiceDirection.toLowerCase(), ['warm', 'gentle', 'calm', 'trust', 'child-safe']), avoidsCelebrityImitation: !hasAny(voiceDirection.toLowerCase(), config.blockedTerms.celebrityImpersonation), avoidsDeityImpersonation: !hasAny(voiceDirection.toLowerCase(), config.blockedTerms.deityImpersonation), avoidsChildVoiceCapture: !hasAny(voiceDirection.toLowerCase(), ['child should record', 'child voice']), avoidsMicrophoneRecordingRequirement: !hasAny(voiceDirection.toLowerCase(), ['microphone', 'record']) },
    pronunciationCheck: { present: Boolean(pronunciationNotes.trim()), sacredNamesNeedGuidanceWhenPresent: !sacredTermsPresent || hasAny(pronunciationNotes.toLowerCase(), ['pronounce', 'phonetic', 'stress', 'syllable']), shlokaMantraTermsNeedGuidanceWhenPresent: !hasAny(sourceText, ['shloka', 'mantra']) || hasAny(pronunciationNotes.toLowerCase(), ['shloka', 'mantra', 'phonetic', 'syllable']), avoidsMockTreatment: !hasAny(pronunciationNotes.toLowerCase(), ['joke accent', 'funny accent', 'mock']) },
    pacingCheck: { present: Boolean(pacingNotes.trim()), bedtimeCalmHasSlowerGuidanceWhenRelevant: !isBedtimeOrCalm(story) || hasAny(pacingNotes.toLowerCase(), ['slow', 'calm', 'gentle', 'pause']), energeticAvoidsOverstimulation: !hasAny(pacingNotes.toLowerCase(), ['hyper', 'overexcited', 'shout']), avoidsRaceStreakSpeedFraming: !hasAny(pacingNotes.toLowerCase(), config.blockedTerms.speedRaceStreak) },
    sacredCareCheck: { sacredTermsPresent, sacredRespectNotesPresentWhenNeeded: !sacredTermsPresent || Boolean(getSacredRespectNotes(story)), avoidsOverCartooning: !hasAny(sourceText, ['cartoon god battle']), avoidsDeityImpersonation: !hasAny(sourceText, config.blockedTerms.deityImpersonation), avoidsComedyPrankSacredFraming: !hasAny(sourceText, ['prank', 'comedy god']), avoidsLuvluAsDeityNarrator: !hasAny(sourceText, ['luvlu as krishna', 'luvlu as deity']), avoidsLuvluRewardTokenFraming: !hasAny(sourceText, ['luvlu reward token', 'earn luvlu']) },
    runtimeDependencyCheck: { hasRuntimeReadinessContext: hasRuntimeReadinessContext(story), doesNotBypassRuntimeResolverV2: !hasAny(sourceText, ['bypass runtime story resolver', 'skip runtime gate']), doesNotMutateRuntimeAvailability: true, countedSeparatelyFromRuntimeReady: true },
    counterImpact: getAudioReadyScriptGateCounterImpact([decision], config.pr207AudioReadyTarget),
    sourceFiles: ['src/services/audioReadyScriptGateService.ts', 'src/types/audioReadyScriptGate.ts'],
    limitations: ['Read-only validation report only.', 'No runtime availability mutation.', 'No playback/TTS/microphone integration in scope.']
  };
}

export function getAudioReadyScriptGateRequiredFields(): string[] { return ['storyId','title','runtime_readiness_context_or_intent','audioScript.narrationScript','audioScript.voiceDirection','audioScript.pronunciationNotes','audioScript.pacingNotes','sourceTradition','ageBands','primaryValue','sacredRespectNotes_when_sacred_content_present']; }
export function getAudioReadyScriptGateRules(): string[] { return ['Do not classify audio_script_ready_candidate if any fail-level issue exists.','Block placeholder audio metadata and blocked language.','Require respectful sacred handling and pronunciation guidance when sacred content appears.','Audio-ready status is counted separately and does not alter runtime availability gates.','No state mutation, storage writes, network, playback, or recording integration.']; }
export function getAudioReadyScriptGateCounterImpact(reportsOrDecisions: Array<AudioReadyGateReport | AudioReadyGateDecision>, pr207AudioReadyTarget = 350): AudioReadyGateCounterImpact { const decisions = reportsOrDecisions.map((item) => (typeof item === 'string' ? item : item.decision)); return { audioScriptReadyDelta: decisions.filter((d) => d === 'audio_script_ready_candidate').length, runtimeReadyButAudioNeededDelta: decisions.filter((d) => d === 'runtime_ready_but_audio_needed').length, blockedDelta: decisions.filter((d) => d === 'blocked').length, needsPronunciationReviewDelta: decisions.filter((d) => d === 'needs_pronunciation_review').length, needsPacingReviewDelta: decisions.filter((d) => d === 'needs_pacing_review').length, needsSacredCareReviewDelta: decisions.filter((d) => d === 'needs_sacred_care_review').length, pr207AudioReadyTarget }; }
export function getAudioReadyScriptGateSummary(reports: AudioReadyGateReport[]): { totalStories: number; decisionBreakdown: Record<AudioReadyGateDecision, number>; counterImpact: AudioReadyGateCounterImpact } { const decisionBreakdown: Record<AudioReadyGateDecision, number> = { audio_script_ready_candidate: 0, runtime_ready_but_audio_needed: 0, blocked: 0, needs_pronunciation_review: 0, needs_pacing_review: 0, needs_sacred_care_review: 0 }; reports.forEach((report) => { decisionBreakdown[report.decision] += 1; }); return { totalStories: reports.length, decisionBreakdown, counterImpact: getAudioReadyScriptGateCounterImpact(reports) }; }

function issue(severity: 'info' | 'warn' | 'fail', code: string, message: string, fieldPath?: string): AudioReadyGateIssue { return { severity, code, message, fieldPath }; }
function addBlockedLanguageIssues(sourceText: string, config: AudioReadyGateConfig, issues: AudioReadyGateIssue[]): void { if (hasAny(sourceText, config.blockedTerms.placeholderAudioText)) issues.push(issue('fail', 'placeholder_audio_text_detected', 'Placeholder audio metadata is blocked.')); if (hasAny(sourceText, config.blockedTerms.celebrityImpersonation)) issues.push(issue('fail', 'celebrity_impersonation_request_detected', 'Celebrity imitation is blocked.')); if (hasAny(sourceText, config.blockedTerms.deityImpersonation)) issues.push(issue('fail', 'deity_impersonation_request_detected', 'Deity impersonation is blocked.')); if (hasAny(sourceText, config.blockedTerms.childVoiceCaptureOrMic)) issues.push(issue('fail', 'microphone_recording_or_child_voice_capture_detected', 'Microphone/recording/child voice capture is blocked.')); if (hasAny(sourceText, config.blockedTerms.backendTrackingSharingNotifications)) issues.push(issue('fail', 'backend_tracking_sharing_notification_language_detected', 'Backend/analytics/notification/sharing language is blocked.')); if (hasAny(sourceText, config.blockedTerms.hardGamification)) issues.push(issue('fail', 'hard_gamification_language_detected', 'Hard gamification language is blocked.')); if (hasAny(sourceText, config.blockedTerms.storyLibrary)) issues.push(issue('fail', 'story_library_child_facing_disallowed', 'Story Library wording is blocked.')); if (hasAny(sourceText, config.blockedTerms.exactChildAge)) issues.push(issue('fail', 'exact_child_age_detected', 'Exact child age collection/framing is blocked.')); if (hasAny(sourceText, config.blockedTerms.sacredTrivialization)) issues.push(issue('fail', 'sacred_content_trivialization_detected', 'Sacred trivialization is blocked.')); if (hasAny(sourceText, config.blockedTerms.speedRaceStreak)) issues.push(issue('fail', 'speed_race_streak_framing_detected', 'Speed/race/streak framing is blocked.')); }
function hasAny(text: string, terms: string[]): boolean { return terms.some((term) => text.includes(term)); }
function hasAudioFields(story: AudioReadyGateStoryInput): boolean { const s = story as any; return Boolean(s?.audioScript?.narrationScript && s?.audioScript?.voiceDirection && s?.audioScript?.pronunciationNotes && s?.audioScript?.pacingNotes); }
function hasRuntimeReadinessContext(story: AudioReadyGateStoryInput): boolean { const s = story as any; return ['runtime_ready', 'qa_ready', 'indexed'].includes(String(s.status || '')) || ['runtime_ready', 'qa_ready'].includes(String(s.statusIntent || '')) || String(s.readinessIntent || '').includes('runtime_ready') || Boolean(s.isRuntimeEligible); }
function isBedtimeOrCalm(story: AudioReadyGateStoryInput): boolean { const s = JSON.stringify(story).toLowerCase(); return s.includes('bedtime') || s.includes('calm') || s.includes('night'); }
function getStoryId(story: AudioReadyGateStoryInput) { return (story as any).storyId || (story as Story).id; }
function getTitle(story: AudioReadyGateStoryInput) { return (story as any).title; }
function getCurrentStatus(story: AudioReadyGateStoryInput) { return String((story as any).status || (story as any).readinessStatus || 'indexed'); }
function getNarrationScript(story: AudioReadyGateStoryInput) { return String((story as any).audioScript?.narrationScript || ''); }
function getVoiceDirection(story: AudioReadyGateStoryInput) { return String((story as any).audioScript?.voiceDirection || ''); }
function getPronunciationNotes(story: AudioReadyGateStoryInput) { return String((story as any).audioScript?.pronunciationNotes || ''); }
function getPacingNotes(story: AudioReadyGateStoryInput) { return String((story as any).audioScript?.pacingNotes || ''); }
function getSourceTradition(story: AudioReadyGateStoryInput) { return (story as any).sourceTradition; }
function getAgeBands(story: AudioReadyGateStoryInput) { return (story as any).ageBands; }
function getPrimaryValue(story: AudioReadyGateStoryInput) { return (story as any).primaryValue; }
function getSacredRespectNotes(story: AudioReadyGateStoryInput) { return String((story as any).sacredRespectNotes || ''); }
