import type { StoryJourney } from '@/types/content';
import type { StoryWorldItem, StoryWorldSectionId } from '@/data/storyWorld';
import type { Story, StoryPack, ContentStatus, StoryWorldCategory } from '@/types/contentModel';

const DEFAULT_STATUS: ContentStatus = 'indexed';

const STORY_WORLD_SECTION_TO_CATEGORY: Record<StoryWorldSectionId, StoryWorldCategory> = {
  'start-here': 'values',
  krishna: 'krishna',
  ganesha: 'ganesha',
  bedtime: 'bedtime',
  values: 'values',
  festivals: 'festivals',
  'dharma-journeys': 'values'
};

export function toContentModelStoryId(slug: string): string {
  return `vrindavan-${slug}`;
}

export function mapVrindavanPacketToStoryModelV2(packet: StoryJourney, index = 0): Story {
  return {
    id: toContentModelStoryId(packet.story.slug),
    slug: packet.story.slug,
    title: packet.story.title,
    shortTitle: packet.story.title,
    summary: `A Little Dharma Story World journey about ${packet.story.value.toLowerCase()}.`,
    sourceTradition: packet.world.title,
    sourceTextOrTraditionNote: 'Derived from local-first Vrindavan narrative packet and parent ritual guidance.',
    storyPackId: 'vrindavan-story-pack-v1',
    primaryCategoryId: 'krishna_stories',
    readinessStatus: 'metadata_only',
    audioStatus: 'script_needed',
    journeyStatus: 'journey_ordered',
    journeyId: 'vrindavan-starter-path',
    journeyOrder: index + 1,
    ageBands: ['3-5', '6-8', '9-12'],
    recommendedAgeBand: packet.story.ageBand === '4-6' ? '3-5' : '6-8',
    durationMinutes: 10,
    primaryValue: packet.story.value,
    secondaryValues: [packet.value.name],
    characters: [packet.character.name],
    panels: packet.story.panels.map((panel) => ({ id: panel.id, title: panel.title, text: panel.text })),
    parentNote: {
      sourceContext: packet.story.ritual.parentMeaning,
      valueExplained: packet.story.ritual.childMeaning,
      discussionPrompt: packet.story.parentReflectionPrompt,
      practicePrompt: packet.story.ritual.ritualPrompt,
      cautionNote: 'Keep sacred framing gentle, accurate, and age-appropriate; avoid performative pressure.'
    },
    reflectionPrompt: packet.story.ritual.reflectionQuestion,
    ritualPrompt: packet.story.ritual.ritualPrompt,
    completionBlessing: packet.story.completionShareCopy,
    sacredRespectLevel: 'sacred_story',
    illustrationPrompt: {
      sceneSummary: packet.story.panels[0]?.text ?? packet.story.title,
      styleGuidance: 'Warm child-facing devotional illustration with calm expression, gentle motion, and natural tones.',
      culturalGuardrails: ['Respect sacred symbols.', 'Avoid caricature and fantasy armor.', 'Keep settings grounded in Indian context.'],
      deityTreatment: 'Use reverent, non-comedic portrayal with soft visual emphasis and no tokenization.',
      avoidList: ['No device-frame overlays.', 'No hard-gamification reward motifs.', 'No loud neon game UI overlays.']
    },
    audioMetadata: {
      audioAvailable: false,
      voiceOptions: ['indian-child-friendly-narration-preview'],
      narrationScriptStatus: 'draft',
      preferredVoiceStyle: 'gentle-family-storyteller',
      pacing: 'steady',
      noMicRequired: true
    },
    status: DEFAULT_STATUS
  };
}

export function mapStoryWorldItemToStoryPackPreview(item: StoryWorldItem): StoryPack {
  return {
    id: `pack-preview-${item.id}`,
    title: item.title,
    childFacingTitle: item.shortTitle,
    description: item.summary,
    sourceTradition: item.sourceTradition,
    category: STORY_WORLD_SECTION_TO_CATEGORY[item.sectionId],
    status: item.status,
    storyIds: item.slug ? [toContentModelStoryId(item.slug)] : [],
    recommendedAgeBands: item.ageBands.filter((age): age is '3-5' | '6-8' | '9-12' => age !== 'prefer-not-to-say'),
    contentSafetyNotes: ['Local-first content only; no account-required features.', 'Child-facing wording stays warm and non-gamified.'],
    sacredRespectNotes: ['Sacred references should preserve respectful context and avoid novelty framing.']
  };
}

export function getContentModelV2CoverageSummary(packets: StoryJourney[]) {
  const mapped = packets.map((packet, index) => mapVrindavanPacketToStoryModelV2(packet, index));
  return {
    totalPackets: packets.length,
    mappedStories: mapped.length,
    storiesWithPanels: mapped.filter((story) => story.panels.length > 0).length,
    storiesWithParentNotes: mapped.filter((story) => Boolean(story.parentNote.discussionPrompt)).length,
    status: mapped.length === packets.length ? 'full_for_input' : 'partial'
  } as const;
}
