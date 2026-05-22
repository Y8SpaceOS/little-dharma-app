import { contentRegistryStories } from '@/data/contentRegistry';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type { Story } from '@/types/contentModel';
import type { StoryWorldBrowseCard, StoryWorldBrowseSection, StoryWorldBrowseStatus, StoryWorldBrowseSummary } from '@/types/storyWorldBrowse';

export const storyWorldBrowseVersion = 'pr123-story-world-data-driven-browse-v1';

type LegacyWorldItem = {
  id: string;
  title: string;
  copy: string;
  href: string;
  tags: string[];
  ready: boolean;
  bg: string;
};

const legacyWorldItems: LegacyWorldItem[] = [
  { id: 'krishna', title: 'Krishna Stories', copy: 'Playful devotion, kindness, and courage.', href: '/world/krishna', tags: ['Values', 'Journeys'], ready: true, bg: '#FCE9C8' },
  { id: 'ganesha', title: 'Ganesha Stories', copy: 'Wisdom and fresh beginnings with warmth.', href: '/world/ganesha', tags: ['Values'], ready: true, bg: '#F8E8F2' },
  { id: 'ramayana', title: 'Ramayana Journey', copy: 'Family dharma and loving choices.', href: '/world/ramayana', tags: ['Journeys'], ready: true, bg: '#E8F2FF' },
  { id: 'hanuman', title: 'Hanuman Stories', copy: 'Brave service and gentle strength.', href: '/world/hanuman', tags: ['Values', 'Journeys'], ready: true, bg: '#E9F7EC' },
  { id: 'bedtime', title: 'Bedtime Stories', copy: 'Soft stories for peaceful evenings.', href: '/world/bedtime', tags: ['Bedtime'], ready: true, bg: '#E8EAFF' },
  { id: 'values', title: 'Values Stories', copy: 'Kindness and gratitude in daily life.', href: '/world/values', tags: ['Values'], ready: true, bg: '#F8ECFA' },
  { id: 'festivals', title: 'Festival Stories', copy: 'Seasonal stories and traditions.', href: '/world/festivals', tags: ['Festivals'], ready: false, bg: '#FFF0DB' }
];

const doorwayOrder = [
  'Krishna Stories',
  'Ganesha Stories',
  'Ramayana Journey',
  'Hanuman Stories',
  'Bedtime Stories',
  'Values Stories',
  'Festival Stories'
] as const;

function mapLegacyCategory(item: LegacyWorldItem): StoryWorldBrowseCard['category'] {
  if (item.id === 'ramayana') return 'ramayana';
  if (item.id === 'hanuman') return 'hanuman';
  if (item.id === 'festivals') return 'festivals';
  if (item.id === 'bedtime') return 'bedtime';
  if (item.id === 'values') return 'values';
  if (item.id === 'ganesha') return 'ganesha';
  return 'krishna';
}

function toBrowseStatus(story: Story, isRuntimeAvailable: boolean): StoryWorldBrowseStatus {
  if (story.id.includes('preview') || story.slug.includes('preview') || story.storyPackId.includes('preview')) return 'locked_preview';
  if (isRuntimeAvailable) return 'available';
  if (story.status === 'coming_soon') return 'coming_soon';
  return 'unavailable';
}

export function mapRegistryStoryToBrowseCard(story: Story): StoryWorldBrowseCard {
  const eligibility = getRuntimeStoryEligibility(story);
  const isRuntimeAvailable = eligibility.canRender;
  const status = toBrowseStatus(story, isRuntimeAvailable);

  return {
    id: story.id,
    slug: story.slug,
    title: story.title,
    shortTitle: story.shortTitle,
    summary: story.summary,
    category: story.storyPackId.includes('vrindavan') ? 'krishna' : 'values',
    href: isRuntimeAvailable ? `/story/${story.slug}` : '/(child)/worlds',
    status,
    durationMinutes: story.durationMinutes,
    primaryValue: story.primaryValue,
    sourceTradition: story.sourceTradition,
    ageBands: story.ageBands,
    isRuntimeAvailable,
    isSequential: Boolean(story.journeyId),
    journeyId: story.journeyId ?? null,
    storyPackId: story.storyPackId,
    accessibilityLabel: story.title,
    accessibilityHint: isRuntimeAvailable ? 'Open story' : 'More stories coming soon'
  };
}

export function mapStoryWorldItemToBrowseCard(item: LegacyWorldItem): StoryWorldBrowseCard {
  const isRuntimeAvailable = item.ready;
  return {
    id: `world-${item.id}`,
    slug: item.id,
    title: item.title,
    shortTitle: item.title,
    summary: item.copy,
    category: mapLegacyCategory(item),
    href: item.href,
    status: isRuntimeAvailable ? 'available' : 'coming_soon',
    durationMinutes: 0,
    primaryValue: 'Dharma',
    sourceTradition: 'Little Dharma Story World',
    ageBands: ['3-5', '6-8', '9-12'],
    isRuntimeAvailable,
    isSequential: item.tags.includes('Journeys'),
    journeyId: item.tags.includes('Journeys') ? `${item.id}-journey` : null,
    storyPackId: null,
    accessibilityLabel: item.title,
    accessibilityHint: isRuntimeAvailable ? 'Open story world doorway' : 'More stories coming soon'
  };
}

export function getStoryWorldDoorwayCards(): StoryWorldBrowseCard[] {
  const cards = legacyWorldItems.map(mapStoryWorldItemToBrowseCard);
  const cardByTitle = new Map(cards.map((card) => [card.title, card]));
  return doorwayOrder
    .map((title) => cardByTitle.get(title))
    .filter((card): card is StoryWorldBrowseCard => Boolean(card));
}

export function getStoryWorldBrowseCards(): StoryWorldBrowseCard[] {
  const runtimeCards = contentRegistryStories
    .map(mapRegistryStoryToBrowseCard)
    .filter((card) => card.isRuntimeAvailable && card.status !== 'locked_preview');
  const worldCards = getStoryWorldDoorwayCards();
  return [...worldCards, ...runtimeCards];
}

export function getStoryWorldBrowseSections(): StoryWorldBrowseSection[] {
  return [{
    id: 'story-world-doorways',
    title: 'Story World',
    subtitle: 'Choose one doorway to begin.',
    category: 'dharma_journeys',
    cards: getStoryWorldDoorwayCards(),
    displayOrder: 1
  }];
}

export function getStoryWorldBrowseCardBySlug(slug: string): StoryWorldBrowseCard | null {
  return getStoryWorldBrowseCards().find((card) => card.slug === slug) ?? null;
}

export function getStoryWorldBrowseSummary(): StoryWorldBrowseSummary {
  const sections = getStoryWorldBrowseSections();
  const cards = getStoryWorldBrowseCards();
  return {
    sectionCount: sections.length,
    cardCount: cards.length,
    runtimeAvailableCardCount: cards.filter((card) => card.isRuntimeAvailable).length,
    comingSoonCardCount: cards.filter((card) => card.status === 'coming_soon').length,
    browseVersion: storyWorldBrowseVersion,
    source: 'content_registry_and_story_world_local'
  };
}
