import { Link, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const journeys = [
  { id: 'ramayana', icon: '🏹', title: 'Ramayana Journey', description: 'Walk with Rama and Sita through love, duty, and care.', age: 'Ages 6–12', motif: '🪔🪔 Story diyas', bg: '#E8F3FF' },
  { id: 'krishna-childhood', icon: '🪈', title: 'Krishna Childhood Journey', description: 'Playful stories of devotion, joy, and friendship.', age: 'Ages 3–8', motif: '🌸 Story flowers', bg: '#FFF1D8' },
  { id: 'ganesha-wisdom', icon: '🐘', title: 'Ganesha Wisdom Journey', description: 'Gentle wisdom for listening, patience, and new beginnings.', age: 'Ages 4–10', motif: '🪷 Lotus steps', bg: '#F7EBF8' },
  { id: 'hanuman-courage', icon: '💪', title: 'Hanuman Courage Journey', description: 'Discover courage with humility, service, and kindness.', age: 'Ages 5–12', motif: '🔥 Courage diyas', bg: '#E9F6EA' },
  { id: 'festival', icon: '🪔', title: 'Festival Journey', description: 'Celebrate traditions with warmth, gratitude, and family joy.', age: 'Ages 3–12', motif: '🌼 Festival petals', bg: '#FFF3E3' },
  { id: 'values', icon: '🌸', title: 'Values Journey', description: 'Practice kindness, truthfulness, courage, and devotion slowly.', age: 'Ages 3–12', motif: '🍃 Value petals', bg: '#EEF3FF' }
];

export default function JourneysScreen() {
  const router = useRouter();

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={[visualStyles.heroCard, { backgroundColor: '#FFEFD5' }]}>
      <Text style={styles.title}>Dharma Journeys</Text>
      <Text style={styles.subtitle}>Long story paths you can explore slowly.</Text>
      <Text style={styles.subcopy}>Your journey will grow as you complete stories.</Text>
    </View>

    <View style={visualStyles.helperBubble}><Text style={styles.helper}>🦚 Luvlu path guide: We can choose one gentle path and walk it with care. I am your helper, not the logo.</Text></View>

    <View style={styles.grid}>{journeys.map((journey) => <Pressable key={journey.id} onPress={() => router.push(`/(child)/journeys/${journey.id}` as never)} style={({ pressed }) => [visualStyles.doorwayCard, styles.card, { backgroundColor: journey.bg }, pressed && styles.cardPressed]}>
      <Text style={styles.icon}>{journey.icon}</Text>
      <Text style={styles.cardTitle}>{journey.title}</Text>
      <Text style={styles.cardCopy}>{journey.description}</Text>
      <Text style={styles.age}>{journey.age}</Text>
      <Text style={styles.motif}>{journey.motif}</Text>
      <Text style={visualStyles.chip}>Explore Journey</Text>
    </Pressable>)}</View>

    <Link href='/(child)/worlds' style={visualStyles.secondaryCta}>Back to Story World</Link>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12, paddingBottom: 32 },
  title: { fontSize: 32, fontWeight: '900', color: visualTokens.color.warmBrown },
  subtitle: { fontSize: 18, fontWeight: '800', color: '#6A4522' },
  subcopy: { fontSize: 14, color: visualTokens.color.mutedBrown },
  helper: { fontSize: 13, color: '#1F4A75', fontWeight: '700' },
  grid: { gap: 10 },
  card: { borderRadius: 24, shadowOpacity: 0.1 },
  cardPressed: { transform: [{ scale: 0.985 }] },
  icon: { fontSize: 30 },
  cardTitle: { fontSize: 21, fontWeight: '900', color: visualTokens.color.warmBrown },
  cardCopy: { fontSize: 14, lineHeight: 20, color: visualTokens.color.mutedBrown },
  age: { fontSize: 12, fontWeight: '700', color: '#6C5136' },
  motif: { fontSize: 13, color: '#6C5136', marginBottom: 8 }
});
