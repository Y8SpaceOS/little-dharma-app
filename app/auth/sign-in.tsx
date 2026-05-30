import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';

export default function SignIn() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Parent Sign In</Text>
        <Text style={styles.subheading}>Account authentication is not enabled in this version.</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Current version</Text>
          <Text style={styles.detail}>Parent and child progress flows are currently local-first and do not require sign-in.</Text>
          <Text style={styles.detail}>No cloud account, cross-device sync, or backend authentication is active yet.</Text>
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>What this means</Text>
          <Text style={styles.noteText}>• All progress is saved on this device only.</Text>
          <Text style={styles.noteText}>• No password or email is required to use Little Dharma.</Text>
          <Text style={styles.noteText}>• Sign-in will be introduced when cloud sync becomes available.</Text>
        </View>

        <Link href='/(parent)/dashboard' style={styles.backLink} accessibilityRole='link' accessibilityLabel='Back to Parent Dashboard'>Back to Parent Dashboard</Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#EFF4FF' },
  content: { padding: tokens.spacing.lg, gap: tokens.spacing.md, paddingBottom: 40 },
  heading: { fontSize: 30, fontWeight: '800', color: '#1E2C50' },
  subheading: { color: '#4D5F88', fontSize: 15, lineHeight: 22 },
  card: { backgroundColor: '#FFFFFF', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: 8, borderWidth: 1, borderColor: '#E5EBFA' },
  sectionTitle: { color: '#445378', fontWeight: '800', letterSpacing: 0.3, textTransform: 'uppercase', fontSize: 12 },
  detail: { color: '#2B3550', fontSize: 15, lineHeight: 22 },
  noteCard: { backgroundColor: '#1E2C50', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: 6 },
  noteTitle: { color: tokens.colors.moonlight, fontWeight: '800', textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.3 },
  noteText: { color: '#FFFFFF', fontSize: 15, lineHeight: 22, fontWeight: '600' },
  backLink: { backgroundColor: tokens.colors.moonlight, padding: 16, borderRadius: tokens.radius.button, textAlign: 'center', color: '#1E2C50', fontWeight: '700' }
});
