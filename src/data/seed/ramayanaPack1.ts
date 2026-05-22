import type { Story } from '@/types/contentModel';

export const ramayanaPack1Stories: Story[] = [
  {
    id: 'ramayana-pack1-ramas-kind-promise',
    slug: 'ramas-kind-promise',
    title: 'Rama’s Kind Promise',
    shortTitle: 'Kind Promise',
    summary: 'Rama keeps a gentle promise to care for everyone with steady kindness.',
    sourceTradition: 'Ramayana',
    sourceTextOrTraditionNote: 'Child-safe retelling inspired by the Ramayana’s values of dharma, care, and integrity.',
    storyPackId: 'ramayana-journey-pack-1',
    journeyId: 'ramayana-journey-pack-1',
    journeyOrder: 1,
    ageBands: ['3-5', '6-8'],
    recommendedAgeBand: '6-8',
    durationMinutes: 6,
    primaryValue: 'Keeping Promises',
    secondaryValues: ['Kindness', 'Responsibility'],
    characters: ['Rama', 'Family elders', 'Citizens'],
    panels: [
      { id: 'p1', title: 'A Quiet Morning', text: 'Rama bowed to the elders and listened with calm attention.' },
      { id: 'p2', title: 'A Promise of Care', text: 'He promised to care for people with fairness, patience, and a kind heart.' },
      { id: 'p3', title: 'Small Kind Actions', text: 'Rama greeted everyone warmly and helped solve worries gently.' },
      { id: 'p4', title: 'Promise Kept Daily', text: 'Day by day, he showed that true promises are kept through actions.' }
    ],
    parentNote: {
      sourceContext: 'Introduces Rama as a model of steady dharma through child-safe daily choices.',
      valueExplained: 'Children learn trust when promises are matched by kind, consistent behavior.',
      discussionPrompt: 'What is one small promise our family can keep today?',
      practicePrompt: 'Choose one gentle family promise and complete it together by bedtime.',
      cautionNote: 'Keep tone invitational; avoid fear, shame, or punishment framing.'
    },
    reflectionPrompt: 'How can we show kindness when we make a promise?',
    ritualPrompt: 'Place a hand on your heart and say, “I keep kind promises,” one time together.',
    completionBlessing: 'May your promises be gentle, steady, and full of care.',
    sacredRespectLevel: 'sacred_story',
    illustrationPrompt: {
      sceneSummary: 'Rama greeting families in a peaceful courtyard with respectful posture.',
      styleGuidance: 'Warm colors, serene expressions, child-safe devotional tone.',
      culturalGuardrails: ['Use respectful traditional attire.', 'Avoid caricature or parody of sacred figures.'],
      deityTreatment: 'Sacred character shown with restraint and reverence.',
      avoidList: ['No battle imagery.', 'No comic exaggeration.', 'No gamified UI motifs.']
    },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female', 'warm-indian-male'], narrationScriptStatus: 'qa_ready', preferredVoiceStyle: 'warm-indian', pacing: 'slow', noMicRequired: true },
    status: 'qa_ready'
  },
  {
    id: 'ramayana-pack1-sitas-garden-of-care', slug: 'sitas-garden-of-care', title: 'Sita’s Garden of Care', shortTitle: 'Garden of Care', summary: 'Sita tends a garden with gentle attention, showing care for living things.', sourceTradition: 'Ramayana', sourceTextOrTraditionNote: 'Child-safe values retelling honoring Sita’s compassion and steadiness.', storyPackId: 'ramayana-journey-pack-1', journeyId: 'ramayana-journey-pack-1', journeyOrder: 2, ageBands: ['3-5', '6-8'], recommendedAgeBand: '3-5', durationMinutes: 6, primaryValue: 'Care', secondaryValues: ['Compassion', 'Patience'], characters: ['Sita', 'Children', 'Garden birds'],
    panels: [
      { id: 'p1', title: 'Morning in the Garden', text: 'Sita watered young plants and noticed each leaf with loving attention.' },
      { id: 'p2', title: 'Gentle Hands', text: 'She taught children to touch flowers softly and protect tiny sprouts.' },
      { id: 'p3', title: 'Sharing the Harvest', text: 'When fruits ripened, Sita shared them so everyone felt included.' },
      { id: 'p4', title: 'Care Makes Beauty Grow', text: 'The garden bloomed because care was practiced every day.' }
    ],
    parentNote: { sourceContext: 'Highlights Sita as a sacred exemplar of nurturing care and composure.', valueExplained: 'Care becomes easier for children when modeled through simple repeated actions.', discussionPrompt: 'How do we show care for plants, pets, or people at home?', practicePrompt: 'Invite your child to water one plant and thank it quietly.', cautionNote: 'Avoid perfection pressure; celebrate effort and gentleness.' },
    reflectionPrompt: 'What grows when we care gently every day?', ritualPrompt: 'Offer one sip of water to a plant and say thank you together.', completionBlessing: 'May your caring hands help goodness grow around you.', sacredRespectLevel: 'sacred_story',
    illustrationPrompt: { sceneSummary: 'Sita and children tending a peaceful garden with flowers and birds.', styleGuidance: 'Soft natural palette, calm expressions, respectful sacred framing.', culturalGuardrails: ['Keep sacred figures dignified.', 'Use culturally grounded environment details.'], deityTreatment: 'Sacred character rendered with grace and restraint.', avoidList: ['No slapstick expressions.', 'No conflict-heavy imagery.', 'No reward counters.'] },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female', 'warm-indian-male'], narrationScriptStatus: 'qa_ready', preferredVoiceStyle: 'warm-indian', pacing: 'steady', noMicRequired: true },
    status: 'qa_ready'
  },
  {
    id: 'ramayana-pack1-lakshmanas-loving-service', slug: 'lakshmanas-loving-service', title: 'Lakshmana’s Loving Service', shortTitle: 'Loving Service', summary: 'Lakshmana serves with humility, care, and alert kindness for his family.', sourceTradition: 'Ramayana', sourceTextOrTraditionNote: 'Child-safe retelling of Lakshmana’s devoted service through everyday help.', storyPackId: 'ramayana-journey-pack-1', journeyId: 'ramayana-journey-pack-1', journeyOrder: 3, ageBands: ['6-8', 'family'], recommendedAgeBand: '6-8', durationMinutes: 7, primaryValue: 'Service', secondaryValues: ['Loyalty', 'Humility'], characters: ['Lakshmana', 'Rama', 'Sita'],
    panels: [
      { id: 'p1', title: 'Watching With Care', text: 'Lakshmana stayed attentive, looking for ways to help before being asked.' },
      { id: 'p2', title: 'Helpful Work', text: 'He prepared resting spaces and gathered what the family needed.' },
      { id: 'p3', title: 'Serving with Joy', text: 'Lakshmana’s service came from love, not from wanting praise.' },
      { id: 'p4', title: 'Strong Through Service', text: 'Everyone felt supported because his care was steady and sincere.' }
    ],
    parentNote: { sourceContext: 'Frames seva (service) in a developmentally gentle, non-punitive way.', valueExplained: 'Children learn belonging when they contribute meaningful small acts to family life.', discussionPrompt: 'What is one helpful act we can do without being asked?', practicePrompt: 'Pick one family helper task and do it with a smile together.', cautionNote: 'Do not frame service as obedience fear; frame it as love in action.' },
    reflectionPrompt: 'How can helping others make our home feel calmer?', ritualPrompt: 'Before cleanup, say, “May my hands be helpful,” and begin one shared task.', completionBlessing: 'May your loving service bring peace to every space you enter.', sacredRespectLevel: 'sacred_story',
    illustrationPrompt: { sceneSummary: 'Lakshmana respectfully preparing a simple resting area near nature.', styleGuidance: 'Grounded, peaceful composition with gentle movement.', culturalGuardrails: ['Keep posture respectful and composed.', 'Avoid theatrical or comic distortion.'], deityTreatment: 'Sacred characters portrayed with dignity and modesty.', avoidList: ['No dramatic weapon focus.', 'No war scene cues.', 'No gamification symbols.'] },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female', 'warm-indian-male'], narrationScriptStatus: 'qa_ready', preferredVoiceStyle: 'warm-indian', pacing: 'medium', noMicRequired: true },
    status: 'qa_ready'
  },
  {
    id: 'ramayana-pack1-hanuman-listens-before-he-leaps', slug: 'hanuman-listens-before-he-leaps', title: 'Hanuman Listens Before He Leaps', shortTitle: 'Listen Then Leap', summary: 'Hanuman pauses to listen carefully before taking action, showing wise strength.', sourceTradition: 'Ramayana', sourceTextOrTraditionNote: 'Child-safe values retelling emphasizing discernment and respectful listening.', storyPackId: 'ramayana-journey-pack-1', journeyId: 'ramayana-journey-pack-1', journeyOrder: 4, ageBands: ['6-8', 'family'], recommendedAgeBand: '6-8', durationMinutes: 7, primaryValue: 'Listening', secondaryValues: ['Wisdom', 'Self-control'], characters: ['Hanuman', 'Elders', 'Friends'],
    panels: [
      { id: 'p1', title: 'Ready to Help', text: 'Hanuman felt strong and eager to help right away.' },
      { id: 'p2', title: 'A Pause to Listen', text: 'Before moving, he listened carefully to guidance from wise elders.' },
      { id: 'p3', title: 'Clear and Kind Action', text: 'Because he listened first, his action was thoughtful and helpful.' },
      { id: 'p4', title: 'Strength with Wisdom', text: 'Hanuman smiled, knowing true strength includes patience and listening.' }
    ],
    parentNote: { sourceContext: 'Offers Hanuman as a revered model of strength guided by humility and discernment.', valueExplained: 'Listening before acting supports regulation and safer choices in early childhood.', discussionPrompt: 'When can we pause and listen before making a big move?', practicePrompt: 'Practice “pause, listen, choose” during one daily routine.', cautionNote: 'Avoid labeling children as impulsive; emphasize practice and progress.' },
    reflectionPrompt: 'What changes when we listen before we act?', ritualPrompt: 'Take one deep breath and whisper, “I listen with care.”', completionBlessing: 'May your strength always walk together with wisdom.', sacredRespectLevel: 'deity_focal',
    illustrationPrompt: { sceneSummary: 'Hanuman in a respectful stance, listening calmly before action.', styleGuidance: 'Heroic yet gentle tone, child-safe reverence, no comic exaggeration.', culturalGuardrails: ['Honor Hanuman with devotional respect.', 'Avoid parody or playful irreverence.'], deityTreatment: 'Deity-focal presentation with restraint and sacred dignity.', avoidList: ['No slapstick body language.', 'No conflict spectacle.', 'No ranking or reward visuals.'] },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female', 'warm-indian-male'], narrationScriptStatus: 'qa_ready', preferredVoiceStyle: 'warm-indian', pacing: 'steady', noMicRequired: true },
    status: 'qa_ready'
  },
  {
    id: 'ramayana-pack1-a-bridge-built-together', slug: 'a-bridge-built-together', title: 'A Bridge Built Together', shortTitle: 'Bridge Together', summary: 'Many helpers work together to build a bridge through trust, care, and shared effort.', sourceTradition: 'Ramayana', sourceTextOrTraditionNote: 'Child-safe, non-war retelling focused on cooperation and collective seva.', storyPackId: 'ramayana-journey-pack-1', journeyId: 'ramayana-journey-pack-1', journeyOrder: 5, ageBands: ['3-5', '6-8', 'family'], recommendedAgeBand: '6-8', durationMinutes: 8, primaryValue: 'Cooperation', secondaryValues: ['Perseverance', 'Unity'], characters: ['Rama', 'Hanuman', 'Friends and helpers'],
    panels: [
      { id: 'p1', title: 'A Big Task Appears', text: 'The group saw a wide water path and needed a safe way across together.' },
      { id: 'p2', title: 'Each One Brings Something', text: 'Some carried stones, some guided placement, and some encouraged tired friends.' },
      { id: 'p3', title: 'Steady Teamwork', text: 'No one worked alone; each small effort helped the bridge grow.' },
      { id: 'p4', title: 'Together We Cross', text: 'With gratitude and unity, everyone crossed safely on the bridge they built together.' }
    ],
    parentNote: { sourceContext: 'Presents the bridge episode as a collective effort theme, without conflict-heavy framing.', valueExplained: 'Children internalize teamwork when each person has a valued role.', discussionPrompt: 'What small role can each family member take in one shared task?', practicePrompt: 'Do a short family teamwork activity and thank each person’s contribution.', cautionNote: 'Avoid competition language; emphasize cooperation over speed or comparison.' },
    reflectionPrompt: 'Why does shared effort make big tasks feel possible?', ritualPrompt: 'Stand in a circle and say, “Together with care,” before a family task.', completionBlessing: 'May your family build bridges of kindness wherever you go.', sacredRespectLevel: 'sacred_story',
    illustrationPrompt: { sceneSummary: 'Sacred characters and helpers cooperatively building a stone bridge in a calm setting.', styleGuidance: 'Respectful epic tone, bright but grounded palette, child-safe expressions.', culturalGuardrails: ['Keep sacred figures dignified.', 'Depict teamwork, not conflict or fear.'], deityTreatment: 'Sacred figures framed as compassionate leaders.', avoidList: ['No battle scenes.', 'No trauma cues.', 'No game mechanics imagery.'] },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female', 'warm-indian-male'], narrationScriptStatus: 'qa_ready', preferredVoiceStyle: 'warm-indian', pacing: 'steady', noMicRequired: true },
    status: 'qa_ready'
  }
];
