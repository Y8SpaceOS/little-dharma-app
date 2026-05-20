import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrototypeBottomCTA, PrototypeLandingScreen } from '@/components/prototypePrimitives';

const PHILOSOPHY_POINTS = [
  { title: 'Warm, not preachy', body: 'Values through stories.' },
  { title: 'Private by design', body: 'Parent-controlled experience.' },
  { title: 'Low-screen friendly', body: 'Audio for bedtime and car time.' }
] as const;

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <PrototypeLandingScreen>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top + 28, paddingBottom: Math.max(120, insets.bottom + 84) }]}>
        <View style={styles.card}>
          <Text style={styles.eyebrow}>Brand Philosophy</Text>
          <Text style={styles.title}>A gentle spiritual world for children</Text>
          <Text style={styles.subtitle}>Stories, rituals, shlokas, values and parent-child moments, created with warmth and care.</Text>

          <View style={styles.list}>
            {PHILOSOPHY_POINTS.map((point) => (
              <View key={point.title} style={styles.listItem}>
                <View style={styles.dot} />
                <View style={styles.listCopyWrap}>
                  <Text style={styles.listTitle}>{point.title}</Text>
                  <Text style={styles.listBody}>{point.body}</Text>
                </View>
              </View>
            ))}
          </View>
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
  card: {
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 247, 237, 0.94)',
    borderWidth: 1,
    borderColor: '#F0D6B5',
    shadowColor: '#5A2D13',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 }
  },
  eyebrow: { color: '#8E5A2E', fontSize: 14, fontWeight: '700', letterSpacing: 0.4, textTransform: 'uppercase' },
  title: { marginTop: 8, color: '#4A2A11', fontSize: 29, lineHeight: 35, fontWeight: '800' },
  subtitle: { marginTop: 12, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600' },
  list: { marginTop: 22, gap: 14 },
  listItem: { flexDirection: 'row', alignItems: 'flex-start' },
  dot: { marginTop: 7, width: 9, height: 9, borderRadius: 5, backgroundColor: '#DD8A33' },
  listCopyWrap: { flex: 1, marginLeft: 12 },
  listTitle: { color: '#4A2A11', fontSize: 19, lineHeight: 24, fontWeight: '800' },
  listBody: { marginTop: 2, color: '#734E30', fontSize: 16, lineHeight: 22, fontWeight: '600' },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' }
});
