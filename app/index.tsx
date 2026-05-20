import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getOnboardingState, loadOnboardingState, resetOnboarding, subscribeOnboardingState } from '@/lib/onboardingState';

function BrandMark() {
  return <Text style={styles.brandMark}>🪔🌸☀️</Text>;
}

function LuvluGuide() {
  return <View style={styles.luvluWrap}><Text style={styles.luvluBird}>🦚</Text><Text style={styles.luvluText}>Luvlu is here as a calm guide to help your family begin gently.</Text></View>;
}

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
    return <LinearGradient colors={['#FFF4DF', '#FFE8C7', '#F9EAF3']} style={styles.screen}><SafeAreaView style={styles.safe}><View style={styles.card}><BrandMark /><Text style={styles.brand}>Little Dharma</Text><Text style={styles.promise}>A calm, parent-trusted spiritual story world for little hearts.</Text></View></SafeAreaView></LinearGradient>;
  }

  return (
    <LinearGradient colors={['#FFF4DF', '#FFE8C7', '#F9EAF3']} style={styles.screen}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.card}>
          <BrandMark />
          <Text style={styles.brand}>Little Dharma</Text>
          <Text style={styles.promise}>Warm stories, gentle values, and child-friendly wonder with parent-guided trust.</Text>
          <LuvluGuide />
          <TouchableOpacity onPress={() => router.push('/onboarding')} style={styles.cta}>
            <Text style={styles.ctaText}>Begin Little Dharma</Text>
          </TouchableOpacity>
          {done && <TouchableOpacity onPress={() => router.replace('/(child)/today')} style={styles.secondary}><Text style={styles.secondaryText}>Continue to Child World</Text></TouchableOpacity>}
          <TouchableOpacity onPress={async () => { await resetOnboarding(); router.replace('/onboarding'); }} style={styles.qaReset}>
            <Text style={styles.qaResetText}>Reset Onboarding (Local QA)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  safe: { flex: 1, justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#FFF9F0', borderRadius: 30, padding: 24, gap: 10, alignItems: 'center', shadowColor: '#C06B24', shadowOpacity: 0.16, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 4 },
  brandMark: { fontSize: 44 },
  brand: { fontSize: 34, fontWeight: '900', color: '#5B3517' },
  promise: { textAlign: 'center', color: '#6E5037', fontSize: 16, lineHeight: 22 },
  luvluWrap: { marginTop: 4, backgroundColor: '#E5F1FF', borderRadius: 18, paddingVertical: 10, paddingHorizontal: 12, alignSelf: 'stretch', flexDirection: 'row', gap: 8, alignItems: 'center' },
  luvluBird: { fontSize: 22 },
  luvluText: { flex: 1, color: '#1E4B7A', fontWeight: '700', fontSize: 13, lineHeight: 18 },
  cta: { marginTop: 6, backgroundColor: '#E38C29', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 20, alignSelf: 'stretch' },
  ctaText: { color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 16 },
  secondary: { backgroundColor: '#EAF2FF', borderRadius: 14, paddingVertical: 12, paddingHorizontal: 14, alignSelf: 'stretch' },
  secondaryText: { color: '#1E4B7A', fontWeight: '800', textAlign: 'center' },
  qaReset: { marginTop: 2, paddingVertical: 8, paddingHorizontal: 10 },
  qaResetText: { color: '#7A6A57', fontSize: 12, textDecorationLine: 'underline' }
});
