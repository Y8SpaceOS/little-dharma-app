import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const bhagavadGitaForChildrenExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "bhagavad-gita-children-exp-v1-001",
    "storyId": "bhagavad-gita-children-exp-v1-001",
    "slug": "bhagavad-gita-children-exp-v1-001",
    "title": "Arjuna\u2019s Brave Breath",
    "shortTitle": "Arjuna\u2019s Brave Breath",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "Arjuna\u2019s Brave Breath: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the mango basket, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the mango basket problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna\u2019s Brave Breath. Arjuna\u2019s Brave Breath: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-002",
    "storyId": "bhagavad-gita-children-exp-v1-002",
    "slug": "bhagavad-gita-children-exp-v1-002",
    "title": "Krishna\u2019s Calm Advice",
    "shortTitle": "Krishna\u2019s Calm Advice",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "Krishna\u2019s Calm Advice: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the clay lamp, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the clay lamp problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna\u2019s Calm Advice. Krishna\u2019s Calm Advice: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-003",
    "storyId": "bhagavad-gita-children-exp-v1-003",
    "slug": "bhagavad-gita-children-exp-v1-003",
    "title": "The Work We Can Do",
    "shortTitle": "The Work We Can Do",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "The Work We Can Do: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the water pot, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the water pot problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Work We Can Do. The Work We Can Do: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-004",
    "storyId": "bhagavad-gita-children-exp-v1-004",
    "slug": "bhagavad-gita-children-exp-v1-004",
    "title": "The Mango of Steady Effort",
    "shortTitle": "The Mango of Steady Effort",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "The Mango of Steady Effort: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the garland thread, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the garland thread problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Mango of Steady Effort. The Mango of Steady Effort: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-005",
    "storyId": "bhagavad-gita-children-exp-v1-005",
    "slug": "bhagavad-gita-children-exp-v1-005",
    "title": "The Quiet Bow of Humility",
    "shortTitle": "The Quiet Bow of Humility",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Quiet Bow of Humility: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the wooden practice bow, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the wooden practice bow problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Quiet Bow of Humility. The Quiet Bow of Humility: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-006",
    "storyId": "bhagavad-gita-children-exp-v1-006",
    "slug": "bhagavad-gita-children-exp-v1-006",
    "title": "The Chariot Pause",
    "shortTitle": "The Chariot Pause",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "The Chariot Pause: Beside the chariot at dawn, Arjuna notices a grain sack tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the grain sack, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the grain sack problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Chariot Pause. The Chariot Pause: Beside the chariot at dawn, Arjuna notices a grain sack tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-007",
    "storyId": "bhagavad-gita-children-exp-v1-007",
    "slug": "bhagavad-gita-children-exp-v1-007",
    "title": "The Kind Word Before Action",
    "shortTitle": "The Kind Word Before Action",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "The Kind Word Before Action: Near a banyan tree by the camp, Arjuna notices a sandal strap tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna picks up the sandal strap, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Peaceful ending",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the sandal strap problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Kind Word Before Action. The Kind Word Before Action: Near a banyan tree by the camp, Arjuna notices a sandal strap tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-008",
    "storyId": "bhagavad-gita-children-exp-v1-008",
    "slug": "bhagavad-gita-children-exp-v1-008",
    "title": "The Garland of Gratitude",
    "shortTitle": "The Garland of Gratitude",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "The Garland of Gratitude: In a small courtyard with clay lamps, Arjuna notices a palm-leaf note tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna picks up the palm-leaf note, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the palm-leaf note problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Garland of Gratitude. The Garland of Gratitude: In a small courtyard with clay lamps, Arjuna notices a palm-leaf note tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-009",
    "storyId": "bhagavad-gita-children-exp-v1-009",
    "slug": "bhagavad-gita-children-exp-v1-009",
    "title": "The Lamp of Self-Control",
    "shortTitle": "The Lamp of Self-Control",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "The Lamp of Self-Control: At the well path with brass pots, Arjuna notices a roti plate tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna picks up the roti plate, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the roti plate problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Lamp of Self-Control. The Lamp of Self-Control: At the well path with brass pots, Arjuna notices a roti plate tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-010",
    "storyId": "bhagavad-gita-children-exp-v1-010",
    "slug": "bhagavad-gita-children-exp-v1-010",
    "title": "The Friend Who Listened First",
    "shortTitle": "The Friend Who Listened First",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Friend Who Listened First: Under a neem tree in the morning breeze, Arjuna notices a small bell tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Careful action",
        "text": "Arjuna picks up the small bell, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the small bell problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Friend Who Listened First. The Friend Who Listened First: Under a neem tree in the morning breeze, Arjuna notices a small bell tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-011",
    "storyId": "bhagavad-gita-children-exp-v1-011",
    "slug": "bhagavad-gita-children-exp-v1-011",
    "title": "Arjuna and the Spilled Grain",
    "shortTitle": "Arjuna and the Spilled Grain",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "Arjuna and the Spilled Grain: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Gentle question",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Careful action",
        "text": "Arjuna picks up the mango basket, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the mango basket problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna and the Spilled Grain. Arjuna and the Spilled Grain: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-012",
    "storyId": "bhagavad-gita-children-exp-v1-012",
    "slug": "bhagavad-gita-children-exp-v1-012",
    "title": "Krishna Under the Banyan Tree",
    "shortTitle": "Krishna Under the Banyan Tree",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "Krishna Under the Banyan Tree: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Gentle question",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Careful action",
        "text": "Arjuna picks up the clay lamp, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the clay lamp problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna Under the Banyan Tree. Krishna Under the Banyan Tree: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-013",
    "storyId": "bhagavad-gita-children-exp-v1-013",
    "slug": "bhagavad-gita-children-exp-v1-013",
    "title": "The Promise to Finish Kindly",
    "shortTitle": "The Promise to Finish Kindly",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "The Promise to Finish Kindly: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Gentle question",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Kind follow-through",
        "text": "Arjuna picks up the water pot, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the water pot problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Promise to Finish Kindly. The Promise to Finish Kindly: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-014",
    "storyId": "bhagavad-gita-children-exp-v1-014",
    "slug": "bhagavad-gita-children-exp-v1-014",
    "title": "The Sandal Strap and Patience",
    "shortTitle": "The Sandal Strap and Patience",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "The Sandal Strap and Patience: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Gentle question",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Kind follow-through",
        "text": "Arjuna picks up the garland thread, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Quiet confidence",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the garland thread problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Sandal Strap and Patience. The Sandal Strap and Patience: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-015",
    "storyId": "bhagavad-gita-children-exp-v1-015",
    "slug": "bhagavad-gita-children-exp-v1-015",
    "title": "The Water Pot Decision",
    "shortTitle": "The Water Pot Decision",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Water Pot Decision: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Gentle question",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Kind follow-through",
        "text": "Arjuna picks up the wooden practice bow, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the wooden practice bow problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Water Pot Decision. The Water Pot Decision: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-016",
    "storyId": "bhagavad-gita-children-exp-v1-016",
    "slug": "bhagavad-gita-children-exp-v1-016",
    "title": "The Courtyard of Quiet Focus",
    "shortTitle": "The Courtyard of Quiet Focus",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "The Courtyard of Quiet Focus: Beside the chariot at dawn, Arjuna notices a grain sack tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Wise reminder",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the grain sack, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the grain sack problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Courtyard of Quiet Focus. The Courtyard of Quiet Focus: Beside the chariot at dawn, Arjuna notices a grain sack tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-017",
    "storyId": "bhagavad-gita-children-exp-v1-017",
    "slug": "bhagavad-gita-children-exp-v1-017",
    "title": "The Small Duty at Sunrise",
    "shortTitle": "The Small Duty at Sunrise",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "The Small Duty at Sunrise: Near a banyan tree by the camp, Arjuna notices a sandal strap tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Wise reminder",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the sandal strap, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the sandal strap problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Small Duty at Sunrise. The Small Duty at Sunrise: Near a banyan tree by the camp, Arjuna notices a sandal strap tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-018",
    "storyId": "bhagavad-gita-children-exp-v1-018",
    "slug": "bhagavad-gita-children-exp-v1-018",
    "title": "Arjuna Shares the Last Roti",
    "shortTitle": "Arjuna Shares the Last Roti",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "Arjuna Shares the Last Roti: In a small courtyard with clay lamps, Arjuna notices a palm-leaf note tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Wise reminder",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the palm-leaf note, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the palm-leaf note problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna Shares the Last Roti. Arjuna Shares the Last Roti: In a small courtyard with clay lamps, Arjuna notices a palm-leaf note tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-019",
    "storyId": "bhagavad-gita-children-exp-v1-019",
    "slug": "bhagavad-gita-children-exp-v1-019",
    "title": "Krishna and the Angry Voice",
    "shortTitle": "Krishna and the Angry Voice",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "Krishna and the Angry Voice: At the well path with brass pots, Arjuna notices a roti plate tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Wise reminder",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the roti plate, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the roti plate problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna and the Angry Voice. Krishna and the Angry Voice: At the well path with brass pots, Arjuna notices a roti plate tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-020",
    "storyId": "bhagavad-gita-children-exp-v1-020",
    "slug": "bhagavad-gita-children-exp-v1-020",
    "title": "The Rope of Responsibility",
    "shortTitle": "The Rope of Responsibility",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Rope of Responsibility: Under a neem tree in the morning breeze, Arjuna notices a small bell tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Wise reminder",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the small bell, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the small bell problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Rope of Responsibility. The Rope of Responsibility: Under a neem tree in the morning breeze, Arjuna notices a small bell tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-021",
    "storyId": "bhagavad-gita-children-exp-v1-021",
    "slug": "bhagavad-gita-children-exp-v1-021",
    "title": "The Thank-You Before Sleep",
    "shortTitle": "The Thank-You Before Sleep",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "The Thank-You Before Sleep: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Steady counsel",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the mango basket, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the mango basket problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Thank-You Before Sleep. The Thank-You Before Sleep: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-022",
    "storyId": "bhagavad-gita-children-exp-v1-022",
    "slug": "bhagavad-gita-children-exp-v1-022",
    "title": "Arjuna Counts Three Breaths",
    "shortTitle": "Arjuna Counts Three Breaths",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "Arjuna Counts Three Breaths: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Steady counsel",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna picks up the clay lamp, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the clay lamp problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna Counts Three Breaths. Arjuna Counts Three Breaths: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-023",
    "storyId": "bhagavad-gita-children-exp-v1-023",
    "slug": "bhagavad-gita-children-exp-v1-023",
    "title": "The Mat That Needed Folding",
    "shortTitle": "The Mat That Needed Folding",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "The Mat That Needed Folding: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Steady counsel",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna picks up the water pot, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the water pot problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Mat That Needed Folding. The Mat That Needed Folding: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-024",
    "storyId": "bhagavad-gita-children-exp-v1-024",
    "slug": "bhagavad-gita-children-exp-v1-024",
    "title": "Krishna\u2019s Two Questions",
    "shortTitle": "Krishna\u2019s Two Questions",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "Krishna\u2019s Two Questions: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Steady counsel",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna picks up the garland thread, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the garland thread problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna\u2019s Two Questions. Krishna\u2019s Two Questions: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-025",
    "storyId": "bhagavad-gita-children-exp-v1-025",
    "slug": "bhagavad-gita-children-exp-v1-025",
    "title": "The Clay Cup of Care",
    "shortTitle": "The Clay Cup of Care",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Clay Cup of Care: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Steady counsel",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Careful action",
        "text": "Arjuna picks up the wooden practice bow, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the wooden practice bow problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Clay Cup of Care. The Clay Cup of Care: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-026",
    "storyId": "bhagavad-gita-children-exp-v1-026",
    "slug": "bhagavad-gita-children-exp-v1-026",
    "title": "The Letter for Grandmother",
    "shortTitle": "The Letter for Grandmother",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "The Letter for Grandmother: Beside the chariot at dawn, Arjuna notices a grain sack tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Careful action",
        "text": "Arjuna picks up the grain sack, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the grain sack problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Letter for Grandmother. The Letter for Grandmother: Beside the chariot at dawn, Arjuna notices a grain sack tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-027",
    "storyId": "bhagavad-gita-children-exp-v1-027",
    "slug": "bhagavad-gita-children-exp-v1-027",
    "title": "Arjuna and the Broken Wheel Pin",
    "shortTitle": "Arjuna and the Broken Wheel Pin",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "Arjuna and the Broken Wheel Pin: Near a banyan tree by the camp, Arjuna notices a sandal strap tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Careful action",
        "text": "Arjuna picks up the sandal strap, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the sandal strap problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna and the Broken Wheel Pin. Arjuna and the Broken Wheel Pin: Near a banyan tree by the camp, Arjuna notices a sandal strap tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-028",
    "storyId": "bhagavad-gita-children-exp-v1-028",
    "slug": "bhagavad-gita-children-exp-v1-028",
    "title": "The Queue at the Well",
    "shortTitle": "The Queue at the Well",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "The Queue at the Well: In a small courtyard with clay lamps, Arjuna notices a palm-leaf note tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Kind follow-through",
        "text": "Arjuna picks up the palm-leaf note, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Grateful close",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the palm-leaf note problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Queue at the Well. The Queue at the Well: In a small courtyard with clay lamps, Arjuna notices a palm-leaf note tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-029",
    "storyId": "bhagavad-gita-children-exp-v1-029",
    "slug": "bhagavad-gita-children-exp-v1-029",
    "title": "Krishna\u2019s Gentle Reminder",
    "shortTitle": "Krishna\u2019s Gentle Reminder",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "Krishna\u2019s Gentle Reminder: At the well path with brass pots, Arjuna notices a roti plate tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Kind follow-through",
        "text": "Arjuna picks up the roti plate, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the roti plate problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna\u2019s Gentle Reminder. Krishna\u2019s Gentle Reminder: At the well path with brass pots, Arjuna notices a roti plate tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-030",
    "storyId": "bhagavad-gita-children-exp-v1-030",
    "slug": "bhagavad-gita-children-exp-v1-030",
    "title": "The Book Returned on Time",
    "shortTitle": "The Book Returned on Time",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Book Returned on Time: Under a neem tree in the morning breeze, Arjuna notices a small bell tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Kind guidance",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Kind follow-through",
        "text": "Arjuna picks up the small bell, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the small bell problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Book Returned on Time. The Book Returned on Time: Under a neem tree in the morning breeze, Arjuna notices a small bell tipped over near the path and pauses before reacting. Krishna invites Arjuna to breathe, observe, and choose a kind, responsible action.",
      "voiceDirection": "Warm, gentle, and encouraging.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Pause briefly after each action beat so children can visualize the moment.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-031",
    "storyId": "bhagavad-gita-children-exp-v1-031",
    "slug": "bhagavad-gita-children-exp-v1-031",
    "title": "Arjuna and the Lost Pencil",
    "shortTitle": "Arjuna and the Lost Pencil",
    "summary": "In a gentle moment beside the chariot at dawn, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "Arjuna and the Lost Pencil: Beside the chariot at dawn, Arjuna notices a mango basket tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the mango basket, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the mango basket problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-032",
    "storyId": "bhagavad-gita-children-exp-v1-032",
    "slug": "bhagavad-gita-children-exp-v1-032",
    "title": "The Neem Tree Apology",
    "shortTitle": "The Neem Tree Apology",
    "summary": "In a gentle moment near a banyan tree by the camp, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Chariot moment",
        "text": "The Neem Tree Apology: Near a banyan tree by the camp, Arjuna notices a clay lamp tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the clay lamp, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the clay lamp problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-033",
    "storyId": "bhagavad-gita-children-exp-v1-033",
    "slug": "bhagavad-gita-children-exp-v1-033",
    "title": "Krishna and the First Step",
    "shortTitle": "Krishna and the First Step",
    "summary": "In a gentle moment in a small courtyard with clay lamps, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Courtyard moment",
        "text": "Krishna and the First Step: In a small courtyard with clay lamps, Arjuna notices a water pot tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Helpful choice",
        "text": "Arjuna picks up the water pot, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the water pot problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-034",
    "storyId": "bhagavad-gita-children-exp-v1-034",
    "slug": "bhagavad-gita-children-exp-v1-034",
    "title": "The Thread of Steady Hands",
    "shortTitle": "The Thread of Steady Hands",
    "summary": "In a gentle moment at the well path with brass pots, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Wellside moment",
        "text": "The Thread of Steady Hands: At the well path with brass pots, Arjuna notices a garland thread tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the garland thread, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the garland thread problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-035",
    "storyId": "bhagavad-gita-children-exp-v1-035",
    "slug": "bhagavad-gita-children-exp-v1-035",
    "title": "The Morning Bell Choice",
    "shortTitle": "The Morning Bell Choice",
    "summary": "In a gentle moment under a neem tree in the morning breeze, Arjuna learns to choose calm, kind, responsible action with Krishna\u2019s guidance.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Banyan moment",
        "text": "The Morning Bell Choice: Under a neem tree in the morning breeze, Arjuna notices a wooden practice bow tipped over near the path and pauses before reacting."
      },
      {
        "id": "panel-2",
        "title": "Calm teaching",
        "text": "Krishna asks Arjuna to breathe slowly, look carefully, and choose the next action that protects people and respects the work."
      },
      {
        "id": "panel-3",
        "title": "Repair and care",
        "text": "Arjuna picks up the wooden practice bow, fixes what he can, speaks gently to a friend, and finishes the task he had promised to complete."
      },
      {
        "id": "panel-4",
        "title": "Calm finish",
        "text": "The group feels calmer, the work is done well, and Arjuna understands that right effort with kindness brings quiet strength."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita adaptation focused on daily choices, emotional balance, and duty without violence.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What did Arjuna do first before solving the wooden practice bow problem, and why did that help?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "When something goes wrong today, what calm first step can you take before acting?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-036",
    "storyId": "bhagavad-gita-children-exp-v1-036",
    "slug": "bhagavad-gita-children-exp-v1-036",
    "title": "Arjuna Learns Honesty with Krishna",
    "shortTitle": "Arjuna Learns Honesty with Krishna",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Honesty with Krishna J', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-037",
    "storyId": "bhagavad-gita-children-exp-v1-037",
    "slug": "bhagavad-gita-children-exp-v1-037",
    "title": "Krishna Guides a Courage Choice",
    "shortTitle": "Krishna Guides a Courage Choice",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Courage Choice K', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-038",
    "storyId": "bhagavad-gita-children-exp-v1-038",
    "slug": "bhagavad-gita-children-exp-v1-038",
    "title": "A Calm Promise on the Chariot",
    "shortTitle": "A Calm Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Calm Promise on the Chariot L', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-039",
    "storyId": "bhagavad-gita-children-exp-v1-039",
    "slug": "bhagavad-gita-children-exp-v1-039",
    "title": "Responsibility Steps for a Steady Heart",
    "shortTitle": "Responsibility Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Responsibility Steps for a Steady Heart M', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-040",
    "storyId": "bhagavad-gita-children-exp-v1-040",
    "slug": "bhagavad-gita-children-exp-v1-040",
    "title": "Doing Right with Kindness",
    "shortTitle": "Doing Right with Kindness",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Kindness N', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-041",
    "storyId": "bhagavad-gita-children-exp-v1-041",
    "slug": "bhagavad-gita-children-exp-v1-041",
    "title": "Arjuna Learns Focus with Krishna",
    "shortTitle": "Arjuna Learns Focus with Krishna",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Focus with Krishna O', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-042",
    "storyId": "bhagavad-gita-children-exp-v1-042",
    "slug": "bhagavad-gita-children-exp-v1-042",
    "title": "Krishna Guides a Humility Choice",
    "shortTitle": "Krishna Guides a Humility Choice",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Humility Choice P', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-043",
    "storyId": "bhagavad-gita-children-exp-v1-043",
    "slug": "bhagavad-gita-children-exp-v1-043",
    "title": "A Devotion Promise on the Chariot",
    "shortTitle": "A Devotion Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Devotion Promise on the Chariot Q', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-044",
    "storyId": "bhagavad-gita-children-exp-v1-044",
    "slug": "bhagavad-gita-children-exp-v1-044",
    "title": "Self-Control Steps for a Steady Heart",
    "shortTitle": "Self-Control Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Self-Control Steps for a Steady Heart R', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-045",
    "storyId": "bhagavad-gita-children-exp-v1-045",
    "slug": "bhagavad-gita-children-exp-v1-045",
    "title": "Doing Right with Gratitude",
    "shortTitle": "Doing Right with Gratitude",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Gratitude S', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-046",
    "storyId": "bhagavad-gita-children-exp-v1-046",
    "slug": "bhagavad-gita-children-exp-v1-046",
    "title": "Arjuna Learns Friendship with Krishna",
    "shortTitle": "Arjuna Learns Friendship with Krishna",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Friendship with Krishna T', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-047",
    "storyId": "bhagavad-gita-children-exp-v1-047",
    "slug": "bhagavad-gita-children-exp-v1-047",
    "title": "Krishna Guides a Steady Effort Choice",
    "shortTitle": "Krishna Guides a Steady Effort Choice",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Steady Effort Choice U', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-048",
    "storyId": "bhagavad-gita-children-exp-v1-048",
    "slug": "bhagavad-gita-children-exp-v1-048",
    "title": "A Honesty Promise on the Chariot",
    "shortTitle": "A Honesty Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Honesty Promise on the Chariot V', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-049",
    "storyId": "bhagavad-gita-children-exp-v1-049",
    "slug": "bhagavad-gita-children-exp-v1-049",
    "title": "Courage Steps for a Steady Heart",
    "shortTitle": "Courage Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Courage Steps for a Steady Heart W', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-050",
    "storyId": "bhagavad-gita-children-exp-v1-050",
    "slug": "bhagavad-gita-children-exp-v1-050",
    "title": "Doing Right with Calm",
    "shortTitle": "Doing Right with Calm",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Calm X', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-051",
    "storyId": "bhagavad-gita-children-exp-v1-051",
    "slug": "bhagavad-gita-children-exp-v1-051",
    "title": "Arjuna Learns Responsibility with Krishna",
    "shortTitle": "Arjuna Learns Responsibility with Krishna",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Responsibility with Krishna Y', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-052",
    "storyId": "bhagavad-gita-children-exp-v1-052",
    "slug": "bhagavad-gita-children-exp-v1-052",
    "title": "Krishna Guides a Kindness Choice",
    "shortTitle": "Krishna Guides a Kindness Choice",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Kindness Choice Z', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-053",
    "storyId": "bhagavad-gita-children-exp-v1-053",
    "slug": "bhagavad-gita-children-exp-v1-053",
    "title": "A Focus Promise on the Chariot",
    "shortTitle": "A Focus Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Focus Promise on the Chariot A', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-054",
    "storyId": "bhagavad-gita-children-exp-v1-054",
    "slug": "bhagavad-gita-children-exp-v1-054",
    "title": "Humility Steps for a Steady Heart",
    "shortTitle": "Humility Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Humility Steps for a Steady Heart B', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-055",
    "storyId": "bhagavad-gita-children-exp-v1-055",
    "slug": "bhagavad-gita-children-exp-v1-055",
    "title": "Doing Right with Devotion",
    "shortTitle": "Doing Right with Devotion",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Devotion C', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-056",
    "storyId": "bhagavad-gita-children-exp-v1-056",
    "slug": "bhagavad-gita-children-exp-v1-056",
    "title": "Arjuna Learns Self-Control with Krishna",
    "shortTitle": "Arjuna Learns Self-Control with Krishna",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Self-Control with Krishna D', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-057",
    "storyId": "bhagavad-gita-children-exp-v1-057",
    "slug": "bhagavad-gita-children-exp-v1-057",
    "title": "Krishna Guides a Gratitude Choice",
    "shortTitle": "Krishna Guides a Gratitude Choice",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Gratitude Choice E', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-058",
    "storyId": "bhagavad-gita-children-exp-v1-058",
    "slug": "bhagavad-gita-children-exp-v1-058",
    "title": "A Friendship Promise on the Chariot",
    "shortTitle": "A Friendship Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Friendship Promise on the Chariot F', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-059",
    "storyId": "bhagavad-gita-children-exp-v1-059",
    "slug": "bhagavad-gita-children-exp-v1-059",
    "title": "Steady Effort Steps for a Steady Heart",
    "shortTitle": "Steady Effort Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Steady Effort Steps for a Steady Heart G', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-060",
    "storyId": "bhagavad-gita-children-exp-v1-060",
    "slug": "bhagavad-gita-children-exp-v1-060",
    "title": "Doing Right with Honesty",
    "shortTitle": "Doing Right with Honesty",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Honesty H', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-061",
    "storyId": "bhagavad-gita-children-exp-v1-061",
    "slug": "bhagavad-gita-children-exp-v1-061",
    "title": "Arjuna Learns Courage with Krishna",
    "shortTitle": "Arjuna Learns Courage with Krishna",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Courage with Krishna I', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-062",
    "storyId": "bhagavad-gita-children-exp-v1-062",
    "slug": "bhagavad-gita-children-exp-v1-062",
    "title": "Krishna Guides a Calm Choice",
    "shortTitle": "Krishna Guides a Calm Choice",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Calm Choice J', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-063",
    "storyId": "bhagavad-gita-children-exp-v1-063",
    "slug": "bhagavad-gita-children-exp-v1-063",
    "title": "A Responsibility Promise on the Chariot",
    "shortTitle": "A Responsibility Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Responsibility Promise on the Chariot K', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-064",
    "storyId": "bhagavad-gita-children-exp-v1-064",
    "slug": "bhagavad-gita-children-exp-v1-064",
    "title": "Kindness Steps for a Steady Heart",
    "shortTitle": "Kindness Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Kindness Steps for a Steady Heart L', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-065",
    "storyId": "bhagavad-gita-children-exp-v1-065",
    "slug": "bhagavad-gita-children-exp-v1-065",
    "title": "Doing Right with Focus",
    "shortTitle": "Doing Right with Focus",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Focus M', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-066",
    "storyId": "bhagavad-gita-children-exp-v1-066",
    "slug": "bhagavad-gita-children-exp-v1-066",
    "title": "Arjuna Learns Humility with Krishna",
    "shortTitle": "Arjuna Learns Humility with Krishna",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Humility with Krishna N', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-067",
    "storyId": "bhagavad-gita-children-exp-v1-067",
    "slug": "bhagavad-gita-children-exp-v1-067",
    "title": "Krishna Guides a Devotion Choice",
    "shortTitle": "Krishna Guides a Devotion Choice",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Devotion Choice O', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-068",
    "storyId": "bhagavad-gita-children-exp-v1-068",
    "slug": "bhagavad-gita-children-exp-v1-068",
    "title": "A Self-Control Promise on the Chariot",
    "shortTitle": "A Self-Control Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Self-Control Promise on the Chariot P', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-069",
    "storyId": "bhagavad-gita-children-exp-v1-069",
    "slug": "bhagavad-gita-children-exp-v1-069",
    "title": "Gratitude Steps for a Steady Heart",
    "shortTitle": "Gratitude Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Gratitude Steps for a Steady Heart Q', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-070",
    "storyId": "bhagavad-gita-children-exp-v1-070",
    "slug": "bhagavad-gita-children-exp-v1-070",
    "title": "Doing Right with Friendship",
    "shortTitle": "Doing Right with Friendship",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Friendship R', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-071",
    "storyId": "bhagavad-gita-children-exp-v1-071",
    "slug": "bhagavad-gita-children-exp-v1-071",
    "title": "Arjuna Learns Steady Effort with Krishna",
    "shortTitle": "Arjuna Learns Steady Effort with Krishna",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Steady Effort with Krishna S', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-072",
    "storyId": "bhagavad-gita-children-exp-v1-072",
    "slug": "bhagavad-gita-children-exp-v1-072",
    "title": "Krishna Guides a Honesty Choice",
    "shortTitle": "Krishna Guides a Honesty Choice",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Honesty Choice T', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-073",
    "storyId": "bhagavad-gita-children-exp-v1-073",
    "slug": "bhagavad-gita-children-exp-v1-073",
    "title": "A Courage Promise on the Chariot",
    "shortTitle": "A Courage Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Courage Promise on the Chariot U', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-074",
    "storyId": "bhagavad-gita-children-exp-v1-074",
    "slug": "bhagavad-gita-children-exp-v1-074",
    "title": "Calm Steps for a Steady Heart",
    "shortTitle": "Calm Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Calm Steps for a Steady Heart V', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-075",
    "storyId": "bhagavad-gita-children-exp-v1-075",
    "slug": "bhagavad-gita-children-exp-v1-075",
    "title": "Doing Right with Responsibility",
    "shortTitle": "Doing Right with Responsibility",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Responsibility W', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-076",
    "storyId": "bhagavad-gita-children-exp-v1-076",
    "slug": "bhagavad-gita-children-exp-v1-076",
    "title": "Arjuna Learns Kindness with Krishna",
    "shortTitle": "Arjuna Learns Kindness with Krishna",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Kindness with Krishna X', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-077",
    "storyId": "bhagavad-gita-children-exp-v1-077",
    "slug": "bhagavad-gita-children-exp-v1-077",
    "title": "Krishna Guides a Focus Choice",
    "shortTitle": "Krishna Guides a Focus Choice",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Focus Choice Y', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-078",
    "storyId": "bhagavad-gita-children-exp-v1-078",
    "slug": "bhagavad-gita-children-exp-v1-078",
    "title": "A Humility Promise on the Chariot",
    "shortTitle": "A Humility Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Humility Promise on the Chariot Z', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-079",
    "storyId": "bhagavad-gita-children-exp-v1-079",
    "slug": "bhagavad-gita-children-exp-v1-079",
    "title": "Devotion Steps for a Steady Heart",
    "shortTitle": "Devotion Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Devotion Steps for a Steady Heart A', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-080",
    "storyId": "bhagavad-gita-children-exp-v1-080",
    "slug": "bhagavad-gita-children-exp-v1-080",
    "title": "Doing Right with Self-Control",
    "shortTitle": "Doing Right with Self-Control",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Self-Control B', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-081",
    "storyId": "bhagavad-gita-children-exp-v1-081",
    "slug": "bhagavad-gita-children-exp-v1-081",
    "title": "Arjuna Learns Gratitude with Krishna",
    "shortTitle": "Arjuna Learns Gratitude with Krishna",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 81,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Gratitude with Krishna C', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-082",
    "storyId": "bhagavad-gita-children-exp-v1-082",
    "slug": "bhagavad-gita-children-exp-v1-082",
    "title": "Krishna Guides a Friendship Choice",
    "shortTitle": "Krishna Guides a Friendship Choice",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Friendship Choice D', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-083",
    "storyId": "bhagavad-gita-children-exp-v1-083",
    "slug": "bhagavad-gita-children-exp-v1-083",
    "title": "A Steady Effort Promise on the Chariot",
    "shortTitle": "A Steady Effort Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Steady Effort Promise on the Chariot E', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-084",
    "storyId": "bhagavad-gita-children-exp-v1-084",
    "slug": "bhagavad-gita-children-exp-v1-084",
    "title": "Honesty Steps for a Steady Heart",
    "shortTitle": "Honesty Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Honesty Steps for a Steady Heart F', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-085",
    "storyId": "bhagavad-gita-children-exp-v1-085",
    "slug": "bhagavad-gita-children-exp-v1-085",
    "title": "Doing Right with Courage",
    "shortTitle": "Doing Right with Courage",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Courage G', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-086",
    "storyId": "bhagavad-gita-children-exp-v1-086",
    "slug": "bhagavad-gita-children-exp-v1-086",
    "title": "Arjuna Learns Calm with Krishna",
    "shortTitle": "Arjuna Learns Calm with Krishna",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Calm with Krishna H', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-087",
    "storyId": "bhagavad-gita-children-exp-v1-087",
    "slug": "bhagavad-gita-children-exp-v1-087",
    "title": "Krishna Guides a Responsibility Choice",
    "shortTitle": "Krishna Guides a Responsibility Choice",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Responsibility Choice I', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-088",
    "storyId": "bhagavad-gita-children-exp-v1-088",
    "slug": "bhagavad-gita-children-exp-v1-088",
    "title": "A Kindness Promise on the Chariot",
    "shortTitle": "A Kindness Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Kindness Promise on the Chariot J', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-089",
    "storyId": "bhagavad-gita-children-exp-v1-089",
    "slug": "bhagavad-gita-children-exp-v1-089",
    "title": "Focus Steps for a Steady Heart",
    "shortTitle": "Focus Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in focus in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 89,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Focus Steps for a Steady Heart K', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models focus through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-090",
    "storyId": "bhagavad-gita-children-exp-v1-090",
    "slug": "bhagavad-gita-children-exp-v1-090",
    "title": "Doing Right with Humility",
    "shortTitle": "Doing Right with Humility",
    "summary": "Krishna gently guides Arjuna in humility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Humility L', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models humility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-091",
    "storyId": "bhagavad-gita-children-exp-v1-091",
    "slug": "bhagavad-gita-children-exp-v1-091",
    "title": "Arjuna Learns Devotion with Krishna",
    "shortTitle": "Arjuna Learns Devotion with Krishna",
    "summary": "Krishna gently guides Arjuna in devotion in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Devotion with Krishna M', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models devotion through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-092",
    "storyId": "bhagavad-gita-children-exp-v1-092",
    "slug": "bhagavad-gita-children-exp-v1-092",
    "title": "Krishna Guides a Self-Control Choice",
    "shortTitle": "Krishna Guides a Self-Control Choice",
    "summary": "Krishna gently guides Arjuna in self-control in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Self-Control",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Self-Control Choice N', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models self-control through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-093",
    "storyId": "bhagavad-gita-children-exp-v1-093",
    "slug": "bhagavad-gita-children-exp-v1-093",
    "title": "A Gratitude Promise on the Chariot",
    "shortTitle": "A Gratitude Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Gratitude Promise on the Chariot O', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models gratitude through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-094",
    "storyId": "bhagavad-gita-children-exp-v1-094",
    "slug": "bhagavad-gita-children-exp-v1-094",
    "title": "Friendship Steps for a Steady Heart",
    "shortTitle": "Friendship Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in friendship in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Friendship Steps for a Steady Heart P', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models friendship through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-095",
    "storyId": "bhagavad-gita-children-exp-v1-095",
    "slug": "bhagavad-gita-children-exp-v1-095",
    "title": "Doing Right with Steady Effort",
    "shortTitle": "Doing Right with Steady Effort",
    "summary": "Krishna gently guides Arjuna in steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Steady Effort",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Steady Effort Q', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models steady effort through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-096",
    "storyId": "bhagavad-gita-children-exp-v1-096",
    "slug": "bhagavad-gita-children-exp-v1-096",
    "title": "Arjuna Learns Honesty with Krishna",
    "shortTitle": "Arjuna Learns Honesty with Krishna",
    "summary": "Krishna gently guides Arjuna in honesty in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Honesty",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Honesty with Krishna R', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models honesty through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-097",
    "storyId": "bhagavad-gita-children-exp-v1-097",
    "slug": "bhagavad-gita-children-exp-v1-097",
    "title": "Krishna Guides a Courage Choice",
    "shortTitle": "Krishna Guides a Courage Choice",
    "summary": "Krishna gently guides Arjuna in courage in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 97,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Courage Choice S', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models courage through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-098",
    "storyId": "bhagavad-gita-children-exp-v1-098",
    "slug": "bhagavad-gita-children-exp-v1-098",
    "title": "A Calm Promise on the Chariot",
    "shortTitle": "A Calm Promise on the Chariot",
    "summary": "Krishna gently guides Arjuna in calm in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'A Calm Promise on the Chariot T', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models calm through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-099",
    "storyId": "bhagavad-gita-children-exp-v1-099",
    "slug": "bhagavad-gita-children-exp-v1-099",
    "title": "Responsibility Steps for a Steady Heart",
    "shortTitle": "Responsibility Steps for a Steady Heart",
    "summary": "Krishna gently guides Arjuna in responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Responsibility Steps for a Steady Heart U', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models responsibility through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "bhagavad-gita-children-exp-v1-100",
    "storyId": "bhagavad-gita-children-exp-v1-100",
    "slug": "bhagavad-gita-children-exp-v1-100",
    "title": "Doing Right with Kindness",
    "shortTitle": "Doing Right with Kindness",
    "summary": "Krishna gently guides Arjuna in kindness in a child-safe way through simple choices, calm thinking, and kind action.",
    "sourceTradition": "Bhagavad Gita for Children",
    "sourceTextOrTraditionNote": "Child-safe retelling inspired by Bhagavad Gita teachings on duty, calm, and right action.",
    "storyPackId": "bhagavad-gita-for-children-expansion-pack-v1",
    "journeyId": "bhagavad-gita-for-children-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Calm",
      "Kindness"
    ],
    "characters": [
      "Krishna",
      "Arjuna"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Kindness V', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that steady effort in small actions helps every day."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a careful action, speaks kindly, and pays attention to the task in front of him."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With a calmer heart, Arjuna continues his responsibility with humility and steady effort."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Bhagavad Gita framing focused on practical values and emotional regulation.",
      "valueExplained": "This story models kindness through calm reflection and responsible action.",
      "discussionPrompt": "What is one right action your child can take today even if a task feels hard?",
      "practicePrompt": "Try a breathe-think-act routine before the next challenge.",
      "cautionNote": "Keep discussion age-appropriate, warm, and non-violent."
    },
    "reflectionPrompt": "What small right action can you do with a calm mind today?",
    "ritualPrompt": "Take three breaths, place a hand on your heart, and choose one kind action.",
    "completionBlessing": "May your heart stay calm, kind, and steady in right effort.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Child-safe chariot-side guidance moment with warm sunrise tones.",
      "styleGuidance": "Warm, respectful, calm expressions; no battle intensity.",
      "culturalGuardrails": [
        "Respect sacred names",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "violent scenes",
        "hard gamification",
        "sectarian messaging"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "medium",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "bhagavad_gita_for_children",
    "secondaryCategoryIds": [
      "bhagavad_gita_for_children"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  }
];

export const bhagavadGitaForChildrenExpansionPackV1StoryPack: StoryPack = {
  id: 'bhagavad-gita-for-children-expansion-pack-v1',
  title: 'Bhagavad Gita for Children Expansion Pack v1',
  childFacingTitle: 'Bhagavad Gita for Children',
  description: 'Child-safe Bhagavad Gita stories focused on courage, calm, and doing the right thing.',
  sourceTradition: 'Bhagavad Gita for Children',
  category: 'values',
  status: 'qa_ready',
  storyIds: bhagavadGitaForChildrenExpansionPackV1Stories.map((story) => story.id),
  recommendedAgeBands: ['6-8', '9-12'],
  contentSafetyNotes: [
    'Child-safe adaptation with non-violent framing.',
    'No adult theological density; practical values only.'
  ],
  sacredRespectNotes: ['Sacred teachings presented with warmth, simplicity, and respect.']
};

export const bhagavadGitaForChildrenExpansionPackV1Journey: DharmaJourney = {
  id: 'bhagavad-gita-for-children-journey-v1',
  title: 'Bhagavad Gita for Children Journey',
  childFacingTitle: 'Gita Calm and Courage Journey',
  description: 'A child-safe guided journey through practical Bhagavad Gita values.',
  sourceTradition: 'Bhagavad Gita for Children',
  recommendedAgeBands: ['6-8', '9-12'],
  storyIds: bhagavadGitaForChildrenExpansionPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 6,
  status: 'qa_ready',
  journeyType: 'guided_path'
};
