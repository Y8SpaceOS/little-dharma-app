# Parent Journey Settings + Dharma Journey Model v1 QA

- DharmaJourney model exists with required fields in `src/lib/dharmaJourneys.ts`.
- JourneyProgress type and local helper utilities exist in `src/lib/dharmaJourneys.ts` and `src/lib/journeyProgress.ts`.
- Seeded journeys include Ramayana Journey, Krishna Childhood Journey, Ganesha Wisdom Journey, Festival Journey, Hanuman Journey, Mahabharata Journey, and Bhagavad Gita for Children.
- Ramayana/Krishna Childhood are recommended before Mahabharata/Bhagavad Gita in parent-facing summary and settings copy.
- Parent Journey Settings route added at `app/(parent)/journey-settings.tsx` and linked from Parent Dashboard and Parent Controls.
- Parent copy explains Dharma Journeys as gentle story paths and on-device local-first progress.
- No exact age collection was added; broad age bands only remain in use.
- No public child profile is created.
- No backend/auth/cloud sync, analytics/telemetry, CMS, monetization, paid beta, external private beta, App Store submission, audio playback, microphone permission, or recording scope added.
- Existing Parent Controls, Child Home, Story World, and story completion/progress behavior remain intact.
- Editorial guardrails documented in data comments: child-safe retellings, no graphic violence for younger children, no fear-based religion, no sectarian superiority, no caste-coded messaging, no guilt-based devotion, and no deity trivialisation.
- Sprint governance updated: Sprint 71 done, Sprint 72+ not started/not_started depending doc format, Sprint 14/15 deferred, Sprint 60 conditional no-go remains present.
