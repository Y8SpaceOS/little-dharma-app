# Roadmap to PR #207

## Purpose

This document locks the Little Dharma execution roadmap so future agents do not drift from the agreed plan. It should be read before starting any sprint or pull request.

## Current recovery sequence

The app entered a recovery phase after roadmap drift. The recovery sequence is designed to restore engineering readiness, then scale real content.

Completed or expected sequence:

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

## Next planned content sequence

After handoff docs, continue content scale. Do not switch to unrelated UI, copy, analytics, backend, or governance work without explicit approval.

Recommended next PRs:

- PR #165: Bedtime + Values Expansion Pack v1.
- PR #166: Festival Stories Expansion Pack v1.
- PR #167: Bhagavad Gita for Children Expansion Pack v1.
- PR #168: Mahabharata Child-Safe Expansion Pack v1.
- PR #169: Panchatantra/Hitopadesha Values Expansion Pack v1.
- PR #170: Content Counter Audit + PR #207 Projection v1.
- PR #171 onward: continue runtime promotion, audio readiness, journey depth, parent dashboard usefulness, and Story World surfacing only through approved summaries.

## PR #207 target state

By PR #207, Little Dharma should have:

- Stable local-first React Native / Expo app.
- Story World with real categories and meaningful content depth.
- 1,000+ indexed story experiences.
- 450+ runtime-ready or QA-staged runtime candidates.
- 350+ audio-ready scripts.
- 6-8 strong Dharma Journeys.
- Krishna, Ramayana, Ganesha, Hanuman, Bedtime, Values, Festivals, Bhagavad Gita for Children, Mahabharata child-safe, and Panchatantra/Hitopadesha packs.
- Parent dashboard that helps parents understand what the child is reading.
- No backend dependency for core experience.
- No hard gamification.
- Luvlu as a subtle helper only.
- Prototype-level warmth applied to real app surfaces, not prototype-screen leakage.

## Content counters added so far in recovery phase

Known content recovery additions:

- PR #159 Ramayana: +100 indexed, +40 QA-staged runtime candidates, +25 audio candidates.
- GitHub PR #162 Krishna Childhood: +120 indexed, +45 QA-staged runtime candidates, +30 audio candidates.
- PR #163 Ganesha + Hanuman: +100 indexed, +35 or more QA-staged runtime candidates, +25 audio candidates.

Approximate recovery contribution after PR #163:

- +320 indexed story experiences.
- +120 QA-staged runtime candidates.
- +80 audio candidates.

## No-drift rule

Every sprint must explicitly state whether it is part of this roadmap. Any change to roadmap order, scope, core app behavior, runtime resolver, story completion, journey progress, audio playback, backend, analytics, sharing, notifications, microphone, TTS, AI personalization, or gamification requires explicit approval before implementation.

## Hotfix exception

Hotfixes are allowed only for launch blockers, red screens, runtime crashes, broken imports, or validator failures that block the planned roadmap. A hotfix must be small, scoped, and followed by immediate return to the roadmap.
