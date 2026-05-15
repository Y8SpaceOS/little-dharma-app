import { tokens } from './tokens';

export const childTheme = {
  mode: 'child',
  background: tokens.colors.cloud,
  primary: tokens.colors.saffron,
  accent: tokens.colors.peacock
};

export const parentTheme = {
  mode: 'parent',
  background: '#F7F9FC',
  primary: tokens.colors.midnight,
  accent: tokens.colors.gold
};

export const bedtimeTheme = {
  mode: 'bedtime',
  background: tokens.colors.midnight,
  primary: tokens.colors.moonlight,
  accent: tokens.colors.lotus
};
