import { contentRegistryStories, getContentRegistryStoryById, getContentRegistryStoryBySlug } from '@/data/contentRegistry';
import { validateImportedStoryEditorialQa } from '@/data/editorialQaValidator';
import { getStoryJourneyBySlug, getVrindavanJourneyPath } from '@/services/journeys';
import type { Story } from '@/types/contentModel';
import type { RuntimeResolvedStoryV2, RuntimeStoryEligibility, RuntimeStoryResolverSummary } from '@/types/runtimeStoryResolver';

export const runtimeStoryResolverVersion = 'pr122-runtime-story-resolver-v2';

function hasRequiredRuntimeFields(story: Story): boolean {
  return Boolean(
    story.id &&
      story.slug &&
      story.title &&
      story.shortTitle &&
      story.summary &&
      story.storyPackId &&
      story.primaryValue &&
      Array.isArray(story.panels) &&
      story.panels.length > 0 &&
      story.parentNote &&
      story.reflectionPrompt &&
      story.ritualPrompt &&
      story.completionBlessing &&
      story.illustrationPrompt &&
      story.audioMetadata
  );
}

function isPreviewScaffoldStory(story: Story): boolean {
  return story.id.includes('preview') || story.slug.includes('preview') || story.storyPackId.includes('preview');
}

export function getRuntimeStoryEligibility(story: Story): RuntimeStoryEligibility {
  if (!hasRequiredRuntimeFields(story)) {
    return { canRender: false, reason: 'missing_required_runtime_fields', source: 'registry', status: story.status, editorialQaValid: false, approvedForRuntime: false };
  }

  const qa = validateImportedStoryEditorialQa(story);
  if (qa.errorCount > 0) {
    return { canRender: false, reason: 'editorial_qa_errors', source: 'registry', status: story.status, editorialQaValid: false, approvedForRuntime: false };
  }

  if (!(story.status === 'runtime_ready' || story.status === 'available')) {
    return { canRender: false, reason: 'status_not_runtime_eligible', source: 'registry', status: story.status, editorialQaValid: qa.valid, approvedForRuntime: false };
  }

  if (isPreviewScaffoldStory(story)) {
    return { canRender: false, reason: 'preview_scaffold_blocked', source: 'registry', status: story.status, editorialQaValid: qa.valid, approvedForRuntime: false };
  }

  return { canRender: true, reason: 'eligible', source: 'registry', status: story.status, editorialQaValid: qa.valid, approvedForRuntime: qa.approvedForRuntime };
}

export function mapRegistryStoryToRuntimeResolvedStoryV2(story: Story): RuntimeResolvedStoryV2 {
  return {
    source: 'registry',
    storyId: story.id,
    slug: story.slug,
    title: story.title,
    shortTitle: story.shortTitle,
    summary: story.summary,
    panels: story.panels,
    parentNote: story.parentNote,
    reflectionPrompt: story.reflectionPrompt,
    ritualPrompt: story.ritualPrompt,
    completionBlessing: story.completionBlessing,
    primaryValue: story.primaryValue,
    secondaryValues: story.secondaryValues,
    characters: story.characters,
    durationMinutes: story.durationMinutes,
    sacredRespectLevel: story.sacredRespectLevel,
    audioMetadata: story.audioMetadata,
    illustrationPrompt: story.illustrationPrompt,
    storyPackId: story.storyPackId,
    journeyId: story.journeyId ?? null,
    journeyOrder: story.journeyOrder ?? null,
    eligibility: getRuntimeStoryEligibility(story)
  };
}

export function mapLegacyJourneyToRuntimeResolvedStoryV2(packet: NonNullable<ReturnType<typeof getStoryJourneyBySlug>>): RuntimeResolvedStoryV2 {
  return {
    source: 'legacy_vrindavan',
    storyId: `legacy-vrindavan-${packet.story.slug}`,
    slug: packet.story.slug,
    title: packet.story.title,
    shortTitle: packet.story.title,
    summary: `A Little Dharma Story World journey about ${packet.story.value.toLowerCase()}.`,
    panels: packet.story.panels,
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
    primaryValue: packet.story.value,
    secondaryValues: [packet.value.name],
    characters: [packet.character.name],
    durationMinutes: 10,
    sacredRespectLevel: 'sacred_story',
    audioMetadata: {
      audioAvailable: false,
      voiceOptions: ['indian-child-friendly-narration-preview'],
      narrationScriptStatus: 'draft',
      preferredVoiceStyle: 'gentle-family-storyteller',
      pacing: 'steady',
      noMicRequired: true
    },
    illustrationPrompt: {
      sceneSummary: packet.story.panels[0]?.text ?? packet.story.title,
      styleGuidance: 'Warm child-facing devotional illustration with calm expression, gentle motion, and natural tones.',
      culturalGuardrails: ['Respect sacred symbols.', 'Avoid caricature and fantasy armor.', 'Keep settings grounded in Indian context.'],
      deityTreatment: 'Use reverent, non-comedic portrayal with soft visual emphasis and no tokenization.',
      avoidList: ['No device-frame overlays.', 'No hard-gamification reward motifs.', 'No loud neon game UI overlays.']
    },
    storyPackId: 'vrindavan-story-pack-v1',
    journeyId: 'vrindavan-starter-path',
    journeyOrder: null,
    eligibility: { canRender: true, reason: 'legacy_fallback', source: 'legacy_vrindavan', status: 'available', editorialQaValid: true, approvedForRuntime: true }
  };
}

export function resolveRuntimeStoryV2BySlug(slug: string): RuntimeResolvedStoryV2 | null {
  const registryStory = getContentRegistryStoryBySlug(slug);
  if (registryStory) {
    const resolved = mapRegistryStoryToRuntimeResolvedStoryV2(registryStory);
    if (resolved.eligibility.canRender) return resolved;
  }

  const legacy = getStoryJourneyBySlug(slug);
  return legacy ? mapLegacyJourneyToRuntimeResolvedStoryV2(legacy) : null;
}

export function resolveRuntimeStoryV2ById(id: string): RuntimeResolvedStoryV2 | null {
  const registryStory = getContentRegistryStoryById(id);
  if (registryStory) {
    const resolved = mapRegistryStoryToRuntimeResolvedStoryV2(registryStory);
    if (resolved.eligibility.canRender) return resolved;
    const legacy = getStoryJourneyBySlug(registryStory.slug);
    return legacy ? mapLegacyJourneyToRuntimeResolvedStoryV2(legacy) : null;
  }

  return null;
}

export function getRuntimeStoryResolverSummary(): RuntimeStoryResolverSummary {
  const runtimeEligibleRegistryCount = contentRegistryStories.filter((story) => getRuntimeStoryEligibility(story).canRender).length;
  return {
    registryStoryCount: contentRegistryStories.length,
    legacyStoryCount: getVrindavanJourneyPath().length,
    runtimeEligibleRegistryCount,
    fallbackEnabled: true,
    resolverVersion: runtimeStoryResolverVersion
  };
}
