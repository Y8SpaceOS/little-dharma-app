import { krishnaChildhoodPack1Stories } from '@/data/seed/krishnaChildhoodPack1';
import type { DharmaJourney, StoryPack } from '@/types/contentModel';

export { krishnaChildhoodPack1Stories };

export const krishnaChildhoodPack1StoryPack: StoryPack = {
  id: 'krishna-childhood-pack-1',
  title: 'Krishna Childhood Pack 1',
  childFacingTitle: 'Krishna Story World Pack 1',
  description: 'Local-first Krishna childhood starter pack with child-safe devotional stories for ages 3–8.',
  sourceTradition: 'Krishna Childhood Stories',
  category: 'krishna',
  status: 'qa_ready',
  storyIds: krishnaChildhoodPack1Stories.map((story) => story.id),
  recommendedAgeBands: ['3-5', '6-8'],
  contentSafetyNotes: [
    'Child-safe scope excludes violence, fear-heavy miracle framing, and shame-heavy parenting.',
    'Local-first content only; no backend, telemetry, networking, or account dependency.'
  ],
  sacredRespectNotes: ['Krishna is presented with warm reverence, playful restraint, and culturally grounded devotional dignity.']
};

export const krishnaChildhoodPack1Journey: DharmaJourney = {
  id: 'krishna-childhood-pack-1',
  title: 'Krishna Childhood Pack 1 Journey',
  childFacingTitle: 'Krishna Story World Journey',
  description: 'Guided Krishna childhood values journey for families with children ages 3–8.',
  sourceTradition: 'Krishna Childhood Stories',
  recommendedAgeBands: ['3-5', '6-8'],
  storyIds: krishnaChildhoodPack1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 2,
  status: 'qa_ready',
  journeyType: 'guided_path'
};

export const krishnaChildhoodPack1CoverageSummary = {
  packId: krishnaChildhoodPack1StoryPack.id,
  journeyId: krishnaChildhoodPack1Journey.id,
  storyCount: krishnaChildhoodPack1Stories.length,
  qaReadyStories: krishnaChildhoodPack1Stories.filter((story) => story.status === 'qa_ready').length,
  runtimeReadyStories: krishnaChildhoodPack1Stories.filter((story) => story.status === 'runtime_ready' || story.status === 'available').length,
  localFirstOnly: true,
  runtimeAvailabilityGated: true
} as const;
