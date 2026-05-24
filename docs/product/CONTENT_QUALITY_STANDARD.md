# Content Quality Standard

## Purpose

This document defines what counts as real Little Dharma content. It exists because content counters can be misleading if generic shells are counted as story experiences.

## Core rule

Do not count generic title-substitution shells as real runtime content.

A runtime candidate must read like a real child-facing micro-retelling. It must include specific people, places, events, choices, emotions, and values from the story.

## Indexed stories

Indexed stories may be lighter than runtime candidates, but they still need stable IDs, category mapping, journey mapping, source tradition, values, age bands, and safe summaries.

## Runtime candidates

A runtime candidate must include:

- stable id and storyId
- title and shortTitle
- story-specific summary
- sourceTradition
- primaryCategoryId
- storyPackId
- journeyId
- ageBands
- durationMinutes
- primaryValue and secondaryValues
- characters
- status as qa_ready unless later gates promote it
- at least 4 story-specific panels
- parentNote.sourceContext
- parentNote.discussionPrompt
- reflectionPrompt
- sacredRespectNotes where applicable
- safe audioMetadata

## Panel quality

Each panel should advance the story. Panels should not repeat the same skeleton across stories.

Good panels mention specific details such as Mathura, Yamuna, Gokul, Yashoda, Nanda, Devaki, Vasudeva, Govardhan, Lanka, Ashoka Vatika, Parvati, Shiva, Mooshak, Rama, Sita, or other relevant story-specific people and places.

Bad panels use generic language such as:

- begins with a clear moment
- moves the story forward
- the story ends with a practical value
- children can imitate
- is at the heart of
- clear event sequencing
- family dialogue
- specific Ganesha moment
- specific Hanuman moment
- Krishna childhood moment 1
- numbered placeholder event

## Audio script quality

Audio candidates must include story-specific narration. The narration must not be a repeated template with only the title changed.

Audio candidates should include:

- narrationScript
- voiceDirection
- pronunciationNotes
- pacingNotes
- audioMetadata aligned with audio-script readiness

Audio scripts must not imply that playback, generated voice, TTS, ElevenLabs, microphone, or recording exists unless that feature has been approved and implemented.

## Parent note quality

Parent notes should be specific enough to help a parent discuss the story. They should explain the source context and values without overclaiming or turning sacred content into shallow moralizing.

## Sacred content quality

Sacred stories should be respectful, warm, child-safe, and restrained. Avoid fear-heavy, violent, punishment-heavy, mocking, or over-comedic treatment.

## Validator expectations

Each pack validator should check:

- count targets
- unique IDs
- category mapping
- journey mapping
- qa_ready staging
- audioMetadata safety
- Story Experience Index build safety
- route and runtime drift guard
- no audio files unless approved
- no generic shell phrases
- no title-substitution-only panels
- no repeated narration skeletons
- no duplicate journey registration

## Merge standard

A content PR is mergeable only when it adds meaningful content, passes validators, preserves local-first behavior, and avoids feature drift.
