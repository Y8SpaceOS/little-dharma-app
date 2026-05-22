import type {
  AgeBand,
  AudioMetadata,
  ContentStatus,
  DharmaJourney,
  SacredRespectLevel,
  Story,
  StoryPack,
  StoryPanel,
  StoryWorldCategory
} from '@/types/contentModel';

export type ContentImportMode = 'seed_preview' | 'local_pack' | 'editorial_draft' | 'registry_candidate';

export type ImportedStoryPanelDraft = StoryPanel;

export type ImportedStoryDraft = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  sourceTradition: string;
  sourceTextOrTraditionNote: string;
  storyPackId: string;
  journeyId?: string;
  journeyOrder?: number;
  ageBands: AgeBand[];
  recommendedAgeBand: AgeBand;
  durationMinutes: number;
  primaryValue: string;
  secondaryValues: string[];
  characters: string[];
  panels: ImportedStoryPanelDraft[];
  parentNote: Story['parentNote'];
  reflectionPrompt: string;
  ritualPrompt: string;
  completionBlessing: string;
  sacredRespectLevel: SacredRespectLevel;
  illustrationPrompt: Story['illustrationPrompt'];
  audioMetadata: AudioMetadata;
  status: ContentStatus;
};

export type ImportedStoryPackDraft = Omit<StoryPack, 'storyIds'> & {
  storyIds: string[];
};

export type ImportedDharmaJourneyDraft = Omit<DharmaJourney, 'storyIds'> & {
  storyIds: string[];
};

export type ContentImportManifest = {
  id: string;
  title: string;
  description: string;
  version: string;
  sourceTradition: string;
  category: StoryWorldCategory;
  status: ContentStatus;
  importMode: ContentImportMode;
  storyPack: ImportedStoryPackDraft;
  stories: ImportedStoryDraft[];
  journeys: ImportedDharmaJourneyDraft[];
  createdAtLocal: string;
  updatedAtLocal: string;
  notes: string;
};

export type ContentImportValidationResult = {
  valid: boolean;
  errors: string[];
  warnings: string[];
  storyCount: number;
  packCount: number;
  journeyCount: number;
  runtimeReadyCount: number;
  qaReadyCount: number;
  indexedCount: number;
};
