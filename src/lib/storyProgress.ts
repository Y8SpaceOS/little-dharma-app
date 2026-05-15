import AsyncStorage from '@react-native-async-storage/async-storage';

export type StoryCompletionEntry = {
  completedAt: string;
  badgeName: string;
};

export type StoryCompletionRecord = {
  [storySlug: string]: StoryCompletionEntry;
};

const STORAGE_KEY = 'little_dharma_story_progress_v1';

async function readStoryCompletions(): Promise<StoryCompletionRecord> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw) as StoryCompletionRecord;
  } catch {
    return {};
  }
}

export async function getAllStoryCompletions() {
  return readStoryCompletions();
}

export async function getStoryCompletion(storySlug: string) {
  const allCompletions = await readStoryCompletions();
  return allCompletions[storySlug] ?? null;
}

export async function hasCompletedStory(storySlug: string) {
  const completion = await getStoryCompletion(storySlug);
  return Boolean(completion);
}

export async function getCompletedBadge(storySlug: string) {
  const completion = await getStoryCompletion(storySlug);
  return completion?.badgeName ?? null;
}

export async function markStoryComplete(storySlug: string, badgeName: string) {
  const current = await readStoryCompletions();

  current[storySlug] = {
    completedAt: new Date().toISOString(),
    badgeName
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}
