# Sprint Depth Standards

Depth means covering the full impacted product surface, adjacent regressions, and quality-level expectations; not just shipping the first implementation that works.

## Sprint Types

### 1) Product Experience Sprint
- **Required thinking depth:** Journey-level UX reasoning, parent/child emotional outcomes, empty/error/completion states.
- **Minimum implementation coverage:** Primary screen + entry/exit flows + state variants.
- **Expected edge cases:** Interrupted sessions, missing data, repeat usage, small-screen readability.
- **Required regression checks:** Home, story loop, parent dashboard, navigation continuity.
- **Required docs/log updates:** Queue status, TASK_LOG checks/QA, acceptance/PR depth notes.
- **Shallow execution examples:** One happy path only; no completion or retry states.
- **Category-defining execution examples:** Full journey polish with clear ritual framing and no trust regressions.

### 2) Content Engine Sprint
- **Required thinking depth:** Narrative quality, authenticity, age appropriateness, value pedagogy.
- **Minimum implementation coverage:** Content schema + at least one integrated runtime path.
- **Expected edge cases:** Incomplete packets, provenance uncertainty, tone mismatch.
- **Required regression checks:** Story rendering, ritual steps, quiz, completion copy.
- **Required docs/log updates:** Content review notes and provenance decisions.
- **Shallow execution examples:** Adding raw content without review/model consistency.
- **Category-defining execution examples:** Structured packets with editorial quality and safe cultural clarity.

### 3) Trust & Safety Sprint
- **Required thinking depth:** Threat modeling, misuse scenarios, parent expectation alignment.
- **Minimum implementation coverage:** Policy + enforcement points + user-facing trust signals.
- **Expected edge cases:** Unsafe inputs, accidental exposure, consent ambiguity.
- **Required regression checks:** Child visibility boundaries, parent controls, privacy defaults.
- **Required docs/log updates:** Decision log for trust tradeoffs, safety checklist updates.
- **Shallow execution examples:** Policy text only with no enforceable behavior.
- **Category-defining execution examples:** Defense-in-depth controls plus clear parent communication.

### 4) Growth Loop Sprint
- **Required thinking depth:** Trust-safe distribution mechanics and message-market fit.
- **Minimum implementation coverage:** Share trigger + payload quality + safety constraints.
- **Expected edge cases:** Oversharing risk, ambiguous audience, broken share context.
- **Required regression checks:** Completion flow, parent-safe copy, no child-public routes.
- **Required docs/log updates:** Growth risk notes and protected-dimension checks.
- **Shallow execution examples:** “Share” button without payload safety or trust framing.
- **Category-defining execution examples:** Parent-led, privacy-safe sharing with meaningful value story.

### 5) Platform Foundation Sprint
- **Required thinking depth:** Reliability, developer velocity, release risk reduction.
- **Minimum implementation coverage:** Root-cause fix + verification commands + durable docs.
- **Expected edge cases:** Clean install, version drift, config differences, flaky checks.
- **Required regression checks:** Test/typecheck/build/dev scripts as applicable.
- **Required docs/log updates:** Runner/template/log updates reflecting new standards.
- **Shallow execution examples:** One-off local fix without reproducibility.
- **Category-defining execution examples:** Deterministic tooling and auditable execution process.

### 6) Monetisation Sprint
- **Required thinking depth:** Value exchange fairness, trust-preserving monetisation UX.
- **Minimum implementation coverage:** Pricing/value communication + fail-safe handling.
- **Expected edge cases:** Restore/cancel ambiguity, entitlement mismatch, billing confusion.
- **Required regression checks:** Parent trust surfaces and subscription-adjacent flows.
- **Required docs/log updates:** Monetisation risk and trust implications.
- **Shallow execution examples:** Payment hook added with unclear value narrative.
- **Category-defining execution examples:** Transparent premium framing with zero child-pressure patterns.

### 7) Audio/Ritual Sprint
- **Required thinking depth:** Calm pacing, pronunciation clarity, family ritual usability.
- **Minimum implementation coverage:** Ritual entry, execution, completion reflection bridge.
- **Expected edge cases:** Quiet/noisy settings, repeated use fatigue, comprehension gaps.
- **Required regression checks:** Story cadence, ritual step rendering, completion continuity.
- **Required docs/log updates:** Ritual quality notes and manual QA evidence.
- **Shallow execution examples:** Ritual text inserted without flow integration.
- **Category-defining execution examples:** Repeatable, emotionally resonant 10-minute ritual loop.

### 8) Brand/IP Sprint
- **Required thinking depth:** World coherence, cultural respect, signature brand language.
- **Minimum implementation coverage:** Canonical brand rules + applied examples.
- **Expected edge cases:** Tone inconsistency, cultural flattening, visual mismatch.
- **Required regression checks:** Copy/system consistency across child and parent surfaces.
- **Required docs/log updates:** Decision log rationale and brand governance updates.
- **Shallow execution examples:** Generic branding with no durable system.
- **Category-defining execution examples:** Distinctive, trustworthy, culturally rich world-building.

## Sprint Depth Checklist (Required in Every Sprint PR)
1. What user outcome improved?
2. What is the primary quality dimension?
3. What are the protected quality dimensions?
4. What surfaces were touched?
5. What adjacent surfaces were checked?
6. What edge cases were considered?
7. What was intentionally deferred?
8. What would make this sprint feel shallow?
9. Why is the implementation deep enough for the current quality level?
10. What manual QA proves this?
