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

let updateChain: Promise<void> = Promise.resolve();

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

async function updateParentControlsSerialized(
  patch: (current: ParentControls) => Partial<Omit<ParentControls, 'updatedAtLocal'>>
): Promise<ParentControls> {
  let result: ParentControls = defaults();

  const runUpdate = async () => {
    const current = await getParentControls();
    const next: ParentControls = {
      ...current,
      ...patch(current),
      updatedAtLocal: new Date().toISOString()
    };

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    result = next;
  };

  const queuedUpdate = updateChain.then(runUpdate);
  updateChain = queuedUpdate.then(() => undefined, () => undefined);
  await queuedUpdate;
  return result;
}

export async function setLuvluHelperPromptsEnabled(enabled: boolean): Promise<ParentControls> {
  return updateParentControlsSerialized(() => ({ luvluHelperPromptsEnabled: enabled }));
}

export async function setBedtimeReducedPromptsEnabled(enabled: boolean): Promise<ParentControls> {
  return updateParentControlsSerialized(() => ({ bedtimeReducedPromptsEnabled: enabled }));
}
