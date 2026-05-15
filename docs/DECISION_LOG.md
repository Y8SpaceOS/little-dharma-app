# Decision Log
- 2026-05-15: Kept sprint scope strictly to foundation stabilization; deferred new feature scope until baseline checks and schema quality improved.
- 2026-05-15: Adopted temporary TypeScript module shims and simplified lint gate to keep CI-style quality checks executable in restricted dependency environments.
- 2026-05-15: Set RLS to enabled broadly with deny-all placeholders on sensitive profile tables until auth-bound policies are finalized.
- 2026-05-15: Chose lightweight in-memory onboarding state (`src/lib/onboardingState.ts`) instead of backend auth/storage for this sprint to rapidly validate parent-first onboarding UX before introducing account complexity.
  - Rationale: sprint objective prioritizes premium flow and navigation polish without auth/payments scope.
  - Implication: onboarding completion resets on app reload; next sprint should migrate this state to durable local storage (and later parent-owned backend profile).
- 2026-05-15: Switched onboarding state from in-memory process variables to device-local persistence using AsyncStorage-backed state hydration on app launch.
  - Rationale: Reset/app restart must preserve or clear onboarding deterministically for parent trust and reliable child routing.
  - Implications: Onboarding-related screens subscribe to shared onboarding state updates and use async save/reset flows.
