# Content Universe Architecture

## Core Structure

### Worlds
Curated thematic universes (e.g., Courage Forest, Festival City, Wisdom River) that organize content progression.

### Characters
Recurring, emotionally resonant guides with distinct personalities and learning roles.

### Stories
Short, age-banded narrative units linked to values, festivals, and rituals.

### Values
Canonical value taxonomy (e.g., satya, seva, karuna, dhairya) mapped across stories and activities.

### Shlokas
Pronunciation-friendly, age-appropriate selections with meaning, context, and audio scaffolding.

### Festivals
Calendar-aware modules with history, practices, family rituals, and regional variations.

### Sacred Places
Interactive cultural geography layer introducing key temples/heritage locations with respectful context.

### Rituals
Guided daily/weekly rituals designed for 5-10 minute completion with parent participation options.

### Age Bands
Structured pedagogical bands (0-3, 4-6, 7-9, 10-12) with complexity controls.

### Languages
Multilingual content strategy with baseline English + major Indian languages, expandable by demand.

### Audio Scripts
Narration scripts, pronunciation tracks, and ambience cues designed for ritual quality listening.

### Quizzes
Low-pressure recall and reflection checks emphasizing confidence and meaning over competition.

### Parent Prompts
At-home discussion cues that connect in-app learning to family life.

### Badges
Progress markers tied to values and rituals (private by default; share only parent-approved).

### Source Notes
Internal provenance references for stories/shlokas/festival details to support authenticity and review.

## Content Review Workflow
1. Draft content packet with metadata.
2. Editorial review for age fit and clarity.
3. Scholar/educator cultural review for sensitive topics.
4. Safety review (language, implications, regional nuance).
5. Audio and UX packaging review.
6. Limited internal pilot.
7. Publish with version tag and traceable source notes.
8. Post-release feedback loop and revision policy.

## Story Ritual Metadata Contract (Ritual Layer v1)
Each structured story packet now carries a ritual sub-object to power a 10-minute daily loop:
- `microShlokaTitle`
- `microShlokaText`
- `transliteration`
- `childMeaning`
- `parentMeaning`
- `ritualPrompt`
- `reflectionQuestion`
- `suggestedPracticeDurationSeconds`

This contract is intentionally lightweight: it supports calm, repeatable family ritual moments without requiring audio, push notifications, or social surfaces.

## Attribution Integrity Rule
When scriptural provenance is uncertain, content must be labeled as a “Little Dharma chant seed” or “simple Sanskrit phrase.” Do not present uncertain lines as direct scripture quotes.
