# Current Status and Counters

## Purpose

This document gives future agents a quick current-state snapshot. It should be updated whenever major content packs or roadmap milestones merge.

## Latest known repo status

As of the project conversation handoff:

- PR #154 through PR #158 established content governance, indexing, import, runtime, and audio gates.
- PR #159 added Ramayana Expansion Recovery Pack v1.
- PR #160 fixed the Vrindavan journey launch crash.
- GitHub PR #162 added Krishna Childhood Expansion Recovery Pack v1.
- PR #163 added Ganesha + Hanuman Expansion Pack v1.
- PR #164 added Product Handoff Docs v1.
- PR #165 added Design Screen Reference Governance v1.
- PR #166 clarified that the 1-487 screen system is the product visual and experiential north star.

## Recovery content additions

| Pack | Indexed stories | QA-staged runtime candidates | Audio candidates |
|---|---:|---:|---:|
| Ramayana Expansion Recovery Pack v1 | 100 | 40 | 25 |
| Krishna Childhood Expansion Recovery Pack v1 | 120 | 45 | 30 |
| Ganesha + Hanuman Expansion Pack v1 | 100 | 35+ | 25 |
| Total recovery additions | 320 | 120+ | 80 |

## PR #207 target

| Target | Required by PR #207 |
|---|---:|
| Indexed story experiences | 1,000+ |
| Runtime-ready or QA-staged runtime candidates | 450+ |
| Audio-ready scripts | 350+ |
| Strong Dharma Journeys | 6-8 |

## Approximate gap after PR #163

This table counts only the known recovery additions above, not any pre-existing app content.

| Target | Known recovery additions | Remaining gap before pre-existing content adjustments |
|---|---:|---:|
| Indexed story experiences | 320 | 680 |
| Runtime-ready or QA-staged runtime candidates | 120+ | 330 |
| Audio-ready scripts | 80 | 270 |

A future Content Counter Audit should calculate exact repo totals from `contentRegistryStories`, Story Experience Index, runtime gates, and audio gates.

## Important caveat

Content counts are useful only if quality is real. Generic title-substitution shells must not be counted as runtime progress.

## Next recommended audit

Add a dedicated counter audit PR after several more content packs:

- Count indexed story experiences.
- Count QA-staged runtime candidates.
- Count runtime-ready stories if any.
- Count audio-script-ready candidates.
- Count journey coverage.
- Count category coverage.
- Report exact gap to PR #207.
