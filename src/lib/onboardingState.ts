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

let onboardingComplete = false;
let profile: OnboardingProfile | null = null;

export function getOnboardingState() {
  return { onboardingComplete, profile };
}

export function completeOnboarding(nextProfile: OnboardingProfile) {
  profile = nextProfile;
  onboardingComplete = true;
}

export function resetOnboarding() {
  onboardingComplete = false;
  profile = null;
}
