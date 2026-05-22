import type { AgeBand, ContentStatus } from '@/types/contentModel';

export type DharmaJourneyStatus = 'planned' | 'indexed' | 'qa_ready' | 'runtime_ready' | 'available' | 'coming_soon';

export type DharmaJourneyType =
  | 'epic'
  | 'deity_stories'
  | 'values_path'
  | 'festival_path'
  | 'shloka_path'
  | 'bedtime_path'
  | 'mixed_story_path';

export type DharmaJourneyStoryRef = {
  storyId: string;
  slug: string;
  title: string;
  order: number;
  required: boolean;
  status: ContentStatus | 'missing';
  estimatedMinutes: number;
  primaryValue: string;
  isRuntimeAvailable: boolean;
};

export type DharmaJourneyMilestone = {
  id: string;
  title: string;
  description: string;
  afterStoryOrder: number;
  blessingText: string;
  visualMotif: string;
};

export type DharmaJourneyV1 = {
  id: string;
  slug: string;
  title: string;
  childFacingTitle: string;
  description: string;
  sourceTradition: string;
  journeyType: DharmaJourneyType;
  status: DharmaJourneyStatus;
  recommendedAgeBands: AgeBand[];
  totalStories: number;
  estimatedCompletionWeeks: number;
  estimatedMinutes: number;
  storyRefs: DharmaJourneyStoryRef[];
  milestones: DharmaJourneyMilestone[];
  primaryValues: string[];
  sacredRespectNotes: string[];
  parentTrustNotes: string[];
  isSequential: boolean;
  isRuntimeAvailable: boolean;
  createdAtLocal: string;
  updatedAtLocal: string;
};

export type DharmaJourneyBrowseCard = {
  id: string;
  slug: string;
  title: string;
  childFacingTitle: string;
  description: string;
  href: string;
  status: DharmaJourneyStatus;
  journeyType: DharmaJourneyType;
  totalStories: number;
  estimatedCompletionWeeks: number;
  recommendedAgeBands: AgeBand[];
  primaryValues: string[];
  isRuntimeAvailable: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
};

export type DharmaJourneySummary = {
  journeyCount: number;
  runtimeAvailableJourneyCount: number;
  comingSoonJourneyCount: number;
  totalStoryRefs: number;
  journeyModelVersion: string;
  source: 'content_registry_and_story_world_local';
};
