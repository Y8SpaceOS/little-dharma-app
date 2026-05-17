# My Treasures v2 QA

## Sprint objective
Upgrade My Treasures v2 into a premium, private memory surface that clearly explains completed stories, practiced values, earned badges, and Words I Carry using local-only data.

## Surfaces touched
- `app/(child)/treasures.tsx`
- `docs/MY_TREASURES_V2_QA.md`
- `docs/content/my-treasures-v2-qa.csv`
- `scripts/validate-my-treasures-v2.mjs`

## Data source review
- Uses existing local completion records from `getAllStoryCompletions()`.
- Uses existing local carrying words from `getCompletedCarryingWords()` and `getLatestCarryingWord()`.
- Uses existing Vrindavan journey metadata from `getVrindavanJourneyPath()`.
- No new storage, no backend/auth/cloud sync, no CMS.

## Values Garden preservation review
- Values Garden section preserved.
- Practiced value chips preserved with per-value counts.
- Latest carrying word line preserved.
- Private on-device framing preserved and calmed.

## Badges/treasures review
- Earned badges remain sourced from completed story slugs.
- Badge cards show story title, value, and earned date when present.
- Empty and partial states clearly separate from full completion state.

## Words I Carry review
- Words I Carry section remains visible.
- Empty state copy remains gentle and clear.
- Completed words remain local and non-competitive.

## Empty-state review
- No completions: clear shelf-ready message and gentle start CTA.
- Copy avoids pressure, shame, and urgency framing.

## Partial-state review
- Progress summary reads `X of 21 Vrindavan memories saved`.
- Derived count pills clarify values practiced, badges earned, words carried.
- Latest memory hint appears when at least one story is complete.

## Full-path state review
- When `completedCount === totalCount`, full-path message appears.
- Completion copy is calm and revisit-friendly, not addictive or competitive.

## Child readability review
- Warm short sentences.
- Clear section labels and card structure.
- No preachy or confusing product language.

## Parent trust/privacy review
- Explicit private framing remains visible.
- No leaderboard/ranking/public sharing pressure.
- Local-only behavior preserved.

## No-dark-pattern review
- No streak pressure.
- No FOMO scarcity copy.
- No competitive framing.
- No public-facing profile or social pressure copy.

## Regression checklist
- Back to Child Home link still routes to `/(child)/today`.
- Child Home → Treasures route unchanged.
- Values Garden v1 behavior preserved.
- Existing badge rendering preserved.
- Existing Words I Carry rendering preserved.
- No runtime story schema changes.
- No story content updates.

## iPhone QA checklist
- [ ] Treasures screen opens from Child Home.
- [ ] Header/progress summary readable without overlap.
- [ ] Values Garden card displays correctly in empty and populated states.
- [ ] Badge list cards wrap correctly and remain readable.
- [ ] Words I Carry chips wrap cleanly on smaller screens.
- [ ] Privacy note remains visible near the bottom.
- [ ] Back to Child Home link works.
- [ ] No red screen/blank screen/layout clipping.

## Final QA status
Automated and static checks passed in this environment; manual iPhone QA remains pending.
