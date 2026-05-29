import { useMemo } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, GradientScreen, HeroCard } from '@/components/dharmaKit';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { palette, radii, space, text } from '@/design/visualSystem';
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
  const reduceMotion = useReducedMotion();
  const trustMicrocopy = useMemo(() => buildStoryWorldTrustMicrocopy(), []);
  const sections = useMemo(() => getStoryWorldBrowseSections(), []);

  return <GradientScreen gradient='body'><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}>
    <HeroCard gradient='warm' style={styles.hero}>
      <Text style={styles.heading}>Story World</Text>
      <Text style={styles.sub}>Choose a gentle path, open a story, and continue exploration at your own pace.</Text>
      <Text style={styles.parentTrustLine}>For parents: every story card here is locally curated, child-safe, and reviewed with care.</Text>
    </HeroCard>

    <Card style={styles.trustBlock} accessibilityLabel={trustMicrocopy.accessibilityLabel} accessibilityHint={trustMicrocopy.accessibilityHint}>
      {trustMicrocopy.microcopyBullets.slice(0, 4).map((line) => <Text key={line} style={styles.trustCopy}>{line}</Text>)}
    </Card>

    {sections.map((section) => {
      const sectionKind = sectionKinds[section.category] ?? { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#E9D8BD' };
      return <View key={section.id} style={[styles.section, { borderColor: sectionKind.border }]} accessibilityLabel={`${section.title} section`} accessibilityHint={`Choose gently from ${section.title}`}>
      <Text style={styles.sectionBadge}>{sectionKind.badge}</Text>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionSub}>{sectionKind.subtitlePrefix}: {section.subtitle}</Text>

      {section.cards.length === 0 ? <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>This story path is being prepared with care.</Text>
        <Text style={styles.emptyCopy}>Stories will appear here after parent-safe review.</Text>
      </View> : section.cards.map((card) => <Pressable key={card.id} onPress={() => router.push(card.href as never)} style={({ pressed }) => [styles.card, { backgroundColor: sectionPalette[section.category] ?? '#F9F0E3' }, !reduceMotion && pressed && styles.cardPressed]}>
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
  </ScrollView></SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: space.screen, gap: space.md, paddingBottom: 30 },
  hero: { gap: space.xs },
  heading: { ...text.display, fontSize: 34, lineHeight: 40, color: palette.ink },
  sub: { ...text.body, fontSize: 16, lineHeight: 22, color: palette.muted },
  parentTrustLine: { ...text.caption, color: palette.saffronInk },
  trustBlock: { borderRadius: radii.bubble, padding: space.md, gap: space.xs },
  trustCopy: { ...text.caption, color: palette.saffronInk },
  section: { gap: space.sm, marginTop: space.sm, borderWidth: 1, borderRadius: radii.lg, padding: space.md, backgroundColor: palette.paper },
  sectionBadge: { ...text.caption, color: '#73471F' },
  sectionTitle: { ...text.title, color: palette.ink },
  sectionSub: { ...text.body, color: palette.muted },
  card: { borderRadius: radii.card, padding: space.lg, borderWidth: 1, borderColor: palette.line, gap: space.sm, minHeight: 174 },
  cardPressed: { transform: [{ scale: 0.987 }], opacity: 0.96 },
  cardTitle: { ...text.heading, color: palette.ink },
  cardSummary: { ...text.body, color: palette.muted },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
  metaPill: { backgroundColor: '#FFFFFFCC', borderRadius: radii.pill, paddingHorizontal: space.sm, paddingVertical: 5, fontSize: 12, color: palette.muted, fontWeight: '700' },
  metaHint: { ...text.mini, fontSize: 12, color: '#6B5A4A' },
  localHint: { ...text.mini, fontSize: 12, color: '#365A36' },
  emptyBox: { borderRadius: radii.panel, borderWidth: 1, borderColor: palette.line, backgroundColor: '#FFF8EE', padding: space.md, gap: space.xs },
  emptyTitle: { ...text.caption, fontSize: 14, color: palette.saffronInk },
  emptyCopy: { ...text.caption, color: palette.muted }
});
