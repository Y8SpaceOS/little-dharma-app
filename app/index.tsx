import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  PrototypeBrandMark,
  PrototypeButton,
  PrototypeHeroCard,
  PrototypeLuvluBubble,
  PrototypeMotifRow,
  PrototypeScreen,
  PrototypeSecondaryButton,
  PrototypeSurfaceCard
} from '@/components/prototypePrimitives';
import { getOnboardingState, loadOnboardingState, resetOnboarding, subscribeOnboardingState } from '@/lib/onboardingState';

export default function Home() {
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(getOnboardingState().onboardingComplete);
  const router = useRouter();

  useEffect(() => {
    const off = subscribeOnboardingState(() => setDone(getOnboardingState().onboardingComplete));
    loadOnboardingState().finally(() => setReady(true));
    return off;
  }, []);

  if (!ready) {
    return (
      <PrototypeScreen>
        <PrototypeHeroCard>
          <PrototypeBrandMark />
          <Text style={styles.brandTitle}>Little Dharma</Text>
          <Text style={styles.promiseText}>A calm, parent-trusted spiritual story world for little hearts.</Text>
        </PrototypeHeroCard>
      </PrototypeScreen>
    );
  }

  return (
    <PrototypeScreen>
      <PrototypeHeroCard>
        <PrototypeMotifRow />
        <PrototypeBrandMark />
        <Text style={styles.brandTitle}>Little Dharma</Text>
        <Text style={styles.promiseText}>Warm stories, gentle values, and child-friendly wonder with parent-guided trust.</Text>
        <PrototypeLuvluBubble copy='Luvlu is here as a calm helper to guide your family into a gentle beginning.' />

        <PrototypeButton label='Begin Little Dharma' onPress={() => router.push('/onboarding')} />

        {done && <PrototypeSecondaryButton label='Continue to Child World' onPress={() => router.replace('/(child)/today')} />}

        <PrototypeSurfaceCard>
          <TouchableOpacity onPress={async () => { await resetOnboarding(); router.replace('/onboarding'); }} style={styles.qaResetWrap}>
            <Text style={styles.qaResetText}>Reset Onboarding (Local QA)</Text>
          </TouchableOpacity>
        </PrototypeSurfaceCard>
      </PrototypeHeroCard>
    </PrototypeScreen>
  );
}

const styles = StyleSheet.create({
  brandTitle: { textAlign: 'center', color: '#5A341B', fontSize: 34, fontWeight: '900', letterSpacing: 0.2 },
  promiseText: { textAlign: 'center', color: '#6E4D31', fontSize: 16, lineHeight: 23, marginBottom: 2 },
  qaResetWrap: { paddingVertical: 2 },
  qaResetText: { textAlign: 'center', color: '#745B41', fontSize: 12, textDecorationLine: 'underline' }
});
