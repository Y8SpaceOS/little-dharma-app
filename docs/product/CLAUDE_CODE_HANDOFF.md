# Claude Code Handoff

## Purpose

This is the operating handoff for Claude Code or any future implementation agent working on Little Dharma. Read this before making any code or content changes.

## Product context

Little Dharma is a local-first React Native / Expo child-facing Hindu spiritual Story World app with parent-trusted, privacy-safe architecture. The app should feel warm, colorful, playful, culturally respectful, and child-safe.

The product is not a generic story app. It is built around Story World, Dharma Journeys, sacred respect, gentle values, parent trust, and staged content quality gates.

## Current repo status

The recovery track has added engineering gates and content scale foundations:

- Content Scale Recovery Control Tower v1.
- Story Experience Index Model v1.
- Bulk Content Import Pipeline v2.
- Runtime-Ready Story Gate v1.
- Audio-Ready Script Gate v1.
- Ramayana Expansion Recovery Pack v1.
- Vrindavan launch crash hotfix.
- Krishna Childhood Expansion Recovery Pack v1.
- Ganesha + Hanuman Expansion Pack v1.

## Current strategic target

By PR #207, the app should have:

- 1,000+ indexed story experiences.
- 450+ runtime-ready or QA-staged runtime candidates.
- 350+ audio-ready scripts.
- 6-8 strong Dharma Journeys.
- Real Story World category depth.
- Parent dashboard usefulness.
- Local-first core experience.
- No hard gamification.

## Before starting any PR

Produce a sprint approval summary before implementation. Include:

- Proposed PR number and title.
- Sprint type and roadmap alignment.
- Files allowed to change.
- Files not allowed to change.
- PR #207 counter impact.
- Validation commands.
- Manual QA expectation.

Do not start unless approved.

## How to run the app

```bash
cd /Users/stc/little-dharma-app
npm install
npx expo start --clear
```

Use Expo Go or iPhone Simulator. If Expo starts from the wrong folder, stop it and restart from the project root.

## Standard validation suite

Run these for content or registry-impacting PRs:

```bash
npm run typecheck
npm run lint
npm run test
npm run validate:content-scale-recovery-control-tower-v1
npm run validate:story-experience-index-model-v1
npm run validate:bulk-content-import-pipeline-v2
npm run validate:runtime-ready-story-gate-v1
npm run validate:audio-ready-script-gate-v1
npm run validate:ramayana-expansion-recovery-pack-v1
npm run validate:krishna-childhood-expansion-recovery-pack-v1
npm run validate:ganesha-hanuman-expansion-pack-v1
```

Run the relevant new pack validator for any new pack.

## Manual QA expectation

After a merge that affects registry, launch, Story World, or runtime import paths, perform smoke QA:

- App launches.
- No red screen.
- Story World opens.
- Parent area opens.
- No duplicate journeys.
- No unexpected audio, microphone, notification, or backend prompt.
- Offline mode still works for core surfaces.

## Content quality warning

Do not generate generic story shells. A real runtime candidate must have story-specific panels, story-specific parent context, story-specific reflection prompts, and story-specific audio narration when audio-ready.

Bad content examples include generic phrases such as `moves the story forward`, `children can imitate`, `is at the heart of`, or numbered placeholder events.

## Do not change without approval

Do not change:

- app routes
- runtime resolver behavior
- story completion persistence
- journey progress persistence
- story reader behavior
- audio playback behavior
- backend or cloud sync
- analytics or telemetry
- notifications or reminders
- sharing or social mechanics
- microphone, recording, or child voice capture
- TTS or external voice API integration
- hard gamification

## Next likely PRs

After the handoff documentation PR, continue content scale:

- Bedtime + Values Expansion Pack v1.
- Festival Stories Expansion Pack v1.
- Bhagavad Gita for Children Expansion Pack v1.
- Mahabharata Child-Safe Expansion Pack v1.
- Panchatantra/Hitopadesha Values Expansion Pack v1.
- Content Counter Audit + PR #207 Projection v1.

## Final instruction

Preserve roadmap discipline. If unsure whether a change is allowed, stop and ask for approval instead of implementing it.
