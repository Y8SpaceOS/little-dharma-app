import { vrindavanStoryPackets } from '@/data/seed/vrindavan';
import type { StoryJourney } from '@/types/content';
import { getNextIncompleteStory } from '@/lib/storyProgress';

export type JourneyCardState = 'ready' | 'completed' | 'path-completed';

function getVrindavanStoryPacketsSafe(): StoryJourney[] {
  return Array.isArray(vrindavanStoryPackets) ? vrindavanStoryPackets : [];
}

export async function getTodaysJourney(): Promise<StoryJourney | null> {
  return getNextIncompleteStory(getVrindavanStoryPacketsSafe());
}

export function getStoryJourneyBySlug(slug: string): StoryJourney | null {
  return getVrindavanStoryPacketsSafe().find((packet) => packet.story.slug === slug) ?? null;
}

export function getRuntimeStoryBySlug(slug: string): (StoryJourney & { storyMeta?: (typeof storyWorldItems)[number] }) | null {
  const { storyWorldItems } = require('@/data/storyWorld') as typeof import('@/data/storyWorld');
  const storyMeta = storyWorldItems.find((item) => item.slug === slug);
  if (storyMeta && storyMeta.status !== 'available') return null;
  const packet = getStoryJourneyBySlug(slug);
  if (!packet) return null;
  return { ...packet, storyMeta };
}

export function getVrindavanJourneyPath() {
  return getVrindavanStoryPacketsSafe();
}
