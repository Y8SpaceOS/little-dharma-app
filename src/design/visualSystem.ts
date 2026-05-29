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

// ─────────────────────────────────────────────────────────────────────────────
// Canonical design-system tokens — Design System Foundation v1.
// Derived from the 1-487 prototype `globalTokens` (screens 296-423 component
// library). Additive only: the `visualTokens`/`visualStyles` above are left
// unchanged so already-merged screens (#176-#179) keep their exact look, while
// new components and future screens adopt this canonical layer.
// ─────────────────────────────────────────────────────────────────────────────

export const palette = {
  ink: '#402615',
  muted: '#7B6550',
  cream: '#FFF8EC',
  paper: '#FFFDF8',
  white: '#FFFFFF',
  saffron: '#F7B547',
  saffronInk: '#B66A1F',
  lotus: '#FAD1E2',
  lotusDeep: '#F0A9C6',
  sky: '#E9F7FF',
  skyDeep: '#68BEEA',
  leaf: '#E7F6E9',
  leafDeep: '#7AC87A',
  gold: '#FFF2C4',
  line: '#F0D8B8',
  peacock: '#2E789F',
  peacockLight: '#64C0F0'
} as const;

// expo-linear-gradient inputs. `colors` top-to-bottom unless a component overrides.
export const gradients = {
  body: { colors: ['#FFF0D8', '#FFF8EC', '#EAF7FF'], locations: [0, 0.42, 1] },
  warm: { colors: ['#FFF8EC', '#E9F7FF'] },
  lotus: { colors: ['#FFF8EC', '#FFEFF6'] },
  sky: { colors: ['#EAF7FF', '#FFF8EC'] },
  leaf: { colors: ['#FFF8EC', '#E7F6E9'] },
  brandMark: { colors: ['#FFF2C4', '#FAD1E2', '#E9F7FF'] },
  peacock: { colors: ['#64C0F0', '#2E789F'] },
  progress: { colors: ['#F7B547', '#7AC87A'] }
} as const;

// Real-device type ramp. The prototype's px values are mockup-scale; this ramp
// preserves the prototype hierarchy/ratios at sizes consistent with the
// already-shipped screens (today.tsx headline 30, card title ~24, body ~15).
export const text = {
  display:    { fontSize: 30, lineHeight: 36, fontWeight: '900', letterSpacing: -0.3, color: palette.ink },
  title:      { fontSize: 24, lineHeight: 28, fontWeight: '900', letterSpacing: -0.3, color: palette.ink },
  heading:    { fontSize: 20, lineHeight: 25, fontWeight: '900', color: palette.ink },
  subheading: { fontSize: 17, lineHeight: 23, fontWeight: '800', color: palette.ink },
  body:       { fontSize: 15, lineHeight: 22, fontWeight: '600', color: palette.muted },
  bodyStrong: { fontSize: 15, lineHeight: 22, fontWeight: '800', color: palette.ink },
  caption:    { fontSize: 13, lineHeight: 18, fontWeight: '800', color: palette.muted },
  mini:       { fontSize: 11, lineHeight: 15, fontWeight: '800', color: palette.muted },
  reader:     { fontSize: 18, lineHeight: 27, fontWeight: '500', color: '#4B2C18' }
} as const;

export const space = { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 32, screen: 16, card: 16, gridGap: 12, kvGap: 8 } as const;

export const radii = { hero: 32, card: 28, lg: 24, panel: 18, tile: 16, bubble: 16, listItem: 14, node: 14, nav: 12, iconBox: 11, pill: 999 } as const;

export const elevation = {
  soft: { shadowColor: '#6A421A', shadowOpacity: 0.08, shadowRadius: 14, shadowOffset: { width: 0, height: 6 }, elevation: 2 },
  card: { shadowColor: '#6A421A', shadowOpacity: 0.12, shadowRadius: 22, shadowOffset: { width: 0, height: 12 }, elevation: 5 }
} as const;

// Motion timings (ms) from the 424-487 motion contract. Pair with useReducedMotion().
export const motion = {
  buttonPressIn: 90, buttonReleaseSettle: 140,
  cardLift: 100, cardReturn: 160,
  doorOpen: 350, nodeReveal: 300, diyaFlame: 250, flowerBloom: 450,
  bubbleReveal: 180, idleBlinkInterval: 8000
} as const;

export const dharmaTokens = { palette, gradients, text, space, radii, elevation, motion } as const;
