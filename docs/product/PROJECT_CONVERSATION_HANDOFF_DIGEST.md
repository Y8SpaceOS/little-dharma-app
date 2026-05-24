# Project Conversation Handoff Digest

## Purpose

This document is the curated handoff of the Little Dharma project conversation. It is not a raw transcript. It captures the decisions, corrections, lessons, and operating rules that future agents need before continuing work.

## Product identity

Little Dharma is a child-facing Hindu spiritual Story World app with a parent-trusted, privacy-safe, local-first architecture. It should feel warm, colorful, playful, culturally respectful, and child-safe.

The app is not a generic story app or a generic learning app. It is built around Story World, Dharma Journeys, sacred respect, gentle values, parent trust, local-first content, and eventually warm Indian audio experiences.

## Design identity

The 1-487 screen reference system is the product's visual and experiential north star. The intent is for the real app to progressively look and feel like that system: warm, rich, child-friendly, colorful, culturally respectful, visually delightful, and parent-trusted.

This does not mean implementing all 487 screens as routes. It means selected screens, components, motion rules, Luvlu behaviors, and parent surfaces should move the real app toward that bar through approved roadmap sprints.

## Roadmap recovery history

The project had drifted from the intended roadmap. The recovery reset restored governance and redirected execution toward content readiness by PR #207.

Recovery sequence:

- PR #154: Content Scale Recovery Control Tower v1.
- PR #155: Story Experience Index Model v1.
- PR #156: Bulk Content Import Pipeline v2.
- PR #157: Runtime-Ready Story Gate v1.
- PR #158: Audio-Ready Script Gate v1.
- PR #159: Ramayana Expansion Recovery Pack v1.
- PR #160: Vrindavan Journey launch crash hotfix.
- GitHub PR #162: Krishna Childhood Expansion Recovery Pack v1.
- PR #163: Ganesha + Hanuman Expansion Pack v1.
- PR #164: Product Handoff Docs v1.
- PR #165: Design Screen Reference Governance v1.
- PR #166: Clarify Design North Star v1.

## Key governance decision

Before every sprint, the implementer must summarize what is being covered and whether it is part of the planned roadmap. Any change through PR #207 requires approval before implementation.

Hotfixes are allowed only for launch or runtime blockers and must immediately return to the roadmap.

## Content quality lessons

The project repeatedly found that content counts can be misleading if generated shells are accepted. Ramayana and Krishna iterations showed why validators must detect repeated panel templates, title-substitution content, repeated narration openings, and generic placeholder phrases.

Runtime candidates must be explicit authored micro-retellings. They should have real story-specific people, places, events, emotional beats, parent notes, reflection prompts, and audio scripts when audio-ready.

## Engineering lessons

Important defects and risks discovered:

- Running Expo from the wrong folder can start the wrong project and create confusing errors.
- PR #160 fixed a real launch blocker caused by an unsafe Vrindavan journey reference.
- Duplicate story IDs can corrupt `contentRegistryStoriesById` because later entries overwrite earlier entries.
- Missing `audioMetadata` can crash Story Experience Index when audio status is mapped.
- Validators must prove safety, not just count strings.

## Manual QA lessons

Manual QA is important after registry, launch, Story World, and runtime changes.

Minimum checks:

- app launches
- no red screen
- Story World opens
- parent area opens
- no duplicate journeys
- no unexpected audio, microphone, notification, or backend prompt
- offline/local-first behavior remains intact

## No-drift operating rules

Do not add or change without explicit approval:

- app routes
- runtime resolver behavior
- story completion persistence
- journey progress persistence
- story reader behavior
- audio playback behavior
- backend or cloud sync
- analytics or telemetry
- notifications or reminders
- sharing or social loops
- microphone, recording, or child voice capture
- TTS or external voice API implementation
- hard gamification

## Luvlu decision

Luvlu is a peacock helper and guide. Luvlu is not the logo, not a deity, not a reward token, not an idol, not a badge, and not a sacred authority. Luvlu should be used only where it improves guidance, warmth, empty states, onboarding, transitions, calm practices, completion moments, or parent-child prompts.

## Current priority

Continue content scaling toward PR #207 while preserving local-first stability and the 1-487 design north star.

The next content sprints should cover Bedtime + Values, Festival Stories, Bhagavad Gita for Children, Mahabharata child-safe, and Panchatantra/Hitopadesha Values before any major new feature class.

## Final handoff instruction

Future agents should read the full `docs/product/` folder before making changes. The repo docs are now the source of truth. Do not rely on chat memory alone.
