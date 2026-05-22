import { ramayanaPack1Stories } from '@/data/seed/ramayanaPack1';
import type { DharmaJourney, StoryPack } from '@/types/contentModel';

export { ramayanaPack1Stories };

export const ramayanaPack1StoryPack: StoryPack = {
  id: 'ramayana-journey-pack-1',
  title: 'Ramayana Journey Pack 1',
  childFacingTitle: 'Ramayana Story World Pack 1',
  description: 'Local-first foundational Ramayana journey pack with child-safe, editorially scoped stories.',
  sourceTradition: 'Ramayana',
  category: 'ramayana',
  status: 'qa_ready',
  storyIds: ramayanaPack1Stories.map((story) => story.id),
  recommendedAgeBands: ['3-5', '6-8'],
  contentSafetyNotes: [
    'Child-safe scope excludes graphic violence, trauma framing, and punishment-heavy storytelling.',
    'Local-first content only. No networking, backend, telemetry, or account dependency.'
  ],
  sacredRespectNotes: ['Sacred characters are presented with warm, culturally respectful devotional restraint.']
};

export const ramayanaPack1Journey: DharmaJourney = {
  id: 'ramayana-journey-pack-1',
  title: 'Ramayana Journey Pack 1',
  childFacingTitle: 'Ramayana Story World Journey',
  description: 'First guided Ramayana journey path focused on gentle values for ages 3–8.',
  sourceTradition: 'Ramayana',
  recommendedAgeBands: ['3-5', '6-8'],
  storyIds: ramayanaPack1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 2,
  status: 'qa_ready',
  journeyType: 'guided_path'
};

export const ramayanaPack1CoverageSummary = {
  packId: ramayanaPack1StoryPack.id,
  journeyId: ramayanaPack1Journey.id,
  storyCount: ramayanaPack1Stories.length,
  qaReadyStories: ramayanaPack1Stories.filter((story) => story.status === 'qa_ready').length,
  runtimeReadyStories: ramayanaPack1Stories.filter((story) => story.status === 'runtime_ready' || story.status === 'available').length,
  localFirstOnly: true,
  runtimeAvailabilityGated: true
} as const;
