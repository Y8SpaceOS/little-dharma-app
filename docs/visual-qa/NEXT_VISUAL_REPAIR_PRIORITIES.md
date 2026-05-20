# Next Visual Repair Priorities

Date: 2026-05-20 (UTC)

## 7) Recommendation for PR #98

**Recommended action:** **split PR #98 and keep only existing-screen repairs**.

Rationale:
1. The core rule says prototype library is not auto-implementation queue.
2. Current baseline confirms Screen 01–02 and existing child/parent routes are real app surfaces; these are safe repair targets.
3. Screen 03–07 appear to be potential scope expansion unless explicit approvals exist.
4. Parent Gate (Screen 08) may be valid only if it fixes existing flow defects without creating new onboarding scope.

If PR #98 includes new onboarding runtime screens/routes for 03–07, prefer: **close/replace with audit-based PR** or **split into: (a) safe repairs, (b) future-scope proposal PR**.

## Recommended next 5 PRs

1. **PR A — Existing Onboarding Visual Parity Only**
   - Scope: `/` and `/onboarding` visual parity refinements only.
   - Excludes any new routes/states.

2. **PR B — Parent Gate Wiring Audit/Fix**
   - Scope: verify current `/(parent)/gate` routing paths and fix only broken existing behavior.
   - No new onboarding screens.

3. **PR C — Child/Profile Data Contract Audit**
   - Scope: document existing `childProfile` and onboarding state contract; no UI expansion.

4. **PR D — Story World Preview Copy/Visual Polish**
   - Scope: polish existing `/(child)/worlds` and `/world/:slug` surfaces only.
   - No onboarding insertion.

5. **PR E — Scope Proposal for Screen 03–07**
   - Scope: product/engineering RFC defining required states, data contracts, and acceptance criteria before implementation.

## Confirmation

- This audit PR is **docs-only**.
- **No runtime UI changed.**
- No screens/routes/validators/prototype implementations were added or modified.
