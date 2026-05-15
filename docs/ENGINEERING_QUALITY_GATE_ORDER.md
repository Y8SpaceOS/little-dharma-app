# Engineering Quality Gate Order (Sprint 12)

## Target
Provide deterministic, reproducible quality checks for local development and CI-like environments.

## Standard Gate Order
1. `npm ci`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run test`

## Why this order
- `npm ci` enforces lockfile-first reproducibility.
- `typecheck` runs before lint/test to fail fast on compiler configuration drift.
- `lint` then validates static-analysis expectations.
- `test` runs last for behavioral confidence once structural gates are clean.

## Lockfile strategy
- `package-lock.json` is source-controlled and required.
- Dependency changes must be committed with lockfile updates from the same environment/toolchain version where possible.
- Use `npm ci` in CI and in clean local bootstrap paths to prevent drift from opportunistic installs.
- If a restricted registry blocks dependency fetches, record the exact package and HTTP error in `docs/TASK_LOG.md` and mark gate status as blocked (not passed).

## Current Sprint 12 outcome
- TypeScript config is Expo-compatible (`extends: "expo/tsconfig.base"`) so Expo startup does not rewrite the file.
- Deprecation compatibility is set to `ignoreDeprecations: "5.0"` for local TypeScript validity in stabilized Sprint 12 validation.

## Stabilization pass update (2026-05-15)
- Local Mac validation confirmed `npm ci`, `npm run lint`, `npm run test`, and `npx expo start --clear` pass with iPhone runtime verification.
- Pre-fix failure was caused by `ignoreDeprecations: "6.0"` being invalid in the local TypeScript toolchain and Expo auto-restoring `extends: "expo/tsconfig.base"`.
- Stabilization set Expo-compatible `tsconfig.json` shape (`extends: "expo/tsconfig.base"`) and changed deprecation compatibility to `ignoreDeprecations: "5.0"` for local TypeScript compatibility.
- Sprint 12 should remain done only when all four quality gates pass in standard local validation: `npm ci`, `npm run typecheck`, `npm run lint`, `npm run test`.


## Final Sprint 12 stabilization note (2026-05-15)
- Root-cause analysis of remaining local typecheck failures indicated Expo SDK 54 type alignment drift in dev dependencies (`typescript`, `@types/react`) plus strict TS typing gaps in onboarding.
- Stabilization updates: keep Expo-managed tsconfig extension, keep `ignoreDeprecations: "5.0"`, align dev dependency targets to Expo SDK 54 expectations (`typescript ~5.9.2`, `@types/react ~19.1.10`), and type explicit onboarding callback values to remove implicit `any`/JSX namespace fragility.
- Deterministic merge gate remains unchanged and must be validated in fresh local environment with committed lockfile: `npm ci`, `npm run typecheck`, `npm run lint`, `npm run test`.
