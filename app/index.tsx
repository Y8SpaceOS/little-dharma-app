import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  PrototypeBrandIcon,
  PrototypeBottomCTA,
  PrototypeLandingScreen,
  PrototypeLandscape,
  PrototypeSky
} from '@/components/prototypePrimitives';

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <PrototypeLandingScreen>
      <PrototypeSky />
      <PrototypeLandscape />

      <View style={[styles.contentZone, { paddingTop: insets.top + 104 }]}>
        <View style={styles.welcomeChip}>
          <Text style={styles.welcomeChipText}>Welcome</Text>
        </View>
        <PrototypeBrandIcon />
        <Text style={styles.title}>Little Dharma</Text>
        <Text style={styles.subtitle}>Stories, values and wonder for little hearts.</Text>
      </View>

      <View style={[styles.ctaZone, { bottom: Math.max(32, insets.bottom + 12) }]}>
        <PrototypeBottomCTA label='Begin the journey' onPress={() => router.push('/onboarding')} />
      </View>
    </PrototypeLandingScreen>
  );
}

const styles = StyleSheet.create({
  contentZone: { alignItems: 'center', paddingHorizontal: 22 },
  welcomeChip: {
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 251, 244, 0.92)',
    borderWidth: 1,
    borderColor: '#EEDCC4'
  },
  welcomeChipText: { color: '#7C5635', fontSize: 13, lineHeight: 16, fontWeight: '700', letterSpacing: 0.2 },
  title: { marginTop: 18, color: '#4A2A11', fontSize: 38, lineHeight: 42, fontWeight: '800', textAlign: 'center', letterSpacing: -0.5 },
  subtitle: { marginTop: 12, maxWidth: 266, color: '#7A5330', fontSize: 19, lineHeight: 26, fontWeight: '700', textAlign: 'center' },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' }
});
