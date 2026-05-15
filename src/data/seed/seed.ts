import { writeFileSync } from 'node:fs';
import { vrindavanStoryPackets } from './vrindavan';

writeFileSync('supabase/seed/seed-content.json', JSON.stringify(vrindavanStoryPackets, null, 2));
console.log('Seed content generated at supabase/seed/seed-content.json');
