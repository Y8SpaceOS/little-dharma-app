import { Link } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { tokens } from '@/design/tokens';

const sections = [
  {
    title: 'What Little Dharma is',
    body: 'Little Dharma is a child-focused story and values ritual app designed for short daily moments of reflection, conversation, and calm family practice.'
  },
  {
    title: 'What data stays on this device',
    body: 'In this version, progress and profile details are currently local to this device. Story completion, badges, and onboarding details stay in local app storage used by this device experience.'
  },
  {
    title: 'What we do not do',
    body: 'There is no account sign-in, no backend cloud sync, no public child profile, and no social comparison. This version does not include public sharing features or ad systems.'
  },
  {
    title: 'How progress works',
    body: 'Progress updates when stories and ritual moments are completed. Parent Dashboard summaries and child journey continuity are generated from local completion state on this device.'
  },
  {
    title: 'How stories and rituals are designed',
    body: 'Stories are adapted devotional and values storytelling for children. They are designed for gentle reflection and practical values practice, not literal scripture translation.'
  },
  {
    title: 'Parent role and supervision',
    body: 'Parents are an active part of the Little Dharma journey. Parents should guide young children during use, help with reflection prompts, and set family boundaries around screen time and context.'
  },
  {
    title: 'Current limitations',
    body: 'This version keeps things intentionally simple. There is no cross-device sync, no account recovery flow, and no remote parent portal. Manual parent supervision remains expected.'
  },
  {
    title: 'Privacy-first promise',
    body: 'Trust and privacy guide this experience. We keep the product simple, calm, and parent-readable so families can clearly understand what the app does and what it does not do in this version.'
  }
] as const;

export default function PrivacyScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Parent Trust & Privacy Center</Text>
        <Text style={styles.subheading}>
          A plain-English trust guide for how Little Dharma currently handles privacy, local progress, and parent expectations.
        </Text>

        {sections.map((section) => (
          <View key={section.title} style={styles.card}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.detail}>{section.body}</Text>
          </View>
        ))}

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>At a glance</Text>
          <Text style={styles.noteText}>No public profile. No cloud sync in this version. Parent-guided use.</Text>
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
  card: { backgroundColor: '#FFFFFF', borderRadius: 22, padding: tokens.spacing.lg, gap: 8, borderWidth: 1, borderColor: '#E5EBFA' },
  sectionTitle: { color: '#445378', fontWeight: '800', letterSpacing: 0.3, textTransform: 'uppercase', fontSize: 12 },
  detail: { color: '#2B3550', fontSize: 15, lineHeight: 22 },
  noteCard: { backgroundColor: '#1E2C50', borderRadius: 20, padding: tokens.spacing.lg, gap: 6 },
  noteTitle: { color: '#DCE8FF', fontWeight: '800', textTransform: 'uppercase', fontSize: 12, letterSpacing: 0.3 },
  noteText: { color: '#FFFFFF', fontSize: 15, lineHeight: 22, fontWeight: '600' },
  backLink: { backgroundColor: '#DCE8FF', padding: 16, borderRadius: tokens.radius.button, textAlign: 'center', color: '#1E2C50', fontWeight: '700' }
});
