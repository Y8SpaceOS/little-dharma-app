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



export const vrindavanEighthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'generosity', name: 'Generosity' },
  story: {
    slug: 'krishna-shares-the-picnic',
    title: 'Krishna Shares the Picnic',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Generosity',
    ageBand: '4-6',
    panels: [
      { id: 'w2s8p1', title: 'Picnic Cloth in the Grass', text: 'Krishna and friends spread a picnic cloth beneath a shady tree in Vrindavan.' },
      { id: 'w2s8p2', title: 'A Quiet Noticing', text: 'Krishna noticed one friend had only a tiny snack and looked unsure.' },
      { id: 'w2s8p3', title: 'Sharing First', text: 'With a warm smile, Krishna offered part of his fruit and said, “Let us all have enough.”' },
      { id: 'w2s8p4', title: 'Many Small Gifts', text: 'Soon each child shared one small bite, and the picnic became full for everyone.' },
      { id: 'w2s8p5', title: 'Generosity Feels Bright', text: 'Krishna reminded them that sharing first can make every heart feel included.' }
    ],
    quiz: {
      question: 'What helped everyone feel included at the picnic?',
      options: ['Each friend shared a small portion kindly', 'Only Krishna kept all his food', 'The children hid their snacks'],
      correctAnswer: 'Each friend shared a small portion kindly',
      gentleFeedback: 'Beautiful effort. Generosity means we make room so everyone can feel cared for.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma sharing phrase',
      microShlokaText: 'दानं शुभम्',
      transliteration: 'Daanam shubham',
      childMeaning: 'Sharing is beautiful. Even a small share can bring joy.',
      parentMeaning: 'Keep sharing invitational and warm: model giving first so children learn inclusion through example, not pressure.',
      ritualPrompt: 'Before a snack, each person offers one small piece kindly to someone nearby.',
      reflectionQuestion: 'What small thing can we happily share today?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Lotus Lunch Basket',
    parentReflectionPrompt: 'Ask your child: Where did sharing make someone feel included today?',
    completionShareCopy: 'Today we completed a Little Dharma generosity story and practiced sharing with joy.'
  }
};

export const vrindavanNinthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'focus', name: 'Focus' },
  story: {
    slug: 'the-flute-and-quiet-listening',
    title: 'The Flute and Quiet Listening',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Focus',
    ageBand: '4-6',
    panels: [
      { id: 'w2s9p1', title: 'Lively Afternoon', text: 'Friends were chatting and laughing while Krishna held his flute in the meadow.' },
      { id: 'w2s9p2', title: 'A Gentle Invitation', text: 'Krishna said, “Let us make our ears quiet for one minute and listen together.”' },
      { id: 'w2s9p3', title: 'Soft Sounds Appear', text: 'They heard a bird call, leaves moving, and one sweet flute note in the breeze.' },
      { id: 'w2s9p4', title: 'Calm Smiles', text: 'The children smiled because quiet listening helped them notice so much more.' },
      { id: 'w2s9p5', title: 'Focus Grows Gently', text: 'Krishna reminded them that focus can begin with one calm breath and kind attention.' }
    ],
    quiz: {
      question: 'What happened when the children listened quietly?',
      options: ['They noticed gentle sounds and felt calmer', 'They heard nothing at all', 'They became upset with each other'],
      correctAnswer: 'They noticed gentle sounds and felt calmer',
      gentleFeedback: 'Lovely try. Quiet listening helps our minds settle and notice small beautiful details.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma listening phrase',
      microShlokaText: 'शृणु शांतम्',
      transliteration: 'Shrinu shaantam',
      childMeaning: 'Listen with peace. Quiet ears can hear gentle sounds.',
      parentMeaning: 'Treat listening as a calm practice: short, encouraging, and effort-focused rather than performance-focused.',
      ritualPrompt: 'Sit together for one minute and name one soft sound each person notices.',
      reflectionQuestion: 'Which quiet sound helped your heart feel calm?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Silver Flute Leaf',
    parentReflectionPrompt: 'Ask your child: When did quiet listening help you notice more today?',
    completionShareCopy: 'Today we completed a Little Dharma focus story and practiced quiet listening together.'
  }
};

export const vrindavanTenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'respect', name: 'Respect' },
  story: {
    slug: 'respect-at-the-yamuna-bank',
    title: 'Respect at the Yamuna Bank',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Respect',
    ageBand: '4-6',
    panels: [
      { id: 'w2s10p1', title: 'Approaching the River', text: 'Krishna and friends walked toward the Yamuna as evening light turned the water gold.' },
      { id: 'w2s10p2', title: 'Remembering Gentle Steps', text: 'Krishna slowed down and said, “This is a special place. Let us move gently.”' },
      { id: 'w2s10p3', title: 'Respect in Action', text: 'The children used quiet voices, careful feet, and tidy hands near the riverbank.' },
      { id: 'w2s10p4', title: 'A Peaceful Visit', text: 'Because everyone stayed respectful, the riverbank felt calm and welcoming.' },
      { id: 'w2s10p5', title: 'Gentle Hearts', text: 'Krishna smiled and reminded them that respect keeps shared places peaceful for all.' }
    ],
    quiz: {
      question: 'How did the children show respect at the Yamuna bank?',
      options: ['With quiet voices, gentle steps, and clean habits', 'By running loudly and pushing', 'By leaving the place messy'],
      correctAnswer: 'With quiet voices, gentle steps, and clean habits',
      gentleFeedback: 'Wonderful effort. Respect means our actions help a special place stay peaceful and cared for.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma respect phrase',
      microShlokaText: 'मृदु चल',
      transliteration: 'Mridu chala',
      childMeaning: 'Move gently. Gentle steps show respect.',
      parentMeaning: 'Link respect to observable habits—voice, movement, and care—so children can practice it in daily places.',
      ritualPrompt: 'Take five slow gentle steps together as if entering a peaceful sacred place.',
      reflectionQuestion: 'Where can we practice gentle steps at home tomorrow?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'River Respect Pebble',
    parentReflectionPrompt: 'Ask your child: What did your gentle body do to show respect today?',
    completionShareCopy: 'Today we completed a Little Dharma respect story and practiced gentle steps.'
  }
};

export const vrindavanEleventhStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'humility', name: 'Humility' },
  story: {
    slug: 'the-garland-mistake-and-honest-bow',
    title: 'The Garland Mistake and Honest Bow',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Humility',
    ageBand: '4-6',
    panels: [
      { id: 'w2s11p1', title: 'Flower Work Together', text: 'Krishna and friends were tying marigolds into a bright garland for the courtyard.' },
      { id: 'w2s11p2', title: 'A Small Mistake', text: 'Krishna pulled too fast, and the garland knot came loose.' },
      { id: 'w2s11p3', title: 'Honest Bow', text: 'He placed a hand on his heart, bowed gently, and said, “I made a mistake. I am sorry.”' },
      { id: 'w2s11p4', title: 'Repair with Friends', text: 'Together they tied the flowers again, this time slowly and with smiles.' },
      { id: 'w2s11p5', title: 'Humility Restores Connection', text: 'Krishna reminded them that honest apology helps hearts reconnect quickly.' }
    ],
    quiz: {
      question: 'What did Krishna do after the garland mistake?',
      options: ['He admitted it, bowed, and helped repair', 'He blamed someone else', 'He walked away silently'],
      correctAnswer: 'He admitted it, bowed, and helped repair',
      gentleFeedback: 'Great try. Humility means we can tell the truth and make things better with care.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma repair phrase',
      microShlokaText: 'क्षम्यतां',
      transliteration: 'Kshamyataam',
      childMeaning: 'Please forgive me. I can repair with kindness.',
      parentMeaning: 'Model dignity-based repair: honest ownership, gentle apology, and one concrete helping action.',
      ritualPrompt: 'Hand on heart, bow softly once, and practice saying: “I made a mistake, I can make it better.”',
      reflectionQuestion: 'What brave truth can help us repair today?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Golden Garland Knot',
    parentReflectionPrompt: 'Ask your child: How did honest words help us reconnect today?',
    completionShareCopy: 'Today we completed a Little Dharma humility story and practiced honest repair.'
  }
};

export const vrindavanTwelfthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'self-control', name: 'Self-Control' },
  story: {
    slug: 'butter-pot-waiting-game',
    title: 'Butter Pot Waiting Game',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Self-Control',
    ageBand: '4-6',
    panels: [
      { id: 'w2s12p1', title: 'A Tempting Butter Pot', text: 'A fresh butter pot sat nearby, and everyone wanted a taste right away.' },
      { id: 'w2s12p2', title: 'Pause Before Hands', text: 'Krishna laughed gently and said, “Let us play a waiting game first.”' },
      { id: 'w2s12p3', title: 'Three Calm Breaths', text: 'They took three slow breaths and watched their eager hands become still.' },
      { id: 'w2s12p4', title: 'Wise Choice', text: 'After waiting, they asked politely, shared turns, and enjoyed together.' },
      { id: 'w2s12p5', title: 'Waiting Helps', text: 'Krishna reminded them that a little waiting helps us choose with care.' }
    ],
    quiz: {
      question: 'What helped in the butter pot waiting game?',
      options: ['Three breaths before acting', 'Grabbing quickly first', 'Arguing for turns'],
      correctAnswer: 'Three breaths before acting',
      gentleFeedback: 'Nice effort. A short pause can make our next choice kinder and wiser.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma waiting phrase',
      microShlokaText: 'क्षनं तिष्ठ',
      transliteration: 'Kshanam tishtha',
      childMeaning: 'Wait a moment. Breathing helps us choose well.',
      parentMeaning: 'Keep self-control playful: brief pause, soft tone, and encouragement for effort over perfection.',
      ritualPrompt: 'Before touching a wanted item, take three slow breaths together.',
      reflectionQuestion: 'When can we use a three-breath wait tomorrow?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Butter Star Token',
    parentReflectionPrompt: 'Ask your child: How did waiting help your choice today?',
    completionShareCopy: 'Today we completed a Little Dharma self-control story and practiced the three-breath wait.'
  }
};

export const vrindavanThirteenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'service', name: 'Service' },
  story: {
    slug: 'sweeping-the-courtyard-together',
    title: 'Sweeping the Courtyard Together',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Service',
    ageBand: '4-6',
    panels: [
      { id: 'w2s13p1', title: 'Leaves Everywhere', text: 'After playtime, dry leaves covered the courtyard floor.' },
      { id: 'w2s13p2', title: 'Krishna Starts Helping', text: 'Krishna picked up a small broom and began sweeping with a cheerful face.' },
      { id: 'w2s13p3', title: 'Friends Join In', text: 'One by one, friends joined with tiny tasks—sweeping, gathering, and tidying corners.' },
      { id: 'w2s13p4', title: 'Peaceful Courtyard', text: 'Soon the space looked calm and clean, ready for everyone to sit together.' },
      { id: 'w2s13p5', title: 'Service Feels Joyful', text: 'Krishna reminded them that helping together is a joyful gift to shared spaces.' }
    ],
    quiz: {
      question: 'Why did sweeping together feel good?',
      options: ['Everyone helped and made the space peaceful', 'Only one person worked while others watched', 'The children made a bigger mess'],
      correctAnswer: 'Everyone helped and made the space peaceful',
      gentleFeedback: 'Lovely effort. Service means we offer helpful hands so everyone can enjoy a peaceful space.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma helping phrase',
      microShlokaText: 'सेवा आनंदः',
      transliteration: 'Sevaa aanandah',
      childMeaning: 'Helping is joyful. Small help matters.',
      parentMeaning: 'Frame service as shared contribution, not punishment. Keep tasks short and doable for confidence.',
      ritualPrompt: 'Choose one tiny helping action and do it together for two minutes.',
      reflectionQuestion: 'Who did we help today, and how did it feel?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Courtyard Care Broom',
    parentReflectionPrompt: 'Ask your child: Which small helping task felt joyful today?',
    completionShareCopy: 'Today we completed a Little Dharma service story and practiced joyful helping.'
  }
};

export const vrindavanFourteenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'curiosity', name: 'Curiosity' },
  story: {
    slug: 'wonder-at-fireflies',
    title: 'Wonder at Fireflies',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Curiosity',
    ageBand: '4-6',
    panels: [
      { id: 'w2s14p1', title: 'Twilight in Vrindavan', text: 'As evening settled, tiny lights began blinking above the grass.' },
      { id: 'w2s14p2', title: 'Eyes Full of Wonder', text: 'Krishna and friends watched fireflies glow and dance in the warm dusk air.' },
      { id: 'w2s14p3', title: 'Gentle Questions', text: 'Krishna asked, “What beauty do you notice when we look slowly?”' },
      { id: 'w2s14p4', title: 'Quiet Noticing', text: 'The children shared soft answers and stood peacefully in the glowing night.' },
      { id: 'w2s14p5', title: 'Wonder Stays in the Heart', text: 'Krishna smiled and reminded them that curiosity helps us notice and cherish small gifts.' }
    ],
    quiz: {
      question: 'What can curiosity help us do?',
      options: ['Notice and appreciate small beautiful things', 'Rush past everything quickly', 'Make fun of questions'],
      correctAnswer: 'Notice and appreciate small beautiful things',
      gentleFeedback: 'Beautiful thinking. Curiosity helps us learn gently and enjoy the wonder around us.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma wonder phrase',
      microShlokaText: 'आश्चर्यं पश्य',
      transliteration: 'Aashcharyam pashya',
      childMeaning: 'See the wonder. Small lights can fill our hearts with joy.',
      parentMeaning: 'Welcome open-ended wonder questions without rushing to correct or finish; curiosity grows through patient attention.',
      ritualPrompt: 'Pause for one breath and each name one tiny beautiful thing you notice right now.',
      reflectionQuestion: 'What small wonder do we want to notice again tomorrow?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Firefly Wonder Light',
    parentReflectionPrompt: 'Ask your child: What tiny beautiful thing did you notice tonight?',
    completionShareCopy: 'Today we completed a Little Dharma curiosity story and practiced wonder-noticing.'
  }
};



export const vrindavanFifteenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'responsibility', name: 'Responsibility' },
  story: {
    slug: 'krishna-cares-for-the-smallest-calf',
    title: 'Krishna Cares for the Smallest Calf',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Responsibility',
    ageBand: '4-6',
    panels: [
      { id: 'w3s15p1', title: 'Morning Meadow Bell', text: 'At sunrise, Krishna counted the calves before the herd walked to the meadow.' },
      { id: 'w3s15p2', title: 'One Tiny Lagging Step', text: 'The smallest calf walked slowly behind, still learning where to place its feet.' },
      { id: 'w3s15p3', title: 'A Caring Pause', text: 'Krishna slowed down and stayed beside the little calf so it would not feel alone.' },
      { id: 'w3s15p4', title: 'Safe and Steady', text: 'He guided it around stones and toward soft grass while friends watched with gentle smiles.' },
      { id: 'w3s15p5', title: 'Responsibility Is Love', text: 'Krishna said, “When someone is small, we protect them with patient care.”' }
    ],
    quiz: {
      question: 'How did Krishna show responsibility?',
      options: ['He stayed with the smallest calf and guided it safely', 'He hurried ahead and forgot to count', 'He laughed when the calf walked slowly'],
      correctAnswer: 'He stayed with the smallest calf and guided it safely',
      gentleFeedback: 'Wonderful effort. Responsibility means we care for what is in our hands with steady love.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma care phrase',
      microShlokaText: 'पालनं प्रेम',
      transliteration: 'Paalanam prema',
      childMeaning: 'Caring is love. We help little ones feel safe.',
      parentMeaning: 'Teach responsibility as loving stewardship: small daily acts of care build reliability without pressure.',
      ritualPrompt: 'Choose one small caring task and complete it gently together today.',
      reflectionQuestion: 'Who needed our careful help today?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Calf Care Bell',
    parentReflectionPrompt: 'Ask your child: What careful job did you finish with love today?',
    completionShareCopy: 'Today we completed a Little Dharma responsibility story and practiced steady care.'
  }
};

export const vrindavanSixteenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'calm', name: 'Calm' },
  story: {
    slug: 'moonlight-calm-under-the-kadamba-tree',
    title: 'Moonlight Calm Under the Kadamba Tree',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Calm',
    ageBand: '4-6',
    panels: [
      { id: 'w3s16p1', title: 'Soft Moon Over Vrindavan', text: 'Night came quietly, and moonlight silvered the kadamba leaves.' },
      { id: 'w3s16p2', title: 'Busy Hearts', text: 'After a full day, Krishna and friends still felt bouncy and noisy inside.' },
      { id: 'w3s16p3', title: 'Listen to the Breeze', text: 'Krishna invited everyone to sit, feel the cool air, and hear crickets singing.' },
      { id: 'w3s16p4', title: 'Three Gentle Breaths', text: 'They breathed in slowly and out slowly until shoulders softened and smiles returned.' },
      { id: 'w3s16p5', title: 'Calm Lights the Night', text: 'Krishna said, “A calm heart helps us rest, listen, and be kind.”' }
    ],
    quiz: {
      question: 'What helped the friends feel calm?',
      options: ['They sat quietly and took slow breaths', 'They shouted louder and louder', 'They ran in circles without stopping'],
      correctAnswer: 'They sat quietly and took slow breaths',
      gentleFeedback: 'Lovely try. Calm can begin with one quiet pause and one slow breath.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma calm phrase',
      microShlokaText: 'शान्तं हृदयम्',
      transliteration: 'Shaantam hridayam',
      childMeaning: 'Calm heart. Slow breaths help us feel peaceful.',
      parentMeaning: 'Use short evening pauses to co-regulate; calm is practiced through rhythm, not forced silence.',
      ritualPrompt: 'Sit together and take three slow breaths under a dim light before bedtime.',
      reflectionQuestion: 'When did our body feel calmer tonight?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Moonlit Calm Leaf',
    parentReflectionPrompt: 'Ask your child: Which breath felt the calmest tonight?',
    completionShareCopy: 'Today we completed a Little Dharma calm story and practiced moonlight breathing.'
  }
};

export const vrindavanSeventeenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'forgiveness', name: 'Forgiveness' },
  story: {
    slug: 'the-friendship-repair-circle',
    title: 'The Friendship Repair Circle',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Forgiveness',
    ageBand: '4-6',
    panels: [
      { id: 'w3s17p1', title: 'A Hurt Moment', text: 'During play, two friends pulled the same garland and it tore in half.' },
      { id: 'w3s17p2', title: 'Tight Faces', text: 'Both children looked upset and turned away from each other.' },
      { id: 'w3s17p3', title: 'Circle of Listening', text: 'Krishna invited everyone into a small circle and asked each friend to speak kindly and listen fully.' },
      { id: 'w3s17p4', title: 'Sorry and Repair', text: 'Each child said sorry, and together they retied the flowers with careful hands.' },
      { id: 'w3s17p5', title: 'Forgiveness Makes Space', text: 'Krishna smiled and said forgiveness helps friendship breathe again.' }
    ],
    quiz: {
      question: 'How was friendship repaired?',
      options: ['They listened, said sorry, and fixed the garland together', 'They stayed angry all day', 'They blamed one friend only'],
      correctAnswer: 'They listened, said sorry, and fixed the garland together',
      gentleFeedback: 'Beautiful effort. Forgiveness grows when we listen, repair, and begin again kindly.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma repair phrase',
      microShlokaText: 'क्षमां ददामि',
      transliteration: 'Kshamaam dadaami',
      childMeaning: 'I offer forgiveness. We can begin again with kindness.',
      parentMeaning: 'Guide conflict repair in short steps: calm, listen, apologize, and make one concrete repair action.',
      ritualPrompt: 'In a small circle, each person says one kind word and one repair promise.',
      reflectionQuestion: 'What helped us make peace today?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Friendship Repair Flower',
    parentReflectionPrompt: 'Ask your child: What words helped fix a friendship today?',
    completionShareCopy: 'Today we completed a Little Dharma forgiveness story and practiced kind repair.'
  }
};

export const vrindavanEighteenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'courage', name: 'Courage' },
  story: {
    slug: 'krishna-speaks-bravely-and-kindly',
    title: 'Krishna Speaks Bravely and Kindly',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Courage',
    ageBand: '4-6',
    panels: [
      { id: 'w3s18p1', title: 'Crowded Path', text: 'On a narrow path, older children rushed ahead and smaller ones were squeezed aside.' },
      { id: 'w3s18p2', title: 'A Brave Breath', text: 'Krishna noticed the problem and took one steady breath before speaking.' },
      { id: 'w3s18p3', title: 'Kind Clear Words', text: 'He said, “Let us make room for everyone so all can walk safely together.”' },
      { id: 'w3s18p4', title: 'Space for All', text: 'The children slowed down, formed two gentle lines, and the path felt peaceful again.' },
      { id: 'w3s18p5', title: 'Courage with Kindness', text: 'Krishna reminded them that brave words can be soft and still strong.' }
    ],
    quiz: {
      question: 'What made Krishna’s courage special?',
      options: ['He spoke up clearly and kindly for everyone’s safety', 'He yelled to scare others', 'He stayed silent even when others were hurt'],
      correctAnswer: 'He spoke up clearly and kindly for everyone’s safety',
      gentleFeedback: 'Great try. Courage can sound calm, respectful, and caring.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma courage phrase',
      microShlokaText: 'धैर्यं वद',
      transliteration: 'Dhairyam vada',
      childMeaning: 'Speak with courage. Kind words can protect others.',
      parentMeaning: 'Coach assertive safety language your child can use: calm voice, clear request, respectful tone.',
      ritualPrompt: 'Practice one brave-and-kind sentence together for a tricky moment.',
      reflectionQuestion: 'When can we use brave kind words tomorrow?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Brave Voice Conch',
    parentReflectionPrompt: 'Ask your child: What brave kind sentence do you want to remember?',
    completionShareCopy: 'Today we completed a Little Dharma courage story and practiced brave kind words.'
  }
};

export const vrindavanNineteenthStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'wisdom', name: 'Wisdom' },
  story: {
    slug: 'the-wise-choice-at-the-crossroads',
    title: 'The Wise Choice at the Crossroads',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Wisdom',
    ageBand: '4-6',
    panels: [
      { id: 'w3s19p1', title: 'Two Paths Ahead', text: 'Walking home, Krishna and friends reached a crossroads with two ways to the village.' },
      { id: 'w3s19p2', title: 'Fast but Slippery', text: 'One path looked short but muddy after rain; the other was longer and dry.' },
      { id: 'w3s19p3', title: 'Pause and Think', text: 'Krishna said, “Let us choose what keeps everyone safe, not only what is quick.”' },
      { id: 'w3s19p4', title: 'Steady Steps Home', text: 'They chose the longer dry path and arrived smiling, clean, and safe.' },
      { id: 'w3s19p5', title: 'Wisdom Chooses Well', text: 'Krishna taught that wise choices think ahead with care for all.' }
    ],
    quiz: {
      question: 'Why did they choose the longer path?',
      options: ['It was safer for everyone', 'It looked more exciting and risky', 'They wanted to get muddy quickly'],
      correctAnswer: 'It was safer for everyone',
      gentleFeedback: 'Nice effort. Wisdom looks ahead and chooses what protects everyone.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma wisdom phrase',
      microShlokaText: 'धीः पश्यति',
      transliteration: 'Dhih pashyati',
      childMeaning: 'Wisdom sees ahead. We pause and choose carefully.',
      parentMeaning: 'Model decision pauses: name options, consider safety, then choose with calm clarity.',
      ritualPrompt: 'Before one family decision, pause for one breath and name the safest choice together.',
      reflectionQuestion: 'What helped us make a wise choice today?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Crossroads Wisdom Lamp',
    parentReflectionPrompt: 'Ask your child: How did we choose safely today?',
    completionShareCopy: 'Today we completed a Little Dharma wisdom story and practiced choosing with care.'
  }
};

export const vrindavanTwentiethStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'devotion', name: 'Devotion' },
  story: {
    slug: 'morning-devotion-in-vrindavan',
    title: 'Morning Devotion in Vrindavan',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Devotion',
    ageBand: '4-6',
    panels: [
      { id: 'w3s20p1', title: 'Dawn Bell Sounds', text: 'At dawn, Krishna and friends gathered quietly as birds welcomed the morning.' },
      { id: 'w3s20p2', title: 'Hands at the Heart', text: 'They stood with gentle posture, hands near the heart, and took a grateful breath.' },
      { id: 'w3s20p3', title: 'Offering a Simple Song', text: 'Krishna led a short prayerful song, soft and peaceful, with loving attention.' },
      { id: 'w3s20p4', title: 'Devotion in Actions', text: 'After singing, they helped prepare water and flowers for the day with care.' },
      { id: 'w3s20p5', title: 'Love in Daily Rhythm', text: 'Krishna smiled and said devotion is love remembered in small daily acts.' }
    ],
    quiz: {
      question: 'What did devotion look like in this story?',
      options: ['A gentle morning song and caring daily actions', 'Rushing through the morning without attention', 'Only saying words with no caring actions'],
      correctAnswer: 'A gentle morning song and caring daily actions',
      gentleFeedback: 'Beautiful try. Devotion can be simple, sincere, and steady each day.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma devotion phrase',
      microShlokaText: 'भक्तिः प्रेम',
      transliteration: 'Bhaktih prema',
      childMeaning: 'Devotion is loving care. We remember love each day.',
      parentMeaning: 'Keep devotional practice child-safe and short: sincere attention, gentle posture, and one concrete caring act.',
      ritualPrompt: 'Begin the day with one soft chant seed and one small caring action done together.',
      reflectionQuestion: 'What loving action can we offer this morning?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Morning Devotion Bloom',
    parentReflectionPrompt: 'Ask your child: Which morning action felt most loving today?',
    completionShareCopy: 'Today we completed a Little Dharma devotion story and practiced a loving morning rhythm.'
  }
};

export const vrindavanTwentyFirstStoryPacket: StoryJourney = {
  world: { slug: 'vrindavan', title: 'Vrindavan', description: 'Sacred groves of love and kindness.' },
  character: { slug: 'krishna', name: 'Krishna' },
  value: { slug: 'joyful-gratitude', name: 'Joyful Gratitude' },
  story: {
    slug: 'the-gratitude-circle-at-sunset',
    title: 'The Gratitude Circle at Sunset',
    world: 'Vrindavan',
    character: 'Krishna',
    value: 'Joyful Gratitude',
    ageBand: '4-6',
    panels: [
      { id: 'w3s21p1', title: 'Golden Sunset Sky', text: 'As the sun set, Krishna and friends sat in a circle beneath a glowing sky.' },
      { id: 'w3s21p2', title: 'One by One Thanks', text: 'Each child shared one thankful joy from the day: a song, a friend, a kind meal, a cool breeze.' },
      { id: 'w3s21p3', title: 'Listening Hearts', text: 'Everyone listened quietly and smiled when each voice was heard.' },
      { id: 'w3s21p4', title: 'Joy Shared Is Joy Grown', text: 'Krishna said, “When we share gratitude, joy becomes bigger for everyone.”' },
      { id: 'w3s21p5', title: 'A Full and Peaceful Close', text: 'They ended with folded hands, carrying thankfulness into the evening.' }
    ],
    quiz: {
      question: 'What happened in the gratitude circle?',
      options: ['Each person shared one thankful joy and listened kindly', 'Only one person spoke while others left', 'They competed to have the biggest gift'],
      correctAnswer: 'Each person shared one thankful joy and listened kindly',
      gentleFeedback: 'Lovely thinking. Gratitude and listening help joy grow together.'
    },
    ritual: {
      microShlokaTitle: 'Little Dharma gratitude-close phrase',
      microShlokaText: 'धन्योऽस्मि हृष्टोऽस्मि',
      transliteration: "Dhanyo'smi hrishto'smi",
      childMeaning: 'I am thankful, I am joyful.',
      parentMeaning: 'Close the day with shared gratitude rounds to build emotional warmth, belonging, and peaceful bedtime transitions.',
      ritualPrompt: 'At sunset or bedtime, each family member names one thankful joy from today.',
      reflectionQuestion: 'What joy are we carrying into tomorrow?',
      suggestedPracticeDurationSeconds: 90
    },
    badgeName: 'Sunset Gratitude Circle',
    parentReflectionPrompt: 'Ask your child: What thankful joy do you want to remember tomorrow?',
    completionShareCopy: 'Today we completed a Little Dharma joyful gratitude story and closed the day with thanks.'
  }
};
export const vrindavanStoryPackets: StoryJourney[] = [
  vrindavanJourney,
  vrindavanSecondStoryPacket,
  vrindavanThirdStoryPacket,
  vrindavanFourthStoryPacket,
  vrindavanFifthStoryPacket,
  vrindavanSixthStoryPacket,
  vrindavanSeventhStoryPacket,
  vrindavanEighthStoryPacket,
  vrindavanNinthStoryPacket,
  vrindavanTenthStoryPacket,
  vrindavanEleventhStoryPacket,
  vrindavanTwelfthStoryPacket,
  vrindavanThirteenthStoryPacket,
  vrindavanFourteenthStoryPacket,
  vrindavanFifteenthStoryPacket,
  vrindavanSixteenthStoryPacket,
  vrindavanSeventeenthStoryPacket,
  vrindavanEighteenthStoryPacket,
  vrindavanNineteenthStoryPacket,
  vrindavanTwentiethStoryPacket,
  vrindavanTwentyFirstStoryPacket
];
