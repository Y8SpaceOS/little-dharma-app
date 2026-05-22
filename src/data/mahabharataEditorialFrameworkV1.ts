export const mahabharataEditorialFrameworkModelVersion = '1.0.0';

export const mahabharataForChildrenEditorialPrinciples = [
  'Translate Mahabharata episodes into values-first, emotionally safe child guidance.',
  'Preserve sacred and cultural respect while avoiding sectarian, absolutist, or political framing.',
  'Prioritize child safety, parent trust, and developmental appropriateness over narrative completeness.',
  'Require editorial and runtime readiness gates before any future Mahabharata story can be published.',
];

export const mahabharataAllowedThemes = [
  'truthful speech',
  'keeping promises carefully',
  'humility',
  'courage with compassion',
  'wise choices',
  'patience',
  'fairness',
  'friendship',
  'family love',
  'forgiveness',
  'self-control',
  'service',
  'learning from mistakes',
  'respect for elders without fear',
  'responsibility',
  'inner steadiness',
];

export const mahabharataRestrictedThemes = [
  'war as spectacle',
  'weapon focus',
  'revenge glorification',
  'humiliation as entertainment',
  'death/fear-heavy framing',
  'dice game as gambling excitement',
  'shame/punishment-heavy morality',
  'caste superiority',
  'blind obedience',
  'theological superiority',
  'sectarian claims',
  'fatalism',
  'trauma-heavy family conflict',
  'adult political intrigue',
  'Draupadi humiliation details for young children',
  'disrobing depiction',
  'graphic violence',
  'simplistic villainization of complex characters',
];

export const mahabharataAgeBandGuidance = {
  '3-5': ['simple values', 'kindness', 'sharing', 'friendship', 'patience', 'choose gently'],
  '6-8': [
    'fairness',
    'promises',
    'self-control',
    'helping family',
    'courage with care',
    'learning from mistakes',
  ],
  '9-12': [
    'moral complexity',
    'intention',
    'responsibility',
    'consequences',
    'discernment',
    'forgiveness',
    'leadership humility',
  ],
  family: ['parent-guided explanation only for complex episodes'],
} as const;

export const mahabharataSacredRespectRules = [
  'Krishna must be treated with reverence.',
  'Pandavas and Kauravas should not be flattened into cartoon heroes or villains.',
  'Draupadi must be treated with dignity and never as spectacle.',
  'Bhishma, Drona, Karna, Kunti, Gandhari, and other complex characters require nuance.',
  'War episodes must be softened and contextualized.',
  'No mascot chatter over sacred teaching or grief moments.',
  'No jokes around vows, humiliation, grief, or sacred teachings.',
];

export const mahabharataParentTrustRules = [
  'Explain source sensitivity in parent-facing notes.',
  'Flag complex episodes clearly.',
  'Include parent discussion prompts.',
  'Include caution notes where family conflict or war-adjacent themes appear.',
  'Avoid fear-based morality.',
  'Avoid revenge-based framing.',
  'Avoid caste superiority framing.',
  'Avoid fatalism.',
  'Recommend parent-guided reading for family conflict and war-adjacent material.',
];

export const mahabharataRuntimeReadinessChecklist = [
  'child-safe summary',
  'age-band fit',
  'parent note',
  'caution note for complex episodes',
  'sacred respect level',
  'no restricted themes',
  'no war spectacle',
  'no humiliation spectacle',
  'no graphic violence',
  'no runtime availability without editorial QA',
  'no audio until audio metadata is approved',
  'no mascot in sacred/grief/teaching moments',
];

export const mahabharataEditorialReviewChecklist = [
  'Values-first framing is clear, child-grounded, and emotionally safe.',
  'Age-band guidance is respected for language, complexity, and emotional intensity.',
  'Krishna portrayal is reverent and sacred-teaching moments remain respectful.',
  'Pandava, Kaurava, and other complex character portrayal maintains nuance.',
  'Draupadi dignity standards are upheld and humiliation is never treated as spectacle.',
  'War, dice game, vows, grief, and conflict references are contextualized without glamorization.',
  'Restricted themes are absent and parent trust notes are complete.',
  'Editorial QA and runtime gates are explicitly satisfied before publish state.',
];

export const mahabharataFrameworkSummary = {
  intent:
    'Define a spiritually respectful, emotionally safe editorial framework for future Mahabharata-for-children adaptations without publishing runtime stories in this sprint.',
  modelVersion: mahabharataEditorialFrameworkModelVersion,
  scope: 'editorial framework only',
  runtimeAvailability: 'not runtime-available; framework and validation gates only',
};
