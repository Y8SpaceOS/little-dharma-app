import AsyncStorage from '@react-native-async-storage/async-storage';
import type { StoryJourney } from '@/types/content';

export type StoryCompletionEntry = {
  completedAt: string;
  badgeName: string;
  valueWord?: string;
};

export type StoryCompletionRecord = {
  [storySlug: string]: StoryCompletionEntry;
};

const STORAGE_KEY = 'little_dharma_story_progress_v1';

function normalizeStoryCompletions(input: unknown): StoryCompletionRecord {
  if (!input || typeof input !== 'object') return {};
  const out: StoryCompletionRecord = {};
  for (const [slug, entry] of Object.entries(input as Record<string, unknown>)) {
    if (!entry || typeof entry !== 'object') continue;
    const candidate = entry as Partial<StoryCompletionEntry>;
    if (typeof candidate.completedAt !== 'string' || typeof candidate.badgeName !== 'string') continue;
    out[slug] = {
      completedAt: candidate.completedAt,
      badgeName: candidate.badgeName,
      valueWord: typeof candidate.valueWord === 'string' ? candidate.valueWord : undefined
    };
  }
  return out;
}

async function readStoryCompletions(): Promise<StoryCompletionRecord> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return {};

  try {
    return normalizeStoryCompletions(JSON.parse(raw));
  } catch {
    return {};
  }
}

export async function getAllStoryCompletions() {
  return readStoryCompletions();
}

export async function pruneStoryCompletions(validStorySlugs: Iterable<string>) {
  const current = await readStoryCompletions();
  const validSet = new Set(validStorySlugs);
  const pruned = Object.fromEntries(Object.entries(current).filter(([slug]) => validSet.has(slug)));
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(pruned));
  return pruned;
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

export async function getCompletedStoryCount(stories: StoryJourney[]) {
  const completions = await readStoryCompletions();
  return stories.filter((story) => Boolean(completions[story.story.slug])).length;
}

export async function getLatestCompletedStory(stories: StoryJourney[]) {
  const completions = await readStoryCompletions();
  return stories
    .filter((story) => Boolean(completions[story.story.slug]))
    .sort((a, b) => {
      const timeA = new Date(completions[a.story.slug].completedAt).getTime();
      const timeB = new Date(completions[b.story.slug].completedAt).getTime();
      return timeB - timeA;
    })[0] ?? null;
}

export async function getNextIncompleteStory(stories: StoryJourney[]) {
  const completions = await readStoryCompletions();
  return stories.find((story) => !completions[story.story.slug]) ?? null;
}

export async function getWorldProgress(worldSlug: string, stories: StoryJourney[]) {
  const worldStories = stories.filter((story) => story.world.slug === worldSlug);
  const completedCount = await getCompletedStoryCount(worldStories);
  const latestCompletedStory = await getLatestCompletedStory(worldStories);
  const nextIncompleteStory = await getNextIncompleteStory(worldStories);

  return {
    worldSlug,
    totalStories: worldStories.length,
    completedStories: completedCount,
    latestCompletedStory,
    nextIncompleteStory,
    isCompleted: completedCount === worldStories.length && worldStories.length > 0
  };
}

export async function markStoryComplete(storySlug: string, badgeName: string, valueWord?: string) {
  const current = await readStoryCompletions();

  current[storySlug] = {
    completedAt: new Date().toISOString(),
    badgeName,
    valueWord
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}


export async function getLatestCarryingWord(stories: StoryJourney[]) {
  const latestStory = await getLatestCompletedStory(stories);
  if (!latestStory) return null;

  const completion = await getStoryCompletion(latestStory.story.slug);
  return completion?.valueWord ?? latestStory.story.value;
}

export async function getCompletedCarryingWords(stories: StoryJourney[]) {
  const completions = await readStoryCompletions();

  return stories
    .filter((story) => Boolean(completions[story.story.slug]))
    .sort((a, b) => {
      const timeA = new Date(completions[a.story.slug].completedAt).getTime();
      const timeB = new Date(completions[b.story.slug].completedAt).getTime();
      return timeB - timeA;
    })
    .map((story) => completions[story.story.slug].valueWord ?? story.story.value);
}
