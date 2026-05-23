import { contentRegistryStoryPacks, contentRegistryStories } from '@/data/contentRegistry';
import { getDharmaJourneys } from '@/services/dharmaJourneyService';
import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';

export const contentScaleRecoveryControlTowerModelVersion = 'pr154-content-scale-recovery-control-tower-v1';

const pr207Targets = {
  indexedStoryExperiencesTarget: 1000,
  runtimeReadyStoriesTarget: 450,
  audioReadyScriptsTarget: 350,
  strongDharmaJourneysTargetMin: 6,
  strongDharmaJourneysTargetMax: 8
} as const;

const requiredCategoryCoverage = [
  'Krishna Stories', 'Ramayana Journey', 'Ganesha Stories', 'Hanuman Stories', 'Bedtime Stories', 'Values Stories', 'Festival Stories', 'Bhagavad Gita for Children', 'Mahabharata Child-Safe', 'Panchatantra / Hitopadesha'
] as const;

const requiredJourneyCoverage = [
  'Ramayana Journey', 'Krishna Childhood Journey', 'Ganesha Wisdom Journey', 'Hanuman Journey', 'Festival Journey', 'Bhagavad Gita for Children', 'Mahabharata Journey', 'Panchatantra / Hitopadesha Values Journey', 'Bedtime / Calm Journey'
] as const;

function counter(name: string, detectedCount: number, confidence: 'high' | 'medium' | 'low', sourceFiles: string[], limitation?: string) {
  return { name, detectedCount, confidence, sourceFiles, limitation: limitation ?? null };
}

function inferCategoryFromStoryPackId(storyPackId: string): string {
  if (storyPackId.includes('ramayana')) return 'Ramayana Journey';
  if (storyPackId.includes('ganesha')) return 'Ganesha Stories';
  if (storyPackId.includes('krishna') || storyPackId.includes('vrindavan')) return 'Krishna Stories';
  return 'Values Stories';
}

function getCategoryCoverageModel() {
  const runtimeEligibleStories = contentRegistryStories.filter((story) => getRuntimeStoryEligibility(story).canRender);
  const runtimeCategories = new Set(runtimeEligibleStories.map((story) => inferCategoryFromStoryPackId(story.storyPackId)));

  return {
    runtimeCategories,
    categoryCoverage: requiredCategoryCoverage.map((name) => ({
      name,
      hasRuntimeReadyContent: runtimeCategories.has(name),
      status: runtimeCategories.has(name) ? 'real' : 'placeholder_or_coming_soon',
      confidence: ['Krishna Stories', 'Ramayana Journey', 'Ganesha Stories', 'Values Stories'].includes(name) ? 'medium' : 'low',
      limitation: runtimeCategories.has(name)
        ? 'Category mapping is inferred from storyPackId and runtime eligibility; taxonomy can evolve with Story Experience Index Model v1.'
        : 'No runtime-eligible stories currently mapped to this category using conservative storyPackId inference.'
    }))
  } as const;
}

export function getContentScaleRecoveryTargets() { return pr207Targets; }

export function getContentScaleRecoveryCounters() {
  const runtimeEligibleStories = contentRegistryStories.filter((story) => getRuntimeStoryEligibility(story).canRender);
  const audioReadyStories = contentRegistryStories.filter((story) => story.audioMetadata.narrationScriptStatus === 'runtime_ready' || story.audioMetadata.narrationScriptStatus === 'available');
  const journeys = getDharmaJourneys();
  const strongJourneys = journeys.filter((j) => j.isRuntimeAvailable && j.totalStories >= 8);
  const categoryCoverageModel = getCategoryCoverageModel();
  const categoriesWithRuntimeReady = categoryCoverageModel.categoryCoverage.filter((category) => category.hasRuntimeReadyContent).map((category) => category.name);
  const categoriesComingSoon = categoryCoverageModel.categoryCoverage.filter((category) => !category.hasRuntimeReadyContent).map((category) => category.name);

  return {
    indexedStoryExperiences: counter('indexedStoryExperiences', contentRegistryStories.length, 'high', ['src/data/contentRegistry.ts']),
    runtimeReadyStories: counter('runtimeReadyStories', runtimeEligibleStories.length, 'high', ['src/data/contentRegistry.ts', 'src/services/runtimeStoryResolverV2.ts']),
    audioReadyScripts: counter('audioReadyScripts', audioReadyStories.length, 'high', ['src/data/contentRegistry.ts']),
    dharmaJourneys: counter('dharmaJourneys', journeys.length, 'high', ['src/services/dharmaJourneyService.ts', 'src/data/storyWorld.ts']),
    strongDharmaJourneys: counter('strongDharmaJourneys', strongJourneys.length, 'medium', ['src/services/dharmaJourneyService.ts'], 'Strength is conservatively inferred as runtime-available with at least 8 indexed stories.'),
    storyWorldCategories: counter('storyWorldCategories', requiredCategoryCoverage.length, 'medium', ['src/data/storyWorld.ts', 'src/services/storyWorldBrowseService.ts'], 'Detection is roadmap-category based rather than strict schema-mapped taxonomy.'),
    categoriesWithRuntimeReadyContent: counter('categoriesWithRuntimeReadyContent', categoriesWithRuntimeReady.length, 'medium', ['src/data/contentRegistry.ts', 'src/services/runtimeStoryResolverV2.ts'], 'Category mapping is inferred from storyPackId and runtime eligibility.'),
    categoriesWithOnlyPlaceholderOrComingSoonContent: counter('categoriesWithOnlyPlaceholderOrComingSoonContent', categoriesComingSoon.length, 'medium', ['src/data/storyWorld.ts', 'src/data/contentRegistry.ts', 'src/services/runtimeStoryResolverV2.ts'], 'Categories without at least one runtime-eligible story remain placeholder/coming-soon for recovery planning.'),
    contentPacksDetected: counter('contentPacksDetected', contentRegistryStoryPacks.length, 'high', ['src/data/contentRegistry.ts']),
    parentDashboardContentSignalsDetected: counter('parentDashboardContentSignalsDetected', 1, 'low', ['src/services/parentJourneyProgressService.ts', 'src/services/parentWeeklySummaryService.ts'], 'Signal presence detected by service existence only; no quantified insight depth model exists yet.')
  } as const;
}

export function getContentScaleRecoveryGaps() {
  const counters = getContentScaleRecoveryCounters();
  return {
    indexedStoryExperiencesGap: pr207Targets.indexedStoryExperiencesTarget - counters.indexedStoryExperiences.detectedCount,
    runtimeReadyStoriesGap: pr207Targets.runtimeReadyStoriesTarget - counters.runtimeReadyStories.detectedCount,
    audioReadyScriptsGap: pr207Targets.audioReadyScriptsTarget - counters.audioReadyScripts.detectedCount,
    strongDharmaJourneysGapMin: pr207Targets.strongDharmaJourneysTargetMin - counters.strongDharmaJourneys.detectedCount,
    strongDharmaJourneysGapMax: pr207Targets.strongDharmaJourneysTargetMax - counters.strongDharmaJourneys.detectedCount
  } as const;
}

export function getContentScaleRecoveryNextMilestones() {
  return [
    { pr: 'PR #160', indexed: '250-300', runtimeReady: '75-100', audioReady: '40-60' },
    { pr: 'PR #170', indexed: '500-600', runtimeReady: '180-220', audioReady: '120-150' },
    { pr: 'PR #180', indexed: '750-850', runtimeReady: '280-320', audioReady: '220-250' },
    { pr: 'PR #190', indexed: '1000+', runtimeReady: '360-400', audioReady: '300+' },
    { pr: 'PR #207', indexed: '1000+', runtimeReady: '450+', audioReady: '350+' }
  ] as const;
}

export function getContentScaleRecoverySummary() {
  const counters = getContentScaleRecoveryCounters();
  const gaps = getContentScaleRecoveryGaps();
  return `Detected ${counters.indexedStoryExperiences.detectedCount} indexed, ${counters.runtimeReadyStories.detectedCount} runtime-ready, ${counters.audioReadyScripts.detectedCount} audio-ready; remaining gap to PR #207 is ${gaps.indexedStoryExperiencesGap}/${gaps.runtimeReadyStoriesGap}/${gaps.audioReadyScriptsGap}.`;
}

export function buildContentScaleRecoveryControlTower() {
  const currentCounters = getContentScaleRecoveryCounters();
  const journeys = getDharmaJourneys();
  const categoryCoverageModel = getCategoryCoverageModel();

  return {
    modelVersion: contentScaleRecoveryControlTowerModelVersion,
    pr207Targets: getContentScaleRecoveryTargets(),
    currentCounters,
    gapsToPr207: getContentScaleRecoveryGaps(),
    categoryCoverage: categoryCoverageModel.categoryCoverage,
    journeyCoverage: requiredJourneyCoverage.map((name) => {
      const matched = journeys.find((j) => j.title.toLowerCase().includes(name.toLowerCase().replace(' / calm journey', '').replace(' values journey', '')));
      return { name, status: matched ? (matched.isRuntimeAvailable ? 'real' : matched.status === 'coming_soon' ? 'coming_soon' : 'outline_only') : 'coming_soon' };
    }),
    contentStatusDefinitions: {
      indexed: 'Content metadata exists and is counted in indexed inventory.',
      qa_ready: 'Content passed editorial QA checks but is not runtime-eligible by default.',
      runtime_ready: 'Content can render through Runtime Story Resolver v2 gates.',
      audio_script_ready: 'Narration script is ready for production audio recording workflow.',
      published_local: 'Content is available in app-local distribution without backend dependency.'
    },
    recoveryMilestones: getContentScaleRecoveryNextMilestones(),
    nextApprovedPrs: [
      'PR #155: Story Experience Index Model v1', 'PR #156: Bulk Content Import Pipeline v2', 'PR #157: Runtime-Ready Story Gate v1', 'PR #158: Audio-Ready Script Gate v1', 'PR #159: Ramayana Expansion Recovery Pack v1', 'PR #160: Krishna Childhood Expansion Recovery Pack v1', 'PR #161: Ganesha + Hanuman Expansion Pack v1', 'PR #162: Bedtime + Values Expansion Pack v1', 'PR #163: Festival Stories Expansion Pack v1', 'PR #164: Panchatantra / Hitopadesha Values Pack v1', 'PR #165: Bhagavad Gita for Children Pack v1', 'PR #166: Mahabharata Child-Safe Pack v1', 'PR #167: Story World Category Depth Pass v1', 'PR #168: Parent Reading Insight Upgrade v1', 'PR #169: Runtime Promotion Batch v1', 'PR #170: Audio Script Promotion Batch v1'
    ],
    nonContentDetourApprovalRule: 'Any future PR that does not directly move indexed story experiences, runtime-ready stories, audio-ready scripts, Dharma Journey depth, Story World category depth, parent dashboard usefulness, local-first stability protecting content scale, or real app-surface warmth on existing product surfaces requires explicit approval.',
    summary: getContentScaleRecoverySummary()
  } as const;
}
