import { StyleSheet } from 'react-native';

export const visualTokens = {
  color: {
    creamBg: '#FFF7EA',
    paper: '#FFFCF6',
    saffron: '#F2AA2B',
    saffronDeep: '#DA8B10',
    lotusPink: '#E7C3DD',
    lotusLight: '#F5E6F1',
    sky: '#CFE6FA',
    skySoft: '#E9F4FF',
    leaf: '#BFE0C6',
    leafSoft: '#E7F4EA',
    diyaYellow: '#FFE09A',
    gold: '#EACD9D',
    diyaGlow: '#FFF2DD',
    diyaRim: '#E9C98F',
    journeyLine: '#E9D8BD',
    warmBrown: '#4A2F1E',
    mutedBrown: '#6B5241',
    line: '#E8D4B6'
  },
  radius: { xl: 32, lg: 24, md: 18, sm: 14, pill: 999 },
  shadow: { shadowColor: '#BC8D5E', shadowOpacity: 0.16, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 4 }
} as const;

export const visualStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: visualTokens.color.creamBg },
  softScreen: { flex: 1, backgroundColor: visualTokens.color.creamBg },
  sectionHeader: { fontSize: 22, fontWeight: '900', color: visualTokens.color.warmBrown, marginTop: 8, marginBottom: 4 },
  softSectionHeader: { fontSize: 22, fontWeight: '900', color: visualTokens.color.warmBrown, marginTop: 8, marginBottom: 4 },
  heroCard: { backgroundColor: visualTokens.color.paper, borderRadius: visualTokens.radius.xl, borderWidth: 1, borderColor: visualTokens.color.line, padding: 18, ...visualTokens.shadow },
  roundedCard: { backgroundColor: visualTokens.color.paper, borderRadius: visualTokens.radius.lg, borderWidth: 1, borderColor: visualTokens.color.line, padding: 14, ...visualTokens.shadow },
  warmCard: { backgroundColor: '#FFF0D5' },
  doorwayCard: { borderRadius: visualTokens.radius.lg, borderWidth: 1, borderColor: visualTokens.color.line, padding: 14, minHeight: 138, ...visualTokens.shadow },
  storyCard: { backgroundColor: '#fff', borderRadius: visualTokens.radius.lg, borderWidth: 1, borderColor: visualTokens.color.line, padding: 14, gap: 8, ...visualTokens.shadow },
  parentCard: { backgroundColor: '#fff', borderRadius: visualTokens.radius.lg, borderWidth: 1, borderColor: visualTokens.color.line, padding: 14, gap: 8 },
  parentTrustNoteCard: { backgroundColor: '#FFFCF3', borderRadius: visualTokens.radius.md, borderWidth: 1, borderColor: visualTokens.color.line, padding: 12, gap: 4 },
  chip: { alignSelf: 'flex-start', backgroundColor: '#FFF4DE', borderWidth: 1, borderColor: '#E9C88E', borderRadius: visualTokens.radius.pill, paddingHorizontal: 10, paddingVertical: 5, color: visualTokens.color.warmBrown, fontSize: 12, fontWeight: '800' },
  primaryCta: { backgroundColor: visualTokens.color.saffron, borderRadius: visualTokens.radius.pill, paddingVertical: 12, paddingHorizontal: 16, textAlign: 'center', color: '#fff', fontWeight: '900', overflow: 'hidden' },
  secondaryCta: { backgroundColor: '#fff', borderColor: '#E8C796', borderWidth: 1, borderRadius: visualTokens.radius.pill, paddingVertical: 11, paddingHorizontal: 16, textAlign: 'center', color: visualTokens.color.warmBrown, fontWeight: '800', overflow: 'hidden' },
  helperBubble: { alignSelf: 'flex-start', backgroundColor: '#fff', borderRadius: visualTokens.radius.pill, borderWidth: 1, borderColor: '#EACDA7', paddingHorizontal: 12, paddingVertical: 8 },
  luvluBubble: { alignSelf: 'flex-start', backgroundColor: '#fff', borderRadius: visualTokens.radius.pill, borderWidth: 1, borderColor: '#EACDA7', paddingHorizontal: 12, paddingVertical: 8 },
  emptyStateCard: { backgroundColor: visualTokens.color.skySoft, borderRadius: visualTokens.radius.lg, borderWidth: 1, borderColor: visualTokens.color.line, padding: 18 },
  warmText: { color: visualTokens.color.warmBrown },
  mutedText: { color: visualTokens.color.mutedBrown }
});
