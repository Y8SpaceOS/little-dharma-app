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
    "summary": "In this child-safe Mahabharata retelling, Arjuna makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Arjuna Shares the Seat — Setting",
        "text": "A crowded gurukul bench has one younger student standing with books in both hands."
      },
      {
        "id": "panel-2",
        "title": "Arjuna Shares the Seat — Guidance",
        "text": "Krishna points to Arjuna’s folded mat and asks how space can be made without fuss."
      },
      {
        "id": "panel-3",
        "title": "Arjuna Shares the Seat — Action",
        "text": "Arjuna shifts his mat, tucks his bow practice rope aside, and invites the younger child to sit beside him."
      },
      {
        "id": "panel-4",
        "title": "Arjuna Shares the Seat — Resolution",
        "text": "The lesson starts peacefully, and Arjuna learns that friendship begins with making room for others."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "Arjuna Shares the Seat: Which moment showed Arjuna choosing dharma, and what consequence followed for the group? (1)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Arjuna Shares the Seat, what first step would you take to make the moment kinder? (1)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 1 from Arjuna Shares the Seat: specific child-safe setting with clear props and gentle resolution led by Arjuna.",
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
      "narrationScript": "Arjuna Shares the Seat. A crowded gurukul bench has one younger student standing with books in both hands. Krishna points to Arjuna’s folded mat and asks how space can be made without fuss. Arjuna shifts his mat, tucks his bow practice rope aside, and invites the younger child to sit beside him. The lesson starts peacefully, and Arjuna learns that friendship begins with making room for others.",
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
    "summary": "In this child-safe Mahabharata retelling, Bhima makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Bhima Waits His Turn — Setting",
        "text": "At the well, a line of children waits with clay pots while Bhima reaches forward to fill his first."
      },
      {
        "id": "panel-2",
        "title": "Bhima Waits His Turn — Guidance",
        "text": "Yudhishthira reminds Bhima that smaller children have lighter arms but heavier pots for their size."
      },
      {
        "id": "panel-3",
        "title": "Bhima Waits His Turn — Action",
        "text": "Bhima steps back, lets three younger children fill first, then helps lift their pots onto the ledge."
      },
      {
        "id": "panel-4",
        "title": "Bhima Waits His Turn — Resolution",
        "text": "Everyone reaches class on time, and Bhima discovers patience can be strong and protective."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "Bhima Waits His Turn: Which moment showed Bhima choosing dharma, and what consequence followed for the group? (2)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Bhima Waits His Turn, what first step would you take to make the moment kinder? (2)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 2 from Bhima Waits His Turn: specific child-safe setting with clear props and gentle resolution led by Bhima.",
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
      "narrationScript": "Bhima Waits His Turn. At the well, a line of children waits with clay pots while Bhima reaches forward to fill his first. Yudhishthira reminds Bhima that smaller children have lighter arms but heavier pots for their size. Bhima steps back, lets three younger children fill first, then helps lift their pots onto the ledge. Everyone reaches class on time, and Bhima discovers patience can be strong and protective.",
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
    "summary": "In this child-safe Mahabharata retelling, Draupadi makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Draupadi’s Kind Word — Setting",
        "text": "Two cousins argue on the kitchen steps over who chopped the vegetables better."
      },
      {
        "id": "panel-2",
        "title": "Draupadi’s Kind Word — Guidance",
        "text": "Kunti asks Draupadi to notice which words are hurting more than the disagreement itself."
      },
      {
        "id": "panel-3",
        "title": "Draupadi’s Kind Word — Action",
        "text": "Draupadi thanks both children for helping and says the meal needs both careful chopping and quick hands."
      },
      {
        "id": "panel-4",
        "title": "Draupadi’s Kind Word — Resolution",
        "text": "The argument softens into teamwork, and Draupadi sees how one kind sentence can change a room."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "Draupadi’s Kind Word: Which moment showed Draupadi choosing dharma, and what consequence followed for the group? (3)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Draupadi’s Kind Word, what first step would you take to make the moment kinder? (3)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 3 from Draupadi’s Kind Word: specific child-safe setting with clear props and gentle resolution led by Draupadi.",
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
      "narrationScript": "Draupadi’s Kind Word. Two cousins argue on the kitchen steps over who chopped the vegetables better. Kunti asks Draupadi to notice which words are hurting more than the disagreement itself. Draupadi thanks both children for helping and says the meal needs both careful chopping and quick hands. The argument softens into teamwork, and Draupadi sees how one kind sentence can change a room.",
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
    "summary": "In this child-safe Mahabharata retelling, Yudhishthira makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Yudhishthira Tells the Truth — Setting",
        "text": "A writing slate goes missing before recitation, and Yudhishthira remembers moving it during cleanup."
      },
      {
        "id": "panel-2",
        "title": "Yudhishthira Tells the Truth — Guidance",
        "text": "Vidura asks whether a quick excuse would help less than an honest admission."
      },
      {
        "id": "panel-3",
        "title": "Yudhishthira Tells the Truth — Action",
        "text": "Yudhishthira admits he placed the slate near the window, apologizes, and fetches it himself."
      },
      {
        "id": "panel-4",
        "title": "Yudhishthira Tells the Truth — Resolution",
        "text": "Trust stays intact, and Yudhishthira learns truth is easiest before worry grows."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "Yudhishthira Tells the Truth: Which moment showed Yudhishthira choosing dharma, and what consequence followed for the group? (4)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Yudhishthira Tells the Truth, what first step would you take to make the moment kinder? (4)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 4 from Yudhishthira Tells the Truth: specific child-safe setting with clear props and gentle resolution led by Yudhishthira.",
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
      "narrationScript": "Yudhishthira Tells the Truth. A writing slate goes missing before recitation, and Yudhishthira remembers moving it during cleanup. Vidura asks whether a quick excuse would help less than an honest admission. Yudhishthira admits he placed the slate near the window, apologizes, and fetches it himself. Trust stays intact, and Yudhishthira learns truth is easiest before worry grows.",
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
    "summary": "In this child-safe Mahabharata retelling, Nakula makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Nakula Returns the Bracelet — Setting",
        "text": "Near the well steps, Nakula finds a silver bracelet half-hidden under marigold leaves."
      },
      {
        "id": "panel-2",
        "title": "Nakula Returns the Bracelet — Guidance",
        "text": "Sahadeva suggests asking each family carefully rather than guessing the owner."
      },
      {
        "id": "panel-3",
        "title": "Nakula Returns the Bracelet — Action",
        "text": "Nakula checks with elders, finds it belongs to a visiting auntie, and returns it quietly without asking for praise."
      },
      {
        "id": "panel-4",
        "title": "Nakula Returns the Bracelet — Resolution",
        "text": "Relief spreads through the courtyard, and Nakula feels the joy of honest responsibility."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "Nakula Returns the Bracelet: Which moment showed Nakula choosing dharma, and what consequence followed for the group? (5)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Nakula Returns the Bracelet, what first step would you take to make the moment kinder? (5)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 5 from Nakula Returns the Bracelet: specific child-safe setting with clear props and gentle resolution led by Nakula.",
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
      "narrationScript": "Nakula Returns the Bracelet. Near the well steps, Nakula finds a silver bracelet half-hidden under marigold leaves. Sahadeva suggests asking each family carefully rather than guessing the owner. Nakula checks with elders, finds it belongs to a visiting auntie, and returns it quietly without asking for praise. Relief spreads through the courtyard, and Nakula feels the joy of honest responsibility.",
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
    "summary": "In this child-safe Mahabharata retelling, Sahadeva makes a values-based choice in a specific family or gurukul moment.",
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
      "Sahadeva",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sahadeva Listens First — Setting",
        "text": "A younger student asks for advice about balancing study and chores but speaks in a rush."
      },
      {
        "id": "panel-2",
        "title": "Sahadeva Listens First — Guidance",
        "text": "Vidura nods to Sahadeva and says good advice begins after full listening."
      },
      {
        "id": "panel-3",
        "title": "Sahadeva Listens First — Action",
        "text": "Sahadeva waits, asks two clarifying questions, and then suggests a simple evening schedule."
      },
      {
        "id": "panel-4",
        "title": "Sahadeva Listens First — Resolution",
        "text": "The child smiles with confidence, and Sahadeva learns wisdom starts with patient listening."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows wisdom through simple choices and gentle consequences.",
      "discussionPrompt": "Sahadeva Listens First: Which moment showed Sahadeva choosing dharma, and what consequence followed for the group? (6)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Sahadeva Listens First, what first step would you take to make the moment kinder? (6)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 6 from Sahadeva Listens First: specific child-safe setting with clear props and gentle resolution led by Sahadeva.",
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
      "narrationScript": "Sahadeva Listens First. A younger student asks for advice about balancing study and chores but speaks in a rush. Vidura nods to Sahadeva and says good advice begins after full listening. Sahadeva waits, asks two clarifying questions, and then suggests a simple evening schedule. The child smiles with confidence, and Sahadeva learns wisdom starts with patient listening.",
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
    "title": "The Promise at the Banyan Tree",
    "shortTitle": "The Promise at the Banyan Tree",
    "summary": "In this child-safe Mahabharata retelling, Arjuna makes a values-based choice in a specific family or gurukul moment.",
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
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "The Promise at the Banyan Tree — Setting",
        "text": "During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "The Promise at the Banyan Tree — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "The Promise at the Banyan Tree — Action",
        "text": "Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play."
      },
      {
        "id": "panel-4",
        "title": "The Promise at the Banyan Tree — Resolution",
        "text": "The prayer circle begins on time, and everyone remembers that promises build trust."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "The Promise at the Banyan Tree: Which moment showed Arjuna choosing dharma, and what consequence followed for the group? (7)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After The Promise at the Banyan Tree, what first step would you take to make the moment kinder? (7)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 7 from The Promise at the Banyan Tree: specific child-safe setting with clear props and gentle resolution led by Arjuna.",
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
      "narrationScript": "The Promise at the Banyan Tree. During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play. The prayer circle begins on time, and everyone remembers that promises build trust.",
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
    "title": "Kunti’s Bowl of Rice",
    "shortTitle": "Kunti’s Bowl of Rice",
    "summary": "In this child-safe Mahabharata retelling, Bhima makes a values-based choice in a specific family or gurukul moment.",
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
      "Bhima",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kunti’s Bowl of Rice — Setting",
        "text": "Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Kunti’s Bowl of Rice — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Kunti’s Bowl of Rice — Action",
        "text": "Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first."
      },
      {
        "id": "panel-4",
        "title": "Kunti’s Bowl of Rice — Resolution",
        "text": "Children feel respected at the meal, and fairness becomes visible to everyone."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "Kunti’s Bowl of Rice: Which moment showed Bhima choosing dharma, and what consequence followed for the group? (8)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Kunti’s Bowl of Rice, what first step would you take to make the moment kinder? (8)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 8 from Kunti’s Bowl of Rice: specific child-safe setting with clear props and gentle resolution led by Bhima.",
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
      "narrationScript": "Kunti’s Bowl of Rice. Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared. Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first. Children feel respected at the meal, and fairness becomes visible to everyone.",
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
    "title": "Krishna’s Fair Turn Game",
    "shortTitle": "Krishna’s Fair Turn Game",
    "summary": "In this child-safe Mahabharata retelling, Yudhishthira makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Krishna’s Fair Turn Game — Setting",
        "text": "During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna’s Fair Turn Game — Guidance",
        "text": "Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Krishna’s Fair Turn Game — Action",
        "text": "Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats."
      },
      {
        "id": "panel-4",
        "title": "Krishna’s Fair Turn Game — Resolution",
        "text": "The game stays joyful, and no one leaves feeling ignored."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows dharma through simple choices and gentle consequences.",
      "discussionPrompt": "Krishna’s Fair Turn Game: Which moment showed Yudhishthira choosing dharma, and what consequence followed for the group? (9)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Krishna’s Fair Turn Game, what first step would you take to make the moment kinder? (9)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 9 from Krishna’s Fair Turn Game: specific child-safe setting with clear props and gentle resolution led by Yudhishthira.",
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
      "narrationScript": "Krishna’s Fair Turn Game. During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting. Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats. The game stays joyful, and no one leaves feeling ignored.",
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
    "title": "Vidura’s Quiet Lamp Lesson",
    "shortTitle": "Vidura’s Quiet Lamp Lesson",
    "summary": "In this child-safe Mahabharata retelling, Nakula makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Vidura’s Quiet Lamp Lesson — Setting",
        "text": "Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Vidura’s Quiet Lamp Lesson — Guidance",
        "text": "Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Vidura’s Quiet Lamp Lesson — Action",
        "text": "Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back."
      },
      {
        "id": "panel-4",
        "title": "Vidura’s Quiet Lamp Lesson — Resolution",
        "text": "A small adjustment helps learning, and care becomes everyone’s habit."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows humility through simple choices and gentle consequences.",
      "discussionPrompt": "Vidura’s Quiet Lamp Lesson: Which moment showed Nakula choosing dharma, and what consequence followed for the group? (10)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Vidura’s Quiet Lamp Lesson, what first step would you take to make the moment kinder? (10)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 10 from Vidura’s Quiet Lamp Lesson: specific child-safe setting with clear props and gentle resolution led by Nakula.",
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
      "narrationScript": "Vidura’s Quiet Lamp Lesson. Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared. Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back. A small adjustment helps learning, and care becomes everyone’s habit.",
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
    "summary": "In this child-safe Mahabharata retelling, Draupadi makes a values-based choice in a specific family or gurukul moment.",
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
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Bhima Carries Two Baskets — Setting",
        "text": "During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Bhima Carries Two Baskets — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Bhima Carries Two Baskets — Action",
        "text": "Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps."
      },
      {
        "id": "panel-4",
        "title": "Bhima Carries Two Baskets — Resolution",
        "text": "Work finishes faster, and strength feels best when shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "Bhima Carries Two Baskets: Which moment showed Draupadi choosing dharma, and what consequence followed for the group? (11)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Bhima Carries Two Baskets, what first step would you take to make the moment kinder? (11)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 11 from Bhima Carries Two Baskets: specific child-safe setting with clear props and gentle resolution led by Draupadi.",
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
      "narrationScript": "Bhima Carries Two Baskets. During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting. Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps. Work finishes faster, and strength feels best when shared.",
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
    "title": "Draupadi Shares the Aprons",
    "shortTitle": "Draupadi Shares the Aprons",
    "summary": "In this child-safe Mahabharata retelling, Sahadeva makes a values-based choice in a specific family or gurukul moment.",
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
      "Sahadeva",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Draupadi Shares the Aprons — Setting",
        "text": "Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Draupadi Shares the Aprons — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Draupadi Shares the Aprons — Action",
        "text": "Draupadi sahadeva hands clean aprons to the last two children before taking one for herself."
      },
      {
        "id": "panel-4",
        "title": "Draupadi Shares the Aprons — Resolution",
        "text": "Kitchen seva flows smoothly, and humility leads by example."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "Draupadi Shares the Aprons: Which moment showed Sahadeva choosing dharma, and what consequence followed for the group? (12)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Draupadi Shares the Aprons, what first step would you take to make the moment kinder? (12)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 12 from Draupadi Shares the Aprons: specific child-safe setting with clear props and gentle resolution led by Sahadeva.",
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
      "narrationScript": "Draupadi Shares the Aprons. Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Draupadi sahadeva hands clean aprons to the last two children before taking one for herself. Kitchen seva flows smoothly, and humility leads by example.",
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
    "title": "The Promise at the Banyan Tree",
    "shortTitle": "The Promise at the Banyan Tree",
    "summary": "In this child-safe Mahabharata retelling, Arjuna makes a values-based choice in a specific family or gurukul moment.",
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
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "The Promise at the Banyan Tree — Setting",
        "text": "During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "The Promise at the Banyan Tree — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "The Promise at the Banyan Tree — Action",
        "text": "Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play."
      },
      {
        "id": "panel-4",
        "title": "The Promise at the Banyan Tree — Resolution",
        "text": "The prayer circle begins on time, and everyone remembers that promises build trust."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "The Promise at the Banyan Tree: Which moment showed Arjuna choosing dharma, and what consequence followed for the group? (13)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After The Promise at the Banyan Tree, what first step would you take to make the moment kinder? (13)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 13 from The Promise at the Banyan Tree: specific child-safe setting with clear props and gentle resolution led by Arjuna.",
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
      "narrationScript": "The Promise at the Banyan Tree. During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play. The prayer circle begins on time, and everyone remembers that promises build trust.",
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
    "title": "Kunti’s Bowl of Rice",
    "shortTitle": "Kunti’s Bowl of Rice",
    "summary": "In this child-safe Mahabharata retelling, Bhima makes a values-based choice in a specific family or gurukul moment.",
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
      "Bhima",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kunti’s Bowl of Rice — Setting",
        "text": "Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Kunti’s Bowl of Rice — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Kunti’s Bowl of Rice — Action",
        "text": "Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first."
      },
      {
        "id": "panel-4",
        "title": "Kunti’s Bowl of Rice — Resolution",
        "text": "Children feel respected at the meal, and fairness becomes visible to everyone."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "Kunti’s Bowl of Rice: Which moment showed Bhima choosing dharma, and what consequence followed for the group? (14)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Kunti’s Bowl of Rice, what first step would you take to make the moment kinder? (14)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 14 from Kunti’s Bowl of Rice: specific child-safe setting with clear props and gentle resolution led by Bhima.",
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
      "narrationScript": "Kunti’s Bowl of Rice. Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared. Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first. Children feel respected at the meal, and fairness becomes visible to everyone.",
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
    "title": "Krishna’s Fair Turn Game",
    "shortTitle": "Krishna’s Fair Turn Game",
    "summary": "In this child-safe Mahabharata retelling, Yudhishthira makes a values-based choice in a specific family or gurukul moment.",
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
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Krishna’s Fair Turn Game — Setting",
        "text": "During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna’s Fair Turn Game — Guidance",
        "text": "Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Krishna’s Fair Turn Game — Action",
        "text": "Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats."
      },
      {
        "id": "panel-4",
        "title": "Krishna’s Fair Turn Game — Resolution",
        "text": "The game stays joyful, and no one leaves feeling ignored."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "Krishna’s Fair Turn Game: Which moment showed Yudhishthira choosing dharma, and what consequence followed for the group? (15)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Krishna’s Fair Turn Game, what first step would you take to make the moment kinder? (15)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 15 from Krishna’s Fair Turn Game: specific child-safe setting with clear props and gentle resolution led by Yudhishthira.",
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
      "narrationScript": "Krishna’s Fair Turn Game. During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting. Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats. The game stays joyful, and no one leaves feeling ignored.",
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
    "title": "Vidura’s Quiet Lamp Lesson",
    "shortTitle": "Vidura’s Quiet Lamp Lesson",
    "summary": "In this child-safe Mahabharata retelling, Nakula makes a values-based choice in a specific family or gurukul moment.",
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
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Vidura’s Quiet Lamp Lesson — Setting",
        "text": "Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Vidura’s Quiet Lamp Lesson — Guidance",
        "text": "Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Vidura’s Quiet Lamp Lesson — Action",
        "text": "Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back."
      },
      {
        "id": "panel-4",
        "title": "Vidura’s Quiet Lamp Lesson — Resolution",
        "text": "A small adjustment helps learning, and care becomes everyone’s habit."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows wisdom through simple choices and gentle consequences.",
      "discussionPrompt": "Vidura’s Quiet Lamp Lesson: Which moment showed Nakula choosing dharma, and what consequence followed for the group? (16)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Vidura’s Quiet Lamp Lesson, what first step would you take to make the moment kinder? (16)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 16 from Vidura’s Quiet Lamp Lesson: specific child-safe setting with clear props and gentle resolution led by Nakula.",
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
      "narrationScript": "Vidura’s Quiet Lamp Lesson. Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared. Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back. A small adjustment helps learning, and care becomes everyone’s habit.",
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
    "title": "Bhima Carries Two Baskets",
    "shortTitle": "Bhima Carries Two Baskets",
    "summary": "In this child-safe Mahabharata retelling, Draupadi makes a values-based choice in a specific family or gurukul moment.",
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
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Bhima Carries Two Baskets — Setting",
        "text": "During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Bhima Carries Two Baskets — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Bhima Carries Two Baskets — Action",
        "text": "Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps."
      },
      {
        "id": "panel-4",
        "title": "Bhima Carries Two Baskets — Resolution",
        "text": "Work finishes faster, and strength feels best when shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "Bhima Carries Two Baskets: Which moment showed Draupadi choosing dharma, and what consequence followed for the group? (17)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Bhima Carries Two Baskets, what first step would you take to make the moment kinder? (17)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 17 from Bhima Carries Two Baskets: specific child-safe setting with clear props and gentle resolution led by Draupadi.",
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
      "narrationScript": "Bhima Carries Two Baskets. During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting. Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps. Work finishes faster, and strength feels best when shared.",
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
    "title": "Draupadi Shares the Aprons",
    "shortTitle": "Draupadi Shares the Aprons",
    "summary": "In this child-safe Mahabharata retelling, Sahadeva makes a values-based choice in a specific family or gurukul moment.",
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
      "Sahadeva",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Draupadi Shares the Aprons — Setting",
        "text": "Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Draupadi Shares the Aprons — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Draupadi Shares the Aprons — Action",
        "text": "Draupadi sahadeva hands clean aprons to the last two children before taking one for herself."
      },
      {
        "id": "panel-4",
        "title": "Draupadi Shares the Aprons — Resolution",
        "text": "Kitchen seva flows smoothly, and humility leads by example."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "Draupadi Shares the Aprons: Which moment showed Sahadeva choosing dharma, and what consequence followed for the group? (18)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Draupadi Shares the Aprons, what first step would you take to make the moment kinder? (18)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 18 from Draupadi Shares the Aprons: specific child-safe setting with clear props and gentle resolution led by Sahadeva.",
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
      "narrationScript": "Draupadi Shares the Aprons. Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Draupadi sahadeva hands clean aprons to the last two children before taking one for herself. Kitchen seva flows smoothly, and humility leads by example.",
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
    "title": "The Promise at the Banyan Tree",
    "shortTitle": "The Promise at the Banyan Tree",
    "summary": "In this child-safe Mahabharata retelling, Arjuna makes a values-based choice in a specific family or gurukul moment.",
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
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "The Promise at the Banyan Tree — Setting",
        "text": "During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "The Promise at the Banyan Tree — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "The Promise at the Banyan Tree — Action",
        "text": "Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play."
      },
      {
        "id": "panel-4",
        "title": "The Promise at the Banyan Tree — Resolution",
        "text": "The prayer circle begins on time, and everyone remembers that promises build trust."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows dharma through simple choices and gentle consequences.",
      "discussionPrompt": "The Promise at the Banyan Tree: Which moment showed Arjuna choosing dharma, and what consequence followed for the group? (19)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After The Promise at the Banyan Tree, what first step would you take to make the moment kinder? (19)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 19 from The Promise at the Banyan Tree: specific child-safe setting with clear props and gentle resolution led by Arjuna.",
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
      "narrationScript": "The Promise at the Banyan Tree. During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play. The prayer circle begins on time, and everyone remembers that promises build trust.",
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
    "title": "Kunti’s Bowl of Rice",
    "shortTitle": "Kunti’s Bowl of Rice",
    "summary": "In this child-safe Mahabharata retelling, Bhima makes a values-based choice in a specific family or gurukul moment.",
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
      "Bhima",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kunti’s Bowl of Rice — Setting",
        "text": "Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Kunti’s Bowl of Rice — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Kunti’s Bowl of Rice — Action",
        "text": "Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first."
      },
      {
        "id": "panel-4",
        "title": "Kunti’s Bowl of Rice — Resolution",
        "text": "Children feel respected at the meal, and fairness becomes visible to everyone."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows humility through simple choices and gentle consequences.",
      "discussionPrompt": "Kunti’s Bowl of Rice: Which moment showed Bhima choosing dharma, and what consequence followed for the group? (20)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Kunti’s Bowl of Rice, what first step would you take to make the moment kinder? (20)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 20 from Kunti’s Bowl of Rice: specific child-safe setting with clear props and gentle resolution led by Bhima.",
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
      "narrationScript": "Kunti’s Bowl of Rice. Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared. Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first. Children feel respected at the meal, and fairness becomes visible to everyone.",
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
    "title": "Krishna’s Fair Turn Game",
    "shortTitle": "Krishna’s Fair Turn Game",
    "summary": "In this child-safe Mahabharata retelling, Yudhishthira makes a values-based choice in a specific family or gurukul moment.",
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
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Krishna’s Fair Turn Game — Setting",
        "text": "During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna’s Fair Turn Game — Guidance",
        "text": "Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Krishna’s Fair Turn Game — Action",
        "text": "Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats."
      },
      {
        "id": "panel-4",
        "title": "Krishna’s Fair Turn Game — Resolution",
        "text": "The game stays joyful, and no one leaves feeling ignored."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "Krishna’s Fair Turn Game: Which moment showed Yudhishthira choosing dharma, and what consequence followed for the group? (21)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Krishna’s Fair Turn Game, what first step would you take to make the moment kinder? (21)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 21 from Krishna’s Fair Turn Game: specific child-safe setting with clear props and gentle resolution led by Yudhishthira.",
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
      "narrationScript": "Krishna’s Fair Turn Game. During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting. Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats. The game stays joyful, and no one leaves feeling ignored.",
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
    "title": "Vidura’s Quiet Lamp Lesson",
    "shortTitle": "Vidura’s Quiet Lamp Lesson",
    "summary": "In this child-safe Mahabharata retelling, Nakula makes a values-based choice in a specific family or gurukul moment.",
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
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Vidura’s Quiet Lamp Lesson — Setting",
        "text": "Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Vidura’s Quiet Lamp Lesson — Guidance",
        "text": "Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Vidura’s Quiet Lamp Lesson — Action",
        "text": "Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back."
      },
      {
        "id": "panel-4",
        "title": "Vidura’s Quiet Lamp Lesson — Resolution",
        "text": "A small adjustment helps learning, and care becomes everyone’s habit."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "Vidura’s Quiet Lamp Lesson: Which moment showed Nakula choosing dharma, and what consequence followed for the group? (22)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Vidura’s Quiet Lamp Lesson, what first step would you take to make the moment kinder? (22)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 22 from Vidura’s Quiet Lamp Lesson: specific child-safe setting with clear props and gentle resolution led by Nakula.",
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
      "narrationScript": "Vidura’s Quiet Lamp Lesson. Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared. Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back. A small adjustment helps learning, and care becomes everyone’s habit.",
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
    "title": "Bhima Carries Two Baskets",
    "shortTitle": "Bhima Carries Two Baskets",
    "summary": "In this child-safe Mahabharata retelling, Draupadi makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "Bhima Carries Two Baskets — Setting",
        "text": "During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Bhima Carries Two Baskets — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Bhima Carries Two Baskets — Action",
        "text": "Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps."
      },
      {
        "id": "panel-4",
        "title": "Bhima Carries Two Baskets — Resolution",
        "text": "Work finishes faster, and strength feels best when shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "Bhima Carries Two Baskets: Which moment showed Draupadi choosing dharma, and what consequence followed for the group? (23)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Bhima Carries Two Baskets, what first step would you take to make the moment kinder? (23)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 23 from Bhima Carries Two Baskets: specific child-safe setting with clear props and gentle resolution led by Draupadi.",
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
      "narrationScript": "Bhima Carries Two Baskets. During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting. Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps. Work finishes faster, and strength feels best when shared.",
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
    "title": "Draupadi Shares the Aprons",
    "shortTitle": "Draupadi Shares the Aprons",
    "summary": "In this child-safe Mahabharata retelling, Sahadeva makes a values-based choice in a specific family or gurukul moment.",
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
      "Sahadeva",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Draupadi Shares the Aprons — Setting",
        "text": "Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Draupadi Shares the Aprons — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Draupadi Shares the Aprons — Action",
        "text": "Draupadi sahadeva hands clean aprons to the last two children before taking one for herself."
      },
      {
        "id": "panel-4",
        "title": "Draupadi Shares the Aprons — Resolution",
        "text": "Kitchen seva flows smoothly, and humility leads by example."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "Draupadi Shares the Aprons: Which moment showed Sahadeva choosing dharma, and what consequence followed for the group? (24)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Draupadi Shares the Aprons, what first step would you take to make the moment kinder? (24)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 24 from Draupadi Shares the Aprons: specific child-safe setting with clear props and gentle resolution led by Sahadeva.",
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
      "narrationScript": "Draupadi Shares the Aprons. Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Draupadi sahadeva hands clean aprons to the last two children before taking one for herself. Kitchen seva flows smoothly, and humility leads by example.",
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
    "title": "The Promise at the Banyan Tree",
    "shortTitle": "The Promise at the Banyan Tree",
    "summary": "In this child-safe Mahabharata retelling, Arjuna makes a values-based choice in a specific family or gurukul moment.",
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
      "Arjuna",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "The Promise at the Banyan Tree — Setting",
        "text": "During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "The Promise at the Banyan Tree — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "The Promise at the Banyan Tree — Action",
        "text": "Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play."
      },
      {
        "id": "panel-4",
        "title": "The Promise at the Banyan Tree — Resolution",
        "text": "The prayer circle begins on time, and everyone remembers that promises build trust."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "The Promise at the Banyan Tree: Which moment showed Arjuna choosing dharma, and what consequence followed for the group? (25)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After The Promise at the Banyan Tree, what first step would you take to make the moment kinder? (25)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 25 from The Promise at the Banyan Tree: specific child-safe setting with clear props and gentle resolution led by Arjuna.",
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
      "narrationScript": "The Promise at the Banyan Tree. During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting. Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself. Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play. The prayer circle begins on time, and everyone remembers that promises build trust.",
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
    "title": "Kunti’s Bowl of Rice",
    "shortTitle": "Kunti’s Bowl of Rice",
    "summary": "In this child-safe Mahabharata retelling, Bhima makes a values-based choice in a specific family or gurukul moment.",
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
      "Bhima",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kunti’s Bowl of Rice — Setting",
        "text": "Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Kunti’s Bowl of Rice — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Kunti’s Bowl of Rice — Action",
        "text": "Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first."
      },
      {
        "id": "panel-4",
        "title": "Kunti’s Bowl of Rice — Resolution",
        "text": "Children feel respected at the meal, and fairness becomes visible to everyone."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows wisdom through simple choices and gentle consequences.",
      "discussionPrompt": "Kunti’s Bowl of Rice: Which moment showed Bhima choosing dharma, and what consequence followed for the group? (26)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Kunti’s Bowl of Rice, what first step would you take to make the moment kinder? (26)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 26 from Kunti’s Bowl of Rice: specific child-safe setting with clear props and gentle resolution led by Bhima.",
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
    "title": "Krishna’s Fair Turn Game",
    "shortTitle": "Krishna’s Fair Turn Game",
    "summary": "In this child-safe Mahabharata retelling, Yudhishthira makes a values-based choice in a specific family or gurukul moment.",
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
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Krishna’s Fair Turn Game — Setting",
        "text": "During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna’s Fair Turn Game — Guidance",
        "text": "Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Krishna’s Fair Turn Game — Action",
        "text": "Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats."
      },
      {
        "id": "panel-4",
        "title": "Krishna’s Fair Turn Game — Resolution",
        "text": "The game stays joyful, and no one leaves feeling ignored."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "Krishna’s Fair Turn Game: Which moment showed Yudhishthira choosing dharma, and what consequence followed for the group? (27)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Krishna’s Fair Turn Game, what first step would you take to make the moment kinder? (27)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 27 from Krishna’s Fair Turn Game: specific child-safe setting with clear props and gentle resolution led by Yudhishthira.",
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
    "title": "Vidura’s Quiet Lamp Lesson",
    "shortTitle": "Vidura’s Quiet Lamp Lesson",
    "summary": "In this child-safe Mahabharata retelling, Nakula makes a values-based choice in a specific family or gurukul moment.",
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
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Vidura’s Quiet Lamp Lesson — Setting",
        "text": "Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Vidura’s Quiet Lamp Lesson — Guidance",
        "text": "Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Vidura’s Quiet Lamp Lesson — Action",
        "text": "Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back."
      },
      {
        "id": "panel-4",
        "title": "Vidura’s Quiet Lamp Lesson — Resolution",
        "text": "A small adjustment helps learning, and care becomes everyone’s habit."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows fairness through simple choices and gentle consequences.",
      "discussionPrompt": "Vidura’s Quiet Lamp Lesson: Which moment showed Nakula choosing dharma, and what consequence followed for the group? (28)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Vidura’s Quiet Lamp Lesson, what first step would you take to make the moment kinder? (28)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 28 from Vidura’s Quiet Lamp Lesson: specific child-safe setting with clear props and gentle resolution led by Nakula.",
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
    "title": "Bhima Carries Two Baskets",
    "shortTitle": "Bhima Carries Two Baskets",
    "summary": "In this child-safe Mahabharata retelling, Draupadi makes a values-based choice in a specific family or gurukul moment.",
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
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Bhima Carries Two Baskets — Setting",
        "text": "During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Bhima Carries Two Baskets — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Bhima Carries Two Baskets — Action",
        "text": "Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps."
      },
      {
        "id": "panel-4",
        "title": "Bhima Carries Two Baskets — Resolution",
        "text": "Work finishes faster, and strength feels best when shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows dharma through simple choices and gentle consequences.",
      "discussionPrompt": "Bhima Carries Two Baskets: Which moment showed Draupadi choosing dharma, and what consequence followed for the group? (29)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Bhima Carries Two Baskets, what first step would you take to make the moment kinder? (29)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 29 from Bhima Carries Two Baskets: specific child-safe setting with clear props and gentle resolution led by Draupadi.",
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
    "title": "Draupadi Shares the Aprons",
    "shortTitle": "Draupadi Shares the Aprons",
    "summary": "In this child-safe Mahabharata retelling, Sahadeva makes a values-based choice in a specific family or gurukul moment.",
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
      "Sahadeva",
      "Krishna",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Draupadi Shares the Aprons — Setting",
        "text": "Before evening prayer, Sahadeva sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Draupadi Shares the Aprons — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Draupadi Shares the Aprons — Action",
        "text": "Draupadi sahadeva hands clean aprons to the last two children before taking one for herself."
      },
      {
        "id": "panel-4",
        "title": "Draupadi Shares the Aprons — Resolution",
        "text": "Kitchen seva flows smoothly, and humility leads by example."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows humility through simple choices and gentle consequences.",
      "discussionPrompt": "Draupadi Shares the Aprons: Which moment showed Sahadeva choosing dharma, and what consequence followed for the group? (30)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Draupadi Shares the Aprons, what first step would you take to make the moment kinder? (30)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 30 from Draupadi Shares the Aprons: specific child-safe setting with clear props and gentle resolution led by Sahadeva.",
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
    "title": "The Promise at the Banyan Tree",
    "shortTitle": "The Promise at the Banyan Tree",
    "summary": "In this child-safe Mahabharata retelling, Arjuna makes a values-based choice in a specific family or gurukul moment.",
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
        "title": "The Promise at the Banyan Tree — Setting",
        "text": "During the afternoon task period, Arjuna notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "The Promise at the Banyan Tree — Guidance",
        "text": "Krishna gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "The Promise at the Banyan Tree — Action",
        "text": "Arjuna keeps his promise to bring reading mats before prayer and arrives early despite wanting to play."
      },
      {
        "id": "panel-4",
        "title": "The Promise at the Banyan Tree — Resolution",
        "text": "The prayer circle begins on time, and everyone remembers that promises build trust."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows friendship through simple choices and gentle consequences.",
      "discussionPrompt": "The Promise at the Banyan Tree: Which moment showed Arjuna choosing dharma, and what consequence followed for the group? (31)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After The Promise at the Banyan Tree, what first step would you take to make the moment kinder? (31)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 31 from The Promise at the Banyan Tree: specific child-safe setting with clear props and gentle resolution led by Arjuna.",
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
    "title": "Kunti’s Bowl of Rice",
    "shortTitle": "Kunti’s Bowl of Rice",
    "summary": "In this child-safe Mahabharata retelling, Bhima makes a values-based choice in a specific family or gurukul moment.",
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
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Kunti’s Bowl of Rice — Setting",
        "text": "Before evening prayer, Bhima sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Kunti’s Bowl of Rice — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Kunti’s Bowl of Rice — Action",
        "text": "Kunti bhima serves equal scoops of rice even when her favorite cousin asks for extra first."
      },
      {
        "id": "panel-4",
        "title": "Kunti’s Bowl of Rice — Resolution",
        "text": "Children feel respected at the meal, and fairness becomes visible to everyone."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows patience through simple choices and gentle consequences.",
      "discussionPrompt": "Kunti’s Bowl of Rice: Which moment showed Bhima choosing dharma, and what consequence followed for the group? (32)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Kunti’s Bowl of Rice, what first step would you take to make the moment kinder? (32)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 32 from Kunti’s Bowl of Rice: specific child-safe setting with clear props and gentle resolution led by Bhima.",
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
    "title": "Krishna’s Fair Turn Game",
    "shortTitle": "Krishna’s Fair Turn Game",
    "summary": "In this child-safe Mahabharata retelling, Yudhishthira makes a values-based choice in a specific family or gurukul moment.",
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
      "Yudhishthira",
      "Vidura",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Krishna’s Fair Turn Game — Setting",
        "text": "During the afternoon task period, Yudhishthira notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Krishna’s Fair Turn Game — Guidance",
        "text": "Vidura gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Krishna’s Fair Turn Game — Action",
        "text": "Krishna yudhishthira redraws the turn list in a circle so each child gets the spinning top once before repeats."
      },
      {
        "id": "panel-4",
        "title": "Krishna’s Fair Turn Game — Resolution",
        "text": "The game stays joyful, and no one leaves feeling ignored."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows kindness through simple choices and gentle consequences.",
      "discussionPrompt": "Krishna’s Fair Turn Game: Which moment showed Yudhishthira choosing dharma, and what consequence followed for the group? (33)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Krishna’s Fair Turn Game, what first step would you take to make the moment kinder? (33)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 33 from Krishna’s Fair Turn Game: specific child-safe setting with clear props and gentle resolution led by Yudhishthira.",
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
    "title": "Vidura’s Quiet Lamp Lesson",
    "shortTitle": "Vidura’s Quiet Lamp Lesson",
    "summary": "In this child-safe Mahabharata retelling, Nakula makes a values-based choice in a specific family or gurukul moment.",
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
      "Nakula",
      "Sahadeva",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Vidura’s Quiet Lamp Lesson — Setting",
        "text": "Before evening prayer, Nakula sees a practical problem in the study hall when supplies are unevenly shared."
      },
      {
        "id": "panel-2",
        "title": "Vidura’s Quiet Lamp Lesson — Guidance",
        "text": "Sahadeva gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Vidura’s Quiet Lamp Lesson — Action",
        "text": "Vidura nakula lights one extra study lamp for a child who cannot see the chalk clearly from the back."
      },
      {
        "id": "panel-4",
        "title": "Vidura’s Quiet Lamp Lesson — Resolution",
        "text": "A small adjustment helps learning, and care becomes everyone’s habit."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows truth through simple choices and gentle consequences.",
      "discussionPrompt": "Vidura’s Quiet Lamp Lesson: Which moment showed Nakula choosing dharma, and what consequence followed for the group? (34)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Vidura’s Quiet Lamp Lesson, what first step would you take to make the moment kinder? (34)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 34 from Vidura’s Quiet Lamp Lesson: specific child-safe setting with clear props and gentle resolution led by Nakula.",
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
    "title": "Bhima Carries Two Baskets",
    "shortTitle": "Bhima Carries Two Baskets",
    "summary": "In this child-safe Mahabharata retelling, Draupadi makes a values-based choice in a specific family or gurukul moment.",
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
      "Draupadi",
      "Kunti",
      "Family",
      "Students"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Bhima Carries Two Baskets — Setting",
        "text": "During the afternoon task period, Draupadi notices a specific challenge in the courtyard: tools are short and two children are waiting."
      },
      {
        "id": "panel-2",
        "title": "Bhima Carries Two Baskets — Guidance",
        "text": "Kunti gives a brief reminder tied to dharma: choose the next action that is fair for everyone, not only easiest for yourself."
      },
      {
        "id": "panel-3",
        "title": "Bhima Carries Two Baskets — Action",
        "text": "Bhima draupadi carries one basket for himself and one for a smaller student up the veranda steps."
      },
      {
        "id": "panel-4",
        "title": "Bhima Carries Two Baskets — Resolution",
        "text": "Work finishes faster, and strength feels best when shared."
      }
    ],
    "parentNote": {
      "sourceContext": "Child-safe Mahabharata values retelling focused on daily family and learning moments.",
      "valueExplained": "This story shows responsibility through simple choices and gentle consequences.",
      "discussionPrompt": "Bhima Carries Two Baskets: Which moment showed Draupadi choosing dharma, and what consequence followed for the group? (35)",
      "practicePrompt": "Invite your child to pause, breathe, and choose one kind next step.",
      "cautionNote": "Keep the conversation child-facing, warm, and non-violent."
    },
    "reflectionPrompt": "After Bhima Carries Two Baskets, what first step would you take to make the moment kinder? (35)",
    "ritualPrompt": "Take three slow breaths and choose one truthful action.",
    "completionBlessing": "May your heart stay brave, kind, and steady in dharma.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Scene 35 from Bhima Carries Two Baskets: specific child-safe setting with clear props and gentle resolution led by Draupadi.",
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
