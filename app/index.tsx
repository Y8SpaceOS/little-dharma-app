import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  PrototypeBrandIcon,
  PrototypeBottomCTA,
  PrototypeLandingScreen,
  PrototypeLandscape,
  PrototypeSky,
  PrototypeStatusBar
} from '@/components/prototypePrimitives';
import { getOnboardingState, loadOnboardingState, resetOnboarding, subscribeOnboardingState } from '@/lib/onboardingState';

export default function Home() {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const off = subscribeOnboardingState(() => undefined);
    loadOnboardingState().finally(() => setReady(true));
    return off;
  }, []);

  return (
    <PrototypeLandingScreen>
      <PrototypeSky />
      <PrototypeLandscape />
      <PrototypeStatusBar />

      <View style={styles.mainWrap}>
        <PrototypeBrandIcon />

        <Text style={styles.title}>Little Dharma</Text>
        <Text style={styles.subtitle}>{'Stories, values and wonder\nfor little hearts.'}</Text>
      </View>

      <View style={styles.ctaWrap}>
        <PrototypeBottomCTA label='Begin the journey' onPress={() => router.push('/onboarding')} />
      </View>

      <View style={styles.devOnlyWrap} pointerEvents='box-none'>
        <Pressable
          onPress={async () => {
            await resetOnboarding();
            if (ready || getOnboardingState().onboardingComplete) router.replace('/onboarding');
          }}
          style={styles.devOnlyLink}
        >
          <Text style={styles.devOnlyText}>dev reset</Text>
        </Pressable>
      </View>
    </PrototypeLandingScreen>
  );
}

const styles = StyleSheet.create({
  mainWrap: { marginTop: 18, alignItems: 'center', paddingHorizontal: 28 },
  title: { marginTop: 24, color: '#4F2F1A', fontSize: 48, lineHeight: 50, fontWeight: '900', textAlign: 'center' },
  subtitle: { marginTop: 14, color: '#5C3A20', fontSize: 24, lineHeight: 30, fontWeight: '800', textAlign: 'center' },
  ctaWrap: { position: 'absolute', left: 24, right: 24, bottom: 94 },
  devOnlyWrap: { position: 'absolute', right: 6, bottom: 8 },
  devOnlyLink: { padding: 2 },
  devOnlyText: { color: 'rgba(70,50,35,0.18)', fontSize: 8 }
});
