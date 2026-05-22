import type { AgeBand, ContentStatus } from '@/types/contentModel';

export type EditorialQaSeverity = 'error' | 'warning' | 'info';

export type EditorialQaCategory =
  | 'structure'
  | 'age_band'
  | 'sacred_respect'
  | 'parent_trust'
  | 'values_metadata'
  | 'panel_quality'
  | 'child_language'
  | 'runtime_eligibility'
  | 'luvlu_boundary'
  | 'audio_metadata'
  | 'illustration_guardrail';

export type EditorialQaFinding = {
  id: string;
  severity: EditorialQaSeverity;
  category: EditorialQaCategory;
  storyId: string;
  fieldPath?: string;
  message: string;
  recommendation: string;
};

export type EditorialQaResult = {
  valid: boolean;
  approvedForRuntime: boolean;
  findings: EditorialQaFinding[];
  errorCount: number;
  warningCount: number;
  infoCount: number;
  storyCount: number;
  runtimeReadyCandidateCount: number;
  qaReadyCount: number;
  indexedCount: number;
};

export type EditorialQaPolicy = {
  minPanels: number;
  maxPanels: number;
  minPanelTextLength: number;
  maxPanelTextLength: number;
  requiredAgeBands: AgeBand[];
  requiredParentNoteFields: Array<keyof {
    sourceContext: string;
    valueExplained: string;
    discussionPrompt: string;
    practicePrompt: string;
    cautionNote: string;
  }>;
  blockedChildFacingPhrases: string[];
  blockedGamificationTerms: string[];
  sacredRespectRequiredFields: string[];
  runtimeEligibleStatuses: ContentStatus[];
};
