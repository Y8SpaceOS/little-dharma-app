import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function PrototypeLandingScreen({ children }: { children: ReactNode }) {
  return (
    <LinearGradient colors={['#FFF7D9', '#FBE9E7', '#F2DFF6']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.screen}>
      {children}
    </LinearGradient>
  );
}

export function PrototypeStatusBar() {
  return (
    <View style={styles.statusWrap}>
      <Text style={styles.statusTime}>9:41</Text>
      <View style={styles.statusDots}><View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} /></View>
    </View>
  );
}

export function PrototypeSky() {
  return (
    <View style={styles.skyLayer}>
      <View style={styles.sunHalo} />
      <View style={styles.sun} />
      <View style={styles.cloudLeft} />
      <View style={styles.cloudRight} />
    </View>
  );
}

export function PrototypeBrandIcon() {
  return (
    <LinearGradient colors={['#FFB36B', '#F39BE5', '#81B7FF']} style={styles.brandOuter}>
      <View style={styles.brandInner}>
        <View style={styles.sunCenter} />
        <View style={styles.diyaBase} />
        <View style={styles.flame} />
      </View>
    </LinearGradient>
  );
}

export function PrototypeLandscape() {
  return (
    <View pointerEvents='none' style={styles.landscapeWrap}>
      <View style={styles.greenHill} />
      <View style={styles.yellowGround} />
    </View>
  );
}

export function PrototypeBottomCTA({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <View style={styles.ctaShadowBase}>
      <TouchableOpacity onPress={onPress} style={styles.ctaButton}>
        <Text style={styles.ctaText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  statusWrap: { marginTop: 18, paddingHorizontal: 26, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusTime: { color: '#623A20', fontSize: 15, fontWeight: '700' },
  statusDots: { flexDirection: 'row', gap: 4 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#623A20' },
  skyLayer: { position: 'absolute', inset: 0 },
  sunHalo: { position: 'absolute', top: 104, right: 58, width: 120, height: 120, borderRadius: 60, backgroundColor: 'rgba(255,226,148,0.45)' },
  sun: { position: 'absolute', top: 122, right: 78, width: 78, height: 78, borderRadius: 39, backgroundColor: '#FFD873' },
  cloudLeft: { position: 'absolute', top: 172, left: 34, width: 94, height: 30, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.85)' },
  cloudRight: { position: 'absolute', top: 188, right: 30, width: 78, height: 26, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.8)' },
  brandOuter: {
    width: 146, height: 146, borderRadius: 36, alignSelf: 'center', marginTop: 72, padding: 10,
    shadowColor: '#A47440', shadowOpacity: 0.22, shadowRadius: 16, shadowOffset: { width: 0, height: 8 }, elevation: 7
  },
  brandInner: { flex: 1, borderRadius: 28, backgroundColor: '#FFFDF8', justifyContent: 'center', alignItems: 'center' },
  sunCenter: { position: 'absolute', top: 24, width: 26, height: 26, borderRadius: 13, backgroundColor: '#FDB84A' },
  diyaBase: { width: 58, height: 24, borderRadius: 16, backgroundColor: '#F08B2C', marginTop: 28 },
  flame: { position: 'absolute', top: 58, width: 16, height: 26, borderRadius: 14, backgroundColor: '#FFD079' },
  landscapeWrap: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 320 },
  greenHill: { position: 'absolute', left: -34, right: -24, bottom: 76, height: 210, borderTopLeftRadius: 190, borderTopRightRadius: 190, backgroundColor: '#77B661' },
  yellowGround: { position: 'absolute', left: -20, right: -20, bottom: -34, height: 152, borderTopLeftRadius: 120, borderTopRightRadius: 120, backgroundColor: '#F7C845' },
  ctaShadowBase: { backgroundColor: '#C26E1E', borderRadius: 28, paddingBottom: 5, alignSelf: 'stretch' },
  ctaButton: { backgroundColor: '#E78D2B', borderRadius: 28, paddingVertical: 18 },
  ctaText: { textAlign: 'center', color: '#FFF8EF', fontSize: 22, fontWeight: '900' }
});
