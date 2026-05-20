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

      <View style={[styles.contentZone, { paddingTop: insets.top + 120 }]}> 
        <PrototypeBrandIcon />
        <Text style={styles.title}>Little Dharma</Text>
        <Text style={styles.subtitle}>{'Stories, values and wonder\nfor little hearts.'}</Text>
      </View>

      <View style={[styles.ctaZone, { bottom: Math.max(32, insets.bottom + 12) }]}> 
        <PrototypeBottomCTA label='Begin the journey' onPress={() => router.push('/onboarding')} />
      </View>
    </PrototypeLandingScreen>
  );
}

const styles = StyleSheet.create({
  contentZone: { alignItems: 'center' },
  title: { marginTop: 24, color: '#4A2A11', fontSize: 38, lineHeight: 42, fontWeight: '800', textAlign: 'center', letterSpacing: -0.5 },
  subtitle: { marginTop: 16, maxWidth: 250, color: '#7A5330', fontSize: 19, lineHeight: 26, fontWeight: '700', textAlign: 'center' },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' }
});
