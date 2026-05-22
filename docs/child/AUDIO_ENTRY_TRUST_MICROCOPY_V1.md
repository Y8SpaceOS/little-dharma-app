# Audio Entry Trust Microcopy v1

## PR title and purpose
PR #145: Audio Entry Trust Microcopy v1 adds gentle, child-safe trust language to the existing story audio entry area so children and families understand that audio is calm, optional, and handled with care.

## Roadmap alignment
This work follows PR #144 Completion Trust Microcopy v1 in the approved trust-microcopy sequence (PR #141 → PR #145).

## Why Audio Entry Trust Microcopy follows Completion Trust Microcopy
After calming story-detail and completion moments, the next trust step is the story audio entry point where expectations must remain clear: reading is always okay, listening is optional, and no microphone or recording is used.

## Audio entry trust microcopy goal
Provide short, warm copy in the audio placeholder area that reassures children and parents without changing audio behavior.

## What this microcopy is
- Static, local-first trust text.
- Child-facing where appropriate, parent-safe where needed.
- Focused on optional listening, read-myself confidence, and calm family usage.

## What this microcopy is not
- Not playback implementation.
- Not TTS, APIs, streaming, recording, microphone, or permissions work.
- Not analytics, tracking, backend, auth, or sharing functionality.

## Child-facing audio copy principles
- Keep copy warm, short, and non-technical.
- Confirm reading independently is always welcomed.
- Preserve sacred storytelling tone and calm choice.

## Optional listening copy rules
- Must clearly communicate that listening is optional.
- Must not pressure immediate audio action.

## Read-myself copy rules
- Must explicitly state: “Read myself is always okay.”
- Must reinforce agency without competition.

## No microphone/recording copy rules
- Must explicitly state: “No microphone or recording.”
- Must avoid legal-heavy language while preserving trust clarity.

## Family listening/reading copy rules
- Must welcome reading/listening with family.
- Must stay invitation-based and gentle.

## Sacred care copy rules
- Must communicate stories are shared with care.
- Must preserve respectful handling of sacred story moments.

## Coming-soon audio copy rules
- For unavailable or metadata-only audio, must state audio will arrive gently when ready.
- Must not imply current playback availability.

## Parent-approved audio copy rules
- Must affirm parent-approved calm audio in non-CTA language.
- Must not use “Play,” “Listen now,” or other active playback claims.

## UI integration status
Integrated in `app/story/[slug].tsx` as a minimal read-only trust block inside the existing audio panel area with no new controls.

## No backend/no tracking assumptions
No backend/auth/cloud sync/payment/API work is introduced.
No analytics/telemetry/tracking implementation is introduced.

## No playback/no TTS/no mic assumptions
No playback logic is added.
No TTS, audio APIs, microphone access, recording, or permissions are introduced.

## No hard gamification rules
Copy and implementation avoid XP, coins, streaks, leaderboard, rank, score pressure, rewards, badges, or unlock mechanics.

## Audio behavior preservation rules
No changes to Story Audio Foundation behavior, audio availability resolution, or audio readiness state computation.

## Story runtime preservation rules
No changes to runtime story availability, resolver behavior, reader panel behavior, completion writes, or journey progress writes.

## Relationship to Story Audio Foundation v1
This microcopy layer reads existing audio state and presents trust text only; it does not modify foundation logic.

## Relationship to Ramayana Audio v1
This work remains compatible with Ramayana Audio v1 metadata and does not alter audio seed/data behavior.

## Relationship to Completion Trust Microcopy v1
This sprint extends the trust-microcopy sequence by bringing the same calm, non-competitive trust approach to audio entry.

## What this PR changes
- Adds `audioEntryTrustMicrocopyService` with versioned trust copy model and helper exports.
- Adds minimal audio-entry trust rendering in existing story route audio panel area.
- Adds validation script and package command for PR #145 constraints.
- Adds this documentation artifact.

## What this PR does not do
- Does not add playback, TTS, audio APIs, mic/recording, permissions, backend, sharing, analytics, telemetry, new routes, or runtime behavior changes.

## Follow-up recommendations for PR #146 and PR #147
Roadmap follow-ups remain:
- PR #146: Parent Reflection Prompt Copy v1
- PR #147: Parent Weekly Summary Copy Polish v1

Source of naming: current sprint brief/roadmap sequence used for PR #145 implementation.

## Final PR #145 readiness statement
PR #145 is ready once typecheck, lint, test, and all required validators (including `validate:audio-entry-trust-microcopy-v1`) pass.
