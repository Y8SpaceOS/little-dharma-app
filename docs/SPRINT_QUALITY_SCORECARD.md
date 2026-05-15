# Sprint Quality Scorecard

Use this scorecard in every sprint PR. Score each dimension from 1–5 before and after implementation.

## Quality Dimensions
1. Child delight
2. Parent trust
3. Daily 10-minute ritual habit
4. Content depth and authenticity
5. Premium UI/UX taste
6. Parent-safe shareability
7. Safety/privacy
8. Monetisation readiness

## Scoring Rubric (1–5)
- **1 — Regressive/unsafe:** Clear quality break or trust risk.
- **2 — Weak:** Barely functional; inconsistent; fragile confidence.
- **3 — Adequate:** Meets current baseline with minor gaps.
- **4 — Strong:** High-quality, consistent, low-risk execution.
- **5 — Category-defining:** Benchmark-level execution with durable advantage.

## Required PR Inputs
- **Before vs After:** Each dimension must include a before score and after score.
- **Primary quality dimension:** At least one selected as primary target for improvement.
- **Protected quality dimensions:** Dimensions that must not regress.

## Regression Checklist
- Parent trust language preserved.
- Safety/privacy defaults unchanged or improved.
- Core 10-minute ritual loop still coherent.
- Content accuracy/authenticity not weakened.
- Child journey has no new dead ends.

## Merge Gate Rules
- A sprint **must improve at least one primary dimension**.
- A sprint **must not regress any protected dimension**.
- Claimed improvements must be backed by implementation evidence plus tests/docs/manual QA notes.
- Any deferred quality gate must include explicit risk and next action.

## Examples of Strong Sprint Output
- Improves ritual habit score from 3→4 while maintaining trust/safety at 4+ with QA proof.
- Raises premium UX taste from 2→4 with complete state coverage and no regressions.

## Examples of Weak Sprint Output
- “Feature works” claim with no before/after scoring evidence.
- Improves delight but regresses parent trust or safety.
- Declares gate pass without implementation or QA artifacts.
