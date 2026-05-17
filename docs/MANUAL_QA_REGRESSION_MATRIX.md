# Sprint 53 — Manual QA Regression Matrix

## Sprint objective
Build a durable, repeatable Manual QA Regression Matrix for Little Dharma private-beta critical journeys so each release can be validated on physical iPhone devices via Expo Go before sign-off.

## Why manual QA matters for Little Dharma
Little Dharma combines child-facing ritual UX, progress continuity, and parent trust/privacy surfaces. Automated validators are essential for structure and regressions, but they cannot confirm tactile iPhone readability, navigation comfort, emotional pacing, or trust-copy interpretation in real use. Manual QA closes that gap and protects release confidence.

## Device / OS coverage philosophy
- Prioritize real iPhone + Expo Go execution for every release candidate.
- Cover at least one current-generation iPhone form factor and one smaller/older supported form factor.
- Keep one latest iOS line and one previous iOS line in the matrix whenever practical.
- Re-run the same critical journey matrix each cycle so pass/fail trends are comparable over time.

## Minimum private-beta device matrix
- iPhone 15 / 15 Pro (or nearest current device), latest stable iOS, Expo Go build under test.
- iPhone 13 mini or iPhone SE class (smaller layout stress case), latest supported iOS for that device, Expo Go build under test.
- Optional confidence expansion: one additional mid-generation iPhone for tie-breaker validation when issues appear.

## Critical journeys covered
- App launch / Expo Go load
- Onboarding/profile state checks
- Child Home
- Vrindavan story path 1–21
- Story detail
- Story → Ritual → Pause → Quiz → Completion
- Ritual Moment v2 (Say, Breathe, Reflect)
- Bedtime Mode v2
- 21-story completion state
- My Treasures v2
- Values Garden v1
- Parent Dashboard v3
- Parent Trust & Privacy Center v1
- Child ↔ Parent navigation
- Empty / partial / full progress states
- Safety/privacy and no-dark-pattern copy checks
- Basic iPhone layout/readability checks

## Test data / preconditions guidance
- Use clean install and returning-user states when possible.
- Maintain at least three data snapshots: empty progress, partial progress, full 21/21 completion.
- Keep test user data private and local-only; never inject child-identifying placeholders into screenshots/logs.
- If a path is blocked due to environment/setup, mark `blocked` with clear notes and evidence reference.

## Severity model and triage guide
- **P0_blocker:** app cannot launch, core story path broken, data corruption, privacy/trust center inaccessible, red screen on core flows.
- **P1_critical:** story completion broken, quiz/ritual/completion broken, parent dashboard materially wrong, navigation trap.
- **P2_major:** layout clipping, misleading copy, latest memory wrong, non-blocking broken state.
- **P3_minor:** small copy/layout polish, spacing, non-blocking readability issue.

## Release gate rules
- Private beta cannot ship with any open P0.
- Private beta should not ship with open P1 unless explicitly accepted.
- P2 issues require owner decision.
- P3 issues can be batched.
- Manual iPhone QA must be run before release sign-off.
- Automated validators passing is necessary but not sufficient.

## Pass/fail logging rules
- Regression matrix source: `docs/content/manual-qa-regression-matrix.csv`.
- Per-run execution log: `docs/content/manual-qa-run-log-template.csv`.
- Run-log `result` allowed values: `pass`, `fail`, `blocked`, `not_run`.
- Run-log `issueSeverity` allowed values: `none`, `P0_blocker`, `P1_critical`, `P2_major`, `P3_minor`.
- Every failed or blocked case must include issue description and evidence link/path (screenshot/video/ticket).

## Regression ownership rules
- Sprint owner ensures matrix freshness and scope alignment with active private-beta surfaces.
- QA executor records run-level evidence per test row.
- Engineering owner triages P0/P1 immediately and confirms retest scope.
- Product owner decides ship/no-ship for open P2/P3 per release gate policy.

## Manual iPhone QA execution instructions
1. Pull release candidate branch and install dependencies.
2. Launch app via Expo Go target flow.
3. Execute matrix rows on physical iPhone(s) in the minimum matrix.
4. Record each result in run-log CSV with device + OS metadata.
5. File issues for failures and link evidence.
6. Re-run impacted rows after fixes.
7. Confirm release gates before sign-off.

## What cannot be claimed until manual QA is actually performed
- Do not claim iPhone readiness.
- Do not claim full release confidence.
- Do not mark device rows as `pass` without explicit physical iPhone / Expo Go evidence.
- Do not treat automated checks alone as complete QA sign-off.

## Final QA status for Sprint 53 artifacts
- Matrix, run-log template, and validator are created for repeatable use.
- Actual device execution remains required and should be tracked as `pending_manual_qa` until physically run.
