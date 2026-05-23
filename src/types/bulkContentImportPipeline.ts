import type { AgeBand } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

export type BulkContentImportPipelineModelVersion = 'pr156-bulk-content-import-pipeline-v2';

export type BulkContentImportValidationSeverity = 'info' | 'warn' | 'fail';

export type BulkContentImportReadinessDecision =
  | 'index_only'
  | 'qa_ready_candidate'
  | 'runtime_ready_candidate'
  | 'audio_script_ready_candidate'
  | 'blocked';

export type BulkContentImportStoryPanelInput = {
  panelId: string;
  text: string;
  illustrationPrompt?: string;
  emotionalTone?: string;
  sacredCareNote?: string;
};

export type BulkContentImportParentNoteInput = {
  sourceContext: string;
  valueForParent: string;
  discussionPrompt: string;
  culturalCareNote?: string;
};

export type BulkContentImportAudioScriptInput = {
  narrationScript: string;
  voiceDirection: string;
  pronunciationNotes: string;
  pacingNotes: string;
  audioReadinessIntent: 'none' | 'draft' | 'ready';
};

export type BulkContentImportJourneyMappingInput = {
  journeyId: string;
  journeyOrder?: number;
};

export type BulkContentImportCategoryMappingInput = {
  primaryCategoryId: StoryExperienceCategoryId;
  secondaryCategoryIds: StoryExperienceCategoryId[];
};

export type BulkContentImportStoryInput = {
  storyId: string;
  title: string;
  shortTitle?: string;
  summary: string;
  sourceTradition: string;
  primaryCategoryId: StoryExperienceCategoryId;
  secondaryCategoryIds: StoryExperienceCategoryId[];
  journeyId?: string;
  journeyOrder?: number;
  ageBands: AgeBand[];
  durationMinutes?: number;
  primaryValue: string;
  secondaryValues: string[];
  characters: string[];
  panels: BulkContentImportStoryPanelInput[];
  parentNote?: BulkContentImportParentNoteInput;
  reflectionPrompt?: string;
  audioScript?: BulkContentImportAudioScriptInput;
  statusIntent: 'index_only' | 'qa_ready' | 'runtime_ready';
  readinessIntent: BulkContentImportReadinessDecision;
  audioStatusIntent: 'none' | 'script_needed' | 'script_ready';
  contentWarnings?: string[];
  sacredRespectNotes?: string;
};

export type BulkContentImportPackInput = {
  packId: string;
  packTitle: string;
  sourceTradition: string;
  primaryCategoryId: StoryExperienceCategoryId;
  intendedJourneyIds: string[];
  targetAgeBands: AgeBand[];
  stories: BulkContentImportStoryInput[];
  importBatchId: string;
  createdForPr: string;
  editorialOwner?: string;
  notes?: string;
};

export type BulkContentImportValidationIssue = {
  severity: BulkContentImportValidationSeverity;
  code: string;
  message: string;
  storyId?: string;
  fieldPath?: string;
};

export type BulkContentImportCounterImpact = {
  indexedDelta: number;
  qaReadyDelta: number;
  runtimeReadyDelta: number;
  audioScriptReadyDelta: number;
  blockedDelta: number;
  pr207Targets: {
    indexedStoryExperiencesTarget: number;
    runtimeReadyStoriesTarget: number;
    audioReadyScriptsTarget: number;
  };
};

export type BulkContentImportDryRunReport = {
  modelVersion: BulkContentImportPipelineModelVersion;
  importBatchId: string;
  packId: string;
  totalStoriesSubmitted: number;
  storiesAcceptedForIndex: number;
  qaReadyCandidates: number;
  runtimeReadyCandidates: number;
  audioScriptReadyCandidates: number;
  blockedStories: number;
  validationIssues: BulkContentImportValidationIssue[];
  counterImpact: BulkContentImportCounterImpact;
  categoryImpact: Array<{ categoryId: StoryExperienceCategoryId; indexedCount: number; runtimeReadyCount: number }>;
  journeyImpact: Array<{ journeyId: string; indexedCount: number; runtimeReadyCount: number }>;
  readinessDecisions: Array<{ storyId: string; decision: BulkContentImportReadinessDecision; reasons: string[] }>;
  sourceFiles: string[];
  limitations: string[];
};

export type BulkContentImportPipelineConfig = {
  modelVersion: BulkContentImportPipelineModelVersion;
  allowedCategoryIds: StoryExperienceCategoryId[];
  blockedTerms: {
    gamification: string[];
    childFacingDisallowed: string[];
    backendTrackingSharing: string[];
    sacredTrivialization: string[];
  };
  pr207Targets: {
    indexedStoryExperiencesTarget: number;
    runtimeReadyStoriesTarget: number;
    audioReadyScriptsTarget: number;
  };
};
