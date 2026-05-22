import type { SacredRespectLevel } from '@/types/contentModel';

export const storyAudioFoundationModelVersion = 'story-audio-foundation-v1';

export type StoryAudioMode = 'read_myself' | 'listen' | 'read_together';
export type StoryAudioAvailability = 'unavailable' | 'metadata_only' | 'local_ready';

export type StoryAudioVoiceOption = {
  id: string;
  label: string;
  voiceFamily: string;
  localeHint: string;
  isAvailable: boolean;
  trustNote: string;
};

export type StoryAudioPlayerState = {
  storyId: string;
  storySlug: string;
  storyTitle: string;
  availability: StoryAudioAvailability;
  defaultMode: StoryAudioMode;
  voiceOptions: StoryAudioVoiceOption[];
  selectedVoiceOptionId: string | null;
  canPlayNow: boolean;
  unavailableReason: string | null;
  trustNote: string;
  mascotSuppressed: boolean;
  noMicRequired: true;
  accessibilityLabel: string;
  accessibilityHint: string;
};

type StoryLike = {
  id?: string;
  slug?: string;
  title?: string;
  sacredRespectLevel?: SacredRespectLevel | string;
  audioAvailable?: boolean;
  audioVoiceOptions?: unknown;
  audioMetadata?: {
    audioAvailable?: boolean;
    voiceOptions?: unknown;
    noMicRequired?: boolean;
  };
};

function normalizeVoiceOption(value: unknown, index: number): StoryAudioVoiceOption | null {
  if (typeof value === 'string' && value.trim().length > 0) {
    const label = value.trim();
    return {
      id: `voice_${index + 1}`,
      label,
      voiceFamily: 'narration',
      localeHint: 'en-IN',
      isAvailable: false,
      trustNote: 'Parent-approved local narration will appear here when ready.',
    };
  }

  if (value && typeof value === 'object') {
    const candidate = value as Record<string, unknown>;
    const id = typeof candidate.id === 'string' && candidate.id.trim().length > 0 ? candidate.id : `voice_${index + 1}`;
    const label = typeof candidate.label === 'string' && candidate.label.trim().length > 0 ? candidate.label : `Voice ${index + 1}`;
    const voiceFamily = typeof candidate.voiceFamily === 'string' && candidate.voiceFamily.trim().length > 0 ? candidate.voiceFamily : 'narration';
    const localeHint = typeof candidate.localeHint === 'string' && candidate.localeHint.trim().length > 0 ? candidate.localeHint : 'en-IN';

    return {
      id,
      label,
      voiceFamily,
      localeHint,
      isAvailable: false,
      trustNote: 'Parent-approved local narration will appear here when ready.',
    };
  }

  return null;
}

function getRawVoiceOptions(story: StoryLike): unknown[] {
  if (Array.isArray(story.audioVoiceOptions)) return story.audioVoiceOptions;
  if (Array.isArray(story.audioMetadata?.voiceOptions)) return story.audioMetadata.voiceOptions;
  return [];
}

export function getStoryAudioAvailability(story: StoryLike): StoryAudioAvailability {
  const hasAudioMetadata = Boolean(story.audioMetadata) || typeof story.audioAvailable === 'boolean' || Array.isArray(story.audioVoiceOptions);
  const hasLocalReadyEvidence = story.audioAvailable === true || story.audioMetadata?.audioAvailable === true;

  if (hasLocalReadyEvidence) {
    return 'local_ready';
  }

  return hasAudioMetadata ? 'metadata_only' : 'unavailable';
}

export function getStoryAudioVoiceOptions(story: StoryLike): StoryAudioVoiceOption[] {
  return getRawVoiceOptions(story)
    .map((option, index) => normalizeVoiceOption(option, index))
    .filter((option): option is StoryAudioVoiceOption => Boolean(option));
}

export function getDefaultStoryAudioMode(story: StoryLike): StoryAudioMode {
  return getStoryAudioAvailability(story) === 'local_ready' ? 'listen' : 'read_myself';
}

export function getStoryAudioTrustNote(story: StoryLike): string {
  const availability = getStoryAudioAvailability(story);
  if (availability === 'local_ready') {
    return 'Audio is locally available on this device and does not require a microphone.';
  }
  if (availability === 'metadata_only') {
    return 'Audio metadata is prepared. Parent-approved local audio will appear when ready.';
  }
  return 'Audio is coming soon. You can continue with calm shared reading now.';
}

export function shouldShowAudioEntryPoint(story: StoryLike): boolean {
  return getStoryAudioAvailability(story) !== 'unavailable';
}

export function shouldSuppressMascotDuringAudio(story: StoryLike): boolean {
  const sacredRespectLevel = story.sacredRespectLevel;
  if (!sacredRespectLevel) return true;
  return ['deity_focal', 'shloka_or_prayer', 'ritual_context'].includes(sacredRespectLevel);
}

export function getStoryAudioUnavailableReason(story: StoryLike): string | null {
  const availability = getStoryAudioAvailability(story);
  if (availability === 'local_ready') return null;
  if (availability === 'metadata_only') return 'Listen option will appear here when parent-approved audio is ready.';
  return 'Audio coming soon';
}

export function buildStoryAudioPlayerState(story: StoryLike): StoryAudioPlayerState {
  const availability = getStoryAudioAvailability(story);
  const voiceOptions = getStoryAudioVoiceOptions(story);
  const defaultMode = getDefaultStoryAudioMode(story);
  const canPlayNow = availability === 'local_ready';

  return {
    storyId: story.id ?? story.slug ?? 'unknown_story',
    storySlug: story.slug ?? 'unknown-story',
    storyTitle: story.title ?? 'Story',
    availability,
    defaultMode,
    voiceOptions,
    selectedVoiceOptionId: voiceOptions[0]?.id ?? null,
    canPlayNow,
    unavailableReason: canPlayNow ? null : getStoryAudioUnavailableReason(story),
    trustNote: getStoryAudioTrustNote(story),
    mascotSuppressed: shouldSuppressMascotDuringAudio(story),
    noMicRequired: true,
    accessibilityLabel: canPlayNow ? 'Story audio is available to listen.' : 'Story audio is not playable yet.',
    accessibilityHint: canPlayNow
      ? 'Choose a narration mode and start when ready.'
      : 'Read myself mode is ready now. Listen option will appear when local audio is ready.',
  };
}
