import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { visualStyles, visualTokens } from '@/design/visualSystem';
import { getStoryWorldBrowseSections } from '@/services/storyWorldBrowseService';
import { buildStoryWorldTrustMicrocopy } from '@/services/storyWorldTrustMicrocopyService';

const sectionPalette: Record<string, string> = {
  krishna: '#FCE9C8',
  ramayana: '#E8F2FF',
  ganesha: '#F8E8F2',
  hanuman: '#E9F7EC',
  bedtime: '#E8EAFF',
  values: '#F8ECFA',
  festivals: '#FFF0DB',
  bhagavad_gita: '#EAF8EF',
  mahabharata: '#FDEEE6',
  shlokas: '#F4EEFF'
};

const sectionKinds: Record<string, { badge: string; subtitlePrefix: string; border: string }> = {
  ramayana: { badge: '🪔 Story Path', subtitlePrefix: 'Journey path', border: '#C9DFFF' },
  krishna: { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#F4D7A6' },
  ganesha: { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#EFCFE0' },
  hanuman: { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#CDE6D2' },
  bedtime: { badge: '🌙 Story Collection', subtitlePrefix: 'Story collection', border: '#D1D7FF' },
  values: { badge: '💛 Story Collection', subtitlePrefix: 'Story collection', border: '#E7D3EF' },
  festivals: { badge: '📖 Story Collection', subtitlePrefix: 'Story collection', border: '#F6D9B5' },
  bhagavad_gita: { badge: '🪷 Story Collection', subtitlePrefix: 'Story collection', border: '#CCE6D4' },
  mahabharata: { badge: '📖 Story Collection', subtitlePrefix: 'Story collection', border: '#F3D7C8' },
  shlokas: { badge: '🪷 Shloka & Meaning', subtitlePrefix: 'Shloka and meaning', border: '#DECEF3' }
};

export default function Screen() {
  const router = useRouter();
  const trustMicrocopy = useMemo(() => buildStoryWorldTrustMicrocopy(), []);
  const sections = useMemo(() => getStoryWorldBrowseSections(), []);

  return <SafeAreaView style={visualStyles.screen}><ScrollView contentContainerStyle={styles.content}>
    <View style={styles.hero}>
      <Text style={styles.heading}>Story World</Text>
      <Text style={styles.sub}>Choose a gentle path, open a story, and continue exploration at your own pace.</Text>
      <Text style={styles.parentTrustLine}>For parents: every story card here is locally curated, child-safe, and reviewed with care.</Text>
    </View>

    <View style={styles.trustBlock} accessibilityLabel={trustMicrocopy.accessibilityLabel} accessibilityHint={trustMicrocopy.accessibilityHint}>
      {trustMicrocopy.microcopyBullets.slice(0, 4).map((line) => <Text key={line} style={styles.trustCopy}>{line}</Text>)}
    </View>

    {sections.map((section) => {
      const sectionKind = sectionKinds[section.category] ?? { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#E9D8BD' };
      return <View key={section.id} style={[styles.section, { borderColor: sectionKind.border }]} accessibilityLabel={`${section.title} section`} accessibilityHint={`Choose gently from ${section.title}`}>
      <Text style={styles.sectionBadge}>{sectionKind.badge}</Text>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionSub}>{sectionKind.subtitlePrefix}: {section.subtitle}</Text>

      {section.cards.length === 0 ? <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>This story path is being prepared with care.</Text>
        <Text style={styles.emptyCopy}>Stories will appear here after parent-safe review.</Text>
      </View> : section.cards.map((card) => <Pressable key={card.id} onPress={() => router.push(card.href as never)} style={({ pressed }) => [styles.card, { backgroundColor: sectionPalette[section.category] ?? '#F9F0E3' }, pressed && styles.cardPressed]}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardSummary}>{card.summary || card.shortTitle || 'A gentle story is getting ready.'}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaPill}>{sectionKind.badge.replace(/^[^ ]+ /, '')}</Text>
          <Text style={styles.metaPill}>{card.ageBands?.[0] ?? 'All ages'}</Text>
          <Text style={styles.metaPill}>{card.durationMinutes ? `${card.durationMinutes} min` : 'Duration soon'}</Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaHint}>{card.primaryValue || 'Dharma value'}</Text>
          <Text style={styles.metaHint}>{card.journeyTag ?? 'Open story pick'}</Text>
          <Text style={styles.metaHint}>{card.hasAudioMetadata ? 'Audio details ready' : 'Audio coming soon'}</Text>
        </View>
        <Text style={styles.localHint}>{card.localFirstHint}</Text>
      </Pressable>)}
    </View>;})}
  </ScrollView></SafeAreaView>;
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 16, paddingBottom: 30 },
  hero: { borderRadius: 28, padding: 18, backgroundColor: '#FFF2DD', borderWidth: 1, borderColor: '#F4D9AD', gap: 6 },
  heading: { fontSize: 34, fontWeight: '900', color: visualTokens.color.warmBrown },
  sub: { fontSize: 16, lineHeight: 22, color: visualTokens.color.mutedBrown },
  parentTrustLine: { fontSize: 13, lineHeight: 18, color: '#6A4522', fontWeight: '700' },
  trustBlock: { borderRadius: 16, borderWidth: 1, borderColor: '#E9D8BD', backgroundColor: '#FFF8EE', padding: 12, gap: 4 },
  trustCopy: { fontSize: 13, lineHeight: 18, color: '#6A4522', fontWeight: '700' },
  section: { gap: 10, marginTop: 10, borderWidth: 1, borderRadius: 22, padding: 14, backgroundColor: '#FFFCF7' },
  sectionBadge: { fontSize: 13, fontWeight: '800', color: '#73471F' },
  sectionTitle: { fontSize: 24, fontWeight: '900', color: visualTokens.color.warmBrown },
  sectionSub: { fontSize: 14, color: visualTokens.color.mutedBrown },
  card: { borderRadius: 24, padding: 18, borderWidth: 1, borderColor: '#E9D8BD', gap: 10, minHeight: 174 },
  cardPressed: { transform: [{ scale: 0.987 }] },
  cardTitle: { fontSize: 20, fontWeight: '900', color: '#4A2D10' },
  cardSummary: { fontSize: 14, lineHeight: 20, color: '#6A4522' },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  metaPill: { backgroundColor: '#FFFFFFCC', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5, fontSize: 12, color: '#6A4522', fontWeight: '700' },
  metaHint: { fontSize: 12, color: '#6B5A4A', fontWeight: '700' },
  localHint: { fontSize: 12, color: '#365A36', fontWeight: '700' },
  emptyBox: { borderRadius: 18, borderWidth: 1, borderColor: '#E9D8BD', backgroundColor: '#FFF8EE', padding: 14, gap: 4 },
  emptyTitle: { fontSize: 14, fontWeight: '800', color: '#6A4522' },
  emptyCopy: { fontSize: 13, lineHeight: 18, color: '#7B6248' }
});
