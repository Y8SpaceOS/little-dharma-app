import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type {
  ContentImportManifest,
  ContentImportValidationResult,
  ImportedDharmaJourneyDraft,
  ImportedStoryDraft,
  ImportedStoryPackDraft
} from '@/types/contentImport';

const HARD_GAMIFICATION_PATTERN = /\bxp\b|points?|trophies?|scoreboards?|level-ups?/i;
const STORY_LIBRARY_PATTERN = /story library/i;

export function validateContentImportManifest(manifest: ContentImportManifest): ContentImportValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!manifest.id.trim()) errors.push('Manifest missing id.');

  const storyIdSet = new Set<string>();
  const slugSet = new Set<string>();

  for (const story of manifest.stories) {
    if (!story.id.trim()) errors.push('Story missing id.');
    if (!story.slug.trim()) errors.push(`Story ${story.id || '(unknown)'} missing slug.`);
    if (!story.status) errors.push(`Story ${story.id || '(unknown)'} missing status.`);
    if (!story.panels.length) errors.push(`Story ${story.id || '(unknown)'} missing panels.`);
    if (!story.parentNote) errors.push(`Story ${story.id || '(unknown)'} missing parent note.`);
    if (!story.ageBands.length) errors.push(`Story ${story.id || '(unknown)'} missing age bands.`);
    if (story.audioMetadata.noMicRequired !== true) errors.push(`Story ${story.id || '(unknown)'} has invalid noMicRequired value.`);

    if (storyIdSet.has(story.id)) errors.push(`Duplicate story id: ${story.id}`);
    storyIdSet.add(story.id);
    if (slugSet.has(story.slug)) errors.push(`Duplicate story slug: ${story.slug}`);
    slugSet.add(story.slug);

    if (hasHardGamificationText([story.title, story.summary, ...story.panels.map((panel) => panel.text)])) {
      errors.push(`Hard gamification wording detected in story ${story.id}.`);
    }

    if (STORY_LIBRARY_PATTERN.test(story.summary) || STORY_LIBRARY_PATTERN.test(story.title)) {
      errors.push(`Story Library phrase detected in story ${story.id} child-facing text.`);
    }
  }

  const storyIds = manifest.stories.map((story) => story.id);
  for (const storyId of manifest.storyPack.storyIds) {
    if (!storyIds.includes(storyId)) {
      errors.push(`Story pack references unknown story id: ${storyId}`);
    }
  }

  for (const journey of manifest.journeys) {
    for (const storyId of journey.storyIds) {
      if (!storyIds.includes(storyId)) errors.push(`Journey ${journey.id} references unknown story id: ${storyId}`);
    }
    if (STORY_LIBRARY_PATTERN.test(journey.childFacingTitle) || STORY_LIBRARY_PATTERN.test(journey.description)) {
      errors.push(`Story Library phrase detected in journey ${journey.id} child-facing text.`);
    }
  }

  if (STORY_LIBRARY_PATTERN.test(manifest.storyPack.childFacingTitle) || STORY_LIBRARY_PATTERN.test(manifest.storyPack.description)) {
    errors.push('Story Library phrase detected in story pack child-facing text.');
  }

  if (manifest.importMode === 'seed_preview' || manifest.notes.toLowerCase().includes('scaffold')) {
    warnings.push('Manifest is preview/import scaffold only; full editorial QA validation is planned for PR #121.');
  }

  const statuses = manifest.stories.map((story) => story.status);
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    storyCount: manifest.stories.length,
    packCount: 1,
    journeyCount: manifest.journeys.length,
    runtimeReadyCount: statuses.filter((status) => status === 'runtime_ready' || status === 'available').length,
    qaReadyCount: statuses.filter((status) => status === 'qa_ready').length,
    indexedCount: statuses.filter((status) => status === 'indexed').length
  };
}

export function convertImportedStoryDraftToStory(draft: ImportedStoryDraft): Story {
  return { ...draft };
}

export function convertImportedStoryPackDraftToStoryPack(draft: ImportedStoryPackDraft): StoryPack {
  return { ...draft };
}

export function convertImportedDharmaJourneyDraftToDharmaJourney(draft: ImportedDharmaJourneyDraft): DharmaJourney {
  return { ...draft };
}

export function getContentImportPipelineSummary(manifest: ContentImportManifest) {
  const validation = validateContentImportManifest(manifest);
  return {
    manifestId: manifest.id,
    importMode: manifest.importMode,
    storyPackId: manifest.storyPack.id,
    storyCount: validation.storyCount,
    journeyCount: validation.journeyCount,
    statusBreakdown: {
      indexed: validation.indexedCount,
      qaReady: validation.qaReadyCount,
      runtimeReady: validation.runtimeReadyCount
    },
    valid: validation.valid,
    errors: validation.errors.length,
    warnings: validation.warnings.length
  } as const;
}

function hasHardGamificationText(values: string[]): boolean {
  return values.some((value) => HARD_GAMIFICATION_PATTERN.test(value));
}
