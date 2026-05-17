import AsyncStorage from '@react-native-async-storage/async-storage';

export type ChildAgeBand = '3-5' | '6-8' | '9-12' | 'prefer-not-to-say';
export type ParentIntent = 'bedtime-calm' | 'values-learning' | 'festival-culture-learning' | 'daily-story-habit' | 'just-exploring';

export type ChildProfile = {
  childNameOrNickname?: string;
  ageBand?: ChildAgeBand;
  parentIntent?: ParentIntent;
  setupCompleted: boolean;
  updatedAtLocal: string;
};

const STORAGE_KEY = 'little_dharma_child_profile_v1';

const defaultProfile = (): ChildProfile => ({
  setupCompleted: false,
  updatedAtLocal: new Date(0).toISOString()
});

export async function getChildProfile(): Promise<ChildProfile> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProfile();

  try {
    const parsed = JSON.parse(raw) as Partial<ChildProfile>;
    return {
      childNameOrNickname: parsed.childNameOrNickname?.trim() || undefined,
      ageBand: parsed.ageBand,
      parentIntent: parsed.parentIntent,
      setupCompleted: !!parsed.setupCompleted,
      updatedAtLocal: parsed.updatedAtLocal || new Date(0).toISOString()
    };
  } catch {
    return defaultProfile();
  }
}

export async function saveChildProfile(input: Partial<Omit<ChildProfile, 'setupCompleted' | 'updatedAtLocal'>>): Promise<ChildProfile> {
  const profile: ChildProfile = {
    childNameOrNickname: input.childNameOrNickname?.trim() || undefined,
    ageBand: input.ageBand,
    parentIntent: input.parentIntent,
    setupCompleted: true,
    updatedAtLocal: new Date().toISOString()
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  return profile;
}

export async function skipChildProfileSetup(): Promise<ChildProfile> {
  const profile: ChildProfile = {
    setupCompleted: false,
    updatedAtLocal: new Date().toISOString()
  };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  return profile;
}


export async function clearChildProfile(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
