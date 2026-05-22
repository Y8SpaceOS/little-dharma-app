export const audioEntryTrustMicrocopyModelVersion = 'pr145-audio-entry-trust-microcopy-v1';

export type AudioEntryTrustMicrocopyModel = {
  modelVersion: string;
  optionalListeningCopy: string;
  readMyselfCopy: string;
  noMicRecordingCopy: string;
  familyListeningCopy: string;
  sacredCareCopy: string;
  comingSoonCopy: string;
  parentApprovedCopy: string;
  microcopyBullets: string[];
  accessibilityLabel: string;
  accessibilityHint: string;
};

const optionalListeningCopy = 'Listening is optional.';
const readMyselfCopy = 'Read myself is always okay.';
const noMicRecordingCopy = 'No microphone or recording.';
const familyListeningCopy = 'You can read with your family.';
const sacredCareCopy = 'Stories are shared with care.';
const comingSoonCopy = 'Audio will arrive gently when ready.';
const parentApprovedCopy = 'Choose the calm way that feels right with parent-approved audio.';

export const buildAudioEntryTrustMicrocopy = (): AudioEntryTrustMicrocopyModel => ({
  modelVersion: audioEntryTrustMicrocopyModelVersion,
  optionalListeningCopy: getAudioEntryOptionalListeningCopy(),
  readMyselfCopy: getAudioEntryReadMyselfCopy(),
  noMicRecordingCopy: getAudioEntryNoMicRecordingCopy(),
  familyListeningCopy: getAudioEntryFamilyListeningCopy(),
  sacredCareCopy: getAudioEntrySacredCareCopy(),
  comingSoonCopy: getAudioEntryComingSoonCopy(),
  parentApprovedCopy: getAudioEntryParentApprovedCopy(),
  microcopyBullets: [
    'Listening is optional.',
    'Read myself is always okay.',
    'No microphone or recording.',
    'You can read with your family.',
    'Stories are shared with care.',
    'Audio will arrive gently when ready.',
    'Choose the calm way that feels right with parent-approved audio.',
  ],
  accessibilityLabel: 'Audio trust words',
  accessibilityHint: 'Calm reminders that reading is always okay, listening is optional, and no microphone or recording is used.',
});

export const getAudioEntryOptionalListeningCopy = (): string => optionalListeningCopy;
export const getAudioEntryReadMyselfCopy = (): string => readMyselfCopy;
export const getAudioEntryNoMicRecordingCopy = (): string => noMicRecordingCopy;
export const getAudioEntryFamilyListeningCopy = (): string => familyListeningCopy;
export const getAudioEntrySacredCareCopy = (): string => sacredCareCopy;
export const getAudioEntryComingSoonCopy = (): string => comingSoonCopy;
export const getAudioEntryParentApprovedCopy = (): string => parentApprovedCopy;

export const getAudioEntryTrustMicrocopySummary = (): string =>
  'Audio Entry trust microcopy keeps story entry calm: listening is optional, reading yourself is always okay, no microphone or recording is used, family reading is welcome, stories are shared with care, audio will arrive gently when ready, and parent-approved audio is calm.';
