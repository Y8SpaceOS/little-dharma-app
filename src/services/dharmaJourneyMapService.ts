import { contentRegistryJourneys, contentRegistryStories } from '@/data/contentRegistry';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type { AgeBand, Story } from '@/types/contentModel';
import type { DharmaJourneyMapModel, DharmaJourneyMapPathMarker, DharmaJourneyMapStep, DharmaJourneyMapStepState } from '@/types/dharmaJourneyMap';

export const dharmaJourneyMapVersion = 'pr179-dharma-journey-map-polish-safe-step-interaction-v1';

const canonicalJourneyIdAliases: Record<string, string> = {
  'krishna-childhood-journey-pack-1': 'krishna-childhood-pack-1',
  'ganesha-wisdom-journey-pack-1': 'ganesha-wisdom-pack-1'
};

const supportedJourneyIds = new Set([
  'krishna-childhood-pack-1',
  'ramayana-journey-pack-1',
  'ganesha-wisdom-pack-1',
  'ganesha-wisdom-journey'
]);

const markerOrder: DharmaJourneyMapPathMarker[] = ['diya', 'flower', 'lotus_dot'];

function resolveStepState(story: Story): DharmaJourneyMapStepState {
  const eligibility = getRuntimeStoryEligibility(story);
  if (!eligibility.canRender) {
    if (story.status === 'coming_soon') return 'coming_soon';
    return 'being_prepared';
  }

  if (story.status === 'available') return 'completed';
  return 'available';
}

function safeText(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

function safeAgeBands(ageBands: AgeBand[] | undefined): AgeBand[] {
  return Array.isArray(ageBands) && ageBands.length ? ageBands : ['family'];
}

function toStep(story: Story, order: number): DharmaJourneyMapStep {
  const state = resolveStepState(story);
  const isTappable = state === 'available' || state === 'completed';
  const marker = markerOrder[(order - 1) % markerOrder.length] ?? 'lotus_dot';
  return {
    id: `${story.id || story.slug || 'story'}-step-${order}`,
    order,
    storyId: safeText(story.id, `story-${order}`),
    slug: safeText(story.slug, ''),
    title: safeText(story.title, `Story step ${order}`),
    summary: safeText(story.summary, 'A gentle story step is being prepared with care.'),
    primaryValue: safeText(story.primaryValue, 'Dharma'),
    ageBands: safeAgeBands(story.ageBands),
    durationMinutes: typeof story.durationMinutes === 'number' && story.durationMinutes > 0 ? story.durationMinutes : null,
    state,
    pathMarker: marker,
    href: isTappable ? `/story/${story.slug}` : '',
    isTappable,
    trustLabel: isTappable ? 'Ready in Story World.' : 'Being prepared with care.'
  };
}

export function resolveDharmaJourneyMapJourneyId(journeyId: string): string {
  return canonicalJourneyIdAliases[journeyId] ?? journeyId;
}

export function getDharmaJourneyMapByJourneyId(journeyId: string): DharmaJourneyMapModel | null {
  const canonicalJourneyId = resolveDharmaJourneyMapJourneyId(journeyId);
  const journey = contentRegistryJourneys.find((item) => item.id === canonicalJourneyId);
  if (!journey) return null;

  const orderedStories = journey.storyIds
    .map((storyId) => contentRegistryStories.find((story) => story.id === storyId))
    .filter((story): story is Story => Boolean(story))
    .sort((a, b) => (a.journeyOrder ?? Number.MAX_SAFE_INTEGER) - (b.journeyOrder ?? Number.MAX_SAFE_INTEGER));

  const supportedJourney = supportedJourneyIds.has(journey.id);
  const fallbackMessage = orderedStories.length
    ? null
    : 'This Dharma Journey is being prepared with care.';

  return {
    id: `journey-map-${journey.id}`,
    journeyId: journey.id,
    journeyTitle: safeText(journey.title, 'Dharma Journey'),
    childFacingTitle: safeText(journey.childFacingTitle, safeText(journey.title, 'Dharma Journey')),
    childFacingDescription: safeText(journey.description, 'A gentle story path is being prepared with care.'),
    supportedJourney,
    trustCopy: 'Prepared with care for families. Local-first and gentle by design.',
    fallbackMessage: supportedJourney ? fallbackMessage : 'This Dharma Journey is being prepared with care before it opens for families.',
    progressMode: 'gentle_local_stub',
    steps: supportedJourney ? orderedStories.map((story, index) => toStep(story, index + 1)) : []
  };
}

export function getSupportedDharmaJourneyMapsV1(): DharmaJourneyMapModel[] {
  return Array.from(supportedJourneyIds)
    .map((journeyId) => getDharmaJourneyMapByJourneyId(journeyId))
    .filter((journey): journey is DharmaJourneyMapModel => Boolean(journey));
}
