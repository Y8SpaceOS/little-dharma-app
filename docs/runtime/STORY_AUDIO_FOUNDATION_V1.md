# PR #130: Story Audio Foundation v1

## PR title and purpose
PR #130 establishes Story Audio Foundation v1 as a local-first, privacy-safe architecture layer for future story narration without introducing playback dependencies, network services, microphones, or telemetry.

## Roadmap alignment
Story Audio Foundation v1 was originally planned as roadmap PR #127 and is now implemented as PR #130 after governance insertions in PR #115–117.

## Why Story Audio Foundation follows Story Completion Moment
Story Completion Moment v1 (PR #129) stabilized end-of-story sacred and parent-child UX. This audio foundation now extends the story detail experience safely with metadata-first readiness while preserving completion behavior.

## Audio product goal
Prepare safe foundations for bedtime listening, car listening, and parent-child listening while preserving “Read myself” as the default and introducing future “Listen”/“Read together” paths.

## Audio foundation scope
- Audio model primitives and runtime-safe player state.
- Availability detection from local story metadata fields.
- Voice option metadata normalization.
- Sacred respect-based mascot suppression rules.
- Child-safe, non-playing readiness UI copy.

## Out of scope
- No Ramayana audio files or any content binaries.
- No TTS generation, no ElevenLabs/API integration.
- No backend/auth/cloud sync/payment/analytics/telemetry.
- No microphone or recording permissions.
- No autoplay, no background playback, no progress tracking.

## Audio model
Model version: `story-audio-foundation-v1`.

Modes:
- `read_myself`
- `listen`
- `read_together`

Availability states:
- `unavailable`
- `metadata_only`
- `local_ready`

## Audio availability rules
- Read from existing story fields where present: `audioMetadata`, `audioAvailable`, `audioVoiceOptions`.
- `local_ready` only when explicit local-ready evidence exists (`audioAvailable === true` from story or metadata).
- `metadata_only` when audio metadata exists but local-playable evidence is absent.
- `unavailable` when no audio metadata exists.

## Voice option metadata rules
- Parse both legacy/simple string options and object options.
- Normalize to stable fields: `id`, `label`, `voiceFamily`, `localeHint`, `isAvailable`, `trustNote`.
- Keep `isAvailable` conservative for foundation stage.

## Default mode rules
- Default mode is `read_myself` unless availability is `local_ready`.
- No autoplay behavior is introduced.

## Player state rules
- Build a safe player state for UI wiring only.
- `canPlayNow` is true only in `local_ready`.
- `noMicRequired` is always true.
- Accessibility label/hint is included for non-playing and future playable states.

## Sacred respect and mascot suppression rules
Mascot is suppressed during audio for sacred contexts:
- `deity_focal`
- `shloka_or_prayer`
- `ritual_context`
- Missing/unknown `sacredRespectLevel`

## Privacy/no-microphone rules
- No microphone usage or permission requests.
- No recording logic.
- No telemetry or behavioral tracking.

## Local-first/no-backend assumptions
- Foundation is metadata/local-state driven.
- No network calls, remote streaming, or API-key integration.

## Runtime integration status
A minimal non-playing readiness panel is integrated on `app/story/[slug].tsx` detail stage. It shows:
- “Audio coming soon”
- “Read myself”
- readiness trust copy
- “No microphone needed”

## What this PR changes
- Adds `src/services/storyAudioFoundationService.ts`.
- Adds `scripts/validate-story-audio-foundation-v1.mjs`.
- Adds runtime documentation for Story Audio Foundation v1.
- Adds package script for validator execution.
- Adds minimal non-playing story detail audio readiness panel.

## What this PR does not do
- Does not add playable controls where local-ready evidence is absent.
- Does not alter Runtime Story Resolver v2 behavior.
- Does not alter Story Completion Moment persistence/write path.
- Does not change Story World doorway output/order.

## Follow-up recommendations for PR #131 and PR #132
- **PR #131: Ramayana Audio v1** — add parent-approved local narration assets and controlled playback wiring for Ramayana content only when compliance gates pass.
- **PR #132: Bhagavad Gita for Children Editorial Framework v1** — define editorial, authenticity, and sacred review framework for Gita-for-children content development.

## Final PR #130 readiness statement
PR #130 is ready for merge once typecheck/lint/tests and existing plus new validators pass in CI, with known warnings documented if any legacy visual validators are outside this sprint gate.
