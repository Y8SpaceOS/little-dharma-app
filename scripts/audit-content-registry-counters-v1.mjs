import { contentRegistryStories, contentRegistryStoryPacks, contentRegistryJourneys, getContentRegistryCoverageSummary } from '../src/data/contentRegistry.ts';

const canonicalCategoryIds = new Set([
  'krishna_stories','ramayana_journey','ganesha_stories','hanuman_stories','bedtime_stories','values_stories','festival_stories','bhagavad_gita_for_children','mahabharata_child_safe','panchatantra_hitopadesha','shloka_mantra_meanings'
]);

const get = (obj, key, fallback = 'missing') => (obj && obj[key] !== undefined ? obj[key] : fallback);
const countBy = (rows, key) => rows.reduce((a, row) => { const k = String(get(row, key)); a[k] = (a[k] || 0) + 1; return a; }, {});
const findDupes = (ids) => [...ids.reduce((m,id)=>m.set(id,(m.get(id)||0)+1), new Map())].filter(([,n])=>n>1).map(([id])=>id);

const storyIds = contentRegistryStories.map((s) => s.id);
const packIds = contentRegistryStoryPacks.map((p) => p.id);
const journeyIds = contentRegistryJourneys.map((j) => j.id);

const duplicateStoryIds = findDupes(storyIds);
const duplicatePackIds = findDupes(packIds);
const duplicateJourneyIds = findDupes(journeyIds);

const packIdSet = new Set(packIds);
const journeyIdSet = new Set(journeyIds);

const missingPackRefs = [...new Set(contentRegistryStories.map((s) => s.storyPackId).filter((id) => !packIdSet.has(id)))];
const missingJourneyRefs = [...new Set(contentRegistryStories.map((s) => s.journeyId).filter(Boolean).filter((id) => !journeyIdSet.has(id)))];
const storiesWithoutJourneyId = contentRegistryStories.filter((s) => !s.journeyId).map((s) => s.id);
const journeyLinkedCount = contentRegistryStories.length - storiesWithoutJourneyId.length;

const orphanJourneyIds = contentRegistryJourneys.filter((j) => j.storyIds.every((id) => !storyIds.includes(id))).map((j) => j.id);

const nonCanonicalCategories = [...new Set(contentRegistryStories.map((s) => s.primaryCategoryId).filter(Boolean).filter((id) => !canonicalCategoryIds.has(id)))];

const statusCounts = countBy(contentRegistryStories, 'status');
const readinessCounts = countBy(contentRegistryStories, 'readinessStatus');
const audioCounts = countBy(contentRegistryStories, 'audioStatus');
const categoryCounts = countBy(contentRegistryStories, 'primaryCategoryId');

const qaReadyCount = contentRegistryStories.filter((s) => s.status === 'qa_ready' || s.readinessStatus === 'qa_ready').length;
const runtimeReadyCount = contentRegistryStories.filter((s) => s.status === 'runtime_ready' || s.status === 'available' || s.readinessStatus === 'runtime_ready').length;
const audioScriptReadyCount = contentRegistryStories.filter((s) => ['script_ready', 'audio_ready', 'audio_available'].includes(String(s.audioStatus))).length;
const publishedLocalCount = contentRegistryStories.filter((s) => ['runtime_ready','available'].includes(String(s.status))).length;

const summary = getContentRegistryCoverageSummary();
const missingFromCoverageSummary = contentRegistryStoryPacks.map((p) => p.id).filter((id) => !JSON.stringify(summary).includes(id));

const sacredPackStories = contentRegistryStories.filter((s) => /ramayana|krishna|ganesha|hanuman|bhagavad|mahabharata|shloka|mantra|panchatantra/i.test(String(s.storyPackId)));
const sacredViolations = sacredPackStories.filter((s) => {
  const candidate = s;
  return Boolean(candidate.ttsEnabled || candidate.microphoneEnabled || candidate.voiceRecordingEnabled || candidate.pronunciationScoringEnabled || candidate.chantingModeEnabled || candidate.audioFileUrl || candidate.audioFiles) || s.audioMetadata?.audioAvailable === true;
}).map((s) => s.id);

const errors = [];
if (duplicateStoryIds.length) errors.push(`Duplicate story IDs: ${duplicateStoryIds.join(', ')}`);
if (duplicatePackIds.length) errors.push(`Duplicate pack IDs: ${duplicatePackIds.join(', ')}`);
if (duplicateJourneyIds.length) errors.push(`Duplicate journey IDs: ${duplicateJourneyIds.join(', ')}`);
if (missingJourneyRefs.length) errors.push(`Stories reference missing journey IDs: ${missingJourneyRefs.join(', ')}`);
if (missingPackRefs.length) errors.push(`Stories reference missing pack IDs: ${missingPackRefs.join(', ')}`);
if (orphanJourneyIds.length) errors.push(`Orphan journey IDs: ${orphanJourneyIds.join(', ')}`);
if (nonCanonicalCategories.length) errors.push(`Non-canonical category IDs: ${nonCanonicalCategories.join(', ')}`);
if (runtimeReadyCount > 0) errors.push(`Runtime-ready stories detected (${runtimeReadyCount}); this governance gate expects zero runtime-ready stories.`);
if (sacredViolations.length) errors.push(`Sacred-content audio/voice behavior violations: ${sacredViolations.slice(0, 20).join(', ')}${sacredViolations.length > 20 ? '…' : ''}`);

const report = {
  totalRegisteredStories: contentRegistryStories.length,
  totalStoryPacks: contentRegistryStoryPacks.length,
  totalJourneys: contentRegistryJourneys.length,
  storiesByPrimaryCategoryId: categoryCounts,
  storiesByStatus: statusCounts,
  storiesByReadinessStatus: readinessCounts,
  storiesByAudioStatus: audioCounts,
  qa_ready_count: qaReadyCount,
  runtime_ready_count: runtimeReadyCount,
  audio_script_ready_count: audioScriptReadyCount,
  published_local_count: publishedLocalCount,
  journeyLinkedStoryCount: journeyLinkedCount,
  storiesWithoutJourneyIdCount: storiesWithoutJourneyId.length,
  duplicateStoryIds,
  duplicatePackIds,
  duplicateJourneyIds,
  orphanJourneyIds,
  missingPackRefs,
  missingJourneyRefs,
  nonCanonicalCategories,
  missingFromCoverageSummary
};

console.log(JSON.stringify(report, null, 2));
if (errors.length) {
  console.error('\nAudit failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('\nvalidate:content-registry-counters-v1 passed');
