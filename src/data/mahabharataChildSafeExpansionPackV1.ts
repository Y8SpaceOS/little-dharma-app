import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: StoryExperienceCategoryId; secondaryCategoryIds: StoryExperienceCategoryId[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const mahabharataChildSafeExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "mahabharata-child-safe-exp-v1-001",
    "storyId": "mahabharata-child-safe-exp-v1-001",
    "slug": "mahabharata-child-safe-exp-v1-001",
    "title": "Arjuna Shares the Seat",
    "shortTitle": "Arjuna Shares the Seat",
    "summary": "Arjuna shares a shaded bench with a smaller student in the gurukul courtyard, learning friendship through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "In Arjuna Shares the Seat, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Wise pause",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Choice made",
        "text": "Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Value learned",
        "text": "The group feels lighter, and Arjuna learns that friendship grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "In Arjuna Shares the Seat, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Arjuna Shares the Seat, what is one friendship choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Arjuna Shares the Seat: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna Shares the Seat. In Arjuna Shares the Seat, in the gurukul courtyard, Arjuna notices a small problem during daily activities. Krishna encourages everyone to listen, speak gently, and understand each person’s need. Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect. The group feels lighter, and Arjuna learns that friendship grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-002",
    "storyId": "mahabharata-child-safe-exp-v1-002",
    "slug": "mahabharata-child-safe-exp-v1-002",
    "title": "Bhima Waits His Turn",
    "shortTitle": "Bhima Waits His Turn",
    "summary": "Bhima waits while others fill water first near the banyan shade, learning patience through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Small challenge",
        "text": "In Bhima Waits His Turn, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Elder guidance",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Fair action",
        "text": "Bhima waits while others fill water first, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Peaceful result",
        "text": "The group feels lighter, and Bhima learns that patience grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "In Bhima Waits His Turn, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Bhima Waits His Turn, what is one patience choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Bhima Waits His Turn: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bhima Waits His Turn. In Bhima Waits His Turn, near the banyan shade, Bhima notices a small problem during daily activities. Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need. Bhima waits while others fill water first, and invites others to join with calm and respect. The group feels lighter, and Bhima learns that patience grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-003",
    "storyId": "mahabharata-child-safe-exp-v1-003",
    "slug": "mahabharata-child-safe-exp-v1-003",
    "title": "Draupadi’s Kind Word",
    "shortTitle": "Draupadi’s Kind Word",
    "summary": "Draupadi uses a kind word to calm a disagreement by the kitchen steps, learning kindness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Daily scene",
        "text": "In Draupadi’s Kind Word, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Listening first",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Gentle consequence",
        "text": "The group feels lighter, and Draupadi learns that kindness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "In Draupadi’s Kind Word, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Draupadi’s Kind Word, what is one kindness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Draupadi’s Kind Word: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Draupadi’s Kind Word. In Draupadi’s Kind Word, by the kitchen steps, Draupadi notices a small problem during daily activities. Kunti encourages everyone to listen, speak gently, and understand each person’s need. Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect. The group feels lighter, and Draupadi learns that kindness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-004",
    "storyId": "mahabharata-child-safe-exp-v1-004",
    "slug": "mahabharata-child-safe-exp-v1-004",
    "title": "Yudhishthira Tells the Truth",
    "shortTitle": "Yudhishthira Tells the Truth",
    "summary": "Yudhishthira admits he misplaced the chalk at the prayer hall doorway, learning truth through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "In Yudhishthira Tells the Truth, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Kind reminder",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "The group feels lighter, and Yudhishthira learns that truth grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "In Yudhishthira Tells the Truth, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Yudhishthira Tells the Truth, what is one truth choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Yudhishthira Tells the Truth: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Yudhishthira Tells the Truth. In Yudhishthira Tells the Truth, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities. Vidura encourages everyone to listen, speak gently, and understand each person’s need. Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect. The group feels lighter, and Yudhishthira learns that truth grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-005",
    "storyId": "mahabharata-child-safe-exp-v1-005",
    "slug": "mahabharata-child-safe-exp-v1-005",
    "title": "Nakula Returns the Bracelet",
    "shortTitle": "Nakula Returns the Bracelet",
    "summary": "Nakula returns a bracelet found near the well beside the study veranda, learning responsibility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "In Nakula Returns the Bracelet, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Patient thinking",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Truthful action",
        "text": "Nakula returns a bracelet found near the well, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Shared joy",
        "text": "The group feels lighter, and Nakula learns that responsibility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "In Nakula Returns the Bracelet, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Nakula Returns the Bracelet, what is one responsibility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Nakula Returns the Bracelet: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Nakula Returns the Bracelet. In Nakula Returns the Bracelet, beside the study veranda, Nakula notices a small problem during daily activities. Sahadeva encourages everyone to listen, speak gently, and understand each person’s need. Nakula returns a bracelet found near the well, and invites others to join with calm and respect. The group feels lighter, and Nakula learns that responsibility grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-006",
    "storyId": "mahabharata-child-safe-exp-v1-006",
    "slug": "mahabharata-child-safe-exp-v1-006",
    "title": "Sahadeva Listens First",
    "shortTitle": "Sahadeva Listens First",
    "summary": "Arjuna listens fully before giving advice in the gurukul courtyard, learning wisdom through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Family task",
        "text": "In Sahadeva Listens First, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Calm counsel",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Responsible choice",
        "text": "Arjuna listens fully before giving advice, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Trust grows",
        "text": "The group feels lighter, and Arjuna learns that wisdom grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows wisdom through simple choices and gentle consequences.",
      "discussionPrompt": "In Sahadeva Listens First, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Sahadeva Listens First, what is one wisdom choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Sahadeva Listens First: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Sahadeva Listens First. In Sahadeva Listens First, in the gurukul courtyard, Arjuna notices a small problem during daily activities. Krishna encourages everyone to listen, speak gently, and understand each person’s need. Arjuna listens fully before giving advice, and invites others to join with calm and respect. The group feels lighter, and Arjuna learns that wisdom grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-007",
    "storyId": "mahabharata-child-safe-exp-v1-007",
    "slug": "mahabharata-child-safe-exp-v1-007",
    "title": "Kunti’s Bowl of Rice",
    "shortTitle": "Kunti’s Bowl of Rice",
    "summary": "Bhima serves rice equally to each child near the banyan shade, learning fairness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Game begins",
        "text": "In Kunti’s Bowl of Rice, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Fairness check",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Turn shared",
        "text": "Bhima serves rice equally to each child, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Friendship grows",
        "text": "The group feels lighter, and Bhima learns that fairness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "In Kunti’s Bowl of Rice, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Kunti’s Bowl of Rice, what is one fairness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Kunti’s Bowl of Rice: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Kunti’s Bowl of Rice. In Kunti’s Bowl of Rice, near the banyan shade, Bhima notices a small problem during daily activities. Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need. Bhima serves rice equally to each child, and invites others to join with calm and respect. The group feels lighter, and Bhima learns that fairness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-008",
    "storyId": "mahabharata-child-safe-exp-v1-008",
    "slug": "mahabharata-child-safe-exp-v1-008",
    "title": "Krishna’s Fair Turn Game",
    "shortTitle": "Krishna’s Fair Turn Game",
    "summary": "Draupadi changes game turns so everyone plays by the kitchen steps, learning fairness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "In Krishna’s Fair Turn Game, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Wise pause",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Choice made",
        "text": "Draupadi changes game turns so everyone plays, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Value learned",
        "text": "The group feels lighter, and Draupadi learns that fairness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "In Krishna’s Fair Turn Game, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Krishna’s Fair Turn Game, what is one fairness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Krishna’s Fair Turn Game: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna’s Fair Turn Game. In Krishna’s Fair Turn Game, by the kitchen steps, Draupadi notices a small problem during daily activities. Kunti encourages everyone to listen, speak gently, and understand each person’s need. Draupadi changes game turns so everyone plays, and invites others to join with calm and respect. The group feels lighter, and Draupadi learns that fairness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-009",
    "storyId": "mahabharata-child-safe-exp-v1-009",
    "slug": "mahabharata-child-safe-exp-v1-009",
    "title": "The Promise at the Banyan Tree",
    "shortTitle": "The Promise at the Banyan Tree",
    "summary": "Yudhishthira keeps a promise to help clean the hall at the prayer hall doorway, learning dharma through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Small challenge",
        "text": "In The Promise at the Banyan Tree, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Elder guidance",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Fair action",
        "text": "Yudhishthira keeps a promise to help clean the hall, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Peaceful result",
        "text": "The group feels lighter, and Yudhishthira learns that dharma grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows dharma through simple choices and gentle consequences.",
      "discussionPrompt": "In The Promise at the Banyan Tree, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing The Promise at the Banyan Tree, what is one dharma choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from The Promise at the Banyan Tree: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Promise at the Banyan Tree. In The Promise at the Banyan Tree, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities. Vidura encourages everyone to listen, speak gently, and understand each person’s need. Yudhishthira keeps a promise to help clean the hall, and invites others to join with calm and respect. The group feels lighter, and Yudhishthira learns that dharma grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-010",
    "storyId": "mahabharata-child-safe-exp-v1-010",
    "slug": "mahabharata-child-safe-exp-v1-010",
    "title": "The Quiet Lesson from Vidura",
    "shortTitle": "The Quiet Lesson from Vidura",
    "summary": "Nakula asks Vidura how to decide gently beside the study veranda, learning humility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Daily scene",
        "text": "In The Quiet Lesson from Vidura, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Listening first",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Nakula asks Vidura how to decide gently, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Gentle consequence",
        "text": "The group feels lighter, and Nakula learns that humility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows humility through simple choices and gentle consequences.",
      "discussionPrompt": "In The Quiet Lesson from Vidura, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing The Quiet Lesson from Vidura, what is one humility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from The Quiet Lesson from Vidura: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Quiet Lesson from Vidura. In The Quiet Lesson from Vidura, beside the study veranda, Nakula notices a small problem during daily activities. Sahadeva encourages everyone to listen, speak gently, and understand each person’s need. Nakula asks Vidura how to decide gently, and invites others to join with calm and respect. The group feels lighter, and Nakula learns that humility grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-011",
    "storyId": "mahabharata-child-safe-exp-v1-011",
    "slug": "mahabharata-child-safe-exp-v1-011",
    "title": "Bhima Carries Two Baskets",
    "shortTitle": "Bhima Carries Two Baskets",
    "summary": "Arjuna shares a shaded bench with a smaller student in the gurukul courtyard, learning friendship through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "In Bhima Carries Two Baskets, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Kind reminder",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "The group feels lighter, and Arjuna learns that friendship grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "In Bhima Carries Two Baskets, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Bhima Carries Two Baskets, what is one friendship choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Bhima Carries Two Baskets: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bhima Carries Two Baskets. In Bhima Carries Two Baskets, in the gurukul courtyard, Arjuna notices a small problem during daily activities. Krishna encourages everyone to listen, speak gently, and understand each person’s need. Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect. The group feels lighter, and Arjuna learns that friendship grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-012",
    "storyId": "mahabharata-child-safe-exp-v1-012",
    "slug": "mahabharata-child-safe-exp-v1-012",
    "title": "Arjuna Thanks the Team",
    "shortTitle": "Arjuna Thanks the Team",
    "summary": "Bhima waits while others fill water first near the banyan shade, learning patience through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "In Arjuna Thanks the Team, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Patient thinking",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Truthful action",
        "text": "Bhima waits while others fill water first, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Shared joy",
        "text": "The group feels lighter, and Bhima learns that patience grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "In Arjuna Thanks the Team, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Arjuna Thanks the Team, what is one patience choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Arjuna Thanks the Team: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna Thanks the Team. In Arjuna Thanks the Team, near the banyan shade, Bhima notices a small problem during daily activities. Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need. Bhima waits while others fill water first, and invites others to join with calm and respect. The group feels lighter, and Bhima learns that patience grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-013",
    "storyId": "mahabharata-child-safe-exp-v1-013",
    "slug": "mahabharata-child-safe-exp-v1-013",
    "title": "Draupadi Serves Equally",
    "shortTitle": "Draupadi Serves Equally",
    "summary": "Draupadi uses a kind word to calm a disagreement by the kitchen steps, learning kindness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Family task",
        "text": "In Draupadi Serves Equally, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Calm counsel",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Responsible choice",
        "text": "Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Trust grows",
        "text": "The group feels lighter, and Draupadi learns that kindness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "In Draupadi Serves Equally, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Draupadi Serves Equally, what is one kindness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Draupadi Serves Equally: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Draupadi Serves Equally. In Draupadi Serves Equally, by the kitchen steps, Draupadi notices a small problem during daily activities. Kunti encourages everyone to listen, speak gently, and understand each person’s need. Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect. The group feels lighter, and Draupadi learns that kindness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-014",
    "storyId": "mahabharata-child-safe-exp-v1-014",
    "slug": "mahabharata-child-safe-exp-v1-014",
    "title": "Yudhishthira Keeps the Line Fair",
    "shortTitle": "Yudhishthira Keeps the Line Fair",
    "summary": "Yudhishthira admits he misplaced the chalk at the prayer hall doorway, learning truth through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Game begins",
        "text": "In Yudhishthira Keeps the Line Fair, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Fairness check",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Turn shared",
        "text": "Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Friendship grows",
        "text": "The group feels lighter, and Yudhishthira learns that truth grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "In Yudhishthira Keeps the Line Fair, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Yudhishthira Keeps the Line Fair, what is one truth choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Yudhishthira Keeps the Line Fair: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Yudhishthira Keeps the Line Fair. In Yudhishthira Keeps the Line Fair, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities. Vidura encourages everyone to listen, speak gently, and understand each person’s need. Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect. The group feels lighter, and Yudhishthira learns that truth grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-015",
    "storyId": "mahabharata-child-safe-exp-v1-015",
    "slug": "mahabharata-child-safe-exp-v1-015",
    "title": "Nakula Helps the Younger Child",
    "shortTitle": "Nakula Helps the Younger Child",
    "summary": "Nakula returns a bracelet found near the well beside the study veranda, learning responsibility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "In Nakula Helps the Younger Child, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Wise pause",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Choice made",
        "text": "Nakula returns a bracelet found near the well, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Value learned",
        "text": "The group feels lighter, and Nakula learns that responsibility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "In Nakula Helps the Younger Child, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Nakula Helps the Younger Child, what is one responsibility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Nakula Helps the Younger Child: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Nakula Helps the Younger Child. In Nakula Helps the Younger Child, beside the study veranda, Nakula notices a small problem during daily activities. Sahadeva encourages everyone to listen, speak gently, and understand each person’s need. Nakula returns a bracelet found near the well, and invites others to join with calm and respect. The group feels lighter, and Nakula learns that responsibility grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-016",
    "storyId": "mahabharata-child-safe-exp-v1-016",
    "slug": "mahabharata-child-safe-exp-v1-016",
    "title": "Sahadeva Asks Before Speaking",
    "shortTitle": "Sahadeva Asks Before Speaking",
    "summary": "Arjuna listens fully before giving advice in the gurukul courtyard, learning wisdom through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Small challenge",
        "text": "In Sahadeva Asks Before Speaking, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Elder guidance",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Fair action",
        "text": "Arjuna listens fully before giving advice, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Peaceful result",
        "text": "The group feels lighter, and Arjuna learns that wisdom grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows wisdom through simple choices and gentle consequences.",
      "discussionPrompt": "In Sahadeva Asks Before Speaking, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Sahadeva Asks Before Speaking, what is one wisdom choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Sahadeva Asks Before Speaking: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Sahadeva Asks Before Speaking. In Sahadeva Asks Before Speaking, in the gurukul courtyard, Arjuna notices a small problem during daily activities. Krishna encourages everyone to listen, speak gently, and understand each person’s need. Arjuna listens fully before giving advice, and invites others to join with calm and respect. The group feels lighter, and Arjuna learns that wisdom grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-017",
    "storyId": "mahabharata-child-safe-exp-v1-017",
    "slug": "mahabharata-child-safe-exp-v1-017",
    "title": "Kunti Divides the Sweets",
    "shortTitle": "Kunti Divides the Sweets",
    "summary": "Bhima serves rice equally to each child near the banyan shade, learning fairness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Daily scene",
        "text": "In Kunti Divides the Sweets, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Listening first",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Bhima serves rice equally to each child, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Gentle consequence",
        "text": "The group feels lighter, and Bhima learns that fairness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "In Kunti Divides the Sweets, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Kunti Divides the Sweets, what is one fairness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Kunti Divides the Sweets: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Kunti Divides the Sweets. In Kunti Divides the Sweets, near the banyan shade, Bhima notices a small problem during daily activities. Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need. Bhima serves rice equally to each child, and invites others to join with calm and respect. The group feels lighter, and Bhima learns that fairness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-018",
    "storyId": "mahabharata-child-safe-exp-v1-018",
    "slug": "mahabharata-child-safe-exp-v1-018",
    "title": "Krishna Calms the Game",
    "shortTitle": "Krishna Calms the Game",
    "summary": "Draupadi changes game turns so everyone plays by the kitchen steps, learning fairness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "In Krishna Calms the Game, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Kind reminder",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Draupadi changes game turns so everyone plays, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "The group feels lighter, and Draupadi learns that fairness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "In Krishna Calms the Game, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Krishna Calms the Game, what is one fairness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Krishna Calms the Game: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Krishna Calms the Game. In Krishna Calms the Game, by the kitchen steps, Draupadi notices a small problem during daily activities. Kunti encourages everyone to listen, speak gently, and understand each person’s need. Draupadi changes game turns so everyone plays, and invites others to join with calm and respect. The group feels lighter, and Draupadi learns that fairness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-019",
    "storyId": "mahabharata-child-safe-exp-v1-019",
    "slug": "mahabharata-child-safe-exp-v1-019",
    "title": "Vidura’s Lamp of Wisdom",
    "shortTitle": "Vidura’s Lamp of Wisdom",
    "summary": "Yudhishthira keeps a promise to help clean the hall at the prayer hall doorway, learning dharma through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "In Vidura’s Lamp of Wisdom, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Patient thinking",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Truthful action",
        "text": "Yudhishthira keeps a promise to help clean the hall, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Shared joy",
        "text": "The group feels lighter, and Yudhishthira learns that dharma grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows dharma through simple choices and gentle consequences.",
      "discussionPrompt": "In Vidura’s Lamp of Wisdom, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Vidura’s Lamp of Wisdom, what is one dharma choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Vidura’s Lamp of Wisdom: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Vidura’s Lamp of Wisdom. In Vidura’s Lamp of Wisdom, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities. Vidura encourages everyone to listen, speak gently, and understand each person’s need. Yudhishthira keeps a promise to help clean the hall, and invites others to join with calm and respect. The group feels lighter, and Yudhishthira learns that dharma grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-020",
    "storyId": "mahabharata-child-safe-exp-v1-020",
    "slug": "mahabharata-child-safe-exp-v1-020",
    "title": "The Courtyard Apology",
    "shortTitle": "The Courtyard Apology",
    "summary": "Nakula asks Vidura how to decide gently beside the study veranda, learning humility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Family task",
        "text": "In The Courtyard Apology, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Calm counsel",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Responsible choice",
        "text": "Nakula asks Vidura how to decide gently, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Trust grows",
        "text": "The group feels lighter, and Nakula learns that humility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows humility through simple choices and gentle consequences.",
      "discussionPrompt": "In The Courtyard Apology, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing The Courtyard Apology, what is one humility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from The Courtyard Apology: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "The Courtyard Apology. In The Courtyard Apology, beside the study veranda, Nakula notices a small problem during daily activities. Sahadeva encourages everyone to listen, speak gently, and understand each person’s need. Nakula asks Vidura how to decide gently, and invites others to join with calm and respect. The group feels lighter, and Nakula learns that humility grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-021",
    "storyId": "mahabharata-child-safe-exp-v1-021",
    "slug": "mahabharata-child-safe-exp-v1-021",
    "title": "Arjuna and the Lost Slate",
    "shortTitle": "Arjuna and the Lost Slate",
    "summary": "Arjuna shares a shaded bench with a smaller student in the gurukul courtyard, learning friendship through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Game begins",
        "text": "In Arjuna and the Lost Slate, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Fairness check",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Turn shared",
        "text": "Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Friendship grows",
        "text": "The group feels lighter, and Arjuna learns that friendship grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "In Arjuna and the Lost Slate, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Arjuna and the Lost Slate, what is one friendship choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Arjuna and the Lost Slate: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Arjuna and the Lost Slate. In Arjuna and the Lost Slate, in the gurukul courtyard, Arjuna notices a small problem during daily activities. Krishna encourages everyone to listen, speak gently, and understand each person’s need. Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect. The group feels lighter, and Arjuna learns that friendship grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-022",
    "storyId": "mahabharata-child-safe-exp-v1-022",
    "slug": "mahabharata-child-safe-exp-v1-022",
    "title": "Bhima Shares the Umbrella",
    "shortTitle": "Bhima Shares the Umbrella",
    "summary": "Bhima waits while others fill water first near the banyan shade, learning patience through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "In Bhima Shares the Umbrella, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Wise pause",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Choice made",
        "text": "Bhima waits while others fill water first, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Value learned",
        "text": "The group feels lighter, and Bhima learns that patience grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "In Bhima Shares the Umbrella, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Bhima Shares the Umbrella, what is one patience choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Bhima Shares the Umbrella: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Bhima Shares the Umbrella. In Bhima Shares the Umbrella, near the banyan shade, Bhima notices a small problem during daily activities. Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need. Bhima waits while others fill water first, and invites others to join with calm and respect. The group feels lighter, and Bhima learns that patience grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-023",
    "storyId": "mahabharata-child-safe-exp-v1-023",
    "slug": "mahabharata-child-safe-exp-v1-023",
    "title": "Draupadi Saves a Seat for a Friend",
    "shortTitle": "Draupadi Saves a Seat for a Friend",
    "summary": "Draupadi uses a kind word to calm a disagreement by the kitchen steps, learning kindness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Small challenge",
        "text": "In Draupadi Saves a Seat for a Friend, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Elder guidance",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Fair action",
        "text": "Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Peaceful result",
        "text": "The group feels lighter, and Draupadi learns that kindness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "In Draupadi Saves a Seat for a Friend, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Draupadi Saves a Seat for a Friend, what is one kindness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Draupadi Saves a Seat for a Friend: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Draupadi Saves a Seat for a Friend. In Draupadi Saves a Seat for a Friend, by the kitchen steps, Draupadi notices a small problem during daily activities. Kunti encourages everyone to listen, speak gently, and understand each person’s need. Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect. The group feels lighter, and Draupadi learns that kindness grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-024",
    "storyId": "mahabharata-child-safe-exp-v1-024",
    "slug": "mahabharata-child-safe-exp-v1-024",
    "title": "Yudhishthira Admits the Mistake",
    "shortTitle": "Yudhishthira Admits the Mistake",
    "summary": "Yudhishthira admits he misplaced the chalk at the prayer hall doorway, learning truth through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Daily scene",
        "text": "In Yudhishthira Admits the Mistake, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Listening first",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Gentle consequence",
        "text": "The group feels lighter, and Yudhishthira learns that truth grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "In Yudhishthira Admits the Mistake, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Yudhishthira Admits the Mistake, what is one truth choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Yudhishthira Admits the Mistake: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Yudhishthira Admits the Mistake. In Yudhishthira Admits the Mistake, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities. Vidura encourages everyone to listen, speak gently, and understand each person’s need. Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect. The group feels lighter, and Yudhishthira learns that truth grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-025",
    "storyId": "mahabharata-child-safe-exp-v1-025",
    "slug": "mahabharata-child-safe-exp-v1-025",
    "title": "Nakula Brings Back the Book",
    "shortTitle": "Nakula Brings Back the Book",
    "summary": "Nakula returns a bracelet found near the well beside the study veranda, learning responsibility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "In Nakula Brings Back the Book, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Kind reminder",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Nakula returns a bracelet found near the well, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "The group feels lighter, and Nakula learns that responsibility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "In Nakula Brings Back the Book, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Nakula Brings Back the Book, what is one responsibility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Nakula Brings Back the Book: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "audioScript": {
      "narrationScript": "Nakula Brings Back the Book. In Nakula Brings Back the Book, beside the study veranda, Nakula notices a small problem during daily activities. Sahadeva encourages everyone to listen, speak gently, and understand each person’s need. Nakula returns a bracelet found near the well, and invites others to join with calm and respect. The group feels lighter, and Nakula learns that responsibility grows through everyday choices.",
      "voiceDirection": "Warm, gentle, reassuring.",
      "pronunciationNotes": "Krishna (KRISH-na), Arjuna (ar-JOO-na), Mahabharata (ma-haa-BHAA-ra-ta).",
      "pacingNotes": "Pause briefly between panels for reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "mahabharata-child-safe-exp-v1-026",
    "storyId": "mahabharata-child-safe-exp-v1-026",
    "slug": "mahabharata-child-safe-exp-v1-026",
    "title": "Sahadeva Waits for Grandma",
    "shortTitle": "Sahadeva Waits for Grandma",
    "summary": "Arjuna listens fully before giving advice in the gurukul courtyard, learning wisdom through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "In Sahadeva Waits for Grandma, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Patient thinking",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Truthful action",
        "text": "Arjuna listens fully before giving advice, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Shared joy",
        "text": "The group feels lighter, and Arjuna learns that wisdom grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows wisdom through simple choices and gentle consequences.",
      "discussionPrompt": "In Sahadeva Waits for Grandma, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Sahadeva Waits for Grandma, what is one wisdom choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Sahadeva Waits for Grandma: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-027",
    "storyId": "mahabharata-child-safe-exp-v1-027",
    "slug": "mahabharata-child-safe-exp-v1-027",
    "title": "Kunti’s Patient Queue",
    "shortTitle": "Kunti’s Patient Queue",
    "summary": "Bhima serves rice equally to each child near the banyan shade, learning fairness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Family task",
        "text": "In Kunti’s Patient Queue, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Calm counsel",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Responsible choice",
        "text": "Bhima serves rice equally to each child, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Trust grows",
        "text": "The group feels lighter, and Bhima learns that fairness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "In Kunti’s Patient Queue, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Kunti’s Patient Queue, what is one fairness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Kunti’s Patient Queue: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-028",
    "storyId": "mahabharata-child-safe-exp-v1-028",
    "slug": "mahabharata-child-safe-exp-v1-028",
    "title": "Krishna Counts Fairly",
    "shortTitle": "Krishna Counts Fairly",
    "summary": "Draupadi changes game turns so everyone plays by the kitchen steps, learning fairness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Game begins",
        "text": "In Krishna Counts Fairly, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Fairness check",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Turn shared",
        "text": "Draupadi changes game turns so everyone plays, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Friendship grows",
        "text": "The group feels lighter, and Draupadi learns that fairness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "In Krishna Counts Fairly, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Krishna Counts Fairly, what is one fairness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Krishna Counts Fairly: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-029",
    "storyId": "mahabharata-child-safe-exp-v1-029",
    "slug": "mahabharata-child-safe-exp-v1-029",
    "title": "Vidura’s Gentle Question",
    "shortTitle": "Vidura’s Gentle Question",
    "summary": "Yudhishthira keeps a promise to help clean the hall at the prayer hall doorway, learning dharma through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Morning moment",
        "text": "In Vidura’s Gentle Question, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Wise pause",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Choice made",
        "text": "Yudhishthira keeps a promise to help clean the hall, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Value learned",
        "text": "The group feels lighter, and Yudhishthira learns that dharma grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows dharma through simple choices and gentle consequences.",
      "discussionPrompt": "In Vidura’s Gentle Question, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Vidura’s Gentle Question, what is one dharma choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Vidura’s Gentle Question: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-030",
    "storyId": "mahabharata-child-safe-exp-v1-030",
    "slug": "mahabharata-child-safe-exp-v1-030",
    "title": "The Rice Pot Promise",
    "shortTitle": "The Rice Pot Promise",
    "summary": "Nakula asks Vidura how to decide gently beside the study veranda, learning humility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Small challenge",
        "text": "In The Rice Pot Promise, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Elder guidance",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Fair action",
        "text": "Nakula asks Vidura how to decide gently, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Peaceful result",
        "text": "The group feels lighter, and Nakula learns that humility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows humility through simple choices and gentle consequences.",
      "discussionPrompt": "In The Rice Pot Promise, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing The Rice Pot Promise, what is one humility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from The Rice Pot Promise: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-031",
    "storyId": "mahabharata-child-safe-exp-v1-031",
    "slug": "mahabharata-child-safe-exp-v1-031",
    "title": "Arjuna Chooses Kind Words",
    "shortTitle": "Arjuna Chooses Kind Words",
    "summary": "Arjuna shares a shaded bench with a smaller student in the gurukul courtyard, learning friendship through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Daily scene",
        "text": "In Arjuna Chooses Kind Words, in the gurukul courtyard, Arjuna notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Listening first",
        "text": "Krishna encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Helpful step",
        "text": "Arjuna shares a shaded bench with a smaller student, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Gentle consequence",
        "text": "The group feels lighter, and Arjuna learns that friendship grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "In Arjuna Chooses Kind Words, what did Arjuna do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Arjuna Chooses Kind Words, what is one friendship choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Arjuna Chooses Kind Words: warm child-safe setting showing Arjuna making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-032",
    "storyId": "mahabharata-child-safe-exp-v1-032",
    "slug": "mahabharata-child-safe-exp-v1-032",
    "title": "Bhima Learns to Pause",
    "shortTitle": "Bhima Learns to Pause",
    "summary": "Bhima waits while others fill water first near the banyan shade, learning patience through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Bhima",
      "Yudhishthira",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "At the courtyard",
        "text": "In Bhima Learns to Pause, near the banyan shade, Bhima notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Kind reminder",
        "text": "Yudhishthira encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Promise kept",
        "text": "Bhima waits while others fill water first, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Heart lesson",
        "text": "The group feels lighter, and Bhima learns that patience grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "In Bhima Learns to Pause, what did Bhima do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Bhima Learns to Pause, what is one patience choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Bhima Learns to Pause: warm child-safe setting showing Bhima making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-033",
    "storyId": "mahabharata-child-safe-exp-v1-033",
    "slug": "mahabharata-child-safe-exp-v1-033",
    "title": "Draupadi Welcomes the New Child",
    "shortTitle": "Draupadi Welcomes the New Child",
    "summary": "Draupadi uses a kind word to calm a disagreement by the kitchen steps, learning kindness through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Before class",
        "text": "In Draupadi Welcomes the New Child, by the kitchen steps, Draupadi notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Patient thinking",
        "text": "Kunti encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Truthful action",
        "text": "Draupadi uses a kind word to calm a disagreement, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Shared joy",
        "text": "The group feels lighter, and Draupadi learns that kindness grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "In Draupadi Welcomes the New Child, what did Draupadi do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Draupadi Welcomes the New Child, what is one kindness choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Draupadi Welcomes the New Child: warm child-safe setting showing Draupadi making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-034",
    "storyId": "mahabharata-child-safe-exp-v1-034",
    "slug": "mahabharata-child-safe-exp-v1-034",
    "title": "Yudhishthira Returns Extra Fruit",
    "shortTitle": "Yudhishthira Returns Extra Fruit",
    "summary": "Yudhishthira admits he misplaced the chalk at the prayer hall doorway, learning truth through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Family task",
        "text": "In Yudhishthira Returns Extra Fruit, at the prayer hall doorway, Yudhishthira notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Calm counsel",
        "text": "Vidura encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Responsible choice",
        "text": "Yudhishthira admits he misplaced the chalk, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Trust grows",
        "text": "The group feels lighter, and Yudhishthira learns that truth grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "In Yudhishthira Returns Extra Fruit, what did Yudhishthira do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Yudhishthira Returns Extra Fruit, what is one truth choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Yudhishthira Returns Extra Fruit: warm child-safe setting showing Yudhishthira making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-035",
    "storyId": "mahabharata-child-safe-exp-v1-035",
    "slug": "mahabharata-child-safe-exp-v1-035",
    "title": "Nakula Waits at the Well",
    "shortTitle": "Nakula Waits at the Well",
    "summary": "Nakula returns a bracelet found near the well beside the study veranda, learning responsibility through a warm Mahabharata child-safe moment.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Game begins",
        "text": "In Nakula Waits at the Well, beside the study veranda, Nakula notices a small problem during daily activities."
      },
      {
        "id": "panel-2",
        "title": "Fairness check",
        "text": "Sahadeva encourages everyone to listen, speak gently, and understand each person’s need."
      },
      {
        "id": "panel-3",
        "title": "Turn shared",
        "text": "Nakula returns a bracelet found near the well, and invites others to join with calm and respect."
      },
      {
        "id": "panel-4",
        "title": "Friendship grows",
        "text": "The group feels lighter, and Nakula learns that responsibility grows through everyday choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "In Nakula Waits at the Well, what did Nakula do first, and what could your child try in a similar moment?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After hearing Nakula Waits at the Well, what is one responsibility choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene from Nakula Waits at the Well: warm child-safe setting showing Nakula making a calm, fair decision with family guidance.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-036",
    "storyId": "mahabharata-child-safe-exp-v1-036",
    "slug": "mahabharata-child-safe-exp-v1-036",
    "title": "Mahabharata Morning Choice 36",
    "shortTitle": "Mahabharata Morning Choice 36",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-037",
    "storyId": "mahabharata-child-safe-exp-v1-037",
    "slug": "mahabharata-child-safe-exp-v1-037",
    "title": "Mahabharata Morning Choice 37",
    "shortTitle": "Mahabharata Morning Choice 37",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-038",
    "storyId": "mahabharata-child-safe-exp-v1-038",
    "slug": "mahabharata-child-safe-exp-v1-038",
    "title": "Mahabharata Morning Choice 38",
    "shortTitle": "Mahabharata Morning Choice 38",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-039",
    "storyId": "mahabharata-child-safe-exp-v1-039",
    "slug": "mahabharata-child-safe-exp-v1-039",
    "title": "Mahabharata Morning Choice 39",
    "shortTitle": "Mahabharata Morning Choice 39",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-040",
    "storyId": "mahabharata-child-safe-exp-v1-040",
    "slug": "mahabharata-child-safe-exp-v1-040",
    "title": "Mahabharata Morning Choice 40",
    "shortTitle": "Mahabharata Morning Choice 40",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-041",
    "storyId": "mahabharata-child-safe-exp-v1-041",
    "slug": "mahabharata-child-safe-exp-v1-041",
    "title": "Mahabharata Morning Choice 41",
    "shortTitle": "Mahabharata Morning Choice 41",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-042",
    "storyId": "mahabharata-child-safe-exp-v1-042",
    "slug": "mahabharata-child-safe-exp-v1-042",
    "title": "Mahabharata Morning Choice 42",
    "shortTitle": "Mahabharata Morning Choice 42",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-043",
    "storyId": "mahabharata-child-safe-exp-v1-043",
    "slug": "mahabharata-child-safe-exp-v1-043",
    "title": "Mahabharata Morning Choice 43",
    "shortTitle": "Mahabharata Morning Choice 43",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-044",
    "storyId": "mahabharata-child-safe-exp-v1-044",
    "slug": "mahabharata-child-safe-exp-v1-044",
    "title": "Mahabharata Morning Choice 44",
    "shortTitle": "Mahabharata Morning Choice 44",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-045",
    "storyId": "mahabharata-child-safe-exp-v1-045",
    "slug": "mahabharata-child-safe-exp-v1-045",
    "title": "Mahabharata Morning Choice 45",
    "shortTitle": "Mahabharata Morning Choice 45",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-046",
    "storyId": "mahabharata-child-safe-exp-v1-046",
    "slug": "mahabharata-child-safe-exp-v1-046",
    "title": "Mahabharata Morning Choice 46",
    "shortTitle": "Mahabharata Morning Choice 46",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-047",
    "storyId": "mahabharata-child-safe-exp-v1-047",
    "slug": "mahabharata-child-safe-exp-v1-047",
    "title": "Mahabharata Morning Choice 47",
    "shortTitle": "Mahabharata Morning Choice 47",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-048",
    "storyId": "mahabharata-child-safe-exp-v1-048",
    "slug": "mahabharata-child-safe-exp-v1-048",
    "title": "Mahabharata Morning Choice 48",
    "shortTitle": "Mahabharata Morning Choice 48",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-049",
    "storyId": "mahabharata-child-safe-exp-v1-049",
    "slug": "mahabharata-child-safe-exp-v1-049",
    "title": "Mahabharata Morning Choice 49",
    "shortTitle": "Mahabharata Morning Choice 49",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-050",
    "storyId": "mahabharata-child-safe-exp-v1-050",
    "slug": "mahabharata-child-safe-exp-v1-050",
    "title": "Mahabharata Morning Choice 50",
    "shortTitle": "Mahabharata Morning Choice 50",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-051",
    "storyId": "mahabharata-child-safe-exp-v1-051",
    "slug": "mahabharata-child-safe-exp-v1-051",
    "title": "Mahabharata Morning Choice 51",
    "shortTitle": "Mahabharata Morning Choice 51",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-052",
    "storyId": "mahabharata-child-safe-exp-v1-052",
    "slug": "mahabharata-child-safe-exp-v1-052",
    "title": "Mahabharata Morning Choice 52",
    "shortTitle": "Mahabharata Morning Choice 52",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-053",
    "storyId": "mahabharata-child-safe-exp-v1-053",
    "slug": "mahabharata-child-safe-exp-v1-053",
    "title": "Mahabharata Morning Choice 53",
    "shortTitle": "Mahabharata Morning Choice 53",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-054",
    "storyId": "mahabharata-child-safe-exp-v1-054",
    "slug": "mahabharata-child-safe-exp-v1-054",
    "title": "Mahabharata Morning Choice 54",
    "shortTitle": "Mahabharata Morning Choice 54",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-055",
    "storyId": "mahabharata-child-safe-exp-v1-055",
    "slug": "mahabharata-child-safe-exp-v1-055",
    "title": "Mahabharata Morning Choice 55",
    "shortTitle": "Mahabharata Morning Choice 55",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-056",
    "storyId": "mahabharata-child-safe-exp-v1-056",
    "slug": "mahabharata-child-safe-exp-v1-056",
    "title": "Mahabharata Morning Choice 56",
    "shortTitle": "Mahabharata Morning Choice 56",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-057",
    "storyId": "mahabharata-child-safe-exp-v1-057",
    "slug": "mahabharata-child-safe-exp-v1-057",
    "title": "Mahabharata Morning Choice 57",
    "shortTitle": "Mahabharata Morning Choice 57",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-058",
    "storyId": "mahabharata-child-safe-exp-v1-058",
    "slug": "mahabharata-child-safe-exp-v1-058",
    "title": "Mahabharata Morning Choice 58",
    "shortTitle": "Mahabharata Morning Choice 58",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-059",
    "storyId": "mahabharata-child-safe-exp-v1-059",
    "slug": "mahabharata-child-safe-exp-v1-059",
    "title": "Mahabharata Morning Choice 59",
    "shortTitle": "Mahabharata Morning Choice 59",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-060",
    "storyId": "mahabharata-child-safe-exp-v1-060",
    "slug": "mahabharata-child-safe-exp-v1-060",
    "title": "Mahabharata Morning Choice 60",
    "shortTitle": "Mahabharata Morning Choice 60",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-061",
    "storyId": "mahabharata-child-safe-exp-v1-061",
    "slug": "mahabharata-child-safe-exp-v1-061",
    "title": "Mahabharata Morning Choice 61",
    "shortTitle": "Mahabharata Morning Choice 61",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-062",
    "storyId": "mahabharata-child-safe-exp-v1-062",
    "slug": "mahabharata-child-safe-exp-v1-062",
    "title": "Mahabharata Morning Choice 62",
    "shortTitle": "Mahabharata Morning Choice 62",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-063",
    "storyId": "mahabharata-child-safe-exp-v1-063",
    "slug": "mahabharata-child-safe-exp-v1-063",
    "title": "Mahabharata Morning Choice 63",
    "shortTitle": "Mahabharata Morning Choice 63",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-064",
    "storyId": "mahabharata-child-safe-exp-v1-064",
    "slug": "mahabharata-child-safe-exp-v1-064",
    "title": "Mahabharata Morning Choice 64",
    "shortTitle": "Mahabharata Morning Choice 64",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-065",
    "storyId": "mahabharata-child-safe-exp-v1-065",
    "slug": "mahabharata-child-safe-exp-v1-065",
    "title": "Mahabharata Morning Choice 65",
    "shortTitle": "Mahabharata Morning Choice 65",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-066",
    "storyId": "mahabharata-child-safe-exp-v1-066",
    "slug": "mahabharata-child-safe-exp-v1-066",
    "title": "Mahabharata Morning Choice 66",
    "shortTitle": "Mahabharata Morning Choice 66",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-067",
    "storyId": "mahabharata-child-safe-exp-v1-067",
    "slug": "mahabharata-child-safe-exp-v1-067",
    "title": "Mahabharata Morning Choice 67",
    "shortTitle": "Mahabharata Morning Choice 67",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-068",
    "storyId": "mahabharata-child-safe-exp-v1-068",
    "slug": "mahabharata-child-safe-exp-v1-068",
    "title": "Mahabharata Morning Choice 68",
    "shortTitle": "Mahabharata Morning Choice 68",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-069",
    "storyId": "mahabharata-child-safe-exp-v1-069",
    "slug": "mahabharata-child-safe-exp-v1-069",
    "title": "Mahabharata Morning Choice 69",
    "shortTitle": "Mahabharata Morning Choice 69",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-070",
    "storyId": "mahabharata-child-safe-exp-v1-070",
    "slug": "mahabharata-child-safe-exp-v1-070",
    "title": "Mahabharata Morning Choice 70",
    "shortTitle": "Mahabharata Morning Choice 70",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-071",
    "storyId": "mahabharata-child-safe-exp-v1-071",
    "slug": "mahabharata-child-safe-exp-v1-071",
    "title": "Mahabharata Morning Choice 71",
    "shortTitle": "Mahabharata Morning Choice 71",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-072",
    "storyId": "mahabharata-child-safe-exp-v1-072",
    "slug": "mahabharata-child-safe-exp-v1-072",
    "title": "Mahabharata Morning Choice 72",
    "shortTitle": "Mahabharata Morning Choice 72",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-073",
    "storyId": "mahabharata-child-safe-exp-v1-073",
    "slug": "mahabharata-child-safe-exp-v1-073",
    "title": "Mahabharata Morning Choice 73",
    "shortTitle": "Mahabharata Morning Choice 73",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-074",
    "storyId": "mahabharata-child-safe-exp-v1-074",
    "slug": "mahabharata-child-safe-exp-v1-074",
    "title": "Mahabharata Morning Choice 74",
    "shortTitle": "Mahabharata Morning Choice 74",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-075",
    "storyId": "mahabharata-child-safe-exp-v1-075",
    "slug": "mahabharata-child-safe-exp-v1-075",
    "title": "Mahabharata Morning Choice 75",
    "shortTitle": "Mahabharata Morning Choice 75",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-076",
    "storyId": "mahabharata-child-safe-exp-v1-076",
    "slug": "mahabharata-child-safe-exp-v1-076",
    "title": "Mahabharata Morning Choice 76",
    "shortTitle": "Mahabharata Morning Choice 76",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 76,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-077",
    "storyId": "mahabharata-child-safe-exp-v1-077",
    "slug": "mahabharata-child-safe-exp-v1-077",
    "title": "Mahabharata Morning Choice 77",
    "shortTitle": "Mahabharata Morning Choice 77",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 77,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-078",
    "storyId": "mahabharata-child-safe-exp-v1-078",
    "slug": "mahabharata-child-safe-exp-v1-078",
    "title": "Mahabharata Morning Choice 78",
    "shortTitle": "Mahabharata Morning Choice 78",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 78,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-079",
    "storyId": "mahabharata-child-safe-exp-v1-079",
    "slug": "mahabharata-child-safe-exp-v1-079",
    "title": "Mahabharata Morning Choice 79",
    "shortTitle": "Mahabharata Morning Choice 79",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 79,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-080",
    "storyId": "mahabharata-child-safe-exp-v1-080",
    "slug": "mahabharata-child-safe-exp-v1-080",
    "title": "Mahabharata Morning Choice 80",
    "shortTitle": "Mahabharata Morning Choice 80",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 80,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-081",
    "storyId": "mahabharata-child-safe-exp-v1-081",
    "slug": "mahabharata-child-safe-exp-v1-081",
    "title": "Mahabharata Morning Choice 81",
    "shortTitle": "Mahabharata Morning Choice 81",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 81,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-082",
    "storyId": "mahabharata-child-safe-exp-v1-082",
    "slug": "mahabharata-child-safe-exp-v1-082",
    "title": "Mahabharata Morning Choice 82",
    "shortTitle": "Mahabharata Morning Choice 82",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 82,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-083",
    "storyId": "mahabharata-child-safe-exp-v1-083",
    "slug": "mahabharata-child-safe-exp-v1-083",
    "title": "Mahabharata Morning Choice 83",
    "shortTitle": "Mahabharata Morning Choice 83",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 83,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-084",
    "storyId": "mahabharata-child-safe-exp-v1-084",
    "slug": "mahabharata-child-safe-exp-v1-084",
    "title": "Mahabharata Morning Choice 84",
    "shortTitle": "Mahabharata Morning Choice 84",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 84,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-085",
    "storyId": "mahabharata-child-safe-exp-v1-085",
    "slug": "mahabharata-child-safe-exp-v1-085",
    "title": "Mahabharata Morning Choice 85",
    "shortTitle": "Mahabharata Morning Choice 85",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 85,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-086",
    "storyId": "mahabharata-child-safe-exp-v1-086",
    "slug": "mahabharata-child-safe-exp-v1-086",
    "title": "Mahabharata Morning Choice 86",
    "shortTitle": "Mahabharata Morning Choice 86",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 86,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-087",
    "storyId": "mahabharata-child-safe-exp-v1-087",
    "slug": "mahabharata-child-safe-exp-v1-087",
    "title": "Mahabharata Morning Choice 87",
    "shortTitle": "Mahabharata Morning Choice 87",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 87,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-088",
    "storyId": "mahabharata-child-safe-exp-v1-088",
    "slug": "mahabharata-child-safe-exp-v1-088",
    "title": "Mahabharata Morning Choice 88",
    "shortTitle": "Mahabharata Morning Choice 88",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 88,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-089",
    "storyId": "mahabharata-child-safe-exp-v1-089",
    "slug": "mahabharata-child-safe-exp-v1-089",
    "title": "Mahabharata Morning Choice 89",
    "shortTitle": "Mahabharata Morning Choice 89",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 89,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-090",
    "storyId": "mahabharata-child-safe-exp-v1-090",
    "slug": "mahabharata-child-safe-exp-v1-090",
    "title": "Mahabharata Morning Choice 90",
    "shortTitle": "Mahabharata Morning Choice 90",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns fairness through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 90,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Fairness",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices fairness through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-091",
    "storyId": "mahabharata-child-safe-exp-v1-091",
    "slug": "mahabharata-child-safe-exp-v1-091",
    "title": "Mahabharata Morning Choice 91",
    "shortTitle": "Mahabharata Morning Choice 91",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns patience through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 91,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Patience",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the gurukul garden, Arjuna notices that two friends disagree about turns."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna invites everyone to speak kindly and take turns."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices patience through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-092",
    "storyId": "mahabharata-child-safe-exp-v1-092",
    "slug": "mahabharata-child-safe-exp-v1-092",
    "title": "Mahabharata Morning Choice 92",
    "shortTitle": "Mahabharata Morning Choice 92",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns courage through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 92,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "near the riverside steps, Arjuna notices that a younger child is left out."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses honesty and explains what happened."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices courage through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-093",
    "storyId": "mahabharata-child-safe-exp-v1-093",
    "slug": "mahabharata-child-safe-exp-v1-093",
    "title": "Mahabharata Morning Choice 93",
    "shortTitle": "Mahabharata Morning Choice 93",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns truth through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 93,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the family courtyard, Arjuna notices that a task feels too hard at first."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna waits, breathes, and responds with patience."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Humility keeps success warm and shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices truth through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-094",
    "storyId": "mahabharata-child-safe-exp-v1-094",
    "slug": "mahabharata-child-safe-exp-v1-094",
    "title": "Mahabharata Morning Choice 94",
    "shortTitle": "Mahabharata Morning Choice 94",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns humility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 94,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "under the banyan tree, Arjuna notices that someone speaks before listening."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna shares tools fairly and thanks each helper."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Wise choices create peaceful consequences."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices humility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-095",
    "storyId": "mahabharata-child-safe-exp-v1-095",
    "slug": "mahabharata-child-safe-exp-v1-095",
    "title": "Mahabharata Morning Choice 95",
    "shortTitle": "Mahabharata Morning Choice 95",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns wisdom through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 95,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "by the lamp-lit study room, Arjuna notices that a promise is nearly forgotten."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna asks elders for wise guidance before deciding."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Family responsibility builds trust every day."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices wisdom through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-096",
    "storyId": "mahabharata-child-safe-exp-v1-096",
    "slug": "mahabharata-child-safe-exp-v1-096",
    "title": "Mahabharata Morning Choice 96",
    "shortTitle": "Mahabharata Morning Choice 96",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns family responsibility through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 96,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Family Responsibility",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "at the morning prayer hall, Arjuna notices that a mistake is hidden in worry."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Krishna invites everyone to slow down, listen carefully, and choose words that keep hearts calm."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna apologizes gently and repairs what can be repaired."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Simple dharma means doing the next right thing kindly."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices family responsibility through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-097",
    "storyId": "mahabharata-child-safe-exp-v1-097",
    "slug": "mahabharata-child-safe-exp-v1-097",
    "title": "Mahabharata Morning Choice 97",
    "shortTitle": "Mahabharata Morning Choice 97",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns choices through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 97,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Choices",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the kitchen during seva, Arjuna notices that credit is given to only one child."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Yudhishthira reminds the group to hear each voice before deciding what is fair."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna includes the quiet child and makes space."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Friendship grows when everyone feels included."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices choices through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-098",
    "storyId": "mahabharata-child-safe-exp-v1-098",
    "slug": "mahabharata-child-safe-exp-v1-098",
    "title": "Mahabharata Morning Choice 98",
    "shortTitle": "Mahabharata Morning Choice 98",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns consequences through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 98,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Consequences",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "on the path to class, Arjuna notices that a queue becomes impatient."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Kunti gently asks the children to breathe once and think about the kindest next step."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna finishes family duty before games."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Fairness becomes easier when we listen first."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices consequences through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-099",
    "storyId": "mahabharata-child-safe-exp-v1-099",
    "slug": "mahabharata-child-safe-exp-v1-099",
    "title": "Mahabharata Morning Choice 99",
    "shortTitle": "Mahabharata Morning Choice 99",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns dharma through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 99,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Dharma",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "beside the grain store, Arjuna notices that shared supplies run low."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Vidura offers a quiet question that helps everyone see both sides."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna returns what was borrowed with gratitude."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Patience helps strong feelings become calm choices."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices dharma through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  },
  {
    "id": "mahabharata-child-safe-exp-v1-100",
    "storyId": "mahabharata-child-safe-exp-v1-100",
    "slug": "mahabharata-child-safe-exp-v1-100",
    "title": "Mahabharata Morning Choice 100",
    "shortTitle": "Mahabharata Morning Choice 100",
    "summary": "A child-safe Mahabharata values retelling where Arjuna learns friendship through warm daily choices.",
    "sourceTradition": "Mahabharata (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe values retelling inspired by the Mahabharata, framed with warmth and non-violent guidance.",
    "storyPackId": "mahabharata-child-safe-expansion-pack-v1",
    "journeyId": "mahabharata-child-safe-journey-v1",
    "journeyOrder": 100,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 5,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Kindness",
      "Responsibility"
    ],
    "characters": [
      "Krishna",
      "Arjuna",
      "Family",
      "Friends"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "A daily moment",
        "text": "in the village craft corner, Arjuna notices that a sibling needs help before play."
      },
      {
        "id": "panel-2",
        "title": "Gentle guidance",
        "text": "Draupadi suggests a patient turn-taking plan so no one feels left out."
      },
      {
        "id": "panel-3",
        "title": "Kind action",
        "text": "Arjuna chooses a truthful path even when it is hard."
      },
      {
        "id": "panel-4",
        "title": "Warm learning",
        "text": "Courage can be gentle and truthful."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata adaptation focused on values and emotional regulation.",
      "valueExplained": "This story practices friendship through simple choices and consequences.",
      "discussionPrompt": "Which choice helped everyone feel respected and calm?",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "What is one fair and kind choice you can make today?",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Warm child-safe village learning moment with Krishna and Arjuna.",
      "styleGuidance": "Emotionally warm, respectful, non-violent framing.",
      "culturalGuardrails": [
        "Respect sacred figures",
        "No mockery",
        "No fear-heavy imagery"
      ],
      "deityTreatment": "Reverent and child-safe",
      "avoidList": [
        "battle scenes",
        "revenge framing",
        "gore",
        "humiliation"
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
    "primaryCategoryId": "mahabharata_child_safe",
    "secondaryCategoryIds": [
      "mahabharata_child_safe"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered"
  }
];

export const mahabharataChildSafeExpansionPackV1StoryPack: StoryPack = {
  id: 'mahabharata-child-safe-expansion-pack-v1',
  title: 'Mahabharata Child-Safe Expansion Pack v1',
  childFacingTitle: 'Mahabharata Values Stories',
  description: 'Child-safe Mahabharata stories focused on values, warmth, and simple dharma choices.',
  sourceTradition: 'Mahabharata (Child-Safe)',
  category: 'values',
  status: 'qa_ready',
  storyIds: mahabharataChildSafeExpansionPackV1Stories.map((story) => story.id),
  recommendedAgeBands: ['6-8', '9-12'],
  contentSafetyNotes: [
    'Child-safe and non-violent framing.',
    'Focused on values, choices, and consequences in simple child-facing language.'
  ],
  sacredRespectNotes: ['Sacred content presented with warmth, restraint, and reverence.']
};

export const mahabharataChildSafeExpansionPackV1Journey: DharmaJourney = {
  id: 'mahabharata-child-safe-journey-v1',
  title: 'Mahabharata Child-Safe Journey v1',
  childFacingTitle: 'Mahabharata Values Journey',
  description: 'A child-safe guided journey through Mahabharata-inspired values stories.',
  sourceTradition: 'Mahabharata (Child-Safe)',
  recommendedAgeBands: ['6-8', '9-12'],
  storyIds: mahabharataChildSafeExpansionPackV1Stories.map((story) => story.id),
  estimatedCompletionWeeks: 6,
  status: 'qa_ready',
  journeyType: 'guided_path'
};
