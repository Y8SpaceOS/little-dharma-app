import type { ChildAgeBand } from '@/lib/childProfile';

export type ContentPackType = 'story_world' | 'dharma_journey' | 'ritual' | 'bedtime' | 'festival' | 'values';
export type ContentPackStatus = 'available' | 'planned' | 'coming_later';

export type ContentPack = {
  id: string;
  title: string;
  childFacingTitle: string;
  description: string;
  packType: ContentPackType;
  sourceTradition: string;
  recommendedAgeBands: ChildAgeBand[];
  primaryValues: string[];
  characters: string[];
  storyIds: string[];
  journeyIds: string[];
  status: ContentPackStatus;
  sortOrder: number;
  parentTrustNote: string;
  updatedAtLocal: string;
};

// Editorial guardrails: child-safe retellings, no graphic violence for younger children,
// no fear-based religion, no sectarian superiority, no caste-coded messaging,
// no guilt-based devotion, no deity trivialisation, source-tradition respect,
// parent-trusted language, and simple age-band suitability.
export const seededContentPacks: ContentPack[] = [
  {
    id: 'krishna-stories-pack',
    title: 'Krishna Stories',
    childFacingTitle: 'Krishna Stories',
    description: 'Playful, values-led Krishna story corners for young listeners.',
    packType: 'story_world',
    sourceTradition: 'Bhagavata tradition',
    recommendedAgeBands: ['3-5', '6-8', '9-12'],
    primaryValues: ['Kindness', 'Joy', 'Courage'],
    characters: ['Krishna'],
    storyIds: ['vrindavan-week-1', 'vrindavan-week-2', 'vrindavan-week-3'],
    journeyIds: ['vrindavan-starter-path'],
    status: 'available',
    sortOrder: 1,
    parentTrustNote: 'Locally curated story retellings with gentle, child-safe framing.',
    updatedAtLocal: '2026-05-18'
  },
  { id: 'ganesha-stories-pack', title: 'Ganesha Stories', childFacingTitle: 'Ganesha Story World', description: 'Warm, values-led Ganesha story paths with blessings, diyas, and gentle wisdom.', packType: 'story_world', sourceTradition: 'Ganesha traditions', recommendedAgeBands: ['3-5', '6-8', '9-12'], primaryValues: ['Patience', 'Care', 'Focus'], characters: ['Ganesha'], storyIds: [], journeyIds: ['ganesha-wisdom-journey'], status: 'planned', sortOrder: 2, parentTrustNote: 'Planning-only child-safe retellings with source-tradition respect and age-aware framing.', updatedAtLocal: '2026-05-19' },
  { id: 'hanuman-stories-pack', title: 'Hanuman Stories', childFacingTitle: 'Hanuman Stories', description: 'Courage-and-devotion stories with age-appropriate care.', packType: 'story_world', sourceTradition: 'Ramayana / Hanuman tradition', recommendedAgeBands: ['6-8', '9-12'], primaryValues: ['Courage', 'Devotion'], characters: ['Hanuman'], storyIds: [], journeyIds: ['hanuman-journey'], status: 'planned', sortOrder: 3, parentTrustNote: 'Planned with careful language and non-graphic storytelling.', updatedAtLocal: '2026-05-18' },
  { id: 'festival-stories-pack', title: 'Festival Stories', childFacingTitle: 'Festival Stories', description: 'Seasonal story collections with joy, gratitude, and family warmth.', packType: 'festival', sourceTradition: 'Hindu festivals', recommendedAgeBands: ['3-5', '6-8', '9-12'], primaryValues: ['Gratitude', 'Joy'], characters: [], storyIds: [], journeyIds: ['festival-journey'], status: 'planned', sortOrder: 4, parentTrustNote: 'Planned festival stories will remain local-first and culturally respectful.', updatedAtLocal: '2026-05-18' },
  { id: 'bedtime-stories-pack', title: 'Bedtime Stories', childFacingTitle: 'Bedtime Stories', description: 'Soft bedtime stories for calm evenings and gentle transitions.', packType: 'bedtime', sourceTradition: 'Little Dharma bedtime tradition', recommendedAgeBands: ['3-5', '6-8'], primaryValues: ['Calm', 'Care'], characters: [], storyIds: [], journeyIds: [], status: 'planned', sortOrder: 5, parentTrustNote: 'Planned bedtime stories use soothing, non-fearful language.', updatedAtLocal: '2026-05-18' },
  { id: 'values-stories-pack', title: 'Values Stories', childFacingTitle: 'Values Stories', description: 'Story collections that grow kindness, courage, and truthfulness.', packType: 'values', sourceTradition: 'Indian values storytelling', recommendedAgeBands: ['3-5', '6-8', '9-12'], primaryValues: ['Kindness', 'Courage', 'Truthfulness'], characters: [], storyIds: [], journeyIds: [], status: 'planned', sortOrder: 6, parentTrustNote: 'Values stories are planned with non-competitive and parent-trusted framing.', updatedAtLocal: '2026-05-18' },
  { id: 'ramayana-journey-pack', title: 'Ramayana Journey Pack', childFacingTitle: 'Ramayana Journey', description: 'A sequential journey pack for child-safe Ramayana retellings.', packType: 'dharma_journey', sourceTradition: 'Ramayana', recommendedAgeBands: ['6-8', '9-12'], primaryValues: ['Duty', 'Courage'], characters: ['Rama', 'Sita', 'Hanuman'], storyIds: [], journeyIds: ['ramayana-journey'], status: 'planned', sortOrder: 7, parentTrustNote: 'Planned with careful editorial review and age-band suitability.', updatedAtLocal: '2026-05-18' },
  { id: 'krishna-childhood-journey-pack', title: 'Krishna Childhood Journey Pack', childFacingTitle: 'Krishna Childhood Journey', description: 'A warm journey through Krishna childhood moments and values.', packType: 'dharma_journey', sourceTradition: 'Bhagavata tradition', recommendedAgeBands: ['3-5', '6-8'], primaryValues: ['Joy', 'Kindness'], characters: ['Krishna', 'Yashoda'], storyIds: [], journeyIds: ['krishna-childhood-journey'], status: 'planned', sortOrder: 8, parentTrustNote: 'Planned for younger children with gentle and joyful story language.', updatedAtLocal: '2026-05-18' },
  { id: 'mahabharata-journey-pack', title: 'Mahabharata Journey Pack', childFacingTitle: 'Mahabharata Journey', description: 'A later-stage journey pack for older children with stronger guardrails.', packType: 'dharma_journey', sourceTradition: 'Mahabharata', recommendedAgeBands: ['9-12'], primaryValues: ['Discernment', 'Duty'], characters: ['Pandavas', 'Krishna'], storyIds: [], journeyIds: ['mahabharata-journey'], status: 'coming_later', sortOrder: 9, parentTrustNote: 'Coming later due to additional editorial guardrails for complexity.', updatedAtLocal: '2026-05-18' },
  { id: 'bhagavad-gita-children-pack', title: 'Bhagavad Gita for Children Pack', childFacingTitle: 'Bhagavad Gita for Children', description: 'A values-and-ideas journey pack in simple, age-appropriate language.', packType: 'dharma_journey', sourceTradition: 'Bhagavad Gita', recommendedAgeBands: ['9-12'], primaryValues: ['Wisdom', 'Clarity'], characters: ['Krishna', 'Arjuna'], storyIds: [], journeyIds: ['bhagavad-gita-for-children'], status: 'coming_later', sortOrder: 10, parentTrustNote: 'Coming later with careful parent-trust language and source respect.', updatedAtLocal: '2026-05-18' }
];

export function getAllContentPacks(): ContentPack[] { return [...seededContentPacks].sort((a, b) => a.sortOrder - b.sortOrder); }
export function getAvailableContentPacks(): ContentPack[] { return getAllContentPacks().filter((pack) => pack.status === 'available'); }
export function getContentPackById(id: string): ContentPack | null { return seededContentPacks.find((pack) => pack.id === id) ?? null; }
export function getContentPacksByType(type: ContentPackType): ContentPack[] { return getAllContentPacks().filter((pack) => pack.packType === type); }
export function getRecommendedContentPacksByAgeBand(ageBand: ChildAgeBand): ContentPack[] { return getAllContentPacks().filter((pack) => pack.recommendedAgeBands.includes(ageBand)); }
export function getContentPacksForStoryWorld(): ContentPack[] { return getAllContentPacks().filter((pack) => pack.packType === 'story_world' || pack.packType === 'festival' || pack.packType === 'bedtime' || pack.packType === 'values'); }
export function getContentPacksForDharmaJourneys(): ContentPack[] { return getAllContentPacks().filter((pack) => pack.packType === 'dharma_journey'); }
export function getParentFacingContentPackSummary() {
  return {
    heading: 'Content packs are locally curated story worlds and journey paths.',
    trustNote: 'All packs are local-first on this device with parent-trusted editorial guardrails.',
    statusNote: 'Available packs are ready now. Planned and coming later packs are listed transparently without pretending content exists.'
  };
}
