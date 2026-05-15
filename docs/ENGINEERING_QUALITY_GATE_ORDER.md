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
- TypeScript config no longer depends on `expo/tsconfig.base`, allowing `npm run typecheck` to run without Expo package resolution.
- Added `ignoreDeprecations: "6.0"` to explicitly handle TS5101 and keep the baseline deterministic on the current TypeScript series.
