# Dharma Journey Map v1 (PR #178) + Polish/Safe Interaction v1 (PR #179)

## Supported journeys
- Krishna Childhood Journey (`krishna-childhood-pack-1`)
- Ramayana Journey (`ramayana-journey-pack-1`)
- Ganesha Wisdom Journey starter pack (`ganesha-wisdom-pack-1`)
- Ganesha Wisdom Journey expansion path (`ganesha-wisdom-journey`)

## Canonical journey ID handling
- Story World journey-map routes use `story.journeyId` values from `contentRegistryStories`.
- Verified canonical registry IDs are `krishna-childhood-pack-1`, `ramayana-journey-pack-1`, `ganesha-wisdom-pack-1`, and `ganesha-wisdom-journey`.
- Legacy PR #178 route IDs are safely aliased: `krishna-childhood-journey-pack-1` resolves to `krishna-childhood-pack-1`, and `ganesha-wisdom-journey-pack-1` resolves to `ganesha-wisdom-pack-1`.
- Canonical Krishna Childhood, Ramayana, and Ganesha Wisdom routes all render ordered story steps instead of the unsupported fallback.

## What the map shows
- Journey title and child-facing description.
- A warm journey context line that invites the child to follow one gentle step at a time.
- Subtle parent-trust copy that stays local-first and care-focused without dashboard or corporate language.
- Ordered story steps from `contentRegistryJourneys.storyIds` using existing story metadata.
- Each step includes step number, path marker, story title, one-line summary, value, age band, duration, readiness state, and a gentle trust label.
- Gentle path markers (diya, flower, lotus dot) for child-friendly wayfinding.
- A soft connector treatment between steps so the screen feels like a path rather than a flat list.
- Step states: `completed`, `available`, `coming_soon`, `being_prepared`, and `missing`.
- If a step is not runtime eligible, it uses “Being prepared with care.”

## PR #179 visual polish
- The hero keeps the child-facing journey title and description while adding a warmer context line: follow one step at a time, with room to pause and wonder.
- The path uses a vertical rail, soft connector, and existing marker emojis (`diya`, `flower`, `lotus_dot`) to make the sequence feel gentle and guided.
- Step cards have clearer hierarchy: step number and readiness state first, then story title, summary, value, age band, duration, and trust label.
- Disabled cards remain warm and visible rather than looking broken or punitive.

## Safe step interaction rules
- A step is tappable only when the journey map service marks it as runtime-safe (`isTappable: true`).
- Runtime-safe means the story passes the existing runtime story eligibility gate and resolves to `available` or `completed` journey-map state.
- `available` steps route to their existing local story reader route.
- `completed` steps may be revisited through the same local story route.
- Non-runtime-ready, coming-soon, missing, or being-prepared steps are never routed to Story World as a confusing fallback.
- Disabled steps do nothing on tap.

## Disabled step behavior
- Disabled step state copy says: “Being prepared with care.”
- Disabled accessibility hints explain that the step is not ready yet.
- Disabled cards keep readable contrast, large touch-target sizing, and warm visual treatment.
- Disabled cards do not promote `runtime_ready`, change story status, add locks, or imply a reward mechanic.

## Empty and fallback behavior
- Missing journey ID renders a warm not-found state instead of crashing.
- Unsupported journey ID renders an unsupported-but-safe state and does not expose steps.
- A supported journey with no steps renders: “This Dharma Journey is being prepared with care.”
- Missing story metadata uses gentle fallback labels and never crashes the screen.
- Missing `journeyOrder` is tolerated and sorts safely after ordered stories.

## Accessibility behavior
- The journey hero has a header accessibility label with the child-facing title, description, and gentle path context.
- Each step announces step number, title, readiness state, value, age band, and duration.
- Disabled steps set the accessibility disabled state and explain that the step is being prepared with care.
- Step cards preserve large touch targets and readable contrast.

## Intentionally not included in v1 / PR #179
- No new stories.
- No story text changes.
- No promotion to `runtime_ready`.
- No XP, coins, streaks, rankings, leaderboards, energy bars, loot, or paid locks.
- No lock-gate mechanics or addictive progression loops.
- No audio files, audio playback, chanting, TTS, microphone, voice recording, or pronunciation scoring.
- No backend, account, analytics, tracking, or network dependency.

## Progress-state limitations
- Progress is local and gentle (`gentle_local_stub`).
- Visual states are non-competitive and trust-first.
- Completion states are representational and not reward-loop mechanics.

## Sacred-content guardrails
- Sacred stories are presented with respectful, child-safe language.
- No deity caricature behavior is introduced by this map model.
- Story availability language uses “prepared with care” for non-runtime steps.

## Recommended next PR
- Add device visual QA evidence for the polished journey map on small and large child-facing screen sizes.
- Add a lightweight regression validator for journey-map safe interaction copy and disabled-route behavior.
- Consider a parent-facing explainer for gentle journey progress that does not introduce competitive mechanics.

## Final PR validation
- PR #179 should run: `npm run typecheck`, `npm run lint`, `npm run test`, `npm run validate:story-experience-index-model-v1`, `npm run validate:runtime-ready-story-gate-v1`, `npm run validate:bulk-content-import-pipeline-v2`, and `npm run validate:content-registry-counters-v1`.
- The PR Testing section should list the final command results.
- No product or code changes outside journey-map visual polish, safe interaction, fallback state hardening, accessibility, and documentation are required for this PR.
