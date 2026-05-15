export type StoryPanel = {
  id: string;
  title: string;
  text: string;
};

export type StoryJourney = {
  world: { slug: string; title: string; description: string };
  character: { slug: string; name: string };
  value: { slug: string; name: string };
  story: {
    slug: string;
    title: string;
    world: string;
    character: string;
    value: string;
    ageBand: '4-6' | '7-9';
    panels: StoryPanel[];
    quiz: {
      question: string;
      options: string[];
      correctAnswer: string;
      gentleFeedback: string;
    };
    badgeName: string;
    parentReflectionPrompt: string;
    completionShareCopy: string;
  };
};

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

export const vrindavanStoryPackets: StoryJourney[] = [vrindavanJourney, vrindavanSecondStoryPacket];
