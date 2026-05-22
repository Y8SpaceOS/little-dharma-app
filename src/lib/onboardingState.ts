import AsyncStorage from '@react-native-async-storage/async-storage';

export type AgeBand = '0-2' | '3-5' | '6-8' | '9-12';
export type ChildLanguage = 'English' | 'Hindi' | 'Tamil' | 'Bengali';
export type FavoriteCharacter = 'Krishna' | 'Hanuman' | 'Ganesha' | 'Sita-Rama';
export type BedtimePreference = 'Quick (5 min)' | 'Cozy (10 min)' | 'Dreamy (15 min)';

export type OnboardingProfile = {
  childName: string;
  nickname: string;
  ageBand: AgeBand;
  language: ChildLanguage;
  favoriteCharacter: FavoriteCharacter;
  bedtimePreference: BedtimePreference;
};

type OnboardingState = {
  onboardingComplete: boolean;
  profile: OnboardingProfile | null;
};

const STORAGE_KEY = 'little_dharma_onboarding_state_v1';
const AGE_BANDS: AgeBand[] = ['0-2', '3-5', '6-8', '9-12'];
const LANGUAGES: ChildLanguage[] = ['English', 'Hindi', 'Tamil', 'Bengali'];
const CHARACTERS: FavoriteCharacter[] = ['Krishna', 'Hanuman', 'Ganesha', 'Sita-Rama'];
const BEDTIME_OPTIONS: BedtimePreference[] = ['Quick (5 min)', 'Cozy (10 min)', 'Dreamy (15 min)'];

let onboardingState: OnboardingState = {
  onboardingComplete: false,
  profile: null
};

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

async function persistState() {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(onboardingState));
}

export function normalizeOnboardingProfile(input: Partial<OnboardingProfile> | null | undefined): OnboardingProfile | null {
  if (!input || typeof input !== 'object') return null;

  const ageBand = AGE_BANDS.includes(input.ageBand as AgeBand) ? input.ageBand as AgeBand : undefined;
  const language = LANGUAGES.includes(input.language as ChildLanguage) ? input.language as ChildLanguage : undefined;
  const favoriteCharacter = CHARACTERS.includes(input.favoriteCharacter as FavoriteCharacter)
    ? input.favoriteCharacter as FavoriteCharacter
    : undefined;
  const bedtimePreference = BEDTIME_OPTIONS.includes(input.bedtimePreference as BedtimePreference)
    ? input.bedtimePreference as BedtimePreference
    : undefined;

  if (!ageBand || !language || !favoriteCharacter || !bedtimePreference) return null;

  return {
    childName: typeof input.childName === 'string' ? input.childName : '',
    nickname: typeof input.nickname === 'string' ? input.nickname : '',
    ageBand,
    language,
    favoriteCharacter,
    bedtimePreference
  };
}

export function getOnboardingState() {
  return onboardingState;
}

export function subscribeOnboardingState(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export async function loadOnboardingState() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    onboardingState = { onboardingComplete: false, profile: null };
    notify();
    return onboardingState;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<OnboardingState>;
    onboardingState = {
      onboardingComplete: parsed.onboardingComplete === true,
      profile: normalizeOnboardingProfile(parsed.profile)
    };
  } catch {
    onboardingState = { onboardingComplete: false, profile: null };
  }

  notify();
  return onboardingState;
}

export async function completeOnboarding(nextProfile: OnboardingProfile) {
  onboardingState = {
    onboardingComplete: true,
    profile: normalizeOnboardingProfile(nextProfile)
  };
  await persistState();
  notify();
}

export async function resetOnboarding() {
  onboardingState = {
    onboardingComplete: false,
    profile: null
  };
  await AsyncStorage.removeItem(STORAGE_KEY);
  notify();
}
