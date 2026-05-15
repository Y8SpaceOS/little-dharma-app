# Codex Autopilot Operating Manual

## Purpose
Codex Autopilot executes one production-quality sprint at a time with clear quality gates, documentation updates, and a next-step recommendation.

## Required Files to Read First
1. `docs/PRODUCT_BRIEF.md`
2. `docs/ROADMAP.md`
3. `docs/TASK_LOG.md`
4. `docs/DECISION_LOG.md`
5. `docs/TECHNICAL_ARCHITECTURE.md`
6. `docs/CODEX_AUTOPILOT.md`
7. Category strategy docs (`CATEGORY_DEFINING_PRODUCT_STRATEGY`, `FIVE_TRACK_ROADMAP`, `CONTENT_UNIVERSE_ARCHITECTURE`, `TRUST_SAFETY_AND_PARENT_PROMISE`, `BRAND_AND_IP_BIBLE`, `SHAREABLE_MOMENTS`)

## Sprint Workflow
1. **Understand context**: read required files and current repo state.
2. **Select sprint from source of truth**: open `docs/MASTER_SPRINT_QUEUE.md` and run the first sprint marked `Status: not started`.
3. **Implement minimally**: avoid random scope; advance one or more roadmap tracks with quality.
4. **Run checks**: run available scripts (`typecheck`, `lint`, `test`, plus task-specific checks).
5. **Fix issues**: resolve failing checks caused by code changes.
6. **Update docs/logs**: append outcomes to TASK_LOG and decisions to DECISION_LOG.
7. **Run Category-Defining Product Check** (mandatory; see below).
8. **Prepare PR summary**: summarize changes, test outcomes, and blockers.
9. **Recommend next sprint**: one concrete, high-impact sprint.

## Mandatory Category-Defining Product Check
Every sprint must explicitly evaluate whether the increment improves or protects:
1. Child delight.
2. Parent trust.
3. Daily 10-minute usage potential.
4. Shareable moment potential.
5. Content universe depth.
6. Premium UX taste.
7. Safety compliance.
8. Monetisation path.

If an item is not improved, document why and what future sprint will address it.

## Definition of Done
A sprint is done only when:
- targeted implementation is complete and scoped correctly;
- checks have been run and results are reported honestly;
- `docs/TASK_LOG.md` has a dated entry with outputs and next action;
- `docs/DECISION_LOG.md` is updated if architecture/design tradeoffs were made;
- unresolved blockers are explicit with required human follow-up;
- Category-Defining Product Check is included in sprint reporting.

## Quality Gates
- `npm run typecheck` should pass.
- `npm run lint` should pass (or use documented simplified lint gate if environment blocks full lint stack).
- `npm run test` should pass with at least one meaningful test.
- No false claims: if environment blocks dependencies/checks, report exact command and error.

## TASK_LOG.md Update Rules
For each sprint, append:
- date,
- what was implemented,
- checks run with pass/fail/blocked status,
- blocker details (if any),
- category-defining product check summary,
- next sprint recommendation.

## DECISION_LOG.md Update Rules
Add entries only when decisions affect future implementation, including:
- decision statement,
- rationale,
- implications/follow-up.

## Blocked Execution Protocol
If blocked (credentials, registry, infra, permissions):
1. run fallback-safe checks that can still execute,
2. capture exact failing command and error,
3. avoid claiming success for blocked checks,
4. add a clear human action list to unblock,
5. continue all non-blocked work in-scope.

## Generic Prompt Shortcut
Future generic prompts may simply say: **"Run the next sprint from `docs/MASTER_SPRINT_QUEUE.md`."**


## Sprint Selection Source of Truth
- `docs/MASTER_SPRINT_QUEUE.md` is the canonical source for sprint selection.
- `docs/TASK_LOG.md` and `docs/DECISION_LOG.md` are history/audit logs and must not be used as sprint-selection sources.
- If any mismatch exists, follow `docs/MASTER_SPRINT_QUEUE.md` and record the correction in `docs/TASK_LOG.md`.
