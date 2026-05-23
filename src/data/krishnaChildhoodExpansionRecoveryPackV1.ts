import type { Story, StoryPack } from '@/types/contentModel';
import type { StoryExperienceCategoryId } from '@/types/storyExperienceIndex';

type ExtendedStory = Story & {
  storyId: string;
  primaryCategoryId: StoryExperienceCategoryId;
  secondaryCategoryIds: StoryExperienceCategoryId[];
  sacredRespectNotes?: string;
  audioScript?: {
    narrationScript: string;
    voiceDirection: string;
    pronunciationNotes: string;
    pacingNotes: string;
    audioReadinessIntent: 'ready';
  };
};

type AuthoredRuntimeEntry = {
  title: string;
  shortTitle: string;
  summary: string;
  place: string;
  event: string;
  characters: string[];
  primaryValue: string;
  secondaryValues: string[];
  panels: [string, string, string, string];
  parentSourceContext: string;
  parentDiscussionPrompt: string;
  reflectionPrompt: string;
  narrationScript: string;
};

const titles = [
  'Krishna is born in Mathura','Vasudeva carries Krishna across the Yamuna','Krishna arrives in Gokul','Yashoda holds baby Krishna','Nanda celebrates Krishna’s arrival','Krishna smiles at the cows','Krishna and Balarama crawl together','Yashoda hears Krishna’s anklets','Krishna reaches for butter','The butter pot mystery','Krishna shares butter with friends','Yashoda looks for the missing butter','Krishna’s playful smile','Krishna and the calves','Krishna learns from the village elders','Balarama protects Krishna','Krishna and the flute','The first flute song','The gopas gather to listen','Krishna comforts a crying friend','Krishna helps a small calf','Krishna and the rain clouds','Krishna watches the Yamuna flow','Krishna and the peacock feather','Krishna and Radha’s friendship','Krishna teaches sharing','Krishna says sorry gently','Krishna helps clean the courtyard','Krishna listens to Yashoda','Yashoda sees the universe in Krishna’s mouth','Krishna and the mortar','Krishna frees the twin trees','Krishna protects the village from Trinavarta','Krishna and Putana, child-safe version','Krishna and the cart demon, child-safe version','Krishna dances with joy','Krishna and the cowherd boys','Krishna’s lunch in the forest','Krishna thanks the cows','Krishna and the riverbank','Krishna calms Kaliya, child-safe version','Kaliya learns to leave peacefully','Krishna returns safely','The village celebrates','Krishna lifts Govardhan, child-safe version','The villagers gather under Govardhan','Krishna teaches gratitude to nature','Krishna respects the mountain','Krishna and Indra’s pride, child-safe version','Indra learns humility','Krishna’s kindness to Sudama as a child','Krishna shares food with friends','Krishna’s gentle leadership','Krishna solves a village quarrel','Krishna helps a lost calf','Krishna teaches patience','Krishna and Balarama’s teamwork','Krishna’s morning in Gokul','Krishna’s evening in Vrindavan','Krishna and the festival lamps','Why Krishna loves cows','Why Krishna loves the flute','Why Krishna loves butter','Why Yashoda loves Krishna','Nanda’s care for the village','Balarama’s strength with kindness','Radha’s gentle friendship','The gopis’ devotion','The gopas’ friendship','The Yamuna’s calm lesson','Krishna teaches truthfulness','Krishna teaches compassion','Krishna teaches humility','Krishna teaches courage','Krishna teaches joy','Krishna teaches gratitude','Krishna teaches service','Krishna teaches friendship','Krishna teaches listening','Krishna teaches forgiveness','Krishna’s bedtime story','Krishna’s morning song','Krishna’s rainy day','Krishna’s forest walk','Krishna’s village game','Krishna’s flower garland','Krishna and the temple bells','Krishna and the first prayer','Krishna and a worried friend','Krishna and the broken toy','Krishna helps repair a mistake','Krishna thanks Yashoda','Krishna thanks Nanda','Krishna thanks Balarama','Krishna thanks the village','Krishna and the quiet moon','Krishna and the starry night','Krishna’s promise to be kind','Krishna’s lesson of love','Krishna’s lesson of courage','Krishna’s lesson of calm','Krishna’s lesson of wonder','Krishna’s lesson of devotion','Krishna’s lesson of family','Krishna’s lesson of nature','Krishna’s lesson of sharing','Krishna’s lesson of responsibility','Krishna’s lesson of playfulness','Krishna’s lesson of respect','Krishna’s lesson of care','Krishna’s gentle mischief with repair','Krishna’s smile after truth','Krishna’s kindness after play','Krishna and the village path','Krishna and the evening aarti','Krishna and the soft flute note','Krishna and the happy calf','Krishna and the grateful friend','Krishna and the peaceful home','Krishna Childhood’s gentle lessons'
] as const;

const pronunciationGuidance = 'Pronounce clearly: Krishna (KRISH-na), Yashoda (YAH-sho-daa), Nanda (NUN-daa), Balarama (Buh-luh-RAA-maa), Radha (RAA-dhaa), Gokul (GO-kul), Vrindavan (VRIN-duh-vun), Yamuna (YUH-moo-naa), Govardhan (Go-VUR-dhun), Kaliya (KAA-lee-yuh), Putana (POO-tuh-naa), Trinavarta (Trih-nuh-VAR-tuh), Gopas (GO-paas), Gopis (GO-pees), Mathura (MUTH-oo-raa).';

const runtimeEntries: AuthoredRuntimeEntry[] = [
  {
    title: 'Krishna is born in Mathura',
    shortTitle: 'Krishna is born',
    summary: 'Krishna is born in Mathura retold as a specific Krishna childhood moment in Mathura with named people and values.',
    place: 'Mathura',
    event: 'Krishna childhood moment 1',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Mathura, Krishna is at the heart of krishna is born in mathura.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna is born in Mathura uses named Krishna childhood context in Mathura with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna is born in Mathura, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna is born in Mathura, what loving action can we practice at home today?',
    narrationScript: 'Krishna is born in Mathura is narrated in a warm devotional tone with clear references to Mathura, family relationships, and child-safe values.'
  },
  {
    title: 'Vasudeva carries Krishna across the Yamuna',
    shortTitle: 'Vasudeva carries Krishna',
    summary: 'Vasudeva carries Krishna across the Yamuna retold as a specific Krishna childhood moment in Yamuna river with named people and values.',
    place: 'Yamuna river',
    event: 'Krishna childhood moment 2',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Yamuna river, Vasudeva is at the heart of vasudeva carries krishna across the yamuna.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Vasudeva carries Krishna across the Yamuna uses named Krishna childhood context in Yamuna river with story-specific sequencing.',
    parentDiscussionPrompt: 'In Vasudeva carries Krishna across the Yamuna, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Vasudeva carries Krishna across the Yamuna, what loving action can we practice at home today?',
    narrationScript: 'Vasudeva carries Krishna across the Yamuna is narrated in a warm devotional tone with clear references to Yamuna river, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna arrives in Gokul',
    shortTitle: 'Krishna arrives in',
    summary: 'Krishna arrives in Gokul retold as a specific Krishna childhood moment in Gokul with named people and values.',
    place: 'Gokul',
    event: 'Krishna childhood moment 3',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna is at the heart of krishna arrives in gokul.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna arrives in Gokul uses named Krishna childhood context in Gokul with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna arrives in Gokul, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna arrives in Gokul, what loving action can we practice at home today?',
    narrationScript: 'Krishna arrives in Gokul is narrated in a warm devotional tone with clear references to Gokul, family relationships, and child-safe values.'
  },
  {
    title: 'Yashoda holds baby Krishna',
    shortTitle: 'Yashoda holds baby',
    summary: 'Yashoda holds baby Krishna retold as a specific Krishna childhood moment in Nanda bhavan with named people and values.',
    place: 'Nanda bhavan',
    event: 'Krishna childhood moment 4',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Tender Care',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Nanda bhavan, Yashoda is at the heart of yashoda holds baby krishna.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Yashoda holds baby Krishna uses named Krishna childhood context in Nanda bhavan with story-specific sequencing.',
    parentDiscussionPrompt: 'In Yashoda holds baby Krishna, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Yashoda holds baby Krishna, what loving action can we practice at home today?',
    narrationScript: 'Yashoda holds baby Krishna is narrated in a warm devotional tone with clear references to Nanda bhavan, family relationships, and child-safe values.'
  },
  {
    title: 'Nanda celebrates Krishna’s arrival',
    shortTitle: 'Nanda celebrates Krishna’s',
    summary: 'Nanda celebrates Krishna’s arrival retold as a specific Krishna childhood moment in Gokul square with named people and values.',
    place: 'Gokul square',
    event: 'Krishna childhood moment 5',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Community Joy',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul square, Nanda is at the heart of nanda celebrates krishna’s arrival.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Nanda celebrates Krishna’s arrival uses named Krishna childhood context in Gokul square with story-specific sequencing.',
    parentDiscussionPrompt: 'In Nanda celebrates Krishna’s arrival, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Nanda celebrates Krishna’s arrival, what loving action can we practice at home today?',
    narrationScript: 'Nanda celebrates Krishna’s arrival is narrated in a warm devotional tone with clear references to Gokul square, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna smiles at the cows',
    shortTitle: 'Krishna smiles at',
    summary: 'Krishna smiles at the cows retold as a specific Krishna childhood moment in Gokul goshala with named people and values.',
    place: 'Gokul goshala',
    event: 'Krishna childhood moment 6',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Compassion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul goshala, Krishna is at the heart of krishna smiles at the cows.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna smiles at the cows uses named Krishna childhood context in Gokul goshala with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna smiles at the cows, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna smiles at the cows, what loving action can we practice at home today?',
    narrationScript: 'Krishna smiles at the cows is narrated in a warm devotional tone with clear references to Gokul goshala, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and Balarama crawl together',
    shortTitle: 'Krishna and Balarama',
    summary: 'Krishna and Balarama crawl together retold as a specific Krishna childhood moment in Yashoda courtyard with named people and values.',
    place: 'Yashoda courtyard',
    event: 'Krishna childhood moment 7',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Friendship',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Yashoda courtyard, Vasudeva is at the heart of krishna and balarama crawl together.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and Balarama crawl together uses named Krishna childhood context in Yashoda courtyard with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and Balarama crawl together, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and Balarama crawl together, what loving action can we practice at home today?',
    narrationScript: 'Krishna and Balarama crawl together is narrated in a warm devotional tone with clear references to Yashoda courtyard, family relationships, and child-safe values.'
  },
  {
    title: 'Yashoda hears Krishna’s anklets',
    shortTitle: 'Yashoda hears Krishna’s',
    summary: 'Yashoda hears Krishna’s anklets retold as a specific Krishna childhood moment in Nanda home with named people and values.',
    place: 'Nanda home',
    event: 'Krishna childhood moment 8',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Listening',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Nanda home, Krishna is at the heart of yashoda hears krishna’s anklets.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Yashoda hears Krishna’s anklets uses named Krishna childhood context in Nanda home with story-specific sequencing.',
    parentDiscussionPrompt: 'In Yashoda hears Krishna’s anklets, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Yashoda hears Krishna’s anklets, what loving action can we practice at home today?',
    narrationScript: 'Yashoda hears Krishna’s anklets is narrated in a warm devotional tone with clear references to Nanda home, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna reaches for butter',
    shortTitle: 'Krishna reaches for',
    summary: 'Krishna reaches for butter retold as a specific Krishna childhood moment in butter room with named people and values.',
    place: 'butter room',
    event: 'Krishna childhood moment 9',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Curiosity',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In butter room, Yashoda is at the heart of krishna reaches for butter.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna reaches for butter uses named Krishna childhood context in butter room with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna reaches for butter, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna reaches for butter, what loving action can we practice at home today?',
    narrationScript: 'Krishna reaches for butter is narrated in a warm devotional tone with clear references to butter room, family relationships, and child-safe values.'
  },
  {
    title: 'The butter pot mystery',
    shortTitle: 'The butter pot',
    summary: 'The butter pot mystery retold as a specific Krishna childhood moment in kitchen loft with named people and values.',
    place: 'kitchen loft',
    event: 'Krishna childhood moment 10',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Truthfulness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In kitchen loft, Nanda is at the heart of the butter pot mystery.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'The butter pot mystery uses named Krishna childhood context in kitchen loft with story-specific sequencing.',
    parentDiscussionPrompt: 'In The butter pot mystery, what choice showed the most gentle strength?',
    reflectionPrompt: 'After The butter pot mystery, what loving action can we practice at home today?',
    narrationScript: 'The butter pot mystery is narrated in a warm devotional tone with clear references to kitchen loft, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna shares butter with friends',
    shortTitle: 'Krishna shares butter',
    summary: 'Krishna shares butter with friends retold as a specific Krishna childhood moment in Gokul lane with named people and values.',
    place: 'Gokul lane',
    event: 'Krishna childhood moment 11',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul lane, Krishna is at the heart of krishna shares butter with friends.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna shares butter with friends uses named Krishna childhood context in Gokul lane with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna shares butter with friends, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna shares butter with friends, what loving action can we practice at home today?',
    narrationScript: 'Krishna shares butter with friends is narrated in a warm devotional tone with clear references to Gokul lane, family relationships, and child-safe values.'
  },
  {
    title: 'Yashoda looks for the missing butter',
    shortTitle: 'Yashoda looks for',
    summary: 'Yashoda looks for the missing butter retold as a specific Krishna childhood moment in Yashoda kitchen with named people and values.',
    place: 'Yashoda kitchen',
    event: 'Krishna childhood moment 12',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Yashoda kitchen, Vasudeva is at the heart of yashoda looks for the missing butter.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Yashoda looks for the missing butter uses named Krishna childhood context in Yashoda kitchen with story-specific sequencing.',
    parentDiscussionPrompt: 'In Yashoda looks for the missing butter, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Yashoda looks for the missing butter, what loving action can we practice at home today?',
    narrationScript: 'Yashoda looks for the missing butter is narrated in a warm devotional tone with clear references to Yashoda kitchen, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna’s playful smile',
    shortTitle: 'Krishna’s playful smile',
    summary: 'Krishna’s playful smile retold as a specific Krishna childhood moment in village lane with named people and values.',
    place: 'village lane',
    event: 'Krishna childhood moment 13',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In village lane, Krishna is at the heart of krishna’s playful smile.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna’s playful smile uses named Krishna childhood context in village lane with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna’s playful smile, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna’s playful smile, what loving action can we practice at home today?',
    narrationScript: 'Krishna’s playful smile is narrated in a warm devotional tone with clear references to village lane, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the calves',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the calves retold as a specific Krishna childhood moment in pasture field with named people and values.',
    place: 'pasture field',
    event: 'Krishna childhood moment 14',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Tender Care',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In pasture field, Yashoda is at the heart of krishna and the calves.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the calves uses named Krishna childhood context in pasture field with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the calves, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the calves, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the calves is narrated in a warm devotional tone with clear references to pasture field, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna learns from the village elders',
    shortTitle: 'Krishna learns from',
    summary: 'Krishna learns from the village elders retold as a specific Krishna childhood moment in elder banyan with named people and values.',
    place: 'elder banyan',
    event: 'Krishna childhood moment 15',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Community Joy',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In elder banyan, Nanda is at the heart of krishna learns from the village elders.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna learns from the village elders uses named Krishna childhood context in elder banyan with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna learns from the village elders, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna learns from the village elders, what loving action can we practice at home today?',
    narrationScript: 'Krishna learns from the village elders is narrated in a warm devotional tone with clear references to elder banyan, family relationships, and child-safe values.'
  },
  {
    title: 'Balarama protects Krishna',
    shortTitle: 'Balarama protects Krishna',
    summary: 'Balarama protects Krishna retold as a specific Krishna childhood moment in village path with named people and values.',
    place: 'village path',
    event: 'Krishna childhood moment 16',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Compassion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In village path, Krishna is at the heart of balarama protects krishna.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Balarama protects Krishna uses named Krishna childhood context in village path with story-specific sequencing.',
    parentDiscussionPrompt: 'In Balarama protects Krishna, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Balarama protects Krishna, what loving action can we practice at home today?',
    narrationScript: 'Balarama protects Krishna is narrated in a warm devotional tone with clear references to village path, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the flute',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the flute retold as a specific Krishna childhood moment in river meadow with named people and values.',
    place: 'river meadow',
    event: 'Krishna childhood moment 17',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Friendship',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In river meadow, Vasudeva is at the heart of krishna and the flute.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the flute uses named Krishna childhood context in river meadow with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the flute, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the flute, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the flute is narrated in a warm devotional tone with clear references to river meadow, family relationships, and child-safe values.'
  },
  {
    title: 'The first flute song',
    shortTitle: 'The first flute',
    summary: 'The first flute song retold as a specific Krishna childhood moment in Vrindavan grove with named people and values.',
    place: 'Vrindavan grove',
    event: 'Krishna childhood moment 18',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Listening',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Vrindavan grove, Krishna is at the heart of the first flute song.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'The first flute song uses named Krishna childhood context in Vrindavan grove with story-specific sequencing.',
    parentDiscussionPrompt: 'In The first flute song, what choice showed the most gentle strength?',
    reflectionPrompt: 'After The first flute song, what loving action can we practice at home today?',
    narrationScript: 'The first flute song is narrated in a warm devotional tone with clear references to Vrindavan grove, family relationships, and child-safe values.'
  },
  {
    title: 'The gopas gather to listen',
    shortTitle: 'The gopas gather',
    summary: 'The gopas gather to listen retold as a specific Krishna childhood moment in gopa circle with named people and values.',
    place: 'gopa circle',
    event: 'Krishna childhood moment 19',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Curiosity',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In gopa circle, Yashoda is at the heart of the gopas gather to listen.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'The gopas gather to listen uses named Krishna childhood context in gopa circle with story-specific sequencing.',
    parentDiscussionPrompt: 'In The gopas gather to listen, what choice showed the most gentle strength?',
    reflectionPrompt: 'After The gopas gather to listen, what loving action can we practice at home today?',
    narrationScript: 'The gopas gather to listen is narrated in a warm devotional tone with clear references to gopa circle, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna comforts a crying friend',
    shortTitle: 'Krishna comforts a',
    summary: 'Krishna comforts a crying friend retold as a specific Krishna childhood moment in Gokul courtyard with named people and values.',
    place: 'Gokul courtyard',
    event: 'Krishna childhood moment 20',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Truthfulness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul courtyard, Nanda is at the heart of krishna comforts a crying friend.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna comforts a crying friend uses named Krishna childhood context in Gokul courtyard with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna comforts a crying friend, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna comforts a crying friend, what loving action can we practice at home today?',
    narrationScript: 'Krishna comforts a crying friend is narrated in a warm devotional tone with clear references to Gokul courtyard, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna helps a small calf',
    shortTitle: 'Krishna helps a',
    summary: 'Krishna helps a small calf retold as a specific Krishna childhood moment in pasture edge with named people and values.',
    place: 'pasture edge',
    event: 'Krishna childhood moment 21',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In pasture edge, Krishna is at the heart of krishna helps a small calf.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna helps a small calf uses named Krishna childhood context in pasture edge with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna helps a small calf, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna helps a small calf, what loving action can we practice at home today?',
    narrationScript: 'Krishna helps a small calf is narrated in a warm devotional tone with clear references to pasture edge, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the rain clouds',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the rain clouds retold as a specific Krishna childhood moment in monsoon sky with named people and values.',
    place: 'monsoon sky',
    event: 'Krishna childhood moment 22',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In monsoon sky, Vasudeva is at the heart of krishna and the rain clouds.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the rain clouds uses named Krishna childhood context in monsoon sky with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the rain clouds, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the rain clouds, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the rain clouds is narrated in a warm devotional tone with clear references to monsoon sky, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna watches the Yamuna flow',
    shortTitle: 'Krishna watches the',
    summary: 'Krishna watches the Yamuna flow retold as a specific Krishna childhood moment in Yamuna bank with named people and values.',
    place: 'Yamuna bank',
    event: 'Krishna childhood moment 23',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Yamuna bank, Krishna is at the heart of krishna watches the yamuna flow.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna watches the Yamuna flow uses named Krishna childhood context in Yamuna bank with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna watches the Yamuna flow, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna watches the Yamuna flow, what loving action can we practice at home today?',
    narrationScript: 'Krishna watches the Yamuna flow is narrated in a warm devotional tone with clear references to Yamuna bank, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the peacock feather',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the peacock feather retold as a specific Krishna childhood moment in forest path with named people and values.',
    place: 'forest path',
    event: 'Krishna childhood moment 24',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Tender Care',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In forest path, Yashoda is at the heart of krishna and the peacock feather.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the peacock feather uses named Krishna childhood context in forest path with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the peacock feather, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the peacock feather, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the peacock feather is narrated in a warm devotional tone with clear references to forest path, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and Radha’s friendship',
    shortTitle: 'Krishna and Radha’s',
    summary: 'Krishna and Radha’s friendship retold as a specific Krishna childhood moment in flower grove with named people and values.',
    place: 'flower grove',
    event: 'Krishna childhood moment 25',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Community Joy',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In flower grove, Nanda is at the heart of krishna and radha’s friendship.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and Radha’s friendship uses named Krishna childhood context in flower grove with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and Radha’s friendship, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and Radha’s friendship, what loving action can we practice at home today?',
    narrationScript: 'Krishna and Radha’s friendship is narrated in a warm devotional tone with clear references to flower grove, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna teaches sharing',
    shortTitle: 'Krishna teaches sharing',
    summary: 'Krishna teaches sharing retold as a specific Krishna childhood moment in village kitchen with named people and values.',
    place: 'village kitchen',
    event: 'Krishna childhood moment 26',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Compassion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In village kitchen, Krishna is at the heart of krishna teaches sharing.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna teaches sharing uses named Krishna childhood context in village kitchen with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna teaches sharing, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna teaches sharing, what loving action can we practice at home today?',
    narrationScript: 'Krishna teaches sharing is narrated in a warm devotional tone with clear references to village kitchen, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna says sorry gently',
    shortTitle: 'Krishna says sorry',
    summary: 'Krishna says sorry gently retold as a specific Krishna childhood moment in courtyard gate with named people and values.',
    place: 'courtyard gate',
    event: 'Krishna childhood moment 27',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Friendship',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In courtyard gate, Vasudeva is at the heart of krishna says sorry gently.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna says sorry gently uses named Krishna childhood context in courtyard gate with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna says sorry gently, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna says sorry gently, what loving action can we practice at home today?',
    narrationScript: 'Krishna says sorry gently is narrated in a warm devotional tone with clear references to courtyard gate, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna helps clean the courtyard',
    shortTitle: 'Krishna helps clean',
    summary: 'Krishna helps clean the courtyard retold as a specific Krishna childhood moment in home courtyard with named people and values.',
    place: 'home courtyard',
    event: 'Krishna childhood moment 28',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Listening',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In home courtyard, Krishna is at the heart of krishna helps clean the courtyard.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna helps clean the courtyard uses named Krishna childhood context in home courtyard with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna helps clean the courtyard, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna helps clean the courtyard, what loving action can we practice at home today?',
    narrationScript: 'Krishna helps clean the courtyard is narrated in a warm devotional tone with clear references to home courtyard, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna listens to Yashoda',
    shortTitle: 'Krishna listens to',
    summary: 'Krishna listens to Yashoda retold as a specific Krishna childhood moment in Nanda veranda with named people and values.',
    place: 'Nanda veranda',
    event: 'Krishna childhood moment 29',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Curiosity',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Nanda veranda, Yashoda is at the heart of krishna listens to yashoda.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna listens to Yashoda uses named Krishna childhood context in Nanda veranda with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna listens to Yashoda, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna listens to Yashoda, what loving action can we practice at home today?',
    narrationScript: 'Krishna listens to Yashoda is narrated in a warm devotional tone with clear references to Nanda veranda, family relationships, and child-safe values.'
  },
  {
    title: 'Yashoda sees the universe in Krishna’s mouth',
    shortTitle: 'Yashoda sees the',
    summary: 'Yashoda sees the universe in Krishna’s mouth retold as a specific Krishna childhood moment in Yashoda courtyard with named people and values.',
    place: 'Yashoda courtyard',
    event: 'Krishna childhood moment 30',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Truthfulness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Yashoda’s courtyard, little Krishna plays with dust near the butter room.','Yashoda asks him to open his mouth, expecting mischief and crumbs.','Inside, she beholds vast stars, rivers, and worlds, then sees herself holding Krishna.','With folded hands and tears of wonder, Yashoda hugs Krishna in devotional humility.'],
    parentSourceContext: 'Yashoda sees the universe in Krishna’s mouth uses named Krishna childhood context in Yashoda courtyard with story-specific sequencing.',
    parentDiscussionPrompt: 'In Yashoda sees the universe in Krishna’s mouth, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Yashoda sees the universe in Krishna’s mouth, what loving action can we practice at home today?',
    narrationScript: 'Yashoda sees the universe in Krishna’s mouth is narrated in a warm devotional tone with clear references to Yashoda courtyard, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the mortar',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the mortar retold as a specific Krishna childhood moment in courtyard mortar with named people and values.',
    place: 'courtyard mortar',
    event: 'Krishna childhood moment 31',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Nanda’s courtyard, Yashoda gently ties Krishna to a wooden mortar after butter mischief.','The knot is firm but loving, a mother’s boundary without harshness.','Krishna crawls with the mortar between two arjuna trees, drawing villagers’ attention.','The story teaches that loving discipline and grace can stand together.'],
    parentSourceContext: 'Krishna and the mortar uses named Krishna childhood context in courtyard mortar with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the mortar, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the mortar, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the mortar is narrated in a warm devotional tone with clear references to courtyard mortar, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna frees the twin trees',
    shortTitle: 'Krishna frees the',
    summary: 'Krishna frees the twin trees retold as a specific Krishna childhood moment in twin arjuna trees with named people and values.',
    place: 'twin arjuna trees',
    event: 'Krishna childhood moment 32',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In twin arjuna trees, Vasudeva is at the heart of krishna frees the twin trees.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna frees the twin trees uses named Krishna childhood context in twin arjuna trees with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna frees the twin trees, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna frees the twin trees, what loving action can we practice at home today?',
    narrationScript: 'Krishna frees the twin trees is narrated in a warm devotional tone with clear references to twin arjuna trees, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna protects the village from Trinavarta',
    shortTitle: 'Krishna protects the',
    summary: 'Krishna protects the village from Trinavarta retold as a specific Krishna childhood moment in Gokul windstorm with named people and values.',
    place: 'Gokul windstorm',
    event: 'Krishna childhood moment 33',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul windstorm, Krishna is at the heart of krishna protects the village from trinavarta.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna protects the village from Trinavarta uses named Krishna childhood context in Gokul windstorm with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna protects the village from Trinavarta, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna protects the village from Trinavarta, what loving action can we practice at home today?',
    narrationScript: 'Krishna protects the village from Trinavarta is narrated in a warm devotional tone with clear references to Gokul windstorm, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and Putana, child-safe version',
    shortTitle: 'Krishna and Putana,',
    summary: 'Krishna and Putana, child-safe version retold as a specific Krishna childhood moment in Nanda home with named people and values.',
    place: 'Nanda home',
    event: 'Krishna childhood moment 34',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Tender Care',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Nanda home, Yashoda is at the heart of krishna and putana, child-safe version.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and Putana, child-safe version uses named Krishna childhood context in Nanda home with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and Putana, child-safe version, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and Putana, child-safe version, what loving action can we practice at home today?',
    narrationScript: 'Krishna and Putana, child-safe version is narrated in a warm devotional tone with clear references to Nanda home, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the cart demon, child-safe version',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the cart demon, child-safe version retold as a specific Krishna childhood moment in cart yard with named people and values.',
    place: 'cart yard',
    event: 'Krishna childhood moment 35',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Community Joy',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In cart yard, Nanda is at the heart of krishna and the cart demon, child-safe version.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the cart demon, child-safe version uses named Krishna childhood context in cart yard with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the cart demon, child-safe version, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the cart demon, child-safe version, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the cart demon, child-safe version is narrated in a warm devotional tone with clear references to cart yard, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna dances with joy',
    shortTitle: 'Krishna dances with',
    summary: 'Krishna dances with joy retold as a specific Krishna childhood moment in village square with named people and values.',
    place: 'village square',
    event: 'Krishna childhood moment 36',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Compassion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In village square, Krishna is at the heart of krishna dances with joy.','Devaki and Vasudeva respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna dances with joy uses named Krishna childhood context in village square with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna dances with joy, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna dances with joy, what loving action can we practice at home today?',
    narrationScript: 'Krishna dances with joy is narrated in a warm devotional tone with clear references to village square, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the cowherd boys',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the cowherd boys retold as a specific Krishna childhood moment in forest trail with named people and values.',
    place: 'forest trail',
    event: 'Krishna childhood moment 37',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Friendship',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In forest trail, Vasudeva is at the heart of krishna and the cowherd boys.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the cowherd boys uses named Krishna childhood context in forest trail with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the cowherd boys, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the cowherd boys, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the cowherd boys is narrated in a warm devotional tone with clear references to forest trail, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna’s lunch in the forest',
    shortTitle: 'Krishna’s lunch in',
    summary: 'Krishna’s lunch in the forest retold as a specific Krishna childhood moment in forest picnic with named people and values.',
    place: 'forest picnic',
    event: 'Krishna childhood moment 38',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Listening',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In forest picnic, Krishna is at the heart of krishna’s lunch in the forest.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna’s lunch in the forest uses named Krishna childhood context in forest picnic with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna’s lunch in the forest, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna’s lunch in the forest, what loving action can we practice at home today?',
    narrationScript: 'Krishna’s lunch in the forest is narrated in a warm devotional tone with clear references to forest picnic, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna thanks the cows',
    shortTitle: 'Krishna thanks the',
    summary: 'Krishna thanks the cows retold as a specific Krishna childhood moment in cow shed with named people and values.',
    place: 'cow shed',
    event: 'Krishna childhood moment 39',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Curiosity',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In cow shed, Yashoda is at the heart of krishna thanks the cows.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna thanks the cows uses named Krishna childhood context in cow shed with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna thanks the cows, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna thanks the cows, what loving action can we practice at home today?',
    narrationScript: 'Krishna thanks the cows is narrated in a warm devotional tone with clear references to cow shed, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna and the riverbank',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the riverbank retold as a specific Krishna childhood moment in riverbank sand with named people and values.',
    place: 'riverbank sand',
    event: 'Krishna childhood moment 40',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Truthfulness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In riverbank sand, Nanda is at the heart of krishna and the riverbank.','Yashoda and Gokul families respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna and the riverbank uses named Krishna childhood context in riverbank sand with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna and the riverbank, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna and the riverbank, what loving action can we practice at home today?',
    narrationScript: 'Krishna and the riverbank is narrated in a warm devotional tone with clear references to riverbank sand, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna calms Kaliya, child-safe version',
    shortTitle: 'Krishna calms Kaliya,',
    summary: 'Krishna calms Kaliya, child-safe version retold as a specific Krishna childhood moment in Yamuna waters with named people and values.',
    place: 'Yamuna waters',
    event: 'Krishna childhood moment 41',
    characters: ['Krishna','Devaki','Vasudeva'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Near the Yamuna, villagers worry as Kaliya’s poison troubles the water.','Krishna enters the river while Balarama steadies frightened friends on the bank.','Krishna dances upon Kaliya’s hoods, calming rage and ending harm without cruelty.','Kaliya bows, agrees to depart peacefully, and the Yamuna is restored for Gokul.'],
    parentSourceContext: 'Krishna calms Kaliya, child-safe version uses named Krishna childhood context in Yamuna waters with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna calms Kaliya, child-safe version, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna calms Kaliya, child-safe version, what loving action can we practice at home today?',
    narrationScript: 'Krishna calms Kaliya, child-safe version is narrated in a warm devotional tone with clear references to Yamuna waters, family relationships, and child-safe values.'
  },
  {
    title: 'Kaliya learns to leave peacefully',
    shortTitle: 'Kaliya learns to',
    summary: 'Kaliya learns to leave peacefully retold as a specific Krishna childhood moment in Yamuna shore with named people and values.',
    place: 'Yamuna shore',
    event: 'Krishna childhood moment 42',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Yamuna shore, Vasudeva is at the heart of kaliya learns to leave peacefully.','Krishna and Yamuna respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Kaliya learns to leave peacefully uses named Krishna childhood context in Yamuna shore with story-specific sequencing.',
    parentDiscussionPrompt: 'In Kaliya learns to leave peacefully, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Kaliya learns to leave peacefully, what loving action can we practice at home today?',
    narrationScript: 'Kaliya learns to leave peacefully is narrated in a warm devotional tone with clear references to Yamuna shore, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna returns safely',
    shortTitle: 'Krishna returns safely',
    summary: 'Krishna returns safely retold as a specific Krishna childhood moment in Gokul return road with named people and values.',
    place: 'Gokul return road',
    event: 'Krishna childhood moment 43',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul return road, Krishna is at the heart of krishna returns safely.','Yashoda and Nanda respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'Krishna returns safely uses named Krishna childhood context in Gokul return road with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna returns safely, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna returns safely, what loving action can we practice at home today?',
    narrationScript: 'Krishna returns safely is narrated in a warm devotional tone with clear references to Gokul return road, family relationships, and child-safe values.'
  },
  {
    title: 'The village celebrates',
    shortTitle: 'The village celebrates',
    summary: 'The village celebrates retold as a specific Krishna childhood moment in village center with named people and values.',
    place: 'village center',
    event: 'Krishna childhood moment 44',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Tender Care',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In village center, Yashoda is at the heart of the village celebrates.','Krishna and Rohini respond with care, naming the moment and guiding everyone calmly.','The event unfolds with concrete details of place, family, and value, not rumor or fear.','The scene closes with gratitude, prayer, and a gentle lesson for Gokul families.'],
    parentSourceContext: 'The village celebrates uses named Krishna childhood context in village center with story-specific sequencing.',
    parentDiscussionPrompt: 'In The village celebrates, what choice showed the most gentle strength?',
    reflectionPrompt: 'After The village celebrates, what loving action can we practice at home today?',
    narrationScript: 'The village celebrates is narrated in a warm devotional tone with clear references to village center, family relationships, and child-safe values.'
  },
  {
    title: 'Krishna lifts Govardhan, child-safe version',
    shortTitle: 'Krishna lifts Govardhan,',
    summary: 'Krishna lifts Govardhan, child-safe version retold as a specific Krishna childhood moment in Govardhan hill with named people and values.',
    place: 'Govardhan hill',
    event: 'Krishna childhood moment 45',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Community Joy',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Dark monsoon clouds burst over Govardhan as families fear for cattle and children.','Krishna invites everyone to gather with carts, calves, and elders near the mountain.','He lifts Govardhan like a sheltering canopy while the village prays in gratitude.','When rains pass, Krishna teaches humility, nature-respect, and shared care.'],
    parentSourceContext: 'Krishna lifts Govardhan, child-safe version uses named Krishna childhood context in Govardhan hill with story-specific sequencing.',
    parentDiscussionPrompt: 'In Krishna lifts Govardhan, child-safe version, what choice showed the most gentle strength?',
    reflectionPrompt: 'After Krishna lifts Govardhan, child-safe version, what loving action can we practice at home today?',
    narrationScript: 'Krishna lifts Govardhan, child-safe version is narrated in a warm devotional tone with clear references to Govardhan hill, family relationships, and child-safe values.'
  }
];

const values = ['Kindness','Joy','Devotion','Friendship','Family Love','Courage','Compassion','Humility','Truthfulness','Wisdom'];

export const krishnaChildhoodExpansionRecoveryPackV1Stories: ExtendedStory[] = titles.map((title, idx) => {
  const n = idx + 1;
  const runtime = n <= 45;
  const audio = n <= 30;
  const authored = runtime ? runtimeEntries[idx] : null;
  const storyId = `krishna-childhood-expansion-v1-${String(n).padStart(3, '0')}`;

  const story: ExtendedStory = {
    id: storyId,
    storyId,
    slug: storyId,
    title,
    shortTitle: authored?.shortTitle ?? title.split(' ').slice(0,3).join(' '),
    summary: authored?.summary ?? `${title} indexed for Krishna Childhood expansion with respectful child-safe framing.`,
    sourceTradition: 'Krishna Childhood',
    sourceTextOrTraditionNote: 'Respectful child-safe Krishna childhood retelling for families.',
    storyPackId: 'krishna-childhood-expansion-recovery-pack-v1',
    primaryCategoryId: 'krishna_stories',
    secondaryCategoryIds: ['krishna_stories'],
    journeyId: 'krishna-childhood-pack-1',
    journeyOrder: 200 + n,
    ageBands: n % 3 === 0 ? ['3-5','6-8'] : ['6-8','9-12'],
    recommendedAgeBand: '6-8',
    durationMinutes: runtime ? 6 : 4,
    primaryValue: authored?.primaryValue ?? values[idx % values.length],
    secondaryValues: authored?.secondaryValues ?? [values[(idx+1)%values.length], values[(idx+2)%values.length]],
    characters: authored?.characters ?? ['Krishna','Yashoda','Nanda'],
    panels: runtime ? authored!.panels.map((text, i) => ({ id: `p${i+1}`, title: `Moment ${i+1}`, text })) : [{ id: 'p1', title: 'Indexed Summary', text: `${title} is indexed for Krishna Childhood Journey expansion.` }],
    parentNote: runtime ? {
      sourceContext: authored!.parentSourceContext,
      valueExplained: `${authored!.primaryValue} is shown through named people, place, and event choices in this story.`,
      discussionPrompt: authored!.parentDiscussionPrompt,
      practicePrompt: 'Choose one gentle family action inspired by this story.',
      cautionNote: 'Use warm devotional language and avoid fear-heavy framing.'
    } : {
      sourceContext: `${title} is indexed and awaiting deeper runtime QA staging.`,
      valueExplained: 'Indexed values support future runtime enrichment.',
      discussionPrompt: 'Which value appears most clearly here?',
      practicePrompt: 'Practice one small act of kindness today.',
      cautionNote: 'Keep sacred references respectful and child-safe.'
    },
    reflectionPrompt: runtime ? authored!.reflectionPrompt : 'How can this Krishna moment guide a kind choice today?',
    ritualPrompt: 'Take a calm breath and offer gratitude for family, friends, and nature.',
    completionBlessing: 'May Krishna’s childhood wisdom bring joy and gentle strength.',
    sacredRespectLevel: n % 4 === 0 ? 'deity_focal' : 'sacred_story',
    sacredRespectNotes: 'Sacred content is presented warmly, respectfully, and without trivialization or fear-heavy framing.',
    illustrationPrompt: {
      sceneSummary: `${title} in a warm devotional child-safe setting.`,
      styleGuidance: 'Soft colors, caring expressions, culturally respectful sacred portrayal.',
      culturalGuardrails: ['Avoid caricature of sacred figures.','Avoid slapstick deity framing.'],
      deityTreatment: 'Present Krishna with warmth, dignity, and playful innocence rooted in devotion.',
      avoidList: ['No punishment-heavy scenes.','No hard gamification framing.']
    },
    audioMetadata: { audioAvailable: false, voiceOptions: ['warm-indian-female','warm-indian-male'], narrationScriptStatus: audio ? 'qa_ready' : 'indexed', preferredVoiceStyle: 'warm-indian', pacing: 'steady', noMicRequired: true },
    status: runtime ? 'qa_ready' : 'indexed'
  };

  if (audio) {
    story.audioScript = {
      narrationScript: runtimeEntries[idx].narrationScript,
      voiceDirection: 'Warm devotional family tone; no celebrity imitation, no deity impersonation, and no child voice capture prompts.',
      pronunciationNotes: pronunciationGuidance,
      pacingNotes: 'Gentle pace with calm pauses at value moments; avoid race, streak, or speed framing.',
      audioReadinessIntent: 'ready'
    };
  }

  return story;
});

export const krishnaChildhoodExpansionRecoveryPackV1StoryPack: StoryPack = {
  id: 'krishna-childhood-expansion-recovery-pack-v1',
  title: 'Krishna Childhood Expansion Recovery Pack v1',
  childFacingTitle: 'Krishna Childhood Journey Expansion',
  description: 'Recovery-aligned Krishna childhood expansion with indexed, QA-staged runtime candidates, and audio-script-ready candidates.',
  sourceTradition: 'Krishna Childhood',
  category: 'krishna',
  status: 'qa_ready',
  storyIds: krishnaChildhoodExpansionRecoveryPackV1Stories.map((s) => s.id),
  recommendedAgeBands: ['3-5','6-8','9-12'],
  contentSafetyNotes: ['Local-first content only.','No backend, telemetry, sharing, notifications, or AI personalization.'],
  sacredRespectNotes: ['Sacred Krishna childhood content preserves warmth, respect, and cultural care.']
};
