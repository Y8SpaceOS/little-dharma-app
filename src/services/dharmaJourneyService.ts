import { contentRegistryJourneys, contentRegistryStoriesById } from '@/data/contentRegistry';
import { storyWorldItems } from '@/data/storyWorld';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type { DharmaJourney } from '@/types/contentModel';
import type {
  DharmaJourneyBrowseCard,
  DharmaJourneyMilestone,
  DharmaJourneyStatus,
  DharmaJourneyStoryRef,
  DharmaJourneySummary,
  DharmaJourneyType,
  DharmaJourneyV1
} from '@/types/dharmaJourney';

export const dharmaJourneyModelVersion = 'pr124-journey-data-model-v1';

const baseJourneyTimestamp = '2026-05-22T00:00:00.000Z';

function mapJourneyType(type: DharmaJourney['journeyType']): DharmaJourneyType {
  if (type === 'theme_path') return 'values_path';
  if (type === 'seasonal_path') return 'festival_path';
  return 'mixed_story_path';
}

function normalizeSlug(idOrTitle: string): string {
  return idOrTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function mapJourneyStatus(status: DharmaJourney['status']): DharmaJourneyStatus {
  if (status === 'indexed') return 'indexed';
  if (status === 'qa_ready') return 'qa_ready';
  if (status === 'runtime_ready') return 'runtime_ready';
  if (status === 'available') return 'available';
  if (status === 'coming_soon') return 'coming_soon';
  return 'planned';
}

function normalizeRecommendedAgeBands(ageBands: readonly string[]): ('3-5' | '6-8' | '9-12' | 'family')[] {
  const allowed = ageBands.filter((band): band is '3-5' | '6-8' | '9-12' | 'family' =>
    band === '3-5' || band === '6-8' || band === '9-12' || band === 'family'
  );
  return allowed.length > 0 ? allowed : ['3-5', '6-8', '9-12'];
}
function inferPrimaryValues(storyRefs: DharmaJourneyStoryRef[]): string[] {
  const values = Array.from(new Set(storyRefs.map((ref) => ref.primaryValue).filter(Boolean)));
  return values.length > 0 ? values : ['Dharma'];
}

function buildMilestones(storyRefs: DharmaJourneyStoryRef[]): DharmaJourneyMilestone[] {
  if (storyRefs.length === 0) return [];
  const middleOrder = Math.max(1, Math.ceil(storyRefs.length / 2));
  const finalOrder = storyRefs[storyRefs.length - 1]?.order ?? storyRefs.length;

  return [
    {
      id: 'milestone-heart-lamp',
      title: 'Heart Lamp Milestone',
      description: 'A gentle pause to notice how values are growing with each story.',
      afterStoryOrder: middleOrder,
      blessingText: 'May your heart glow with kindness and courage.',
      visualMotif: 'diya'
    },
    {
      id: 'milestone-blossom-path',
      title: 'Journey Blossom Milestone',
      description: 'A celebration of finishing the current story path with care.',
      afterStoryOrder: finalOrder,
      blessingText: 'May wisdom blossom in your words and actions.',
      visualMotif: 'flower'
    }
  ];
}

export function buildJourneyStoryRefs(storyIds: string[]): DharmaJourneyStoryRef[] {
  return storyIds.map((storyId, index) => {
    const story = contentRegistryStoriesById[storyId];
    if (!story) {
      return {
        storyId,
        slug: normalizeSlug(storyId),
        title: `Story ${index + 1}`,
        order: index + 1,
        required: true,
        status: 'missing',
        estimatedMinutes: 0,
        primaryValue: 'Dharma',
        isRuntimeAvailable: false
      };
    }

    const eligibility = getRuntimeStoryEligibility(story);
    return {
      storyId: story.id,
      slug: story.slug,
      title: story.title,
      order: index + 1,
      required: true,
      status: story.status,
      estimatedMinutes: story.durationMinutes,
      primaryValue: story.primaryValue,
      isRuntimeAvailable: eligibility.canRender
    };
  });
}

export function isDharmaJourneyRuntimeAvailable(journey: DharmaJourneyV1): boolean {
  if (!(journey.status === 'runtime_ready' || journey.status === 'available')) return false;
  if (journey.storyRefs.length === 0) return false;
  if (journey.id.includes('preview') || journey.slug.includes('preview')) return false;
  if (journey.slug.includes('import') || journey.id.includes('import')) return false;

  const requiredRefs = journey.storyRefs.filter((ref) => ref.required);
  if (requiredRefs.length === 0) return false;

  return requiredRefs.every((ref) => ref.isRuntimeAvailable);
}

export function mapContentRegistryJourneyToDharmaJourneyV1(journey: DharmaJourney): DharmaJourneyV1 {
  const storyRefs = buildJourneyStoryRefs(journey.storyIds);
  const mapped: DharmaJourneyV1 = {
    id: journey.id,
    slug: normalizeSlug(journey.id),
    title: journey.title,
    childFacingTitle: journey.childFacingTitle,
    description: journey.description,
    sourceTradition: journey.sourceTradition,
    journeyType: mapJourneyType(journey.journeyType),
    status: mapJourneyStatus(journey.status),
    recommendedAgeBands: normalizeRecommendedAgeBands(journey.recommendedAgeBands),
    totalStories: storyRefs.length,
    estimatedCompletionWeeks: journey.estimatedCompletionWeeks,
    estimatedMinutes: storyRefs.reduce((total, ref) => total + ref.estimatedMinutes, 0),
    storyRefs,
    milestones: buildMilestones(storyRefs),
    primaryValues: inferPrimaryValues(storyRefs),
    sacredRespectNotes: ['Sacred framing remains gentle and age-appropriate across the journey path.'],
    parentTrustNotes: ['Journey data is local-first and synchronous with no backend dependency.'],
    isSequential: true,
    isRuntimeAvailable: false,
    createdAtLocal: baseJourneyTimestamp,
    updatedAtLocal: baseJourneyTimestamp
  };

  return { ...mapped, isRuntimeAvailable: isDharmaJourneyRuntimeAvailable(mapped) };
}

export function mapStoryWorldJourneyToDharmaJourneyV1(item: (typeof storyWorldItems)[number]): DharmaJourneyV1 {
  const slug = item.slug ?? normalizeSlug(item.title);
  const id = item.id;
  const isComingSoon = item.status === 'coming_soon';
  const storyRefs: DharmaJourneyStoryRef[] = [];

  const mapped: DharmaJourneyV1 = {
    id,
    slug,
    title: item.title,
    childFacingTitle: item.shortTitle,
    description: item.summary,
    sourceTradition: item.sourceTradition,
    journeyType: 'mixed_story_path',
    status: isComingSoon ? 'coming_soon' : 'planned',
    recommendedAgeBands: normalizeRecommendedAgeBands(item.ageBands),
    totalStories: 0,
    estimatedCompletionWeeks: 0,
    estimatedMinutes: item.durationMinutes,
    storyRefs,
    milestones: [],
    primaryValues: [item.primaryValue],
    sacredRespectNotes: ['Journey remains scaffolded until story references are fully indexed and QA-ready.'],
    parentTrustNotes: ['Coming-soon journey cards remain non-routable runtime scaffolds.'],
    isSequential: item.isSequential,
    isRuntimeAvailable: false,
    createdAtLocal: baseJourneyTimestamp,
    updatedAtLocal: baseJourneyTimestamp
  };

  return { ...mapped, isRuntimeAvailable: isDharmaJourneyRuntimeAvailable(mapped) };
}

export function getDharmaJourneys(): DharmaJourneyV1[] {
  const registryJourneys = contentRegistryJourneys.map(mapContentRegistryJourneyToDharmaJourneyV1);
  const fallbackJourneys = storyWorldItems
    .filter((item) => item.sectionId === 'dharma-journeys' || item.journeyId)
    .map(mapStoryWorldJourneyToDharmaJourneyV1)
    .filter((journey) => !registryJourneys.some((registryJourney) => registryJourney.slug === journey.slug));

  return [...registryJourneys, ...fallbackJourneys];
}

export function getDharmaJourneyBySlug(slug: string): DharmaJourneyV1 | null {
  return getDharmaJourneys().find((journey) => journey.slug === slug) ?? null;
}

export function getDharmaJourneyById(id: string): DharmaJourneyV1 | null {
  return getDharmaJourneys().find((journey) => journey.id === id) ?? null;
}

export function getDharmaJourneyBrowseCards(): DharmaJourneyBrowseCard[] {
  return getDharmaJourneys().map((journey) => ({
    id: journey.id,
    slug: journey.slug,
    title: journey.title,
    childFacingTitle: journey.childFacingTitle,
    description: journey.description,
    href: journey.isRuntimeAvailable ? `/world/${journey.slug}` : '/(child)/worlds',
    status: journey.status,
    journeyType: journey.journeyType,
    totalStories: journey.totalStories,
    estimatedCompletionWeeks: journey.estimatedCompletionWeeks,
    recommendedAgeBands: journey.recommendedAgeBands,
    primaryValues: journey.primaryValues,
    isRuntimeAvailable: journey.isRuntimeAvailable,
    accessibilityLabel: journey.childFacingTitle,
    accessibilityHint: journey.isRuntimeAvailable ? 'Open journey in Story World' : 'Coming soon in Story World'
  }));
}

export function getDharmaJourneySummary(): DharmaJourneySummary {
  const journeys = getDharmaJourneys();
  return {
    journeyCount: journeys.length,
    runtimeAvailableJourneyCount: journeys.filter((journey) => journey.isRuntimeAvailable).length,
    comingSoonJourneyCount: journeys.filter((journey) => journey.status === 'coming_soon').length,
    totalStoryRefs: journeys.reduce((total, journey) => total + journey.storyRefs.length, 0),
    journeyModelVersion: dharmaJourneyModelVersion,
    source: 'content_registry_and_story_world_local'
  };
}

