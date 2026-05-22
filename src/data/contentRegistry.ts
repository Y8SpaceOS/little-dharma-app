import { mapVrindavanPacketToStoryModelV2, toContentModelStoryId } from '@/data/contentModelAdapters';
import { vrindavanStoryPackets } from '@/data/seed/vrindavan';
import { ramayanaPack1Journey, ramayanaPack1Stories, ramayanaPack1StoryPack } from '@/data/ramayanaPack1Registry';
import { krishnaChildhoodPack1Journey, krishnaChildhoodPack1Stories, krishnaChildhoodPack1StoryPack } from '@/data/krishnaChildhoodPack1Registry';
import { ganeshaWisdomPack1Journey, ganeshaWisdomPack1Stories, ganeshaWisdomPack1StoryPack } from '@/data/ganeshaWisdomPack1Registry';
import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';

export const contentRegistryVersion = 'pr119-content-registry-v1';

const vrindavanRegistryStories: Story[] = vrindavanStoryPackets.map((packet, index) =>
  mapVrindavanPacketToStoryModelV2(packet, index)
);

export const contentRegistryStories: Story[] = [...vrindavanRegistryStories, ...ramayanaPack1Stories, ...krishnaChildhoodPack1Stories, ...ganeshaWisdomPack1Stories];

export const contentRegistryStoriesById: Record<string, Story> = Object.fromEntries(
  contentRegistryStories.map((story) => [story.id, story])
);

export const contentRegistryStoriesBySlug: Record<string, Story> = Object.fromEntries(
  contentRegistryStories.map((story) => [story.slug, story])
);

export const contentRegistryStoryPacks: StoryPack[] = [
  {
    id: 'vrindavan-story-pack-v1',
    title: 'Vrindavan Starter Story Pack',
    childFacingTitle: 'Vrindavan Story World Starter Pack',
    description: 'Canonical local-first starter pack for currently available Vrindavan stories.',
    sourceTradition: 'Vrindavan Story Path',
    category: 'krishna',
    status: 'runtime_ready',
    storyIds: contentRegistryStories.map((story) => story.id),
    recommendedAgeBands: ['3-5', '6-8', '9-12'],
    contentSafetyNotes: [
      'Local-first content only; no account required.',
      'No networking, telemetry, or cloud dependency in runtime story lookup.'
    ],
    sacredRespectNotes: ['Stories preserve gentle sacred framing and child-safe devotional tone.']
  },
  ramayanaPack1StoryPack,
  krishnaChildhoodPack1StoryPack,
  ganeshaWisdomPack1StoryPack
];

export const contentRegistryStoryPacksById: Record<string, StoryPack> = Object.fromEntries(
  contentRegistryStoryPacks.map((pack) => [pack.id, pack])
);

export const contentRegistryJourneys: DharmaJourney[] = [
  {
    id: 'vrindavan-starter-path',
    title: 'Vrindavan Starter Path',
    childFacingTitle: 'Vrindavan Story World Journey',
    description: 'Canonical starter dharma journey mapped from current local Vrindavan runtime packets.',
    sourceTradition: 'Vrindavan Story Path',
    recommendedAgeBands: ['3-5', '6-8', '9-12'],
    storyIds: contentRegistryStories.map((story) => story.id),
    estimatedCompletionWeeks: 3,
    status: 'runtime_ready',
    journeyType: 'guided_path'
  },
  ramayanaPack1Journey,
  krishnaChildhoodPack1Journey,
  ganeshaWisdomPack1Journey
];

export const contentRegistryJourneysById: Record<string, DharmaJourney> = Object.fromEntries(
  contentRegistryJourneys.map((journey) => [journey.id, journey])
);

export function getContentRegistryStoryBySlug(slug: string): Story | null {
  return contentRegistryStoriesBySlug[slug] ?? null;
}

export function getContentRegistryStoryById(id: string): Story | null {
  return contentRegistryStoriesById[id] ?? null;
}

export function getContentRegistryPackById(id: string): StoryPack | null {
  return contentRegistryStoryPacksById[id] ?? null;
}

export function getContentRegistryJourneyById(id: string): DharmaJourney | null {
  return contentRegistryJourneysById[id] ?? null;
}

export function getContentRegistryCoverageSummary() {
  const vrindavanSeedStoryIds = vrindavanStoryPackets.map((packet) => toContentModelStoryId(packet.story.slug));
  const missingStoryIds = vrindavanSeedStoryIds.filter((id) => !contentRegistryStoriesById[id]);

  return {
    contentRegistryVersion,
    totalVrindavanSeedPackets: vrindavanStoryPackets.length,
    registeredStories: contentRegistryStories.length,
    registeredRamayanaPack1Stories: ramayanaPack1Stories.length,
    registeredKrishnaChildhoodPack1Stories: krishnaChildhoodPack1Stories.length,
    registeredGaneshaWisdomPack1Stories: ganeshaWisdomPack1Stories.length,
    registeredStoryPacks: contentRegistryStoryPacks.length,
    registeredJourneys: contentRegistryJourneys.length,
    missingStoryIds,
    coverageStatus: missingStoryIds.length === 0 ? 'full_for_current_seed' : 'partial',
    migrationNote: 'Runtime resolver remains active in PR #119; registry is a canonical compatibility layer for upcoming migration work.'
  } as const;
}
