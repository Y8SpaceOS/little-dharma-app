import { type ChildAgeBand } from '@/lib/childProfile';
import { getVrindavanJourneyPath } from '@/services/journeys';

export type StoryWorldStatus = 'available' | 'coming_soon';
export type StoryWorldSectionId =
  | 'start-here'
  | 'krishna'
  | 'ganesha'
  | 'bedtime'
  | 'values'
  | 'festivals'
  | 'dharma-journeys';

export type StoryWorldItem = {
  id: string;
  slug?: string;
  title: string;
  shortTitle: string;
  summary: string;
  sourceTradition: string;
  journeyId?: string;
  journeyOrder?: number;
  ageBands: ChildAgeBand[];
  durationMinutes: number;
  primaryValue: string;
  secondaryValues?: string[];
  characters?: string[];
  isSequential: boolean;
  audioAvailable: boolean;
  audioVoiceOptions?: string[];
  status: StoryWorldStatus;
  sectionId: StoryWorldSectionId;
};

export type StoryWorldSection = {
  id: StoryWorldSectionId;
  title: string;
  subtitle: string;
};

const journeyStories = getVrindavanJourneyPath().map((packet, index): StoryWorldItem => ({
  id: `vrindavan-${packet.story.slug}`,
  slug: packet.story.slug,
  title: packet.story.title,
  shortTitle: packet.story.title,
  summary: 'A gentle dharma story with a reflection and mini ritual.',
  sourceTradition: 'Vrindavan Story Path',
  journeyId: 'vrindavan-starter-path',
  journeyOrder: index + 1,
  ageBands: index < 2 ? ['3-5', '6-8'] : ['6-8', '9-12'],
  durationMinutes: 10,
  primaryValue: packet.story.value,
  secondaryValues: ['Kindness'],
  characters: ['Krishna'],
  isSequential: true,
  audioAvailable: false,
  audioVoiceOptions: ['indian-child-friendly-narration-preview'],
  status: 'available',
  sectionId: index < 3 ? 'start-here' : 'krishna'
}));

export const storyWorldSections: StoryWorldSection[] = [
  { id: 'start-here', title: 'Start Here', subtitle: 'Your warm first story corners.' },
  { id: 'krishna', title: 'Krishna Stories', subtitle: 'Playful wisdom from Krishna\'s world.' },
  { id: 'ganesha', title: 'Ganesha Stories', subtitle: 'Opening soon · gentle wisdom stories.' },
  { id: 'bedtime', title: 'Bedtime Stories', subtitle: 'Calm stories for quiet evenings.' },
  { id: 'values', title: 'Values Stories', subtitle: 'Small moments that grow big hearts.' },
  { id: 'festivals', title: 'Festival Stories', subtitle: 'Opening soon · festive story corners.' },
  { id: 'dharma-journeys', title: 'Dharma Journeys', subtitle: 'Story paths arriving soon.' }
];

const comingSoonJourneys: StoryWorldItem[] = [
  'Ramayana Journey',
  'Krishna Childhood Journey',
  'Ganesha Wisdom Journey',
  'Bhagavad Gita for Children',
  'Mahabharata Journey'
].map((title, index) => ({
  id: `journey-preview-${index + 1}`,
  title,
  shortTitle: title,
  summary: 'This story corner is being prepared with care.',
  sourceTradition: 'Dharma Journeys',
  ageBands: ['3-5', '6-8', '9-12', 'prefer-not-to-say'],
  durationMinutes: 8,
  primaryValue: 'Wisdom',
  isSequential: true,
  audioAvailable: false,
  status: 'coming_soon',
  sectionId: 'dharma-journeys'
}));

const comingSoonSectionsSeed: { id: string; title: string; sectionId: StoryWorldSectionId }[] = [
  { id: 'ganesha-opening-soon', title: 'Ganesha\'s First Wisdom Tale', sectionId: 'ganesha' },
  { id: 'bedtime-opening-soon', title: 'Moonlight Prayer Story', sectionId: 'bedtime' },
  { id: 'values-opening-soon', title: 'The Lamp of Courage', sectionId: 'values' },
  { id: 'festival-opening-soon', title: 'Festival Lights Story', sectionId: 'festivals' }
];

const comingSoonSections: StoryWorldItem[] = comingSoonSectionsSeed.map((entry) => ({
  ...entry,
  shortTitle: entry.title,
  summary: 'More stories arriving soon.',
  sourceTradition: 'Little Dharma Story World',
  ageBands: ['3-5', '6-8', '9-12'],
  durationMinutes: 6,
  primaryValue: 'Care',
  isSequential: false,
  audioAvailable: false,
  status: 'coming_soon'
}));

export const storyWorldItems: StoryWorldItem[] = [...journeyStories, ...comingSoonSections, ...comingSoonJourneys];
