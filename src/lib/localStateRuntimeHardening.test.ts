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
import { getParentControls, setBedtimeReducedPromptsEnabled, setLuvluHelperPromptsEnabled } from './parentControls';

beforeEach(() => store.clear());

describe('local state runtime hardening', () => {
  it('handles corrupted onboarding json', async () => {
    store.set('little_dharma_onboarding_state_v1', '{broken');
    const state = await loadOnboardingState();
    expect(state).toEqual({ onboardingComplete: false, profile: null });
  });

  it('does not keep onboardingComplete true when profile normalizes to null', async () => {
    store.set('little_dharma_onboarding_state_v1', JSON.stringify({ onboardingComplete: true, profile: { childName: 'Kid' } }));
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

  it('keys journey progress map by normalized journeyId', async () => {
    store.set('little_dharma_journey_progress_v1', JSON.stringify({ legacyKey: { journeyId: 'canonical-id', completedStoryIds: [] } }));
    const progress = await getAllJourneyProgress();
    expect(Object.keys(progress)).toEqual(['canonical-id']);
  });

  it('prunes stale story slugs when helper is called', async () => {
    store.set('little_dharma_story_progress_v1', JSON.stringify({ known: { completedAt: 'now', badgeName: 'Lotus' }, old: { completedAt: 'now', badgeName: 'Diya' } }));
    const pruned = await pruneStoryCompletions(['known']);
    expect(pruned).toEqual({ known: { completedAt: 'now', badgeName: 'Lotus', valueWord: undefined } });
  });

  it('normalizes malformed parent feedback text fields without object spread', async () => {
    store.set('little_dharma_parent_feedback_v1', JSON.stringify({
      parentName: { unsafe: true },
      childAgeBand: 12,
      childEnjoyed: null,
      permissionToContact: 'yes',
      contactDetail: ['not-a-string'],
      updatedAt: { now: true }
    }));
    const draft = await loadParentFeedbackDraft();
    expect(draft.parentName).toBe('');
    expect(draft.childAgeBand).toBe('');
    expect(draft.childEnjoyed).toBe('');
    expect(draft.contactDetail).toBe('');
    expect(draft.updatedAt).toBe('');
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

  it('returns safe parent controls defaults for missing or corrupted storage', async () => {
    let controls = await getParentControls();
    expect(controls.luvluHelperPromptsEnabled).toBe(true);
    expect(controls.bedtimeReducedPromptsEnabled).toBe(false);

    store.set('little_dharma_parent_controls_v1', '{bad-json');
    controls = await getParentControls();
    expect(controls.luvluHelperPromptsEnabled).toBe(true);
    expect(controls.bedtimeReducedPromptsEnabled).toBe(false);
  });

  it('persists parent controls toggles locally', async () => {
    await setLuvluHelperPromptsEnabled(false);
    await setBedtimeReducedPromptsEnabled(true);
    const controls = await getParentControls();
    expect(controls.luvluHelperPromptsEnabled).toBe(false);
    expect(controls.bedtimeReducedPromptsEnabled).toBe(true);
  });

  it('drops contact detail when permissionToContact is no on save', async () => {
    const saved = await saveParentFeedbackDraft({
      parentName: 'A', childAgeBand: '6-8', childEnjoyed: '', confusingMoments: '', safetyTrustConcern: '', authenticityConcern: '', bugLayoutIssue: '',
      overallSentiment: 'Mixed', permissionToContact: 'no', contactDetail: 'email@example.com'
    });
    expect(saved.contactDetail).toBe('');
  });
});

import { markStoryComplete } from './storyProgress';
import { markJourneyStoryCompleted } from './journeyProgress';
import { getRuntimeStoryBySlug } from '@/services/journeys';

describe('story runtime hardening', () => {
  it('resolver returns null for unknown and coming-soon slugs', () => {
    expect(getRuntimeStoryBySlug('missing-slug')).toBeNull();
    expect(getRuntimeStoryBySlug('ganesha-opening-soon')).toBeNull();
  });

  it('completion marks story locally and journey metadata can be missing', async () => {
    await markStoryComplete('krishna-shares-butter', 'Kindness Blossom', 'Kindness');
    const completions = await getAllStoryCompletions();
    expect(completions['krishna-shares-butter']).toBeTruthy();
    await expect(markJourneyStoryCompleted('legacy-missing-journey', 'krishna-shares-butter')).resolves.toBeTruthy();
  });

  it('treasures-style filtering drops unknown stale completed slugs', async () => {
    store.set('little_dharma_story_progress_v1', JSON.stringify({
      'krishna-shares-butter': { completedAt: new Date().toISOString(), badgeName: 'Lotus' },
      'stale-slug': { completedAt: new Date().toISOString(), badgeName: 'Old' }
    }));
    const known = new Set(['krishna-shares-butter']);
    const completions = await getAllStoryCompletions();
    const visible = Object.keys(completions).filter((slug) => known.has(slug));
    expect(visible).toEqual(['krishna-shares-butter']);
  });

  it('journeys/story world/treasures modules import without throwing', async () => {
    await expect(import('@/services/journeys')).resolves.toBeTruthy();
    await expect(import('@/data/storyWorld')).resolves.toBeTruthy();
    await expect(import('../../app/(child)/treasures')).resolves.toBeTruthy();
  });

  it('returns [] fallback when vrindavan seed export is missing at runtime', async () => {
    vi.resetModules();
    vi.doMock('@/data/seed/vrindavan', () => ({ vrindavanStoryPackets: undefined }));
    const { getVrindavanJourneyPath: getFallbackPath } = await import('@/services/journeys');
    expect(getFallbackPath()).toEqual([]);
    vi.doUnmock('@/data/seed/vrindavan');
    vi.resetModules();
  });
});
