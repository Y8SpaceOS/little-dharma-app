# Little Dharma PRD v1

## Product summary

Little Dharma is a local-first React Native / Expo app for families. It is a warm Hindu spiritual Story World built around stories, Dharma Journeys, gentle audio readiness, parent trust, cultural respect, and values-led learning.

The app is not a generic content library. It should feel like a world: warm colors, clear cards, simple rituals, gentle progress, and respectful storytelling.

## Core principles

- Use `Story World`, not `Story Library`, in child-facing language.
- Keep the core experience local-first.
- Parent-facing surfaces must feel safe, respectful, and privacy-safe.
- Sacred stories must be warm, restrained, and culturally respectful.
- No hard gamification: no XP, coins, streaks, ranks, leaderboards, or addictive reward loops.
- Gentle progress is allowed through diyas, flowers, blessings, treasures, and journey progress.
- Luvlu is a subtle peacock helper. Luvlu is not the logo, not a deity, not a reward token, and not a sacred authority.
- Do not add backend, analytics, sharing, notifications, microphone, recording, TTS, voice API, or AI personalization without explicit approval.

## Primary users

The child experience should support story discovery, reading, parent-child reading, bedtime routines, and calm devotional moments. The parent experience should explain what the child is reading, which values are covered, and how to discuss stories at home.

## Core surfaces

### Story World

Story World is the discovery surface. Key categories include Krishna Stories, Ramayana Stories, Ganesha Stories, Hanuman Stories, Bedtime Stories, Values Stories, Festival Stories, Bhagavad Gita for Children, Mahabharata child-safe stories, and Panchatantra/Hitopadesha values stories.

### Dharma Journeys

Dharma Journeys are structured sequences. Priority journeys include Ramayana, Krishna Childhood, Ganesha Wisdom, Hanuman, Festival, Bhagavad Gita for Children, Mahabharata Child-Safe, Bedtime, Values, Shloka, Panchatantra/Hitopadesha, Upanishad Ideas for Kids, and Saints of India.

### Story Reader

The reader should show real story panels. Runtime candidates must be actual micro-retellings with people, places, events, and values. Weak template shells must not be counted as real progress.

### Audio readiness

Audio is important for bedtime and low-screen moments. Current scope is audio metadata and audio-script readiness only. Do not add playback, generated voice implementation, external voice API, audio files, microphone, or recording without approval.

### Parent dashboard

The parent dashboard should become useful. It should show reading progress, journey progress, values covered, and conversation prompts. It should avoid noisy gamification.

## Content model

Stories should include stable IDs, title, shortTitle, summary, sourceTradition, storyPackId, primaryCategoryId, secondaryCategoryIds, journeyId, journeyOrder, ageBands, durationMinutes, primaryValue, secondaryValues, characters, status, panels, parentNote, reflectionPrompt, sacredRespectNotes, audioScript, and audioMetadata where applicable.

Dharma Journeys should include id, title, childFacingTitle, description, sourceTradition, recommendedAgeBands, totalStories, estimatedCompletionWeeks, and status.

## Current recovery track

- PR #154: Content Scale Recovery Control Tower v1.
- PR #155: Story Experience Index Model v1.
- PR #156: Bulk Content Import Pipeline v2.
- PR #157: Runtime-Ready Story Gate v1.
- PR #158: Audio-Ready Script Gate v1.
- PR #159: Ramayana Expansion Recovery Pack v1.
- PR #160: Vrindavan launch crash hotfix.
- GitHub PR #162: Krishna Childhood Expansion Recovery Pack v1.
- PR #163: Ganesha + Hanuman Expansion Pack v1.

## PR #207 target

By PR #207, Little Dharma should have a stable local-first app, real Story World categories, 1,000+ indexed story experiences, 450+ runtime-ready or QA-staged runtime candidates, 350+ audio-ready scripts, 6-8 strong Dharma Journeys, parent dashboard usefulness, no backend dependency for core experience, no hard gamification, and Luvlu as a subtle helper only.

## Non-goals for current phase

Do not drift into backend, social loops, notifications, analytics, paid locks, external beta mechanics, exact age collection, microphone/recording features, hard gamification, or overly cartoonish sacred treatment.
