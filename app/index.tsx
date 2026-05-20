import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  PrototypeBrandIcon,
  PrototypeBottomCTA,
  PrototypeLandingScreen,
  PrototypeLandscape,
  PrototypeSky,
  PrototypeStatusBar
} from '@/components/prototypePrimitives';

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <PrototypeLandingScreen>
      <PrototypeSky />
      <PrototypeLandscape />
      <View style={[styles.statusZone, { paddingTop: Math.max(0, insets.top - 6) }]}>
        <PrototypeStatusBar />
      </View>

      <View style={styles.contentZone}>
        <PrototypeBrandIcon />
        <Text style={styles.title}>Little Dharma</Text>
        <Text style={styles.subtitle}>{'Stories, values and wonder\nfor little hearts.'}</Text>
      </View>

      <View style={[styles.ctaZone, { bottom: Math.max(32, insets.bottom + 16) }]}>
        <PrototypeBottomCTA label='Begin the journey' onPress={() => router.push('/onboarding')} />
      </View>
    </PrototypeLandingScreen>
  );
}

const styles = StyleSheet.create({
  statusZone: { position: 'absolute', left: 0, right: 0, top: 0 },
  contentZone: { alignItems: 'center' },
  title: { marginTop: 24, color: '#3D2417', fontSize: 40, lineHeight: 44, fontWeight: '800', textAlign: 'center', letterSpacing: -0.5 },
  subtitle: { marginTop: 16, maxWidth: '78%', color: '#3D2417', fontSize: 19, lineHeight: 26, fontWeight: '700', textAlign: 'center' },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' }
});
