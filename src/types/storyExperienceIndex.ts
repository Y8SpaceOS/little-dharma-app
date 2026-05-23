import type { AgeBand } from '@/types/contentModel';

export type StoryExperienceStatus = 'indexed' | 'qa_ready' | 'runtime_ready' | 'audio_script_ready' | 'published_local';

export type StoryExperienceReadinessStatus = 'metadata_only' | 'qa_ready' | 'runtime_ready' | 'blocked' | 'deprecated';

export type StoryExperienceAudioStatus = 'none' | 'script_needed' | 'script_draft' | 'script_ready' | 'audio_ready' | 'audio_available';

export type StoryExperienceCategoryId =
  | 'krishna_stories'
  | 'ramayana_journey'
  | 'ganesha_stories'
  | 'hanuman_stories'
  | 'bedtime_stories'
  | 'values_stories'
  | 'festival_stories'
  | 'bhagavad_gita_for_children'
  | 'mahabharata_child_safe'
  | 'panchatantra_hitopadesha';

export type StoryExperienceJourneyStatus = 'none' | 'journey_indexed' | 'journey_ordered' | 'journey_runtime_ready' | 'journey_outline_only';

export type StoryExperienceIndexEntry = {
  experienceId: string;
  storyId: string;
  storyPackId: string;
  title: string;
  shortTitle?: string;
  primaryCategoryId: StoryExperienceCategoryId;
  secondaryCategoryIds: StoryExperienceCategoryId[];
  journeyId?: string;
  journeyOrder?: number;
  ageBands: AgeBand[];
  primaryValue: string;
  secondaryValues: string[];
  status: StoryExperienceStatus;
  readinessStatus: StoryExperienceReadinessStatus;
  audioStatus: StoryExperienceAudioStatus;
  journeyStatus: StoryExperienceJourneyStatus;
  sourceTradition: string;
  durationMinutes?: number;
  hasPanels: boolean;
  hasParentNote: boolean;
  hasReflectionPrompt: boolean;
  hasAudioScript: boolean;
  isRuntimeEligible: boolean;
  isPublishedLocal: boolean;
  contentWarnings?: string[];
  indexingConfidence: 'high' | 'medium' | 'low';
  sourceFiles: string[];
  limitations: string[];
};

export type StoryExperienceIndexTargets = {
  indexedStoryExperiencesTarget: number;
  runtimeReadyStoriesTarget: number;
  audioReadyScriptsTarget: number;
};

export type StoryExperienceIndexCounterSnapshot = {
  indexedStoryExperiences: number;
  qaReadyStoryExperiences: number;
  runtimeReadyStoryExperiences: number;
  audioScriptReadyStoryExperiences: number;
  publishedLocalStoryExperiences: number;
  blockedStoryExperiences: number;
  deprecatedStoryExperiences: number;
  categoryCount: number;
  categoriesWithIndexedContent: number;
  categoriesWithRuntimeReadyContent: number;
  journeyCount: number;
  journeysWithIndexedContent: number;
  journeysWithRuntimeReadyContent: number;
  contentPackCount: number;
};

export type StoryExperienceIndexModel = {
  modelVersion: string;
  entries: StoryExperienceIndexEntry[];
  counters: StoryExperienceIndexCounterSnapshot;
  categoryCoverage: Array<{
    categoryId: StoryExperienceCategoryId;
    indexedCount: number;
    runtimeReadyCount: number;
  }>;
  journeyCoverage: Array<{
    journeyId: string;
    indexedCount: number;
    runtimeReadyCount: number;
  }>;
  statusDefinitions: Record<StoryExperienceStatus, string>;
  countingRules: string[];
  confidenceNotes: string[];
  pr207Targets: StoryExperienceIndexTargets;
};
