import { contentRegistryJourneys, contentRegistryStories } from '@/data/contentRegistry';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type { Story } from '@/types/contentModel';
import type { DharmaJourneyMapModel, DharmaJourneyMapPathMarker, DharmaJourneyMapStep, DharmaJourneyMapStepState } from '@/types/dharmaJourneyMap';

export const dharmaJourneyMapVersion = 'pr178-dharma-journey-map-v1';

const supportedJourneyIds = new Set([
  'krishna-childhood-journey-pack-1',
  'ramayana-journey-pack-1',
  'ganesha-wisdom-journey-pack-1'
]);

const markerOrder: DharmaJourneyMapPathMarker[] = ['diya', 'flower', 'lotus_dot'];

function resolveStepState(story: Story): DharmaJourneyMapStepState {
  const eligibility = getRuntimeStoryEligibility(story);
  if (story.status === 'available') return 'completed';
  if (eligibility.canRender) return 'available';
  if (story.status === 'coming_soon') return 'coming_soon';
  return 'being_prepared';
}

function toStep(story: Story, order: number): DharmaJourneyMapStep {
  const state = resolveStepState(story);
  const marker = markerOrder[(order - 1) % markerOrder.length] ?? 'lotus_dot';
  return {
    id: `${story.id}-step-${order}`,
    order,
    storyId: story.id,
    slug: story.slug,
    title: story.title,
    summary: story.summary,
    primaryValue: story.primaryValue,
    ageBands: story.ageBands,
    durationMinutes: story.durationMinutes,
    state,
    pathMarker: marker,
    href: state === 'available' || state === 'completed' ? `/story/${story.slug}` : '/(child)/worlds',
    trustLabel: state === 'available' || state === 'completed' ? 'Ready in Story World.' : 'Being prepared with care.'
  };
}

export function getDharmaJourneyMapByJourneyId(journeyId: string): DharmaJourneyMapModel | null {
  const journey = contentRegistryJourneys.find((item) => item.id === journeyId);
  if (!journey) return null;

  const orderedStories = journey.storyIds
    .map((storyId) => contentRegistryStories.find((story) => story.id === storyId))
    .filter((story): story is Story => Boolean(story))
    .sort((a, b) => (a.journeyOrder ?? Number.MAX_SAFE_INTEGER) - (b.journeyOrder ?? Number.MAX_SAFE_INTEGER));

  const fallbackMessage = orderedStories.length
    ? null
    : 'This Dharma Journey is being prepared with care. Fresh story steps will appear here soon.';

  return {
    id: `journey-map-${journey.id}`,
    journeyId: journey.id,
    journeyTitle: journey.title,
    childFacingTitle: journey.childFacingTitle,
    childFacingDescription: journey.description,
    supportedJourney: supportedJourneyIds.has(journey.id),
    trustCopy: 'Prepared with care for families. Local-first and gentle by design.',
    fallbackMessage,
    progressMode: 'gentle_local_stub',
    steps: orderedStories.map((story, index) => toStep(story, index + 1))
  };
}

export function getSupportedDharmaJourneyMapsV1(): DharmaJourneyMapModel[] {
  return Array.from(supportedJourneyIds)
    .map((journeyId) => getDharmaJourneyMapByJourneyId(journeyId))
    .filter((journey): journey is DharmaJourneyMapModel => Boolean(journey));
}
