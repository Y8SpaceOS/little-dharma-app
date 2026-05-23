import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';
import type {
  BulkContentImportCounterImpact,
  BulkContentImportDryRunReport,
  BulkContentImportPackInput,
  BulkContentImportPipelineConfig,
  BulkContentImportPipelineModelVersion,
  BulkContentImportReadinessDecision,
  BulkContentImportStoryInput,
  BulkContentImportValidationIssue
} from '@/types/bulkContentImportPipeline';

export const bulkContentImportPipelineModelVersion: BulkContentImportPipelineModelVersion = 'pr156-bulk-content-import-pipeline-v2';

const allowedCategoryIds: StoryExperienceCategoryId[] = [
  'krishna_stories',
  'ramayana_journey',
  'ganesha_stories',
  'hanuman_stories',
  'bedtime_stories',
  'values_stories',
  'festival_stories',
  'bhagavad_gita_for_children',
  'mahabharata_child_safe',
  'panchatantra_hitopadesha'
];

const pr207Targets = { indexedStoryExperiencesTarget: 1000, runtimeReadyStoriesTarget: 450, audioReadyScriptsTarget: 350 } as const;

export function buildBulkContentImportPipelineConfig(): BulkContentImportPipelineConfig {
  return {
    modelVersion: bulkContentImportPipelineModelVersion,
    allowedCategoryIds,
    blockedTerms: {
      gamification: ['leaderboard', 'coins', 'xp', 'streak reward', 'daily reward'],
      childFacingDisallowed: ['story library'],
      backendTrackingSharing: ['analytics', 'telemetry', 'notification', 'push', 'email', 'sms', 'whatsapp', 'share', 'backend', 'api'],
      sacredTrivialization: ['silly god', 'cartoon god', 'mock prayer']
    },
    pr207Targets
  };
}

export function getBulkContentImportRequiredFields() {
  return {
    index: ['storyId', 'title', 'summary', 'sourceTradition', 'primaryCategoryId', 'ageBands', 'primaryValue', 'statusIntent'],
    qaReady: ['panels (>=3)', 'parentNote', 'reflectionPrompt', 'secondaryValues', 'characters', 'sacredRespectNotes when sacred content involved'],
    runtimeReady: ['panels (>=4)', 'panel.text', 'durationMinutes', 'parentNote.sourceContext', 'parentNote.discussionPrompt', 'no blocked issues'],
    audioScriptReady: ['audioScript.narrationScript', 'audioScript.voiceDirection', 'audioScript.pronunciationNotes', 'audioScript.pacingNotes']
  } as const;
}

export function getBulkContentImportReadinessRules(): Record<BulkContentImportReadinessDecision, string> {
  return {
    index_only: 'Indexed metadata candidate only; not runtime promoted.',
    qa_ready_candidate: 'Meets QA candidate structure but remains non-runtime unless later gates approve.',
    runtime_ready_candidate: 'Requests runtime-ready candidacy and must include runtime-required fields; dry-run only.',
    audio_script_ready_candidate: 'Requires runtime-ready candidate completeness plus full audio script fields; dry-run only.',
    blocked: 'Fails required contract or violates protected language and safety rules.'
  };
}

function hasText(v: unknown): boolean { return typeof v === 'string' && v.trim().length > 0; }
function lowerBlob(story: BulkContentImportStoryInput): string {
  return [story.title, story.summary, story.reflectionPrompt ?? '', story.parentNote?.discussionPrompt ?? '', story.panels.map((p) => p.text).join(' ')].join(' ').toLowerCase();
}

function validateStory(story: BulkContentImportStoryInput, duplicateIds: Set<string>, config: BulkContentImportPipelineConfig): BulkContentImportValidationIssue[] {
  const issues: BulkContentImportValidationIssue[] = [];
  if (!hasText(story.storyId)) issues.push({ severity: 'fail', code: 'missing_story_id', message: 'storyId is required.', storyId: story.storyId, fieldPath: 'storyId' });
  if (!hasText(story.title)) issues.push({ severity: 'fail', code: 'missing_title', message: 'title is required.', storyId: story.storyId, fieldPath: 'title' });
  if (!hasText(story.sourceTradition)) issues.push({ severity: 'fail', code: 'missing_source_tradition', message: 'sourceTradition is required.', storyId: story.storyId, fieldPath: 'sourceTradition' });
  if (duplicateIds.has(story.storyId)) issues.push({ severity: 'fail', code: 'duplicate_story_id', message: 'Duplicate storyId within import pack.', storyId: story.storyId, fieldPath: 'storyId' });
  if (!hasText(story.summary)) issues.push({ severity: 'fail', code: 'missing_summary', message: 'summary is required for index candidacy.', storyId: story.storyId, fieldPath: 'summary' });
  if (!allowedCategoryIds.includes(story.primaryCategoryId)) issues.push({ severity: 'fail', code: 'invalid_category', message: 'primaryCategoryId must map to Story Experience Index category IDs.', storyId: story.storyId, fieldPath: 'primaryCategoryId' });
  if (!Array.isArray(story.ageBands) || story.ageBands.length === 0) issues.push({ severity: 'fail', code: 'missing_age_bands', message: 'ageBands are required.', storyId: story.storyId, fieldPath: 'ageBands' });
  if (!hasText(story.primaryValue)) issues.push({ severity: 'fail', code: 'missing_primary_value', message: 'primaryValue is required for index candidacy.', storyId: story.storyId, fieldPath: 'primaryValue' });
  if (!hasText(story.statusIntent)) issues.push({ severity: 'fail', code: 'missing_status_intent', message: 'statusIntent is required.', storyId: story.storyId, fieldPath: 'statusIntent' });

  const blob = lowerBlob(story);
  if (/(age\s*[:=]?\s*\d{1,2}\b)|(\b[3-9]\s*(years old|yrs old|yo)\b)/i.test(blob)) issues.push({ severity: 'fail', code: 'exact_child_age_detected', message: 'Use age bands instead of exact child ages.', storyId: story.storyId });
  if (config.blockedTerms.gamification.some((t) => blob.includes(t))) issues.push({ severity: 'fail', code: 'forbidden_gamification_language', message: 'Hard gamification language is blocked.', storyId: story.storyId });
  if (config.blockedTerms.childFacingDisallowed.some((t) => blob.includes(t))) issues.push({ severity: 'fail', code: 'story_library_disallowed', message: '“Story Library” appears in child-facing copy.', storyId: story.storyId });
  if (config.blockedTerms.backendTrackingSharing.some((t) => blob.includes(t))) issues.push({ severity: 'fail', code: 'backend_tracking_sharing_language', message: 'Backend/tracking/sharing/notification language is blocked in this pipeline.', storyId: story.storyId });
  if (config.blockedTerms.sacredTrivialization.some((t) => blob.includes(t))) issues.push({ severity: 'fail', code: 'sacred_trivialization', message: 'Sacred content appears trivialized or over-cartooned.', storyId: story.storyId });

  const wantsQa = story.readinessIntent === 'qa_ready_candidate' || story.readinessIntent === 'runtime_ready_candidate' || story.readinessIntent === 'audio_script_ready_candidate';
  const wantsRuntime = story.readinessIntent === 'runtime_ready_candidate' || story.readinessIntent === 'audio_script_ready_candidate';
  const wantsAudio = story.readinessIntent === 'audio_script_ready_candidate';

  if (wantsQa) {
    if (!Array.isArray(story.panels) || story.panels.length < 3) issues.push({ severity: 'fail', code: 'qa_missing_panels', message: 'QA-ready candidate requires at least 3 panels.', storyId: story.storyId });
    if (!story.parentNote) issues.push({ severity: 'fail', code: 'qa_missing_parent_note', message: 'QA-ready candidate requires parentNote.', storyId: story.storyId });
    if (!hasText(story.reflectionPrompt)) issues.push({ severity: 'fail', code: 'qa_missing_reflection_prompt', message: 'QA-ready candidate requires reflectionPrompt.', storyId: story.storyId });
    if (!Array.isArray(story.secondaryValues) || story.secondaryValues.length === 0) issues.push({ severity: 'fail', code: 'qa_missing_secondary_values', message: 'QA-ready candidate requires secondaryValues.', storyId: story.storyId });
    if (!Array.isArray(story.characters) || story.characters.length === 0) issues.push({ severity: 'fail', code: 'qa_missing_characters', message: 'QA-ready candidate requires characters.', storyId: story.storyId });
    if (/sacred|temple|deity|mantra|puja/i.test(blob) && !hasText(story.sacredRespectNotes)) issues.push({ severity: 'fail', code: 'qa_missing_sacred_respect_notes', message: 'sacredRespectNotes are required when sacred content is involved.', storyId: story.storyId });
  }

  if (wantsRuntime) {
    if (!Array.isArray(story.panels) || story.panels.length < 4) issues.push({ severity: 'fail', code: 'runtime_missing_panels', message: 'Runtime-ready candidate requires at least 4 panels.', storyId: story.storyId });
    if (story.panels.some((p) => !hasText(p.text))) issues.push({ severity: 'fail', code: 'runtime_panel_text_missing', message: 'Each panel requires text for runtime-ready candidacy.', storyId: story.storyId });
    if (story.durationMinutes == null) issues.push({ severity: 'fail', code: 'runtime_missing_duration', message: 'durationMinutes is required for runtime-ready candidacy.', storyId: story.storyId });
    if (!hasText(story.parentNote?.sourceContext)) issues.push({ severity: 'fail', code: 'runtime_missing_parent_source_context', message: 'parentNote.sourceContext is required.', storyId: story.storyId });
    if (!hasText(story.parentNote?.discussionPrompt)) issues.push({ severity: 'fail', code: 'runtime_missing_parent_discussion_prompt', message: 'parentNote.discussionPrompt is required.', storyId: story.storyId });
  }

  if (wantsAudio) {
    if (!hasText(story.audioScript?.narrationScript)) issues.push({ severity: 'fail', code: 'audio_missing_narration_script', message: 'audioScript.narrationScript is required.', storyId: story.storyId });
    if (!hasText(story.audioScript?.voiceDirection)) issues.push({ severity: 'fail', code: 'audio_missing_voice_direction', message: 'audioScript.voiceDirection is required.', storyId: story.storyId });
    if (!hasText(story.audioScript?.pronunciationNotes)) issues.push({ severity: 'fail', code: 'audio_missing_pronunciation_notes', message: 'audioScript.pronunciationNotes is required.', storyId: story.storyId });
    if (!hasText(story.audioScript?.pacingNotes)) issues.push({ severity: 'fail', code: 'audio_missing_pacing_notes', message: 'audioScript.pacingNotes is required.', storyId: story.storyId });
  }

  return issues;
}

export function validateBulkContentImportPack(pack: BulkContentImportPackInput): BulkContentImportValidationIssue[] {
  const config = buildBulkContentImportPipelineConfig();
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  pack.stories.forEach((s) => (seen.has(s.storyId) ? duplicates.add(s.storyId) : seen.add(s.storyId)));
  return pack.stories.flatMap((story) => validateStory(story, duplicates, config));
}

function classifyStory(story: BulkContentImportStoryInput, issues: BulkContentImportValidationIssue[]): { decision: BulkContentImportReadinessDecision; reasons: string[] } {
  const blocked = issues.some((i) => i.severity === 'fail');
  if (blocked) return { decision: 'blocked', reasons: issues.map((i) => i.code) };
  if (story.readinessIntent === 'audio_script_ready_candidate') return { decision: 'audio_script_ready_candidate', reasons: ['meets_audio_script_ready_candidate_requirements'] };
  if (story.readinessIntent === 'runtime_ready_candidate') return { decision: 'runtime_ready_candidate', reasons: ['meets_runtime_ready_candidate_requirements'] };
  if (story.readinessIntent === 'qa_ready_candidate') return { decision: 'qa_ready_candidate', reasons: ['meets_qa_ready_candidate_requirements'] };
  return { decision: 'index_only', reasons: ['indexed_only_no_runtime_or_audio_promotion'] };
}

export function getBulkContentImportCounterImpact(report: Pick<BulkContentImportDryRunReport, 'storiesAcceptedForIndex' | 'qaReadyCandidates' | 'runtimeReadyCandidates' | 'audioScriptReadyCandidates' | 'blockedStories'>): BulkContentImportCounterImpact {
  return {
    indexedDelta: report.storiesAcceptedForIndex,
    qaReadyDelta: report.qaReadyCandidates,
    runtimeReadyDelta: report.runtimeReadyCandidates,
    audioScriptReadyDelta: report.audioScriptReadyCandidates,
    blockedDelta: report.blockedStories,
    pr207Targets
  };
}

export function createBulkContentImportDryRunReport(pack: BulkContentImportPackInput): BulkContentImportDryRunReport {
  const validationIssues = validateBulkContentImportPack(pack);
  const byStory = new Map<string, BulkContentImportValidationIssue[]>();
  validationIssues.forEach((issue) => {
    const key = issue.storyId ?? '__pack__';
    byStory.set(key, [...(byStory.get(key) ?? []), issue]);
  });

  const readinessDecisions = pack.stories.map((story) => {
    const result = classifyStory(story, byStory.get(story.storyId) ?? []);
    return { storyId: story.storyId, ...result };
  });

  const storiesAcceptedForIndex = readinessDecisions.filter((d) => d.decision !== 'blocked').length;
  const qaReadyCandidates = readinessDecisions.filter((d) => d.decision === 'qa_ready_candidate' || d.decision === 'runtime_ready_candidate' || d.decision === 'audio_script_ready_candidate').length;
  const runtimeReadyCandidates = readinessDecisions.filter((d) => d.decision === 'runtime_ready_candidate' || d.decision === 'audio_script_ready_candidate').length;
  const audioScriptReadyCandidates = readinessDecisions.filter((d) => d.decision === 'audio_script_ready_candidate').length;
  const blockedStories = readinessDecisions.filter((d) => d.decision === 'blocked').length;

  const categoryImpactMap = new Map<StoryExperienceCategoryId, { indexedCount: number; runtimeReadyCount: number }>();
  const journeyImpactMap = new Map<string, { indexedCount: number; runtimeReadyCount: number }>();
  pack.stories.forEach((story) => {
    const decision = readinessDecisions.find((d) => d.storyId === story.storyId)?.decision ?? 'blocked';
    if (decision === 'blocked') return;
    const category = categoryImpactMap.get(story.primaryCategoryId) ?? { indexedCount: 0, runtimeReadyCount: 0 };
    category.indexedCount += 1;
    if (decision === 'runtime_ready_candidate' || decision === 'audio_script_ready_candidate') category.runtimeReadyCount += 1;
    categoryImpactMap.set(story.primaryCategoryId, category);

    if (story.journeyId) {
      const journey = journeyImpactMap.get(story.journeyId) ?? { indexedCount: 0, runtimeReadyCount: 0 };
      journey.indexedCount += 1;
      if (decision === 'runtime_ready_candidate' || decision === 'audio_script_ready_candidate') journey.runtimeReadyCount += 1;
      journeyImpactMap.set(story.journeyId, journey);
    }
  });

  return {
    modelVersion: bulkContentImportPipelineModelVersion,
    importBatchId: pack.importBatchId,
    packId: pack.packId,
    totalStoriesSubmitted: pack.stories.length,
    storiesAcceptedForIndex,
    qaReadyCandidates,
    runtimeReadyCandidates,
    audioScriptReadyCandidates,
    blockedStories,
    validationIssues,
    counterImpact: getBulkContentImportCounterImpact({ storiesAcceptedForIndex, qaReadyCandidates, runtimeReadyCandidates, audioScriptReadyCandidates, blockedStories }),
    categoryImpact: Array.from(categoryImpactMap.entries()).map(([categoryId, counts]) => ({ categoryId, ...counts })),
    journeyImpact: Array.from(journeyImpactMap.entries()).map(([journeyId, counts]) => ({ journeyId, ...counts })),
    readinessDecisions,
    sourceFiles: ['src/types/bulkContentImportPipeline.ts', 'src/services/bulkContentImportPipelineService.ts', 'docs/content/BULK_CONTENT_IMPORT_PIPELINE_V2.md'],
    limitations: [
      'Dry-run output is read-only and does not mutate registry/runtime availability.',
      'Runtime-ready and audio-script-ready remain candidates only; PR #157 and PR #158 govern promotion gates.',
      'This pipeline only validates contract completeness and policy compliance for bulk import preparation.'
    ]
  };
}

export function getBulkContentImportPipelineSummary(pack: BulkContentImportPackInput): string {
  const report = createBulkContentImportDryRunReport(pack);
  return `Dry-run for ${report.packId}: indexed ${report.storiesAcceptedForIndex}/${report.totalStoriesSubmitted}, qa candidates ${report.qaReadyCandidates}, runtime candidates ${report.runtimeReadyCandidates}, audio candidates ${report.audioScriptReadyCandidates}, blocked ${report.blockedStories}.`;
}
