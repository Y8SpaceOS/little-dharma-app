import AsyncStorage from '@react-native-async-storage/async-storage';

export type ParentFeedbackSentiment = 'Very positive' | 'Mostly positive' | 'Mixed' | 'Concerned';

export type ParentFeedbackDraft = {
  parentName: string;
  childAgeBand: string;
  childEnjoyed: string;
  confusingMoments: string;
  safetyTrustConcern: string;
  authenticityConcern: string;
  bugLayoutIssue: string;
  overallSentiment: ParentFeedbackSentiment;
  permissionToContact: 'yes' | 'no';
  contactDetail: string;
  updatedAt: string;
};

const STORAGE_KEY = 'little_dharma_parent_feedback_v1';


function normalizeDraftText(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export const EMPTY_PARENT_FEEDBACK_DRAFT: ParentFeedbackDraft = {
  parentName: '',
  childAgeBand: '',
  childEnjoyed: '',
  confusingMoments: '',
  safetyTrustConcern: '',
  authenticityConcern: '',
  bugLayoutIssue: '',
  overallSentiment: 'Mixed',
  permissionToContact: 'no',
  contactDetail: '',
  updatedAt: ''
};

export async function loadParentFeedbackDraft(): Promise<ParentFeedbackDraft> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return EMPTY_PARENT_FEEDBACK_DRAFT;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ParentFeedbackDraft>;
    const permissionToContact = parsed.permissionToContact === 'yes' ? 'yes' : 'no';

    return {
      parentName: normalizeDraftText(parsed.parentName),
      childAgeBand: normalizeDraftText(parsed.childAgeBand),
      childEnjoyed: normalizeDraftText(parsed.childEnjoyed),
      confusingMoments: normalizeDraftText(parsed.confusingMoments),
      safetyTrustConcern: normalizeDraftText(parsed.safetyTrustConcern),
      authenticityConcern: normalizeDraftText(parsed.authenticityConcern),
      bugLayoutIssue: normalizeDraftText(parsed.bugLayoutIssue),
      overallSentiment:
        parsed.overallSentiment === 'Very positive' ||
        parsed.overallSentiment === 'Mostly positive' ||
        parsed.overallSentiment === 'Mixed' ||
        parsed.overallSentiment === 'Concerned'
          ? parsed.overallSentiment
          : 'Mixed',
      permissionToContact,
      contactDetail: permissionToContact === 'yes' ? normalizeDraftText(parsed.contactDetail) : '',
      updatedAt: normalizeDraftText(parsed.updatedAt)
    };
  } catch {
    return EMPTY_PARENT_FEEDBACK_DRAFT;
  }
}

export async function saveParentFeedbackDraft(draft: Omit<ParentFeedbackDraft, 'updatedAt'>) {
  const nextDraft: ParentFeedbackDraft = {
    ...draft,
    contactDetail: draft.permissionToContact === 'yes' ? draft.contactDetail : '',
    updatedAt: new Date().toISOString()
  };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextDraft));
  return nextDraft;
}

export async function clearParentFeedbackDraft() {
  await AsyncStorage.removeItem(STORAGE_KEY);
  return EMPTY_PARENT_FEEDBACK_DRAFT;
}
