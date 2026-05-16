# Ritual Moment v2 QA (Sprint 46)

## Sprint objective
Deliver a clearer, calmer in-story ritual flow using a three-step structure: **Say, Breathe, Reflect**, while preserving the existing Story → Ritual/Pause/Reflection → Quiz → Completion journey and avoiding runtime schema changes.

## Surfaces touched
- `app/story/[slug].tsx`
- `docs/RITUAL_MOMENT_V2_QA.md`
- `docs/content/ritual-moment-v2-qa.csv`
- `scripts/validate-ritual-moment-v2.mjs`

## Say step review
- Step heading is explicit: **Step 1: Say**.
- Uses existing ritual fields for phrase/title/transliteration/child meaning.
- Graceful defaults prevent crashes if title/text/meaning/transliteration are missing.
- Tone remains child-safe and non-coercive.

## Breathe step review
- Step heading is explicit: **Step 2: Breathe**.
- Calm text instruction included: **"Take three soft breaths together."**
- Uses existing `ritualPrompt` as optional support text with calm fallback.
- No timer dependency, countdown pressure, streak mechanics, or audio dependency.

## Reflect step review
- Step heading is explicit: **Step 3: Reflect**.
- Uses `reflectionQuestion` with a gentle fallback prompt.
- Uses `parentMeaning` as a parent bridge with a calm fallback.
- Framed as a family conversation, not a test.

## Parent trust review
- No backend/auth/cloud sync changes.
- No analytics additions.
- No social/competitive language added.
- Parent bridge wording stays gentle and practical.

## Child readability review
- Clear step labels and hierarchy for short ritual completion.
- Simple sentence structure suitable for read-aloud family use.
- Visual grouping uses card sections with spacing to reduce clutter.

## No-dark-pattern review
- No streak pressure language.
- No coercive or guilt-based copy.
- No competition framing.
- No unlock-gated retention language.

## Regression checklist
- Story panel reading flow preserved.
- Continue to Quiz CTA preserved.
- Pause stage preserved.
- Quiz interaction preserved.
- Completion interaction preserved.
- No story schema changes.
- No story count changes.

## iPhone QA checklist (manual, required)
- [ ] Stories 1–21 remain reachable.
- [ ] Story detail screen opens without crash.
- [ ] Ritual section shows Say, Breathe, Reflect.
- [ ] Ritual text is readable and not cut off.
- [ ] Breathing instruction is calm and not pressure-based.
- [ ] Reflection prompt is visible.
- [ ] Quiz still works.
- [ ] Completion still works.
- [ ] Parent dashboard/progress does not regress.
- [ ] No red screen or blank screen.
- [ ] No dark-pattern/streak/competition language.

## Final QA status
- Automated/document validators: pass in local CLI run.
- Manual iPhone/Expo Go QA: **pending_manual_qa** (not executable in this environment).
