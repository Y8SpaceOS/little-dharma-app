import type { EditorialQaPolicy } from '@/types/editorialQa';

export const defaultEditorialQaPolicy: EditorialQaPolicy = {
  minPanels: 2,
  maxPanels: 8,
  minPanelTextLength: 20,
  maxPanelTextLength: 600,
  requiredAgeBands: ['3-5', '6-8', '9-12', 'family'],
  requiredParentNoteFields: ['sourceContext', 'valueExplained', 'discussionPrompt', 'practicePrompt', 'cautionNote'],
  blockedChildFacingPhrases: ['Story Library', 'XP', 'coins', 'streak', 'leaderboard', 'ranking', 'level up', 'win reward'],
  blockedGamificationTerms: ['xp', 'coin', 'coins', 'streak', 'leaderboard', 'ranking', 'level up', 'win reward'],
  sacredRespectRequiredFields: [
    'sacredRespectLevel',
    'illustrationPrompt.culturalGuardrails',
    'illustrationPrompt.deityTreatment',
    'parentNote.cautionNote'
  ],
  runtimeEligibleStatuses: ['runtime_ready', 'available']
};
