import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'little_dharma_threshold_v1_last_entered_at';
const RECENT_WINDOW_MS = 30 * 60 * 1000;

export async function shouldShowThreshold(now = Date.now()) {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return true;
  }

  const lastEnteredAt = Number(raw);
  if (!Number.isFinite(lastEnteredAt)) {
    return true;
  }

  return now - lastEnteredAt > RECENT_WINDOW_MS;
}

export async function markThresholdEntered(enteredAt = Date.now()) {
  await AsyncStorage.setItem(STORAGE_KEY, String(enteredAt));
}
