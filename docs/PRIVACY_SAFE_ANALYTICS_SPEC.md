# Sprint 58 — Privacy-Safe Analytics Specification

## Sprint objective
Define a future-facing, privacy-safe analytics specification for private-beta learning while preserving parent trust and child safety.

## Current state (Sprint 58)
- **No runtime instrumentation is added in Sprint 58.**
- **No analytics SDK is added in Sprint 58.**
- **No backend telemetry is added in Sprint 58.**
- This sprint is documentation/specification only; any future implementation requires separate approval.

## Measurement philosophy
1. Measure only what is needed to improve child ritual quality and parent trust.
2. Prefer aggregate, non-identifying product signals over user-level tracking.
3. Use local-first defaults and avoid transmission by default.
4. Treat absence of data as acceptable when privacy would be compromised.
5. Never trade trust for optimization speed.

## Parent-trust principles
- Parent expectations must be conservative, explicit, and continuously honored.
- Measurement intent must be clear in parent-facing disclosures before any runtime rollout.
- Parent choice must be respected; consent boundaries are mandatory, not optional.
- No hidden collection, no misleading language, and no dark-pattern retention mechanics.

## Child-safety principles
- Child safety is prioritized above analytics completeness.
- No child identity tracking, profiling, or rank/scoring mechanics.
- No capture of intimate child expression (including raw reflections).
- Analytics must never pressure behavior, induce streak anxiety, or gamify dependence.

## Explicit non-goals
- Implementing analytics in runtime.
- Adding analytics SDK/vendor packages.
- Adding backend telemetry pipelines.
- Collecting free-text payloads.
- Introducing identity, social graph, leaderboard, advertising, or monetization tracking.

## Consent and disclosure boundaries
- Any future non-essential analytics must be **parent reviewed and disclosed** before collection.
- Consent language must be plain and specific about data category, purpose, and retention.
- No consent bundling with unrelated actions.
- No implied consent through continued app use in child-facing surfaces.

## Data minimization rules
- Collect only event-level metadata required for explicit learning questions.
- Use timestamp buckets rather than precise timestamps unless a documented exception passes privacy review.
- Prefer coarse states (e.g., completion state) to behavioral sequences.
- Avoid high-cardinality identifiers unless proven necessary and privacy-approved.

## Future-facing event taxonomy statement
The taxonomy in `docs/content/privacy-safe-event-taxonomy.csv` is **proposal-only** and has these hard constraints:
- no runtime instrumentation in Sprint 58,
- no SDK/vendor/backend additions in Sprint 58,
- any future instrumentation must pass parent-trust + privacy review before implementation.

## Allowed future event categories
- App lifecycle at aggregate level.
- Parent dashboard usage.
- Parent feedback flow usage.
- Story journey progress at non-sensitive aggregate level.
- Ritual completion at non-sensitive aggregate level.
- Feature discovery.
- Error/fallback occurrence at non-diagnostic aggregate level.
- Loading-state experience checks at non-user-identifying aggregate level.

## Prohibited future event categories
- Child identity tracking.
- Exact child name or parent contact details.
- Free-text feedback contents.
- Sensitive child information.
- Raw story reflections.
- Private parent notes.
- Device fingerprinting.
- Location tracking.
- Advertising identifiers.
- Public profile behavior or social graph data.
- Behavioral profiling.
- Performance scoring and ranking/leaderboard data.
- Dark-pattern retention metrics.

## Event naming conventions
- snake_case only.
- Names must describe product action, not person identity.
- Prefer verb-final past tense for viewed/opened/completed states.
- Prefix by surface when needed for clarity (e.g., `parent_*`, `story_*`, `ritual_*`).
- Prohibited semantics in names: rank, score, profile, export, contact, fingerprint, location.

## Required future event field rules (privacy-reviewed only)
Allowed fields are limited to:
- `event_name`
- `timestamp_bucket` (preferred over precise timestamp)
- `app_version`
- `surface`
- `journey_world`
- `story_slug` (only when non-sensitive)
- `age_band` (only if parent-approved and aggregated)
- `local_session_type` (non-identifying)
- `completion_state` (non-sensitive)

## Forbidden event fields
- child name
- parent name
- phone/email/contact detail
- free-text feedback
- raw reflection text
- exact birth date
- GPS/location
- advertising ID
- device fingerprint
- IP address storage
- precise behavioral profile
- school name
- photo/audio/video data

## Retention principles
- Prefer local-only and ephemeral storage by default.
- Define maximum retention windows before any rollout; shorter is preferred.
- Aggregate and de-identify as early as possible if transfer is ever approved.
- No indefinite retention for behavior logs.
- Deletion pathways must be documented before launch.

## Local-first / no backend assumption
- Baseline assumption: analytics remain local-first and disabled by default until approved.
- No backend endpoint is assumed in this sprint.
- No cloud sync dependency is assumed in this sprint.

## Future implementation guardrails
1. Separate privacy review ticket is required before coding.
2. Parent trust copy must be updated and approved before rollout.
3. Runtime implementation must be behind explicit controlled rollout.
4. Instrument only approved taxonomy rows with approved fields.
5. Add/adjust validator coverage when any analytics code is introduced.
6. Verify zero forbidden fields in payload schemas and logs.
7. Re-run full regression suite to protect existing behavior.

## Vendor/SDK evaluation rules for later
- Vendor adoption is blocked unless local-first constraints and minimization can be enforced.
- Must support strict field allowlist enforcement.
- Must provide deletion controls and retention policy guarantees.
- Must not require advertising identifiers or fingerprinting.
- Must pass security/privacy review and parent-trust review.
- Must be replaceable (no lock-in assumptions in core app architecture).

## Private-beta learning questions (future)
1. Are families completing rituals consistently without pressure mechanics?
2. Which parent surfaces are most useful for trust and reflection?
3. Are loading/fallback experiences reducing confusion in key flows?
4. Where do story starts fail to reach completion at an aggregate level?
5. Which features are discoverable without intrusive prompts?

## Red-line rules that must block implementation
- Any attempt to capture child identity tracking data.
- Any collection of free-text feedback contents or raw story reflections.
- Any use of device fingerprinting, advertising identifiers, or location tracking.
- Any performance scoring/leaderboard mechanics tied to child behavior.
- Any dark-pattern retention metric or pressure loop.
- Any SDK/backend addition without separate privacy and parent-trust approvals.

## Manual review checklist before any future runtime instrumentation
- [ ] Parent-trust review approved.
- [ ] Child-safety review approved.
- [ ] Data minimization review approved.
- [ ] Consent/disclosure copy approved.
- [ ] Field allowlist + forbidden-field checks approved.
- [ ] Retention and deletion policy approved.
- [ ] Vendor/SDK due diligence approved (if applicable).
- [ ] Regression + QA matrix pass recorded.
- [ ] Manual iPhone QA pass recorded.

## Good vs bad future event examples
Good: `app_opened`, `parent_dashboard_viewed`, `parent_feedback_opened`, `parent_feedback_saved_local`, `story_started`, `story_completed`, `ritual_completed`, `treasures_viewed`, `privacy_center_viewed`, `route_fallback_shown`.

Bad: `child_name_entered`, `child_location_captured`, `parent_contact_exported`, `raw_reflection_submitted`, `feedback_text_uploaded`, `child_rank_calculated`, `streak_pressure_shown`.

## Final QA status (Sprint 58)
- Spec doc created.
- Machine-readable taxonomy CSV created.
- QA tracker CSV created.
- Validator created for structure, policy language, and non-instrumentation guardrails.
- Runtime instrumentation remains unchanged in this sprint.
