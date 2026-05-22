import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';

const doorways = [
  { title: 'Krishna Stories', copy: 'Playful devotion, kindness, and courage.', href: '/world/krishna', tags: ['Values', 'Journeys'], bg: '#FCE9C8', ready: true },
  { title: 'Ganesha Stories', copy: 'Wisdom and fresh beginnings with warmth.', href: '/world/ganesha', tags: ['Values'], bg: '#F8E8F2', ready: true },
  { title: 'Ramayana Journey', copy: 'Family dharma and loving choices.', href: '/world/ramayana', tags: ['Journeys'], bg: '#E8F2FF', ready: true },
  { title: 'Hanuman Stories', copy: 'Brave service and gentle strength.', href: '/world/hanuman', tags: ['Values', 'Journeys'], bg: '#E9F7EC', ready: true },
  { title: 'Bedtime Stories', copy: 'Soft stories for peaceful evenings.', href: '/world/bedtime', tags: ['Bedtime'], bg: '#E8EAFF', ready: true },
  { title: 'Values Stories', copy: 'Kindness and gratitude in daily life.', href: '/world/values', tags: ['Values'], bg: '#F8ECFA', ready: true },
  { title: 'Festival Stories', copy: 'Seasonal stories and traditions.', href: '/world/festivals', tags: ['Festivals'], bg: '#FFF0DB', ready: false }
];

const chips = ['Bedtime', 'Values', 'Journeys', 'Festivals'];

export default function Screen() {
  const router = useRouter();
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const filtered = useMemo(() => (activeChip ? doorways.filter((w) => w.tags.includes(activeChip)) : doorways), [activeChip]);

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={styles.hero}>
      <Text style={styles.heading}>Story World</Text>
      <Text style={styles.sub}>Choose one doorway to begin.</Text>
    </View>

    <View style={styles.chips}>{chips.map((chip) => <Pressable key={chip} onPress={() => setActiveChip(activeChip === chip ? null : chip)} accessibilityRole='button' accessibilityLabel={`${chip} filter`} accessibilityState={{ selected: activeChip === chip }} style={[styles.chip, activeChip === chip && styles.chipActive]}><Text style={[styles.chipText, activeChip === chip && styles.chipTextActive]}>{chip}</Text></Pressable>)}</View>

    <View style={styles.grid}>{filtered.map((d) => <Pressable key={d.title} onPress={() => router.push(d.href as never)} accessibilityRole='button' accessibilityLabel={d.title} accessibilityHint={d.ready ? 'Open story world doorway' : 'More stories coming soon'} style={({ pressed }) => [styles.worldCard, { backgroundColor: d.bg }, pressed && styles.cardPressed]}>
      <View style={styles.cardStack}>
        <Text style={styles.cardTitle}>{d.title}</Text>
        <Text style={styles.cardCopy}>{d.copy}</Text>
        {!d.ready ? <Text style={styles.empty}>More stories are arriving soon.</Text> : <Text style={styles.enter}>Enter Story World</Text>}
      </View>
    </Pressable>)}</View>

    <View style={visualStyles.helperBubble}><Text style={styles.helper}>Luvlu can help you choose if you want.</Text></View>
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 14, paddingBottom: 30 },
  hero: { borderRadius: 28, padding: 18, backgroundColor: '#FFF2DD', borderWidth: 1, borderColor: '#F4D9AD' },
  heading: { fontSize: 34, fontWeight: '900', color: visualTokens.color.warmBrown },
  sub: { marginTop: 6, fontSize: 16, lineHeight: 22, color: visualTokens.color.mutedBrown },
  helper: { fontSize: 13, color: '#1F4A75', fontWeight: '700' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingVertical: 11, paddingHorizontal: 13, borderRadius: 999, backgroundColor: '#F0E7DA', minHeight: 44, justifyContent: 'center' },
  chipActive: { backgroundColor: '#E38C29' },
  chipText: { fontWeight: '700', color: '#6A4522' },
  chipTextActive: { color: '#fff' },
  grid: { gap: 12 },
  worldCard: { borderRadius: 26, padding: 18, borderWidth: 1, borderColor: '#E9D8BD', shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  cardPressed: { transform: [{ scale: 0.985 }] },
  cardStack: { gap: 8 },
  cardTitle: { fontSize: 22, fontWeight: '900', color: visualTokens.color.warmBrown },
  cardCopy: { fontSize: 15, lineHeight: 22, color: visualTokens.color.mutedBrown },
  enter: { marginTop: 8, alignSelf: 'flex-start', borderRadius: 999, backgroundColor: '#fff', paddingVertical: 6, paddingHorizontal: 11, fontSize: 12, fontWeight: '800', color: '#7A4D1D' },
  empty: { fontSize: 12, lineHeight: 18, color: '#6A5B4D', marginTop: 8, fontStyle: 'italic' }
});
