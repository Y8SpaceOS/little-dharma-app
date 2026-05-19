# Ganesha Story Pack v1 (Sprint 75)

## Product objective
Create the first child-safe, parent-trusted **Ganesha Story Pack v1** foundation for Little Dharma, using Sprint 74 Ganesha World architecture and Ganesha Wisdom Journey framing.

## Pack framing and structure
- **Story World framing:** warm, browse-friendly Ganesha story corners for children.
- **Ganesha Wisdom Journey framing:** sequence-aware metadata for future guided path usage.
- **Local-first posture:** planning/content artifacts only; no backend/auth/cloud/CMS rollout.

## Story selection for v1 foundation
This sprint establishes 8 foundation stories from the Sprint 74 candidate pool:
1. The Lamp of Beginnings
2. The Great Listening Ears
3. Kind Steps on the Path
4. The Flower of Focus
5. The Gratitude Bowl
6. The Honest Word
7. The Friendship Bridge
8. The Patient River

## Child safety and age-aware editorial principles
- Keep deity framing reverent, warm, non-trivialized, and non-fear-based.
- Keep conflict gentle and emotionally safe.
- Use values-first retellings suitable for age bands 3–5, 6–8, and selected 9–12 adaptations.
- No graphic violence, no shame-heavy moralising, no sectarian superiority, no caste-coded messaging.
- Luvlu helper language (if used) stays light-touch, brief, and optional.

## Story metadata model alignment
Each v1 row includes:
- `storyId`, `title`, `childFacingTitle`
- `worldSlug`, `journeySlug`, `proposedOrder`
- `ageBands`, `primaryValue`, `secondaryValues`, `characters`
- `sourceTradition`, `sensitivityLevel`, `editorialGuardrail`
- `parentNoteRequired`, `parentNoteSummary`
- `readinessStatus`

## Parent notes expectations
- Parent notes stay concise, practical, and trust-first.
- Notes clarify symbolism or sensitive framing where needed.
- Notes include suggested at-home reflection prompt in plain language.

## Editorial guardrails for all v1 stories
- Respect source-tradition context and avoid flattening sacred themes.
- Avoid miracle sensationalism and fear-pressure rhetoric.
- Keep repair and responsibility language gentle after mistakes.
- Preserve warmth and belonging language across home/school/friend contexts.

## QA and planning artifacts in Sprint 75
- `docs/GANESHA_STORY_PACK_V1_QA.md`
- `docs/content/ganesha-story-pack-v1.csv`
- `docs/content/ganesha-story-pack-v1-qa.csv`
- `docs/content/ganesha-story-pack-v1-parent-notes.csv`
- `docs/content/ganesha-story-pack-v1-editorial-guardrails.csv`

## Explicit non-scope
- No backend/auth/cloud sync/CMS/analytics/telemetry.
- No paid beta, external beta, App Store submission, or monetisation.
- No audio playback infrastructure, microphone permission, or recording.
- No XP, coins, streaks, rankings, leaderboards, or hard gamification.
