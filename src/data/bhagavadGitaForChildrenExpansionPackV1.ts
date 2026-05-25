import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const bhagavadGitaForChildrenExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "bhagavad-gita-children-exp-v1-001",
    "storyId": "bhagavad-gita-children-exp-v1-001",
    "slug": "bhagavad-gita-children-exp-v1-001",
    "title": "Arjuna Learns Courage with Krishna A",
    "shortTitle": "Arjuna Learns Courage with Krishna A",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "title": "A thoughtful pause",
        "text": "In 'Arjuna Learns Courage with Krishna A', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Arjuna Learns Courage with Krishna A. Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-002",
    "storyId": "bhagavad-gita-children-exp-v1-002",
    "slug": "bhagavad-gita-children-exp-v1-002",
    "title": "Krishna Guides a Calm Choice B",
    "shortTitle": "Krishna Guides a Calm Choice B",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "title": "A thoughtful pause",
        "text": "In 'Krishna Guides a Calm Choice B', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Krishna Guides a Calm Choice B. Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-003",
    "storyId": "bhagavad-gita-children-exp-v1-003",
    "slug": "bhagavad-gita-children-exp-v1-003",
    "title": "A Responsibility Promise on the Chariot C",
    "shortTitle": "A Responsibility Promise on the Chariot C",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "title": "A thoughtful pause",
        "text": "In 'A Responsibility Promise on the Chariot C', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "A Responsibility Promise on the Chariot C. Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-004",
    "storyId": "bhagavad-gita-children-exp-v1-004",
    "slug": "bhagavad-gita-children-exp-v1-004",
    "title": "Kindness Steps for a Steady Heart D",
    "shortTitle": "Kindness Steps for a Steady Heart D",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Kindness Steps for a Steady Heart D', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Kindness Steps for a Steady Heart D. Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-005",
    "storyId": "bhagavad-gita-children-exp-v1-005",
    "slug": "bhagavad-gita-children-exp-v1-005",
    "title": "Doing Right with Focus E",
    "shortTitle": "Doing Right with Focus E",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Doing Right with Focus E', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Doing Right with Focus E. Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-006",
    "storyId": "bhagavad-gita-children-exp-v1-006",
    "slug": "bhagavad-gita-children-exp-v1-006",
    "title": "Arjuna Learns Humility with Krishna F",
    "shortTitle": "Arjuna Learns Humility with Krishna F",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Arjuna Learns Humility with Krishna F', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Arjuna Learns Humility with Krishna F. Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-007",
    "storyId": "bhagavad-gita-children-exp-v1-007",
    "slug": "bhagavad-gita-children-exp-v1-007",
    "title": "Krishna Guides a Devotion Choice G",
    "shortTitle": "Krishna Guides a Devotion Choice G",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Krishna Guides a Devotion Choice G', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Krishna Guides a Devotion Choice G. Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-008",
    "storyId": "bhagavad-gita-children-exp-v1-008",
    "slug": "bhagavad-gita-children-exp-v1-008",
    "title": "A Self-Control Promise on the Chariot H",
    "shortTitle": "A Self-Control Promise on the Chariot H",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'A Self-Control Promise on the Chariot H', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "A Self-Control Promise on the Chariot H. Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-009",
    "storyId": "bhagavad-gita-children-exp-v1-009",
    "slug": "bhagavad-gita-children-exp-v1-009",
    "title": "Gratitude Steps for a Steady Heart I",
    "shortTitle": "Gratitude Steps for a Steady Heart I",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Gratitude Steps for a Steady Heart I', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Gratitude Steps for a Steady Heart I. Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-010",
    "storyId": "bhagavad-gita-children-exp-v1-010",
    "slug": "bhagavad-gita-children-exp-v1-010",
    "title": "Doing Right with Friendship J",
    "shortTitle": "Doing Right with Friendship J",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "title": "A thoughtful pause",
        "text": "In 'Doing Right with Friendship J', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Doing Right with Friendship J. Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-011",
    "storyId": "bhagavad-gita-children-exp-v1-011",
    "slug": "bhagavad-gita-children-exp-v1-011",
    "title": "Arjuna Learns Steady Effort with Krishna K",
    "shortTitle": "Arjuna Learns Steady Effort with Krishna K",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Arjuna Learns Steady Effort with Krishna K', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Arjuna Learns Steady Effort with Krishna K. Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-012",
    "storyId": "bhagavad-gita-children-exp-v1-012",
    "slug": "bhagavad-gita-children-exp-v1-012",
    "title": "Krishna Guides a Honesty Choice L",
    "shortTitle": "Krishna Guides a Honesty Choice L",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Krishna Guides a Honesty Choice L', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Krishna Guides a Honesty Choice L. Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-013",
    "storyId": "bhagavad-gita-children-exp-v1-013",
    "slug": "bhagavad-gita-children-exp-v1-013",
    "title": "A Courage Promise on the Chariot M",
    "shortTitle": "A Courage Promise on the Chariot M",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'A Courage Promise on the Chariot M', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "A Courage Promise on the Chariot M. Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-014",
    "storyId": "bhagavad-gita-children-exp-v1-014",
    "slug": "bhagavad-gita-children-exp-v1-014",
    "title": "Calm Steps for a Steady Heart N",
    "shortTitle": "Calm Steps for a Steady Heart N",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Calm Steps for a Steady Heart N', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Calm Steps for a Steady Heart N. Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-015",
    "storyId": "bhagavad-gita-children-exp-v1-015",
    "slug": "bhagavad-gita-children-exp-v1-015",
    "title": "Doing Right with Responsibility O",
    "shortTitle": "Doing Right with Responsibility O",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Doing Right with Responsibility O', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Doing Right with Responsibility O. Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-016",
    "storyId": "bhagavad-gita-children-exp-v1-016",
    "slug": "bhagavad-gita-children-exp-v1-016",
    "title": "Arjuna Learns Kindness with Krishna P",
    "shortTitle": "Arjuna Learns Kindness with Krishna P",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Arjuna Learns Kindness with Krishna P', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Arjuna Learns Kindness with Krishna P. Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-017",
    "storyId": "bhagavad-gita-children-exp-v1-017",
    "slug": "bhagavad-gita-children-exp-v1-017",
    "title": "Krishna Guides a Focus Choice Q",
    "shortTitle": "Krishna Guides a Focus Choice Q",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Krishna Guides a Focus Choice Q', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Krishna Guides a Focus Choice Q. Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-018",
    "storyId": "bhagavad-gita-children-exp-v1-018",
    "slug": "bhagavad-gita-children-exp-v1-018",
    "title": "A Humility Promise on the Chariot R",
    "shortTitle": "A Humility Promise on the Chariot R",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'A Humility Promise on the Chariot R', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "A Humility Promise on the Chariot R. Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-019",
    "storyId": "bhagavad-gita-children-exp-v1-019",
    "slug": "bhagavad-gita-children-exp-v1-019",
    "title": "Devotion Steps for a Steady Heart S",
    "shortTitle": "Devotion Steps for a Steady Heart S",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Devotion Steps for a Steady Heart S', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Devotion Steps for a Steady Heart S. Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-020",
    "storyId": "bhagavad-gita-children-exp-v1-020",
    "slug": "bhagavad-gita-children-exp-v1-020",
    "title": "Doing Right with Self-Control T",
    "shortTitle": "Doing Right with Self-Control T",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Doing Right with Self-Control T', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Doing Right with Self-Control T. Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-021",
    "storyId": "bhagavad-gita-children-exp-v1-021",
    "slug": "bhagavad-gita-children-exp-v1-021",
    "title": "Arjuna Learns Gratitude with Krishna U",
    "shortTitle": "Arjuna Learns Gratitude with Krishna U",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Arjuna Learns Gratitude with Krishna U', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Arjuna Learns Gratitude with Krishna U. Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-022",
    "storyId": "bhagavad-gita-children-exp-v1-022",
    "slug": "bhagavad-gita-children-exp-v1-022",
    "title": "Krishna Guides a Friendship Choice V",
    "shortTitle": "Krishna Guides a Friendship Choice V",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Krishna Guides a Friendship Choice V', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Krishna Guides a Friendship Choice V. Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-023",
    "storyId": "bhagavad-gita-children-exp-v1-023",
    "slug": "bhagavad-gita-children-exp-v1-023",
    "title": "A Steady Effort Promise on the Chariot W",
    "shortTitle": "A Steady Effort Promise on the Chariot W",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'A Steady Effort Promise on the Chariot W', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "A Steady Effort Promise on the Chariot W. Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-024",
    "storyId": "bhagavad-gita-children-exp-v1-024",
    "slug": "bhagavad-gita-children-exp-v1-024",
    "title": "Honesty Steps for a Steady Heart X",
    "shortTitle": "Honesty Steps for a Steady Heart X",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Honesty Steps for a Steady Heart X', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Honesty Steps for a Steady Heart X. Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-025",
    "storyId": "bhagavad-gita-children-exp-v1-025",
    "slug": "bhagavad-gita-children-exp-v1-025",
    "title": "Doing Right with Courage Y",
    "shortTitle": "Doing Right with Courage Y",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Doing Right with Courage Y', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Doing Right with Courage Y. Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-026",
    "storyId": "bhagavad-gita-children-exp-v1-026",
    "slug": "bhagavad-gita-children-exp-v1-026",
    "title": "Arjuna Learns Calm with Krishna Z",
    "shortTitle": "Arjuna Learns Calm with Krishna Z",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Arjuna Learns Calm with Krishna Z', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Arjuna Learns Calm with Krishna Z. Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-027",
    "storyId": "bhagavad-gita-children-exp-v1-027",
    "slug": "bhagavad-gita-children-exp-v1-027",
    "title": "Krishna Guides a Responsibility Choice A",
    "shortTitle": "Krishna Guides a Responsibility Choice A",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Krishna Guides a Responsibility Choice A', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Krishna Guides a Responsibility Choice A. Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-028",
    "storyId": "bhagavad-gita-children-exp-v1-028",
    "slug": "bhagavad-gita-children-exp-v1-028",
    "title": "A Kindness Promise on the Chariot B",
    "shortTitle": "A Kindness Promise on the Chariot B",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'A Kindness Promise on the Chariot B', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "A Kindness Promise on the Chariot B. Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-029",
    "storyId": "bhagavad-gita-children-exp-v1-029",
    "slug": "bhagavad-gita-children-exp-v1-029",
    "title": "Focus Steps for a Steady Heart C",
    "shortTitle": "Focus Steps for a Steady Heart C",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Focus Steps for a Steady Heart C', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Focus Steps for a Steady Heart C. Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-030",
    "storyId": "bhagavad-gita-children-exp-v1-030",
    "slug": "bhagavad-gita-children-exp-v1-030",
    "title": "Doing Right with Humility D",
    "shortTitle": "Doing Right with Humility D",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Doing Right with Humility D', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
      "narrationScript": "Doing Right with Humility D. Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action. In this story, Arjuna practices one small right action with a calm mind and steady effort.",
      "voiceDirection": "Warm, reassuring, and clear.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Bhagavad Gita (BHUH-guh-vud GHEE-tah).",
      "pacingNotes": "Steady pace with gentle pauses after each teaching line.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "bhagavad-gita-children-exp-v1-031",
    "storyId": "bhagavad-gita-children-exp-v1-031",
    "slug": "bhagavad-gita-children-exp-v1-031",
    "title": "Arjuna Learns Devotion with Krishna E",
    "shortTitle": "Arjuna Learns Devotion with Krishna E",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Arjuna Learns Devotion with Krishna E', at the still chariot step, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "title": "Krishna Guides a Self-Control Choice F",
    "shortTitle": "Krishna Guides a Self-Control Choice F",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Krishna Guides a Self-Control Choice F', at a banyan shade, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "title": "A Gratitude Promise on the Chariot G",
    "shortTitle": "A Gratitude Promise on the Chariot G",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'A Gratitude Promise on the Chariot G', at the riverside prayer place, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "title": "Friendship Steps for a Steady Heart H",
    "shortTitle": "Friendship Steps for a Steady Heart H",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Friendship Steps for a Steady Heart H', at the quiet camp lane, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "title": "Doing Right with Steady Effort I",
    "shortTitle": "Doing Right with Steady Effort I",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "In 'Doing Right with Steady Effort I', at sunrise hush, Arjuna pauses and takes a mindful breath while Krishna listens with kindness."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "title": "Arjuna Learns Honesty with Krishna J",
    "shortTitle": "Arjuna Learns Honesty with Krishna J",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Courage Choice K",
    "shortTitle": "Krishna Guides a Courage Choice K",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Calm Promise on the Chariot L",
    "shortTitle": "A Calm Promise on the Chariot L",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Responsibility Steps for a Steady Heart M",
    "shortTitle": "Responsibility Steps for a Steady Heart M",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Kindness N",
    "shortTitle": "Doing Right with Kindness N",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Focus with Krishna O",
    "shortTitle": "Arjuna Learns Focus with Krishna O",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Humility Choice P",
    "shortTitle": "Krishna Guides a Humility Choice P",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Devotion Promise on the Chariot Q",
    "shortTitle": "A Devotion Promise on the Chariot Q",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Self-Control Steps for a Steady Heart R",
    "shortTitle": "Self-Control Steps for a Steady Heart R",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Gratitude S",
    "shortTitle": "Doing Right with Gratitude S",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Friendship with Krishna T",
    "shortTitle": "Arjuna Learns Friendship with Krishna T",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Steady Effort Choice U",
    "shortTitle": "Krishna Guides a Steady Effort Choice U",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Honesty Promise on the Chariot V",
    "shortTitle": "A Honesty Promise on the Chariot V",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Courage Steps for a Steady Heart W",
    "shortTitle": "Courage Steps for a Steady Heart W",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Calm X",
    "shortTitle": "Doing Right with Calm X",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Responsibility with Krishna Y",
    "shortTitle": "Arjuna Learns Responsibility with Krishna Y",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Kindness Choice Z",
    "shortTitle": "Krishna Guides a Kindness Choice Z",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Focus Promise on the Chariot A",
    "shortTitle": "A Focus Promise on the Chariot A",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Humility Steps for a Steady Heart B",
    "shortTitle": "Humility Steps for a Steady Heart B",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Devotion C",
    "shortTitle": "Doing Right with Devotion C",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Self-Control with Krishna D",
    "shortTitle": "Arjuna Learns Self-Control with Krishna D",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Gratitude Choice E",
    "shortTitle": "Krishna Guides a Gratitude Choice E",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Friendship Promise on the Chariot F",
    "shortTitle": "A Friendship Promise on the Chariot F",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Steady Effort Steps for a Steady Heart G",
    "shortTitle": "Steady Effort Steps for a Steady Heart G",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Honesty H",
    "shortTitle": "Doing Right with Honesty H",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Courage with Krishna I",
    "shortTitle": "Arjuna Learns Courage with Krishna I",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Calm Choice J",
    "shortTitle": "Krishna Guides a Calm Choice J",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Responsibility Promise on the Chariot K",
    "shortTitle": "A Responsibility Promise on the Chariot K",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Kindness Steps for a Steady Heart L",
    "shortTitle": "Kindness Steps for a Steady Heart L",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Focus M",
    "shortTitle": "Doing Right with Focus M",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Humility with Krishna N",
    "shortTitle": "Arjuna Learns Humility with Krishna N",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Devotion Choice O",
    "shortTitle": "Krishna Guides a Devotion Choice O",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Self-Control Promise on the Chariot P",
    "shortTitle": "A Self-Control Promise on the Chariot P",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Gratitude Steps for a Steady Heart Q",
    "shortTitle": "Gratitude Steps for a Steady Heart Q",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Friendship R",
    "shortTitle": "Doing Right with Friendship R",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Steady Effort with Krishna S",
    "shortTitle": "Arjuna Learns Steady Effort with Krishna S",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Honesty Choice T",
    "shortTitle": "Krishna Guides a Honesty Choice T",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Courage Promise on the Chariot U",
    "shortTitle": "A Courage Promise on the Chariot U",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Calm Steps for a Steady Heart V",
    "shortTitle": "Calm Steps for a Steady Heart V",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Responsibility W",
    "shortTitle": "Doing Right with Responsibility W",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Kindness with Krishna X",
    "shortTitle": "Arjuna Learns Kindness with Krishna X",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Focus Choice Y",
    "shortTitle": "Krishna Guides a Focus Choice Y",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Humility Promise on the Chariot Z",
    "shortTitle": "A Humility Promise on the Chariot Z",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Devotion Steps for a Steady Heart A",
    "shortTitle": "Devotion Steps for a Steady Heart A",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Self-Control B",
    "shortTitle": "Doing Right with Self-Control B",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Gratitude with Krishna C",
    "shortTitle": "Arjuna Learns Gratitude with Krishna C",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Friendship Choice D",
    "shortTitle": "Krishna Guides a Friendship Choice D",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Steady Effort Promise on the Chariot E",
    "shortTitle": "A Steady Effort Promise on the Chariot E",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Honesty Steps for a Steady Heart F",
    "shortTitle": "Honesty Steps for a Steady Heart F",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Courage G",
    "shortTitle": "Doing Right with Courage G",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Calm with Krishna H",
    "shortTitle": "Arjuna Learns Calm with Krishna H",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Responsibility Choice I",
    "shortTitle": "Krishna Guides a Responsibility Choice I",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Kindness Promise on the Chariot J",
    "shortTitle": "A Kindness Promise on the Chariot J",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Focus Steps for a Steady Heart K",
    "shortTitle": "Focus Steps for a Steady Heart K",
    "summary": "Krishna helps Arjuna practice focus in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Humility L",
    "shortTitle": "Doing Right with Humility L",
    "summary": "Krishna helps Arjuna practice humility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Devotion with Krishna M",
    "shortTitle": "Arjuna Learns Devotion with Krishna M",
    "summary": "Krishna helps Arjuna practice devotion in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Self-Control Choice N",
    "shortTitle": "Krishna Guides a Self-Control Choice N",
    "summary": "Krishna helps Arjuna practice self-control in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Gratitude Promise on the Chariot O",
    "shortTitle": "A Gratitude Promise on the Chariot O",
    "summary": "Krishna helps Arjuna practice gratitude in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Friendship Steps for a Steady Heart P",
    "shortTitle": "Friendship Steps for a Steady Heart P",
    "summary": "Krishna helps Arjuna practice friendship in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Steady Effort Q",
    "shortTitle": "Doing Right with Steady Effort Q",
    "summary": "Krishna helps Arjuna practice steady effort in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Arjuna Learns Honesty with Krishna R",
    "shortTitle": "Arjuna Learns Honesty with Krishna R",
    "summary": "Krishna helps Arjuna practice honesty in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that do the right thing even when feelings are mixed, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Krishna Guides a Courage Choice S",
    "shortTitle": "Krishna Guides a Courage Choice S",
    "summary": "Krishna helps Arjuna practice courage in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that focus on effort, not only results, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "A Calm Promise on the Chariot T",
    "shortTitle": "A Calm Promise on the Chariot T",
    "summary": "Krishna helps Arjuna practice calm in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that kindness and courage can stay together, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Responsibility Steps for a Steady Heart U",
    "shortTitle": "Responsibility Steps for a Steady Heart U",
    "summary": "Krishna helps Arjuna practice responsibility in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that self-control makes choices clearer, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
    "title": "Doing Right with Kindness V",
    "shortTitle": "Doing Right with Kindness V",
    "summary": "Krishna helps Arjuna practice kindness in a child-safe way through simple choices, calm thinking, and kind action.",
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
        "text": "Krishna explains that gratitude keeps the heart soft, and that one small right step matters today."
      },
      {
        "id": "panel-3",
        "title": "Practice moment",
        "text": "Arjuna chooses a helpful action, speaks kindly, and keeps attention on what he can do well right now."
      },
      {
        "id": "panel-4",
        "title": "Steady close",
        "text": "With gratitude and a calmer heart, Arjuna continues his responsibility with humility, friendship, and steady effort."
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
    "status": "draft",
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
