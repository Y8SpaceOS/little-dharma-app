# Codex Sprint Runner

## Goal
Execute one sprint at a time with high consistency, strict scope control, and category-defining product quality.

## Sprint Selection Rule
1. Open `docs/MASTER_SPRINT_QUEUE.md`.
2. Find the first sprint marked **Status: not started**.
3. Mark it **in progress** before implementation begins.
4. Implement exactly that sprint and no unrelated scope.
5. Mark it **done** only after checks, docs, and QA notes are complete.

## Execution Rules
- Implement **exactly one sprint** per run.
- Keep changes minimal and directly tied to the selected sprint objective.
- Do not add unrelated features, dependencies, or architecture churn.

## Required Documentation Updates
For every sprint, update all three:
1. `docs/TASK_LOG.md`
   - date
   - sprint number/title
   - implemented scope
   - tests/checks with pass/fail/blocked
   - blockers and next action
   - category-defining product check summary
2. `docs/DECISION_LOG.md`
   - only if a durable product/technical decision was made
   - include rationale and implications
3. `docs/MASTER_SPRINT_QUEUE.md`
   - status progression (`not started` → `in progress` → `done`)
   - brief completion note for traceability

## PR Summary Requirements
Every sprint PR summary must include:
- Summary of changes
- Tests run with exact commands and outcomes
- Blockers/risks
- Manual iPhone QA steps performed
- Category-defining product check outcome
- Next sprint recommendation (typically the next `not started` sprint)

## Guardrails
- No unrelated scope.
- No false claims about tests or QA.
- Preserve trust/safety and parent promise constraints.
- Prefer small, composable increments over large rewrites.
