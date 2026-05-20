import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getOnboardingState, loadOnboardingState, resetOnboarding, subscribeOnboardingState } from '@/lib/onboardingState';

function BrandMark() {
  return <Text style={styles.brandMark}>🪔🌸☀️</Text>;
}

function MotifFrame() {
  return <Text style={styles.motifRow}>☁️ 🍃 🪷 ✨ 🪔 ✨ 🪷 🍃 ☁️</Text>;
}

function LuvluGuide() {
  return <View style={styles.luvluWrap}><Text style={styles.luvluBird}>🦚</Text><View style={styles.luvluTextWrap}><Text style={styles.luvluLabel}>Luvlu guide</Text><Text style={styles.luvluText}>I will help your family choose a gentle beginning, then quietly step aside.</Text></View></View>;
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
    return <LinearGradient colors={['#FFF7E7', '#FFE3B7', '#F9E8F3']} style={styles.screen}><SafeAreaView style={styles.safe}><View style={styles.shell}><MotifFrame /><View style={styles.card}><BrandMark /><Text style={styles.brand}>Little Dharma</Text><Text style={styles.promise}>A calm, parent-trusted spiritual story world for little hearts.</Text></View></View></SafeAreaView></LinearGradient>;
  }

  return (
    <LinearGradient colors={['#FFF7E7', '#FFE3B7', '#F9E8F3']} style={styles.screen}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.shell}>
          <MotifFrame />
          <View style={styles.card}>
            <View style={styles.heroTop}><BrandMark /><Text style={styles.brand}>Little Dharma</Text><Text style={styles.promise}>Warm stories, gentle values, and child-friendly wonder with parent-guided trust.</Text></View>
            <LuvluGuide />
            <TouchableOpacity onPress={() => router.push('/onboarding')} style={styles.cta}><Text style={styles.ctaText}>Begin Little Dharma</Text></TouchableOpacity>
            {done && <TouchableOpacity onPress={() => router.replace('/(child)/today')} style={styles.secondary}><Text style={styles.secondaryText}>Continue to Child World</Text></TouchableOpacity>}
            <TouchableOpacity onPress={async () => { await resetOnboarding(); router.replace('/onboarding'); }} style={styles.qaReset}><Text style={styles.qaResetText}>Reset Onboarding (Local QA)</Text></TouchableOpacity>
          </View>
          <MotifFrame />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  safe: { flex: 1, justifyContent: 'center', padding: 18 },
  shell: { gap: 12 },
  motifRow: { textAlign: 'center', fontSize: 18, color: '#90623F' },
  card: { backgroundColor: '#FFF9EE', borderRadius: 36, paddingHorizontal: 24, paddingVertical: 28, gap: 14, borderWidth: 2, borderColor: '#F6D7A9', shadowColor: '#B66A27', shadowOpacity: 0.2, shadowRadius: 18, shadowOffset: { width: 0, height: 10 }, elevation: 5 },
  heroTop: { gap: 8, alignItems: 'center' },
  brandMark: { fontSize: 46 },
  brand: { fontSize: 37, fontWeight: '900', color: '#5A3214' },
  promise: { textAlign: 'center', color: '#6E4A2C', fontSize: 17, lineHeight: 24 },
  luvluWrap: { marginTop: 6, backgroundColor: '#E5F2FF', borderRadius: 20, paddingVertical: 11, paddingHorizontal: 12, flexDirection: 'row', gap: 8, alignItems: 'center' },
  luvluBird: { fontSize: 22 },
  luvluTextWrap: { flex: 1, gap: 2 },
  luvluLabel: { color: '#265986', fontWeight: '900', fontSize: 12, textTransform: 'uppercase' },
  luvluText: { color: '#1F4E7A', fontWeight: '700', fontSize: 13, lineHeight: 18 },
  cta: { marginTop: 8, backgroundColor: '#E28A24', borderRadius: 18, paddingVertical: 15, paddingHorizontal: 20 },
  ctaText: { color: '#fff', fontWeight: '900', textAlign: 'center', fontSize: 17 },
  secondary: { backgroundColor: '#EBF2FF', borderRadius: 16, paddingVertical: 12, paddingHorizontal: 14 },
  secondaryText: { color: '#1E4B7A', fontWeight: '800', textAlign: 'center', fontSize: 15 },
  qaReset: { marginTop: 2, paddingVertical: 8, paddingHorizontal: 10, alignSelf: 'center' },
  qaResetText: { color: '#7A6A57', fontSize: 12, textDecorationLine: 'underline' }
});
