import type { Story } from '@/types/contentModel';
import type { BulkContentImportStoryInput } from '@/types/bulkContentImportPipeline';
import type { StoryExperienceIndexEntry } from '@/types/storyExperienceIndex';

export type AudioReadyScriptGateModelVersion = 'pr158-audio-ready-script-gate-v1';

export type AudioReadyGateDecision =
  | 'audio_script_ready_candidate'
  | 'runtime_ready_but_audio_needed'
  | 'blocked'
  | 'needs_pronunciation_review'
  | 'needs_pacing_review'
  | 'needs_sacred_care_review';

export type AudioReadyGateSeverity = 'info' | 'warn' | 'fail';

export type AudioReadyGateIssue = {
  severity: AudioReadyGateSeverity;
  code: string;
  message: string;
  fieldPath?: string;
};

export type AudioReadyGateStoryInput = StoryExperienceIndexEntry | BulkContentImportStoryInput | Story;

export type AudioReadyNarrationScriptCheck = { present: boolean; isPlaceholder: boolean; hasMinimumLength: boolean; avoidsUiOnlyInstructions: boolean; avoidsBlockedLanguage: boolean; avoidsQuizScoreFraming: boolean; avoidsSacredTrivialization: boolean; };
export type AudioReadyVoiceDirectionCheck = { present: boolean; warmParentTrustedChildSafeTone: boolean; avoidsCelebrityImitation: boolean; avoidsDeityImpersonation: boolean; avoidsChildVoiceCapture: boolean; avoidsMicrophoneRecordingRequirement: boolean; };
export type AudioReadyPronunciationCheck = { present: boolean; sacredNamesNeedGuidanceWhenPresent: boolean; shlokaMantraTermsNeedGuidanceWhenPresent: boolean; avoidsMockTreatment: boolean; };
export type AudioReadyPacingCheck = { present: boolean; bedtimeCalmHasSlowerGuidanceWhenRelevant: boolean; energeticAvoidsOverstimulation: boolean; avoidsRaceStreakSpeedFraming: boolean; };
export type AudioReadySacredCareCheck = { sacredTermsPresent: boolean; sacredRespectNotesPresentWhenNeeded: boolean; avoidsOverCartooning: boolean; avoidsDeityImpersonation: boolean; avoidsComedyPrankSacredFraming: boolean; avoidsLuvluAsDeityNarrator: boolean; avoidsLuvluRewardTokenFraming: boolean; };
export type AudioReadyRuntimeDependencyCheck = { hasRuntimeReadinessContext: boolean; doesNotBypassRuntimeResolverV2: boolean; doesNotMutateRuntimeAvailability: boolean; countedSeparatelyFromRuntimeReady: boolean; };

export type AudioReadyGateCounterImpact = {
  audioScriptReadyDelta: number;
  runtimeReadyButAudioNeededDelta: number;
  blockedDelta: number;
  needsPronunciationReviewDelta: number;
  needsPacingReviewDelta: number;
  needsSacredCareReviewDelta: number;
  pr207AudioReadyTarget: number;
};

export type AudioReadyGateReport = {
  modelVersion: AudioReadyScriptGateModelVersion;
  storyId: string;
  title: string;
  currentStatus: string;
  decision: AudioReadyGateDecision;
  issues: AudioReadyGateIssue[];
  narrationScriptCheck: AudioReadyNarrationScriptCheck;
  voiceDirectionCheck: AudioReadyVoiceDirectionCheck;
  pronunciationCheck: AudioReadyPronunciationCheck;
  pacingCheck: AudioReadyPacingCheck;
  sacredCareCheck: AudioReadySacredCareCheck;
  runtimeDependencyCheck: AudioReadyRuntimeDependencyCheck;
  counterImpact: AudioReadyGateCounterImpact;
  sourceFiles: string[];
  limitations: string[];
};

export type AudioReadyGateConfig = {
  modelVersion: AudioReadyScriptGateModelVersion;
  minNarrationCharacters: number;
  pr207AudioReadyTarget: number;
  blockedTerms: {
    placeholderAudioText: string[];
    celebrityImpersonation: string[];
    deityImpersonation: string[];
    childVoiceCaptureOrMic: string[];
    backendTrackingSharingNotifications: string[];
    hardGamification: string[];
    storyLibrary: string[];
    exactChildAge: string[];
    sacredTrivialization: string[];
    speedRaceStreak: string[];
    uiOnlyInstructions: string[];
  };
};
