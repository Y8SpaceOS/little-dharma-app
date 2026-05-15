import AsyncStorage from '@react-native-async-storage/async-storage';

export type StoryCompletionRecord = {
  [storySlug: string]: {
    completedAt: string;
    badgeName: string;
  };
};

const STORAGE_KEY = 'little_dharma_story_progress_v1';

export async function getStoryCompletion(storySlug: string) {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as StoryCompletionRecord;
    return parsed[storySlug] ?? null;
  } catch {
    return null;
  }
}

export async function markStoryComplete(storySlug: string, badgeName: string) {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  let current: StoryCompletionRecord = {};

  if (raw) {
    try {
      current = JSON.parse(raw) as StoryCompletionRecord;
    } catch {
      current = {};
    }
  }

  current[storySlug] = {
    completedAt: new Date().toISOString(),
    badgeName
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}
