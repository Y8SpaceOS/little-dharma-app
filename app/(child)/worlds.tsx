import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';
import { getStoryWorldDoorwayCards } from '@/services/storyWorldBrowseService';

const doorwayPalette: Record<string, string> = {
  'Krishna Stories': '#FCE9C8',
  'Ganesha Stories': '#F8E8F2',
  'Ramayana Journey': '#E8F2FF',
  'Hanuman Stories': '#E9F7EC',
  'Bedtime Stories': '#E8EAFF',
  'Values Stories': '#F8ECFA',
  'Festival Stories': '#FFF0DB'
};

const chips = ['Bedtime', 'Values', 'Journeys', 'Festivals'];

export default function Screen() {
  const router = useRouter();
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const doorways = useMemo(() => getStoryWorldDoorwayCards().map((card) => ({
    title: card.title,
    copy: card.summary,
    href: card.href,
    tags: [card.category === 'bedtime' ? 'Bedtime' : card.category === 'festivals' ? 'Festivals' : card.isSequential ? 'Journeys' : 'Values'],
    bg: doorwayPalette[card.title] ?? '#F9F0E3',
    ready: card.status === 'available'
  })), []);
  const filtered = useMemo(() => (activeChip ? doorways.filter((w) => w.tags.includes(activeChip)) : doorways), [activeChip, doorways]);

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
