import { useMemo, useRef } from 'react';
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

const previewCardLimit = 2;

const doorwayCategories = ['krishna', 'ramayana', 'ganesha', 'bedtime', 'values', 'shlokas'];

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
  const doorwaySections = useMemo(() => sections.filter((section) => doorwayCategories.includes(section.category)), [sections]);
  const scrollRef = useRef<ScrollView | null>(null);
  const sectionOffsets = useRef<Record<string, number>>({});

  const scrollToSection = (sectionId: string) => {
    const offset = sectionOffsets.current[sectionId];
    if (offset === undefined) return;
    scrollRef.current?.scrollTo({ y: Math.max(offset - 12, 0), animated: !reduceMotion });
  };

  return <GradientScreen gradient='body'><SafeAreaView style={styles.safe}><ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
    <HeroCard gradient='warm' style={styles.hero}>
      <Text style={styles.heroBadge}>🌸 Story World</Text>
      <Text style={styles.heading}>Choose one doorway.</Text>
      <Text style={styles.sub}>Pick a gentle world, then open a small handful of stories made for today.</Text>
      <Text style={styles.parentTrustLine}>Parent note: locally curated, child-safe, and reviewed with care.</Text>
    </HeroCard>

    <Card style={styles.doorwayBlock}>
      <View style={styles.doorwayHeaderRow}>
        <Text style={styles.doorwayTitle}>Story Worlds</Text>
        <Text style={styles.doorwayHint}>{trustMicrocopy.noRaceCopy}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.doorwayRow}>
        {doorwaySections.map((section) => {
          const sectionKind = sectionKinds[section.category] ?? { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#E9D8BD' };
          return <Pressable key={section.id} onPress={() => scrollToSection(section.id)} style={({ pressed }) => [styles.doorwayChip, { backgroundColor: sectionPalette[section.category] ?? '#F9F0E3', borderColor: sectionKind.border }, !reduceMotion && pressed && styles.cardPressed]} accessibilityRole='button' accessibilityLabel={`Open ${section.title}`} accessibilityHint={`Jump to the ${section.title} preview`}>
            <Text style={styles.doorwayChipTitle}>{section.title.replace(' Stories', '')}</Text>
            <Text style={styles.doorwayChipSub} numberOfLines={1}>{section.subtitle}</Text>
          </Pressable>;
        })}
      </ScrollView>
    </Card>

    <Card style={styles.trustBlock} accessibilityLabel={trustMicrocopy.accessibilityLabel} accessibilityHint={trustMicrocopy.accessibilityHint}>
      <Text style={styles.trustCopy}>{trustMicrocopy.chooseDoorwayCopy} {trustMicrocopy.readinessCopy}</Text>
    </Card>

    {sections.map((section) => {
      const sectionKind = sectionKinds[section.category] ?? { badge: '🌸 Story Collection', subtitlePrefix: 'Story collection', border: '#E9D8BD' };
      const previewCards = section.cards.slice(0, previewCardLimit);
      const hiddenCount = Math.max(section.cards.length - previewCards.length, 0);
      return <View key={section.id} onLayout={(event) => { sectionOffsets.current[section.id] = event.nativeEvent.layout.y; }} style={[styles.section, { borderColor: sectionKind.border }]} accessibilityLabel={`${section.title} section`} accessibilityHint={`Choose gently from ${section.title}`}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleBlock}>
          <Text style={styles.sectionBadge}>{sectionKind.badge}</Text>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.sectionSub}>{sectionKind.subtitlePrefix}: {section.subtitle}</Text>
        </View>
        {hiddenCount > 0 ? <View style={styles.sectionCountPill}>
          <Text style={styles.sectionCountText}>{previewCards.length} picks</Text>
        </View> : null}
      </View>

      {section.cards.length === 0 ? <View style={styles.emptyBox}>
        <Text style={styles.emptyTitle}>This story path is being prepared with care.</Text>
        <Text style={styles.emptyCopy}>Stories will appear here after parent-safe review.</Text>
      </View> : previewCards.map((card) => <Pressable key={card.id} onPress={() => router.push(card.href as never)} style={({ pressed }) => [styles.card, { backgroundColor: sectionPalette[section.category] ?? '#F9F0E3' }, !reduceMotion && pressed && styles.cardPressed]} accessibilityRole='button' accessibilityLabel={card.accessibilityLabel} accessibilityHint={card.accessibilityHint}>
        <Text style={styles.cardTitle} numberOfLines={2}>{card.title}</Text>
        <Text style={styles.cardSummary} numberOfLines={1}>{card.summary || card.shortTitle || 'A gentle story is getting ready.'}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaPill}>{card.ageBands?.[0] ?? 'All ages'}</Text>
          {card.durationMinutes ? <Text style={styles.metaPill}>{card.durationMinutes} min</Text> : null}
          <Text style={styles.metaPill}>{card.primaryValue || 'Dharma value'}</Text>
          {card.journeyTag ? <Text style={styles.metaPill}>{card.journeyTag}</Text> : null}
          {card.hasAudioMetadata ? <Text style={styles.metaPill}>Audio guide</Text> : null}
        </View>
      </Pressable>)}
      {hiddenCount > 0 ? <View style={styles.moreBox}>
        <Text style={styles.moreTitle}>Explore this world</Text>
        <Text style={styles.moreCopy}>More stories being prepared with care.</Text>
      </View> : null}
    </View>;})}
  </ScrollView></SafeAreaView></GradientScreen>;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: space.screen, gap: space.md, paddingBottom: 30 },
  hero: { gap: space.xs, paddingVertical: space.lg },
  heroBadge: { ...text.caption, color: palette.saffronInk, fontWeight: '800' },
  heading: { ...text.display, fontSize: 30, lineHeight: 36, color: palette.ink },
  sub: { ...text.body, fontSize: 15, lineHeight: 21, color: palette.muted },
  parentTrustLine: { ...text.mini, color: palette.saffronInk },
  doorwayBlock: { borderRadius: radii.bubble, padding: space.md, gap: space.sm, overflow: 'hidden' },
  doorwayHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: space.sm },
  doorwayTitle: { ...text.title, color: palette.ink },
  doorwayHint: { ...text.caption, color: palette.saffronInk },
  doorwayRow: { gap: space.sm, paddingRight: space.md },
  doorwayChip: { width: 136, borderRadius: radii.card, borderWidth: 1, padding: space.md, gap: 4 },
  doorwayChipTitle: { ...text.caption, fontSize: 15, color: palette.ink, fontWeight: '800' },
  doorwayChipSub: { ...text.mini, color: palette.muted },
  trustBlock: { borderRadius: radii.bubble, paddingVertical: space.sm, paddingHorizontal: space.md, gap: space.xs, backgroundColor: '#FFF8EE' },
  trustCopy: { ...text.caption, color: palette.saffronInk },
  section: { gap: space.sm, marginTop: space.sm, borderWidth: 1, borderRadius: radii.lg, padding: space.md, backgroundColor: palette.paper },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', gap: space.sm, alignItems: 'flex-start' },
  sectionTitleBlock: { flex: 1, gap: 2 },
  sectionBadge: { ...text.caption, color: '#73471F' },
  sectionTitle: { ...text.title, color: palette.ink },
  sectionSub: { ...text.caption, color: palette.muted },
  sectionCountPill: { borderRadius: radii.pill, backgroundColor: '#FFF8EE', paddingHorizontal: space.sm, paddingVertical: 5 },
  sectionCountText: { ...text.mini, color: palette.saffronInk, fontWeight: '800' },
  card: { borderRadius: radii.card, padding: space.md, borderWidth: 1, borderColor: palette.line, gap: space.xs, minHeight: 116 },
  cardPressed: { transform: [{ scale: 0.987 }], opacity: 0.96 },
  cardTitle: { ...text.heading, fontSize: 18, lineHeight: 23, color: palette.ink },
  cardSummary: { ...text.caption, color: palette.muted },
  metaRow: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
  metaPill: { backgroundColor: '#FFFFFFCC', borderRadius: radii.pill, paddingHorizontal: space.sm, paddingVertical: 5, fontSize: 12, color: palette.muted, fontWeight: '700' },
  moreBox: { borderRadius: radii.panel, borderWidth: 1, borderStyle: 'dashed', borderColor: '#E7CFAE', backgroundColor: '#FFF8EE', padding: space.md, gap: 3 },
  moreTitle: { ...text.caption, fontSize: 14, color: palette.saffronInk, fontWeight: '800' },
  moreCopy: { ...text.caption, color: palette.muted },
  emptyBox: { borderRadius: radii.panel, borderWidth: 1, borderColor: palette.line, backgroundColor: '#FFF8EE', padding: space.md, gap: space.xs },
  emptyTitle: { ...text.caption, fontSize: 14, color: palette.saffronInk },
  emptyCopy: { ...text.caption, color: palette.muted }
});
