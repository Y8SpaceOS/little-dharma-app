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
- **Primary quality dimension:** Parent-safe shareability
- **Protected quality dimensions:** Parent trust, Safety/privacy, Premium UI/UX taste, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Growth Loops
- **Objective:** Improve conversion of family sharing by tailoring copy variants for grandparents and extended family.
- **Scope:** Craft and test parent-safe copy variants plus selection rules by relationship context.
- **Non-scope:** New channels requiring backend messaging infrastructure.
- **Definition of done:** Parent-safe share card includes multiple privacy-safe family copy variants (including grandparent-friendly) with no identity exposure or native sharing additions.
- **Manual iPhone QA steps:** Complete a story on iPhone, open completion screen, verify all variants are readable and privacy-safe, verify no native share API appears, verify Read Again + Done for Today, and verify My Treasures + Parent Dashboard updates.
- **Completion note:** Added three privacy-safe screenshot-friendly share copy variants on completion (default family, grandparent-friendly, close family group style) while preserving completion actions and existing local progress behavior, with no native sharing/public-social features.
- **Category-defining product check focus:** Warm family virality grounded in cultural trust.

### Sprint 28 — Bedtime Mode v1
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Parent trust, Child delight, Premium UI/UX taste, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Product Experience
- **Objective:** Introduce a calmer bedtime interaction mode for nightly ritual consistency.
- **Scope:** Define bedtime mode behavior, visual tone adjustments, and transition entry/exit logic.
- **Non-scope:** Audio narration build-out or sleep tracking features.
- **Definition of done:** Bedtime mode is available, stable, and improves perceived calmness in QA sessions.
- **Manual iPhone QA steps:** Complete a story on iPhone, confirm Bedtime Mode entry point appears naturally on completion, open Bedtime Mode, verify calm readability and low-stimulation tone, verify value/reflection/breathing-or-gratitude/parent-child closing line, verify Read Again + Done for Today still work, verify My Treasures + Parent Dashboard + weekly progress + share card still work, and confirm no audio/notifications/public profile/leaderboard/chat/native sharing were introduced.
- **Completion note:** Added a calm Bedtime Mode v1 surface from completion with a soft entry point and guided close-of-day ritual (value practiced, gentle reflection question, breathing/gratitude prompt, and parent-child closing line) while preserving Story → Ritual → Quiz → Completion flow and existing local progress/share surfaces.
- **Category-defining product check focus:** Daily 10-minute ritual fit for real family bedtime contexts.

### Sprint 29 — Threshold v1: Calm Arrival
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Child delight, Premium UI/UX taste, Parent trust, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Product Experience
- **Objective:** Add a calm Threshold v1 entry moment so opening Little Dharma feels like entering a quiet ritual space before Today's Journey.
- **Scope:** Add a lightweight, low-stimulation entry surface before the child journey using existing UI primitives and local-only behavior, with optional recent-return softening.
- **Non-scope:** First-launch onboarding, child/parent name collection, Dharmi/companion naming, audio/chime/notifications, native sharing, backend/auth/cloud sync, and new dependencies.
- **Definition of done:** Threshold v1 appears calmly before child entry, offers a single clear enter action, preserves all existing flows, and remains private/local-only.
- **Manual iPhone QA steps:** Open app fresh, verify Threshold v1 appears and feels calm, tap entry action into child journey, background/return to validate non-annoying behavior (including recent-return softening if present), then run Story → Ritual → Quiz → Completion plus Bedtime Mode, Share Card, My Treasures, Parent Dashboard, and Weekly Progress regressions.
- **Completion note:** Revised from the previously queued “Chant & Sing Ritual Section v1” to “Threshold v1: Calm Arrival” based on final strategic roadmap feedback; implemented a calm threshold overlay with local recent-return softening and no protected-scope regressions.
- **Category-defining product check focus:** Calm ritual entry craft that strengthens daily habit without trust/safety regressions.

### Sprint 30 — Companion Architecture v1
- **Target quality level:** Q2 Soul Prototype
- **Sprint type:** Product Experience
- **Primary quality dimension:** Child delight
- **Protected quality dimensions:** Daily 10-minute ritual habit, Premium UI/UX taste, Parent trust, Safety/privacy, Content depth and authenticity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Product Experience
- **Objective:** Introduce a lightweight original Little Dharma companion architecture that makes child journey moments warmer, calmer, and gently relational.
- **Scope:** Add a text-only companion config module and integrate low-stimulation companion presence on Child Home/Today, Ritual Moment, Completion, and Bedtime Mode while preserving existing flow and privacy constraints.
- **Non-scope:** Final companion art/branding canon, naming flows, child/parent name collection, audio/animation libs/backend/auth/cloud sync/native sharing/notifications/public profiles/leaderboards/chat/community.
- **Definition of done:** Companion v1 appears in selected child-safe surfaces with short warm non-authoritative copy, and all protected flows/surfaces remain intact.
- **Manual iPhone QA steps:** Open app fresh; validate Threshold v1; run Today → Story → Ritual → Quiz → Completion; open Bedtime Mode; verify companion copy calmness/privacy; regression-check Share Card, My Treasures, Parent Dashboard, and Weekly Progress.
- **Completion note:** Revised from the old “Soul Prototype Readiness Audit” to “Companion Architecture v1” based on final strategic roadmap feedback; implemented text-only companion presence without sacred-figure risk, identity collection, audio, or heavy animation.
- **Category-defining product check focus:** Child delight and ritual warmth without sacrificing parent trust, safety/privacy, and cultural respect.

### Sprint 31 — The Pause v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Child delight, Premium UI/UX taste, Parent trust, Safety/privacy, Content depth and authenticity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Primary track:** Product Experience
- **Objective:** Add a short silent low-stimulation pause between story consumption and quiz answering so children sit with the story before responding.
- **Scope:** Insert a Pause v1 stage in `app/story/[slug].tsx` between Ritual and Quiz, using existing UI primitives, calm copy, and timer-based auto-advance without countdown/audiovisual stimulation.
- **Non-scope:** Audio/chime/music/vibration, skip/customization controls, backend/auth/cloud sync, native sharing, notifications, public profiles, leaderboards, chat/community, dependencies, or story catalog expansion.
- **Definition of done:** Story → Ritual → Pause → Quiz → Completion runs end-to-end with a short calm silent auto-advance pause and no regressions in protected surfaces.
- **Manual iPhone QA steps:** Open app fresh, validate Threshold v1, run Today → Story panels → Ritual → confirm Pause v1 appears before quiz and auto-advances after ~13s, then complete quiz/completion and regression-check Share Card, Bedtime Mode, My Treasures, Parent Dashboard, and Weekly Progress.
- **Completion note:** Revised from the old “Content QA and Source-Note Model” to “The Pause v1” based on final strategic roadmap feedback; implemented silent pause stage and preserved existing local/private journey architecture.
- **Category-defining product check focus:** Distinctive calm ritual pacing that strengthens daily habit while preserving trust and low-stimulation quality.

### Sprint 32 — Carrying Word v1 (Revised from Source and Provenance Fields)
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Child delight, Parent trust, Content depth and authenticity, Safety/privacy, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Revised Sprint 32 scope based on final strategic roadmap feedback and shipped Carrying Word v1 using existing story value/completion data across Story Completion, Child Home, and My Treasures without adding new persistence, social mechanics, scoring, or backend dependencies.
- **Primary track:** Product Experience
- **Objective:** Bridge in-app completion to real-life family practice by giving each completed story one calm value-word to carry into the day/night.
- **Scope:** Use `story.value` as carrying word; add completion-surface carrying word card; show latest carrying word on Child Home where safe; add lightweight completed-values “Words I Carry” section in My Treasures derived from local completed stories.
- **Non-scope:** Source/provenance system, new stories, backend/auth/cloud sync, native sharing, notifications, audio, voice, public profiles, leaderboards, chat/community, analytics, paywall/monetization, child/parent name collection.
- **Definition of done:** Completion screen clearly presents carrying word; Child Home/My Treasures surfaces completed carrying words where available; core ritual and trust/safety protected dimensions remain intact.
- **Manual iPhone QA steps:** Run Threshold → Today’s Journey → Story → Ritual → Pause → Quiz → Completion; verify carrying word copy/value mapping plus Child Home/My Treasures visibility and no regressions to Bedtime Mode, Share Card, Parent Dashboard, Weekly Progress, and privacy constraints.
- **Category-defining product check focus:** Ritual carry-forward clarity that strengthens daily habit while preserving private-by-default parent trust.

### Sprint 33 — Parent Dashboard: Today’s Mirror v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Parent trust
- **Protected quality dimensions:** Daily 10-minute ritual habit, Content depth and authenticity, Premium UI/UX taste, Safety/privacy, Child delight
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Revised Sprint 33 scope based on final strategic roadmap feedback and upgraded Parent Dashboard with a Today’s Mirror section that reflects latest story/value/carrying word/badge plus a warm parent-child prompt and gentle meaning using existing local data only.
- **Primary track:** Product Experience
- **Objective:** Turn Parent Dashboard into Today’s Mirror v1 so parents can quickly understand what was practiced and what to ask tonight.
- **Scope:** Update Parent Dashboard with a new Today’s Mirror section powered by existing local story completion data including latest story, value practiced, carrying word, badge, parent-child prompt, and why-this-matters explanation.
- **Non-scope:** Backend/auth/cloud sync, notifications, native sharing, analytics, AI text generation, new stories, audio, child/parent name collection, public profiles, leaderboards, chat/community.
- **Definition of done:** Parent Dashboard surfaces warm, useful nightly reflection context while preserving weekly progress, privacy reassurance, local-only behavior, and existing navigation.
- **Manual iPhone QA steps:** Run Threshold → Story → Ritual → Pause → Quiz → Completion; open Parent Dashboard and verify Today’s Mirror values/prompt, weekly progress, privacy reassurance, and regressions for Share Card, Bedtime Mode, My Treasures / Words I Carry, and Child Home.
- **Category-defining product check focus:** Parent trust and ritual carry-forward clarity without privacy regressions or expanded data collection.

### Sprint 34 — Roadmap Reconciliation + Content Scale Rebase
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Execution clarity
- **Protected quality dimensions:** Historical sprint integrity, Safety/privacy, Content depth and authenticity, Child delight, Premium UI/UX taste, Existing app behavior
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Rebased the active roadmap after Sprint 33 to align with private-beta readiness and a 1,000+ story strategy; preserved Sprint 11–33 history and explicitly deferred unfinished platform work from Sprint 14/15.

## Rebased Private Beta Roadmap (Active Queue)

### Sprint 35 — Content Universe Map v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Parent trust, Daily 10-minute ritual habit, Safety/privacy, Premium UI/UX taste, Historical sprint integrity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Created `docs/CONTENT_UNIVERSE_MAP.md` v1 with world taxonomy, source-sensitivity tiers, age-band strategy, sequencing, and 1,000+ experience scale targets; sprint remained docs-only with no runtime behavior changes.
- **Primary track:** Content Engine
- **Objective:** Establish the canonical map of Little Dharma’s first scalable content universe before adding more runtime content.
- **Scope:** Define taxonomy for worlds, value arcs, ritual formats, and progression lanes; document sequencing rules and coverage gaps.
- **Non-scope:** Runtime app changes, story packet additions, backend/CMS implementation, UI redesign.
- **Definition of done:** A single reviewable universe map v1 is documented with naming rules and sequencing guidance for follow-on sprints.
- **Manual iPhone QA steps:** Docs-only sprint; confirm no runtime files changed and smoke-check app launch only if needed.
- **Category-defining product check focus:** Strategic content architecture quality over feature velocity.

### Sprint 36 — Content Authenticity OS v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Parent trust, Safety/privacy, Child delight, Historical sprint integrity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Created `docs/CONTENT_AUTHENTICITY_OS.md` as a docs-only governance gate defining labels, source-sensitivity tiers, sacred-figure and source-claim protocols, review workflow/statuses, QA checklist, and 1,000+ scale controls with no runtime behavior changes.
- **Primary track:** Trust & Safety
- **Objective:** Define repeatable authenticity governance so content scale does not dilute cultural trust.
- **Scope:** Create editorial/authenticity checklist, provenance grading rules, review roles, and escalation workflow.
- **Non-scope:** Story runtime changes, publishing pipeline automation, theology rewrites.
- **Definition of done:** Authenticity OS v1 doc is complete enough to gate future content drops.
- **Manual iPhone QA steps:** Docs-only sprint; no in-app behavior expected to change.
- **Category-defining product check focus:** Parent trust through authenticity discipline.

### Sprint 37 — Content Data Model v2
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Execution clarity
- **Protected quality dimensions:** Content depth and authenticity, Parent trust, Existing app behavior, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added `docs/CONTENT_DATA_MODEL_V2.md` as a docs-only v2 schema planning spec covering entities, required fields, enums, validation rules, submodels, migration staging, and 1,000+ scale alignment without runtime changes.
- **Primary track:** Platform Foundations
- **Objective:** Specify the v2 content model needed for scale planning without implementing runtime migrations yet.
- **Scope:** Define required schema fields for age-band variants, authenticity metadata, ritual metadata, and sequencing identifiers.
- **Non-scope:** App code migration, new APIs, backend storage, story additions.
- **Definition of done:** Data model v2 specification is approved and mapped to existing v1 constraints.
- **Manual iPhone QA steps:** Docs/spec sprint; verify no app behavior changes.
- **Category-defining product check focus:** Durable content-system foundations for 1,000+ scale.

### Sprint 38 — Age-Band Story Templates v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Content depth and authenticity, Parent trust, Child delight, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added `docs/AGE_BAND_STORY_TEMPLATES.md` with age-specific writing structures, transformation model, safety/authenticity guardrails, reviewer checklist, and scale/launch sequencing for 3–5, 6–8, and 9–12 without runtime changes.
- **Primary track:** Content Engine
- **Objective:** Define reusable template standards for younger/core/older story variants.
- **Scope:** Write template structure for tone, complexity, ritual wording, quiz style, and parent bridge by age band.
- **Non-scope:** Creating new story packets, app UI changes, live age-routing logic.
- **Definition of done:** Age-band template pack v1 is documented and ready for index production.
- **Manual iPhone QA steps:** Docs-only sprint; no runtime QA required beyond non-regression verification.
- **Category-defining product check focus:** Age-appropriate ritual resonance at scale.

### Sprint 39 — 1,000+ Story Master Index v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Content depth and authenticity, Parent trust, Child delight
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Created Story Master Index v1 with 450 base ideas and machine-readable CSV coverage for 1,350 planned age-band experiences, including world/value/release/source distributions and candidate sets for private beta/public beta/paid v1 without runtime app changes.
- **Primary track:** Content Engine
- **Objective:** Build the first structured master index connecting base story ideas to age-band expansion logic.
- **Scope:** Produce index framework, coverage targets by world/value, and editorial priority tiers.
- **Non-scope:** Implementing all stories, content runtime ingestion, public releases.
- **Definition of done:** Master Index v1 exists with clear counting logic and prioritization rules.
- **Manual iPhone QA steps:** Docs-only sprint.
- **Category-defining product check focus:** Content moat planning with disciplined sequencing.

### Sprint 40 — Content Production Pipeline v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Execution clarity
- **Protected quality dimensions:** Content depth and authenticity, Parent trust, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Delivered Content Production Pipeline v1 docs/templates and optional validator covering intake, batching, drafting prompts, review gates, approval rules, QA checklists, and Sprint 41–45 handoff guidance with no runtime app changes.
- **Primary track:** Platform Foundations
- **Objective:** Define the end-to-end human workflow for producing high-quality content at reliable cadence.
- **Scope:** Map intake, drafting, authenticity review, QA, approval, and release checklist stages.
- **Non-scope:** Building tooling, adding dependencies, automating publishing.
- **Definition of done:** Pipeline v1 is documented with owners, handoffs, and quality gates.
- **Manual iPhone QA steps:** Docs-only sprint.
- **Category-defining product check focus:** Scale without quality collapse.

### Sprint 41 — Vrindavan Week 1 Content QA Pass
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Parent trust, Child delight, Daily 10-minute ritual habit, Existing app behavior
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Completed Week 1 Vrindavan content QA pass with story-by-story risk audit, machine-readable tracker, one small readability copy refinement, and no schema/UI/navigation/runtime behavior changes.
- **Primary track:** Content Engine
- **Objective:** Perform a structured QA pass on the existing first-week Vrindavan content set.
- **Scope:** Audit tone, ritual consistency, value clarity, parent bridge clarity, and authenticity checklist compliance.
- **Non-scope:** Adding new story count, runtime refactors, world expansion.
- **Definition of done:** Week 1 QA findings and approved remediation plan are documented.
- **Manual iPhone QA steps:** Run existing Week 1 stories on iPhone and record rendering/flow/content notes.
- **Category-defining product check focus:** Quality consistency across existing content experiences.

### Sprint 42 — Vrindavan Week 2 Content Architecture
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Content depth and authenticity, Parent trust, Child delight, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Produced Week 2 Vrindavan content architecture docs/CSV for planned stories 8–14 with value arcs, ritual/pause/quiz/parent/source-sensitivity briefs and Sprint 43 handoff checklist; no runtime app changes.
- **Primary track:** Content Engine
- **Objective:** Architect the second-week Vrindavan content plan before implementation.
- **Scope:** Define story-order arc, value progression, ritual cadence, and continuity rules for stories 8–14.
- **Non-scope:** Writing story data in app, UI changes, backend sync.
- **Definition of done:** Week 2 architecture doc is approved for implementation sprint handoff.
- **Manual iPhone QA steps:** Docs-first; verify continuity assumptions against current app journey.
- **Category-defining product check focus:** Habit-forming sequencing fidelity.

### Sprint 43 — Add Vrindavan Stories 8–14
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Parent trust, Daily 10-minute ritual habit, Child delight, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Integrated seven Week 2 Vrindavan runtime story packets (8–14) into the existing seed schema with QA doc/CSV/validator coverage and no UI/navigation/backend/CMS/audio/analytics/dependency changes.
- **Primary track:** Content Engine
- **Objective:** Extend Vrindavan journey to stories 8–14 with quality-controlled content integration.
- **Scope:** Add stories 8–14 following approved templates, authenticity OS, and existing runtime contracts.
- **Non-scope:** New worlds, backend/CMS, audio, social features.
- **Definition of done:** Stories 8–14 are integrated with ritual/quiz/completion parity and QA evidence.
- **Manual iPhone QA steps:** Full end-to-end iPhone pass for each added story.
- **Category-defining product check focus:** Scaled content addition without trust regression.

### Sprint 44 — Add Vrindavan Stories 15–21
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Content Engine
- **Primary quality dimension:** Content depth and authenticity
- **Protected quality dimensions:** Parent trust, Daily 10-minute ritual habit, Child delight, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added seven Week 3 Vrindavan runtime packets (stories 15–21) plus Week 3 QA doc/CSV/validators, completing a schema-compatible 21-story private-beta path with no UI/navigation/backend/CMS/audio/analytics/dependency changes.
- **Primary track:** Content Engine
- **Objective:** Complete the 21-day Vrindavan base path by adding stories 15–21.
- **Scope:** Author/integrate stories 15–21 using established templates and QA workflow.
- **Non-scope:** Ganesha/Hanuman rollout, new feature systems, analytics pipelines.
- **Definition of done:** 21-story set is complete with consistent quality and no flow regressions.
- **Manual iPhone QA steps:** End-to-end regression and content validation across full 21-story path.
- **Category-defining product check focus:** Private-beta content depth milestone.

### Sprint 45 — 21-Day Vrindavan Path Completion State
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Parent trust, Child delight, Premium UI/UX taste, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Added warm 21-story completion-state behavior across child/parent progress surfaces with gentle revisit/reflection guidance, plus Sprint 45 QA doc/CSV/validator and no schema/story-count/backend/dependency changes.
- **Primary track:** Product Experience
- **Objective:** Define and implement coherent completion-state behavior for the 21-day path.
- **Scope:** Completion messaging, continuation guidance, and parent bridge updates for full-path completion.
- **Non-scope:** New worlds, social mechanics, backend sync.
- **Definition of done:** 21-day completion no longer feels like a dead end and preserves trust-safe tone.
- **Manual iPhone QA steps:** Complete/simulate 21-day state and verify continuation flows on iPhone.
- **Category-defining product check focus:** Habit continuity after milestone completion.

### Sprint 46 — Ritual Moment v2: Say, Breathe, Reflect
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Daily 10-minute ritual habit
- **Protected quality dimensions:** Content depth and authenticity, Parent trust, Child delight, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Upgraded ritual experience in story detail into a calm three-step Say, Breathe, Reflect structure with resilient missing-field fallbacks, QA artifacts, and validation coverage while preserving Story → Ritual/Pause/Reflection → Quiz → Completion flow and existing schema.
- **Primary track:** Product Experience
- **Objective:** Deepen ritual moment quality through a clearer three-part micro-structure.
- **Scope:** Refine ritual sequencing and copy framing for say/breathe/reflect within existing story loop.
- **Non-scope:** Audio, notifications, backend, new theology claims.
- **Definition of done:** Ritual v2 improves clarity and repeatability with no regression to flow integrity.
- **Manual iPhone QA steps:** Validate ritual step behavior and completion continuity on iPhone.
- **Category-defining product check focus:** Signature family ritual quality.

### Sprint 47 — Bedtime Mode v2
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Child delight
- **Protected quality dimensions:** Parent trust, Daily 10-minute ritual habit, Safety/privacy, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Delivered calmer Bedtime Mode v2 with settle-down guidance, value/reflection/parent-bridge fallbacks, breathing-gratitude prompt, and clear return actions while preserving Story → Ritual → Pause → Quiz → Completion → Bedtime flow and avoiding new dependencies/features.
- **Primary track:** Product Experience
- **Objective:** Upgrade bedtime closure quality for calmer repeat nightly usage.
- **Scope:** Improve bedtime pacing/copy and parent-child close while preserving existing architecture.
- **Non-scope:** Audio playback, push reminders, backend systems.
- **Definition of done:** Bedtime mode feels calmer and more consistent without adding stimulation.
- **Manual iPhone QA steps:** Validate completion→bedtime path readability and calmness on iPhone.
- **Category-defining product check focus:** Nightly ritual stickiness.

### Sprint 48 — Child Home v3: Companion-led Daily Invitation
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Child delight
- **Protected quality dimensions:** Parent trust, Safety/privacy, Daily 10-minute ritual habit, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** done
- **Completion note:** Child Home Today now has a warmer Companion-led invitation, clearer state-specific Journey guidance, calmer CTA labels, and Sprint 48 QA doc/CSV/validator coverage without runtime/story-schema changes.
- **Primary track:** Product Experience
- **Objective:** Make daily entry invitation warmer and clearer while preserving trust-safe companion boundaries.
- **Scope:** Update child-home invitation framing and progression cues using existing companion architecture.
- **Non-scope:** Character system expansion, notifications, public profiles.
- **Definition of done:** Home invitation improves clarity and return motivation without pressure mechanics.
- **Manual iPhone QA steps:** Validate home readability, CTA clarity, and non-regression in core loop.
- **Category-defining product check focus:** Delightful daily re-entry.

### Sprint 49 — Values Garden v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Child delight
- **Protected quality dimensions:** Parent trust, Safety/privacy, Daily 10-minute ritual habit, Content depth and authenticity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Introduce a calm values-memory surface that reinforces practiced virtues.
- **Scope:** Define and implement v1 values garden representation using existing completion/value data.
- **Non-scope:** Social comparison, public sharing, monetization gates.
- **Definition of done:** Values Garden v1 is understandable, private, and aligned to ritual outcomes.
- **Manual iPhone QA steps:** Verify values rendering, empty/earned states, and progression continuity.
- **Category-defining product check focus:** Meaningful value reinforcement for children.

### Sprint 50 — My Treasures v2
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Premium UI/UX taste
- **Protected quality dimensions:** Child delight, Parent trust, Safety/privacy, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Upgrade My Treasures into a richer, clearer private memory surface.
- **Scope:** Improve organization, progression context, and calm presentation of earned items/words.
- **Non-scope:** Public profiles, leaderboards, account sync.
- **Definition of done:** Treasures v2 improves clarity and emotional value without privacy regressions.
- **Manual iPhone QA steps:** Validate empty/partial/full states and data consistency on iPhone.
- **Category-defining product check focus:** Premium, private memory design.

### Sprint 51 — Parent Dashboard v3: Journey as Story
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Parent trust
- **Protected quality dimensions:** Safety/privacy, Content depth and authenticity, Daily 10-minute ritual habit, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Upgrade parent dashboard narrative coherence so progress feels meaningful and trustworthy.
- **Scope:** Reframe parent insights as journey story with clear context, safeguards, and next-step prompts.
- **Non-scope:** Cloud reporting, external analytics dashboards, sharing automation.
- **Definition of done:** Dashboard v3 improves interpretability and trust while staying local/private by default.
- **Manual iPhone QA steps:** Validate dashboard coherence before/after completions on iPhone.
- **Category-defining product check focus:** Trust-first parent insight quality.

### Sprint 52 — Parent Trust & Privacy Center v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Trust & Safety
- **Primary quality dimension:** Safety/privacy
- **Protected quality dimensions:** Parent trust, Child delight, Existing app behavior, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Consolidate privacy/trust explanations into an explicit parent-facing center.
- **Scope:** Document and surface local-data behavior, protections, and parent expectations in one place.
- **Non-scope:** New telemetry collection, account creation, cloud sync.
- **Definition of done:** Trust & Privacy Center v1 clearly communicates safeguards and limits.
- **Manual iPhone QA steps:** Verify copy clarity, navigation access, and no behavior regressions.
- **Category-defining product check focus:** Verifiable parent trust posture.

### Sprint 53 — Manual QA Regression Matrix
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Execution clarity
- **Protected quality dimensions:** Existing app behavior, Parent trust, Safety/privacy, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Build a durable manual QA matrix for private-beta critical journeys.
- **Scope:** Define device/OS matrix, critical-path checklist, pass/fail logging template, and triage severity rules.
- **Non-scope:** Automated test framework expansion, feature work.
- **Definition of done:** QA matrix is ready for recurring sprint-level execution.
- **Manual iPhone QA steps:** Validate matrix itself by running at least one full iPhone critical-path pass.
- **Category-defining product check focus:** Repeatable release confidence.

### Sprint 54 — Accessibility Pass
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Premium UI/UX taste
- **Protected quality dimensions:** Child delight, Parent trust, Safety/privacy, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Improve accessibility quality across core child and parent flows.
- **Scope:** Audit and fix accessible labels, touch targets, contrast/readability, and focus/voiceover essentials.
- **Non-scope:** New feature modules, design-system rewrite.
- **Definition of done:** Core flows meet documented accessibility bar with regression notes.
- **Manual iPhone QA steps:** Run voiceover/readability/tap-target checks on core screens.
- **Category-defining product check focus:** Inclusive premium ritual experience.

### Sprint 55 — Error Boundaries
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Parent trust
- **Protected quality dimensions:** Child delight, Safety/privacy, Existing app behavior, Daily 10-minute ritual habit
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Add graceful failure containment for critical runtime surfaces.
- **Scope:** Define and implement error boundaries plus safe fallback copy for key child/parent routes.
- **Non-scope:** Backend incident tooling, analytics capture expansion.
- **Definition of done:** Core journeys fail gracefully without crash loops or trust-breaking messaging.
- **Manual iPhone QA steps:** Simulate failure scenarios and verify fallback behavior on iPhone.
- **Category-defining product check focus:** Trust-preserving resilience.

### Sprint 56 — Loading and Skeleton States
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Product Experience
- **Primary quality dimension:** Premium UI/UX taste
- **Protected quality dimensions:** Child delight, Parent trust, Daily 10-minute ritual habit, Safety/privacy
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Product Experience
- **Objective:** Improve perceived responsiveness with calm, consistent loading states.
- **Scope:** Add/loading skeleton treatments for major child and parent surfaces with low-stimulation motion.
- **Non-scope:** Content logic changes, backend performance project.
- **Definition of done:** Loading transitions feel intentional and reduce blank-state confusion.
- **Manual iPhone QA steps:** Test slow-start and navigation transitions on iPhone.
- **Category-defining product check focus:** Premium polish in waiting moments.

### Sprint 57 — Parent Feedback Capture v1
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Growth Loop
- **Primary quality dimension:** Parent trust
- **Protected quality dimensions:** Safety/privacy, Child delight, Existing app behavior, Content authenticity
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Growth Loops
- **Objective:** Create a trust-safe mechanism for private beta parents to submit structured feedback.
- **Scope:** Define v1 capture flow/content fields/privacy copy and lightweight storage/handling approach.
- **Non-scope:** Public community features, invasive analytics, child-facing feedback prompts.
- **Definition of done:** Parent feedback capture v1 is usable, privacy-safe, and operationally actionable.
- **Manual iPhone QA steps:** Validate submission path clarity and privacy copy on iPhone.
- **Category-defining product check focus:** Listening loop without trust compromise.

### Sprint 58 — Privacy-Safe Analytics Spec
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Trust & Safety
- **Primary quality dimension:** Safety/privacy
- **Protected quality dimensions:** Parent trust, Child delight, Existing app behavior, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Trust & Safety
- **Objective:** Specify event strategy that supports product learning while preserving strict privacy defaults.
- **Scope:** Define event taxonomy, data minimization rules, retention policy, and opt-in/consent boundaries.
- **Non-scope:** Instrumenting events in runtime, external vendor integration.
- **Definition of done:** Analytics spec is approved and explicitly privacy-safe for future implementation.
- **Manual iPhone QA steps:** Docs/spec sprint; no runtime QA expected.
- **Category-defining product check focus:** Measurement discipline with trust moat.

### Sprint 59 — App Store Readiness Pack
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Execution clarity
- **Protected quality dimensions:** Parent trust, Safety/privacy, Existing app behavior, Premium UI/UX taste
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Prepare non-code artifacts and compliance checklist needed for private-beta distribution readiness.
- **Scope:** Assemble metadata, policy copy, screenshots/checklists, support/contact workflows, and known-risk ledger.
- **Non-scope:** Public launch expansion, monetization rollout, feature additions.
- **Definition of done:** Readiness pack is complete and reviewable for release decisioning.
- **Manual iPhone QA steps:** Capture checklist-backed QA evidence for submission-critical flows.
- **Category-defining product check focus:** Operational readiness with trust-safe messaging.

### Sprint 60 — Private Beta Release Candidate
- **Target quality level:** Q3 Private Beta Quality
- **Sprint type:** Platform Foundation
- **Primary quality dimension:** Execution clarity
- **Protected quality dimensions:** Parent trust, Safety/privacy, Content depth and authenticity, Child delight, Existing app behavior
- **Expected depth standard:** See `docs/SPRINT_DEPTH_STANDARDS.md`
- **Status:** not started
- **Primary track:** Platform Foundations
- **Objective:** Cut and validate the private-beta release candidate across product, content, and trust gates.
- **Scope:** Freeze candidate build scope, run full gate checklist, triage blockers, and publish go/no-go report.
- **Non-scope:** Net-new feature launches, off-roadmap expansions, major refactors.
- **Definition of done:** Release candidate passes Gate B criteria or has explicit blocker log with owners/next actions.
- **Manual iPhone QA steps:** Execute full private-beta iPhone regression matrix and document pass/fail evidence.
- **Category-defining product check focus:** Reliable, trust-safe private-beta readiness.

## Content Scale Strategy (Execution Targets)
- **Private alpha:** 7 stories
- **Private beta:** 21–30 stories
- **Public beta:** 60–100 story experiences
- **Paid v1:** 150–250 story experiences
- **Long-term moat:** 1,000+ story experiences

## 1,000+ Story Logic
- **Base idea pool:** 300–350 high-quality Indian wisdom story ideas
- **Age-band multiplication:** 3 variants per base story (younger, core, older)
- **Experience range:** 900–1,050+ total story experiences

## Deferred Platform Backlog (Not Completed)
- **Sprint 14 — Test Harness Reliability and Coverage Targets:** not completed; deferred intentionally.
- **Sprint 15 — Developer Environment Bootstrap Guide:** not completed; deferred intentionally.

## Later-Phase Backlog (Preserved Themes from the 150-Sprint Vision)
- Ganesha World Architecture
- Ganesha Stories
- Hanuman World Architecture
- Hanuman Stories
- Ramayana / Mahabharata / Shiva / Devi / Saraswati content worlds
- Festival pack architecture
- Language-ready fields and Hindi transliteration
- Offline-first content model
- Audio/narration after pronunciation/authenticity QA
- Subscription narrative
- Paid beta expansion
- Launch readiness
- Partnerships
- School content
- Books, activity kits, toys, and franchise/IP expansion

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
