export const bhagavadGitaEditorialFrameworkModelVersion = '1.0.0';

export const bhagavadGitaForChildrenEditorialPrinciples = [
  'Translate sacred teachings into values-first, emotionally gentle child guidance.',
  'Preserve spiritual depth while avoiding sectarian or absolutist framing.',
  'Anchor each concept in practical child life examples instead of abstract doctrine.',
  'Prioritize child safety, parent trust, and runtime-readiness before publication.',
];

export const bhagavadGitaAllowedThemes = [
  'courage with gentleness',
  'doing the right thing',
  'calm action',
  'self-control',
  'devotion',
  'friendship with the Divine',
  'gratitude',
  'focus',
  'humility',
  'compassion',
  'truthful speech',
  'wise choices',
  'service',
  'inner steadiness',
];

export const bhagavadGitaRestrictedThemes = [
  'battlefield violence as spectacle',
  'weapon focus',
  'death/fear-heavy framing',
  'caste/duty absolutism',
  'blind obedience',
  'shame/punishment-heavy morality',
  'theological superiority',
  'sectarian claims',
  'fatalism',
  'trauma-heavy conflict',
  'adult philosophical abstraction without child grounding',
  'political/nationalist appropriation',
];

export const bhagavadGitaAgeBandGuidance = {
  '3-5': [
    'simple values',
    'calm body',
    'kindness',
    'gratitude',
    'friendship',
    'do one good thing',
  ],
  '6-8': [
    'choices',
    'focus',
    'courage',
    'calm action',
    'helping without reward',
  ],
  '9-12': [
    'deeper reflection',
    'intention',
    'duty as responsibility',
    'self-control',
    'devotion',
    'discernment',
  ],
  family: ['parent-child guided explanation only'],
} as const;

export const bhagavadGitaSacredRespectRules = [
  'Krishna must be treated with reverence.',
  'Arjuna must be treated as a sincere learner, not a weak or comic figure.',
  'Battlefield context must be softened and contextualized carefully.',
  'No mascot chatter over sacred teaching moments.',
  'No jokes around shlokas.',
  'No cartoonish or meme-like treatment of the Gita.',
];

export const bhagavadGitaParentTrustRules = [
  'Explain source sensitivity in parent-facing notes.',
  'Avoid fear-based morality.',
  'Avoid theological absolutism.',
  'Include parent discussion prompts.',
  'Include caution notes for complex concepts.',
  'Flag content that needs parent guidance.',
];

export const bhagavadGitaRuntimeReadinessChecklist = [
  'child-safe summary',
  'age-band fit',
  'parent note',
  'sacred respect level',
  'no restricted themes',
  'no battlefield spectacle',
  'no sectarian claim',
  'no runtime availability without editorial QA',
  'no audio until audio metadata is approved',
  'no mascot in sacred focal teaching moments',
];

export const bhagavadGitaEditorialReviewChecklist = [
  'Values-first framing is clear and child-grounded.',
  'Battlefield references are contextualized and non-spectacle.',
  'Language is emotionally gentle and non-fear-based.',
  'No theological superiority or sectarian exclusivity.',
  'Parent guidance notes are present where concepts are advanced.',
  'Krishna and Arjuna portrayal passes sacred respect standards.',
  'Runtime and QA gates are explicitly satisfied before publish state.',
];

export const bhagavadGitaFrameworkSummary = {
  intent:
    'Define a culturally respectful, child-safe editorial framework for future Bhagavad Gita content without publishing runtime stories in this sprint.',
  modelVersion: bhagavadGitaEditorialFrameworkModelVersion,
  scope: 'editorial framework only',
  runtimeAvailability: 'not runtime-available; framework and validation gates only',
};
