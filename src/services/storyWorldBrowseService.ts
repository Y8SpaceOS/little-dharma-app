import { contentRegistryJourneys, contentRegistryStories, contentRegistryStoryPacks } from '@/data/contentRegistry';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type { Story, StoryWorldCategory } from '@/types/contentModel';
import type { StoryWorldBrowseCard, StoryWorldBrowseSection, StoryWorldBrowseStatus, StoryWorldBrowseSummary } from '@/types/storyWorldBrowse';

export const storyWorldBrowseVersion = 'pr176-story-world-browse-v1-product-foundation';

type SectionConfig = {
  id: string;
  title: string;
  subtitle: string;
  category: StoryWorldCategory;
};

const sectionOrder: SectionConfig[] = [
  { id: 'krishna-stories', title: 'Krishna Stories', subtitle: 'Playful devotion and loving choices.', category: 'krishna' },
  { id: 'ramayana-journey', title: 'Ramayana Journey', subtitle: 'A gentle path through family dharma.', category: 'ramayana' },
  { id: 'ganesha-stories', title: 'Ganesha Stories', subtitle: 'Wisdom, focus, and fresh beginnings.', category: 'ganesha' },
  { id: 'hanuman-stories', title: 'Hanuman Stories', subtitle: 'Brave hearts and joyful service.', category: 'hanuman' },
  { id: 'bedtime-stories', title: 'Bedtime Stories', subtitle: 'Soft stories for peaceful evenings.', category: 'bedtime' },
  { id: 'values-stories', title: 'Values Stories', subtitle: 'Kindness and gratitude in everyday life.', category: 'values' },
  { id: 'festival-stories', title: 'Festival Stories', subtitle: 'Traditions, celebrations, and light.', category: 'festivals' },
  { id: 'bhagavad-gita-for-children', title: 'Bhagavad Gita for Children', subtitle: 'Small wisdom steps for growing minds.', category: 'bhagavad_gita' },
  { id: 'mahabharata-stories', title: 'Mahabharata Stories', subtitle: 'Age-safe stories of courage and dharma.', category: 'mahabharata' },
  { id: 'shloka-meaning', title: 'Shloka & Meaning', subtitle: 'Short sacred lines with gentle meaning.', category: 'shlokas' }
];

function toBrowseStatus(story: Story, isRuntimeAvailable: boolean): StoryWorldBrowseStatus {
  if (story.id.includes('preview') || story.slug.includes('preview') || story.storyPackId.includes('preview')) return 'locked_preview';
  if (isRuntimeAvailable) return 'available';
  if (story.status === 'coming_soon') return 'coming_soon';
  return 'unavailable';
}

function getStoryCategory(story: Story): StoryWorldCategory {
  const pack = contentRegistryStoryPacks.find((item) => item.id === story.storyPackId);
  return pack?.category ?? 'values';
}

function getJourneyTag(story: Story): string | null {
  if (!story.journeyId) return null;
  const journey = contentRegistryJourneys.find((item) => item.id === story.journeyId);
  return journey?.childFacingTitle ?? journey?.title ?? 'Journey path';
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
    category: getStoryCategory(story),
    href: story.journeyId ? `/journey-map/${story.journeyId}` : isRuntimeAvailable ? `/story/${story.slug}` : '/(child)/worlds',
    status,
    durationMinutes: story.durationMinutes,
    primaryValue: story.primaryValue,
    sourceTradition: story.sourceTradition,
    ageBands: story.ageBands,
    isRuntimeAvailable,
    isSequential: Boolean(story.journeyId),
    journeyId: story.journeyId ?? null,
    journeyTag: getJourneyTag(story),
    storyPackId: story.storyPackId,
    hasAudioMetadata: story.audioMetadata.audioAvailable || story.audioStatus === 'script_ready' || story.audioStatus === 'audio_ready' || story.audioStatus === 'audio_available',
    localFirstHint: 'Local-first and family-safe on this device.',
    accessibilityLabel: story.title,
    accessibilityHint: story.journeyId ? 'Open Dharma Journey map' : isRuntimeAvailable ? 'Open story' : 'Story details are being prepared'
  };
}

export function getStoryWorldDoorwayCards(): StoryWorldBrowseCard[] {
  return sectionOrder.map((section) => {
    const pack = contentRegistryStoryPacks.find((entry) => entry.category === section.category);
    const firstStory = contentRegistryStories.find((story) => getStoryCategory(story) === section.category);
    return {
      id: `doorway-${section.id}`,
      slug: section.id,
      title: section.title,
      shortTitle: section.title,
      summary: section.subtitle,
      category: section.category,
      href: `/(child)/worlds#${section.id}`,
      status: firstStory ? 'available' : 'coming_soon',
      durationMinutes: firstStory?.durationMinutes ?? 0,
      primaryValue: firstStory?.primaryValue ?? 'Dharma',
      sourceTradition: pack?.sourceTradition ?? 'Little Dharma Story World',
      ageBands: pack?.recommendedAgeBands ?? ['3-5', '6-8', '9-12'],
      isRuntimeAvailable: Boolean(firstStory),
      isSequential: false,
      journeyId: null,
      journeyTag: null,
      storyPackId: pack?.id ?? null,
      hasAudioMetadata: false,
      localFirstHint: 'Local-first and family-safe on this device.',
      accessibilityLabel: section.title,
      accessibilityHint: firstStory ? 'Open story world section' : 'Section is getting ready'
    };
  });
}

export function getStoryWorldBrowseCards(): StoryWorldBrowseCard[] {
  return contentRegistryStories.map(mapRegistryStoryToBrowseCard).filter((card) => card.status !== 'locked_preview');
}

export function getStoryWorldBrowseSections(): StoryWorldBrowseSection[] {
  const cards = getStoryWorldBrowseCards();
  return sectionOrder.map((section, index) => ({
    id: section.id,
    title: section.title,
    subtitle: section.subtitle,
    category: section.category,
    cards: cards.filter((card) => card.category === section.category),
    displayOrder: index + 1
  }));
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
