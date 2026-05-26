import { getRuntimeStoryEligibility } from '@/services/runtimeStoryResolverV2';
import type { Story } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';
import type {
  RuntimeReadyGateConfig,
  RuntimeReadyGateCounterImpact,
  RuntimeReadyGateDecision,
  RuntimeReadyGateIssue,
  RuntimeReadyGateReport,
  RuntimeReadyGateStoryInput,
  RuntimeReadyStoryGateModelVersion
} from '@/types/runtimeReadyStoryGate';

export const runtimeReadyStoryGateModelVersion: RuntimeReadyStoryGateModelVersion = 'pr157-runtime-ready-story-gate-v1';
const allowedCategoryIds: StoryExperienceCategoryId[] = ['krishna_stories','ramayana_journey','ganesha_stories','hanuman_stories','bedtime_stories','values_stories','festival_stories','bhagavad_gita_for_children','mahabharata_child_safe','panchatantra_hitopadesha', 'shloka_mantra_meanings'];

export function buildRuntimeReadyStoryGateConfig(): RuntimeReadyGateConfig { return { modelVersion: runtimeReadyStoryGateModelVersion, allowedCategoryIds, maxPanelCharacters: 650, pr207RuntimeReadyTarget: 450, blockedTerms: { exactChildAge: ['years old','year-old','age 4','age 5','age 6','age 7','age 8','age 9','age 10','age 11','age 12'], gamification: ['points','leaderboard','xp','reward streak','unlock badge','high score'], storyLibrary: ['story library'], backendTrackingSharingNotifications: ['analytics','telemetry','track event','push notification','email reminder','sms reminder','whatsapp','share link','referral code','invite code','backend sync'], sacredTrivialization: ['magic cheat code deity','funny god prank','cartoon god battle royale','silly puja speedrun'], performanceScoreLanguage: ['score','rank','report card','performance grade','quiz result'] } }; }

export function evaluateRuntimeReadyStory(story: RuntimeReadyGateStoryInput, config = buildRuntimeReadyStoryGateConfig()): RuntimeReadyGateReport { return createRuntimeReadyGateReport(story, config); }
export function evaluateRuntimeReadyStories(stories: RuntimeReadyGateStoryInput[], config = buildRuntimeReadyStoryGateConfig()): RuntimeReadyGateReport[] { return stories.map((story) => createRuntimeReadyGateReport(story, config)); }

export function createRuntimeReadyGateReport(story: RuntimeReadyGateStoryInput, config = buildRuntimeReadyStoryGateConfig()): RuntimeReadyGateReport {
  const issues: RuntimeReadyGateIssue[] = [];
  const sourceText = getAllText(story).toLowerCase();
  const storyId = getStoryId(story) || 'missing_story_id';
  const title = getTitle(story) || 'Untitled';
  const panels = getPanels(story);
  const parentNote = getParentNote(story);
  const reflectionPrompt = getReflectionPrompt(story);
  const categoryId = getPrimaryCategoryId(story);
  const inferredFromPack = !categoryId && Boolean(getStoryPackId(story));

  if (!getStoryId(story)) issues.push(issue('fail', 'missing_story_id', 'Story is missing storyId.', 'storyId'));
  if (!getTitle(story)) issues.push(issue('fail', 'missing_title', 'Story is missing title.', 'title'));
  if (!getSummary(story)) issues.push(issue('fail', 'missing_summary', 'Story is missing summary/description.', 'summary'));
  if (!getSourceTradition(story)) issues.push(issue('fail', 'missing_source_tradition', 'Story is missing sourceTradition.', 'sourceTradition'));
  if (!Array.isArray(getAgeBands(story)) || getAgeBands(story).length === 0) issues.push(issue('fail', 'missing_age_bands', 'Story is missing ageBands.', 'ageBands'));
  if (!getPrimaryValue(story)) issues.push(issue('fail', 'missing_primary_value', 'Story is missing primaryValue.', 'primaryValue'));
  if (!Array.isArray(getSecondaryValues(story)) || getSecondaryValues(story).length === 0) issues.push(issue('warn', 'missing_secondary_values', 'secondaryValues should be provided.', 'secondaryValues'));
  if (!Array.isArray(getCharacters(story)) || getCharacters(story).length === 0) issues.push(issue('warn', 'missing_characters', 'characters should be provided.', 'characters'));
  if (!getDurationMinutes(story)) issues.push(issue('warn', 'missing_duration_minutes', 'durationMinutes should be provided.', 'durationMinutes'));
  if (!Array.isArray(panels) || panels.length < 4) issues.push(issue('fail', 'missing_panels_minimum', 'Story must include at least 4 panels.', 'panels'));
  if (panels.some((panel: { text?: string }) => !String(panel?.text ?? '').trim())) issues.push(issue('fail', 'panel_missing_text', 'Each panel must have non-empty text.', 'panels.text'));

  if (!parentNote) issues.push(issue('fail', 'missing_parent_note', 'Story is missing parentNote.', 'parentNote'));
  if (!String(parentNote?.sourceContext ?? '').trim()) issues.push(issue('fail', 'missing_parent_note_source_context', 'parentNote.sourceContext is required.', 'parentNote.sourceContext'));
  if (!String(parentNote?.discussionPrompt ?? '').trim()) issues.push(issue('fail', 'missing_parent_note_discussion_prompt', 'parentNote.discussionPrompt is required.', 'parentNote.discussionPrompt'));
  if (!reflectionPrompt?.trim()) issues.push(issue('fail', 'missing_reflection_prompt', 'reflectionPrompt is required.', 'reflectionPrompt'));

  if (!categoryId && !inferredFromPack) issues.push(issue('fail', 'missing_category_mapping', 'primaryCategoryId or mappable storyPackId is required.', 'primaryCategoryId'));
  if (categoryId && !config.allowedCategoryIds.includes(categoryId)) issues.push(issue('fail', 'invalid_category_mapping', 'Category ID is not part of Story Experience Index categories.', 'primaryCategoryId'));

  addLanguageIssues(sourceText, config, issues);
  const hasSacredWords = ['krishna', 'rama', 'sita', 'hanuman', 'ganesha', 'puja', 'shloka'].some((w) => sourceText.includes(w));
  if (hasSacredWords && !sourceText.includes('sacred')) issues.push(issue('warn', 'sacred_care_notes_recommended', 'Sacred-care notes should be present when sacred content appears.', 'sacredRespectNotes'));

  const journeyId = getJourneyId(story);
  const journeyOrder = getJourneyOrder(story);
  if (journeyId && (journeyOrder === undefined || journeyOrder === null)) issues.push(issue('warn', 'journey_order_missing', 'journeyOrder should exist when journeyId is present.', 'journeyOrder'));

  const resolverCheck = getResolverCheck(story, issues);
  const hasFail = issues.some((i) => i.severity === 'fail');
  const hasWarn = issues.some((i) => i.severity === 'warn');
  const decision: RuntimeReadyGateDecision = hasFail ? 'blocked' : hasWarn ? 'needs_editorial_review' : getCurrentStatus(story) === 'qa_ready' ? 'qa_ready_only' : 'runtime_ready_candidate';
  if (decision === 'runtime_ready_candidate' && getCurrentStatus(story) === 'indexed') issues.push(issue('info', 'candidate_only_not_runtime_promoted', 'Candidate only; no automatic runtime promotion.'));

  const counterImpact = getRuntimeReadyStoryGateCounterImpact([decision], config.pr207RuntimeReadyTarget);

  return {
    modelVersion: runtimeReadyStoryGateModelVersion,
    storyId,
    title,
    currentStatus: getCurrentStatus(story),
    decision,
    issues,
    panelCheck: { panelCount: panels.length, minimumPanelCount: 4, allPanelsHaveText: !panels.some((panel: { text?: string }) => !String(panel?.text ?? '').trim()), hasExcessivelyLongPanel: panels.some((panel: { text?: string }) => String(panel?.text ?? '').length > config.maxPanelCharacters), sacredCareNotesPresentWhenNeeded: !hasSacredWords || sourceText.includes('sacred') },
    parentNoteCheck: { hasParentNote: Boolean(parentNote), hasSourceContext: Boolean(parentNote?.sourceContext?.trim()), hasValueForParentOrEquivalent: Boolean(parentNote?.valueForParent || parentNote?.valueExplained), hasDiscussionPrompt: Boolean(parentNote?.discussionPrompt?.trim()), culturallyRespectfulWording: !config.blockedTerms.sacredTrivialization.some((term) => sourceText.includes(term)) },
    reflectionCheck: { hasReflectionPrompt: Boolean(reflectionPrompt?.trim()), avoidsQuizScoreFraming: !config.blockedTerms.performanceScoreLanguage.some((term) => String(reflectionPrompt || '').toLowerCase().includes(term)), gentleOptionalFamilySafeTone: !String(reflectionPrompt || '').toLowerCase().includes('must') },
    categoryCheck: { isMappedToKnownCategory: Boolean(categoryId && config.allowedCategoryIds.includes(categoryId)), inferredFromStoryPackId: inferredFromPack, inferredCategoryId: inferredFromPack ? inferCategoryFromStoryPackId(getStoryPackId(story) || '') : undefined, placeholderOnlyCategory: String(categoryId || '').includes('placeholder') },
    journeyCheck: { journeyIdPresent: Boolean(journeyId), journeyOrderPresentWhenJourneyIdPresent: !journeyId || journeyOrder !== undefined, journeyOutlineOnly: getJourneyStatus(story) === 'journey_outline_only' },
    resolverCheck,
    counterImpact,
    sourceFiles: ['src/services/runtimeReadyStoryGateService.ts', 'src/types/runtimeReadyStoryGate.ts'],
    limitations: ['Audio readiness not in scope for PR #157.', 'Published-local classification not in scope.', inferredFromPack ? 'Category inferred from storyPackId; confidence is conservative.' : '']
      .filter(Boolean)
  };
}
export function getRuntimeReadyStoryGateRequiredFields(): string[] { return ['storyId','title','summary','sourceTradition','primaryCategoryId_or_storyPackId','ageBands','primaryValue','secondaryValues','characters','panels_min_4','panel_text_non_empty','durationMinutes','parentNote','parentNote.sourceContext','parentNote.discussionPrompt','reflectionPrompt']; }
export function getRuntimeReadyStoryGateRules(): string[] { return ['Do not auto-promote qa_ready to runtime-ready.','Use Runtime Story Resolver v2 read-only for registry stories.','Block exact child age language and Story Library child-facing wording.','Block backend/tracking/sharing/notification wording.','Block hard gamification language and sacred trivialization.']; }
export function getRuntimeReadyStoryGateCounterImpact(reportsOrDecisions: Array<RuntimeReadyGateReport | RuntimeReadyGateDecision>, pr207RuntimeReadyTarget = 450): RuntimeReadyGateCounterImpact { const decisions = reportsOrDecisions.map((item) => (typeof item === 'string' ? item : item.decision)); return { runtimeReadyDelta: decisions.filter((d) => d === 'runtime_ready_candidate').length, qaReadyOnlyDelta: decisions.filter((d) => d === 'qa_ready_only').length, blockedDelta: decisions.filter((d) => d === 'blocked' || d === 'needs_runtime_fields').length, needsReviewDelta: decisions.filter((d) => d === 'needs_editorial_review').length, pr207RuntimeReadyTarget }; }
export function getRuntimeReadyStoryGateSummary(reports: RuntimeReadyGateReport[]): { totalStories: number; decisionBreakdown: Record<RuntimeReadyGateDecision, number>; counterImpact: RuntimeReadyGateCounterImpact } { const breakdown: Record<RuntimeReadyGateDecision, number> = { runtime_ready_candidate: 0, qa_ready_only: 0, blocked: 0, needs_editorial_review: 0, needs_runtime_fields: 0 }; reports.forEach((r) => { breakdown[r.decision] += 1; }); return { totalStories: reports.length, decisionBreakdown: breakdown, counterImpact: getRuntimeReadyStoryGateCounterImpact(reports) }; }

function issue(severity: 'info' | 'warn' | 'fail', code: string, message: string, fieldPath?: string): RuntimeReadyGateIssue { return { severity, code, message, fieldPath }; }
function addLanguageIssues(sourceText: string, config: RuntimeReadyGateConfig, issues: RuntimeReadyGateIssue[]): void { if (config.blockedTerms.exactChildAge.some((t) => sourceText.includes(t))) issues.push(issue('fail', 'exact_child_age_detected', 'Exact child age wording is blocked.')); if (config.blockedTerms.gamification.some((t) => sourceText.includes(t))) issues.push(issue('fail', 'hard_gamification_language_detected', 'Hard gamification language is blocked.')); if (config.blockedTerms.storyLibrary.some((t) => sourceText.includes(t))) issues.push(issue('fail', 'story_library_child_facing_disallowed', 'Story Library wording is blocked in child-facing copy.')); if (config.blockedTerms.backendTrackingSharingNotifications.some((t) => sourceText.includes(t))) issues.push(issue('fail', 'backend_tracking_sharing_notification_language_detected', 'Backend/tracking/sharing/notification wording is blocked.')); if (config.blockedTerms.sacredTrivialization.some((t) => sourceText.includes(t))) issues.push(issue('fail', 'sacred_content_trivialization_detected', 'Sacred content trivialization is blocked.')); }
function getResolverCheck(story: RuntimeReadyGateStoryInput, issues: RuntimeReadyGateIssue[]) { if (!isContentRegistryStory(story)) return { checkedAgainstRuntimeResolver: false, resolverCanRender: undefined, resolverReason: 'bulk_or_index_input_candidate_only' }; const eligibility = getRuntimeStoryEligibility(story); if (!eligibility.canRender) issues.push(issue('fail', 'runtime_resolver_cannot_render', 'Runtime Story Resolver v2 indicates canRender=false for current registry story.')); return { checkedAgainstRuntimeResolver: true, resolverCanRender: eligibility.canRender, resolverReason: eligibility.reason }; }
function isContentRegistryStory(story: RuntimeReadyGateStoryInput): story is Story { return 'slug' in story && 'status' in story && 'panels' in story; }
function getPanels(story: RuntimeReadyGateStoryInput) { return (story as any).panels ?? []; }
function getParentNote(story: RuntimeReadyGateStoryInput) { return (story as any).parentNote; }
function getReflectionPrompt(story: RuntimeReadyGateStoryInput) { return (story as any).reflectionPrompt || ((story as any).hasReflectionPrompt ? 'present_in_index' : ''); }
function getStoryId(story: RuntimeReadyGateStoryInput) { return (story as any).storyId || (story as any).id; }
function getTitle(story: RuntimeReadyGateStoryInput) { return (story as any).title; }
function getSummary(story: RuntimeReadyGateStoryInput) { return (story as any).summary || ((story as any).hasPanels ? 'index_summary_placeholder' : ''); }
function getSourceTradition(story: RuntimeReadyGateStoryInput) { return (story as any).sourceTradition; }
function getAgeBands(story: RuntimeReadyGateStoryInput) { return (story as any).ageBands; }
function getPrimaryValue(story: RuntimeReadyGateStoryInput) { return (story as any).primaryValue; }
function getSecondaryValues(story: RuntimeReadyGateStoryInput) { return (story as any).secondaryValues; }
function getCharacters(story: RuntimeReadyGateStoryInput) { return (story as any).characters; }
function getDurationMinutes(story: RuntimeReadyGateStoryInput) { return (story as any).durationMinutes; }
function getPrimaryCategoryId(story: RuntimeReadyGateStoryInput) { return (story as any).primaryCategoryId; }
function getStoryPackId(story: RuntimeReadyGateStoryInput) { return (story as any).storyPackId; }
function getJourneyId(story: RuntimeReadyGateStoryInput) { return (story as any).journeyId; }
function getJourneyOrder(story: RuntimeReadyGateStoryInput) { return (story as any).journeyOrder; }
function getJourneyStatus(story: RuntimeReadyGateStoryInput) { return (story as any).journeyStatus; }
function getCurrentStatus(story: RuntimeReadyGateStoryInput) { return String((story as any).status || (story as any).readinessStatus || 'indexed'); }
function inferCategoryFromStoryPackId(storyPackId: string): StoryExperienceCategoryId | undefined { const key = storyPackId.toLowerCase(); if (key.includes('ramayana')) return 'ramayana_journey'; if (key.includes('krishna')) return 'krishna_stories'; if (key.includes('hanuman')) return 'hanuman_stories'; if (key.includes('ganesha')) return 'ganesha_stories'; if (key.includes('shloka-mantra-meaning')) return 'shloka_mantra_meanings'; return undefined; }
function getAllText(story: RuntimeReadyGateStoryInput): string { return JSON.stringify(story); }
