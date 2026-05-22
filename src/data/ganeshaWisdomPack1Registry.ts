import { ganeshaWisdomPack1Stories } from '@/data/seed/ganeshaWisdomPack1';
import type { DharmaJourney, StoryPack } from '@/types/contentModel';

export { ganeshaWisdomPack1Stories };

export const ganeshaWisdomPack1StoryPack: StoryPack = {
  id: 'ganesha-wisdom-pack-1',
  title: 'Ganesha Wisdom Pack 1',
  childFacingTitle: 'Ganesha Story World Pack 1',
  description: 'Local-first Ganesha wisdom starter pack with child-safe devotional stories for ages 3–8.',
  sourceTradition: 'Ganesha Wisdom Stories',
  category: 'ganesha',
  status: 'qa_ready',
  storyIds: ganeshaWisdomPack1Stories.map((story) => story.id),
  recommendedAgeBands: ['3-5', '6-8', 'family'],
  contentSafetyNotes: [
    'Child-safe scope excludes violence, fear-heavy miracle framing, and shame-heavy parenting.',
    'Local-first content only; no backend, telemetry, networking, or account dependency.'
  ],
  sacredRespectNotes: ['Ganesha is presented with warm reverence, sacred restraint, and culturally grounded devotional dignity.']
};

export const ganeshaWisdomPack1Journey: DharmaJourney = {
  id: 'ganesha-wisdom-pack-1',
  title: 'Ganesha Wisdom Pack 1 Journey',
  childFacingTitle: 'Ganesha Story World Journey',
  description: 'Guided Ganesha wisdom journey for families with children ages 3–8.',
  sourceTradition: 'Ganesha Wisdom Stories',
  recommendedAgeBands: ['3-5', '6-8', 'family'],
  storyIds: ganeshaWisdomPack1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 2,
  status: 'qa_ready',
  journeyType: 'guided_path'
};

export const ganeshaWisdomPack1CoverageSummary = {
  packId: ganeshaWisdomPack1StoryPack.id,
  journeyId: ganeshaWisdomPack1Journey.id,
  storyCount: ganeshaWisdomPack1Stories.length,
  qaReadyStories: ganeshaWisdomPack1Stories.filter((story) => story.status === 'qa_ready').length,
  runtimeReadyStories: ganeshaWisdomPack1Stories.filter((story) => story.status === 'runtime_ready' || story.status === 'available').length,
  localFirstOnly: true,
  runtimeAvailabilityGated: true
} as const;
