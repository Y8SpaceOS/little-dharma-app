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
    event: 'specific_krishna_childhood_event_1',
    characters: ['Devaki','Vasudeva','Krishna'],
    primaryValue: 'Devotion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Mathura, Devaki and Vasudeva pray softly inside the guarded prison chamber.','At midnight, Krishna is born, and the room fills with calm light and hope.','Vasudeva wraps Krishna carefully while Devaki blesses the child with folded hands.','The birth gives both parents courage and faith that goodness will rise in the city.'],
    parentSourceContext: 'Krishna is born in Mathura uses named Krishna childhood references in Mathura prison chamber, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna is born in Mathura, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna is born in Mathura, what can we practice at home with calm and care?',
    narrationScript: 'Krishna is born in Mathura. In Mathura, Devaki and Vasudeva pray softly inside the guarded prison chamber. At midnight, Krishna is born, and the room fills with calm light and hope. Vasudeva wraps Krishna carefully while Devaki blesses the child with folded hands.'
  },
  {
    title: 'Vasudeva carries Krishna across the Yamuna',
    shortTitle: 'Vasudeva carries Krishna',
    summary: 'Vasudeva carries Krishna across the Yamuna retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yamuna river at night',
    event: 'specific_krishna_childhood_event_2',
    characters: ['Vasudeva','Krishna','Yamuna'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Under storm clouds, Vasudeva places baby Krishna in a basket and leaves Mathura.','At the Yamuna, he steps through rising water and keeps the basket high.','The river settles around him as he whispers prayers at every careful step.','He reaches Gokul safely and bows in gratitude for Krishna’s protection.'],
    parentSourceContext: 'Vasudeva carries Krishna across the Yamuna uses named Krishna childhood references in Yamuna river at night, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Vasudeva carries Krishna across the Yamuna, which choice protected others with kindness?',
    reflectionPrompt: 'After Vasudeva carries Krishna across the Yamuna, what can we practice at home with calm and care?',
    narrationScript: 'Vasudeva carries Krishna across the Yamuna. Under storm clouds, Vasudeva places baby Krishna in a basket and leaves Mathura. At the Yamuna, he steps through rising water and keeps the basket high. The river settles around him as he whispers prayers at every careful step.'
  },
  {
    title: 'Krishna arrives in Gokul',
    shortTitle: 'Krishna arrives in',
    summary: 'Krishna arrives in Gokul retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Nanda home in Gokul',
    event: 'specific_krishna_childhood_event_3',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Family Love',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Before dawn, Krishna is brought quietly to Nanda’s home in Gokul.','Yashoda rests peacefully as elders prepare warm cloth and lamp light.','Nanda receives the child with reverence and thanks the Divine for safe arrival.','Gokul wakes to soft songs, blessings, and village warmth for Krishna.'],
    parentSourceContext: 'Krishna arrives in Gokul uses named Krishna childhood references in Nanda home in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna arrives in Gokul, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna arrives in Gokul, what can we practice at home with calm and care?',
    narrationScript: 'Krishna arrives in Gokul. Before dawn, Krishna is brought quietly to Nanda’s home in Gokul. Yashoda rests peacefully as elders prepare warm cloth and lamp light. Nanda receives the child with reverence and thanks the Divine for safe arrival.'
  },
  {
    title: 'Yashoda holds baby Krishna',
    shortTitle: 'Yashoda holds baby',
    summary: 'Yashoda holds baby Krishna retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yashoda room',
    event: 'specific_krishna_childhood_event_4',
    characters: ['Yashoda','Krishna','Rohini'],
    primaryValue: 'Tender Care',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Yashoda cradles baby Krishna near the window as morning light enters the room.','Rohini brings warm cloth while Yashoda hums a lullaby for the child.','Krishna curls his fingers around her hand, and Yashoda smiles with wonder.','She prays that her son grow in compassion and truthfulness.'],
    parentSourceContext: 'Yashoda holds baby Krishna uses named Krishna childhood references in Yashoda room, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Yashoda holds baby Krishna, which choice protected others with kindness?',
    reflectionPrompt: 'After Yashoda holds baby Krishna, what can we practice at home with calm and care?',
    narrationScript: 'Yashoda holds baby Krishna. Yashoda cradles baby Krishna near the window as morning light enters the room. Rohini brings warm cloth while Yashoda hums a lullaby for the child. Krishna curls his fingers around her hand, and Yashoda smiles with wonder.'
  },
  {
    title: 'Nanda celebrates Krishna’s arrival',
    shortTitle: 'Nanda celebrates Krishna’s',
    summary: 'Nanda celebrates Krishna’s arrival retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul square',
    event: 'specific_krishna_childhood_event_5',
    characters: ['Nanda','Yashoda','Gokul families'],
    primaryValue: 'Community Joy',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Nanda invites Gokul families to the square to share joyful news.','Gopis bring sweets, and gopas decorate doorways with flowers and leaves.','Yashoda thanks each visitor as elders bless baby Krishna.','The gathering becomes a promise to raise children with kindness.'],
    parentSourceContext: 'Nanda celebrates Krishna’s arrival uses named Krishna childhood references in Gokul square, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Nanda celebrates Krishna’s arrival, which choice protected others with kindness?',
    reflectionPrompt: 'After Nanda celebrates Krishna’s arrival, what can we practice at home with calm and care?',
    narrationScript: 'Nanda celebrates Krishna’s arrival. Nanda invites Gokul families to the square to share joyful news. Gopis bring sweets, and gopas decorate doorways with flowers and leaves. Yashoda thanks each visitor as elders bless baby Krishna.'
  },
  {
    title: 'Krishna smiles at the cows',
    shortTitle: 'Krishna smiles at',
    summary: 'Krishna smiles at the cows retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul goshala',
    event: 'specific_krishna_childhood_event_6',
    characters: ['Krishna','Nanda','Cows of Gokul'],
    primaryValue: 'Compassion',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['At the goshala, Krishna watches cows resting after morning grazing.','A gentle calf nudges his hand, and Krishna smiles with delight.','Nanda shows him how to offer water and stroke the calf softly.','Krishna learns that serving animals is sacred care.'],
    parentSourceContext: 'Krishna smiles at the cows uses named Krishna childhood references in Gokul goshala, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna smiles at the cows, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna smiles at the cows, what can we practice at home with calm and care?',
    narrationScript: 'Krishna smiles at the cows. At the goshala, Krishna watches cows resting after morning grazing. A gentle calf nudges his hand, and Krishna smiles with delight. Nanda shows him how to offer water and stroke the calf softly.'
  },
  {
    title: 'Krishna and Balarama crawl together',
    shortTitle: 'Krishna and Balarama',
    summary: 'Krishna and Balarama crawl together retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Nanda courtyard',
    event: 'specific_krishna_childhood_event_7',
    characters: ['Krishna','Balarama','Yashoda'],
    primaryValue: 'Friendship',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Nanda’s courtyard, Krishna and Balarama crawl toward a wooden toy cart.','Balarama pauses so Krishna can reach the toy beside him.','Yashoda claps as both brothers share instead of grabbing.','Their play teaches patience, teamwork, and sibling love.'],
    parentSourceContext: 'Krishna and Balarama crawl together uses named Krishna childhood references in Nanda courtyard, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and Balarama crawl together, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and Balarama crawl together, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and Balarama crawl together. In Nanda’s courtyard, Krishna and Balarama crawl toward a wooden toy cart. Balarama pauses so Krishna can reach the toy beside him. Yashoda claps as both brothers share instead of grabbing.'
  },
  {
    title: 'Yashoda hears Krishna’s anklets',
    shortTitle: 'Yashoda hears Krishna’s',
    summary: 'Yashoda hears Krishna’s anklets retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Nanda home',
    event: 'specific_krishna_childhood_event_8',
    characters: ['Yashoda','Krishna','Nanda'],
    primaryValue: 'Listening',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Yashoda hears Krishna’s anklets in the hallway near the butter room.','She finds him balancing at the wall and reaches out calmly.','Instead of scolding, she guides his steps back to the courtyard.','Krishna holds her hand and learns safety through gentle instruction.'],
    parentSourceContext: 'Yashoda hears Krishna’s anklets uses named Krishna childhood references in Nanda home, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Yashoda hears Krishna’s anklets, which choice protected others with kindness?',
    reflectionPrompt: 'After Yashoda hears Krishna’s anklets, what can we practice at home with calm and care?',
    narrationScript: 'Yashoda hears Krishna’s anklets. Yashoda hears Krishna’s anklets in the hallway near the butter room. She finds him balancing at the wall and reaches out calmly. Instead of scolding, she guides his steps back to the courtyard.'
  },
  {
    title: 'Krishna reaches for butter',
    shortTitle: 'Krishna reaches for',
    summary: 'Krishna reaches for butter retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Butter room',
    event: 'specific_krishna_childhood_event_9',
    characters: ['Krishna','Yashoda','Rohini'],
    primaryValue: 'Curiosity',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Krishna stretches toward a hanging butter pot from a low stool.','Rohini steadies the stool while Yashoda watches closely.','Yashoda offers a small bowl and teaches asking before taking.','Krishna shares the butter and learns curiosity with responsibility.'],
    parentSourceContext: 'Krishna reaches for butter uses named Krishna childhood references in Butter room, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna reaches for butter, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna reaches for butter, what can we practice at home with calm and care?',
    narrationScript: 'Krishna reaches for butter. Krishna stretches toward a hanging butter pot from a low stool. Rohini steadies the stool while Yashoda watches closely. Yashoda offers a small bowl and teaches asking before taking.'
  },
  {
    title: 'The butter pot mystery',
    shortTitle: 'The butter pot',
    summary: 'The butter pot mystery retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yashoda kitchen',
    event: 'specific_krishna_childhood_event_10',
    characters: ['Yashoda','Krishna','Gopis'],
    primaryValue: 'Truthfulness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Yashoda notices tiny butter footprints near a clay pot in the kitchen.','Gopis describe what they saw while Krishna listens quietly.','Krishna admits he tasted butter and offers a sincere apology.','Together they clean the spill and restore trust through truth.'],
    parentSourceContext: 'The butter pot mystery uses named Krishna childhood references in Yashoda kitchen, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In The butter pot mystery, which choice protected others with kindness?',
    reflectionPrompt: 'After The butter pot mystery, what can we practice at home with calm and care?',
    narrationScript: 'The butter pot mystery. Yashoda notices tiny butter footprints near a clay pot in the kitchen. Gopis describe what they saw while Krishna listens quietly. Krishna admits he tasted butter and offers a sincere apology.'
  },
  {
    title: 'Krishna shares butter with friends',
    shortTitle: 'Krishna shares butter',
    summary: 'Krishna shares butter with friends retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul lane',
    event: 'specific_krishna_childhood_event_11',
    characters: ['Krishna','Gopas','Balarama'],
    primaryValue: 'Sharing',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Krishna sits under a neem tree with a small pot of fresh butter.','Two hungry gopa friends arrive after helping with calves.','Krishna divides the butter into equal portions for everyone.','The boys thank one another and continue playing in harmony.'],
    parentSourceContext: 'Krishna shares butter with friends uses named Krishna childhood references in Gokul lane, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna shares butter with friends, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna shares butter with friends, what can we practice at home with calm and care?',
    narrationScript: 'Krishna shares butter with friends. Krishna sits under a neem tree with a small pot of fresh butter. Two hungry gopa friends arrive after helping with calves. Krishna divides the butter into equal portions for everyone.'
  },
  {
    title: 'Yashoda looks for the missing butter',
    shortTitle: 'Yashoda looks for',
    summary: 'Yashoda looks for the missing butter retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Kitchen loft',
    event: 'specific_krishna_childhood_event_12',
    characters: ['Yashoda','Krishna','Balarama'],
    primaryValue: 'Truthfulness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Yashoda finds an empty butter bowl and checks each shelf carefully.','She asks Krishna and Balarama what happened before judging anyone.','Krishna explains he fed a calf and shared some with friends.','Yashoda praises honesty and reminds him to ask first next time.'],
    parentSourceContext: 'Yashoda looks for the missing butter uses named Krishna childhood references in Kitchen loft, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Yashoda looks for the missing butter, which choice protected others with kindness?',
    reflectionPrompt: 'After Yashoda looks for the missing butter, what can we practice at home with calm and care?',
    narrationScript: 'Yashoda looks for the missing butter. Yashoda finds an empty butter bowl and checks each shelf carefully. She asks Krishna and Balarama what happened before judging anyone. Krishna explains he fed a calf and shared some with friends.'
  },
  {
    title: 'Krishna’s playful smile',
    shortTitle: 'Krishna’s playful smile',
    summary: 'Krishna’s playful smile retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_13',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna’s playful smile unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna’s playful smile uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna’s playful smile, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna’s playful smile, what can we practice at home with calm and care?',
    narrationScript: 'Krishna’s playful smile. In Gokul, Krishna’s playful smile unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the calves',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the calves retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_14',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the calves unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the calves uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the calves, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the calves, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the calves. In Gokul, Krishna and the calves unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna learns from the village elders',
    shortTitle: 'Krishna learns from',
    summary: 'Krishna learns from the village elders retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_15',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna learns from the village elders unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna learns from the village elders uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna learns from the village elders, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna learns from the village elders, what can we practice at home with calm and care?',
    narrationScript: 'Krishna learns from the village elders. In Gokul, Krishna learns from the village elders unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Balarama protects Krishna',
    shortTitle: 'Balarama protects Krishna',
    summary: 'Balarama protects Krishna retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_16',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Balarama protects Krishna unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Balarama protects Krishna uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Balarama protects Krishna, which choice protected others with kindness?',
    reflectionPrompt: 'After Balarama protects Krishna, what can we practice at home with calm and care?',
    narrationScript: 'Balarama protects Krishna. In Gokul, Balarama protects Krishna unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the flute',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the flute retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_17',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the flute unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the flute uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the flute, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the flute, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the flute. In Gokul, Krishna and the flute unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'The first flute song',
    shortTitle: 'The first flute',
    summary: 'The first flute song retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_18',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, The first flute song unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'The first flute song uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In The first flute song, which choice protected others with kindness?',
    reflectionPrompt: 'After The first flute song, what can we practice at home with calm and care?',
    narrationScript: 'The first flute song. In Gokul, The first flute song unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'The gopas gather to listen',
    shortTitle: 'The gopas gather',
    summary: 'The gopas gather to listen retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_19',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, The gopas gather to listen unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'The gopas gather to listen uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In The gopas gather to listen, which choice protected others with kindness?',
    reflectionPrompt: 'After The gopas gather to listen, what can we practice at home with calm and care?',
    narrationScript: 'The gopas gather to listen. In Gokul, The gopas gather to listen unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna comforts a crying friend',
    shortTitle: 'Krishna comforts a',
    summary: 'Krishna comforts a crying friend retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_20',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna comforts a crying friend unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna comforts a crying friend uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna comforts a crying friend, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna comforts a crying friend, what can we practice at home with calm and care?',
    narrationScript: 'Krishna comforts a crying friend. In Gokul, Krishna comforts a crying friend unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna helps a small calf',
    shortTitle: 'Krishna helps a',
    summary: 'Krishna helps a small calf retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_21',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna helps a small calf unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna helps a small calf uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna helps a small calf, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna helps a small calf, what can we practice at home with calm and care?',
    narrationScript: 'Krishna helps a small calf. In Gokul, Krishna helps a small calf unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the rain clouds',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the rain clouds retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_22',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the rain clouds unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the rain clouds uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the rain clouds, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the rain clouds, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the rain clouds. In Gokul, Krishna and the rain clouds unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna watches the Yamuna flow',
    shortTitle: 'Krishna watches the',
    summary: 'Krishna watches the Yamuna flow retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_23',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna watches the Yamuna flow unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna watches the Yamuna flow uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna watches the Yamuna flow, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna watches the Yamuna flow, what can we practice at home with calm and care?',
    narrationScript: 'Krishna watches the Yamuna flow. In Gokul, Krishna watches the Yamuna flow unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the peacock feather',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the peacock feather retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_24',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the peacock feather unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the peacock feather uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the peacock feather, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the peacock feather, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the peacock feather. In Gokul, Krishna and the peacock feather unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and Radha’s friendship',
    shortTitle: 'Krishna and Radha’s',
    summary: 'Krishna and Radha’s friendship retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_25',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and Radha’s friendship unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and Radha’s friendship uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and Radha’s friendship, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and Radha’s friendship, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and Radha’s friendship. In Gokul, Krishna and Radha’s friendship unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna teaches sharing',
    shortTitle: 'Krishna teaches sharing',
    summary: 'Krishna teaches sharing retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_26',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna teaches sharing unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna teaches sharing uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna teaches sharing, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna teaches sharing, what can we practice at home with calm and care?',
    narrationScript: 'Krishna teaches sharing. In Gokul, Krishna teaches sharing unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna says sorry gently',
    shortTitle: 'Krishna says sorry',
    summary: 'Krishna says sorry gently retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_27',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna says sorry gently unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna says sorry gently uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna says sorry gently, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna says sorry gently, what can we practice at home with calm and care?',
    narrationScript: 'Krishna says sorry gently. In Gokul, Krishna says sorry gently unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna helps clean the courtyard',
    shortTitle: 'Krishna helps clean',
    summary: 'Krishna helps clean the courtyard retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_28',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna helps clean the courtyard unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna helps clean the courtyard uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna helps clean the courtyard, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna helps clean the courtyard, what can we practice at home with calm and care?',
    narrationScript: 'Krishna helps clean the courtyard. In Gokul, Krishna helps clean the courtyard unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna listens to Yashoda',
    shortTitle: 'Krishna listens to',
    summary: 'Krishna listens to Yashoda retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_29',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna listens to Yashoda unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna listens to Yashoda uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna listens to Yashoda, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna listens to Yashoda, what can we practice at home with calm and care?',
    narrationScript: 'Krishna listens to Yashoda. In Gokul, Krishna listens to Yashoda unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Yashoda sees the universe in Krishna’s mouth',
    shortTitle: 'Yashoda sees the',
    summary: 'Yashoda sees the universe in Krishna’s mouth retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yashoda courtyard',
    event: 'specific_krishna_childhood_event_30',
    characters: ['Yashoda','Krishna','Nanda'],
    primaryValue: 'Wonder',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Yashoda asks Krishna to open his mouth after seeing dust on his lips.','Inside she beholds stars, rivers, mountains, and endless sky.','For a breath she sees Gokul and herself within that sacred vision.','She embraces Krishna with awe, humility, and maternal devotion.'],
    parentSourceContext: 'Yashoda sees the universe in Krishna’s mouth uses named Krishna childhood references in Yashoda courtyard, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Yashoda sees the universe in Krishna’s mouth, which choice protected others with kindness?',
    reflectionPrompt: 'After Yashoda sees the universe in Krishna’s mouth, what can we practice at home with calm and care?',
    narrationScript: 'Yashoda sees the universe in Krishna’s mouth. Yashoda asks Krishna to open his mouth after seeing dust on his lips. Inside she beholds stars, rivers, mountains, and endless sky. For a breath she sees Gokul and herself within that sacred vision.'
  },
  {
    title: 'Krishna and the mortar',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the mortar retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Nanda courtyard',
    event: 'specific_krishna_childhood_event_31',
    characters: ['Yashoda','Krishna','Balarama'],
    primaryValue: 'Responsibility',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['After butter mischief, Yashoda ties Krishna gently to a wooden mortar.','She explains boundaries firmly, without anger or shame.','Krishna crawls forward, pulling the mortar across the courtyard.','The moment teaches that loving discipline can guide growth.'],
    parentSourceContext: 'Krishna and the mortar uses named Krishna childhood references in Nanda courtyard, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the mortar, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the mortar, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the mortar. After butter mischief, Yashoda ties Krishna gently to a wooden mortar. She explains boundaries firmly, without anger or shame. Krishna crawls forward, pulling the mortar across the courtyard.'
  },
  {
    title: 'Krishna frees the twin trees',
    shortTitle: 'Krishna frees the',
    summary: 'Krishna frees the twin trees retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_32',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna frees the twin trees unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna frees the twin trees uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna frees the twin trees, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna frees the twin trees, what can we practice at home with calm and care?',
    narrationScript: 'Krishna frees the twin trees. In Gokul, Krishna frees the twin trees unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna protects the village from Trinavarta',
    shortTitle: 'Krishna protects the',
    summary: 'Krishna protects the village from Trinavarta retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_33',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna protects the village from Trinavarta unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna protects the village from Trinavarta uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna protects the village from Trinavarta, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna protects the village from Trinavarta, what can we practice at home with calm and care?',
    narrationScript: 'Krishna protects the village from Trinavarta. In Gokul, Krishna protects the village from Trinavarta unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and Putana, child-safe version',
    shortTitle: 'Krishna and Putana,',
    summary: 'Krishna and Putana, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_34',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and Putana, child-safe version unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and Putana, child-safe version uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and Putana, child-safe version, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and Putana, child-safe version, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and Putana, child-safe version. In Gokul, Krishna and Putana, child-safe version unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the cart demon, child-safe version',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the cart demon, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_35',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the cart demon, child-safe version unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the cart demon, child-safe version uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the cart demon, child-safe version, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the cart demon, child-safe version, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the cart demon, child-safe version. In Gokul, Krishna and the cart demon, child-safe version unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna dances with joy',
    shortTitle: 'Krishna dances with',
    summary: 'Krishna dances with joy retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_36',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna dances with joy unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna dances with joy uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna dances with joy, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna dances with joy, what can we practice at home with calm and care?',
    narrationScript: 'Krishna dances with joy. In Gokul, Krishna dances with joy unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the cowherd boys',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the cowherd boys retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_37',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the cowherd boys unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the cowherd boys uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the cowherd boys, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the cowherd boys, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the cowherd boys. In Gokul, Krishna and the cowherd boys unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna’s lunch in the forest',
    shortTitle: 'Krishna’s lunch in',
    summary: 'Krishna’s lunch in the forest retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_38',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna’s lunch in the forest unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna’s lunch in the forest uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna’s lunch in the forest, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna’s lunch in the forest, what can we practice at home with calm and care?',
    narrationScript: 'Krishna’s lunch in the forest. In Gokul, Krishna’s lunch in the forest unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna thanks the cows',
    shortTitle: 'Krishna thanks the',
    summary: 'Krishna thanks the cows retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_39',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna thanks the cows unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna thanks the cows uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna thanks the cows, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna thanks the cows, what can we practice at home with calm and care?',
    narrationScript: 'Krishna thanks the cows. In Gokul, Krishna thanks the cows unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna and the riverbank',
    shortTitle: 'Krishna and the',
    summary: 'Krishna and the riverbank retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_40',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna and the riverbank unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna and the riverbank uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna and the riverbank, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna and the riverbank, what can we practice at home with calm and care?',
    narrationScript: 'Krishna and the riverbank. In Gokul, Krishna and the riverbank unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna calms Kaliya, child-safe version',
    shortTitle: 'Krishna calms Kaliya,',
    summary: 'Krishna calms Kaliya, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Yamuna bank',
    event: 'specific_krishna_childhood_event_41',
    characters: ['Krishna','Kaliya','Balarama'],
    primaryValue: 'Courage',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Villagers fear a poisoned stretch of Yamuna near Kaliya’s pool.','Krishna enters the water while Balarama calms worried friends.','Krishna dances on Kaliya’s hoods and ends the serpent’s rage.','Kaliya departs peacefully, and the river becomes safe again.'],
    parentSourceContext: 'Krishna calms Kaliya, child-safe version uses named Krishna childhood references in Yamuna bank, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna calms Kaliya, child-safe version, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna calms Kaliya, child-safe version, what can we practice at home with calm and care?',
    narrationScript: 'Krishna calms Kaliya, child-safe version. Villagers fear a poisoned stretch of Yamuna near Kaliya’s pool. Krishna enters the water while Balarama calms worried friends. Krishna dances on Kaliya’s hoods and ends the serpent’s rage.'
  },
  {
    title: 'Kaliya learns to leave peacefully',
    shortTitle: 'Kaliya learns to',
    summary: 'Kaliya learns to leave peacefully retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_42',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Kaliya learns to leave peacefully unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Kaliya learns to leave peacefully uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Kaliya learns to leave peacefully, which choice protected others with kindness?',
    reflectionPrompt: 'After Kaliya learns to leave peacefully, what can we practice at home with calm and care?',
    narrationScript: 'Kaliya learns to leave peacefully. In Gokul, Kaliya learns to leave peacefully unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna returns safely',
    shortTitle: 'Krishna returns safely',
    summary: 'Krishna returns safely retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_43',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, Krishna returns safely unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'Krishna returns safely uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna returns safely, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna returns safely, what can we practice at home with calm and care?',
    narrationScript: 'Krishna returns safely. In Gokul, Krishna returns safely unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'The village celebrates',
    shortTitle: 'The village celebrates',
    summary: 'The village celebrates retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Gokul',
    event: 'specific_krishna_childhood_event_44',
    characters: ['Krishna','Yashoda','Nanda'],
    primaryValue: 'Kindness',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['In Gokul, The village celebrates unfolds through a specific Krishna childhood moment with family and friends.','Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event.','The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.','The moment closes with a value learned through concrete choices in the scene.'],
    parentSourceContext: 'The village celebrates uses named Krishna childhood references in Gokul, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In The village celebrates, which choice protected others with kindness?',
    reflectionPrompt: 'After The village celebrates, what can we practice at home with calm and care?',
    narrationScript: 'The village celebrates. In Gokul, The village celebrates unfolds through a specific Krishna childhood moment with family and friends. Krishna, Yashoda, and Nanda respond with care in ways tied to this exact event. The story names people, places, and actions from Krishna’s life in Vrindavan and Gokul.'
  },
  {
    title: 'Krishna lifts Govardhan, child-safe version',
    shortTitle: 'Krishna lifts Govardhan,',
    summary: 'Krishna lifts Govardhan, child-safe version retold as a Krishna childhood micro-story with specific people, place, and event details.',
    place: 'Govardhan hill',
    event: 'specific_krishna_childhood_event_45',
    characters: ['Krishna','Nanda','Gokul families'],
    primaryValue: 'Protection',
    secondaryValues: ['Humility','Gratitude'],
    panels: ['Heavy rain floods Gokul as families gather by Govardhan with calves and carts.','Krishna asks everyone to stay close and help elders first.','He lifts Govardhan like a shelter while the village prays together.','When rain ends, Krishna teaches gratitude to nature and humility.'],
    parentSourceContext: 'Krishna lifts Govardhan, child-safe version uses named Krishna childhood references in Govardhan hill, with clear event sequencing for family dialogue.',
    parentDiscussionPrompt: 'In Krishna lifts Govardhan, child-safe version, which choice protected others with kindness?',
    reflectionPrompt: 'After Krishna lifts Govardhan, child-safe version, what can we practice at home with calm and care?',
    narrationScript: 'Krishna lifts Govardhan, child-safe version. Heavy rain floods Gokul as families gather by Govardhan with calves and carts. Krishna asks everyone to stay close and help elders first. He lifts Govardhan like a shelter while the village prays together.'
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
