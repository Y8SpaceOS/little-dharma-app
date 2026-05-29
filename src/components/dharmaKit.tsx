import { ReactNode } from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewProps,
  ViewStyle
} from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { elevation, gradients, palette, radii, space, text } from '@/design/visualSystem';
import { useReducedMotion } from '@/lib/useReducedMotion';

// ─────────────────────────────────────────────────────────────────────────────
// Dharma Kit — Design System Foundation v1 component library.
//
// Thin, presentational primitives built ONLY on the canonical token layer
// (`palette`, `gradients`, `text`, `space`, `radii`, `elevation`, `motion`) from
// `@/design/visualSystem`. Derived from the 296-423 component contracts
// (.heroCard, .tile, .grid2, .sheet, .list/.listitem, .iconbox, .luvlu/.bubble,
// .metrics, .navbar, .path/.node) and the 424-487 motion + Luvlu governance.
//
// Governance baked in:
//  • Motion is reduced-motion aware via useReducedMotion(); press feedback is
//    skipped entirely when the OS "Reduce Motion" setting is on.
//  • Luvlu is a peacock helper bubble only — never a logo, deity, token, badge,
//    coin, or achievement. Bubbles stay short and sit at a card/screen edge.
//  • No gamification, no backend, no audio — these are pure view components.
//
// Additive: existing `visualStyles`/screens are untouched. New + adopting
// child-core screens consume this kit.
// ─────────────────────────────────────────────────────────────────────────────

type GradientName = keyof typeof gradients;

function gradientProps(name: GradientName): Pick<LinearGradientProps, 'colors' | 'locations'> {
  const g = gradients[name];
  const colors = g.colors as unknown as LinearGradientProps['colors'];
  const locations = 'locations' in g ? (g.locations as unknown as LinearGradientProps['locations']) : undefined;
  return locations ? { colors, locations } : { colors };
}

// ── Screen background ────────────────────────────────────────────────────────
export function GradientScreen({
  gradient = 'body',
  style,
  children,
  ...rest
}: { gradient?: GradientName; children?: ReactNode } & Omit<LinearGradientProps, 'colors'>) {
  return (
    <LinearGradient
      {...gradientProps(gradient)}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.screen, style]}
      {...rest}
    >
      {children}
    </LinearGradient>
  );
}

// ── Cards ────────────────────────────────────────────────────────────────────
export function Card({ style, children, ...rest }: ViewProps & { children?: ReactNode }) {
  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
}

export function HeroCard({
  gradient,
  style,
  children,
  ...rest
}: { gradient?: GradientName; children?: ReactNode } & ViewProps) {
  if (gradient) {
    return (
      <LinearGradient {...gradientProps(gradient)} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.heroCard, style as ViewStyle]}>
        {children}
      </LinearGradient>
    );
  }
  return (
    <View style={[styles.heroCard, style]} {...rest}>
      {children}
    </View>
  );
}

export function Tile({ style, children, ...rest }: ViewProps & { children?: ReactNode }) {
  return (
    <View style={[styles.tile, style]} {...rest}>
      {children}
    </View>
  );
}

// ── Buttons (reduced-motion-aware press feedback) ────────────────────────────
type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  style?: ViewStyle;
};

export function PrimaryButton({ label, style, disabled, ...rest }: ButtonProps) {
  const reduce = useReducedMotion();
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.primaryButton,
        disabled && styles.buttonDisabled,
        !reduce && pressed && !disabled && styles.pressed,
        style
      ]}
      {...rest}
    >
      <Text style={styles.primaryButtonLabel}>{label}</Text>
    </Pressable>
  );
}

export function SecondaryButton({ label, style, disabled, ...rest }: ButtonProps) {
  const reduce = useReducedMotion();
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.secondaryButton,
        disabled && styles.buttonDisabled,
        !reduce && pressed && !disabled && styles.pressed,
        style
      ]}
      {...rest}
    >
      <Text style={styles.secondaryButtonLabel}>{label}</Text>
    </Pressable>
  );
}

// ── Chips & meta pills ───────────────────────────────────────────────────────
export function Chip({ label, style }: { label: string; style?: ViewStyle }) {
  return (
    <View style={[styles.chip, style]}>
      <Text style={styles.chipLabel}>{label}</Text>
    </View>
  );
}

export function MetaPill({ label, style }: { label: string; style?: ViewStyle }) {
  return (
    <View style={[styles.metaPill, style]}>
      <Text style={styles.metaPillLabel}>{label}</Text>
    </View>
  );
}

// ── Typography helpers ───────────────────────────────────────────────────────
export function SectionHeader({ children, style, ...rest }: TextProps & { children: ReactNode }) {
  return (
    <Text accessibilityRole="header" style={[styles.sectionHeader, style]} {...rest}>
      {children}
    </Text>
  );
}

// ── Luvlu helper bubble (governed: peacock helper only, short copy, edge) ─────
export function LuvluBubble({ message, style }: { message: string; style?: ViewStyle }) {
  return (
    <View style={[styles.luvluRow, style]} accessibilityRole="text" accessibilityLabel={`Luvlu says: ${message}`}>
      <LinearGradient {...gradientProps('peacock')} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.luvluAvatar}>
        <Text style={styles.luvluAvatarGlyph}>🦚</Text>
      </LinearGradient>
      <View style={styles.luvluBubble}>
        <Text style={styles.luvluText}>{message}</Text>
      </View>
    </View>
  );
}

// ── Empty / gentle recovery state ────────────────────────────────────────────
export function EmptyState({
  marker = '🪷',
  title,
  message,
  trustNote = 'Being prepared with care.',
  style
}: {
  marker?: string;
  title: string;
  message: string;
  trustNote?: string;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.emptyState, style]} accessibilityRole="summary" accessibilityLabel={`${title}. ${message}. ${trustNote}`}>
      <Text style={styles.emptyMarker}>{marker}</Text>
      <Text style={styles.emptyTitle}>{title}</Text>
      <Text style={styles.emptyMessage}>{message}</Text>
      <Text style={styles.emptyTrust}>{trustNote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },

  card: {
    backgroundColor: palette.paper,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: palette.line,
    padding: space.card,
    gap: space.sm,
    ...elevation.card
  },
  heroCard: {
    backgroundColor: palette.paper,
    borderRadius: radii.hero,
    borderWidth: 1,
    borderColor: palette.line,
    padding: space.lg,
    gap: space.sm,
    ...elevation.card
  },
  tile: {
    backgroundColor: palette.paper,
    borderRadius: radii.tile,
    borderWidth: 1,
    borderColor: palette.line,
    padding: space.md,
    gap: space.xs,
    ...elevation.soft
  },

  primaryButton: {
    backgroundColor: palette.saffron,
    borderRadius: radii.pill,
    paddingVertical: 13,
    paddingHorizontal: space.lg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primaryButtonLabel: { ...text.bodyStrong, color: palette.white, fontWeight: '900' },
  secondaryButton: {
    backgroundColor: palette.white,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: palette.line,
    paddingVertical: 12,
    paddingHorizontal: space.lg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondaryButtonLabel: { ...text.bodyStrong, color: palette.ink },
  buttonDisabled: { opacity: 0.55 },
  pressed: { transform: [{ scale: 0.98 }], opacity: 0.92 },

  chip: {
    alignSelf: 'flex-start',
    backgroundColor: palette.gold,
    borderWidth: 1,
    borderColor: palette.line,
    borderRadius: radii.pill,
    paddingHorizontal: space.sm,
    paddingVertical: 5
  },
  chipLabel: { ...text.caption, color: palette.saffronInk },
  metaPill: {
    backgroundColor: palette.white,
    borderRadius: radii.pill,
    paddingHorizontal: space.sm,
    paddingVertical: 6
  },
  metaPillLabel: { ...text.caption, color: palette.muted },

  sectionHeader: { ...text.heading, marginTop: space.sm, marginBottom: space.xs },

  luvluRow: { flexDirection: 'row', alignItems: 'flex-end', gap: space.sm },
  luvluAvatar: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  luvluAvatarGlyph: { fontSize: 22 },
  luvluBubble: {
    flex: 1,
    backgroundColor: palette.white,
    borderRadius: radii.bubble,
    borderWidth: 1,
    borderColor: palette.line,
    paddingHorizontal: space.md,
    paddingVertical: space.sm
  },
  luvluText: { ...text.body, color: palette.ink },

  emptyState: {
    backgroundColor: palette.sky,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: palette.line,
    padding: space.xl,
    gap: space.sm,
    alignItems: 'center'
  },
  emptyMarker: { fontSize: 34 },
  emptyTitle: { ...text.title, textAlign: 'center' },
  emptyMessage: { ...text.body, textAlign: 'center' },
  emptyTrust: { ...text.caption, color: palette.muted, textAlign: 'center' }
});
