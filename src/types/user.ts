import { AgeBand } from './content';

export type ChildOnboarding = {
  nickname: string;
  ageBand: AgeBand;
  preferredLanguage: 'English' | 'Hindi';
  favouriteCharacter: string;
  bedtimePreference: 'calm' | 'playful';
};
