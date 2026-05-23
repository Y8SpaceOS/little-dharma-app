import { contentRegistryStoryPacks, contentRegistryStories } from '@/data/contentRegistry';
import { getDharmaJourneys } from '@/services/dharmaJourneyService';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type {
  StoryExperienceAudioStatus,
  StoryExperienceCategoryId,
  StoryExperienceIndexCounterSnapshot,
  StoryExperienceIndexEntry,
  StoryExperienceIndexModel,
  StoryExperienceJourneyStatus,
  StoryExperienceReadinessStatus,
  StoryExperienceStatus
} from '@/types/storyExperienceIndex';

export const storyExperienceIndexModelVersion = 'pr155-story-experience-index-model-v1';

const pr207Targets = {
  indexedStoryExperiencesTarget: 1000,
  runtimeReadyStoriesTarget: 450,
  audioReadyScriptsTarget: 350
} as const;

const categoryIds: StoryExperienceCategoryId[] = [
  'krishna_stories', 'ramayana_journey', 'ganesha_stories', 'hanuman_stories', 'bedtime_stories', 'values_stories', 'festival_stories', 'bhagavad_gita_for_children', 'mahabharata_child_safe', 'panchatantra_hitopadesha'
];

function inferCategoryIdFromStoryPackId(storyPackId: string): StoryExperienceCategoryId {
  if (storyPackId.includes('ramayana')) return 'ramayana_journey';
  if (storyPackId.includes('ganesha')) return 'ganesha_stories';
  if (storyPackId.includes('hanuman')) return 'hanuman_stories';
  if (storyPackId.includes('bedtime')) return 'bedtime_stories';
  if (storyPackId.includes('festival')) return 'festival_stories';
  if (storyPackId.includes('gita')) return 'bhagavad_gita_for_children';
  if (storyPackId.includes('mahabharata')) return 'mahabharata_child_safe';
  if (storyPackId.includes('panchatantra') || storyPackId.includes('hitopadesha')) return 'panchatantra_hitopadesha';
  if (storyPackId.includes('krishna') || storyPackId.includes('vrindavan')) return 'krishna_stories';
  return 'values_stories';
}

function mapReadiness(story: (typeof contentRegistryStories)[number], isRuntimeEligible: boolean): StoryExperienceReadinessStatus {
  if (story.status === 'archived') return 'deprecated';
  if (!story.panels.length) return 'blocked';
  if (isRuntimeEligible) return 'runtime_ready';
  if (story.status === 'qa_ready') return 'qa_ready';
  return 'metadata_only';
}

function mapAudioStatus(story: (typeof contentRegistryStories)[number]): StoryExperienceAudioStatus {
  if (story.audioMetadata.audioAvailable) return 'audio_available';
  if (story.audioMetadata.narrationScriptStatus === 'available') return 'audio_ready';
  if (story.audioMetadata.narrationScriptStatus === 'runtime_ready') return 'script_ready';
  if (story.audioMetadata.narrationScriptStatus === 'qa_ready') return 'script_draft';
  if (story.audioMetadata.narrationScriptStatus === 'indexed') return 'script_needed';
  return 'none';
}

function mapJourneyStatus(entry: { journeyId?: string; journeyOrder?: number; isRuntimeEligible: boolean }): StoryExperienceJourneyStatus {
  if (!entry.journeyId) return 'none';
  if (!entry.isRuntimeEligible && entry.journeyOrder == null) return 'journey_outline_only';
  if (entry.isRuntimeEligible) return 'journey_runtime_ready';
  if (typeof entry.journeyOrder === 'number') return 'journey_ordered';
  return 'journey_indexed';
}

function mapStatus(entry: { readinessStatus: StoryExperienceReadinessStatus; audioStatus: StoryExperienceAudioStatus; isPublishedLocal: boolean }): StoryExperienceStatus {
  if (entry.isPublishedLocal) return 'published_local';
  if (entry.audioStatus === 'script_ready' || entry.audioStatus === 'audio_ready' || entry.audioStatus === 'audio_available') return 'audio_script_ready';
  if (entry.readinessStatus === 'runtime_ready') return 'runtime_ready';
  if (entry.readinessStatus === 'qa_ready') return 'qa_ready';
  return 'indexed';
}

export function getStoryExperienceIndexEntries(): StoryExperienceIndexEntry[] {
  return contentRegistryStories.map((story) => {
    const runtimeEligibility = getRuntimeStoryEligibility(story);
    const primaryCategoryId = inferCategoryIdFromStoryPackId(story.storyPackId);
    const readinessStatus = mapReadiness(story, runtimeEligibility.canRender);
    const audioStatus = mapAudioStatus(story);
    const hasAudioScript = audioStatus === 'script_ready' || audioStatus === 'audio_ready' || audioStatus === 'audio_available';
    const isPublishedLocal = story.status === 'runtime_ready' || story.status === 'available' || story.status === 'qa_ready';
    const limitations = [
      'Category mapping is inferred from storyPackId when no explicit Story World category taxonomy field exists.',
      'Audio script readiness uses conservative narrationScriptStatus mapping and does not infer from placeholders.',
      'Journey coverage depends on current journeyId and journeyOrder metadata in local registry stories.'
    ];

    return {
      experienceId: story.id,
      storyId: story.id,
      storyPackId: story.storyPackId,
      title: story.title,
      shortTitle: story.shortTitle,
      primaryCategoryId,
      secondaryCategoryIds: [],
      journeyId: story.journeyId,
      journeyOrder: story.journeyOrder,
      ageBands: story.ageBands,
      primaryValue: story.primaryValue,
      secondaryValues: story.secondaryValues,
      readinessStatus,
      audioStatus,
      status: mapStatus({ readinessStatus, audioStatus, isPublishedLocal }),
      journeyStatus: mapJourneyStatus({ journeyId: story.journeyId, journeyOrder: story.journeyOrder, isRuntimeEligible: runtimeEligibility.canRender }),
      sourceTradition: story.sourceTradition,
      durationMinutes: story.durationMinutes,
      hasPanels: story.panels.length > 0,
      hasParentNote: Boolean(story.parentNote?.sourceContext),
      hasReflectionPrompt: Boolean(story.reflectionPrompt),
      hasAudioScript,
      isRuntimeEligible: runtimeEligibility.canRender,
      isPublishedLocal,
      contentWarnings: [],
      indexingConfidence: primaryCategoryId === 'values_stories' ? 'medium' : 'high',
      sourceFiles: ['src/data/contentRegistry.ts', 'src/services/runtimeStoryResolverV2.ts'],
      limitations
    };
  });
}

export function getStoryExperienceIndexCounters(): StoryExperienceIndexCounterSnapshot {
  const entries = getStoryExperienceIndexEntries();
  const categoriesWithIndexed = new Set(entries.map((e) => e.primaryCategoryId));
  const categoriesWithRuntime = new Set(entries.filter((e) => e.isRuntimeEligible).map((e) => e.primaryCategoryId));
  const journeys = getDharmaJourneys();
  const journeyIds = new Set(journeys.map((j) => j.id));
  const journeysWithIndexedContent = new Set(entries.filter((e) => e.journeyId).map((e) => e.journeyId as string));
  const journeysWithRuntimeReadyContent = new Set(entries.filter((e) => e.journeyId && e.isRuntimeEligible).map((e) => e.journeyId as string));

  return {
    indexedStoryExperiences: entries.length,
    qaReadyStoryExperiences: entries.filter((e) => e.readinessStatus === 'qa_ready').length,
    runtimeReadyStoryExperiences: entries.filter((e) => e.readinessStatus === 'runtime_ready').length,
    audioScriptReadyStoryExperiences: entries.filter((e) => e.audioStatus === 'script_ready' || e.audioStatus === 'audio_ready' || e.audioStatus === 'audio_available').length,
    publishedLocalStoryExperiences: entries.filter((e) => e.isPublishedLocal).length,
    blockedStoryExperiences: entries.filter((e) => e.readinessStatus === 'blocked').length,
    deprecatedStoryExperiences: entries.filter((e) => e.readinessStatus === 'deprecated').length,
    categoryCount: categoryIds.length,
    categoriesWithIndexedContent: categoriesWithIndexed.size,
    categoriesWithRuntimeReadyContent: categoriesWithRuntime.size,
    journeyCount: journeyIds.size,
    journeysWithIndexedContent: journeysWithIndexedContent.size,
    journeysWithRuntimeReadyContent: journeysWithRuntimeReadyContent.size,
    contentPackCount: contentRegistryStoryPacks.length
  };
}

export function getStoryExperienceIndexCategoryCoverage() {
  const entries = getStoryExperienceIndexEntries();
  return categoryIds.map((categoryId) => ({
    categoryId,
    indexedCount: entries.filter((e) => e.primaryCategoryId === categoryId).length,
    runtimeReadyCount: entries.filter((e) => e.primaryCategoryId === categoryId && e.isRuntimeEligible).length
  }));
}

export function getStoryExperienceIndexJourneyCoverage() {
  const entries = getStoryExperienceIndexEntries();
  return getDharmaJourneys().map((journey) => ({
    journeyId: journey.id,
    indexedCount: entries.filter((e) => e.journeyId === journey.id).length,
    runtimeReadyCount: entries.filter((e) => e.journeyId === journey.id && e.isRuntimeEligible).length
  }));
}

export function getStoryExperienceIndexCountingRules(): string[] {
  return [
    'One unique storyId normally equals one indexed story experience.',
    'A story with materially different age-band variants may become multiple story experiences only when variants have separate entry IDs.',
    'A journey outline item without runtime panels may be indexed but not runtime-ready.',
    'A qa_ready story is not runtime-ready unless Runtime Story Resolver v2 can render it.',
    'Audio script ready requires script status, not just audio metadata placeholder.',
    'Published local means child-usable without backend dependency.',
    'Coming-soon doorways do not count as runtime-ready experiences.',
    'Placeholder cards do not count as indexed story experiences unless backed by content metadata.'
  ];
}

export function buildStoryExperienceIndex(): StoryExperienceIndexModel {
  return {
    modelVersion: storyExperienceIndexModelVersion,
    entries: getStoryExperienceIndexEntries(),
    counters: getStoryExperienceIndexCounters(),
    categoryCoverage: getStoryExperienceIndexCategoryCoverage(),
    journeyCoverage: getStoryExperienceIndexJourneyCoverage(),
    statusDefinitions: {
      indexed: 'Content metadata exists and is counted as indexed.',
      qa_ready: 'Editorial QA-ready metadata exists but runtime rendering is not assumed.',
      runtime_ready: 'Runtime Story Resolver v2 can render the story content safely.',
      audio_script_ready: 'Narration script has script-ready or better status.',
      published_local: 'Child-usable in local app distribution without backend dependency.'
    },
    countingRules: getStoryExperienceIndexCountingRules(),
    confidenceNotes: [
      'Category inference is mostly pack-id based until explicit category taxonomy fields become canonical.',
      'Audio readiness detection is conservative and intentionally avoids placeholder-only promotion.',
      'Journey mapping quality depends on explicit journeyId/journeyOrder coverage in registry metadata.'
    ],
    pr207Targets
  };
}

export function getStoryExperienceIndexSummary(): string {
  const counters = getStoryExperienceIndexCounters();
  return `Indexed ${counters.indexedStoryExperiences}; runtime-ready ${counters.runtimeReadyStoryExperiences}; audio-script-ready ${counters.audioScriptReadyStoryExperiences}; published-local ${counters.publishedLocalStoryExperiences}.`;
}
