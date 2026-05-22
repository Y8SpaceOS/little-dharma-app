import type { AudioMetadata, ContentStatus, IllustrationPrompt, SacredRespectLevel, StoryPanel } from '@/types/contentModel';

export type RuntimeStorySource = 'registry' | 'legacy_vrindavan' | 'unavailable';

export type RuntimeStoryEligibility = {
  canRender: boolean;
  reason: string;
  source: RuntimeStorySource;
  status: ContentStatus | 'missing';
  editorialQaValid: boolean;
  approvedForRuntime: boolean;
};

export type RuntimeResolvedStoryV2 = {
  source: RuntimeStorySource;
  storyId: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  panels: StoryPanel[];
  parentNote: {
    sourceContext: string;
    valueExplained: string;
    discussionPrompt: string;
    practicePrompt: string;
    cautionNote: string;
  };
  reflectionPrompt: string;
  ritualPrompt: string;
  completionBlessing: string;
  primaryValue: string;
  secondaryValues: string[];
  characters: string[];
  durationMinutes: number;
  sacredRespectLevel: SacredRespectLevel;
  audioMetadata: AudioMetadata;
  illustrationPrompt: IllustrationPrompt;
  storyPackId: string;
  journeyId: string | null;
  journeyOrder: number | null;
  eligibility: RuntimeStoryEligibility;
};

export type RuntimeStoryResolverSummary = {
  registryStoryCount: number;
  legacyStoryCount: number;
  runtimeEligibleRegistryCount: number;
  fallbackEnabled: boolean;
  resolverVersion: string;
};
