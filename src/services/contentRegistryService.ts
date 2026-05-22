import {
  getContentRegistryJourneyById,
  getContentRegistryPackById,
  getContentRegistryStoryBySlug
} from '@/data/contentRegistry';

export function getRegistryStoryRuntimePreviewBySlug(slug: string) {
  const story = getContentRegistryStoryBySlug(slug);
  if (!story) return null;

  return {
    id: story.id,
    slug: story.slug,
    title: story.title,
    summary: story.summary,
    storyPackId: story.storyPackId,
    journeyId: story.journeyId ?? null,
    journeyOrder: story.journeyOrder ?? null,
    durationMinutes: story.durationMinutes,
    primaryValue: story.primaryValue,
    status: story.status
  } as const;
}

export function getRegistryJourneyPreview(journeyId: string) {
  const journey = getContentRegistryJourneyById(journeyId);
  if (!journey) return null;

  return {
    id: journey.id,
    title: journey.title,
    childFacingTitle: journey.childFacingTitle,
    storyCount: journey.storyIds.length,
    estimatedCompletionWeeks: journey.estimatedCompletionWeeks,
    status: journey.status
  } as const;
}

export function getRegistryStoryPackPreview(packId: string) {
  const pack = getContentRegistryPackById(packId);
  if (!pack) return null;

  return {
    id: pack.id,
    title: pack.title,
    childFacingTitle: pack.childFacingTitle,
    category: pack.category,
    storyCount: pack.storyIds.length,
    status: pack.status
  } as const;
}
