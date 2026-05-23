import type { Story } from '@/types/contentModel';
import type { BulkContentImportStoryInput } from '@/types/bulkContentImportPipeline';
import type { StoryExperienceCategoryId, StoryExperienceIndexEntry } from '@/types/storyExperienceIndex';

export type RuntimeReadyStoryGateModelVersion = 'pr157-runtime-ready-story-gate-v1';

export type RuntimeReadyGateDecision =
  | 'runtime_ready_candidate'
  | 'qa_ready_only'
  | 'blocked'
  | 'needs_editorial_review'
  | 'needs_runtime_fields';

export type RuntimeReadyGateSeverity = 'info' | 'warn' | 'fail';

export type RuntimeReadyGateIssue = {
  severity: RuntimeReadyGateSeverity;
  code: string;
  message: string;
  fieldPath?: string;
};

export type RuntimeReadyGateStoryInput = StoryExperienceIndexEntry | BulkContentImportStoryInput | Story;

export type RuntimeReadyGatePanelCheck = {
  panelCount: number;
  minimumPanelCount: number;
  allPanelsHaveText: boolean;
  hasExcessivelyLongPanel: boolean;
  sacredCareNotesPresentWhenNeeded: boolean;
};

export type RuntimeReadyGateParentNoteCheck = {
  hasParentNote: boolean;
  hasSourceContext: boolean;
  hasValueForParentOrEquivalent: boolean;
  hasDiscussionPrompt: boolean;
  culturallyRespectfulWording: boolean;
};

export type RuntimeReadyGateReflectionCheck = {
  hasReflectionPrompt: boolean;
  avoidsQuizScoreFraming: boolean;
  gentleOptionalFamilySafeTone: boolean;
};

export type RuntimeReadyGateCategoryCheck = {
  isMappedToKnownCategory: boolean;
  inferredFromStoryPackId: boolean;
  inferredCategoryId?: StoryExperienceCategoryId;
  placeholderOnlyCategory: boolean;
};

export type RuntimeReadyGateJourneyCheck = {
  journeyIdPresent: boolean;
  journeyOrderPresentWhenJourneyIdPresent: boolean;
  journeyOutlineOnly: boolean;
};

export type RuntimeReadyGateResolverCheck = {
  checkedAgainstRuntimeResolver: boolean;
  resolverCanRender?: boolean;
  resolverReason?: string;
};

export type RuntimeReadyGateCounterImpact = {
  runtimeReadyDelta: number;
  qaReadyOnlyDelta: number;
  blockedDelta: number;
  needsReviewDelta: number;
  pr207RuntimeReadyTarget: number;
};

export type RuntimeReadyGateReport = {
  modelVersion: RuntimeReadyStoryGateModelVersion;
  storyId: string;
  title: string;
  currentStatus: string;
  decision: RuntimeReadyGateDecision;
  issues: RuntimeReadyGateIssue[];
  panelCheck: RuntimeReadyGatePanelCheck;
  parentNoteCheck: RuntimeReadyGateParentNoteCheck;
  reflectionCheck: RuntimeReadyGateReflectionCheck;
  categoryCheck: RuntimeReadyGateCategoryCheck;
  journeyCheck: RuntimeReadyGateJourneyCheck;
  resolverCheck: RuntimeReadyGateResolverCheck;
  counterImpact: RuntimeReadyGateCounterImpact;
  sourceFiles: string[];
  limitations: string[];
};

export type RuntimeReadyGateConfig = {
  modelVersion: RuntimeReadyStoryGateModelVersion;
  allowedCategoryIds: StoryExperienceCategoryId[];
  blockedTerms: {
    exactChildAge: string[];
    gamification: string[];
    storyLibrary: string[];
    backendTrackingSharingNotifications: string[];
    sacredTrivialization: string[];
    performanceScoreLanguage: string[];
  };
  maxPanelCharacters: number;
  pr207RuntimeReadyTarget: number;
};
