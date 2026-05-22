import type { AgeBand, StoryWorldCategory } from '@/types/contentModel';

export type StoryWorldBrowseStatus = 'available' | 'coming_soon' | 'locked_preview' | 'unavailable';

export type StoryWorldBrowseCard = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  category: StoryWorldCategory | 'dharma_journeys';
  href: string;
  status: StoryWorldBrowseStatus;
  durationMinutes: number;
  primaryValue: string;
  sourceTradition: string;
  ageBands: AgeBand[];
  isRuntimeAvailable: boolean;
  isSequential: boolean;
  journeyId: string | null;
  storyPackId: string | null;
  accessibilityLabel: string;
  accessibilityHint: string;
};

export type StoryWorldBrowseSection = {
  id: string;
  title: string;
  subtitle: string;
  category: StoryWorldCategory | 'dharma_journeys';
  cards: StoryWorldBrowseCard[];
  displayOrder: number;
};

export type StoryWorldBrowseSummary = {
  sectionCount: number;
  cardCount: number;
  runtimeAvailableCardCount: number;
  comingSoonCardCount: number;
  browseVersion: string;
  source: 'content_registry_and_story_world_local';
};
