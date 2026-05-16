# CHILD_HOME_V3 QA

## Sprint objective
Upgrade Child Home / Today into a warmer, clearer, companion-led daily invitation that helps children know the next small action without pressure.

## Surfaces touched
- `app/(child)/today.tsx`
- `src/lib/companion.ts`
- `docs/content/child-home-v3-qa.csv`
- `scripts/validate-child-home-v3.mjs`
- `docs/MASTER_SPRINT_QUEUE.md`
- `docs/TASK_LOG.md`

## Ready-state review
- Shows clear `Today` + `Journey` context and a calm invitation.
- CTA is gentle (`Begin Today's Journey`) and routes to next story.
- Carrying word remains visible when available.

## Completed-state review
- Confirms today's journey is already complete.
- Offers a calm next-step CTA (`Continue with the next Journey`) without pressure language.
- Maintains existing progress and badge display behavior.

## Path-completed-state review
- Celebrates completion of 21-story Vrindavan path.
- Encourages gentle continuation options: revisit journey, treasures, chant, parent dashboard.
- No coercive continuation mechanics.

## Companion copy review
- Companion-led copy is short, warm, and reassuring.
- Invitation language stays calm and child-readable.
- No moral pressure or comparison framing.

## Child readability review
- Short sentences and plain vocabulary.
- Clear card hierarchy: greeting → companion invitation → today journey.
- CTA labels are action-clear and non-threatening.

## Parent trust review
- Keeps private/local behavior and existing architecture.
- No new data collection, tracking, social pressure, or dependency additions.
- Parent Dashboard and existing navigation links remain intact.

## No-dark-pattern review
- No streak prompts.
- No competitive framing.
- No guilt/shame framing.
- No "loss" framing for missed days.

## Regression checklist
- Story Start/Continue/Revisit links preserved.
- Worlds link preserved.
- Treasures link preserved.
- Parent Dashboard link preserved.
- Chant/ritual link preserved.
- Completion-state behavior preserved for 21-story path.

## iPhone QA checklist
- [ ] Child home opens without crash.
- [ ] Greeting readable on iPhone viewport.
- [ ] Companion invitation visible.
- [ ] Next journey card clear.
- [ ] ready/completed/path-completed states readable.
- [ ] Start/Continue/Revisit CTA works.
- [ ] Worlds/Treasures/Parent Dashboard/Chant links work.
- [ ] No layout cut-off.
- [ ] No red screen or blank screen.
- [ ] No streak/competition/shame language appears.

## Final QA status
- Automated/documentation QA: pass.
- Manual iPhone QA: pending manual execution in Expo Go.
