import AsyncStorage from '@react-native-async-storage/async-storage';
import type { JourneyProgress } from '@/lib/dharmaJourneys';

const STORAGE_KEY = 'little_dharma_journey_progress_v1';

type JourneyProgressMap = Record<string, JourneyProgress>;

async function readAll(): Promise<JourneyProgressMap> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try { return JSON.parse(raw) as JourneyProgressMap; } catch { return {}; }
}

export async function getAllJourneyProgress(): Promise<JourneyProgressMap> { return readAll(); }
export async function getJourneyProgress(journeyId: string): Promise<JourneyProgress | null> {
  const all = await readAll();
  return all[journeyId] ?? null;
}

export async function setJourneyProgress(progress: JourneyProgress): Promise<JourneyProgress> {
  const all = await readAll();
  all[progress.journeyId] = { ...progress, updatedAtLocal: new Date().toISOString() };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return all[progress.journeyId];
}

export async function markJourneyStoryCompleted(journeyId: string, storyId: string): Promise<JourneyProgress> {
  const current = (await getJourneyProgress(journeyId)) ?? {
    journeyId,
    completedStoryIds: [],
    currentStoryId: storyId,
    lastOpenedStoryId: storyId,
    updatedAtLocal: new Date(0).toISOString()
  };
  const completedStoryIds = current.completedStoryIds.includes(storyId) ? current.completedStoryIds : [...current.completedStoryIds, storyId];
  return setJourneyProgress({ ...current, completedStoryIds, lastOpenedStoryId: storyId });
}

export async function getParentJourneyProgressSummary() {
  const all = await readAll();
  const journeysTracked = Object.keys(all).length;
  const completedStories = Object.values(all).reduce((sum, entry) => sum + entry.completedStoryIds.length, 0);
  return {
    journeysTracked,
    completedStories,
    note: 'Journey progress is local-first and stays on this device.'
  };
}
