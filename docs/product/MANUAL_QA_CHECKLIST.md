# Manual QA Checklist

## Purpose

Manual QA is required after any PR that affects app launch, content registry, Story World, journeys, story reader, parent surfaces, local-first behavior, or runtime safety.

## Standard app launch QA

Run the app from the project root:

```bash
cd /Users/stc/little-dharma-app
npx expo start --clear
```

Check:

- App launches without red screen.
- Child home loads.
- Parent area opens.
- Story World opens.
- No login or backend dependency blocks the core experience.
- No microphone, recording, notification, or audio permission prompt appears unexpectedly.

## Story World QA

Check:

- Story World label appears, not Story Library.
- Categories load without blank cards or crashes.
- New packs do not create duplicate confusing journey cards.
- QA-staged content is not accidentally presented as polished runtime-ready content.
- No generic placeholder story shell is visible to children.

## Journey QA

Check:

- Canonical journeys still exist.
- Expansion packs deepen the right journey and do not register duplicate canonical journeys.
- Journey progress screens do not crash.
- Journey ordering is stable when visible.

## Story detail and reader QA

Open several visible stories.

Check:

- Story detail opens.
- Title, summary, value, duration, age band, and parent note render safely.
- Reader opens for runtime-visible stories.
- Panels render.
- Next and back work.
- Completion works as before.
- No hard gamification appears.

## Parent QA

Check:

- Parent dashboard opens.
- Parent progress surfaces do not crash.
- Parent-facing copy remains safe, respectful, and privacy-aware.
- No analytics or sharing prompts appear.

## Offline/local-first QA

Turn off internet and check:

- App still opens.
- Story World opens.
- Existing readable stories open.
- Parent area opens.
- No blocking network error appears.

## Content PR QA

For every content pack PR, run the pack validator and relevant shared validators:

```bash
npm run typecheck
npm run lint
npm run test
npm run validate:content-scale-recovery-control-tower-v1
npm run validate:story-experience-index-model-v1
npm run validate:bulk-content-import-pipeline-v2
npm run validate:runtime-ready-story-gate-v1
npm run validate:audio-ready-script-gate-v1
```

Then run the specific pack validator.

Check:

- Story IDs are unique.
- Category mapping is correct.
- Journey mapping is correct.
- QA-staged candidates remain qa_ready, not runtime_ready.
- Audio candidates have safe audioMetadata.
- Story Experience Index builds without throwing.
- No route, runtime, backend, audio, analytics, sharing, notification, microphone, TTS, or gamification drift.

## Red flags

Do not proceed to the next sprint if any of these occur:

- Red screen.
- Story World crash.
- Parent dashboard crash.
- Duplicate canonical journey.
- Duplicate story IDs.
- Missing audioMetadata causing index crash.
- Generic template content visible to children.
- Unexpected microphone, notification, or audio prompt.
- Backend required for core experience.
- Hard gamification appears.

## Manual QA report format

```text
PR number:
Device:
Build:
Date:

App launch: Pass/Fail
Story World: Pass/Fail
Journey: Pass/Fail
Story detail: Pass/Fail
Reader: Pass/Fail
Parent area: Pass/Fail
Offline/local-first: Pass/Fail
Audio/mic behavior: Pass/Fail

Issues found:
1.
2.
3.

Final verdict: Pass / Blocked
```
