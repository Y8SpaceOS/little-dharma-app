export const parentReflectionPromptCopyModelVersion = 'pr146-parent-reflection-prompt-copy-v1';

export type ParentReflectionPromptCopyModel = {
  modelVersion: string;
  gentleIntroCopy: string;
  optionalCopy: string;
  noQuizCopy: string;
  valueQuestionCopy: string;
  peaceQuestionCopy: string;
  familyConversationCopy: string;
  sacredCareCopy: string;
  returnLaterCopy: string;
  reflectionPrompts: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const gentleIntroCopy = 'A gentle question for later';
const optionalCopy = 'Reflection is optional. Ask softly, only if your child wants to talk.';
const noQuizCopy = 'No quiz, no score, no pressure.';
const valueQuestionCopy = 'What kindness did you notice in this story?';
const peaceQuestionCopy = 'Which part felt peaceful?';
const familyConversationCopy = 'A calm family conversation can happen in your own time.';
const sacredCareCopy = 'Sacred stories are discussed with care and respect.';
const returnLaterCopy = 'You can return to this story another day.';

export const buildParentReflectionPromptCopy = (): ParentReflectionPromptCopyModel => ({
  modelVersion: parentReflectionPromptCopyModelVersion,
  gentleIntroCopy: getParentReflectionGentleIntroCopy(),
  optionalCopy: getParentReflectionOptionalCopy(),
  noQuizCopy: getParentReflectionNoQuizCopy(),
  valueQuestionCopy: getParentReflectionValueQuestionCopy(),
  peaceQuestionCopy: getParentReflectionPeaceQuestionCopy(),
  familyConversationCopy: getParentReflectionFamilyConversationCopy(),
  sacredCareCopy: getParentReflectionSacredCareCopy(),
  returnLaterCopy: getParentReflectionReturnLaterCopy(),
  reflectionPrompts: [
    'What kindness did you notice in this story?',
    'Which part felt peaceful?',
  ],
  accessibilityLabel: 'Parent reflection prompts',
  accessibilityHint: 'Optional, calm prompts for family conversation with no quiz and no pressure.',
});

export const getParentReflectionGentleIntroCopy = (): string => gentleIntroCopy;
export const getParentReflectionOptionalCopy = (): string => optionalCopy;
export const getParentReflectionNoQuizCopy = (): string => noQuizCopy;
export const getParentReflectionValueQuestionCopy = (): string => valueQuestionCopy;
export const getParentReflectionPeaceQuestionCopy = (): string => peaceQuestionCopy;
export const getParentReflectionFamilyConversationCopy = (): string => familyConversationCopy;
export const getParentReflectionSacredCareCopy = (): string => sacredCareCopy;
export const getParentReflectionReturnLaterCopy = (): string => returnLaterCopy;

export const getParentReflectionPromptCopySummary = (): string =>
  'Parent reflection prompt copy keeps post-story reflection optional and calm, with no quiz, no score, no pressure, gentle value and peace questions, family conversation support, sacred care language, and return-later reassurance.';
