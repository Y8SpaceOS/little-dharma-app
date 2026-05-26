import type { DharmaJourney, Story, StoryPack } from '@/types/contentModel';

type ExtendedStory = Story & { storyId: string; primaryCategoryId: string; secondaryCategoryIds: string[]; readinessStatus: 'metadata_only' | 'qa_ready'; audioStatus: 'script_needed' | 'script_ready'; journeyStatus: 'journey_ordered'; sacredRespectNotes: string; audioScript?: { narrationScript: string; voiceDirection: string; pronunciationNotes: string; pacingNotes: string; audioReadinessIntent: 'ready' }; };

export const shlokaMantraMeaningExpansionPackV1Stories: ExtendedStory[] = [
  {
    "id": "shloka-mantra-meaning-exp-v1-001",
    "storyId": "shloka-mantra-meaning-exp-v1-001",
    "slug": "shloka-mantra-meaning-exp-v1-001",
    "title": "Gayatri Mantra Meaning: Light for Clear Thinking",
    "shortTitle": "Gayatri Mantra Meaning",
    "summary": "It teaches us to choose clear thoughts, kind decisions, and steady attention while learning.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 1,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "At sunrise, a child folds hands with a parent and learns that this mantra asks for bright understanding in the mind."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It teaches us to choose clear thoughts, kind decisions, and steady attention while learning."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "Before school, the child chooses one wise action: listen fully before answering."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What is one choice you can make today that shows clear thinking and kindness?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of gayatri mantra in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward wisdom through simple, practical actions.",
      "discussionPrompt": "How can your family invite “inner light” before study time today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What is one choice you can make today that shows clear thinking and kindness?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about gayatri mantra with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Gayatri Mantra Meaning: Light for Clear Thinking. It teaches us to choose clear thoughts, kind decisions, and steady attention while learning. Before school, the child chooses one wise action: listen fully before answering. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-002",
    "storyId": "shloka-mantra-meaning-exp-v1-002",
    "slug": "shloka-mantra-meaning-exp-v1-002",
    "title": "Om Meaning: Quiet Start for a Busy Mind",
    "shortTitle": "Om Meaning",
    "summary": "It reminds children to pause, breathe, and begin with calm awareness.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 2,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A parent explains Om as a sacred sound used to settle the heart before speaking or studying."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It reminds children to pause, breathe, and begin with calm awareness."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "When feeling rushed, the child takes three soft breaths before opening a notebook."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "When your mind feels busy, what simple pause helps you feel steady again?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of om in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "When does your child feel most rushed, and how can a short pause help?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "When your mind feels busy, what simple pause helps you feel steady again?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about om with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Om Meaning: Quiet Start for a Busy Mind. It reminds children to pause, breathe, and begin with calm awareness. When feeling rushed, the child takes three soft breaths before opening a notebook. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-003",
    "storyId": "shloka-mantra-meaning-exp-v1-003",
    "slug": "shloka-mantra-meaning-exp-v1-003",
    "title": "Saraswati Vandana Meaning: Respect for Learning",
    "shortTitle": "Saraswati Vandana Meaning",
    "summary": "The meaning encourages respect for books, teachers, and careful study habits.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 3,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "Before homework, a family lights a diya and remembers learning is a gift."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning encourages respect for books, teachers, and careful study habits."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child arranges pencils neatly and begins work without complaint."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one respectful habit can you practice while learning today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of saraswati vandana in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward respect through simple, practical actions.",
      "discussionPrompt": "How can you connect this meaning to caring for school materials?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one respectful habit can you practice while learning today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about saraswati vandana with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Saraswati Vandana Meaning: Respect for Learning. The meaning encourages respect for books, teachers, and careful study habits. The child arranges pencils neatly and begins work without complaint. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-004",
    "storyId": "shloka-mantra-meaning-exp-v1-004",
    "slug": "shloka-mantra-meaning-exp-v1-004",
    "title": "Ganesh Shloka Meaning: Begin With Humility",
    "shortTitle": "Ganesh Shloka Meaning",
    "summary": "The meaning is to begin gently, ask for guidance, and stay patient through mistakes.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 4,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Humility",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "At the start of a new project, a parent shares a Ganesh prayer for wise beginnings."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is to begin gently, ask for guidance, and stay patient through mistakes."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child erases a rushed drawing and starts again without frustration."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What helps you begin again with patience when the first try fails?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of ganesh shloka in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward humility through simple, practical actions.",
      "discussionPrompt": "How do you help your child restart calmly when something is hard?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What helps you begin again with patience when the first try fails?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about ganesh shloka with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Ganesh Shloka Meaning: Begin With Humility. The meaning is to begin gently, ask for guidance, and stay patient through mistakes. The child erases a rushed drawing and starts again without frustration. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-005",
    "storyId": "shloka-mantra-meaning-exp-v1-005",
    "slug": "shloka-mantra-meaning-exp-v1-005",
    "title": "Shanti Mantra Meaning: Peace for Everyone",
    "shortTitle": "Shanti Mantra Meaning",
    "summary": "It teaches wishing peace for self, family, nature, and all beings.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 5,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Peace",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "At bedtime, siblings hear a peace mantra and imagine calm spreading outward."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It teaches wishing peace for self, family, nature, and all beings."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child ends a disagreement by speaking one peaceful sentence."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "Who can you wish peace for tonight, and how will you show it?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of shanti mantra in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward peace through simple, practical actions.",
      "discussionPrompt": "How can this mantra support calmer sibling moments at home?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "Who can you wish peace for tonight, and how will you show it?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about shanti mantra with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Shanti Mantra Meaning: Peace for Everyone. It teaches wishing peace for self, family, nature, and all beings. The child ends a disagreement by speaking one peaceful sentence. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-006",
    "storyId": "shloka-mantra-meaning-exp-v1-006",
    "slug": "shloka-mantra-meaning-exp-v1-006",
    "title": "Karagre Vasate Lakshmi Meaning: Thankful Hands in the Morning",
    "shortTitle": "Karagre Vasate Lakshmi Meaning",
    "summary": "The meaning turns morning into gratitude for helpful action, not just achievement.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 6,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "After waking, a parent shows the child their hands and says these hands can do good work."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning turns morning into gratitude for helpful action, not just achievement."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child makes their bed and carries water to the table."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What kind thing can your hands do before breakfast today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of karagre vasate lakshmi in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward gratitude through simple, practical actions.",
      "discussionPrompt": "How can morning routines include gratitude through action?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What kind thing can your hands do before breakfast today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about karagre vasate lakshmi with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Karagre Vasate Lakshmi Meaning: Thankful Hands in the Morning. The meaning turns morning into gratitude for helpful action, not just achievement. The child makes their bed and carries water to the table. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-007",
    "storyId": "shloka-mantra-meaning-exp-v1-007",
    "slug": "shloka-mantra-meaning-exp-v1-007",
    "title": "Guru Brahma Meaning: Gratitude for Teachers",
    "shortTitle": "Guru Brahma Meaning",
    "summary": "It means learning grows through patience, respect, and thankful listening.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 7,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "On the way to school, a child hears a verse honoring teachers and guides."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It means learning grows through patience, respect, and thankful listening."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child thanks a teacher after class for explaining a difficult lesson."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "Who helped you learn this week, and how will you thank them?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of guru brahma in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward gratitude through simple, practical actions.",
      "discussionPrompt": "How can you model gratitude for mentors in daily life?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "Who helped you learn this week, and how will you thank them?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about guru brahma with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Guru Brahma Meaning: Gratitude for Teachers. It means learning grows through patience, respect, and thankful listening. The child thanks a teacher after class for explaining a difficult lesson. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-008",
    "storyId": "shloka-mantra-meaning-exp-v1-008",
    "slug": "shloka-mantra-meaning-exp-v1-008",
    "title": "Asato Ma Sadgamaya Meaning: Choosing Truth and Light",
    "shortTitle": "Asato Ma Sadgamaya Meaning",
    "summary": "It encourages children to prefer honesty, clarity, and wise direction.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 8,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Truth",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A parent explains this line as moving from confusion toward truthful choices."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It encourages children to prefer honesty, clarity, and wise direction."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child admits spilling water instead of hiding it."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "When is it hard to tell the truth, and what helps you do it anyway?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of asato ma sadgamaya in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward truth through simple, practical actions.",
      "discussionPrompt": "How can you praise honesty without creating fear?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "When is it hard to tell the truth, and what helps you do it anyway?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about asato ma sadgamaya with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Asato Ma Sadgamaya Meaning: Choosing Truth and Light. It encourages children to prefer honesty, clarity, and wise direction. The child admits spilling water instead of hiding it. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-009",
    "storyId": "shloka-mantra-meaning-exp-v1-009",
    "slug": "shloka-mantra-meaning-exp-v1-009",
    "title": "Twameva Mata Cha Pita Meaning: Trust and Belonging",
    "shortTitle": "Twameva Mata Cha Pita Meaning",
    "summary": "The meaning gives emotional safety: you are supported, guided, and never alone.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 9,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Devotion",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "At prayer time, a child learns this verse speaks of divine care like family love."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning gives emotional safety: you are supported, guided, and never alone."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child shares a worry with a parent instead of staying silent."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "Who helps you feel safe when you are worried?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of twameva mata in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward devotion through simple, practical actions.",
      "discussionPrompt": "How can this meaning support emotional openness in children?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "Who helps you feel safe when you are worried?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about twameva mata with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Twameva Mata Cha Pita Meaning: Trust and Belonging. The meaning gives emotional safety: you are supported, guided, and never alone. The child shares a worry with a parent instead of staying silent. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-010",
    "storyId": "shloka-mantra-meaning-exp-v1-010",
    "slug": "shloka-mantra-meaning-exp-v1-010",
    "title": "Vakratunda Mahakaya Meaning: Courage in Difficult Tasks",
    "shortTitle": "Vakratunda Mahakaya Meaning",
    "summary": "It means ask for strength to remove inner obstacles like fear and distraction.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 10,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Courage",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "Before an exam, a parent shares a short Ganesh verse for courage and focus."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It means ask for strength to remove inner obstacles like fear and distraction."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child starts the hardest question first with a calm breath."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What is one hard task you can begin with courage today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of vakratunda mahakaya in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward courage through simple, practical actions.",
      "discussionPrompt": "How can you teach courage as steadiness rather than pressure?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What is one hard task you can begin with courage today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about vakratunda mahakaya with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Vakratunda Mahakaya Meaning: Courage in Difficult Tasks. It means ask for strength to remove inner obstacles like fear and distraction. The child starts the hardest question first with a calm breath. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-011",
    "storyId": "shloka-mantra-meaning-exp-v1-011",
    "slug": "shloka-mantra-meaning-exp-v1-011",
    "title": "Mahamrityunjaya Meaning (Child-Safe): Prayer for Healing and Strength",
    "shortTitle": "Mahamrityunjaya Meaning (Child-Safe)",
    "summary": "The meaning is care, healing hope, and inner bravery during difficult days.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 11,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Strength",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A family uses child-safe language to frame this mantra as wishing health and resilience."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is care, healing hope, and inner bravery during difficult days."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child makes a get-well card for a grandparent."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What gentle action can you do for someone who needs strength?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of mahamrityunjaya in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward strength through simple, practical actions.",
      "discussionPrompt": "How can children express care when someone is unwell?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What gentle action can you do for someone who needs strength?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about mahamrityunjaya with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Mahamrityunjaya Meaning (Child-Safe): Prayer for Healing and Strength. The meaning is care, healing hope, and inner bravery during difficult days. The child makes a get-well card for a grandparent. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-012",
    "storyId": "shloka-mantra-meaning-exp-v1-012",
    "slug": "shloka-mantra-meaning-exp-v1-012",
    "title": "Lokah Samastah Meaning: Kind Wishes for the World",
    "shortTitle": "Lokah Samastah Meaning",
    "summary": "It teaches broad-hearted kindness beyond one’s own home.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 12,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Kindness",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "After dinner, a child hears a line about wellbeing for all beings."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It teaches broad-hearted kindness beyond one’s own home."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child fills a water bowl for birds on the balcony."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What can you do today for someone outside your usual circle?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of lokah samastah in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward kindness through simple, practical actions.",
      "discussionPrompt": "How can this meaning inspire family service in simple ways?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What can you do today for someone outside your usual circle?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about lokah samastah with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Lokah Samastah Meaning: Kind Wishes for the World. It teaches broad-hearted kindness beyond one’s own home. The child fills a water bowl for birds on the balcony. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-013",
    "storyId": "shloka-mantra-meaning-exp-v1-013",
    "slug": "shloka-mantra-meaning-exp-v1-013",
    "title": "Ram Raksha Opening Meaning: Feeling Protected by Goodness",
    "shortTitle": "Ram Raksha Opening Meaning",
    "summary": "It means keep your mind on right action and compassionate strength.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 13,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Faith",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A parent explains the opening as remembering courage, duty, and protection through goodness."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It means keep your mind on right action and compassionate strength."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses not to join teasing in class."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What brave and kind choice can you make when others pressure you?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of ram raksha in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward faith through simple, practical actions.",
      "discussionPrompt": "How can sacred meaning guide social choices at school?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What brave and kind choice can you make when others pressure you?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about ram raksha with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Ram Raksha Opening Meaning: Feeling Protected by Goodness. It means keep your mind on right action and compassionate strength. The child chooses not to join teasing in class. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-014",
    "storyId": "shloka-mantra-meaning-exp-v1-014",
    "slug": "shloka-mantra-meaning-exp-v1-014",
    "title": "Hanuman Prayer Meaning: Strength in Service",
    "shortTitle": "Hanuman Prayer Meaning",
    "summary": "The meaning is power with humility and service-minded action.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 14,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Service",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "During sports practice, a child hears that Hanuman’s strength is for helping, not showing off."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is power with humility and service-minded action."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child helps a teammate who fell instead of celebrating alone."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "When can your strength help someone else today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of hanuman prayer in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward service through simple, practical actions.",
      "discussionPrompt": "How can you connect strength to service in daily routines?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "When can your strength help someone else today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about hanuman prayer with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Hanuman Prayer Meaning: Strength in Service. The meaning is power with humility and service-minded action. The child helps a teammate who fell instead of celebrating alone. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-015",
    "storyId": "shloka-mantra-meaning-exp-v1-015",
    "slug": "shloka-mantra-meaning-exp-v1-015",
    "title": "Krishna Smarana Meaning: Joy With Responsibility",
    "shortTitle": "Krishna Smarana Meaning",
    "summary": "It means play with heart, but keep promises and care for others.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 15,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Joy",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A parent shares a short remembrance and explains joy should also include responsibility."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It means play with heart, but keep promises and care for others."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child finishes chores before playtime without reminders."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What promise will you keep today before play?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of krishna remembrance in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward joy through simple, practical actions.",
      "discussionPrompt": "How do you balance joy and responsibility at home?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What promise will you keep today before play?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about krishna remembrance with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Krishna Smarana Meaning: Joy With Responsibility. It means play with heart, but keep promises and care for others. The child finishes chores before playtime without reminders. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-016",
    "storyId": "shloka-mantra-meaning-exp-v1-016",
    "slug": "shloka-mantra-meaning-exp-v1-016",
    "title": "Shivoham (Child-Safe) Meaning: Quiet Dignity and Self-Respect",
    "shortTitle": "Shivoham (Child-Safe) Meaning",
    "summary": "The meaning supports self-respect without pride over others.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 16,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Self Respect",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A parent adapts the idea gently: you carry dignity and should act with integrity."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning supports self-respect without pride over others."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child apologizes for harsh words and repairs the moment."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What action today will match your best self?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of shivoham in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward self respect through simple, practical actions.",
      "discussionPrompt": "How can self-respect be taught as responsibility, not superiority?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What action today will match your best self?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about shivoham with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Shivoham (Child-Safe) Meaning: Quiet Dignity and Self-Respect. The meaning supports self-respect without pride over others. The child apologizes for harsh words and repairs the moment. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-017",
    "storyId": "shloka-mantra-meaning-exp-v1-017",
    "slug": "shloka-mantra-meaning-exp-v1-017",
    "title": "Annapurna Prayer Meaning: Gratitude Before Meals",
    "shortTitle": "Annapurna Prayer Meaning",
    "summary": "The meaning builds gratitude, non-waste, and care for shared resources.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 17,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Gratitude",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "At mealtime, the family pauses to thank everyone who helped bring food."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning builds gratitude, non-waste, and care for shared resources."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child serves a small portion first and avoids wasting food."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What is one way you can show gratitude for food today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of annapurna prayer in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward gratitude through simple, practical actions.",
      "discussionPrompt": "How can meal prayers support mindful eating habits?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What is one way you can show gratitude for food today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about annapurna prayer with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Annapurna Prayer Meaning: Gratitude Before Meals. The meaning builds gratitude, non-waste, and care for shared resources. The child serves a small portion first and avoids wasting food. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-018",
    "storyId": "shloka-mantra-meaning-exp-v1-018",
    "slug": "shloka-mantra-meaning-exp-v1-018",
    "title": "Deepa Jyoti Meaning: Lamp of Learning",
    "shortTitle": "Deepa Jyoti Meaning",
    "summary": "The meaning links light with focus, clarity, and peaceful effort.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 18,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "During evening study, a child watches a lamp and remembers learning needs attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning links light with focus, clarity, and peaceful effort."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child keeps one task open and puts other distractions away."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What helps your attention stay bright while studying?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of deepa jyoti in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward focus through simple, practical actions.",
      "discussionPrompt": "How can home study spaces reinforce calm concentration?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What helps your attention stay bright while studying?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about deepa jyoti with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Deepa Jyoti Meaning: Lamp of Learning. The meaning links light with focus, clarity, and peaceful effort. The child keeps one task open and puts other distractions away. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-019",
    "storyId": "shloka-mantra-meaning-exp-v1-019",
    "slug": "shloka-mantra-meaning-exp-v1-019",
    "title": "Bhoomi Pranam Meaning: Respect for Earth",
    "shortTitle": "Bhoomi Pranam Meaning",
    "summary": "The meaning encourages ecological respect and careful use of nature.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 19,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "Before stepping outside, a parent teaches gratitude for the ground that supports us."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning encourages ecological respect and careful use of nature."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child switches off an unused tap and closes it fully."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one action shows respect for Earth today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of bhoomi pranam in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward respect through simple, practical actions.",
      "discussionPrompt": "How can this meaning shape environmental habits at home?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one action shows respect for Earth today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about bhoomi pranam with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Bhoomi Pranam Meaning: Respect for Earth. The meaning encourages ecological respect and careful use of nature. The child switches off an unused tap and closes it fully. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-020",
    "storyId": "shloka-mantra-meaning-exp-v1-020",
    "slug": "shloka-mantra-meaning-exp-v1-020",
    "title": "Namaste Meaning: Seeing Goodness in Others",
    "shortTitle": "Namaste Meaning",
    "summary": "The meaning encourages respectful greetings and gentle speech.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 20,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Respect",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child asks what namaste means; a parent explains it as honoring goodness in each person."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning encourages respectful greetings and gentle speech."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child greets a new classmate kindly."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "Who can you greet with extra kindness today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of namaste in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward respect through simple, practical actions.",
      "discussionPrompt": "How can greetings become moments of inclusion for children?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "Who can you greet with extra kindness today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about namaste with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Namaste Meaning: Seeing Goodness in Others. The meaning encourages respectful greetings and gentle speech. The child greets a new classmate kindly. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-021",
    "storyId": "shloka-mantra-meaning-exp-v1-021",
    "slug": "shloka-mantra-meaning-exp-v1-021",
    "title": "Maitri Prayer Meaning: Friendship Without Exclusion",
    "shortTitle": "Maitri Prayer Meaning",
    "summary": "It means include others and avoid cliques or hurtful exclusion.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 21,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Friendship",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "At school pickup, a parent teaches a short friendship prayer."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "It means include others and avoid cliques or hurtful exclusion."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child invites a quiet classmate into a game."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "Who can you include today so they feel welcome?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of maitri prayer in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward friendship through simple, practical actions.",
      "discussionPrompt": "How can you coach inclusion when social groups form?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "Who can you include today so they feel welcome?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about maitri prayer with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Maitri Prayer Meaning: Friendship Without Exclusion. It means include others and avoid cliques or hurtful exclusion. The child invites a quiet classmate into a game. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-022",
    "storyId": "shloka-mantra-meaning-exp-v1-022",
    "slug": "shloka-mantra-meaning-exp-v1-022",
    "title": "Dhyana Shloka Meaning: Attention Before Action",
    "shortTitle": "Dhyana Shloka Meaning",
    "summary": "The meaning is simple: calm attention improves both learning and behavior.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 22,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Focus",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "Before art class, a child learns to settle attention before beginning."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is simple: calm attention improves both learning and behavior."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child looks at instructions fully before starting the activity."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What changes when you pause before acting?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of dhyana shloka in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward focus through simple, practical actions.",
      "discussionPrompt": "How can brief centering moments reduce impulsive mistakes?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What changes when you pause before acting?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about dhyana shloka with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Dhyana Shloka Meaning: Attention Before Action. The meaning is simple: calm attention improves both learning and behavior. The child looks at instructions fully before starting the activity. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-023",
    "storyId": "shloka-mantra-meaning-exp-v1-023",
    "slug": "shloka-mantra-meaning-exp-v1-023",
    "title": "Bhaja Govindam (Child-Safe) Meaning: Choose What Truly Matters",
    "shortTitle": "Bhaja Govindam (Child-Safe) Meaning",
    "summary": "The meaning is to value goodness, learning, and devotion over ego.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 23,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Wisdom",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A parent gives a child-safe interpretation: do not chase only praise or comparison."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is to value goodness, learning, and devotion over ego."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child congratulates a friend who scored higher."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What matters more than winning in your day today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of bhaja govindam in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward wisdom through simple, practical actions.",
      "discussionPrompt": "How can this message reduce comparison anxiety in children?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What matters more than winning in your day today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about bhaja govindam with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Bhaja Govindam (Child-Safe) Meaning: Choose What Truly Matters. The meaning is to value goodness, learning, and devotion over ego. The child congratulates a friend who scored higher. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-024",
    "storyId": "shloka-mantra-meaning-exp-v1-024",
    "slug": "shloka-mantra-meaning-exp-v1-024",
    "title": "Durga Prayer Meaning: Brave Heart, Gentle Hands",
    "shortTitle": "Durga Prayer Meaning",
    "summary": "The meaning highlights courage joined with care and self-control.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 24,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Bravery",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child learns bravery can be protective and compassionate, not aggressive."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning highlights courage joined with care and self-control."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child stands up for a friend using respectful words."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "How can you be brave and gentle at the same time today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of durga prayer in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward bravery through simple, practical actions.",
      "discussionPrompt": "How do you teach assertiveness without harshness?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "How can you be brave and gentle at the same time today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about durga prayer with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Durga Prayer Meaning: Brave Heart, Gentle Hands. The meaning highlights courage joined with care and self-control. The child stands up for a friend using respectful words. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-025",
    "storyId": "shloka-mantra-meaning-exp-v1-025",
    "slug": "shloka-mantra-meaning-exp-v1-025",
    "title": "Surya Gratitude Meaning: Start the Day With Purpose",
    "shortTitle": "Surya Gratitude Meaning",
    "summary": "The meaning encourages purposeful routines and thankful beginnings.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 25,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Purpose",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "In the morning sun, a parent explains gratitude for energy and a fresh start."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning encourages purposeful routines and thankful beginnings."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child writes one intention for the day before leaving home."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What intention will guide your day with kindness?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of surya gratitude in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward purpose through simple, practical actions.",
      "discussionPrompt": "How can families create meaningful morning intentions?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What intention will guide your day with kindness?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about surya gratitude with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "qa_ready",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "qa_ready",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "qa_ready",
    "audioStatus": "script_ready",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure.",
    "audioScript": {
      "narrationScript": "Surya Gratitude Meaning: Start the Day With Purpose. The meaning encourages purposeful routines and thankful beginnings. The child writes one intention for the day before leaving home. Reflect together with gratitude and calm understanding.",
      "voiceDirection": "Warm and respectful.",
      "pronunciationNotes": "No scoring; focus on understanding meaning.",
      "pacingNotes": "Short pauses for parent-child reflection.",
      "audioReadinessIntent": "ready"
    }
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-026",
    "storyId": "shloka-mantra-meaning-exp-v1-026",
    "slug": "shloka-mantra-meaning-exp-v1-026",
    "title": "Sacred Meaning Reflection 01",
    "shortTitle": "Sacred Meaning Reflection 01",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 26,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-027",
    "storyId": "shloka-mantra-meaning-exp-v1-027",
    "slug": "shloka-mantra-meaning-exp-v1-027",
    "title": "Sacred Meaning Reflection 02",
    "shortTitle": "Sacred Meaning Reflection 02",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 27,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-028",
    "storyId": "shloka-mantra-meaning-exp-v1-028",
    "slug": "shloka-mantra-meaning-exp-v1-028",
    "title": "Sacred Meaning Reflection 03",
    "shortTitle": "Sacred Meaning Reflection 03",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 28,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-029",
    "storyId": "shloka-mantra-meaning-exp-v1-029",
    "slug": "shloka-mantra-meaning-exp-v1-029",
    "title": "Sacred Meaning Reflection 04",
    "shortTitle": "Sacred Meaning Reflection 04",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 29,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-030",
    "storyId": "shloka-mantra-meaning-exp-v1-030",
    "slug": "shloka-mantra-meaning-exp-v1-030",
    "title": "Sacred Meaning Reflection 05",
    "shortTitle": "Sacred Meaning Reflection 05",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 30,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-031",
    "storyId": "shloka-mantra-meaning-exp-v1-031",
    "slug": "shloka-mantra-meaning-exp-v1-031",
    "title": "Sacred Meaning Reflection 06",
    "shortTitle": "Sacred Meaning Reflection 06",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 31,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-032",
    "storyId": "shloka-mantra-meaning-exp-v1-032",
    "slug": "shloka-mantra-meaning-exp-v1-032",
    "title": "Sacred Meaning Reflection 07",
    "shortTitle": "Sacred Meaning Reflection 07",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 32,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-033",
    "storyId": "shloka-mantra-meaning-exp-v1-033",
    "slug": "shloka-mantra-meaning-exp-v1-033",
    "title": "Sacred Meaning Reflection 08",
    "shortTitle": "Sacred Meaning Reflection 08",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 33,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-034",
    "storyId": "shloka-mantra-meaning-exp-v1-034",
    "slug": "shloka-mantra-meaning-exp-v1-034",
    "title": "Sacred Meaning Reflection 09",
    "shortTitle": "Sacred Meaning Reflection 09",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 34,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-035",
    "storyId": "shloka-mantra-meaning-exp-v1-035",
    "slug": "shloka-mantra-meaning-exp-v1-035",
    "title": "Sacred Meaning Reflection 10",
    "shortTitle": "Sacred Meaning Reflection 10",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 35,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-036",
    "storyId": "shloka-mantra-meaning-exp-v1-036",
    "slug": "shloka-mantra-meaning-exp-v1-036",
    "title": "Sacred Meaning Reflection 11",
    "shortTitle": "Sacred Meaning Reflection 11",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 36,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-037",
    "storyId": "shloka-mantra-meaning-exp-v1-037",
    "slug": "shloka-mantra-meaning-exp-v1-037",
    "title": "Sacred Meaning Reflection 12",
    "shortTitle": "Sacred Meaning Reflection 12",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 37,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-038",
    "storyId": "shloka-mantra-meaning-exp-v1-038",
    "slug": "shloka-mantra-meaning-exp-v1-038",
    "title": "Sacred Meaning Reflection 13",
    "shortTitle": "Sacred Meaning Reflection 13",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 38,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-039",
    "storyId": "shloka-mantra-meaning-exp-v1-039",
    "slug": "shloka-mantra-meaning-exp-v1-039",
    "title": "Sacred Meaning Reflection 14",
    "shortTitle": "Sacred Meaning Reflection 14",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 39,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-040",
    "storyId": "shloka-mantra-meaning-exp-v1-040",
    "slug": "shloka-mantra-meaning-exp-v1-040",
    "title": "Sacred Meaning Reflection 15",
    "shortTitle": "Sacred Meaning Reflection 15",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 40,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-041",
    "storyId": "shloka-mantra-meaning-exp-v1-041",
    "slug": "shloka-mantra-meaning-exp-v1-041",
    "title": "Sacred Meaning Reflection 16",
    "shortTitle": "Sacred Meaning Reflection 16",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 41,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-042",
    "storyId": "shloka-mantra-meaning-exp-v1-042",
    "slug": "shloka-mantra-meaning-exp-v1-042",
    "title": "Sacred Meaning Reflection 17",
    "shortTitle": "Sacred Meaning Reflection 17",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 42,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-043",
    "storyId": "shloka-mantra-meaning-exp-v1-043",
    "slug": "shloka-mantra-meaning-exp-v1-043",
    "title": "Sacred Meaning Reflection 18",
    "shortTitle": "Sacred Meaning Reflection 18",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 43,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-044",
    "storyId": "shloka-mantra-meaning-exp-v1-044",
    "slug": "shloka-mantra-meaning-exp-v1-044",
    "title": "Sacred Meaning Reflection 19",
    "shortTitle": "Sacred Meaning Reflection 19",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 44,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-045",
    "storyId": "shloka-mantra-meaning-exp-v1-045",
    "slug": "shloka-mantra-meaning-exp-v1-045",
    "title": "Sacred Meaning Reflection 20",
    "shortTitle": "Sacred Meaning Reflection 20",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 45,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-046",
    "storyId": "shloka-mantra-meaning-exp-v1-046",
    "slug": "shloka-mantra-meaning-exp-v1-046",
    "title": "Sacred Meaning Reflection 21",
    "shortTitle": "Sacred Meaning Reflection 21",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 46,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-047",
    "storyId": "shloka-mantra-meaning-exp-v1-047",
    "slug": "shloka-mantra-meaning-exp-v1-047",
    "title": "Sacred Meaning Reflection 22",
    "shortTitle": "Sacred Meaning Reflection 22",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 47,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-048",
    "storyId": "shloka-mantra-meaning-exp-v1-048",
    "slug": "shloka-mantra-meaning-exp-v1-048",
    "title": "Sacred Meaning Reflection 23",
    "shortTitle": "Sacred Meaning Reflection 23",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 48,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-049",
    "storyId": "shloka-mantra-meaning-exp-v1-049",
    "slug": "shloka-mantra-meaning-exp-v1-049",
    "title": "Sacred Meaning Reflection 24",
    "shortTitle": "Sacred Meaning Reflection 24",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 49,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-050",
    "storyId": "shloka-mantra-meaning-exp-v1-050",
    "slug": "shloka-mantra-meaning-exp-v1-050",
    "title": "Sacred Meaning Reflection 25",
    "shortTitle": "Sacred Meaning Reflection 25",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 50,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-051",
    "storyId": "shloka-mantra-meaning-exp-v1-051",
    "slug": "shloka-mantra-meaning-exp-v1-051",
    "title": "Sacred Meaning Reflection 26",
    "shortTitle": "Sacred Meaning Reflection 26",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 51,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-052",
    "storyId": "shloka-mantra-meaning-exp-v1-052",
    "slug": "shloka-mantra-meaning-exp-v1-052",
    "title": "Sacred Meaning Reflection 27",
    "shortTitle": "Sacred Meaning Reflection 27",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 52,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-053",
    "storyId": "shloka-mantra-meaning-exp-v1-053",
    "slug": "shloka-mantra-meaning-exp-v1-053",
    "title": "Sacred Meaning Reflection 28",
    "shortTitle": "Sacred Meaning Reflection 28",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 53,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-054",
    "storyId": "shloka-mantra-meaning-exp-v1-054",
    "slug": "shloka-mantra-meaning-exp-v1-054",
    "title": "Sacred Meaning Reflection 29",
    "shortTitle": "Sacred Meaning Reflection 29",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 54,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-055",
    "storyId": "shloka-mantra-meaning-exp-v1-055",
    "slug": "shloka-mantra-meaning-exp-v1-055",
    "title": "Sacred Meaning Reflection 30",
    "shortTitle": "Sacred Meaning Reflection 30",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 55,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-056",
    "storyId": "shloka-mantra-meaning-exp-v1-056",
    "slug": "shloka-mantra-meaning-exp-v1-056",
    "title": "Sacred Meaning Reflection 31",
    "shortTitle": "Sacred Meaning Reflection 31",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 56,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-057",
    "storyId": "shloka-mantra-meaning-exp-v1-057",
    "slug": "shloka-mantra-meaning-exp-v1-057",
    "title": "Sacred Meaning Reflection 32",
    "shortTitle": "Sacred Meaning Reflection 32",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 57,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-058",
    "storyId": "shloka-mantra-meaning-exp-v1-058",
    "slug": "shloka-mantra-meaning-exp-v1-058",
    "title": "Sacred Meaning Reflection 33",
    "shortTitle": "Sacred Meaning Reflection 33",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 58,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-059",
    "storyId": "shloka-mantra-meaning-exp-v1-059",
    "slug": "shloka-mantra-meaning-exp-v1-059",
    "title": "Sacred Meaning Reflection 34",
    "shortTitle": "Sacred Meaning Reflection 34",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 59,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-060",
    "storyId": "shloka-mantra-meaning-exp-v1-060",
    "slug": "shloka-mantra-meaning-exp-v1-060",
    "title": "Sacred Meaning Reflection 35",
    "shortTitle": "Sacred Meaning Reflection 35",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 60,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-061",
    "storyId": "shloka-mantra-meaning-exp-v1-061",
    "slug": "shloka-mantra-meaning-exp-v1-061",
    "title": "Sacred Meaning Reflection 36",
    "shortTitle": "Sacred Meaning Reflection 36",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 61,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-062",
    "storyId": "shloka-mantra-meaning-exp-v1-062",
    "slug": "shloka-mantra-meaning-exp-v1-062",
    "title": "Sacred Meaning Reflection 37",
    "shortTitle": "Sacred Meaning Reflection 37",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 62,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-063",
    "storyId": "shloka-mantra-meaning-exp-v1-063",
    "slug": "shloka-mantra-meaning-exp-v1-063",
    "title": "Sacred Meaning Reflection 38",
    "shortTitle": "Sacred Meaning Reflection 38",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 63,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-064",
    "storyId": "shloka-mantra-meaning-exp-v1-064",
    "slug": "shloka-mantra-meaning-exp-v1-064",
    "title": "Sacred Meaning Reflection 39",
    "shortTitle": "Sacred Meaning Reflection 39",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 64,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-065",
    "storyId": "shloka-mantra-meaning-exp-v1-065",
    "slug": "shloka-mantra-meaning-exp-v1-065",
    "title": "Sacred Meaning Reflection 40",
    "shortTitle": "Sacred Meaning Reflection 40",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 65,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-066",
    "storyId": "shloka-mantra-meaning-exp-v1-066",
    "slug": "shloka-mantra-meaning-exp-v1-066",
    "title": "Sacred Meaning Reflection 41",
    "shortTitle": "Sacred Meaning Reflection 41",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 66,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-067",
    "storyId": "shloka-mantra-meaning-exp-v1-067",
    "slug": "shloka-mantra-meaning-exp-v1-067",
    "title": "Sacred Meaning Reflection 42",
    "shortTitle": "Sacred Meaning Reflection 42",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 67,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-068",
    "storyId": "shloka-mantra-meaning-exp-v1-068",
    "slug": "shloka-mantra-meaning-exp-v1-068",
    "title": "Sacred Meaning Reflection 43",
    "shortTitle": "Sacred Meaning Reflection 43",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 68,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-069",
    "storyId": "shloka-mantra-meaning-exp-v1-069",
    "slug": "shloka-mantra-meaning-exp-v1-069",
    "title": "Sacred Meaning Reflection 44",
    "shortTitle": "Sacred Meaning Reflection 44",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 69,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-070",
    "storyId": "shloka-mantra-meaning-exp-v1-070",
    "slug": "shloka-mantra-meaning-exp-v1-070",
    "title": "Sacred Meaning Reflection 45",
    "shortTitle": "Sacred Meaning Reflection 45",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 70,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-071",
    "storyId": "shloka-mantra-meaning-exp-v1-071",
    "slug": "shloka-mantra-meaning-exp-v1-071",
    "title": "Sacred Meaning Reflection 46",
    "shortTitle": "Sacred Meaning Reflection 46",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 71,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-072",
    "storyId": "shloka-mantra-meaning-exp-v1-072",
    "slug": "shloka-mantra-meaning-exp-v1-072",
    "title": "Sacred Meaning Reflection 47",
    "shortTitle": "Sacred Meaning Reflection 47",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 72,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-073",
    "storyId": "shloka-mantra-meaning-exp-v1-073",
    "slug": "shloka-mantra-meaning-exp-v1-073",
    "title": "Sacred Meaning Reflection 48",
    "shortTitle": "Sacred Meaning Reflection 48",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 73,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-074",
    "storyId": "shloka-mantra-meaning-exp-v1-074",
    "slug": "shloka-mantra-meaning-exp-v1-074",
    "title": "Sacred Meaning Reflection 49",
    "shortTitle": "Sacred Meaning Reflection 49",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 74,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  },
  {
    "id": "shloka-mantra-meaning-exp-v1-075",
    "storyId": "shloka-mantra-meaning-exp-v1-075",
    "slug": "shloka-mantra-meaning-exp-v1-075",
    "title": "Sacred Meaning Reflection 50",
    "shortTitle": "Sacred Meaning Reflection 50",
    "summary": "The meaning is explained in simple language so children understand values in daily life.",
    "sourceTradition": "Shloka and Mantra Meaning (Child-Safe)",
    "sourceTextOrTraditionNote": "Child-safe meaning adaptation with parent-guided context and sacred respect.",
    "storyPackId": "shloka-mantra-meaning-expansion-pack-v1",
    "journeyId": "shloka-mantra-meaning-journey-v1",
    "journeyOrder": 75,
    "ageBands": [
      "6-8",
      "9-12"
    ],
    "recommendedAgeBand": "6-8",
    "durationMinutes": 4,
    "primaryValue": "Calm",
    "secondaryValues": [
      "Devotion",
      "Kindness"
    ],
    "characters": [
      "Child",
      "Parent"
    ],
    "panels": [
      {
        "id": "panel-1",
        "title": "Sacred Meaning Context",
        "text": "A child and parent revisit a short sacred line with respectful attention."
      },
      {
        "id": "panel-2",
        "title": "Simple Child Meaning",
        "text": "The meaning is explained in simple language so children understand values in daily life."
      },
      {
        "id": "panel-3",
        "title": "Daily Reflection Action",
        "text": "The child chooses one gentle action connected to the day’s value."
      },
      {
        "id": "panel-4",
        "title": "Family Reflection",
        "text": "What one calm and kind action will you choose today?"
      }
    ],
    "parentNote": {
      "sourceContext": "This entry explains the meaning focus of daily prayer meaning in child-safe language with sacred respect.",
      "valueExplained": "Children are guided toward calm through simple, practical actions.",
      "discussionPrompt": "Which small family routine can reinforce this value today?",
      "practicePrompt": "Pause, breathe, and choose one respectful action.",
      "cautionNote": "No ritual pressure, no performance framing, and no fear/shame language."
    },
    "reflectionPrompt": "What one calm and kind action will you choose today?",
    "ritualPrompt": "Take three calm breaths and share one gratitude thought.",
    "completionBlessing": "May understanding grow with calm, kindness, and devotion.",
    "sacredRespectLevel": "sacred_story",
    "illustrationPrompt": {
      "sceneSummary": "Parent-guided conversation about daily prayer meaning with warm home setting.",
      "styleGuidance": "Warm, respectful, child-safe.",
      "culturalGuardrails": [
        "Respect sacred traditions",
        "No mockery",
        "No fear-heavy framing"
      ],
      "deityTreatment": "Reverent and subtle",
      "avoidList": [
        "ritual pressure",
        "pronunciation scoring",
        "fear or shame"
      ]
    },
    "audioMetadata": {
      "audioAvailable": false,
      "voiceOptions": [],
      "narrationScriptStatus": "indexed",
      "preferredVoiceStyle": "warm_storytelling",
      "pacing": "slow",
      "noMicRequired": true
    },
    "status": "indexed",
    "primaryCategoryId": "shloka_mantra_meanings",
    "secondaryCategoryIds": [
      "shloka_mantra_meanings"
    ],
    "readinessStatus": "metadata_only",
    "audioStatus": "script_needed",
    "journeyStatus": "journey_ordered",
    "sacredRespectNotes": "Meaning narration only; no chanting performance or ritual pressure."
  }
];

export const shlokaMantraMeaningExpansionPackV1StoryPack: StoryPack = { id: 'shloka-mantra-meaning-expansion-pack-v1', title: 'Shloka + Mantra Meaning Expansion Pack v1', childFacingTitle: 'Shloka and Mantra Meaning Journey', description: 'Child-safe sacred meaning pack focused on gratitude, calm, devotion, and parent-guided understanding.', sourceTradition: 'Shloka and Mantra Meaning (Child-Safe)', category: 'values', status: 'indexed', storyIds: shlokaMantraMeaningExpansionPackV1Stories.map((s) => s.id), recommendedAgeBands: ['6-8', '9-12'], contentSafetyNotes: ['Meaning-first only; no chanting performance mechanics.', 'No backend, no mic capture, no TTS, no audio playback feature changes.'], sacredRespectNotes: ['Sacred content is presented with warmth, restraint, and parent trust.'] };

export const shlokaMantraMeaningExpansionPackV1Journey: DharmaJourney = { id: 'shloka-mantra-meaning-journey-v1', title: 'Shloka + Mantra Meaning Journey v1', childFacingTitle: 'Shloka Meaning Journey', description: 'Parent-guided sacred meaning journey with child-safe reflections and calm practice.', sourceTradition: 'Shloka and Mantra Meaning (Child-Safe)', recommendedAgeBands: ['6-8', '9-12'], storyIds: shlokaMantraMeaningExpansionPackV1Stories.map((s) => s.id), estimatedCompletionWeeks: 8, status: 'indexed', journeyType: 'guided_path' };
