# Master Sprint Queue

Status legend: `not started`, `in progress`, `done`.

`docs/MASTER_SPRINT_QUEUE.md` is the sprint-selection source of truth for Codex autopilot. Run exactly one sprint per execution: the first sprint with `Status: not started`.

## Soul Prototype

### Sprint 11 — Execution OS and Master Sprint Queue
- **Status:** done
- **Completion note:** Added execution OS docs, Codex runner, PR template, iPhone QA loop, content quality bar, and sprint queue.
- **Primary track:** Platform Foundations
- **Objective:** Codify Codex execution OS and durable sprint governance artifacts for deterministic one-sprint delivery.
- **Scope:** Finalize sprint runner docs, acceptance template, PR template, manual iPhone QA loop, content quality bar, and master queue scaffolding.
- **Non-scope:** App feature work, UI changes, dependencies, auth/payments/audio/sharing/content additions.
- **Definition of done:** All execution-system docs merged; Sprint 11 marked done with completion note; logs updated and checks reported honestly.
- **Manual iPhone QA steps:** Pull latest branch, install deps, run tests, launch `npx expo start --clear`, validate affected child/parent flows on Expo Go, log defects with repro steps.
- **Category-defining product check focus:** Execution consistency, parent trust safeguards, and long-horizon category-defining operating discipline.

### Sprint 12 — Engineering Quality Gate Cleanup
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Reliability
- **Protected quality dimensions:** Child safety defaults, parent trust surfaces, daily ritual continuity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Stabilized Expo-compatible TypeScript gate by keeping `extends: expo/tsconfig.base`, setting valid deprecation compatibility, and documenting deterministic quality-gate execution order/lockfile policy for local + CI.
- **Primary track:** Platform Foundations
- **Objective:** Fix recurring typecheck/toolchain blockers, tsconfig issues, package-lock drift, and repo health so future Codex PRs are safer.
- **Scope:** Repair tsconfig issues, align scripts, regenerate deterministic lockfile strategy, and document standard quality-gate order for local + CI.
- **Non-scope:** Feature delivery, UI updates, new dependencies beyond fixing existing install parity, and roadmap expansion.
- **Definition of done:** Typecheck/test commands are reliable in standard environment and remaining blockers (if any) are explicitly documented with owner and next action.
- **Manual iPhone QA steps:** Run startup and regression checks on iPhone after clean Expo boot to ensure no runtime regressions from build-system cleanup.
- **Category-defining product check focus:** Safety-through-reliability: strong engineering hygiene protects trust and faster category execution.

### Sprint 13 — Lint and Static Analysis Baseline Hardening
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Reliability
- **Protected quality dimensions:** Child safety defaults, parent trust surfaces, daily ritual continuity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Restored deterministic ESLint command + flat config baseline and added environment-aware lint runner that marks missing parser dependencies as intentional warning until npm ci is available.
- **Primary track:** Platform Foundations
- **Objective:** Reinstate dependable lint/static analysis gates to prevent avoidable regressions.
- **Scope:** Restore lint config completeness, standardize rule severity, and ensure lint command is deterministic across environments.
- **Non-scope:** Product behavior changes, visual updates, and unrelated refactors.
- **Definition of done:** Lint command passes (or has documented intentional warnings) and is mandatory in sprint verification checklist.
- **Manual iPhone QA steps:** Confirm key child/parent screens still render on iPhone after any config file changes and rebuild.
- **Category-defining product check focus:** Premium product quality starts with clean, consistent engineering signals.

### Sprint 14 — Test Harness Reliability and Coverage Targets
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Growth Loop
- **Primary quality dimension:** Parent-safe shareability
- **Protected quality dimensions:** Parent trust, Premium UI/UX taste, Safety/privacy, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Platform Foundations
- **Objective:** Strengthen automated confidence by making the test harness stable and defining meaningful coverage targets.
- **Scope:** Stabilize test runner behavior, define critical flow coverage targets, and document test taxonomy (smoke/unit/integration).
- **Non-scope:** New user-facing functionality or new content drops.
- **Definition of done:** Test harness runs consistently with clear target coverage expectations and no flaky baseline failures.
- **Manual iPhone QA steps:** Run child-home to story-completion sanity loop on iPhone to validate no hidden runtime regressions.
- **Category-defining product check focus:** Reliability that enables faster safe iteration toward daily ritual quality.

### Sprint 15 — Developer Environment Bootstrap Guide
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Make contributor setup reproducible so sprint velocity does not depend on tribal knowledge.
- **Scope:** Publish environment matrix, bootstrap scripts/steps, troubleshooting guide, and clean-reset instructions.
- **Non-scope:** Feature work, UX tuning, or content changes.
- **Definition of done:** A new contributor can follow docs to run install, test, and typecheck without ad-hoc fixes.
- **Manual iPhone QA steps:** Verify Expo Go launch on iPhone using bootstrap guide exactly as written; fix doc gaps.
- **Category-defining product check focus:** Execution speed and consistency as a strategic moat.

### Sprint 16 — Story Player Premium Polish
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Premium UI/UX taste
- **Protected quality dimensions:** Parent trust, safety/privacy, content depth and authenticity, parent-safe shareability, daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Polished Story Player hierarchy, spacing, magical reading treatment, progress clarity, quiz/completion visual rhythm, and CTA hierarchy while preserving story logic, local progress behavior, and parent-safe private completion card.
- **Primary track:** Product Experience
- **Objective:** Elevate story player pacing and visual hierarchy to feel category-defining and calm for children.
- **Scope:** Polish story step typography/spacing/CTA clarity, improve completion feedback states, and tighten interaction consistency.
- **Non-scope:** Adding new stories, auth/payments, or broad navigation redesign.
- **Definition of done:** Story flow feels smoother end-to-end with no regressions and clear premium UX deltas documented.
- **Manual iPhone QA steps:** On iPhone run full story journey (start, navigate panels, ritual, quiz, completion) and verify readability/tap comfort.
- **Category-defining product check focus:** Child delight + premium taste without sacrificing simplicity.

### Sprint 17 — Ritual Moment Premium Polish
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Premium UI/UX taste
- **Protected quality dimensions:** Daily 10-minute ritual habit, parent trust, child delight, safety/privacy, content depth and authenticity, parent-safe shareability
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Elevated Ritual Moment into a calmer premium card with sacred-but-child-friendly hierarchy (chant seed, transliteration, meaning, reflection, practice duration) plus gentle framing copy while preserving Story → Ritual → Quiz → Completion flow and attribution-safe content.
- **Primary track:** Product Experience
- **Objective:** Refine ritual step emotional quality so it becomes a memorable daily micro-practice.
- **Scope:** Improve ritual copy framing, pacing hints, and transition ergonomics while preserving attribution-safe policy.
- **Non-scope:** New scripture claims, audio expansion, or backend requirements.
- **Definition of done:** Ritual moment demonstrates calmer flow and clearer parent-child bridge with safety constraints intact.
- **Manual iPhone QA steps:** Test ritual step across both available stories on iPhone and confirm comprehension + no dead ends.
- **Category-defining product check focus:** Daily habit stickiness through emotionally resonant ritual quality.

### Sprint 18 — My Treasures and Badge Wallet v1
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Child delight
- **Protected quality dimensions:** Daily 10-minute ritual habit, Premium UI/UX taste, Parent trust, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Replaced placeholder Treasures route with a warm private badge wallet using local story completion data, journey progress summary, and empty/earned states without adding public or social mechanics.
- **Primary track:** Product Experience
- **Objective:** Create a clearer child reward memory surface that reinforces progress and value learning.
- **Scope:** Define and implement v1 badge wallet information architecture and retrieval states for earned treasures.
- **Non-scope:** Public sharing/leaderboards or monetization gates.
- **Definition of done:** Child can review earned badges in a stable wallet view and parent trust constraints remain intact.
- **Manual iPhone QA steps:** Complete at least one story, open My Treasures on iPhone, verify earned-state persistence and empty-state behavior.
- **Category-defining product check focus:** Child delight + repeat engagement loop via safe private rewards.

### Sprint 19 — Vrindavan Path v2 Visual Upgrade
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Premium UI/UX taste
- **Protected quality dimensions:** Child delight, Daily 10-minute ritual habit, Parent trust, Safety/privacy, Content depth and authenticity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Rebuilt Explore Worlds into a child-friendly journey map with magical path framing, clear story-step cards, and completed/ready/coming-next states powered by existing local story completion data while preserving private-only progress and existing story navigation routes.
- **Primary track:** Product Experience
- **Objective:** Upgrade journey-path visual clarity so daily next-step progression is immediately understandable.
- **Scope:** Enhance path-node visuals, completed/incomplete affordances, and contextual guidance copy.
- **Non-scope:** Adding new worlds or heavy animation systems.
- **Definition of done:** Journey path communicates progress clearly with premium calm design and no confusion in usability checks.
- **Manual iPhone QA steps:** Navigate Today card to path screen on iPhone, verify node states before/after completion updates.
- **Category-defining product check focus:** 10-minute habit reinforcement through clear forward momentum cues.

### Sprint 20 — Parent Dashboard v2
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Parent trust
- **Protected quality dimensions:** Daily 10-minute ritual habit, Premium UI/UX taste, Content depth and authenticity, Safety/privacy, Child delight
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Upgraded `/(parent)/dashboard` into a premium private parent-trust surface with latest story/value/ritual/badge recap, progress summary, ritual-loop education, conversation starter, and explicit privacy reassurance using existing local completion data only.
- **Primary track:** Product Experience
- **Objective:** Improve parent confidence with clearer progress signals, ritual outcomes, and actionable reflection prompts.
- **Scope:** Refine dashboard sections, summary hierarchy, and next-action guidance for evening family reflection.
- **Non-scope:** Payment settings, notifications platform build-out, or account auth rollout.
- **Definition of done:** Dashboard communicates weekly trajectory and value outcomes with improved scannability.
- **Manual iPhone QA steps:** On iPhone review dashboard before and after story completion; validate summary updates and copy clarity.
- **Category-defining product check focus:** Parent trust + retention via meaningful visibility into child growth.

### Sprint 21 — Add Three More Vrindavan Stories
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Child delight, Daily 10-minute ritual habit, Parent trust, Safety/privacy, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added three new ritual-ready Vrindavan packets (gratitude, patience, truthfulness) with child-safe story/ritual/quiz/badge/parent-bridge content integrated into existing journey progression, Explore path, Treasures badges, and Parent Dashboard summaries via existing local progress flow.
- **Primary track:** Content Engine
- **Objective:** Expand content depth within existing world while preserving quality and safety governance.
- **Scope:** Create three additional structured Vrindavan story packets with ritual, quiz, badge, and parent bridge fields.
- **Non-scope:** New world launch, external CMS, or bulk low-quality content ingestion.
- **Definition of done:** Three new packets pass content quality bar and integrate cleanly with existing journey contracts.
- **Manual iPhone QA steps:** Play each new story on iPhone end-to-end and verify ritual/quiz/completion integrity.
- **Category-defining product check focus:** Content universe depth with handcrafted quality, not content-farm velocity.

### Sprint 22 — Seven-Day Vrindavan Path
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Child delight, Daily 10-minute ritual habit, Parent trust, Safety/privacy, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added two new Little Dharma Vrindavan story packets (cooperation, forgiveness) to complete a seven-story starter week with full Story → Ritual → Quiz → Completion schema coverage and existing local progress integrations across Today, Explore Worlds, My Treasures, and Parent Dashboard.
- **Primary track:** Content Engine
- **Objective:** Turn current multi-story path into a true seven-day ritual sequence.
- **Scope:** Define seven-day ordering, pacing metadata, and completion logic for daily continuity.
- **Non-scope:** Cross-world recommendations or subscription gating.
- **Definition of done:** Seven-day path rules are deterministic and reflected correctly in journey selection logic/docs.
- **Manual iPhone QA steps:** Simulate day-by-day progression on iPhone and verify next-journey assignment correctness.
- **Category-defining product check focus:** Daily habit strength through predictable ritual cadence.

### Sprint 23 — Continue Journey Logic
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Child delight, Parent trust, Premium UI/UX taste, Safety/privacy, Content depth and authenticity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Upgraded Child Home Today's Journey completed-path state into a warm Week 1 celebration with clear continuation actions (revisit stories, treasures, parent dashboard, daily reflection) while preserving local progress, reread flow, Explore Worlds completed behavior, and no auto-reset/public social surfaces.
- **Primary track:** Product Experience
- **Objective:** Improve end-of-path continuity after all seven Vrindavan stories are complete so children feel celebrated and guided, not stuck.
- **Scope:** Add completion-state celebration copy and continuation CTAs on Today’s Journey while preserving existing progression and adjacent summaries.
- **Non-scope:** New stories/worlds, backend/auth/payments/audio/sharing, automatic progress reset, or social/public child surfaces.
- **Definition of done:** After seven completions, Child Home shows premium celebratory continuation UX with safe next actions and no dead-end feeling.
- **Manual iPhone QA steps:** Complete/simulate all seven stories, open Child Home, verify celebration state and links (Explore Worlds/My Treasures/Parent Dashboard/reflection), verify reread path, and confirm no auto-reset or social/public surfaces.
- **Category-defining product check focus:** Child delight + ritual continuity + parent-safe continuation after completion.

### Sprint 24 — Local Weekly Progress
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Parent trust
- **Protected quality dimensions:** Daily 10-minute ritual habit, Child delight, Premium UI/UX taste, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added a local-only weekly Vrindavan progress summary to Parent Dashboard with clear 7-day completion/remaining counts, values practiced list, and gentle parent-facing weekly ritual guidance derived from existing story completion storage.
- **Primary track:** Platform Foundations
- **Objective:** Provide dependable local weekly progress aggregation for parent-facing insight surfaces.
- **Scope:** Define weekly progress model, local aggregation logic, and dashboard integration contract.
- **Non-scope:** Server analytics pipeline or remote data export.
- **Definition of done:** Weekly rollups are accurate and resilient across app restarts with tests/docs.
- **Manual iPhone QA steps:** Complete multiple journeys on iPhone and confirm weekly totals and summaries update correctly.
- **Category-defining product check focus:** Parent trust and retention via interpretable progress evidence.

### Sprint 25 — Parent-Safe Share Card v1
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Growth Loop
- **Primary quality dimension:** Parent-safe shareability
- **Protected quality dimensions:** Parent trust, Premium UI/UX taste, Daily 10-minute ritual habit, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Upgraded the story completion surface with a premium screenshot-friendly Little Dharma parent-safe share card that summarizes completed story, practiced value, badge earned, ritual reflection, and privacy-safe family copy without exposing child identifiers or adding native sharing/public-social features.
- **Primary track:** Growth Loops
- **Objective:** Design a trustworthy share-card artifact optimized for parent-to-parent private sharing moments.
- **Scope:** Define v1 share card content schema, privacy-safe defaults, and export-ready placeholder constraints.
- **Non-scope:** Public feeds, child identity exposure, and viral loops involving children directly.
- **Definition of done:** Share card format communicates value safely and is validated against trust/safety checklist.
- **Manual iPhone QA steps:** Complete a journey on iPhone and verify share-card content shows private-family-safe language.
- **Category-defining product check focus:** Shareable moment potential without compromising child safety.

### Sprint 26 — Share Card QA + Screenshot Polish
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Growth Loop
- **Primary quality dimension:** Parent-safe shareability
- **Protected quality dimensions:** Parent trust, Premium UI/UX taste, Safety/privacy, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Growth Loops
- **Completion note:** Polished the existing parent-safe screenshot share card with improved spacing, hierarchy, and line-wrapping readability for iPhone while preserving screenshot-only guidance and privacy-safe non-identifying content.
- **Objective:** Polish the parent-safe share card so it is screenshot-friendly, visually premium, privacy-safe, and readable on iPhone before any native sharing is introduced.
- **Scope:** Improve share card visual layout, hierarchy, spacing, and label readability while preserving existing completion actions and local progress update behavior.
- **Non-scope:** Native share APIs, backend/auth/cloud sync, public profiles, leaderboards, chat/community, analytics.
- **Definition of done:** Completion share card feels premium and screenshot-ready on iPhone without exposing child personal data or introducing public/social surfaces.
- **Manual iPhone QA steps:** Complete a story, review completion share card readability on iPhone, confirm no personal child data shown, verify Read Again + Done for Today, and verify My Treasures + Parent Dashboard still update.

- **Category-defining product check focus:** Parent-led private sharing readiness with trust-first guardrails.

### Sprint 27 — Grandparent Share Copy Variants
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Growth Loop
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Improve conversion of family sharing by tailoring copy variants for grandparents and extended family.
- **Scope:** Craft and test parent-safe copy variants plus selection rules by relationship context.
- **Non-scope:** New channels requiring backend messaging infrastructure.
- **Definition of done:** At least two validated copy variants with clear usage guidance and safety review sign-off.
- **Manual iPhone QA steps:** On iPhone preview/share each copy variant and confirm tone, brevity, and privacy-safe wording.
- **Category-defining product check focus:** Warm family virality grounded in cultural trust.

### Sprint 28 — Bedtime Mode v1
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Introduce a calmer bedtime interaction mode for nightly ritual consistency.
- **Scope:** Define bedtime mode behavior, visual tone adjustments, and transition entry/exit logic.
- **Non-scope:** Audio narration build-out or sleep tracking features.
- **Definition of done:** Bedtime mode is available, stable, and improves perceived calmness in QA sessions.
- **Manual iPhone QA steps:** Enable bedtime mode on iPhone at journey start and validate readability, pacing, and navigation comfort.
- **Category-defining product check focus:** Daily 10-minute ritual fit for real family bedtime contexts.

### Sprint 29 — Chant & Sing Ritual Section v1
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Add a dedicated chant-and-sing ritual section pattern while preserving attribution integrity.
- **Scope:** Define data contract and UI slot for chant/sing moments including transliteration and parent meaning notes.
- **Non-scope:** Streaming music catalog or broad audio library production.
- **Definition of done:** Chant/ritual section pattern is implemented for pilot stories with policy-compliant labeling.
- **Manual iPhone QA steps:** Run chant section in supported stories on iPhone and validate comprehension and safety copy.
- **Category-defining product check focus:** Cultural identity depth + child delight through participatory ritual.

### Sprint 30 — Soul Prototype Readiness Audit
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Assess Soul Prototype readiness against product, quality, safety, and growth criteria before next phase.
- **Scope:** Run readiness checklist, compile gaps, prioritize remediation list, and baseline KPI instrumentation needs.
- **Non-scope:** Large new feature implementation during audit sprint.
- **Definition of done:** Audit report complete with go/no-go recommendation and prioritized next-sprint actions.
- **Manual iPhone QA steps:** Execute full critical-path iPhone QA matrix and attach pass/fail evidence to audit notes.
- **Category-defining product check focus:** Strategic readiness with no illusion of progress.

### Sprint 31 — Content QA and Source-Note Model
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Deliver content qa and source-note model as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the content qa and source-note model increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Content QA and Source-Note Model meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How content qa and source-note model improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 32 — Source and Provenance Fields
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Deliver source and provenance fields as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the source and provenance fields increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Source and Provenance Fields meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How source and provenance fields improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 33 — Parent-Facing Why This Story Matters
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Deliver parent-facing why this story matters as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the parent-facing why this story matters increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Parent-Facing Why This Story Matters meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How parent-facing why this story matters improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 34 — Ganesha World Shell
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Deliver ganesha world shell as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the ganesha world shell increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Ganesha World Shell meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How ganesha world shell improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 35 — First Ganesha Stories
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Deliver first ganesha stories as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the first ganesha stories increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** First Ganesha Stories meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How first ganesha stories improves delight, trust, ritual consistency, safety, and future monetisation readiness.

## Private Beta

### Sprint 36 — Hanuman World Shell
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Deliver hanuman world shell as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the hanuman world shell increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Hanuman World Shell meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How hanuman world shell improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 37 — First Hanuman Stories
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Deliver first hanuman stories as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the first hanuman stories increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** First Hanuman Stories meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How first hanuman stories improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 38 — Age-Band Variations
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Deliver age-band variations as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the age-band variations increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Age-Band Variations meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How age-band variations improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 39 — Language-Ready Content Fields
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Deliver language-ready content fields as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the language-ready content fields increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Language-Ready Content Fields meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How language-ready content fields improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 40 — Hindi Transliteration and Meaning Fields
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Deliver hindi transliteration and meaning fields as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the hindi transliteration and meaning fields increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Hindi Transliteration and Meaning Fields meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How hindi transliteration and meaning fields improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 41 — Richer My Treasures
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Deliver richer my treasures as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the richer my treasures increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Richer My Treasures meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How richer my treasures improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 42 — Values Map
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Deliver values map as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the values map increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Values Map meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How values map improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 43 — Today I Learned Summary
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Deliver today i learned summary as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the today i learned summary increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Today I Learned Summary meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How today i learned summary improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 44 — Parent Evening Reflection Flow
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Deliver parent evening reflection flow as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the parent evening reflection flow increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Parent Evening Reflection Flow meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How parent evening reflection flow improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 45 — Gentle Seven-Day Ritual Streak
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Deliver gentle seven-day ritual streak as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the gentle seven-day ritual streak increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Gentle Seven-Day Ritual Streak meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How gentle seven-day ritual streak improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 46 — First Festival Pack Shell
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Deliver first festival pack shell as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the first festival pack shell increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** First Festival Pack Shell meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How first festival pack shell improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 47 — Festival Story and Ritual Format
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Deliver festival story and ritual format as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the festival story and ritual format increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Festival Story and Ritual Format meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How festival story and ritual format improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 48 — Festival Share Card Placeholder
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Deliver festival share card placeholder as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the festival share card placeholder increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Festival Share Card Placeholder meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How festival share card placeholder improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 49 — Parent Feedback Capture
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Deliver parent feedback capture as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the parent feedback capture increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Parent Feedback Capture meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How parent feedback capture improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 50 — Local Analytics Events
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Deliver local analytics events as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the local analytics events increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Local Analytics Events meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How local analytics events improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 51 — Error Boundaries
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Deliver error boundaries as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the error boundaries increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Error Boundaries meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How error boundaries improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 52 — Loading and Skeleton States
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Deliver loading and skeleton states as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the loading and skeleton states increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Loading and Skeleton States meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How loading and skeleton states improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 53 — Accessibility Pass
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Deliver accessibility pass as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the accessibility pass increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Accessibility Pass meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How accessibility pass improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 54 — Tablet Layout Pass
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Deliver tablet layout pass as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the tablet layout pass increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Tablet Layout Pass meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How tablet layout pass improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 55 — Offline-First Content Cache Model
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Deliver offline-first content cache model as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the offline-first content cache model increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Offline-First Content Cache Model meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How offline-first content cache model improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 56 — Sample Narration for 3 Stories
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Deliver sample narration for 3 stories as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the sample narration for 3 stories increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Sample Narration for 3 Stories meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How sample narration for 3 stories improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 57 — Audio Narration Controls
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Deliver audio narration controls as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the audio narration controls increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Audio Narration Controls meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How audio narration controls improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 58 — Bedtime Audio Ritual v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Deliver bedtime audio ritual v1 as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the bedtime audio ritual v1 increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Bedtime Audio Ritual v1 meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How bedtime audio ritual v1 improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 59 — Private Beta Feedback Form
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Deliver private beta feedback form as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the private beta feedback form increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Private Beta Feedback Form meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How private beta feedback form improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 60 — Private Beta Release Candidate
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Deliver private beta release candidate as a production-ready increment that strengthens private-beta readiness and daily ritual quality.
- **Scope:** Define acceptance criteria, implement the private beta release candidate increment, and document QA + telemetry implications for parent/child journeys.
- **Non-scope:** Unrelated feature expansion, auth/payments rollouts, public child-sharing surfaces, and broad architecture rewrites.
- **Definition of done:** Private Beta Release Candidate meets acceptance criteria, passes required checks, and is documented for follow-on sprints.
- **Manual iPhone QA steps:** Run affected child and parent flows on iPhone via Expo Go, including regression checks around story start, ritual, completion, and dashboard surfaces.
- **Category-defining product check focus:** How private beta release candidate improves delight, trust, ritual consistency, safety, and future monetisation readiness.

### Sprint 61 — Private Beta Sprint 61: Retention Experiments
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 62 — Private Beta Sprint 62: Content Ops QA
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 63 — Private Beta Sprint 63: Safety Review Cadence
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 64 — Private Beta Sprint 64: Parent Insight Reporting
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 65 — Private Beta Sprint 65: Subscription Narrative
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

## Paid Beta

### Sprint 66 — Paid Beta Sprint 66: Lifecycle Messaging
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 67 — Paid Beta Sprint 67: Launch Readiness
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 68 — Paid Beta Sprint 68: Partnership Pilots
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 69 — Paid Beta Sprint 69: Category Moat Deepening
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 70 — Paid Beta Sprint 70: Cohort Expansion
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 71 — Paid Beta Sprint 71: Retention Experiments
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 72 — Paid Beta Sprint 72: Content Ops QA
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 73 — Paid Beta Sprint 73: Safety Review Cadence
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 74 — Paid Beta Sprint 74: Parent Insight Reporting
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 75 — Paid Beta Sprint 75: Subscription Narrative
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 76 — Paid Beta Sprint 76: Lifecycle Messaging
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 77 — Paid Beta Sprint 77: Launch Readiness
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 78 — Paid Beta Sprint 78: Partnership Pilots
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 79 — Paid Beta Sprint 79: Category Moat Deepening
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 80 — Paid Beta Sprint 80: Cohort Expansion
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 81 — Paid Beta Sprint 81: Retention Experiments
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 82 — Paid Beta Sprint 82: Content Ops QA
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 83 — Paid Beta Sprint 83: Safety Review Cadence
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 84 — Paid Beta Sprint 84: Parent Insight Reporting
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 85 — Paid Beta Sprint 85: Subscription Narrative
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 86 — Paid Beta Sprint 86: Lifecycle Messaging
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 87 — Paid Beta Sprint 87: Launch Readiness
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 88 — Paid Beta Sprint 88: Partnership Pilots
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 89 — Paid Beta Sprint 89: Category Moat Deepening
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 90 — Paid Beta Sprint 90: Cohort Expansion
- **Target quality level:** Q4 Paid Beta Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 91 — Paid Beta Sprint 91: Retention Experiments
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 92 — Paid Beta Sprint 92: Content Ops QA
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 93 — Paid Beta Sprint 93: Safety Review Cadence
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 94 — Paid Beta Sprint 94: Parent Insight Reporting
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 95 — Paid Beta Sprint 95: Subscription Narrative
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

## Public Launch Candidate

### Sprint 96 — Public Launch Candidate Sprint 96: Lifecycle Messaging
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 97 — Public Launch Candidate Sprint 97: Launch Readiness
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 98 — Public Launch Candidate Sprint 98: Partnership Pilots
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 99 — Public Launch Candidate Sprint 99: Category Moat Deepening
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 100 — Public Launch Candidate Sprint 100: Cohort Expansion
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 101 — Public Launch Candidate Sprint 101: Retention Experiments
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 102 — Public Launch Candidate Sprint 102: Content Ops QA
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 103 — Public Launch Candidate Sprint 103: Safety Review Cadence
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 104 — Public Launch Candidate Sprint 104: Parent Insight Reporting
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 105 — Public Launch Candidate Sprint 105: Subscription Narrative
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 106 — Public Launch Candidate Sprint 106: Lifecycle Messaging
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 107 — Public Launch Candidate Sprint 107: Launch Readiness
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 108 — Public Launch Candidate Sprint 108: Partnership Pilots
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 109 — Public Launch Candidate Sprint 109: Category Moat Deepening
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 110 — Public Launch Candidate Sprint 110: Cohort Expansion
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 111 — Public Launch Candidate Sprint 111: Retention Experiments
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 112 — Public Launch Candidate Sprint 112: Content Ops QA
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 113 — Public Launch Candidate Sprint 113: Safety Review Cadence
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 114 — Public Launch Candidate Sprint 114: Parent Insight Reporting
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 115 — Public Launch Candidate Sprint 115: Subscription Narrative
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 116 — Public Launch Candidate Sprint 116: Lifecycle Messaging
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 117 — Public Launch Candidate Sprint 117: Launch Readiness
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 118 — Public Launch Candidate Sprint 118: Partnership Pilots
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 119 — Public Launch Candidate Sprint 119: Category Moat Deepening
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 120 — Public Launch Candidate Sprint 120: Cohort Expansion
- **Target quality level:** Q5 Public Launch Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

## Category-Defining V1

### Sprint 121 — Category-Defining V1 Sprint 121: Retention Experiments
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 122 — Category-Defining V1 Sprint 122: Content Ops QA
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 123 — Category-Defining V1 Sprint 123: Safety Review Cadence
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 124 — Category-Defining V1 Sprint 124: Parent Insight Reporting
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 125 — Category-Defining V1 Sprint 125: Subscription Narrative
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 126 — Category-Defining V1 Sprint 126: Lifecycle Messaging
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 127 — Category-Defining V1 Sprint 127: Launch Readiness
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 128 — Category-Defining V1 Sprint 128: Partnership Pilots
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 129 — Category-Defining V1 Sprint 129: Category Moat Deepening
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 130 — Category-Defining V1 Sprint 130: Cohort Expansion
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 131 — Category-Defining V1 Sprint 131: Retention Experiments
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 132 — Category-Defining V1 Sprint 132: Content Ops QA
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 133 — Category-Defining V1 Sprint 133: Safety Review Cadence
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 134 — Category-Defining V1 Sprint 134: Parent Insight Reporting
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 135 — Category-Defining V1 Sprint 135: Subscription Narrative
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 136 — Category-Defining V1 Sprint 136: Lifecycle Messaging
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 137 — Category-Defining V1 Sprint 137: Launch Readiness
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 138 — Category-Defining V1 Sprint 138: Partnership Pilots
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 139 — Category-Defining V1 Sprint 139: Category Moat Deepening
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 140 — Category-Defining V1 Sprint 140: Cohort Expansion
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 141 — Category-Defining V1 Sprint 141: Retention Experiments
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 142 — Category-Defining V1 Sprint 142: Content Ops QA
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 143 — Category-Defining V1 Sprint 143: Safety Review Cadence
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 144 — Category-Defining V1 Sprint 144: Parent Insight Reporting
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 145 — Category-Defining V1 Sprint 145: Subscription Narrative
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 146 — Category-Defining V1 Sprint 146: Lifecycle Messaging
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 147 — Category-Defining V1 Sprint 147: Launch Readiness
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Content Engine
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 148 — Category-Defining V1 Sprint 148: Partnership Pilots
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 149 — Category-Defining V1 Sprint 149: Category Moat Deepening
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.

### Sprint 150 — Category-Defining V1 Sprint 150: Cohort Expansion
- **Target quality level:** Q6 Category-Defining V1 Quality
- **Sprint type:** [Set per sprint track]
- **Primary quality dimension:** [Declare one]
- **Protected quality dimensions:** [Declare non-regression set]
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Ship one specific phase-aligned increment that advances readiness for scale while preserving parent trust and child delight.
- **Scope:** Execute one bounded deliverable with explicit acceptance criteria, update queue/logs, and report checks + iPhone QA outcomes.
- **Non-scope:** Out-of-phase platform rewrites, uncontrolled scope expansion, and unsafe growth features.
- **Definition of done:** Deliverable complete with verified checks, QA evidence, and next-step recommendation recorded.
- **Manual iPhone QA steps:** Run targeted iPhone QA for touched flows, including start journey, complete ritual, and parent summary checks.
- **Category-defining product check focus:** Phase-specific improvement to delight, trust, daily ritual stickiness, safety compliance, and monetisation path quality.
