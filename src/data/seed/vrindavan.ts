import type { StoryJourney } from '@/types/content';

export const vrindavanJourney: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'kindness', name: 'Kindness' },
  story: {
    slug: 'krishna-shares-butter',
    title: 'Krishna Shares Butter With Friends',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Kindness',
    ageBand: '4-6',
    panels: [
      { id: 'p1', title: 'Morning in Vrindavan', text: 'Golden sunlight warmed Vrindavan as Krishna skipped toward the butter room with a twinkle in his eyes.' },
      { id: 'p2', title: 'A Pot Full of Butter', text: 'He found a fresh clay pot full of creamy butter and smiled at its sweet smell.' },
      { id: 'p3', title: 'Footsteps at the Door', text: 'Krishna heard his friends nearby, sounding hungry after playing all morning.' },
      { id: 'p4', title: 'A Kind Choice', text: 'Instead of keeping it for himself, Krishna called everyone in and said, “Come, let us share!”' },
      { id: 'p5', title: 'Happy Hearts', text: 'The children laughed together, passing little scoops and thanking one another with bright faces.' },
      { id: 'p6', title: 'Kindness Glows', text: 'Krishna noticed that sharing made the butter sweeter, because kindness filled every heart.' }
    ],
    quiz: {
      question: 'What made Krishna’s friends feel happy?',
      options: ['He shared the butter with everyone', 'He hid the butter pot', 'He ran away with the butter'],
      correctAnswer: 'He shared the butter with everyone',
      gentleFeedback: 'Beautiful try. Krishna teaches us that sharing with love makes everyone feel included.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma chant seed for sharing',
      microShlokaText: 'सर्वे भवन्तु सुखिनः',
      transliteration: 'Sarve bhavantu sukhinah',
      childMeaning: 'May everyone be happy. Sharing helps everyone feel happy and included.',
      parentMeaning: 'Frame sharing as a family value: we notice who has less and make space so everyone feels included.',
      ritualPrompt: 'Place one hand on your heart and say the chant seed together one time before snack sharing.',
      reflectionQuestion: 'Who can we include and share with at home today?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Peacock Feather of Kindness',
    parentReflectionPrompt: 'Ask your child: When did Krishna show kindness today?',
    completionShareCopy: 'Today we completed a Little Dharma kindness journey together.'
  }
};

export const vrindavanSecondStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'compassion', name: 'Compassion' },
  story: {
    slug: 'krishna-helps-a-lost-calf',
    title: 'Krishna Helps a Lost Calf',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Compassion',
    ageBand: '4-6',
    panels: [
      { id: 'c1', title: 'Soft Cries in the Meadow', text: 'While walking through Vrindavan, Krishna heard a little calf crying near the tall grass.' },
      { id: 'c2', title: 'A Gentle Pause', text: 'Krishna knelt quietly and saw the calf looking around with worried eyes.' },
      { id: 'c3', title: 'Kind Words First', text: 'He softly said, “Do not worry, little one. I am here with you.”' },
      { id: 'c4', title: 'Searching Together', text: 'Krishna followed tiny hoof prints and asked nearby friends if they had seen the calf’s mother.' },
      { id: 'c5', title: 'A Joyful Reunion', text: 'Soon the mother cow came running, and the calf snuggled close with a happy bounce.' },
      { id: 'c6', title: 'Compassion in Action', text: 'Krishna smiled and reminded everyone that caring for someone afraid is a beautiful act of compassion.' }
    ],
    quiz: {
      question: 'How did Krishna show compassion to the calf?',
      options: ['He comforted and helped the calf find its mother', 'He ignored the calf and kept walking', 'He told the calf to stop crying loudly'],
      correctAnswer: 'He comforted and helped the calf find its mother',
      gentleFeedback: 'Lovely effort. Compassion means noticing someone’s fear and helping with patience and care.'
    },
    ritual: {
      microShlokaTitle: 'Simple Sanskrit phrase for compassion',
      microShlokaText: 'दयां कुरु',
      transliteration: 'Dayaam kuru',
      childMeaning: 'Be kind and caring. When someone is scared, we stay gentle and help them feel safe.',
      parentMeaning: 'Model compassion by naming fear calmly and guiding your child to offer comfort before solving the problem.',
      ritualPrompt: 'Take one slow breath together and say the phrase softly, then think of one person who may need comfort today.',
      reflectionQuestion: 'How can we help someone who feels scared tonight?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Lotus Heart of Compassion',
    parentReflectionPrompt: 'Ask your child: Who can we comfort today when they feel worried?',
    completionShareCopy: 'Today our family completed a Little Dharma compassion story and reflected on helping others feel safe.'
  }
};



export const vrindavanThirdStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'gratitude', name: 'Gratitude' },
  story: {
    slug: 'krishna-thanks-the-yamuna',
    title: 'Krishna Thanks the Yamuna',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Gratitude',
    ageBand: '4-6',
    panels: [
      { id: 'g1', title: 'Morning by the River', text: 'In this Little Dharma story, Krishna sits beside the flowing Yamuna at sunrise and listens to the soft water song.' },
      { id: 'g2', title: 'A Cool Drink', text: 'After playtime, Krishna and his friends took cool sips of water and felt refreshed.' },
      { id: 'g3', title: 'A Thankful Heart', text: 'Krishna smiled and said, “This river helps us every day. Let us say thank you with respect.”' },
      { id: 'g4', title: 'Careful Hands', text: 'The children picked up fallen leaves and kept the riverbank tidy before heading home.' },
      { id: 'g5', title: 'Sharing Thanks', text: 'Each friend named one gift they were thankful for—water, trees, sunshine, and friendship.' },
      { id: 'g6', title: 'Gratitude Grows Joy', text: 'Krishna reminded them that when we notice good gifts and care for them, joy grows quietly inside.' }
    ],
    quiz: {
      question: 'How did Krishna and his friends show gratitude at the river?',
      options: ['They said thank you and cared for the riverbank', 'They shouted and splashed everywhere', 'They left without noticing the river'],
      correctAnswer: 'They said thank you and cared for the riverbank',
      gentleFeedback: 'Great effort. Gratitude means noticing what helps us and caring for it with respect.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma chant seed for gratitude',
      microShlokaText: 'कृतज्ञोऽस्मि',
      transliteration: "Kritajno'smi",
      childMeaning: 'I am thankful. A thankful heart helps us feel calm and joyful.',
      parentMeaning: 'Build gratitude as a daily habit by naming one simple blessing and one small act of care each evening.',
      ritualPrompt: 'Before bedtime, place both hands together and softly say the phrase once, then each share one thing you are thankful for today.',
      reflectionQuestion: 'What is one gift from today that we can thank and protect?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Yamuna Thankful Drop',
    parentReflectionPrompt: 'Ask your child: What did you thank today, and how did you care for it?',
    completionShareCopy: 'Today we completed a Little Dharma gratitude journey and practiced saying thank you with care.'
  }
};

export const vrindavanFourthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'patience', name: 'Patience' },
  story: {
    slug: 'krishna-waits-under-the-kadamba-tree',
    title: 'Krishna Waits Under the Kadamba Tree',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Patience',
    ageBand: '4-6',
    panels: [
      { id: 't1', title: 'Clouds Gather Slowly', text: 'In this Little Dharma story, dark clouds gather in Vrindavan while Krishna waits for his friends near a kadamba tree.' },
      { id: 't2', title: 'A Long Minute', text: 'The wind grew cool, and Krishna noticed he felt restless because no one had arrived yet.' },
      { id: 't3', title: 'Breathing with the Breeze', text: 'He placed a hand on his chest and took three slow breaths, listening to leaves rustle above.' },
      { id: 't4', title: 'Kind Waiting', text: 'Instead of complaining, Krishna prepared space so everyone could sit comfortably when they came.' },
      { id: 't5', title: 'Friends Arrive', text: 'Soon his friends ran up smiling, grateful that Krishna had waited with such calm patience.' },
      { id: 't6', title: 'Patience Brings Peace', text: 'Krishna said, “When we wait gently, our hearts stay peaceful and ready to welcome others.”' }
    ],
    quiz: {
      question: 'What helped Krishna stay peaceful while waiting?',
      options: ['He took slow breaths and waited kindly', 'He got angry and stomped away', 'He refused to play with friends'],
      correctAnswer: 'He took slow breaths and waited kindly',
      gentleFeedback: 'Beautiful try. Patience can begin with one calm breath and one kind choice.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma practice phrase for patience',
      microShlokaText: 'शान्तिः शान्तिः',
      transliteration: 'Shaantih shaantih',
      childMeaning: 'Peace, peace. Slow breathing helps our body and heart feel peaceful while we wait.',
      parentMeaning: 'Use waiting moments to coach regulation: pause, breathe, and choose a kind next action instead of rushing.',
      ritualPrompt: 'Practice three slow breaths together while saying the phrase softly at the end of each breath cycle.',
      reflectionQuestion: 'Where can we practice patient breathing tomorrow—at meals, travel, or bedtime?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Kadamba Calm Leaf',
    parentReflectionPrompt: 'Ask your child: When you had to wait today, what helped your heart stay calm?',
    completionShareCopy: 'Today we completed a Little Dharma patience journey and practiced calm waiting together.'
  }
};

export const vrindavanFifthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'truthfulness', name: 'Truthfulness' },
  story: {
    slug: 'krishna-and-the-broken-flute',
    title: 'Krishna and the Broken Flute',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Truthfulness',
    ageBand: '4-6',
    panels: [
      { id: 'h1', title: 'Playtime in the Courtyard', text: 'In this Little Dharma story, Krishna and his friends play music in the courtyard, passing a small bamboo flute between turns.' },
      { id: 'h2', title: 'A Sudden Crack', text: 'The flute slipped from Krishna’s hand and made a tiny crack on the side.' },
      { id: 'h3', title: 'A Quiet Choice', text: 'For a moment, Krishna felt nervous and wondered if he should hide what happened.' },
      { id: 'h4', title: 'Speaking the Truth', text: 'He took a breath and said, “Friends, I dropped the flute. I am sorry. Let us repair it together.”' },
      { id: 'h5', title: 'Repair and Forgiveness', text: 'The children carefully wrapped the flute and thanked Krishna for telling the truth right away.' },
      { id: 'h6', title: 'Truth Builds Trust', text: 'Krishna reminded his friends that honest words may feel hard for a moment, but they make friendships strong.' }
    ],
    quiz: {
      question: 'Why was Krishna’s truthful choice important?',
      options: ['Honesty helped friends trust and solve the problem together', 'Hiding mistakes is always better', 'Truth only matters when adults are watching'],
      correctAnswer: 'Honesty helped friends trust and solve the problem together',
      gentleFeedback: 'Nice thinking. Truthfulness helps people feel safe with us, even when mistakes happen.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma phrase for truthfulness',
      microShlokaText: 'सत्यं वद',
      transliteration: 'Satyam vada',
      childMeaning: 'Speak truth. Honest words help hearts feel safe and friendships stay strong.',
      parentMeaning: 'Normalize gentle honesty by praising truthful repair after mistakes rather than focusing only on perfection.',
      ritualPrompt: 'At bedtime, say the phrase once together and invite your child to share one honest moment from today.',
      reflectionQuestion: 'What truthful words can help us repair quickly when a mistake happens?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Bamboo Truth Star',
    parentReflectionPrompt: 'Ask your child: What made it easier to tell the truth today?',
    completionShareCopy: 'Today we completed a Little Dharma truthfulness journey and practiced honest, kind repair.'
  }
};



export const vrindavanSixthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'cooperation', name: 'Cooperation' },
  story: {
    slug: 'krishna-builds-a-rain-shelter',
    title: 'Krishna Builds a Rain Shelter With Friends',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Cooperation',
    ageBand: '4-6',
    panels: [
      { id: 'o1', title: 'Rain Over Vrindavan', text: 'In this Little Dharma story, sudden rain begins while Krishna and his friends are returning home from the meadow.' },
      { id: 'o2', title: 'A Muddy Path', text: 'They see younger children near a puddle, unsure how to cross without slipping.' },
      { id: 'o3', title: 'Many Hands, One Plan', text: 'Krishna says, “Let us work together.” One child gathers broad leaves, another brings small sticks, and another clears stones.' },
      { id: 'o4', title: 'Careful Teamwork', text: 'Krishna helps everyone place the leaves and sticks to make a dry stepping path and a tiny shelter by a tree.' },
      { id: 'o5', title: 'Everyone Crosses Safely', text: 'The younger children walk across smiling, and everyone claps for the team effort.' },
      { id: 'o6', title: 'Cooperation Feels Strong', text: 'Krishna reminds them that when we combine kind effort, hard moments become lighter for all.' }
    ],
    quiz: {
      question: 'What showed cooperation in the rain?',
      options: ['Everyone took a small role and built the path together', 'Only one person worked while others watched', 'They argued and left the younger children behind'],
      correctAnswer: 'Everyone took a small role and built the path together',
      gentleFeedback: 'Lovely try. Cooperation means each person offers one helpful part so everyone can succeed.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma practice phrase for cooperation',
      microShlokaText: 'संगच्छध्वं संवदध्वं',
      transliteration: 'Sangacchadhvam samvadadhvam',
      childMeaning: 'Let us move and speak together. Teamwork helps everyone feel strong and supported.',
      parentMeaning: 'Present this as a Little Dharma teamwork chant seed: assign simple shared roles so cooperation is practiced, not only praised.',
      ritualPrompt: 'Stand in a small circle, hold hands for one breath, and say the phrase once before doing one tiny family cleanup task together.',
      reflectionQuestion: 'What small role can each of us take tomorrow to help as one team?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Monsoon Team Lantern',
    parentReflectionPrompt: 'Ask your child: What role did you play today that helped the whole family?',
    completionShareCopy: 'Today we completed a Little Dharma cooperation journey and practiced helping as one team.'
  }
};

export const vrindavanSeventhStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'forgiveness', name: 'Forgiveness' },
  story: {
    slug: 'krishna-and-the-torn-garland',
    title: 'Krishna and the Torn Garland',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Forgiveness',
    ageBand: '4-6',
    panels: [
      { id: 'f1', title: 'Festival Flowers', text: 'In this Little Dharma story, Krishna and friends string marigold flowers for an evening celebration in Vrindavan.' },
      { id: 'f2', title: 'A Garland Tears', text: 'A younger friend trips, and one finished garland tears apart on the ground.' },
      { id: 'f3', title: 'Big Feelings First', text: 'The friend looks upset and whispers, “I spoiled it.” Krishna notices everyone feels disappointed.' },
      { id: 'f4', title: 'A Gentle Repair Choice', text: 'Krishna says, “We can forgive and begin again.” He offers fresh thread and invites the friend to help restring flowers.' },
      { id: 'f5', title: 'Hands Working, Hearts Softening', text: 'Together they rebuild the garland, this time laughing and encouraging one another.' },
      { id: 'f6', title: 'Forgiveness Restores Joy', text: 'Krishna reminds them that forgiveness does not ignore mistakes—it helps hearts heal so we can repair with love.' }
    ],
    quiz: {
      question: 'How did Krishna practice forgiveness?',
      options: ['He chose gentle repair and invited the friend to try again', 'He blamed the friend and ended the activity', 'He pretended nothing happened and walked away'],
      correctAnswer: 'He chose gentle repair and invited the friend to try again',
      gentleFeedback: 'Beautiful effort. Forgiveness helps us soften, repair, and stay connected after mistakes.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma chant seed for forgiveness',
      microShlokaText: 'क्षम्यतां मम',
      transliteration: 'Kshamyataam mama',
      childMeaning: 'Please forgive me. We can say sorry, forgive, and begin again with kindness.',
      parentMeaning: 'Frame this as a Little Dharma repair phrase: pair apology, forgiveness, and one concrete repair action to build relational safety.',
      ritualPrompt: 'At bedtime, place a hand on the heart and say the phrase once, then each person names one “try again” moment from the day.',
      reflectionQuestion: 'When a mistake happens tomorrow, what words can help us repair quickly and kindly?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Marigold Mercy Circle',
    parentReflectionPrompt: 'Ask your child: How did forgiveness help our hearts feel lighter today?',
    completionShareCopy: 'Today we completed a Little Dharma forgiveness journey and practiced gentle repair after mistakes.'
  }
};

export const vrindavanStoryPackets: StoryJourney[] = [
  vrindavanJourney,
  vrindavanSecondStoryPacket,
  vrindavanThirdStoryPacket,
  vrindavanFourthStoryPacket,
  vrindavanFifthStoryPacket,
  vrindavanSixthStoryPacket,
  vrindavanSeventhStoryPacket
];
