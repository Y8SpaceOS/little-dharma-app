import { writeFileSync } from 'node:fs';
import { vrindavanJourney } from './vrindavan';

writeFileSync('supabase/seed/seed-content.json', JSON.stringify(vrindavanJourney, null, 2));
console.log('Seed content generated at supabase/seed/seed-content.json');
