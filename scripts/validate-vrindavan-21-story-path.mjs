import fs from 'node:fs';
const seedPath = 'src/data/seed/vrindavan.ts';
const expected = [
  'krishna-shares-butter','krishna-helps-a-lost-calf','krishna-thanks-the-yamuna','krishna-waits-under-the-kadamba-tree',
  'krishna-and-the-broken-flute','krishna-builds-a-rain-shelter','krishna-and-the-torn-garland','krishna-shares-the-picnic',
  'the-flute-and-quiet-listening','respect-at-the-yamuna-bank','the-garland-mistake-and-honest-bow','butter-pot-waiting-game',
  'sweeping-the-courtyard-together','wonder-at-fireflies','krishna-cares-for-the-smallest-calf','moonlight-calm-under-the-kadamba-tree',
  'the-friendship-repair-circle','krishna-speaks-bravely-and-kindly','the-wise-choice-at-the-crossroads','morning-devotion-in-vrindavan','the-gratitude-circle-at-sunset'
];
const text = fs.readFileSync(seedPath,'utf8');
for (const slug of expected) if (!text.includes(`slug: '${slug}'`)) throw new Error(`Missing expected slug: ${slug}`);
if (new Set(expected).size !== expected.length) throw new Error('Expected slug list contains duplicates');
for (const name of ['vrindavanFifteenthStoryPacket','vrindavanSixteenthStoryPacket','vrindavanSeventeenthStoryPacket','vrindavanEighteenthStoryPacket','vrindavanNineteenthStoryPacket','vrindavanTwentiethStoryPacket','vrindavanTwentyFirstStoryPacket']) {
  if (!text.includes(name)) throw new Error(`Missing Week 3 packet reference: ${name}`);
}
console.log('validate-vrindavan-21-story-path: PASS');
