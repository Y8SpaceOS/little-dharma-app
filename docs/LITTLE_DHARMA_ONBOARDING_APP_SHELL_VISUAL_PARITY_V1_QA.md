# Little Dharma Onboarding + App Shell Visual Parity v1 QA (Sprint 77)

## Scope
Prototype references used: screens 01–08 from the 45-screen onboarding/app-shell family.

## Implemented routes and files
- `/` → `app/index.tsx`
- `/onboarding` → `app/onboarding.tsx`
- `/(parent)/gate` → `app/(parent)/gate.tsx`
- shell behavior → `app/_layout.tsx`
- audit update → `docs/LITTLE_DHARMA_IMPLEMENTED_ROUTE_VISUAL_AUDIT.md`

## What was visually reconstructed
- Warm in-app splash/entry with diya-lotus-sun-led brand mark and Little Dharma tagline.
- Parent-first philosophy and promise cards in onboarding.
- Child profile setup card with broad age bands and local-first language.
- Luvlu optional helper introduction (not brand logo treatment).
- Comfort settings preview with coming-later honesty for unimplemented settings.
- First world preview doorway cards and onboarding-to-child bridge CTA.
- Warm parent gate surface with “For parents / Grown-up area” framing.

## What remains incomplete
- Not full prototype parity.
- Native splash hardening not completed.
- Parent gate still placeholder-level security.
- Higher-fidelity illustration/motion parity remains future work.

## Onboarding reset/testing
- Complete onboarding once, then use existing parent reset flow in parent controls/dashboard to clear onboarding state.
- Relaunch app and confirm `/` warm entry appears before re-entering onboarding.

## Manual QA checklist
- [ ] Splash/entry feels warm and brand-led (not generic loader).
- [ ] Brand philosophy screen shows required parent-first statement + three promise cards.
- [ ] Parent Promise screen shows all required commitments.
- [ ] Child profile setup avoids DOB and uses broad age bands.
- [ ] Luvlu intro is helper-only and not logo framing.
- [ ] Content comfort settings clearly indicate preview/coming-later where needed.
- [ ] First world preview shows Krishna/Ganesha/Bedtime/Values doorway cards.
- [ ] Parent gate copy reads “For parents” / “Grown-up area” with calm tone.
- [ ] Route/debug headers are not visible.

## Explicit parity statement
This sprint is a runtime reconstruction pass and does **not** claim full prototype parity.
