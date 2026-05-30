import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';

export default function ChantScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Chant & Sing</Text>
        <Text style={styles.subtitle}>Simple mantras and bhajans to brighten your day.</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Coming soon</Text>
          <Text style={styles.detail}>Simple mantra and bhajan tracks are not yet active in this version.</Text>
          <Text style={styles.detail}>Audio playback and guided chanting are planned for a future release.</Text>
        </View>

        <View style={styles.luvluCard}>
          <Text style={styles.luvluTitle}>🎵 Luvlu</Text>
          <Text style={styles.luvluCopy}>Luvlu says: Even a hummed melody is a little prayer. The music will come soon.</Text>
        </View>

        <Link href='/(child)/today' style={styles.backLink} accessibilityRole='link' accessibilityLabel='Back to Child Home'>Back to Child Home</Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFF9EE' },
  content: { padding: tokens.spacing.lg, gap: tokens.spacing.md, paddingBottom: 40 },
  title: { fontSize: 34, fontWeight: '800', color: '#50311A' },
  subtitle: { fontSize: 16, lineHeight: 22, color: '#6D4B2C' },
  card: { backgroundColor: '#FFF4DE', borderRadius: tokens.radius.card, borderWidth: 1, borderColor: '#F0D2A4', padding: tokens.spacing.lg, gap: 8 },
  sectionTitle: { fontSize: 13, fontWeight: '800', letterSpacing: 0.3, textTransform: 'uppercase', color: '#7A4A25' },
  detail: { fontSize: 15, lineHeight: 22, color: '#6D4B2C' },
  luvluCard: { backgroundColor: '#E8F4FF', borderRadius: tokens.radius.card, borderWidth: 1, borderColor: '#C8E1F8', padding: tokens.spacing.md, gap: 6 },
  luvluTitle: { fontSize: 18, fontWeight: '800', color: '#1B4E76' },
  luvluCopy: { fontSize: 15, lineHeight: 21, color: '#2D5E85' },
  backLink: { backgroundColor: tokens.colors.sandalwood, padding: 16, borderRadius: tokens.radius.button, textAlign: 'center', color: '#50311A', fontWeight: '700' }
});
