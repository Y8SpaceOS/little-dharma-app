# PR #123: Story World Data-Driven Browse

## PR title and purpose
PR #123 migrates Story World browse data construction from hardcoded screen arrays to a local-first data service backed by Content Registry + Runtime Story Resolver v2 eligibility while preserving current Story World UX and routing.

## Roadmap alignment
This PR is the roadmap-approved Story World Data-Driven Browse sprint (originally planned as PR #120, shifted to PR #123 after PR #115–117 governance insertions).

## Why data-driven browse is needed
A data-driven browse layer reduces duplication, enforces runtime eligibility consistently, and keeps child-facing browse cards aligned with canonical content registry records.

## Relationship to Content Model v2
Browse cards now map from Content Model v2 stories for runtime-ready content and carry typed metadata aligned with content model fields.

## Relationship to Content Registry Refactor
Content Registry remains the canonical local source for runtime-backed stories. Browse service reads from it directly for eligible story cards.

## Relationship to Runtime Story Resolver v2
Runtime Story Resolver v2 eligibility rules are reused to determine whether registry stories are browse-routable to `/story/[slug]`.

## Current Story World browse reality
Story World doorway categories remain unchanged and continue to present doorway cards to world/category routes, with coming-soon treatment preserved.

## Browse model
`src/types/storyWorldBrowse.ts` introduces:
- `StoryWorldBrowseStatus`
- `StoryWorldBrowseCard`
- `StoryWorldBrowseSection`
- `StoryWorldBrowseSummary`

## Browse service exports
`src/services/storyWorldBrowseService.ts` exports:
- `storyWorldBrowseVersion`
- `getStoryWorldBrowseSections()`
- `getStoryWorldBrowseCards()`
- `getStoryWorldBrowseCardBySlug(slug)`
- `getStoryWorldBrowseSummary()`
- `mapRegistryStoryToBrowseCard(story)`
- `mapStoryWorldItemToBrowseCard(item)`

## Runtime availability rules
A registry story is browse-runtime-available only when runtime eligibility is true under resolver v2 checks.

## Coming-soon handling
Coming-soon doorway cards remain non-story routed and preserve child-safe “More stories coming soon” behavior.

## Preview scaffold blocking rules
Preview/import scaffold stories are explicitly blocked from available/routable browse outcomes.

## Navigation safety rules
No new routes were added. Browse cards keep existing `/world/[slug]` doorway behavior, and runtime story routes remain `/story/[slug]` only for eligible content.

## Accessibility preservation
Browse cards preserve button roles, labels, and hints consistent with current interaction semantics.

## Child-facing language rules
Child-facing copy keeps “Story World” terminology and avoids “Story Library.”

## Luvlu usage boundaries
Luvlu remains a subtle helper copy element and is not used as gamification, logo, token, badge, or unrelated decoration.

## Local-first/no-backend assumptions
All browse helpers are synchronous and local. No backend/auth/payment/network/mic/recording implementation is introduced.

## What this PR changes
- Adds Story World browse model types.
- Adds Story World browse service connected to Content Registry and runtime eligibility.
- Migrates `app/(child)/worlds.tsx` data construction to service-backed browse sections.
- Adds validator for Story World data-driven browse requirements.

## What this PR does not do
- No Story World UI redesign.
- No route expansion.
- No journey model overhaul (deferred to PR #124).
- No content-scale import visibility expansion.

## Migration safety rules
- Preserve existing Story World categories and route expectations.
- Keep coming-soon content non-routable to unavailable story pages.
- Block preview scaffold availability.
- Maintain Vrindavan fallback behavior in runtime story resolution.

## Follow-up recommendations for PR #124 and PR #125
- **PR #124: Journey Data Model v1** — formalize journey-specific browse/detail data contracts and reduce legacy world-detail duplication.
- **PR #125: Ramayana Journey Pack 1** — introduce first runtime-ready Ramayana journey content pack using established browse + resolver guardrails.

## Final PR #123 readiness statement
PR #123 is ready when typecheck/lint/test plus route/local-first/runtime/content validators pass and no preview scaffold content is browse-routable as available.
