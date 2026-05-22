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
const AGE_BANDS: ChildAgeBand[] = ['3-5', '6-8', '9-12', 'prefer-not-to-say'];
const PARENT_INTENTS: ParentIntent[] = ['bedtime-calm', 'values-learning', 'festival-culture-learning', 'daily-story-habit', 'just-exploring'];

const defaultProfile = (): ChildProfile => ({
  setupCompleted: false,
  updatedAtLocal: new Date(0).toISOString()
});

export function normalizeChildProfile(input: Partial<ChildProfile> | null | undefined): ChildProfile {
  if (!input || typeof input !== 'object') return defaultProfile();
  const childName = typeof input.childNameOrNickname === 'string' ? input.childNameOrNickname.trim() : '';
  const updatedAtLocal = typeof input.updatedAtLocal === 'string' && input.updatedAtLocal.trim().length > 0
    ? input.updatedAtLocal
    : new Date(0).toISOString();

  return {
    childNameOrNickname: childName || undefined,
    ageBand: AGE_BANDS.includes(input.ageBand as ChildAgeBand) ? input.ageBand as ChildAgeBand : undefined,
    parentIntent: PARENT_INTENTS.includes(input.parentIntent as ParentIntent) ? input.parentIntent as ParentIntent : undefined,
    setupCompleted: Boolean(input.setupCompleted),
    updatedAtLocal
  };
}

export async function getChildProfile(): Promise<ChildProfile> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProfile();

  try {
    const parsed = JSON.parse(raw) as Partial<ChildProfile>;
    return normalizeChildProfile(parsed);
  } catch {
    return defaultProfile();
  }
}

export async function saveChildProfile(input: Partial<Omit<ChildProfile, 'setupCompleted' | 'updatedAtLocal'>>): Promise<ChildProfile> {
  const profile: ChildProfile = {
    ...normalizeChildProfile(input),
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
