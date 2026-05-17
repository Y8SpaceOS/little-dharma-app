# Values Garden v1 QA

## Sprint objective
Deliver Values Garden v1 as a calm, private memory surface inside My Treasures using existing local completion/value data.

## Surfaces touched
- `app/(child)/treasures.tsx`
- `docs/VALUES_GARDEN_V1_QA.md`
- `docs/content/values-garden-v1-qa.csv`
- `scripts/validate-values-garden-v1.mjs`

## Data source review
- Uses existing local story completion map from `getAllStoryCompletions()`.
- Uses existing Vrindavan story path from `getVrindavanJourneyPath()`.
- Uses existing carrying-word helpers `getCompletedCarryingWords()` and `getLatestCarryingWord()`.
- No backend/auth/cloud sync added.

## Empty-state review
- Values Garden empty state appears when no completed stories exist.
- Copy is calm and child-readable.

## Completed-values review
- Practiced values render from completed stories only.
- Each value card shows value label and count of practiced stories.
- Latest carrying word line appears only when available.

## Child readability review
- Short sentences and simple words.
- Gentle metaphor: value seeds in a garden.
- No pressure language.

## Parent trust/privacy review
- Explicit local/private framing: “Private on this device.”
- No social features, rankings, leaderboard, sharing prompt, or monetization gate introduced.

## No-dark-pattern review
- No streak pressure.
- No scarcity/FOMO triggers.
- No competitive framing.

## Regression checklist
- Existing treasure badges still render.
- Existing Words I Carry still render.
- Existing Treasures navigation path preserved.
- No runtime story schema changes.
- No story content changes.

## iPhone QA checklist
- [ ] Treasures screen opens without crash.
- [ ] Values Garden section visible.
- [ ] Empty state readable when there are no completions.
- [ ] Practiced values render after completed stories.
- [ ] Existing treasures and badges still render.
- [ ] Child Home → Treasures link works.
- [ ] No layout cut-off.
- [ ] No red screen or blank screen.
- [ ] No leaderboard/streak/social/public-sharing language.
- [ ] Parent dashboard/progress remains stable.

## Final QA status
Pending manual iPhone QA in Expo Go. Automated checks and validators listed in Sprint 49 were run in this environment.
