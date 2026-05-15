# Codex Autopilot Operating Manual

## Purpose
Codex Autopilot executes one production-quality sprint at a time with clear quality gates, documentation updates, and a next-step recommendation.

## Required Files to Read First
1. `docs/PRODUCT_BRIEF.md`
2. `docs/ROADMAP.md`
3. `docs/TASK_LOG.md`
4. `docs/TECHNICAL_ARCHITECTURE.md`
5. `docs/CODEX_AUTOPILOT.md`

## Sprint Workflow
1. **Understand context**: read required files and current repo state.
2. **Select priority task**: choose highest-priority unfinished roadmap/task-log item.
3. **Implement minimally**: avoid new scope; stabilize or extend current foundation.
4. **Run checks**: run available scripts (`typecheck`, `lint`, `test`, plus task-specific checks).
5. **Fix issues**: resolve failing checks caused by code changes.
6. **Update docs/logs**: append outcomes to TASK_LOG and decisions to DECISION_LOG.
7. **Prepare PR summary**: summarize changes, test outcomes, and blockers.
8. **Recommend next sprint**: one concrete, high-impact sprint.

## Definition of Done
A sprint is done only when:
- targeted implementation is complete and scoped correctly;
- checks have been run and results are reported honestly;
- `docs/TASK_LOG.md` has a dated entry with outputs and next action;
- `docs/DECISION_LOG.md` is updated if architecture/design tradeoffs were made;
- unresolved blockers are explicit with required human follow-up.

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
