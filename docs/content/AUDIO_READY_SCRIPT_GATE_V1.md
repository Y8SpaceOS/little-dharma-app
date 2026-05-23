# PR #158: Audio-Ready Script Gate v1

## PR title and purpose
Define a strict, measurable, read-only audio-ready script gate contract for future bulk content PRs.

## Roadmap alignment
Recovery-aligned after PR #154, #155, #156, and #157; supports PR #207 target planning.

## Why Audio-Ready Script Gate follows Runtime-Ready Story Gate v1
Runtime-ready gating established story structure/runtime prerequisites first; audio-ready gating now evaluates narration metadata quality safely.

## Audio-ready script gate goal
Identify whether a story can be counted as an audio-script-ready candidate without changing runtime behavior.

## What this gate is
A dry-run validator + decision model + report contract.

## What this gate is not
Not playback, not TTS, not recording, not runtime promotion, not publishing.

## Audio-ready script definition
A story with required narration, voice direction, pronunciation, pacing, and sacred-care metadata, with no fail-level policy violations.

## Audio-ready versus runtime-ready
Runtime-ready is prerequisite context; audio-ready remains separate and does not alter runtime availability.

## Audio-ready versus playback-ready
Audio-ready script metadata is not playable audio.

## Audio-ready versus published-local
Published-local remains out of scope.

## Required audio script fields
storyId, title, runtime readiness context/intent, audioScript.narrationScript, audioScript.voiceDirection, audioScript.pronunciationNotes, audioScript.pacingNotes, sourceTradition, ageBands, primaryValue, and sacredRespectNotes when sacred content appears.

## Narration script rules
Must be present, not placeholder text, long enough for real narration pass, and must avoid UI-only instructions, backend/sharing/notification/analytics language, quiz/score framing, and sacred trivialization.

## Voice direction rules
Must be present; warm parent-trusted child-safe tone; no celebrity imitation, deity impersonation, microphone/recording, or child voice capture requirements.

## Pronunciation note rules
Must be present; sacred names and Sanskrit/shloka/mantra terms require careful guidance; no mock/casual treatment.

## Pacing note rules
Must be present; bedtime/calm stories should include slow/calm guidance; energetic stories avoid overstimulation; no race/streak/speed framing.

## Sacred care audio rules
Sacred references require respect; no over-cartooning, no deity impersonation, no prank/comedy framing, no Luvlu-as-deity narration, no Luvlu reward token framing.

## Runtime dependency rules
Audio scripts do not make non-runtime stories runtime-ready; no bypass of Runtime Story Resolver v2; counting can be separate while exposure still depends on runtime gates.

## Blocked audio script rules
Blocked on missing required fields, placeholder audio text, celebrity/deity impersonation, microphone/recording/child-voice capture, backend/analytics/notification/sharing language, hard gamification, Story Library child-facing wording, exact child age usage, sacred trivialization, speed/race/streak framing.

## Gate decision model
audio_script_ready_candidate, runtime_ready_but_audio_needed, blocked, needs_pronunciation_review, needs_pacing_review, needs_sacred_care_review.

## Gate report structure
modelVersion, storyId, title, currentStatus, decision, issues, narrationScriptCheck, voiceDirectionCheck, pronunciationCheck, pacingCheck, sacredCareCheck, runtimeDependencyCheck, counterImpact, sourceFiles, limitations.

## Counter impact reporting
Tracks audioScriptReadyDelta, runtimeReadyButAudioNeededDelta, blockedDelta, needsPronunciationReviewDelta, needsPacingReviewDelta, needsSacredCareReviewDelta, pr207AudioReadyTarget.

## Relationship to Story Experience Index Model v1
Consumes index-compatible story metadata signals.

## Relationship to Bulk Content Import Pipeline v2
Validates import-input compatible audioScript fields.

## Relationship to Runtime-Ready Story Gate v1
Uses runtime readiness context as prerequisite only.

## Relationship to Content Scale Recovery Control Tower v1
Supplies auditable counters/decision outputs for recovery tracking.

## Relationship to Story Audio Foundation v1
Extends metadata governance; does not alter audio foundation behavior.

## Relationship to future PR #159–170 content packs
PR #159+ should run this gate before counting scripts toward PR #207.

## No backend/no tracking assumptions
No backend/auth/cloud/payment/tracking/telemetry implementation.

## No notifications/no sharing assumptions
No notification, reminder, email, SMS, WhatsApp, invite, referral, or sharing implementation.

## No AI personalization assumptions
No AI personalization added.

## No microphone/no recording assumptions
No mic access, recording, or child voice capture flows.

## No TTS/no ElevenLabs/no voice API assumptions
No TTS, ElevenLabs, voice synthesis, or voice API integration.

## No reward/gamification assumptions
No reward mechanics or gamification added.

## Runtime behavior preservation rules
No runtime resolver/state mutation or availability change.

## Story completion behavior preservation rules
No completion persistence or marking changes.

## Journey progress behavior preservation rules
No journey progress persistence changes.

## Story reader/audio playback preservation rules
No story reader changes and no playback implementation changes.

## What this PR changes
Adds gate types, service, validator, package script, and documentation.

## What this PR does not do
Adds no stories/packs/scripts/audio files and does not promote any story to audio-ready.

## Follow-up recommendations for PR #159 and PR #160
- PR #159: Ramayana Expansion Recovery Pack v1 — include complete audioScript metadata and pass this gate.
- PR #160: Krishna Childhood Expansion Recovery Pack v1 — include sacred pronunciation and pacing completeness and pass this gate.

## Final PR #158 readiness statement
PR #158 introduces the Audio-Ready Script Gate v1 contract and dry-run validator safely, with no runtime, UI, route, completion, journey, or playback behavior changes.

## PR #207 target alignment
This gate provides strict counting eligibility toward PR #207 target of **350+ audio-ready scripts** by requiring complete non-placeholder narration metadata and policy-safe audio guidance.
