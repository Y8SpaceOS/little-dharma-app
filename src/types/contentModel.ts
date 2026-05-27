export type SacredRespectLevel = 'general' | 'sacred_story' | 'deity_focal' | 'shloka_or_prayer' | 'ritual_context';

export type ContentStatus = 'draft' | 'indexed' | 'qa_ready' | 'runtime_ready' | 'available' | 'coming_soon' | 'archived';

export type AgeBand = '3-5' | '6-8' | '9-12' | 'family';

export type StoryWorldCategory =
  | 'krishna'
  | 'ganesha'
  | 'ramayana'
  | 'hanuman'
  | 'bedtime'
  | 'values'
  | 'festivals'
  | 'mahabharata'
  | 'bhagavad_gita'
  | 'panchatantra'
  | 'saints'
  | 'shlokas';

export type AudioMetadata = {
  audioAvailable: boolean;
  voiceOptions: string[];
  narrationScriptStatus: ContentStatus;
  preferredVoiceStyle: string;
  pacing: 'slow' | 'medium' | 'steady';
  noMicRequired: true;
};

export type IllustrationPrompt = {
  sceneSummary: string;
  styleGuidance: string;
  culturalGuardrails: string[];
  deityTreatment: string;
  avoidList: string[];
};

export type ParentNote = {
  sourceContext: string;
  valueExplained: string;
  discussionPrompt: string;
  practicePrompt: string;
  cautionNote: string;
};

export type StoryPanel = {
  id: string;
  title: string;
  text: string;
  imagePrompt?: string;
  narrationHint?: string;
  interactionPrompt?: string;
  sacredRespectNote?: string;
};

export type Story = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  sourceTradition: string;
  sourceTextOrTraditionNote: string;
  storyPackId: string;
  primaryCategoryId?: string;
  readinessStatus?: 'metadata_only' | 'qa_ready' | 'runtime_ready' | 'blocked' | 'deprecated';
  audioStatus?: 'script_needed' | 'script_ready' | 'audio_ready' | 'audio_available';
  journeyStatus?: 'journey_ordered' | 'journey_optional' | 'journey_missing' | 'journey_unordered';
  journeyId?: string;
  journeyOrder?: number;
  ageBands: AgeBand[];
  recommendedAgeBand: AgeBand;
  durationMinutes: number;
  primaryValue: string;
  secondaryValues: string[];
  characters: string[];
  panels: StoryPanel[];
  parentNote: ParentNote;
  reflectionPrompt: string;
  ritualPrompt: string;
  completionBlessing: string;
  sacredRespectLevel: SacredRespectLevel;
  illustrationPrompt: IllustrationPrompt;
  audioMetadata: AudioMetadata;
  status: ContentStatus;
};

export type StoryVariant = {
  id: string;
  storyId: string;
  ageBand: AgeBand;
  title: string;
  summary: string;
  panels: StoryPanel[];
  parentNote: ParentNote;
  durationMinutes: number;
  readingLevel: string;
  status: ContentStatus;
};

export type StoryPack = {
  id: string;
  title: string;
  childFacingTitle: string;
  description: string;
  sourceTradition: string;
  category: StoryWorldCategory;
  status: ContentStatus;
  storyIds: string[];
  recommendedAgeBands: AgeBand[];
  contentSafetyNotes: string[];
  sacredRespectNotes: string[];
};

export type DharmaJourney = {
  id: string;
  title: string;
  childFacingTitle: string;
  description: string;
  sourceTradition: string;
  recommendedAgeBands: AgeBand[];
  storyIds: string[];
  estimatedCompletionWeeks: number;
  status: ContentStatus;
  journeyType: 'guided_path' | 'theme_path' | 'seasonal_path';
};

export type JourneyProgress = {
  journeyId: string;
  completedStoryIds: string[];
  currentStoryId: string | null;
  lastOpenedStoryId: string | null;
  updatedAtLocal: string;
  completionPercentage: number;
};
