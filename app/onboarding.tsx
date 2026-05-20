import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrototypeBottomCTA, PrototypeLandingScreen } from '@/components/prototypePrimitives';

const SCREEN_02_VALUE_ROWS = [
  { icon: '🌸', title: 'Warm, not preachy', body: 'Values through stories.' },
  { icon: '🔒', title: 'Private by design', body: 'Parent-controlled experience.' },
  { icon: '🎧', title: 'Low-screen friendly', body: 'Audio for bedtime and car time.' }
] as const;

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <PrototypeLandingScreen>
      <View pointerEvents='none' style={styles.blueWaveWrap}>
        <LinearGradient colors={['#DDEAF8', '#CFE2F4']} style={styles.blueWave} />
      </View>

      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 20, paddingBottom: Math.max(128, insets.bottom + 86) }]}>
        <View style={styles.heroCardHalo}>
          <View style={styles.screen02HeroCard}>
            <View style={styles.diyaChip}>
              <Text style={styles.diyaText}>🪔</Text>
            </View>
            <Text style={styles.title}>A gentle spiritual world for children</Text>
            <Text style={styles.subtitle}>Stories, rituals, shlokas, values and parent-child moments, created with warmth and care.</Text>
          </View>
        </View>

        <View style={styles.rowsWrap}>
          {SCREEN_02_VALUE_ROWS.map((row) => (
            <View key={row.title} style={styles.screen02ValueCard}>
              <View style={styles.iconChip}>
                <Text style={styles.iconText}>{row.icon}</Text>
              </View>
              <View style={styles.valueTextWrap}>
                <Text style={styles.valueTitle}>{row.title}</Text>
                <Text style={styles.valueBody}>{row.body}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={[styles.ctaZone, { bottom: Math.max(32, insets.bottom + 12) }]}>
        <PrototypeBottomCTA label='Continue' onPress={() => router.push('/(child)/today')} />
      </View>
    </PrototypeLandingScreen>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingHorizontal: 20 },
  heroCardHalo: {
    borderRadius: 34,
    padding: 1,
    backgroundColor: 'rgba(245, 211, 166, 0.3)'
  },
  screen02HeroCard: {
    borderRadius: 33,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 22,
    backgroundColor: 'rgba(255, 248, 238, 0.97)',
    borderWidth: 1,
    borderColor: '#EED8BC',
    shadowColor: '#5A2D13',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 }
  },
  diyaChip: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCECCF'
  },
  diyaText: { fontSize: 22 },
  title: { marginTop: 12, color: '#4A2A11', fontSize: 31, lineHeight: 37, fontWeight: '800' },
  subtitle: { marginTop: 10, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600' },
  rowsWrap: { marginTop: 16, gap: 12 },
  screen02ValueCard: {
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(255, 250, 243, 0.97)',
    borderWidth: 1,
    borderColor: '#F0DFC7',
    shadowColor: '#5A2D13',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconChip: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#F6E6D6', alignItems: 'center', justifyContent: 'center' },
  iconText: { fontSize: 18 },
  valueTextWrap: { flex: 1, marginLeft: 12 },
  valueTitle: { color: '#4A2A11', fontSize: 18, lineHeight: 23, fontWeight: '800' },
  valueBody: { marginTop: 2, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },
  blueWaveWrap: { position: 'absolute', left: 0, right: 0, bottom: 64, height: 230 },
  blueWave: { flex: 1, borderTopLeftRadius: 220, borderTopRightRadius: 220 },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' }
});
