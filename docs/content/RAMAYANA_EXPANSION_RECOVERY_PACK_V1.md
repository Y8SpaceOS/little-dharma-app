# PR #159: Ramayana Expansion Recovery Pack v1

## PR title and purpose
Add a recovery-aligned Ramayana content expansion that increases indexed volume while preserving existing runtime/audio gating behavior.

## Roadmap alignment
Planned / Recovery-aligned / Content sprint aligned with PR #154–#158.

## Why Ramayana Expansion follows Audio-Ready Script Gate v1
This pack includes audio-script candidates that satisfy required audioScript metadata and sacred-pronunciation care without adding playback/TTS/recording integrations.

## Ramayana pack goal
Deliver 100 indexed Ramayana story experiences with staged quality readiness.

## What this pack adds
100 indexed stories, 40 QA-staged runtime candidates with complete story panels, and 25 audio-script-ready candidates mapped to canonical Ramayana Journey / ramayana_journey.

## What this pack does not add
No route/UI/backend/telemetry/sharing/notification/AI/audio-playback changes.

## Story count summary
## Indexed story experience count
100
## Runtime-ready candidate count
40
## Audio-script-ready candidate count
25

## Ramayana Journey mapping
All stories map to canonical `journeyId: ramayana-journey-pack-1` with unique expansion journeyOrder values for this pack.

## Story World category mapping
All stories map to `primaryCategoryId: ramayana_journey` and secondary `ramayana_journey`.

## Age band strategy
Age bands use child-safe mixed coverage: 3-5, 6-8, and 9-12 with 6-8 as recommended center.

## Values strategy
Primary/secondary values rotate across dharma, kindness, patience, service, truthfulness, devotion, humility, courage.

## Sacred respect strategy
Sacred characters and concepts are handled with devotional respect, no parody, no trivialization.

## Violence/intensity handling
Non-graphic, non-revenge, low-intensity retelling language.

## Parent note strategy
Runtime candidates include story-specific parentNote.sourceContext and discussion prompts tied to each arc moment.

## Reflection prompt strategy
Runtime candidates include reflection prompts tied to daily family practice.

## Audio script strategy
25 candidates include story-specific narration, voice direction, pronunciation, and pacing notes.

## Pronunciation strategy
Explicit pronunciation guidance includes Rama, Sita, Lakshmana, Hanuman, Ayodhya, Vishwamitra, Janaka, Mithila, Dandaka, Kishkindha, Lanka, Ravana, Vibhishana.

## Runtime gate compatibility
Runtime eligibility remains gate-driven; candidates stay `qa_ready` until quality and resolver gates approve runtime promotion.

## Audio gate compatibility
Audio candidates follow Audio-Ready Script Gate v1 blocking/quality expectations.

## Bulk import pipeline compatibility
Field shape includes category mapping, journey mapping, readiness intents, and metadata compatible with pipeline checks.

## Story Experience Index compatibility
Stories include stable IDs, categories, values, journey mapping, and readiness statuses for index accounting.

## Content Scale Recovery Control Tower impact
Delta contribution for PR #207 planning: +100 indexed, +40 runtime candidates, +25 audio candidates.

## No backend/no tracking assumptions
No backend/network/API/telemetry/tracking additions.

## No notifications/no sharing assumptions
No reminders/notifications/sharing/email/SMS/WhatsApp/social mechanics.

## No AI personalization assumptions
No AI personalization features introduced.

## No microphone/no recording assumptions
No microphone, recording, or child voice capture flows.

## No TTS/no ElevenLabs/no voice API assumptions
No TTS, ElevenLabs, or voice API integration.

## No reward/gamification assumptions
No XP, streaks, coins, ranks, rewards, unlocks, or leaderboards.

## Runtime behavior preservation rules
No runtime resolver behavior changes.

## Story completion behavior preservation rules
No story completion persistence helper changes.

## Journey progress behavior preservation rules
No journey progress persistence behavior changes.

## Story reader/audio playback preservation rules
No story reader or audio playback behavior changes.

## What this PR changes
Adds Ramayana expansion content pack, docs, and sprint validator.

## What this PR does not do
Does not modify routes, UI, runtime resolver, persistence behavior, or integrations.

## Follow-up recommendations for PR #160 and PR #161
- PR #160: Krishna Childhood Expansion Recovery Pack v1
- PR #161: Ganesha + Hanuman Expansion Pack v1

## Final PR #159 readiness statement
Pack is structured for content-only recovery progression with gate-compatible readiness staging.

## PR #207 target alignment
Contributes the planned delta: +100 indexed, +40 runtime-ready candidates, +25 audio-script-ready candidates.
