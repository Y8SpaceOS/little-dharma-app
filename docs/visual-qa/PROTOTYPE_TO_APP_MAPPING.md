# Prototype-to-App Mapping

Date: 2026-05-20 (UTC)

> Note: PR #98 code was not available locally, so rows for Screen 03–08 are evidence-based from current app only and marked for follow-up where uncertain.

| Prototype screen ID | Prototype title | Matching app route/component/state | Already engineered before visual repair? | Current sprint approved? | Should be repaired now? | Should remain future-only? | Notes |
|---|---|---|---|---|---|---|---|
| 01 | Splash / Brand entry | `/` (`app/index.tsx`) | Yes | Yes | Yes | No | Existing real app screen. |
| 02 | Brand philosophy / values intro | `/onboarding` (`app/onboarding.tsx`) | Yes | Yes (PR #97) | Yes | No | Existing real app screen. |
| 03 | Parent Promise | No dedicated route found | No | No evidence | No | Yes | Add only after explicit scope approval. |
| 04 | Child Profile Setup | Data model exists (`lib/childProfile`) + parent controls summary; no dedicated onboarding screen | Partial | No explicit onboarding approval found | No | Yes (until approved) | Could be future onboarding split if roadmap approves. |
| 05 | Meet Luvlu | Luvlu helper copy embedded in child/story screens; no dedicated route | Partial | No explicit standalone-screen approval found | No | Yes | Keep as helper component/copy for now. |
| 06 | Content Comfort Settings | Parent controls toggles in `/(parent)/controls`; no onboarding screen | Partial | Parent controls approved; onboarding insertion not approved | No | Yes | Avoid introducing as onboarding step yet. |
| 07 | First World Preview | Story World surfaces already exist (`/(child)/worlds`, `/world/:slug`) | Yes (as app surface) | Yes for world browsing; no evidence for onboarding insertion | Maybe (visual parity only) | Maybe | Do not add new onboarding route without scope. |
| 08 | Parent Gate | `/(parent)/gate` route exists | Yes | Likely approved historically; flow placement unclear | Maybe (if existing flow bug) | No | Audit route wiring before adding new checkpoint states. |
