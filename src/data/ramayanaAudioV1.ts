import type { ContentStatus, Story } from '@/types/contentModel';

export const ramayanaAudioV1ModelVersion = 'ramayana-audio-v1';

export type RamayanaAudioStatus = 'metadata_ready' | 'local_ready' | 'unavailable';

export type RamayanaNarrationScriptStatus = ContentStatus;
export type RamayanaVoiceOptionId = 'warm-indian-female' | 'warm-indian-male';

export type RamayanaAudioVoiceOption = {
  id: RamayanaVoiceOptionId;
  label: string;
  localeHint: 'en-IN';
  style: 'warm';
  genderPresentation: 'female' | 'male';
};

export type RamayanaStoryAudioMetadata = {
  storyId: string;
  storySlug: string;
  audioStatus: RamayanaAudioStatus;
  canPlayNow: boolean;
  noMicRequired: true;
  voiceOptions: RamayanaAudioVoiceOption[];
  defaultMode: 'read_myself';
  narrationScriptStatus: RamayanaNarrationScriptStatus;
  sacredAudioNotes: string;
  parentTrustNote: string;
  estimatedNarrationMinutes: number;
  localAssetKey: string | null;
};

const sharedVoiceOptions: RamayanaAudioVoiceOption[] = [
  { id: 'warm-indian-female', label: 'Warm Indian Female', localeHint: 'en-IN', style: 'warm', genderPresentation: 'female' },
  { id: 'warm-indian-male', label: 'Warm Indian Male', localeHint: 'en-IN', style: 'warm', genderPresentation: 'male' },
];

const sharedParentTrustNote = 'No microphone is required. Audio remains metadata-only until parent-approved local narration assets are added on device.';

export const ramayanaAudioV1StoryAudioMetadata: RamayanaStoryAudioMetadata[] = [
  {
    storyId: 'ramayana-pack1-ramas-kind-promise', storySlug: 'ramas-kind-promise', audioStatus: 'metadata_ready', canPlayNow: false, noMicRequired: true, voiceOptions: sharedVoiceOptions, defaultMode: 'read_myself', narrationScriptStatus: 'qa_ready', sacredAudioNotes: 'Keep devotional tone calm and respectful; avoid playful overlays during sacred mentions.', parentTrustNote: sharedParentTrustNote, estimatedNarrationMinutes: 6, localAssetKey: null,
  },
  {
    storyId: 'ramayana-pack1-sitas-garden-of-care', storySlug: 'sitas-garden-of-care', audioStatus: 'metadata_ready', canPlayNow: false, noMicRequired: true, voiceOptions: sharedVoiceOptions, defaultMode: 'read_myself', narrationScriptStatus: 'qa_ready', sacredAudioNotes: 'Preserve reverent pacing around Sita-focused moments and ritual language.', parentTrustNote: sharedParentTrustNote, estimatedNarrationMinutes: 6, localAssetKey: null,
  },
  {
    storyId: 'ramayana-pack1-lakshmanas-loving-service', storySlug: 'lakshmanas-loving-service', audioStatus: 'metadata_ready', canPlayNow: false, noMicRequired: true, voiceOptions: sharedVoiceOptions, defaultMode: 'read_myself', narrationScriptStatus: 'qa_ready', sacredAudioNotes: 'Narration should remain gentle and service-centered; avoid gamified urgency cues.', parentTrustNote: sharedParentTrustNote, estimatedNarrationMinutes: 7, localAssetKey: null,
  },
  {
    storyId: 'ramayana-pack1-hanuman-listens-before-he-leaps', storySlug: 'hanuman-listens-before-he-leaps', audioStatus: 'metadata_ready', canPlayNow: false, noMicRequired: true, voiceOptions: sharedVoiceOptions, defaultMode: 'read_myself', narrationScriptStatus: 'qa_ready', sacredAudioNotes: 'Deity-focal narration must avoid mascot chatter and maintain sacred reverence.', parentTrustNote: sharedParentTrustNote, estimatedNarrationMinutes: 7, localAssetKey: null,
  },
  {
    storyId: 'ramayana-pack1-a-bridge-built-together', storySlug: 'a-bridge-built-together', audioStatus: 'metadata_ready', canPlayNow: false, noMicRequired: true, voiceOptions: sharedVoiceOptions, defaultMode: 'read_myself', narrationScriptStatus: 'qa_ready', sacredAudioNotes: 'Keep collective-seva language warm, non-competitive, and respectful.', parentTrustNote: sharedParentTrustNote, estimatedNarrationMinutes: 8, localAssetKey: null,
  },
];

export function getRamayanaAudioMetadataByStoryId(storyId: string): RamayanaStoryAudioMetadata | null {
  return ramayanaAudioV1StoryAudioMetadata.find((entry) => entry.storyId === storyId) ?? null;
}

export function getRamayanaAudioMetadataBySlug(slug: string): RamayanaStoryAudioMetadata | null {
  return ramayanaAudioV1StoryAudioMetadata.find((entry) => entry.storySlug === slug) ?? null;
}

export function applyRamayanaAudioMetadata(story: Story): Story {
  const metadata = getRamayanaAudioMetadataByStoryId(story.id) ?? getRamayanaAudioMetadataBySlug(story.slug);
  if (!metadata) return story;

  return {
    ...story,
    audioMetadata: {
      ...story.audioMetadata,
      audioAvailable: metadata.audioStatus === 'local_ready' && Boolean(metadata.localAssetKey),
      voiceOptions: metadata.voiceOptions.map((option) => option.id),
      narrationScriptStatus: metadata.narrationScriptStatus,
      preferredVoiceStyle: 'warm-indian',
      pacing: story.audioMetadata.pacing,
      noMicRequired: true,
    },
  };
}

export const ramayanaAudioV1CoverageSummary = {
  totalStories: ramayanaAudioV1StoryAudioMetadata.length,
  metadataReadyCount: ramayanaAudioV1StoryAudioMetadata.filter((entry) => entry.audioStatus === 'metadata_ready').length,
  localReadyCount: ramayanaAudioV1StoryAudioMetadata.filter((entry) => entry.audioStatus === 'local_ready').length,
  unavailableCount: ramayanaAudioV1StoryAudioMetadata.filter((entry) => entry.audioStatus === 'unavailable').length,
  playableNowCount: ramayanaAudioV1StoryAudioMetadata.filter((entry) => entry.canPlayNow).length,
};
