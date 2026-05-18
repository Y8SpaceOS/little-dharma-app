import AsyncStorage from '@react-native-async-storage/async-storage';

export type ParentControls = {
  luvluHelperPromptsEnabled: boolean;
  bedtimeReducedPromptsEnabled: boolean;
  showParentPromptsEnabled: boolean;
  updatedAtLocal: string;
};

const STORAGE_KEY = 'little_dharma_parent_controls_v1';

const defaults = (): ParentControls => ({
  luvluHelperPromptsEnabled: true,
  bedtimeReducedPromptsEnabled: false,
  showParentPromptsEnabled: true,
  updatedAtLocal: new Date(0).toISOString()
});

export async function getParentControls(): Promise<ParentControls> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return defaults();
  try {
    const parsed = JSON.parse(raw) as Partial<ParentControls>;
    return {
      luvluHelperPromptsEnabled: parsed.luvluHelperPromptsEnabled ?? true,
      bedtimeReducedPromptsEnabled: parsed.bedtimeReducedPromptsEnabled ?? false,
      showParentPromptsEnabled: parsed.showParentPromptsEnabled ?? true,
      updatedAtLocal: parsed.updatedAtLocal || new Date(0).toISOString()
    };
  } catch {
    return defaults();
  }
}

async function saveParentControls(next: ParentControls): Promise<ParentControls> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export async function setLuvluHelperPromptsEnabled(enabled: boolean): Promise<ParentControls> {
  const current = await getParentControls();
  return saveParentControls({ ...current, luvluHelperPromptsEnabled: enabled, updatedAtLocal: new Date().toISOString() });
}

export async function setBedtimeReducedPromptsEnabled(enabled: boolean): Promise<ParentControls> {
  const current = await getParentControls();
  return saveParentControls({ ...current, bedtimeReducedPromptsEnabled: enabled, updatedAtLocal: new Date().toISOString() });
}
