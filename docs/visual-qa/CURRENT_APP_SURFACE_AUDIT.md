# Current App Surface Audit

Date: 2026-05-20 (UTC)
Baseline analyzed: `main` at merge commit **PR #97** (`78f154b`).

## Scope and constraints
- Docs-only audit; no runtime UI changes.
- Route inventory derived from `app/` files in current tree.
- `PR #98` branch/refs were **not available** in this checkout (no remote configured), so PR #98 impact is classified as `unknown / needs fetch` where direct diff evidence is required.

## 1) Current app route inventory

| File path | Route name | User-facing purpose | Audience | Existed before PR #98? | Modified by PR #98? |
|---|---|---|---|---|---|
| `app/index.tsx` | `/` | Splash/landing with CTA into onboarding. | Mixed family entry | Yes | Unknown (PR #98 ref unavailable) |
| `app/onboarding.tsx` | `/onboarding` | Screen 02 onboarding values/intro and continue action. | Mixed (child+parent context) | Yes | Unknown |
| `app/auth/sign-in.tsx` | `/auth/sign-in` | Parent sign-in placeholder. | Parent-facing | Yes | Unknown |
| `app/auth/sign-up.tsx` | `/auth/sign-up` | Parent sign-up placeholder. | Parent-facing | Yes | Unknown |
| `app/(child)/today.tsx` | `/(child)/today` | Child home hub with doorway cards and parent link. | Child-facing | Yes | Unknown |
| `app/(child)/worlds.tsx` | `/(child)/worlds` | Story-world category chooser. | Child-facing | Yes | Unknown |
| `app/(child)/bedtime.tsx` | `/(child)/bedtime` | Bedtime calming surface. | Child-facing | Yes | Unknown |
| `app/(child)/chant.tsx` | `/(child)/chant` | Chant-focused child activity surface. | Child-facing | Yes | Unknown |
| `app/(child)/treasures.tsx` | `/(child)/treasures` | Completed-story/value treasure inventory. | Child-facing | Yes | Unknown |
| `app/world/[slug].tsx` | `/world/:slug` | World detail listing stories and readiness states. | Child-facing | Yes | Unknown |
| `app/story/[slug].tsx` | `/story/:slug` | Story detail + reader + completion state machine. | Child-facing | Yes | Unknown |
| `app/(parent)/dashboard.tsx` | `/(parent)/dashboard` | Parent metrics, trust summary, links to controls/privacy. | Parent-facing | Yes | Unknown |
| `app/(parent)/controls.tsx` | `/(parent)/controls` | Parent settings, toggles, child profile summary. | Parent-facing | Yes | Unknown |
| `app/(parent)/gate.tsx` | `/(parent)/gate` | Parent gate access checkpoint. | Parent-facing | Yes | Unknown |
| `app/(parent)/journey-settings.tsx` | `/(parent)/journey-settings` | Journey preference/settings. | Parent-facing | Yes | Unknown |
| `app/(parent)/privacy.tsx` | `/(parent)/privacy` | Trust/privacy center. | Parent-facing | Yes | Unknown |
| `app/(parent)/profiles.tsx` | `/(parent)/profiles` | Parent-managed profile list/details. | Parent-facing | Yes | Unknown |
| `app/(parent)/subscription.tsx` | `/(parent)/subscription` | Parent subscription/paywall context. | Parent-facing | Yes | Unknown |
| `app/(parent)/feedback.tsx` | `/(parent)/feedback` | Parent feedback capture (local draft). | Parent-facing | Yes | Unknown |

## 2) Current onboarding flow inventory

### Flow present at PR #97 baseline (`78f154b`)
1. `/` splash/brand entry
2. `/onboarding` (Screen 02 value proposition)
3. Continue to `/(child)/today`
4. Parent surfaces are reachable from child home links (`/(parent)/dashboard`, etc.) rather than required upfront in onboarding.

### Historical compare requested in prompt
- Requested compare target 1: `main` at PR #97 merge commit → **available** (`78f154b`).
- Requested compare target 2: current PR #98 branch → **not present in local git refs**.

Therefore, onboarding state classification for Screen 03–08 is provisional and based on current app evidence only.

| Onboarding state/screen | Existed before PR #98? | Newly added in PR #98? | Approved by roadmap/sprint evidence in repo | Prototype-only leakage risk |
|---|---|---|---|---|
| Screen 01 splash (`/`) | Yes | No evidence | Yes (prior merged sprint history) | SAFE |
| Screen 02 onboarding (`/onboarding`) | Yes | No evidence | Yes (PR #97 commit messages and route) | SAFE |
| Direct child-home entry (`/(child)/today`) | Yes | No evidence | Yes | SAFE |
| Screen 03 Parent Promise | Not in runtime routes as dedicated screen | Unknown | No explicit approval artifact found for implementation | REVIEW |
| Screen 04 Child Profile Setup | No dedicated route in current app | Unknown | Partial data model exists (`childProfile`) but no dedicated screen route | REVIEW |
| Screen 05 Meet Luvlu | No dedicated route in current app | Unknown | Luvlu appears as helper text only, not standalone screen | REVIEW |
| Screen 06 Content Comfort Settings | No dedicated onboarding screen route | Unknown | Similar controls exist under parent controls, not onboarding | REVIEW |
| Screen 07 First World Preview | No dedicated onboarding route | Unknown | World previews exist in child/world routes post-entry | REVIEW |
| Screen 08 Parent Gate | Parent gate route exists (`/(parent)/gate`) but not proven as onboarding step | Unknown | Existing route implies some approved scope | SAFE/REVIEW (depends on flow wiring) |
