import { vrindavanJourney } from '@/data/seed/vrindavan';

export const getWorldBySlug = (slug: string) => (slug === 'vrindavan' ? vrindavanJourney.world : null);
export const getStoryBySlug = (slug: string) => (slug === vrindavanJourney.story.slug ? vrindavanJourney.story : null);
