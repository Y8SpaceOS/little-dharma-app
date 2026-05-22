# PR #131: Ramayana Audio v1

## PR title and purpose
PR #131 introduces Ramayana Audio v1 as metadata-only readiness for Ramayana Journey Pack 1, aligned with Story Audio Foundation v1 and without enabling playback.

## Roadmap alignment
- Approved roadmap sprint target: Ramayana Audio v1.
- Renumbering context: original roadmap position PR #128, now executed as PR #131 after inserted governance sprints PR #115–117.

## Why Ramayana Audio follows Story Audio Foundation
Ramayana Audio v1 uses the Story Audio Foundation v1 policy model so trust copy, no-microphone guarantees, and sacred mascot suppression remain centralized and consistent.

## Audio content scope
- Scope is strictly metadata/readiness for the five Ramayana Pack 1 stories.
- No generated audio, no remote TTS, no streaming, no backend integrations.

## Ramayana Pack 1 coverage
All 5 Ramayana Pack 1 stories are covered with `metadata_ready` status and `canPlayNow: false`.

## Voice option metadata
Each covered story includes two future narration metadata options:
- `warm-indian-female`
- `warm-indian-male`

## Narration script status
Narration script readiness is tracked per story and currently set to `qa_ready` for all five stories.

## Audio availability rules
- `audioStatus: metadata_ready` means metadata is present and listen intent is modeled.
- `audioStatus: local_ready` must not be used unless a verified local asset exists.
- `canPlayNow` remains false for this sprint.

## Local asset policy
- `localAssetKey` is null for this sprint.
- No local binary audio assets are introduced in PR #131.

## Playback status
Playback remains metadata-only in PR #131. Child experience defaults to read-myself mode with future listen readiness metadata.

## Sacred respect rules
Sacred narration policy requires calm devotional tone and forbids irreverent overlays for sacred/deity-focal contexts.

## Mascot suppression rules
Story Audio Foundation mascot suppression behavior remains unchanged and conservative for:
- `deity_focal`
- `shloka_or_prayer`
- `ritual_context`
- missing/unknown sacred respect level

## Parent trust and no-microphone rules
- No microphone or recording permission is required.
- Parent trust note explicitly states local-first, parent-approved availability expectations.

## Local-first/no-backend assumptions
- No backend/auth/cloud sync/payment/telemetry/analytics is introduced.
- No API keys or TTS provider integrations are introduced.

## Relationship to Story Audio Foundation v1
Ramayana Audio v1 extends Story Audio Foundation by providing the first controlled tradition-specific metadata pack while preserving `metadata_only` behavior until local assets exist.

## Relationship to Ramayana Journey Pack 1
This PR augments Ramayana Journey Pack 1 content records with consistent voice and trust metadata while preserving existing story IDs, slugs, order, and `qa_ready` editorial status.

## What this PR changes
- Adds a dedicated Ramayana audio metadata adapter and coverage summary.
- Enriches Ramayana Pack 1 story `audioMetadata` voice options and voice style labels.
- Adds a dedicated Ramayana Audio v1 validator and package script.
- Adds this runtime documentation.

## What this PR does not do
- No playable audio files.
- No playback engine changes.
- No route additions.
- No Story World doorway ordering changes.
- No story completion behavior changes.
- No microphone/recording permissions.
- No API/TTS/ElevenLabs integrations.

## Follow-up recommendations for PR #132 and PR #133
- PR #132: Bhagavad Gita for Children Editorial Framework v1.
- PR #133: Mahabharata Editorial Framework v1.

## Final PR #131 readiness statement
PR #131 is ready as metadata-first Ramayana audio readiness, preserving sacred respect and parent trust constraints while deferring playback to future local-asset-enabled work.
