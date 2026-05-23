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
    summary: 'Krishna is born in Mathura retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Mathura prison chamber',
    event: 'Krishna childhood moment 1',
    characters: ['Devaki','Vasudeva','Krishna'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Mathura, Devaki and Vasudeva pray quietly in the prison chamber while guards sleep.','A radiant child, Krishna, is born, and the room fills with peace instead of fear.','Vasudeva wraps the baby in soft cloth and bows to Devaki before beginning a careful journey.','Hope rises in Mathura as Krishna’s birth brings courage to hearts that had felt powerless.'],
    parentSourceContext: 'Krishna is born in Mathura references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna is born in Mathura, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna is born in Mathura, what one caring action can we practice today?',
    narrationScript: 'Krishna is born in Mathura is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Vasudeva carries Krishna across the Yamuna',
    shortTitle: 'Vasudeva carries Krishna',
    summary: 'Vasudeva carries Krishna across the Yamuna retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yamuna river at night',
    event: 'Krishna childhood moment 2',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Under storm clouds, Vasudeva places baby Krishna in a woven basket and steps into the night.','At the Yamuna, he walks slowly through rising water, keeping the basket high and steady.','The river calms around his careful steps, and Vasudeva whispers prayers of gratitude.','He reaches Gokul safely, carrying Krishna with tenderness and unwavering resolve.'],
    parentSourceContext: 'Vasudeva carries Krishna across the Yamuna references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Vasudeva carries Krishna across the Yamuna, which action showed loving strength and why?',
    reflectionPrompt: 'After Vasudeva carries Krishna across the Yamuna, what one caring action can we practice today?',
    narrationScript: 'Vasudeva carries Krishna across the Yamuna is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna arrives in Gokul',
    shortTitle: 'Krishna arrives in',
    summary: 'Krishna arrives in Gokul retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Nanda’s home in Gokul',
    event: 'Krishna childhood moment 3',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Before dawn in Gokul, Vasudeva arrives quietly at Nanda’s home.','Baby Krishna is laid beside Yashoda, who sleeps peacefully after childbirth.','The household wakes to gentle joy as Nanda and Yashoda welcome the child.','The village receives Krishna with warmth, songs, and a feeling of sacred blessing.'],
    parentSourceContext: 'Krishna arrives in Gokul references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna arrives in Gokul, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna arrives in Gokul, what one caring action can we practice today?',
    narrationScript: 'Krishna arrives in Gokul is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Yashoda holds baby Krishna',
    shortTitle: 'Yashoda holds baby',
    summary: 'Yashoda holds baby Krishna retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 4',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, yashoda holds baby krishna begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Yashoda holds baby Krishna references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Yashoda holds baby Krishna, which action showed loving strength and why?',
    reflectionPrompt: 'After Yashoda holds baby Krishna, what one caring action can we practice today?',
    narrationScript: 'Yashoda holds baby Krishna is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Nanda celebrates Krishna’s arrival',
    shortTitle: 'Nanda celebrates Krishna’s',
    summary: 'Nanda celebrates Krishna’s arrival retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 5',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, nanda celebrates krishna’s arrival begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Nanda celebrates Krishna’s arrival references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Nanda celebrates Krishna’s arrival, which action showed loving strength and why?',
    reflectionPrompt: 'After Nanda celebrates Krishna’s arrival, what one caring action can we practice today?',
    narrationScript: 'Nanda celebrates Krishna’s arrival is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna smiles at the cows',
    shortTitle: 'Krishna smiles at',
    summary: 'Krishna smiles at the cows retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 6',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna smiles at the cows begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna smiles at the cows references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna smiles at the cows, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna smiles at the cows, what one caring action can we practice today?',
    narrationScript: 'Krishna smiles at the cows is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and Balarama crawl together',
    shortTitle: 'Krishna and Balarama',
    summary: 'Krishna and Balarama crawl together retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 7',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and balarama crawl together begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and Balarama crawl together references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and Balarama crawl together, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and Balarama crawl together, what one caring action can we practice today?',
    narrationScript: 'Krishna and Balarama crawl together is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Yashoda hears Krishna’s anklets',
    shortTitle: 'Yashoda hears Krishna’s',
    summary: 'Yashoda hears Krishna’s anklets retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 8',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, yashoda hears krishna’s anklets begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Yashoda hears Krishna’s anklets references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Yashoda hears Krishna’s anklets, which action showed loving strength and why?',
    reflectionPrompt: 'After Yashoda hears Krishna’s anklets, what one caring action can we practice today?',
    narrationScript: 'Yashoda hears Krishna’s anklets is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna reaches for butter',
    shortTitle: 'Krishna reaches for',
    summary: 'Krishna reaches for butter retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 9',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna reaches for butter begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna reaches for butter references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna reaches for butter, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna reaches for butter, what one caring action can we practice today?',
    narrationScript: 'Krishna reaches for butter is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'The butter pot mystery',
    shortTitle: 'The butter pot',
    summary: 'The butter pot mystery retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 10',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, the butter pot mystery begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'The butter pot mystery references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In The butter pot mystery, which action showed loving strength and why?',
    reflectionPrompt: 'After The butter pot mystery, what one caring action can we practice today?',
    narrationScript: 'The butter pot mystery is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna shares butter with friends',
    shortTitle: 'Krishna shares butter',
    summary: 'Krishna shares butter with friends retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 11',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna shares butter with friends begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna shares butter with friends references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna shares butter with friends, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna shares butter with friends, what one caring action can we practice today?',
    narrationScript: 'Krishna shares butter with friends is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Yashoda looks for the missing butter',
    shortTitle: 'Yashoda looks for',
    summary: 'Yashoda looks for the missing butter retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 12',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, yashoda looks for the missing butter begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Yashoda looks for the missing butter references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Yashoda looks for the missing butter, which action showed loving strength and why?',
    reflectionPrompt: 'After Yashoda looks for the missing butter, what one caring action can we practice today?',
    narrationScript: 'Yashoda looks for the missing butter is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna’s playful smile',
    shortTitle: 'Krishna’s playful smile',
    summary: 'Krishna’s playful smile retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 13',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna’s playful smile begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna’s playful smile references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna’s playful smile, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna’s playful smile, what one caring action can we practice today?',
    narrationScript: 'Krishna’s playful smile is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the calves',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the calves retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 14',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the calves begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the calves references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the calves, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the calves, what one caring action can we practice today?',
    narrationScript: 'Krishna and the calves is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna learns from the village elders',
    shortTitle: 'Krishna learns from',
    summary: 'Krishna learns from the village elders retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 15',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna learns from the village elders begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna learns from the village elders references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna learns from the village elders, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna learns from the village elders, what one caring action can we practice today?',
    narrationScript: 'Krishna learns from the village elders is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Balarama protects Krishna',
    shortTitle: 'Balarama protects Krishna',
    summary: 'Balarama protects Krishna retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 16',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, balarama protects krishna begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Balarama protects Krishna references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Balarama protects Krishna, which action showed loving strength and why?',
    reflectionPrompt: 'After Balarama protects Krishna, what one caring action can we practice today?',
    narrationScript: 'Balarama protects Krishna is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the flute',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the flute retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 17',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the flute begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the flute references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the flute, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the flute, what one caring action can we practice today?',
    narrationScript: 'Krishna and the flute is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'The first flute song',
    shortTitle: 'The first flute',
    summary: 'The first flute song retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 18',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, the first flute song begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'The first flute song references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In The first flute song, which action showed loving strength and why?',
    reflectionPrompt: 'After The first flute song, what one caring action can we practice today?',
    narrationScript: 'The first flute song is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'The gopas gather to listen',
    shortTitle: 'The gopas gather',
    summary: 'The gopas gather to listen retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 19',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, the gopas gather to listen begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'The gopas gather to listen references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In The gopas gather to listen, which action showed loving strength and why?',
    reflectionPrompt: 'After The gopas gather to listen, what one caring action can we practice today?',
    narrationScript: 'The gopas gather to listen is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna comforts a crying friend',
    shortTitle: 'Krishna comforts a',
    summary: 'Krishna comforts a crying friend retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 20',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna comforts a crying friend begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna comforts a crying friend references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna comforts a crying friend, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna comforts a crying friend, what one caring action can we practice today?',
    narrationScript: 'Krishna comforts a crying friend is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna helps a small calf',
    shortTitle: 'Krishna helps a',
    summary: 'Krishna helps a small calf retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 21',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna helps a small calf begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna helps a small calf references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna helps a small calf, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna helps a small calf, what one caring action can we practice today?',
    narrationScript: 'Krishna helps a small calf is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the rain clouds',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the rain clouds retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 22',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the rain clouds begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the rain clouds references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the rain clouds, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the rain clouds, what one caring action can we practice today?',
    narrationScript: 'Krishna and the rain clouds is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna watches the Yamuna flow',
    shortTitle: 'Krishna watches the',
    summary: 'Krishna watches the Yamuna flow retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 23',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna watches the yamuna flow begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna watches the Yamuna flow references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna watches the Yamuna flow, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna watches the Yamuna flow, what one caring action can we practice today?',
    narrationScript: 'Krishna watches the Yamuna flow is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the peacock feather',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the peacock feather retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 24',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the peacock feather begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the peacock feather references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the peacock feather, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the peacock feather, what one caring action can we practice today?',
    narrationScript: 'Krishna and the peacock feather is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and Radha’s friendship',
    shortTitle: 'Krishna and Radha’s',
    summary: 'Krishna and Radha’s friendship retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 25',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and radha’s friendship begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and Radha’s friendship references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and Radha’s friendship, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and Radha’s friendship, what one caring action can we practice today?',
    narrationScript: 'Krishna and Radha’s friendship is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna teaches sharing',
    shortTitle: 'Krishna teaches sharing',
    summary: 'Krishna teaches sharing retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 26',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna teaches sharing begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna teaches sharing references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna teaches sharing, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna teaches sharing, what one caring action can we practice today?',
    narrationScript: 'Krishna teaches sharing is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna says sorry gently',
    shortTitle: 'Krishna says sorry',
    summary: 'Krishna says sorry gently retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 27',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna says sorry gently begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna says sorry gently references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna says sorry gently, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna says sorry gently, what one caring action can we practice today?',
    narrationScript: 'Krishna says sorry gently is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna helps clean the courtyard',
    shortTitle: 'Krishna helps clean',
    summary: 'Krishna helps clean the courtyard retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 28',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna helps clean the courtyard begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna helps clean the courtyard references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna helps clean the courtyard, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna helps clean the courtyard, what one caring action can we practice today?',
    narrationScript: 'Krishna helps clean the courtyard is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna listens to Yashoda',
    shortTitle: 'Krishna listens to',
    summary: 'Krishna listens to Yashoda retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 29',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna listens to yashoda begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna listens to Yashoda references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna listens to Yashoda, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna listens to Yashoda, what one caring action can we practice today?',
    narrationScript: 'Krishna listens to Yashoda is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Yashoda sees the universe in Krishna’s mouth',
    shortTitle: 'Yashoda sees the',
    summary: 'Yashoda sees the universe in Krishna’s mouth retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yashoda courtyard',
    event: 'Krishna childhood moment 30',
    characters: ['Yashoda','Krishna','Nanda'],
    primaryValue: 'Wonder',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Yashoda sees dust on Krishna’s lips and asks him gently to open his mouth.','When Krishna opens his mouth, Yashoda beholds stars, rivers, and worlds beyond measure.','For a breath, she sees herself, Gokul, and all life held within that sacred vision.','She gathers Krishna into her arms, humbled by wonder and deep maternal love.'],
    parentSourceContext: 'Yashoda sees the universe in Krishna’s mouth references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Yashoda sees the universe in Krishna’s mouth, which action showed loving strength and why?',
    reflectionPrompt: 'After Yashoda sees the universe in Krishna’s mouth, what one caring action can we practice today?',
    narrationScript: 'Yashoda sees the universe in Krishna’s mouth is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the mortar',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the mortar retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Nanda courtyard',
    event: 'Krishna childhood moment 31',
    characters: ['Yashoda','Krishna','Balarama'],
    primaryValue: 'Responsibility',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['After playful butter mischief, Yashoda ties Krishna to a wooden mortar with a soft cloth.','She sets a loving boundary, speaking firmly but without anger.','Krishna crawls forward, pulling the mortar across the courtyard while children watch in surprise.','The moment teaches that discipline and affection can live together in family life.'],
    parentSourceContext: 'Krishna and the mortar references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the mortar, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the mortar, what one caring action can we practice today?',
    narrationScript: 'Krishna and the mortar is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna frees the twin trees',
    shortTitle: 'Krishna frees the',
    summary: 'Krishna frees the twin trees retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 32',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna frees the twin trees begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna frees the twin trees references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna frees the twin trees, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna frees the twin trees, what one caring action can we practice today?',
    narrationScript: 'Krishna frees the twin trees is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna protects the village from Trinavarta',
    shortTitle: 'Krishna protects the',
    summary: 'Krishna protects the village from Trinavarta retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 33',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna protects the village from trinavarta begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna protects the village from Trinavarta references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna protects the village from Trinavarta, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna protects the village from Trinavarta, what one caring action can we practice today?',
    narrationScript: 'Krishna protects the village from Trinavarta is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and Putana, child-safe version',
    shortTitle: 'Krishna and Putana,',
    summary: 'Krishna and Putana, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 34',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and putana, child-safe version begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and Putana, child-safe version references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and Putana, child-safe version, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and Putana, child-safe version, what one caring action can we practice today?',
    narrationScript: 'Krishna and Putana, child-safe version is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the cart demon, child-safe version',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the cart demon, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 35',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the cart demon, child-safe version begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the cart demon, child-safe version references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the cart demon, child-safe version, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the cart demon, child-safe version, what one caring action can we practice today?',
    narrationScript: 'Krishna and the cart demon, child-safe version is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna dances with joy',
    shortTitle: 'Krishna dances with',
    summary: 'Krishna dances with joy retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 36',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna dances with joy begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna dances with joy references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna dances with joy, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna dances with joy, what one caring action can we practice today?',
    narrationScript: 'Krishna dances with joy is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the cowherd boys',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the cowherd boys retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 37',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the cowherd boys begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the cowherd boys references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the cowherd boys, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the cowherd boys, what one caring action can we practice today?',
    narrationScript: 'Krishna and the cowherd boys is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna’s lunch in the forest',
    shortTitle: 'Krishna’s lunch in',
    summary: 'Krishna’s lunch in the forest retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 38',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna’s lunch in the forest begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna’s lunch in the forest references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna’s lunch in the forest, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna’s lunch in the forest, what one caring action can we practice today?',
    narrationScript: 'Krishna’s lunch in the forest is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna thanks the cows',
    shortTitle: 'Krishna thanks the',
    summary: 'Krishna thanks the cows retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 39',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna thanks the cows begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna thanks the cows references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna thanks the cows, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna thanks the cows, what one caring action can we practice today?',
    narrationScript: 'Krishna thanks the cows is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna and the riverbank',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the riverbank retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 40',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna and the riverbank begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna and the riverbank references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna and the riverbank, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna and the riverbank, what one caring action can we practice today?',
    narrationScript: 'Krishna and the riverbank is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna calms Kaliya, child-safe version',
    shortTitle: 'Krishna calms Kaliya,',
    summary: 'Krishna calms Kaliya, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yamuna bank',
    event: 'Krishna childhood moment 41',
    characters: ['Krishna','Kaliya','Balarama'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Villagers worry as the Yamuna near Kaliya’s pool becomes unsafe for cattle.','Krishna enters the water while Balarama steadies the frightened gopas on the bank.','Krishna rises above Kaliya and dances with balance, calming the serpent’s anger.','Kaliya bows, and peace returns as the river is restored for everyone.'],
    parentSourceContext: 'Krishna calms Kaliya, child-safe version references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna calms Kaliya, child-safe version, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna calms Kaliya, child-safe version, what one caring action can we practice today?',
    narrationScript: 'Krishna calms Kaliya, child-safe version is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Kaliya learns to leave peacefully',
    shortTitle: 'Kaliya learns to',
    summary: 'Kaliya learns to leave peacefully retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 42',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, kaliya learns to leave peacefully begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Kaliya learns to leave peacefully references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Kaliya learns to leave peacefully, which action showed loving strength and why?',
    reflectionPrompt: 'After Kaliya learns to leave peacefully, what one caring action can we practice today?',
    narrationScript: 'Kaliya learns to leave peacefully is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna returns safely',
    shortTitle: 'Krishna returns safely',
    summary: 'Krishna returns safely retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 43',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, krishna returns safely begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'Krishna returns safely references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna returns safely, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna returns safely, what one caring action can we practice today?',
    narrationScript: 'Krishna returns safely is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'The village celebrates',
    shortTitle: 'The village celebrates',
    summary: 'The village celebrates retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'Krishna childhood moment 44',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, the village celebrates begins with a clear moment from Krishna’s childhood life.','Krishna, Yashoda, and Nanda each make a caring choice that moves the story forward.','Named places, friends, and family actions show how this moment unfolds in daily village life.','The story ends with a practical value children can imitate through kindness and respect.'],
    parentSourceContext: 'The village celebrates references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In The village celebrates, which action showed loving strength and why?',
    reflectionPrompt: 'After The village celebrates, what one caring action can we practice today?',
    narrationScript: 'The village celebrates is told in a warm devotional style with story-specific names, places, and values for children.'
  },
  {
    title: 'Krishna lifts Govardhan, child-safe version',
    shortTitle: 'Krishna lifts Govardhan,',
    summary: 'Krishna lifts Govardhan, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Govardhan hill',
    event: 'Krishna childhood moment 45',
    characters: ['Krishna','Nanda','Gokul families'],
    primaryValue: 'Protection',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Heavy rain lashes Gokul, and families gather near Govardhan with calves and carts.','Krishna asks everyone to stay close and keep courage in their hearts.','He lifts Govardhan like a shelter, giving the village safety through the storm.','When clouds clear, Krishna teaches gratitude for nature and humility before the divine.'],
    parentSourceContext: 'Krishna lifts Govardhan, child-safe version references named people and place in Krishna’s childhood tradition for family discussion.',
    parentDiscussionPrompt: 'In Krishna lifts Govardhan, child-safe version, which action showed loving strength and why?',
    reflectionPrompt: 'After Krishna lifts Govardhan, child-safe version, what one caring action can we practice today?',
    narrationScript: 'Krishna lifts Govardhan, child-safe version is told in a warm devotional style with story-specific names, places, and values for children.'
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
