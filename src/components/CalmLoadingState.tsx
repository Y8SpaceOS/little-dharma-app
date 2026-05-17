import { StyleSheet, Text, View } from 'react-native';

type CalmLoadingStateProps = {
  surfaceName?: string;
  audience?: 'child' | 'parent' | 'neutral';
  title?: string;
  message?: string;
  variant?: 'card' | 'page' | 'inline';
};

const defaults = {
  child: {
    title: 'Getting your gentle journey ready.',
    message: 'Your next calm moment is being prepared with care.'
  },
  parent: {
    title: 'Preparing your family journey summary.',
    message: 'This private view is getting your latest local progress ready.'
  },
  neutral: {
    title: 'Preparing this space.',
    message: 'A calm moment while we set things up.'
  }
} as const;

export default function CalmLoadingState({
  surfaceName,
  audience = 'neutral',
  title,
  message,
  variant = 'card'
}: CalmLoadingStateProps) {
  const copy = defaults[audience];

  return (
    <View
      style={[styles.wrap, variant === 'page' ? styles.pageWrap : variant === 'inline' ? styles.inlineWrap : styles.cardWrap]}
      accessibilityRole='progressbar'
      accessibilityLabel={`${surfaceName || 'Screen'} loading state`}
      accessible
    >
      <View style={[styles.container, variant === 'inline' && styles.inlineContainer]}>
        <Text style={styles.title}>{title || copy.title}</Text>
        <Text style={styles.message}>{message || copy.message}</Text>
        <View style={styles.skeletonCard}>
          <View style={[styles.line, styles.lineLong]} />
          <View style={[styles.line, styles.lineMid]} />
          <View style={[styles.line, styles.lineShort]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: '100%' },
  pageWrap: { flex: 1, justifyContent: 'center', padding: 20 },
  cardWrap: { marginVertical: 8 },
  inlineWrap: { marginVertical: 4 },
  container: {
    backgroundColor: '#F7F4EF',
    borderColor: '#E6DED3',
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
    gap: 8
  },
  inlineContainer: { borderRadius: 14, paddingVertical: 12 },
  title: { fontSize: 18, fontWeight: '700', color: '#4A3A2D' },
  message: { fontSize: 14, lineHeight: 20, color: '#6D5B4A' },
  skeletonCard: { marginTop: 6, gap: 6 },
  line: { height: 10, borderRadius: 999, backgroundColor: '#E9E2D8' },
  lineLong: { width: '92%' },
  lineMid: { width: '74%' },
  lineShort: { width: '58%' }
});
