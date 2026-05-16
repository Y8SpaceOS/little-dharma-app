# Bedtime Mode v2 QA

## Sprint objective
Upgrade Bedtime Mode into a calmer, clearer, parent-child friendly closing ritual after completion using only existing runtime story fields and preserving Story → Ritual → Pause → Quiz → Completion → Bedtime behavior.

## Surfaces touched
- `app/story/[slug].tsx` bedtime stage copy hierarchy, fallback handling, and return actions.
- `docs/BEDTIME_MODE_V2_QA.md` sprint QA review.
- `docs/content/bedtime-mode-v2-qa.csv` machine-readable QA tracker.
- `scripts/validate-bedtime-mode-v2.mjs` Bedtime Mode v2 validator.

## Bedtime copy review
- Title softened to a calm close.
- Added explicit settle-down instruction with simple, read-aloud phrasing.
- Kept one reflection question, one breathing/gratitude prompt, and one parent-child closing line.
- Avoided coercive, shaming, competitive, or streak language.

## Child readability review
- Section labels and card blocks keep bedtime content scannable.
- Body text remains short and simple for read-aloud use.
- Visual hierarchy improved without redesigning full story screen.

## Parent trust review
- Parent bridge fallback added when `story.ritual.parentMeaning` is missing.
- Value and reflection fallbacks prevent missing-data awkwardness or crashes.
- Return paths are explicit: back to completion or return to child home.

## Sleep-safety / calmness review
- No audio, timer, countdown, or notifications added.
- No pressure language about bedtime compliance.
- Prompts favor breathing, gratitude, and calm voice cues.

## No-dark-pattern review
- No streak messaging.
- No unlock/FOMO mechanics.
- No competitive framing.
- No public sharing pressure.

## Regression checklist
- Flow preserved: Story → Ritual → Pause → Quiz → Completion → Bedtime.
- Existing completion actions remain available.
- No story schema or packet-count changes.
- No backend/auth/cloud/CMS/audio/analytics/dependency additions.

## iPhone QA checklist (manual; required)
- [ ] Stories 1–21 reachable.
- [ ] Story detail opens without crash.
- [ ] Bedtime opens from completion.
- [ ] Bedtime copy readable and not cut off.
- [ ] Value practiced appears correctly.
- [ ] Reflection prompt appears correctly.
- [ ] Breathing/gratitude prompt appears correctly.
- [ ] Return path works (completion + child home).
- [ ] Quiz/completion flow still works.
- [ ] Parent dashboard/progress does not regress.
- [ ] No red screen/blank screen.
- [ ] No streak/competition/shame language.

## Final QA status
- Automated checks: pass in this sprint run.
- Manual iPhone QA: pending manual execution outside this CLI environment.
