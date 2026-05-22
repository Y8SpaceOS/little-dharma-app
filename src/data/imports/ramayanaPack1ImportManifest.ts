import { ramayanaPack1Journey, ramayanaPack1Stories, ramayanaPack1StoryPack } from '@/data/ramayanaPack1Registry';
import type { ContentImportManifest } from '@/types/contentImport';

export const ramayanaPack1ImportManifest: ContentImportManifest = {
  id: 'ramayana-journey-pack-1-import-v1',
  title: 'Ramayana Journey Pack 1 Import Manifest',
  description: 'Local pack import manifest for Ramayana Journey Pack 1 using Content Import Pipeline v1 shape.',
  version: '1.0.0',
  sourceTradition: 'Ramayana',
  category: 'ramayana',
  status: 'qa_ready',
  importMode: 'local_pack',
  storyPack: ramayanaPack1StoryPack,
  stories: ramayanaPack1Stories,
  journeys: [ramayanaPack1Journey],
  createdAtLocal: '2026-05-22T00:00:00.000Z',
  updatedAtLocal: '2026-05-22T00:00:00.000Z',
  notes: 'Small local-first pack manifest. Runtime availability remains gated by editorial QA and runtime resolver eligibility.'
};
