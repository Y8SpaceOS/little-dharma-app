import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrototypeBottomCTA, PrototypeLandingScreen } from '@/components/prototypePrimitives';

type ScreenId = '02' | '03' | '04' | '05' | '06' | '07' | '08';
type AgeBand = '3-5' | '6-8' | '9-12';

const SCREEN_FLOW: ScreenId[] = ['02', '03', '04', '05', '06', '07', '08'];

const SCREEN_02_VALUE_ROWS = [
  { icon: '🌸', title: 'Warm, not preachy', body: 'Values through stories.' },
  { icon: '🔒', title: 'Private by design', body: 'Parent-controlled experience.' },
  { icon: '🎧', title: 'Low-screen friendly', body: 'Audio for bedtime and car time.' }
] as const;

const AGE_BANDS: { key: AgeBand; label: string; note: string }[] = [
  { key: '3-5', label: 'Ages 3–5', note: 'Gentle picture-rich guidance' },
  { key: '6-8', label: 'Ages 6–8', note: 'Growing curiosity and rhythm' },
  { key: '9-12', label: 'Ages 9–12', note: 'Deeper meaning and reflection' }
];

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [screenIndex, setScreenIndex] = useState(0);
  const [selectedAgeBand, setSelectedAgeBand] = useState<AgeBand>('6-8');

  const screen = SCREEN_FLOW[screenIndex];
  const onNext = () => {
    if (screen === '08') {
      router.push('/(child)/today');
      return;
    }
    setScreenIndex((v) => Math.min(v + 1, SCREEN_FLOW.length - 1));
  };

  return (
    <PrototypeLandingScreen>
      {screen === '02' ? (
        <Screen02 insetsTop={insets.top} insetsBottom={insets.bottom} onNext={onNext} />
      ) : (
        <Screens03To08
          screen={screen}
          selectedAgeBand={selectedAgeBand}
          onSelectAgeBand={setSelectedAgeBand}
          insetsTop={insets.top}
          insetsBottom={insets.bottom}
          onBack={() => setScreenIndex((v) => Math.max(v - 1, 0))}
          onNext={onNext}
        />
      )}
    </PrototypeLandingScreen>
  );
}

function Screen02({ insetsTop, insetsBottom, onNext }: { insetsTop: number; insetsBottom: number; onNext: () => void }) {
  return (
    <>
      <View pointerEvents='none' style={styles.blueWaveWrap}>
        <LinearGradient colors={['#DDEAF8', '#CFE2F4']} style={styles.blueWave} />
      </View>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 22, paddingBottom: Math.max(128, insetsBottom + 86) }]}>
        <View style={styles.screen02HeroCard}>
          <View style={styles.diyaChip}><Text style={styles.diyaText}>🪔</Text></View>
          <Text style={styles.title}>A gentle spiritual world for children</Text>
          <Text style={styles.subtitle}>Stories, rituals, shlokas, values and parent-child moments, created with warmth and care.</Text>
        </View>
        <View style={styles.rowsWrap}>
          {SCREEN_02_VALUE_ROWS.map((row) => (
            <View key={row.title} style={styles.screen02ValueCard}>
              <View style={styles.iconChip}><Text style={styles.iconText}>{row.icon}</Text></View>
              <View style={styles.valueTextWrap}>
                <Text style={styles.valueTitle}>{row.title}</Text>
                <Text style={styles.valueBody}>{row.body}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label='Continue' onPress={onNext} />
      </View>
    </>
  );
}

function Screens03To08({ screen, selectedAgeBand, onSelectAgeBand, insetsTop, insetsBottom, onBack, onNext }: { screen: ScreenId; selectedAgeBand: AgeBand; onSelectAgeBand: (value: AgeBand) => void; insetsTop: number; insetsBottom: number; onBack: () => void; onNext: () => void }) {
  return (
    <>
      <View pointerEvents='none' style={styles.cloudWrap}><LinearGradient colors={['#FFF4E3', '#F2DAB7']} style={styles.cloudBand} /></View>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(128, insetsBottom + 86) }]}>
        {screen === '03' && <Screen03 selectedAgeBand={selectedAgeBand} onSelectAgeBand={onSelectAgeBand} />}
        {screen === '04' && <Screen04 />}
        {screen === '05' && <Screen05 />}
        {screen === '06' && <Screen06 />}
        {screen === '07' && <Screen07 />}
        {screen === '08' && <Screen08 />}
        <Pressable onPress={onBack} style={styles.backBtn}><Text style={styles.backLabel}>Back</Text></Pressable>
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label={screen === '08' ? 'Enter Little Dharma' : 'Next'} onPress={onNext} />
      </View>
    </>
  );
}

function Screen03({ selectedAgeBand, onSelectAgeBand }: { selectedAgeBand: AgeBand; onSelectAgeBand: (value: AgeBand) => void }) {
  return <View><Text style={styles.stepTitle}>Pick your child’s age band</Text><Text style={styles.stepSub}>Choose one band to shape story depth and guidance tone.</Text>{AGE_BANDS.map((band) => <Pressable key={band.key} onPress={() => onSelectAgeBand(band.key)} style={[styles.selectCard, selectedAgeBand === band.key && styles.selectCardActive]}><Text style={styles.selectTitle}>{band.label}</Text><Text style={styles.selectNote}>{band.note}</Text></Pressable>)}</View>;
}
const Screen04 = () => <View style={styles.card}><Text style={styles.stepTitle}>Meet your gentle guide</Text><Text style={styles.stepSub}>A gentle helper introduces family moments with warmth and care.</Text><Text style={styles.bigEmoji}>🪷</Text><Text style={styles.rowNote}>“I’ll help you begin with tiny, loving steps.”</Text></View>;
const Screen05 = () => <View style={styles.card}><Text style={styles.stepTitle}>Choose your family rhythm</Text><Text style={styles.rowNote}>☀️ Morning moments</Text><Text style={styles.rowNote}>🌙 Bedtime wind-down</Text><Text style={styles.rowNote}>🚗 On-the-go listening</Text></View>;
const Screen06 = () => <View style={styles.card}><Text style={styles.stepTitle}>Choose values to begin</Text><Text style={styles.rowNote}>🤍 Kindness · 🕯️ Truth · 🌸 Gratitude</Text></View>;
const Screen07 = () => <View style={styles.card}><Text style={styles.stepTitle}>Parent promise and privacy</Text><Text style={styles.rowNote}>🔒 Private by design · Parent-guided experience.</Text></View>;
const Screen08 = () => <View style={styles.card}><Text style={styles.stepTitle}>Your Little Dharma world is ready</Text><Text style={styles.rowNote}>Stories, rituals, values, and calm reflection are ready for your family.</Text></View>;

const styles = StyleSheet.create({
  scrollContent: { paddingHorizontal: 20 },
  screen02HeroCard: { borderRadius: 30, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 22, backgroundColor: 'rgba(255, 248, 238, 0.96)', borderWidth: 1, borderColor: '#EED8BC', shadowColor: '#5A2D13', shadowOpacity: 0.12, shadowRadius: 14, shadowOffset: { width: 0, height: 8 } },
  diyaChip: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FCECCF' }, diyaText: { fontSize: 22 },
  title: { marginTop: 12, color: '#4A2A11', fontSize: 31, lineHeight: 37, fontWeight: '800' }, subtitle: { marginTop: 10, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600' }, rowsWrap: { marginTop: 16, gap: 12 },
  screen02ValueCard: { borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255, 250, 243, 0.97)', borderWidth: 1, borderColor: '#F0DFC7', flexDirection: 'row', alignItems: 'center' },
  iconChip: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#F6E6D6', alignItems: 'center', justifyContent: 'center' }, iconText: { fontSize: 18 }, valueTextWrap: { flex: 1, marginLeft: 12 },
  valueTitle: { color: '#4A2A11', fontSize: 18, lineHeight: 23, fontWeight: '800' }, valueBody: { marginTop: 2, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },
  blueWaveWrap: { position: 'absolute', left: 0, right: 0, bottom: 64, height: 230 }, blueWave: { flex: 1, borderTopLeftRadius: 220, borderTopRightRadius: 220 },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' },
  cloudWrap: { position: 'absolute', left: 0, right: 0, top: 110, height: 120 }, cloudBand: { flex: 1, borderBottomLeftRadius: 120, borderBottomRightRadius: 120, opacity: 0.6 },
  stepTitle: { color: '#4A2A11', fontSize: 30, lineHeight: 36, fontWeight: '800', marginTop: 12 }, stepSub: { marginTop: 8, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600', marginBottom: 14 },
  selectCard: { borderRadius: 20, borderWidth: 1, borderColor: '#EED8BC', backgroundColor: 'rgba(255,248,238,0.9)', padding: 14, marginBottom: 10 }, selectCardActive: { borderColor: '#D0842F', backgroundColor: '#FDE8CB' },
  selectTitle: { color: '#4A2A11', fontSize: 18, fontWeight: '800' }, selectNote: { color: '#734E30', marginTop: 4, fontWeight: '600' },
  card: { borderRadius: 26, borderWidth: 1, borderColor: '#EED8BC', backgroundColor: 'rgba(255,248,238,0.9)', padding: 18, marginTop: 10, gap: 8 }, bigEmoji: { fontSize: 44, textAlign: 'center', marginVertical: 8 }, rowNote: { color: '#5E3A1E', fontSize: 17, lineHeight: 24, fontWeight: '700' },
  backBtn: { alignSelf: 'center', marginTop: 16, backgroundColor: 'rgba(255,255,255,0.6)', paddingHorizontal: 18, paddingVertical: 8, borderRadius: 16 }, backLabel: { color: '#5E3A1E', fontWeight: '700' }
});
