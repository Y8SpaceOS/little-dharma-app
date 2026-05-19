import { StyleSheet } from 'react-native';

export const visualTokens = {
  palette: {
    saffron: '#F2AA2B',
    cream: '#FFF7EA',
    lotus: '#F5E4F2',
    sky: '#E4F1FF',
    leaf: '#DFF2E4',
    diya: '#FFE2A8',
    warmBrown: '#4F311D',
    warmText: '#6B4A33'
  },
  radius: { xl: 30, lg: 24, md: 18, pill: 999 },
  type: { hero: 34, h1: 28, h2: 21, title: 18, body: 14, caption: 12 },
  shadow: {
    soft: { shadowColor: '#D9A66A', shadowOpacity: 0.16, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 3 }
  }
} as const;

export const visualStyles = StyleSheet.create({
  softScreen: { flex: 1, backgroundColor: visualTokens.palette.cream },
  softSectionHeader: { fontSize: visualTokens.type.h2, fontWeight: '900', color: visualTokens.palette.warmBrown, marginTop: 8 },
  roundedCard: { borderRadius: visualTokens.radius.lg, borderWidth: 1, borderColor: '#F0DAB8', padding: 14, backgroundColor: '#FFFDF8' },
  warmCard: { backgroundColor: '#FFF2D9' },
  skyCard: { backgroundColor: visualTokens.palette.sky },
  lotusCard: { backgroundColor: visualTokens.palette.lotus },
  leafCard: { backgroundColor: visualTokens.palette.leaf },
  primaryCta: { backgroundColor: visualTokens.palette.saffron, borderRadius: visualTokens.radius.pill, paddingHorizontal: 16, paddingVertical: 10, color: '#fff', fontWeight: '800', overflow: 'hidden' },
  secondaryCta: { backgroundColor: '#FFF', borderRadius: visualTokens.radius.pill, paddingHorizontal: 16, paddingVertical: 10, color: visualTokens.palette.warmBrown, fontWeight: '800', borderWidth: 1, borderColor: '#E8C796', overflow: 'hidden' },
  chip: { borderRadius: visualTokens.radius.pill, paddingHorizontal: 10, paddingVertical: 5, fontSize: 12, fontWeight: '700', color: '#5E402A', backgroundColor: '#FFF5E2', borderWidth: 1, borderColor: '#EAC98F' },
  parentTrustNoteCard: { backgroundColor: '#FFFCF3', borderColor: '#EAD7B6', borderWidth: 1, borderRadius: visualTokens.radius.md, padding: 12, gap: 3 },
  luvluBubble: { alignSelf: 'flex-start', backgroundColor: '#FFFFFF', borderRadius: visualTokens.radius.pill, borderWidth: 1, borderColor: '#EBCFA8', paddingHorizontal: 12, paddingVertical: 8 },
  emptyStateCard: { backgroundColor: '#EEF6FF', borderColor: '#CBE2F5', borderWidth: 1, borderRadius: visualTokens.radius.lg, padding: 18 }
});
