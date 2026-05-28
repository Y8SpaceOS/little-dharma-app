# PR #176: Story World Browse v1 — Product Foundation

## What this includes
- A child-facing **Story World** browse surface with warm sections for:
  - Krishna Stories
  - Ramayana Journey
  - Ganesha Stories
  - Hanuman Stories
  - Bedtime Stories
  - Values Stories
  - Festival Stories
  - Bhagavad Gita for Children
  - Mahabharata Stories
  - Shloka & Meaning
- Registry-powered section and card rendering using canonical content registry stories, packs, and journeys.
- Child-friendly cards with graceful metadata fallbacks:
  - title
  - short title / summary fallback
  - section/world label
  - age band
  - duration
  - primary value
  - journey tag (if journey-linked)
  - audio metadata indicator
  - local-first trust hint
- Gentle empty states for sections with no stories.

## What this intentionally does not include
- No runtime eligibility promotion or resolver behavior changes.
- No runtime_ready promotions.
- No audio playback, TTS, microphone, voice recording, chanting, or pronunciation scoring.
- No backend dependencies.
- No gamification mechanics (XP/coins/streaks/rankings/leaderboards).
- No paid locks.

## Registry metadata usage
- Uses `contentRegistryStories` as the source for browse cards.
- Uses `contentRegistryStoryPacks` for category/source context.
- Uses `contentRegistryJourneys` to derive journey tags for cards.
- Keeps all browsing local-first and read-only.

## Sacred-content guardrails
- Child-facing copy remains warm and respectful.
- Uses "Story World" phrasing for child-facing experience.
- Avoids caricature or trivialized sacred framing.

## Next recommended PR
- Story World Browse v1.1: section-level curation controls (still registry-first), optional parent-quality badges, and refined visual hierarchy for mixed runtime-ready vs coming-soon stories.
