import { storyWorldItems } from '@/data/storyWorld';
import { vrindavanStoryPackets } from '@/data/seed/vrindavan';
import type { StoryJourney } from '@/types/content';
import { getNextIncompleteStory } from '@/lib/storyProgress';

export type JourneyCardState = 'ready' | 'completed' | 'path-completed';

export async function getTodaysJourney(): Promise<StoryJourney | null> {
  return getNextIncompleteStory(vrindavanStoryPackets);
}

export function getStoryJourneyBySlug(slug: string): StoryJourney | null {
  return vrindavanStoryPackets.find((packet) => packet.story.slug === slug) ?? null;
}

export function getRuntimeStoryBySlug(slug: string): (StoryJourney & { storyMeta?: (typeof storyWorldItems)[number] }) | null {
  const storyMeta = storyWorldItems.find((item) => item.slug === slug);
  if (storyMeta && storyMeta.status !== 'available') return null;
  const packet = getStoryJourneyBySlug(slug);
  if (!packet) return null;
  return { ...packet, storyMeta };
}

export function getVrindavanJourneyPath() {
  return vrindavanStoryPackets;
}
