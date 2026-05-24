# Decision Log

## Purpose

This document records major Little Dharma decisions so future implementation agents do not rediscover or reverse them.

## Product decisions

### Story World language

Use `Story World` in child-facing language. Do not use `Story Library` on child-facing surfaces.

### Local-first core

The core experience should not depend on backend connectivity. Content, journeys, progress, and parent surfaces should remain local-first unless a future approved sprint changes this.

### Parent trust

Parent surfaces must feel safe, respectful, privacy-aware, and practical. Avoid analytics-style dashboards, noisy growth mechanics, and social-sharing pressure.

### Gentle progression

Allowed progression metaphors include diyas, flowers, blessings, treasures, gardens, calm completion, and journey progress. Hard gamification is not allowed.

## Design decisions

### 1-487 screen system as north star

The real app should progressively look and feel like the 1-487 screen reference system. These screens define the target warmth, color, visual richness, child-friendliness, Luvlu subtlety, motion softness, Story World depth, parent trust, and joyful devotional atmosphere.

They are not all routes to implement. Use them as approved references and component sources through roadmap-controlled sprints.

### Prototype-level warmth is the minimum bar

The 45-screen prototype and later expanded screen packs are not aspirational extras. They define the minimum quality direction expected from visible app surfaces.

## Luvlu decisions

Luvlu is the peacock helper and guide. Luvlu is not the logo, not a deity, not a reward token, not a badge, not an idol, and not a sacred authority.

Use Luvlu only where it improves guidance, warmth, transitions, empty states, calm practices, completion moments, or parent-child prompts.

## Sacred respect decisions

Sacred stories must be respectful, warm, child-safe, and restrained. Avoid fear-heavy, violence-heavy, revenge-heavy, punishment-heavy, mocking, or over-comedic treatment.

Krishna can be playful, but not trivialized into prank comedy. Hanuman strength should be framed as service and humility. Ganesha should be wisdom-first. Mahabharata and Bhagavad Gita require extra editorial care.

## Content architecture decisions

Content should be indexed first, then QA-staged, then promoted only through gates. QA-staged content must not be exposed as runtime-ready unless gates allow it.

Every meaningful story should have stable IDs, category mapping, journey mapping, values, age bands, source tradition, safe metadata, and audio metadata where applicable.

## Content quality decisions

Generic generated shells do not count as real runtime candidates. The project explicitly rejected repeated title-substitution panels during Ramayana and Krishna work.

Runtime candidates must have story-specific panels, parent notes, reflection prompts, and audio scripts where applicable.

## Validator decisions

Validators must check quality and safety, not only count strings. Validators should catch duplicate story IDs, duplicate journey registrations, missing audio metadata, Story Experience Index crashes, generic shell phrases, repeated panel openings, repeated narration openings, route drift, audio files, and unapproved behavior file changes.

## Engineering decisions

### Duplicate ID protection

Duplicate story IDs can corrupt `contentRegistryStoriesById` because later entries overwrite earlier entries. Every content pack validator should prove IDs are unique inside the pack and against existing content.

### audioMetadata safety

Story Experience Index expects audio metadata. Every mapped story should have safe audioMetadata defaults, even if audio is not available.

### Hotfix discipline

PR #160 was accepted as a hotfix because it fixed a launch/runtime blocker. Hotfixes are allowed only for blockers and must return immediately to the planned roadmap.

## No-drift decisions

Do not add backend, analytics, sharing, notifications, microphone, recording, TTS, voice API implementation, AI personalization, paid locks, route sprawl, or hard gamification without explicit approval.

## Roadmap decisions

The immediate roadmap after handoff should continue content scale, then counter audit, then controlled Story World surfacing and parent dashboard usefulness. Design work must use the 1-487 screen system as the north star, but only through approved sprints.
