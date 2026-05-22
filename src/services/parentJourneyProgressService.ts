import { getAllJourneyProgress } from '@/lib/journeyProgress';
import { getAllStoryCompletions } from '@/lib/storyProgress';
import { getDharmaJourneys } from '@/services/dharmaJourneyService';
import type { AgeBand } from '@/types/contentModel';
import type { DharmaJourneyV1 } from '@/types/dharmaJourney';

export const parentJourneyProgressModelVersion = 'pr128-parent-journey-progress-dashboard-v1';

type ParentJourneyStatus = 'available' | 'staged' | 'coming_soon';

export type ParentJourneyProgressCard = {
  journeyId: string;
  journeyTitle: string;
  childFacingTitle: string;
  status: ParentJourneyStatus;
  totalStories: number;
  runtimeAvailableStoryCount: number;
  completedStoryCount: number;
  completionPercent: number;
  nextStorySlug: string | null;
  nextStoryTitle: string | null;
  primaryValues: string[];
  recommendedAgeBands: AgeBand[];
  parentSummary: string;
  trustNote: string;
  isRuntimeAvailable: boolean;
  isComingSoon: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
};

export type ParentJourneyProgressDashboard = {
  modelVersion: string;
  generatedAtLocal: string;
  totals: {
    journeyCount: number;
    availableJourneyCount: number;
    stagedJourneyCount: number;
    comingSoonJourneyCount: number;
    completedStoriesAcrossJourneys: number;
  };
  cards: ParentJourneyProgressCard[];
};

function resolveParentJourneyStatus(journey: DharmaJourneyV1): ParentJourneyStatus {
  if (journey.status === 'coming_soon') return 'coming_soon';
  if (journey.isRuntimeAvailable) return 'available';
  return 'staged';
}

export function summarizeJourneyValues(journey: DharmaJourneyV1): string[] {
  return Array.from(new Set(journey.primaryValues.filter(Boolean))).slice(0, 3);
}

export function calculateJourneyCompletionPercent(
  journey: DharmaJourneyV1,
  completedStorySlugsOrIds: Iterable<string>
): number {
  const completed = new Set(completedStorySlugsOrIds);
  const eligibleStories = journey.storyRefs.filter((ref) => ref.isRuntimeAvailable || completed.has(ref.slug) || completed.has(ref.storyId));

  if (eligibleStories.length === 0) return 0;

  const completedEligibleCount = eligibleStories.filter((ref) => completed.has(ref.slug) || completed.has(ref.storyId)).length;
  return Math.round((completedEligibleCount / eligibleStories.length) * 100);
}

export function mapJourneyToParentProgressCard(
  journey: DharmaJourneyV1,
  completedStorySlugsOrIds: Iterable<string>
): ParentJourneyProgressCard {
  const completed = new Set(completedStorySlugsOrIds);
  const status = resolveParentJourneyStatus(journey);
  const runtimeAvailableStoryCount = journey.storyRefs.filter((ref) => ref.isRuntimeAvailable).length;
  const completedStoryRefs = journey.storyRefs.filter((ref) => completed.has(ref.slug) || completed.has(ref.storyId));
  const nextStory = journey.storyRefs.find((ref) => ref.isRuntimeAvailable && !completed.has(ref.slug) && !completed.has(ref.storyId)) ?? null;
  const completionPercent = calculateJourneyCompletionPercent(journey, completed);
  const values = summarizeJourneyValues(journey);

  const nextGentleStory = nextStory ? `Next gentle story: ${nextStory.title}.` : 'All currently available stories in this journey are complete.';

  return {
    journeyId: journey.id,
    journeyTitle: journey.title,
    childFacingTitle: journey.childFacingTitle,
    status,
    totalStories: journey.totalStories,
    runtimeAvailableStoryCount,
    completedStoryCount: completedStoryRefs.length,
    completionPercent,
    nextStorySlug: nextStory?.slug ?? null,
    nextStoryTitle: nextStory?.title ?? null,
    primaryValues: values,
    recommendedAgeBands: journey.recommendedAgeBands,
    parentSummary: `${completedStoryRefs.length} completed stories so far. ${nextGentleStory}`,
    trustNote: 'Progress is computed on-device and reflects local journey state only.',
    isRuntimeAvailable: journey.isRuntimeAvailable,
    isComingSoon: status === 'coming_soon',
    accessibilityLabel: `${journey.childFacingTitle} journey progress`,
    accessibilityHint:
      status === 'available'
        ? 'Shows completed stories, values explored, and a next gentle story suggestion.'
        : status === 'staged'
          ? 'Shows staged journey details and local completion where present.'
          : 'Shows coming soon journey preview with no playable staged stories.'
  };
}

async function getCompletionLookupForJourney(journeyId: string): Promise<Set<string>> {
  const [storyCompletions, journeyProgressMap] = await Promise.all([getAllStoryCompletions(), getAllJourneyProgress()]);
  const completed = new Set<string>(Object.keys(storyCompletions));
  const journeyProgress = journeyProgressMap[journeyId];
  if (journeyProgress) {
    journeyProgress.completedStoryIds.forEach((id) => completed.add(id));
  }
  return completed;
}

export async function getParentJourneyProgressCards(): Promise<ParentJourneyProgressCard[]> {
  const journeys = getDharmaJourneys();
  const cards = await Promise.all(
    journeys.map(async (journey) => mapJourneyToParentProgressCard(journey, await getCompletionLookupForJourney(journey.id)))
  );

  return cards.sort((a, b) => a.journeyTitle.localeCompare(b.journeyTitle));
}

export async function getParentJourneyProgressDashboard(): Promise<ParentJourneyProgressDashboard> {
  const cards = await getParentJourneyProgressCards();
  return {
    modelVersion: parentJourneyProgressModelVersion,
    generatedAtLocal: new Date().toISOString(),
    totals: {
      journeyCount: cards.length,
      availableJourneyCount: cards.filter((card) => card.status === 'available').length,
      stagedJourneyCount: cards.filter((card) => card.status === 'staged').length,
      comingSoonJourneyCount: cards.filter((card) => card.status === 'coming_soon').length,
      completedStoriesAcrossJourneys: cards.reduce((sum, card) => sum + card.completedStoryCount, 0)
    },
    cards
  };
}

export async function getParentJourneyProgressByJourneyId(journeyId: string): Promise<ParentJourneyProgressCard | null> {
  const journey = getDharmaJourneys().find((item) => item.id === journeyId);
  if (!journey) return null;
  return mapJourneyToParentProgressCard(journey, await getCompletionLookupForJourney(journeyId));
}

export async function getNextRecommendedJourneyStory(journeyId: string): Promise<{ slug: string; title: string } | null> {
  const card = await getParentJourneyProgressByJourneyId(journeyId);
  if (!card?.nextStorySlug || !card?.nextStoryTitle) return null;
  return { slug: card.nextStorySlug, title: card.nextStoryTitle };
}
