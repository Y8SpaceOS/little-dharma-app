import AsyncStorage from '@react-native-async-storage/async-storage';
import type { JourneyProgress } from '@/lib/dharmaJourneys';

const STORAGE_KEY = 'little_dharma_journey_progress_v1';

type JourneyProgressMap = Record<string, JourneyProgress>;

function asSafeString(value: unknown): string | null {
  return typeof value === 'string' && value.trim().length > 0 ? value : null;
}

export function normalizeJourneyProgressEntry(entry: unknown): JourneyProgress | null {
  if (!entry || typeof entry !== 'object') return null;
  const candidate = entry as Partial<JourneyProgress>;
  const journeyId = asSafeString(candidate.journeyId);
  if (!journeyId) return null;

  const completedStoryIds = Array.isArray(candidate.completedStoryIds)
    ? Array.from(new Set(candidate.completedStoryIds.filter((id): id is string => typeof id === 'string' && id.trim().length > 0)))
    : [];

  return {
    journeyId,
    completedStoryIds,
    currentStoryId: asSafeString(candidate.currentStoryId),
    lastOpenedStoryId: asSafeString(candidate.lastOpenedStoryId),
    updatedAtLocal: asSafeString(candidate.updatedAtLocal) ?? new Date(0).toISOString()
  };
}

function normalizeJourneyProgressMap(input: unknown): JourneyProgressMap {
  if (!input || typeof input !== 'object') return {};
  const out: JourneyProgressMap = {};
  for (const [, value] of Object.entries(input as Record<string, unknown>)) {
    const normalized = normalizeJourneyProgressEntry(value);
    if (!normalized) continue;
    out[normalized.journeyId] = normalized;
  }
  return out;
}

async function readAll(): Promise<JourneyProgressMap> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return normalizeJourneyProgressMap(JSON.parse(raw));
  } catch {
    return {};
  }
}

export async function getAllJourneyProgress(): Promise<JourneyProgressMap> { return readAll(); }
export async function getJourneyProgress(journeyId: string): Promise<JourneyProgress | null> {
  const all = await readAll();
  return all[journeyId] ?? null;
}

export async function setJourneyProgress(progress: JourneyProgress): Promise<JourneyProgress> {
  const all = await readAll();
  const normalized = normalizeJourneyProgressEntry({ ...progress, updatedAtLocal: new Date().toISOString() });
  if (!normalized) throw new Error('Invalid journey progress payload');
  all[normalized.journeyId] = normalized;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return normalized;
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
