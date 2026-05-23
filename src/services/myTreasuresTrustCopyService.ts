export const myTreasuresTrustCopyModelVersion = 'pr149-my-treasures-trust-copy-v1';

export type MyTreasuresTrustCopyModel = {
  modelVersion: string;
  gentleTitleCopy: string;
  memoryCopy: string;
  noScoreCopy: string;
  noRaceCopy: string;
  revisitCopy: string;
  localMemoryCopy: string;
  sacredCareCopy: string;
  luvluBoundaryCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

export const getMyTreasuresGentleTitleCopy = (): string => 'My Treasures';
export const getMyTreasuresMemoryCopy = (): string => 'Stories you have gently finished.';
export const getMyTreasuresNoScoreCopy = (): string => 'Treasures are memories, not scores.';
export const getMyTreasuresNoRaceCopy = (): string => 'No race, no rank, no streak.';
export const getMyTreasuresRevisitCopy = (): string => 'You can revisit a story anytime.';
export const getMyTreasuresLocalMemoryCopy = (): string => 'Your story memories stay on this device.';
export const getMyTreasuresSacredCareCopy = (): string => 'Sacred stories are remembered with care.';
export const getMyTreasuresLuvluBoundaryCopy = (): string =>
  'Luvlu is a gentle helper for reflection, not a reward token.';

export const getMyTreasuresTrustCopySummary = (): string =>
  'My Treasures trust copy keeps the space calm and local-first: memories over scores, no race or rank pressure, revisit anytime, sacred care language, and a clear Luvlu helper boundary.';

export const buildMyTreasuresTrustCopy = (): MyTreasuresTrustCopyModel => ({
  modelVersion: myTreasuresTrustCopyModelVersion,
  gentleTitleCopy: getMyTreasuresGentleTitleCopy(),
  memoryCopy: getMyTreasuresMemoryCopy(),
  noScoreCopy: getMyTreasuresNoScoreCopy(),
  noRaceCopy: getMyTreasuresNoRaceCopy(),
  revisitCopy: getMyTreasuresRevisitCopy(),
  localMemoryCopy: getMyTreasuresLocalMemoryCopy(),
  sacredCareCopy: getMyTreasuresSacredCareCopy(),
  luvluBoundaryCopy: getMyTreasuresLuvluBoundaryCopy(),
  microcopyBullets: [
    getMyTreasuresNoScoreCopy(),
    getMyTreasuresNoRaceCopy(),
    getMyTreasuresRevisitCopy(),
    getMyTreasuresLocalMemoryCopy(),
    getMyTreasuresSacredCareCopy(),
    getMyTreasuresLuvluBoundaryCopy(),
  ],
  accessibilityLabel: 'My Treasures trust copy',
  accessibilityHint:
    'Read gentle reminders that treasures are memories, no race pressure is present, stories can be revisited anytime, memories stay on this device, and sacred stories are remembered with care.',
});
