import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function PrototypeScreen({ children }: { children: ReactNode }) {
  return (
    <LinearGradient colors={['#FFF5E6', '#FFE7C8', '#F6E7F6']} style={styles.screenGradient}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

export function PrototypeHeroCard({ children }: { children: ReactNode }) {
  return <View style={styles.heroCard}>{children}</View>;
}

export function PrototypeBrandMark() {
  return (
    <View style={styles.brandMarkWrap}>
      <Text style={styles.brandMarkLotus}>✺</Text>
      <Text style={styles.brandMarkDiya}>◉</Text>
      <Text style={styles.brandMarkLotus}>✺</Text>
    </View>
  );
}

export function PrototypeMotifRow() {
  return <Text style={styles.motifRow}>✺  ◌  ✧  ◌  ✺</Text>;
}

export function PrototypeButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function PrototypeSecondaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.secondaryButton}>
      <Text style={styles.secondaryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function PrototypeLuvluBubble({ copy }: { copy: string }) {
  return (
    <View style={styles.luvluBubble}>
      <Text style={styles.luvluName}>Luvlu guide</Text>
      <Text style={styles.luvluCopy}>{copy}</Text>
    </View>
  );
}

export function PrototypeSurfaceCard({ children }: { children: ReactNode }) {
  return <View style={styles.surfaceCard}>{children}</View>;
}

const styles = StyleSheet.create({
  screenGradient: { flex: 1 },
  safeArea: { flex: 1, justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 18 },
  heroCard: {
    backgroundColor: '#FFF9EE',
    borderRadius: 34,
    borderWidth: 1,
    borderColor: '#E9D5B3',
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 12,
    shadowColor: '#A97234',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 9 },
    elevation: 6
  },
  brandMarkWrap: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 2 },
  brandMarkLotus: { color: '#D38B31', fontSize: 18 },
  brandMarkDiya: { color: '#E0A347', fontSize: 24 },
  motifRow: { textAlign: 'center', color: '#C7833A', fontSize: 12, letterSpacing: 1.8 },
  primaryButton: { backgroundColor: '#DF8E2B', borderRadius: 16, paddingVertical: 14, paddingHorizontal: 16, marginTop: 4 },
  primaryButtonText: { textAlign: 'center', color: '#FFFDF8', fontSize: 16, fontWeight: '800' },
  secondaryButton: {
    backgroundColor: '#FFF6E8',
    borderColor: '#E8C99F',
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  secondaryButtonText: { textAlign: 'center', color: '#6A492C', fontSize: 14, fontWeight: '700' },
  luvluBubble: { backgroundColor: '#E7F1FF', borderRadius: 16, borderWidth: 1, borderColor: '#CFE2FA', paddingHorizontal: 12, paddingVertical: 10, gap: 2 },
  luvluName: { color: '#1C4D7F', fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5 },
  luvluCopy: { color: '#1C4D7F', fontSize: 13, fontWeight: '600', lineHeight: 18 },
  surfaceCard: { backgroundColor: '#FFFBF4', borderRadius: 18, borderWidth: 1, borderColor: '#EBD9BD', paddingHorizontal: 12, paddingVertical: 10 }
});
