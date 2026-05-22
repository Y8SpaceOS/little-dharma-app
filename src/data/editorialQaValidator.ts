import type { ContentImportManifest, ImportedStoryDraft } from '@/types/contentImport';
import type { EditorialQaCategory, EditorialQaFinding, EditorialQaPolicy, EditorialQaResult, EditorialQaSeverity } from '@/types/editorialQa';
import { defaultEditorialQaPolicy } from '@/data/editorialQaPolicy';

const MANIPULATIVE_PATTERNS = [/\bmust\b/i, /guaranteed transformation/i, /make your child perfect/i];
const VIOLENT_PATTERNS = [/\bkill\b/i, /\bblood\b/i, /\bviolent\b/i, /\bterror\b/i, /\bcruel\b/i];
const SHAME_PATTERNS = [/better than/i, /not good enough/i, /be ashamed/i, /you should be like/i];
const SACRED_CONTEXTS = ['sacred_story', 'deity_focal', 'shloka_or_prayer', 'ritual_context'] as const;

export function validateImportedStoryEditorialQa(story: ImportedStoryDraft, policy: EditorialQaPolicy = defaultEditorialQaPolicy): EditorialQaResult {
  const findings: EditorialQaFinding[] = [];
  const add = (severity: EditorialQaSeverity, category: EditorialQaCategory, message: string, recommendation: string, fieldPath?: string) => {
    findings.push({ id: `${category}-${findings.length + 1}`, severity, category, storyId: story.id || 'missing_story_id', fieldPath, message, recommendation });
  };
  const txt = (value?: string) => (value ?? '').trim();
  const has = (value?: string) => txt(value).length > 0;
  const containsBlocked = (value: string) => policy.blockedChildFacingPhrases.some((phrase) => new RegExp(escapeRegex(phrase), 'i').test(value));
  const containsGamification = (value: string) => policy.blockedGamificationTerms.some((term) => new RegExp(`\\b${escapeRegex(term)}\\b`, 'i').test(value));

  const structureFields: Array<[string, string | undefined]> = [
    ['id', story.id], ['slug', story.slug], ['title', story.title], ['shortTitle', story.shortTitle], ['summary', story.summary], ['storyPackId', story.storyPackId], ['status', story.status]
  ];
  structureFields.forEach(([field, value]) => !has(value) && add('error', 'structure', `Missing required story field: ${field}.`, `Populate ${field} before editorial approval.`, field));
  if (!Array.isArray(story.panels) || story.panels.length === 0) add('error', 'structure', 'Story must include panels.', 'Add at least two complete panels.', 'panels');
  if (!story.parentNote) add('error', 'structure', 'Story must include parentNote.', 'Add parentNote with trust fields.', 'parentNote');
  if (!story.illustrationPrompt) add('error', 'structure', 'Story must include illustrationPrompt.', 'Add illustration guardrails.', 'illustrationPrompt');
  if (!story.audioMetadata) add('error', 'structure', 'Story must include audioMetadata.', 'Add local-first audio metadata.', 'audioMetadata');

  if (!Array.isArray(story.ageBands) || story.ageBands.length === 0) add('error', 'age_band', 'Story must have at least one age band.', 'Assign at least one supported age band.', 'ageBands');
  if (story.recommendedAgeBand && Array.isArray(story.ageBands) && !story.ageBands.includes(story.recommendedAgeBand) && !story.ageBands.includes('family')) {
    add('error', 'age_band', 'recommendedAgeBand must be included in ageBands unless family is present.', 'Align recommendedAgeBand and ageBands.', 'recommendedAgeBand');
  }
  if (story.durationMinutes < 2) add('warning', 'age_band', 'durationMinutes is under 2 minutes.', 'Consider a slightly longer narrative arc.', 'durationMinutes');
  if (story.durationMinutes > 20) add('warning', 'age_band', 'durationMinutes exceeds 20 minutes.', 'Consider splitting into smaller child-friendly segments.', 'durationMinutes');

  if (!has(story.sacredRespectLevel)) add('error', 'sacred_respect', 'sacredRespectLevel is required.', 'Set sacredRespectLevel explicitly.', 'sacredRespectLevel');
  const sacredContext = SACRED_CONTEXTS.includes(story.sacredRespectLevel as (typeof SACRED_CONTEXTS)[number]);
  if (sacredContext && !has(story.parentNote?.cautionNote)) add('error', 'sacred_respect', 'Sacred contexts require a strong parent caution note.', 'Expand cautionNote with respectful framing.', 'parentNote.cautionNote');
  if (sacredContext && (!Array.isArray(story.illustrationPrompt?.culturalGuardrails) || story.illustrationPrompt.culturalGuardrails.length === 0)) add('error', 'sacred_respect', 'Sacred contexts require cultural guardrails.', 'Add non-empty culturalGuardrails.', 'illustrationPrompt.culturalGuardrails');
  if (story.sacredRespectLevel === 'deity_focal' && /comic|joke|parody/i.test(txt(story.illustrationPrompt?.deityTreatment))) add('error', 'sacred_respect', 'Deity focal content must avoid comedic deity treatment.', 'Use reverent, non-comedic deityTreatment.', 'illustrationPrompt.deityTreatment');

  const combinedPanelText = (story.panels ?? []).map((p) => `${p.title} ${p.text} ${p.imagePrompt ?? ''}`).join(' ');
  if (story.sacredRespectLevel === 'shloka_or_prayer' && /luvlu|mascot/i.test(combinedPanelText)) add('error', 'sacred_respect', 'Shloka/prayer content must not include mascot/Luvlu chatter.', 'Remove mascot chatter from sacred text and prompts.');

  policy.requiredParentNoteFields.forEach((field) => !has(story.parentNote?.[field]) && add('error', 'parent_trust', `parentNote.${field} is required.`, `Provide parentNote.${field}.`, `parentNote.${field}`));
  const parentText = Object.values(story.parentNote ?? {}).join(' ');
  if (MANIPULATIVE_PATTERNS.some((pattern) => pattern.test(parentText))) add('error', 'parent_trust', 'Manipulative parent-facing language is not allowed.', 'Use grounded, non-coercive language in parent notes.', 'parentNote');

  if (!has(story.primaryValue)) add('error', 'values_metadata', 'primaryValue is required.', 'Set primaryValue.', 'primaryValue');
  if (!Array.isArray(story.secondaryValues)) add('error', 'values_metadata', 'secondaryValues must be an array.', 'Provide secondaryValues array.', 'secondaryValues');
  if (!Array.isArray(story.characters)) add('error', 'values_metadata', 'characters must be an array.', 'Provide characters array.', 'characters');

  if (Array.isArray(story.panels)) {
    if (story.panels.length < policy.minPanels || story.panels.length > policy.maxPanels) add('error', 'panel_quality', `Panel count must be between ${policy.minPanels} and ${policy.maxPanels}.`, 'Adjust panel count to policy range.', 'panels');
    story.panels.forEach((panel, idx) => {
      ['id', 'title', 'text'].forEach((field) => !has(panel[field as keyof typeof panel] as string) && add('error', 'panel_quality', `Panel ${idx + 1} missing ${field}.`, `Populate panel ${idx + 1} ${field}.`, `panels.${idx}.${field}`));
      const l = txt(panel.text).length;
      if (l > 0 && l < policy.minPanelTextLength) add('warning', 'panel_quality', `Panel ${idx + 1} text is shorter than ${policy.minPanelTextLength} chars.`, 'Consider slightly richer context for clarity.', `panels.${idx}.text`);
      if (l > policy.maxPanelTextLength) add(l > policy.maxPanelTextLength * 1.25 ? 'error' : 'warning', 'panel_quality', `Panel ${idx + 1} text exceeds ${policy.maxPanelTextLength} chars.`, 'Shorten panel text for child readability.', `panels.${idx}.text`);
      if (containsGamification(`${panel.title} ${panel.text} ${panel.imagePrompt ?? ''}`)) add('error', 'panel_quality', `Panel ${idx + 1} includes hard gamification language.`, 'Remove game/reward mechanics language.', `panels.${idx}`);
      if (containsBlocked(`${panel.title} ${panel.text} ${panel.imagePrompt ?? ''}`)) add('error', 'panel_quality', `Panel ${idx + 1} includes blocked child-facing phrase.`, 'Use Story World wording and gentle progression cues.', `panels.${idx}`);
      if (VIOLENT_PATTERNS.some((p) => p.test(`${panel.title} ${panel.text}`))) add('warning', 'panel_quality', `Panel ${idx + 1} may be too intense for young children.`, 'Soften wording in preview content.', `panels.${idx}`);
    });
  }

  const childFacingText = [story.title, story.shortTitle, story.summary, story.reflectionPrompt, story.ritualPrompt, story.completionBlessing, combinedPanelText].join(' ');
  if (containsGamification(childFacingText)) add('error', 'child_language', 'Child-facing copy contains hard gamification language.', 'Use gentle, non-competitive phrasing.');
  if (containsBlocked(childFacingText)) add('error', 'child_language', 'Child-facing copy contains blocked phrase (e.g., Story Library).', 'Use Story World phrasing.');
  if (SHAME_PATTERNS.some((p) => p.test(childFacingText))) add('warning', 'child_language', 'Child-facing copy may include shame/comparison language.', 'Use warm, inclusive language.');

  if (!policy.runtimeEligibleStatuses.includes(story.status)) add('info', 'runtime_eligibility', `Status ${story.status} is not runtime-eligible.`, 'Keep as preview/indexed/qa_ready until runtime-backed and approved.', 'status');
  if (story.id.includes('preview') && policy.runtimeEligibleStatuses.includes(story.status)) add('error', 'runtime_eligibility', 'Preview scaffold stories cannot be approved for runtime.', 'Keep preview scaffold statuses at indexed or qa_ready.', 'status');

  if (/luvlu\s+(is|as).*(deity|logo|reward|badge|token)/i.test(childFacingText)) add('error', 'luvlu_boundary', 'Luvlu boundary violation detected.', 'Treat Luvlu only as a subtle helper/narrator.');
  if ((story.sacredRespectLevel === 'deity_focal' || story.sacredRespectLevel === 'shloka_or_prayer') && /luvlu/i.test(combinedPanelText)) add('error', 'luvlu_boundary', 'Luvlu should not appear in deity focal or shloka/prayer panel text.', 'Remove Luvlu mentions from sacred focal text.');

  if (story.audioMetadata?.noMicRequired !== true) add('error', 'audio_metadata', 'audioMetadata.noMicRequired must be true.', 'Set noMicRequired to true for local-first safety.', 'audioMetadata.noMicRequired');
  if (!has(story.audioMetadata?.narrationScriptStatus)) add('error', 'audio_metadata', 'audioMetadata.narrationScriptStatus must exist.', 'Provide narrationScriptStatus.', 'audioMetadata.narrationScriptStatus');

  if (!has(story.illustrationPrompt?.sceneSummary)) add('error', 'illustration_guardrail', 'illustrationPrompt.sceneSummary is required.', 'Provide scene summary.', 'illustrationPrompt.sceneSummary');
  if (!has(story.illustrationPrompt?.styleGuidance)) add('error', 'illustration_guardrail', 'illustrationPrompt.styleGuidance is required.', 'Provide style guidance.', 'illustrationPrompt.styleGuidance');
  if (!Array.isArray(story.illustrationPrompt?.culturalGuardrails) || story.illustrationPrompt.culturalGuardrails.length === 0) add('error', 'illustration_guardrail', 'illustrationPrompt.culturalGuardrails must be non-empty.', 'Add cultural guardrails.', 'illustrationPrompt.culturalGuardrails');
  if (!has(story.illustrationPrompt?.deityTreatment)) add('error', 'illustration_guardrail', 'illustrationPrompt.deityTreatment is required.', 'Provide deityTreatment.', 'illustrationPrompt.deityTreatment');
  if (!Array.isArray(story.illustrationPrompt?.avoidList) || !story.illustrationPrompt.avoidList.some((x) => /reward|gamif|cartoonish deity|deity caricature/i.test(x))) {
    add('warning', 'illustration_guardrail', 'illustrationPrompt.avoidList should include anti-gamified and anti-cartoonish deity guardrails.', 'Add explicit avoidList guardrails for reward visuals and cartoonish deity treatment.', 'illustrationPrompt.avoidList');
  }

  return buildResult(findings, [story]);
}

export function validateImportManifestEditorialQa(manifest: ContentImportManifest, policy: EditorialQaPolicy = defaultEditorialQaPolicy): EditorialQaResult {
  const results = manifest.stories.map((story) => validateImportedStoryEditorialQa(story, policy));
  const findings = results.flatMap((x) => x.findings);
  return buildResult(findings, manifest.stories);
}

export function getEditorialQaSummary(result: EditorialQaResult): string {
  return `Editorial QA ${result.valid ? 'PASS' : 'FAIL'}: ${result.errorCount} error(s), ${result.warningCount} warning(s), ${result.infoCount} info across ${result.storyCount} stor${result.storyCount === 1 ? 'y' : 'ies'}. Runtime approved: ${result.approvedForRuntime ? 'yes' : 'no'}.`;
}

export function isStoryRuntimeEligibleByEditorialQa(story: ImportedStoryDraft, result: EditorialQaResult): boolean {
  return defaultEditorialQaPolicy.runtimeEligibleStatuses.includes(story.status) && !story.id.includes('preview') && result.approvedForRuntime;
}

function buildResult(findings: EditorialQaFinding[], stories: ImportedStoryDraft[]): EditorialQaResult {
  const errorCount = findings.filter((f) => f.severity === 'error').length;
  const warningCount = findings.filter((f) => f.severity === 'warning').length;
  const infoCount = findings.filter((f) => f.severity === 'info').length;
  const runtimeReadyCandidateCount = stories.filter((s) => s.status === 'runtime_ready').length;
  const qaReadyCount = stories.filter((s) => s.status === 'qa_ready').length;
  const indexedCount = stories.filter((s) => s.status === 'indexed').length;
  const approvedForRuntime = errorCount === 0 && stories.every((story) => defaultEditorialQaPolicy.runtimeEligibleStatuses.includes(story.status) && !story.id.includes('preview'));
  return { valid: errorCount === 0, approvedForRuntime, findings, errorCount, warningCount, infoCount, storyCount: stories.length, runtimeReadyCandidateCount, qaReadyCount, indexedCount };
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
