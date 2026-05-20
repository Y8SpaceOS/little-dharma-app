# Little Dharma Onboarding + App Shell Visual Parity v1 QA (Sprint 77 Visual Repair)

## Scope
- This is **Sprint 77 visual repair** only.
- It improves runtime visibility/testability for prototype references **screens 01–08**.
- It is **not full prototype parity** and **not Sprint 78**.

## Exact onboarding access path
1. Launch app to `/` (`app/index.tsx`).
2. If onboarding is incomplete, tap **Begin Warm Onboarding**.
3. If onboarding is already complete, tap **Reset Onboarding (Local QA)** and the app routes to `/onboarding`.

## Exact reset/testing method
- Local reset path is in `/` completed-state card:
  - **Reset Onboarding (Local QA)** calls `resetOnboarding()` and routes to `/onboarding`.
- This is safe local-only testing state reset (no backend/auth/cloud sync).

## Runtime onboarding sequence (screens 01–08)
1. Splash / warm entry
2. Brand philosophy
3. Parent Promise
4. Child profile setup
5. Luvlu Introduction
6. Content comfort settings
7. First World Preview
8. Parent/grown-up gate handoff

## Luvlu visibility checklist
- [ ] Luvlu helper bubble appears on **Luvlu Introduction** step.
- [ ] Luvlu helper bubble appears on **First World Preview** step.
- [ ] Luvlu helper bubble appears on **Parent/Grown-up Gate Handoff** step.
- [ ] Luvlu is treated as helper/guide, not brand mark.
- [ ] Diya-lotus-sun remains the brand mark.

## Manual QA checklist for screens 01–08
- [ ] Screen 01 warm entry uses soft gradient/card rhythm and feels welcoming.
- [ ] Screen 02 brand philosophy includes warm stories / privacy / no-pressure framing.
- [ ] Screen 03 Parent Promise is explicit and parent-trust-first.
- [ ] Screen 04 child profile remains broad age-band + nickname (no DOB dependence).
- [ ] Screen 05 Luvlu introduction is visibly present and helper-framed.
- [ ] Screen 06 comfort settings are visible with honest coming-later treatment.
- [ ] Screen 07 first world preview shows doorway cards and Luvlu support cue.
- [ ] Screen 08 parent gate handoff points to typed parent route `/(parent)/profiles`.

## Parent gate route note
- Typed route kept: `/(parent)/profiles`.
- Invalid hrefs `/parent-gate` and `/(parent)/gate` are not used.
