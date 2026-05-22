# PR #125: Ramayana Journey Pack 1

## PR title and purpose
Establish a small, local-first, child-safe Ramayana journey content foundation (3–5 stories) using the existing content model, registry, import, QA, resolver, browse, and journey foundations.

## Roadmap alignment
- Approved roadmap originally scoped this as PR #122.
- Release-readiness governance inserts (PR #115–117) shifted this sprint to PR #125.
- This PR preserves the approved sequence intent while respecting merged foundations PR #118–124.

## Why Ramayana Journey Pack 1 is first
Ramayana is a foundational dharmic narrative familiar to many families. A small, careful first pack supports trust-building and editorial discipline before broader corpus expansion.

## Content scope
This PR introduces **five** child-safe Pack 1 stories only, with no attempt to cover the full Ramayana corpus.

## Stories included
1. Rama’s Kind Promise
2. Sita’s Garden of Care
3. Lakshmana’s Loving Service
4. Hanuman Listens Before He Leaps
5. A Bridge Built Together

## Age-band strategy
- Primary focus: ages 3–8.
- Metadata supports `3-5`, `6-8`, and limited `family` where context helps parent co-reading.

## Sacred/cultural respect approach
- Sacred characters are represented with restrained, warm, non-comedic treatment.
- Language avoids irreverence, parody, absolutist claims, or sensational framing.

## Parent trust approach
- Every story includes structured parent notes with context, value framing, discussion prompts, and caution notes.
- Content avoids fear-heavy discipline framing and focuses on gentle guidance.

## Editorial QA expectations
- Stories are set to `qa_ready` by default.
- No story is marked casually `available`.
- Editorial QA Validator v1 remains the required gate before runtime exposure progression.

## Runtime availability rules
- Runtime visibility remains gated by status and runtime resolver eligibility rules.
- `qa_ready` content can exist in registry without becoming runtime-available.

## Relationship to Content Model v2
All Ramayana stories, pack, and journey metadata use Content Model v2 fields and typing.

## Relationship to Content Registry
Ramayana Pack 1 is appended in registry after existing Vrindavan content; no existing IDs/slugs are overwritten.

## Relationship to Editorial QA Validator v1
This pack is intentionally staged for QA progression and does not bypass editorial policy enforcement.

## Relationship to Runtime Story Resolver v2
Resolver gating behavior is preserved. This PR adds scoped content; it does not loosen resolver eligibility.

## Relationship to Journey Data Model v1
Pack journey identity (`ramayana-journey-pack-1`) is mapped into existing journey registry and aligns with Journey Data Model v1 assumptions.

## Local-first/no-backend assumptions
- Local synchronous content only.
- No backend/auth/payment/analytics/mic/recording/network implementation.

## What this PR changes
- Adds Ramayana Pack 1 seed stories.
- Adds Ramayana pack/journey registry adapter.
- Integrates Ramayana entries into content registry maps.
- Adds optional import manifest in Story Import Pipeline v1 format.
- Adds PR-specific validator.

## What this PR does not do
- No new app routes.
- No Story World doorway output/order change.
- No UI redesign.
- No completion behavior change.
- No full Ramayana corpus import.

## Follow-up recommendations for PR #126 and PR #127
- **PR #126: Krishna Childhood Pack 1** — next culturally anchored child-safe pack expansion with same QA/runtime gating discipline.
- **PR #127: Ganesha Wisdom Pack 1** — focused wisdom-first pack with strong sacred respect controls.

## Final PR #125 readiness statement
PR #125 is ready once typecheck/lint/tests and all required content pipeline validators pass, including the Ramayana Pack 1 validator.
