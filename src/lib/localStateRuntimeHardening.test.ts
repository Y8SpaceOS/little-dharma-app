import { describe, it, expect, beforeEach, vi } from 'vitest';

const store = new Map<string, string>();
vi.mock('@react-native-async-storage/async-storage', () => ({
  default: {
    getItem: vi.fn(async (k: string) => (store.has(k) ? store.get(k)! : null)),
    setItem: vi.fn(async (k: string, v: string) => { store.set(k, v); }),
    removeItem: vi.fn(async (k: string) => { store.delete(k); })
  }
}));

import { loadOnboardingState } from './onboardingState';
import { getChildProfile } from './childProfile';
import { getAllStoryCompletions, pruneStoryCompletions } from './storyProgress';
import { getAllJourneyProgress } from './journeyProgress';
import { clearParentFeedbackDraft, loadParentFeedbackDraft, saveParentFeedbackDraft } from './parentFeedback';

beforeEach(() => store.clear());

describe('local state runtime hardening', () => {
  it('handles corrupted onboarding json', async () => {
    store.set('little_dharma_onboarding_state_v1', '{broken');
    const state = await loadOnboardingState();
    expect(state).toEqual({ onboardingComplete: false, profile: null });
  });

  it('normalizes invalid child profile enum values and missing fields', async () => {
    store.set('little_dharma_child_profile_v1', JSON.stringify({ ageBand: 'invalid', parentIntent: 'wrong', setupCompleted: 1 }));
    const profile = await getChildProfile();
    expect(profile.ageBand).toBeUndefined();
    expect(profile.parentIntent).toBeUndefined();
    expect(profile.setupCompleted).toBe(true);
    expect(profile.childNameOrNickname).toBeUndefined();
  });

  it('handles corrupted story progress', async () => {
    store.set('little_dharma_story_progress_v1', 'bad-json');
    await expect(getAllStoryCompletions()).resolves.toEqual({});
  });

  it('deduplicates journey completed story ids and drops invalid entry', async () => {
    store.set('little_dharma_journey_progress_v1', JSON.stringify({
      good: { journeyId: 'good', completedStoryIds: ['a', 'a', '', 'b'], currentStoryId: 10, lastOpenedStoryId: 'x', updatedAtLocal: null },
      bad: { completedStoryIds: ['a'] }
    }));

    const progress = await getAllJourneyProgress();
    expect(Object.keys(progress)).toEqual(['good']);
    expect(progress.good.completedStoryIds).toEqual(['a', 'b']);
    expect(progress.good.currentStoryId).toBeNull();
    expect(progress.good.updatedAtLocal).toBe('1970-01-01T00:00:00.000Z');
  });

  it('prunes stale story slugs when helper is called', async () => {
    store.set('little_dharma_story_progress_v1', JSON.stringify({ known: { completedAt: 'now', badgeName: 'Lotus' }, old: { completedAt: 'now', badgeName: 'Diya' } }));
    const pruned = await pruneStoryCompletions(['known']);
    expect(pruned).toEqual({ known: { completedAt: 'now', badgeName: 'Lotus', valueWord: undefined } });
  });

  it('clears parent feedback draft', async () => {
    await saveParentFeedbackDraft({
      parentName: 'A', childAgeBand: '6-8', childEnjoyed: '', confusingMoments: '', safetyTrustConcern: '', authenticityConcern: '', bugLayoutIssue: '',
      overallSentiment: 'Mixed', permissionToContact: 'yes', contactDetail: 'email@example.com'
    });
    await clearParentFeedbackDraft();
    const draft = await loadParentFeedbackDraft();
    expect(draft.contactDetail).toBe('');
    expect(draft.permissionToContact).toBe('no');
  });
});
