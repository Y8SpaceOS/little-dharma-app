import type { ChildAgeBand } from '@/lib/childProfile';

export type DharmaJourneyStatus = 'planned' | 'available' | 'coming_later';

export type DharmaJourney = {
  id: string;
  title: string;
  childFacingTitle: string;
  description: string;
  sourceTradition: string;
  recommendedAgeBands: ChildAgeBand[];
  totalStories: number;
  estimatedCompletionWeeks: number;
  status: DharmaJourneyStatus;
};

export type JourneyProgress = {
  journeyId: string;
  completedStoryIds: string[];
  currentStoryId: string | null;
  lastOpenedStoryId: string | null;
  updatedAtLocal: string;
};

// Editorial guardrails: child-safe retellings, no graphic violence for younger children,
// no fear-based religion, no sectarian superiority, no caste-coded messaging,
// no guilt-based devotion, no deity trivialisation, and parent-trusted language.
export const seededDharmaJourneys: DharmaJourney[] = [
  {
    id: 'ramayana-journey',
    title: 'Ramayana Journey',
    childFacingTitle: 'Ramayana Journey',
    description: 'A gentle story path through child-safe Ramayana retellings.',
    sourceTradition: 'Ramayana',
    recommendedAgeBands: ['6-8', '9-12'],
    totalStories: 0,
    estimatedCompletionWeeks: 8,
    status: 'planned'
  },
  {
    id: 'krishna-childhood-journey',
    title: 'Krishna Childhood Journey',
    childFacingTitle: 'Krishna Childhood Journey',
    description: 'Playful Krishna stories in a warm, values-led journey path.',
    sourceTradition: 'Bhagavata tradition',
    recommendedAgeBands: ['3-5', '6-8'],
    totalStories: 0,
    estimatedCompletionWeeks: 6,
    status: 'planned'
  },
  {
    id: 'ganesha-wisdom-journey',
    title: 'Ganesha Wisdom Journey',
    childFacingTitle: 'Ganesha Wisdom Journey',
    description: 'Short wisdom stories to build patience, courage, and care.',
    sourceTradition: 'Ganesha stories',
    recommendedAgeBands: ['3-5', '6-8'],
    totalStories: 0,
    estimatedCompletionWeeks: 4,
    status: 'planned'
  },
  {
    id: 'festival-journey',
    title: 'Festival Journey',
    childFacingTitle: 'Festival Journey',
    description: 'Seasonal story paths that connect children with festivals.',
    sourceTradition: 'Hindu festivals',
    recommendedAgeBands: ['3-5', '6-8', '9-12'],
    totalStories: 0,
    estimatedCompletionWeeks: 6,
    status: 'coming_later'
  },
  {
    id: 'hanuman-journey',
    title: 'Hanuman Journey',
    childFacingTitle: 'Hanuman Journey',
    description: 'A values-first path inspired by Hanuman stories.',
    sourceTradition: 'Ramayana / Hanuman tradition',
    recommendedAgeBands: ['6-8', '9-12'],
    totalStories: 0,
    estimatedCompletionWeeks: 5,
    status: 'coming_later'
  },
  {
    id: 'mahabharata-journey',
    title: 'Mahabharata Journey',
    childFacingTitle: 'Mahabharata Journey',
    description: 'Editorially guided stories for older children, prepared with care.',
    sourceTradition: 'Mahabharata',
    recommendedAgeBands: ['9-12'],
    totalStories: 0,
    estimatedCompletionWeeks: 10,
    status: 'coming_later'
  },
  {
    id: 'bhagavad-gita-for-children',
    title: 'Bhagavad Gita for Children',
    childFacingTitle: 'Bhagavad Gita for Children',
    description: 'Foundational ideas in child-friendly language with strong guardrails.',
    sourceTradition: 'Bhagavad Gita',
    recommendedAgeBands: ['9-12'],
    totalStories: 0,
    estimatedCompletionWeeks: 8,
    status: 'coming_later'
  }
];

export function getAllDharmaJourneys(): DharmaJourney[] { return seededDharmaJourneys; }
export function getActiveDharmaJourneys(): DharmaJourney[] { return seededDharmaJourneys.filter((j) => j.status !== 'coming_later'); }
export function getDharmaJourneyById(id: string): DharmaJourney | null { return seededDharmaJourneys.find((j) => j.id === id) ?? null; }
export function getRecommendedJourneysByAgeBand(ageBand: ChildAgeBand): DharmaJourney[] {
  return seededDharmaJourneys
    .filter((j) => j.recommendedAgeBands.includes(ageBand))
    .sort((a, b) => {
      const rank = (id: string) => (id === 'ramayana-journey' || id === 'krishna-childhood-journey' ? 0 : id.includes('mahabharata') || id.includes('gita') ? 2 : 1);
      return rank(a.id) - rank(b.id);
    });
}

export function getParentFacingJourneySummary() {
  return {
    heading: 'Dharma Journeys are gentle story paths.',
    sequencingNote: 'Ramayana and Krishna Childhood are recommended first. Mahabharata and Bhagavad Gita come later with older-child editorial care.',
    privacyNote: 'Progress stays on this device. No public child profile is created.'
  };
}
