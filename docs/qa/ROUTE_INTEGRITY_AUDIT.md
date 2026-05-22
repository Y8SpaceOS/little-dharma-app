# PR #108: App Route Integrity + Navigation QA

## Purpose
Audit and harden existing Expo Router route/navigation integrity for the current Little Dharma app runtime without adding routes, introducing prototype-only screens, or expanding product scope.

## Route Inventory

### Entry / onboarding
- `app/index.tsx`
- `app/onboarding.tsx`

### Child
- `app/(child)/today.tsx`
- `app/(child)/worlds.tsx`
- `app/(child)/treasures.tsx`
- `app/(child)/bedtime.tsx`
- `app/(child)/chant.tsx`

### World / story
- `app/world/[slug].tsx`
- `app/story/[slug].tsx`

### Parent
- `app/(parent)/gate.tsx`
- `app/(parent)/dashboard.tsx`
- `app/(parent)/controls.tsx`
- `app/(parent)/journey-settings.tsx`
- `app/(parent)/privacy.tsx`
- `app/(parent)/feedback.tsx`
- `app/(parent)/profiles.tsx`
- `app/(parent)/subscription.tsx`

### Auth / privacy / settings / subscription
- `app/auth/sign-in.tsx`
- `app/auth/sign-up.tsx`
- Parent privacy/settings/subscription surfaces are included above.

### Layout / system files
- `app/_layout.tsx`

## Navigation Target Inventory

| Source file | Navigation expression | Resolved target | Target type | Status | Notes |
|---|---|---|---|---|---|
| `app/index.tsx` | `router.push('/onboarding')` | `/onboarding` | static | valid | Entry CTA to onboarding. |
| `app/onboarding.tsx` | `router.push('/(child)/today')` | `/(child)/today` | static | valid | Onboarding continue CTA. |
| `app/(child)/today.tsx` | `<Link href='/(child)/worlds'>` | `/(child)/worlds` | static | valid | Story World primary CTA. |
| `app/(child)/today.tsx` | `router.push(p.href as never)` | `/world/{slug}` | dynamic | valid | Quick-start cards route to world slugs. |
| `app/(child)/today.tsx` | `<Link href='/(parent)/dashboard'>` | `/(parent)/dashboard` | static | valid | Parent surface CTA. |
| `app/(child)/worlds.tsx` | `router.push(d.href as never)` | `/world/{slug}` | dynamic | valid | World grid routes to world slug detail. |
| `app/world/[slug].tsx` | `<Link href='/(child)/worlds'>Back to Story World</Link>` | `/(child)/worlds` | fallback | valid | Missing/unknown world fallback link. |
| `app/world/[slug].tsx` | `<Link href={`/story/${c.storySlug}`}>` | `/story/{slug}` | dynamic | valid | Available story card route. |
| `app/story/[slug].tsx` | `<Link href='/(child)/worlds'>Return to Story World</Link>` | `/(child)/worlds` | fallback | valid | Missing/unavailable story fallback. |
| `app/story/[slug].tsx` | `<Link href='/(child)/today'>Go back to Child Home</Link>` | `/(child)/today` | fallback | valid | Missing/unavailable story fallback. |
| `app/story/[slug].tsx` | `<Link href='/(child)/worlds'>← Back to Story World</Link>` | `/(child)/worlds` | static | valid | Top back navigation in loaded story path. |
| `app/story/[slug].tsx` | `<Link href='/(child)/worlds'>Back to Story World</Link>` | `/(child)/worlds` | fallback | valid | Completion fallback. |
| `app/story/[slug].tsx` | `<Link href='/(child)/today'>Back to Child Home</Link>` | `/(child)/today` | fallback | valid | Completion fallback. |
| `app/(child)/treasures.tsx` | `<Link href='/(child)/worlds'>` | `/(child)/worlds` | static | valid | Treasures to Story World. |
| `app/(child)/treasures.tsx` | `<Link href='/(child)/today'>` | `/(child)/today` | static | valid | Treasures to Child Home. |
| `app/(child)/treasures.tsx` | `<Link href={`/story/${packet.story.slug}`}>` | `/story/{slug}` | dynamic | valid | Revisit story target. |
| `app/(child)/treasures.tsx` | `<Link href='/(child)/treasures'>` | `/(child)/treasures` | static | valid | Self-route open link. |
| `app/(child)/bedtime.tsx` | `<Link href='/(child)/today'>` | `/(child)/today` | static | valid | Placeholder return path. |
| `app/(child)/chant.tsx` | `<Link href='/(child)/today'>` | `/(child)/today` | static | valid | Placeholder return path. |
| `app/(parent)/dashboard.tsx` | `<Link href='/(parent)/controls'>` | `/(parent)/controls` | static | valid | Parent controls CTA. |
| `app/(parent)/dashboard.tsx` | `<Link href='/(parent)/privacy'>` | `/(parent)/privacy` | static | valid | Trust/privacy CTA. |
| `app/(parent)/dashboard.tsx` | `<Link href='/(child)/today'>` | `/(child)/today` | static | valid | Switch to child mode. |
| `app/(parent)/gate.tsx` | `router.replace('/(parent)/dashboard')` | `/(parent)/dashboard` | static | valid | Gate pass route. |
| `app/(parent)/gate.tsx` | `<Link href='/(child)/today'>` | `/(child)/today` | static | valid | Parent gate exit route. |
| `app/(parent)/profiles.tsx` | `router.replace('/(parent)/dashboard')` | `/(parent)/dashboard` | static | valid | Profiles gate route. |
| `app/(parent)/profiles.tsx` | `<Link href='/(child)/today'>` | `/(child)/today` | static | valid | Profiles gate exit route. |
| `app/(parent)/controls.tsx` | `<Link href='/onboarding'>` | `/onboarding` | static | valid | Parent reset/setup route. |
| `app/(parent)/controls.tsx` | `<Link href='/(parent)/journey-settings'>` | `/(parent)/journey-settings` | static | valid | Journey settings route. |
| `app/(parent)/controls.tsx` | `<Link href='/(parent)/dashboard'>` | `/(parent)/dashboard` | static | valid | Return route. |
| `app/(parent)/journey-settings.tsx` | `<Link href='/(parent)/controls'>` | `/(parent)/controls` | static | valid | Return route. |
| `app/(parent)/privacy.tsx` | `<Link href='/(parent)/dashboard'>` | `/(parent)/dashboard` | static | valid | Return route. |
| `app/(parent)/feedback.tsx` | `<Link href='/(parent)/dashboard'>` | `/(parent)/dashboard` | static | valid | Return route. |

## Primary CTA Coverage
- Entry CTA (`Begin the journey`) routes to onboarding.
- Onboarding CTA (`Continue`) routes to child home.
- Child Home primary CTA (`Open Story World`) routes to world browser.
- Child Home quick-start CTA cards route to valid dynamic world paths.
- Parent entry CTA (`Open Parent Space`) routes to parent dashboard.
- World card CTA (`Read story`) routes to valid dynamic story paths.

## Dynamic Route Coverage
- `/world/[slug]` runtime coverage confirmed via quick-start/world-grid navigation and unknown-slug fallback card.
- `/story/[slug]` runtime coverage confirmed via world detail story cards and treasures revisit links.
- Known world targets observed in runtime: `/world/krishna`, `/world/ganesha`, `/world/ramayana`, `/world/hanuman`, `/world/bedtime`, `/world/values`, `/world/festivals`.

## Fallback State Coverage
- Missing world slug fallback present in `app/world/[slug].tsx` with “Back to Story World” route.
- Missing story slug/unavailable story fallback present in `app/story/[slug].tsx` with:
  - “Return to Story World”
  - “Go back to Child Home”
- Loaded-story completion fallback path also includes world/home links.
- Coming soon world/story case present in world cards with guarded “Coming soon” (or journey messaging) state when story is unavailable.

## Scope Guardrail Confirmation
- No new routes were added.
- No prototype-only runtime screens were added.
- No Screens 424–487 runtime implementation was added.
- No fake phone chrome strings/patterns detected in app/src runtime scope.
- No backend/auth/payment/audio/microphone/recording implementation was added in this PR.
- No hard gamification terms (XP/coins/leaderboard/ranking/streak/score) introduced in runtime scope.

## Broken Links Found and Fixed
- No broken internal route links found in audited navigation expressions.
- No route code fixes were required; this PR adds audit + validator coverage for ongoing integrity checks.

## Known Non-blocking Issues
- Older strict visual validators may fail during multi-route PRs due to legacy single-surface scope assumptions; route-integrity validator is the primary PR #108 gate.

## Final PR #108 Readiness Statement
Route integrity and navigation QA checks pass for current app route architecture. Existing route graph is stable, dynamic world/story paths are validated, required fallback states are present, and scope guardrails remain intact for release-readiness progression.
