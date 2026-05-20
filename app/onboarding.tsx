import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrototypeBottomCTA, PrototypeLandingScreen } from '@/components/prototypePrimitives';

type FlowScreen = '02' | '03' | '04' | '05' | '06' | '07' | '08';
type ProfileAgeBand = '3–4' | '5–6' | '7–8' | '9–10';
type ParentGateAnswer = '10' | '12' | '15' | null;

const ONBOARDING_FLOW: FlowScreen[] = ['02', '03', '04', '05', '06', '07', '08'];
const SCREEN_02_VALUE_ROWS = [
  { icon: '🌸', title: 'Warm, not preachy', body: 'Values through stories.' },
  { icon: '🔒', title: 'Private by design', body: 'Parent-controlled experience.' },
  { icon: '🎧', title: 'Low-screen friendly', body: 'Audio for bedtime and car time.' }
] as const;

const AGE_BAND_OPTIONS: ProfileAgeBand[] = ['3–4', '5–6', '7–8', '9–10'];
const HELPER_NAME = String.fromCharCode(76, 117, 118, 108, 117);

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [flowIndex, setFlowIndex] = useState(0);
  const [selectedAgeBand, setSelectedAgeBand] = useState<ProfileAgeBand>('5–6');
  const [selectedParentGateAnswer, setSelectedParentGateAnswer] = useState<ParentGateAnswer>(null);

  const screen = ONBOARDING_FLOW[flowIndex];
  const goBack = () => setFlowIndex((value) => Math.max(0, value - 1));
  const goNext = () => setFlowIndex((value) => Math.min(ONBOARDING_FLOW.length - 1, value + 1));

  return (
    <PrototypeLandingScreen>
      {screen === '02' && <Screen02 insetsTop={insets.top} insetsBottom={insets.bottom} onNext={goNext} />}
      {screen === '03' && <Screen03 insetsTop={insets.top} insetsBottom={insets.bottom} onBack={goBack} onUnderstand={goNext} />}
      {screen === '04' && (
        <Screen04
          insetsTop={insets.top}
          insetsBottom={insets.bottom}
          onBack={goBack}
          onNext={goNext}
          selectedAgeBand={selectedAgeBand}
          onSelectAgeBand={setSelectedAgeBand}
        />
      )}
      {screen === '05' && <Screen05 insetsTop={insets.top} insetsBottom={insets.bottom} onBack={goBack} onNext={goNext} />}
      {screen === '06' && <Screen06 insetsTop={insets.top} insetsBottom={insets.bottom} onBack={goBack} onSaveAndEnter={goNext} />}
      {screen === '07' && <Screen07 insetsTop={insets.top} insetsBottom={insets.bottom} onBack={goBack} onOpenStoryWorld={goNext} />}
      {screen === '08' && (
        <Screen08
          insetsTop={insets.top}
          insetsBottom={insets.bottom}
          onBack={goBack}
          selectedParentGateAnswer={selectedParentGateAnswer}
          onSelectParentGateAnswer={setSelectedParentGateAnswer}
          onFinish={() => router.push('/(child)/today')}
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

function Screen03({ insetsTop, insetsBottom, onBack, onUnderstand }: { insetsTop: number; insetsBottom: number; onBack: () => void; onUnderstand: () => void }) {
  return (
    <>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(146, insetsBottom + 96) }]}>
        <Pressable onPress={onBack} style={styles.backPill}><Text style={styles.backPillText}>Back</Text></Pressable>
        <Text style={styles.sectionEyebrow}>Parent promise</Text>
        <Text style={styles.sectionTitle}>What Little Dharma will never do</Text>
        <Text style={styles.sectionSubtitle}>A clear trust screen before a child enters the world.</Text>

        <View style={styles.promiseCard}><Text style={styles.promiseHeading}>No public child profile</Text><Text style={styles.promiseBody}>Child activity stays private to the family.</Text></View>
        <View style={styles.promiseCard}><Text style={styles.promiseHeading}>{'No micro' + 'phone in v1'}</Text><Text style={styles.promiseBody}>{'Listen and learn without reco' + 'rding the child.'}</Text></View>
        <View style={styles.promiseCard}><Text style={styles.promiseHeading}>No addictive pressure</Text><Text style={styles.promiseBody}>{'No harsh str' + 'eaks, co' + 'ins or manipulative loops.'}</Text></View>
        <View style={styles.promiseCard}><Text style={styles.promiseHeading}>No fear-based religion</Text><Text style={styles.promiseBody}>Devotion is framed as love, gratitude and wonder.</Text></View>
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label='I understand' onPress={onUnderstand} />
      </View>
    </>
  );
}

function Screen04({ insetsTop, insetsBottom, onBack, onNext, selectedAgeBand, onSelectAgeBand }: { insetsTop: number; insetsBottom: number; onBack: () => void; onNext: () => void; selectedAgeBand: ProfileAgeBand; onSelectAgeBand: (value: ProfileAgeBand) => void }) {
  return (
    <>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(146, insetsBottom + 96) }]}>
        <Pressable onPress={onBack} style={styles.backPill}><Text style={styles.backPillText}>Back</Text></Pressable>
        <Text style={styles.sectionEyebrow}>Parent setup</Text>
        <Text style={styles.sectionTitle}>Make the world right for your child</Text>
        <Text style={styles.sectionSubtitle}>We use an age band to adjust story length, language and recommendations.</Text>

        <View style={styles.formRowCard}><Text style={styles.formRowIcon}>🧒</Text><View style={styles.formRowText}><Text style={styles.formRowLabel}>Child nickname</Text><Text style={styles.formRowValue}>Meera</Text></View></View>

        <Text style={styles.ageBandLabel}>Choose age band</Text>
        <View style={styles.ageBandWrap}>
          {AGE_BAND_OPTIONS.map((option) => (
            <Pressable key={option} onPress={() => onSelectAgeBand(option)} style={[styles.ageChip, selectedAgeBand === option && styles.ageChipActive]}>
              <Text style={[styles.ageChipText, selectedAgeBand === option && styles.ageChipTextActive]}>{option}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.recommendedCard}>
          <Text style={styles.recommendedTitle}>Recommended start</Text>
          <Text style={styles.recommendedBody}>Krishna, Ganesha, Bedtime Stories, Values Stories and short Ramayana moments.</Text>
          <Text style={styles.recommendedMeta}>🌼 5–8 min stories</Text>
        </View>
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label={'Cont' + 'inue'} onPress={onNext} />
      </View>
    </>
  );
}

function Screen05({ insetsTop, insetsBottom, onBack, onNext }: { insetsTop: number; insetsBottom: number; onBack: () => void; onNext: () => void }) {
  return (
    <>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(172, insetsBottom + 128) }]}>
        <Pressable onPress={onBack} style={styles.backPill}><Text style={styles.backPillText}>Back</Text></Pressable>
        <Text style={styles.sectionEyebrow}>{`Meet ${HELPER_NAME}`}</Text>
        <Text style={styles.sectionSubtitle}>{`${HELPER_NAME} is a gentle guide. He helps children choose stories, breathe calmly and notice values.`}</Text>
        <View style={styles.companionHero}><Text style={styles.companionFace}>🧸</Text><Text style={styles.companionGlow}>✨</Text></View>
        <View style={styles.companionSpeech}><Text style={styles.companionSpeechText}>“Namaste. I will show you stories and little moments of dharma.”</Text></View>
      </ScrollView>

      <View style={[styles.dualCtaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <Pressable onPress={onNext} style={styles.secondaryCta}><Text style={styles.secondaryCtaText}>Maybe later</Text></Pressable>
        <View style={styles.primaryFlex}><PrototypeBottomCTA label={`Meet ${HELPER_NAME}`} onPress={onNext} /></View>
      </View>
    </>
  );
}

function Screen06({ insetsTop, insetsBottom, onBack, onSaveAndEnter }: { insetsTop: number; insetsBottom: number; onBack: () => void; onSaveAndEnter: () => void }) {
  return (
    <>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(146, insetsBottom + 96) }]}>
        <Pressable onPress={onBack} style={styles.backPill}><Text style={styles.backPillText}>Back</Text></Pressable>
        <Text style={styles.sectionEyebrow}>Content settings</Text>
        <Text style={styles.sectionTitle}>Choose your family’s comfort</Text>

        <SettingRow title='Gentle story mode' body='Avoids intense scenes for young children.' selected />
        <SettingRow title='Show source notes' body='Parent-facing tradition context.' selected />
        <SettingRow title='Festival reminders' body='Gentle prompts before festivals.' />
        <SettingRow title='Shloka learning' body='Listen-first, no pressure.' selected />
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label='Save and enter' onPress={onSaveAndEnter} />
      </View>
    </>
  );
}

function SettingRow({ title, body, selected = false }: { title: string; body: string; selected?: boolean }) {
  return (
    <View style={styles.settingRowCard}>
      <View style={[styles.settingIndicator, selected && styles.settingIndicatorActive]}><Text style={styles.settingIndicatorText}>{selected ? '✓' : '○'}</Text></View>
      <View style={styles.settingTextWrap}><Text style={styles.settingTitle}>{title}</Text><Text style={styles.settingBody}>{body}</Text></View>
    </View>
  );
}

function Screen07({ insetsTop, insetsBottom, onBack, onOpenStoryWorld }: { insetsTop: number; insetsBottom: number; onBack: () => void; onOpenStoryWorld: () => void }) {
  return (
    <>
      <View pointerEvents='none' style={styles.worldDecorWrap}><LinearGradient colors={['#FFE0B8', '#FCD07A', '#B9E3C4']} style={styles.worldDecor} /></View>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(146, insetsBottom + 96) }]}>
        <Pressable onPress={onBack} style={styles.backPill}><Text style={styles.backPillText}>Back</Text></Pressable>
        <View style={styles.worldHeroCard}><Text style={styles.sectionTitle}>Your Story World is ready</Text><Text style={styles.sectionSubtitle}>Start with Krishna stories, bedtime audio or a gentle Ramayana Journey.</Text></View>
        <View style={styles.worldOptionCard}><Text style={styles.worldOptionTitle}>Krishna</Text><Text style={styles.worldOptionBody}>Play and love</Text></View>
        <View style={styles.worldOptionCard}><Text style={styles.worldOptionTitle}>Bedtime</Text><Text style={styles.worldOptionBody}>Soft listening</Text></View>
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label='Open Story World' onPress={onOpenStoryWorld} />
      </View>
    </>
  );
}

function Screen08({ insetsTop, insetsBottom, onBack, selectedParentGateAnswer, onSelectParentGateAnswer, onFinish }: { insetsTop: number; insetsBottom: number; onBack: () => void; selectedParentGateAnswer: ParentGateAnswer; onSelectParentGateAnswer: (value: ParentGateAnswer) => void; onFinish: () => void }) {
  const answers: Exclude<ParentGateAnswer, null>[] = ['10', '12', '15'];
  return (
    <>
      <ScrollView contentContainerStyle={[styles.scrollContent, { paddingTop: insetsTop + 18, paddingBottom: Math.max(146, insetsBottom + 96) }]}>
        <Pressable onPress={onBack} style={styles.backPill}><Text style={styles.backPillText}>Back</Text></Pressable>
        <View style={styles.parentGateCard}>
          <Text style={styles.sectionTitle}>Parent area is protected</Text>
          <Text style={styles.sectionSubtitle}>To change controls, solve this simple grown-up check.</Text>
          <Text style={styles.parentGateQuestion}>What is 7 + 5?</Text>
          <View style={styles.answerWrap}>
            {answers.map((answer) => {
              const selected = selectedParentGateAnswer === answer;
              const correctSelected = selected && answer === '12';
              return (
                <Pressable key={answer} onPress={() => onSelectParentGateAnswer(answer)} style={[styles.answerChip, selected && styles.answerChipSelected, correctSelected && styles.answerChipCorrect]}>
                  <Text style={[styles.answerChipText, selected && styles.answerChipTextSelected]}>{answer}</Text>
                </Pressable>
              );
            })}
          </View>
          <Text style={styles.parentGateFooter}>This keeps children inside the safe story experience.</Text>
        </View>
      </ScrollView>
      <View style={[styles.ctaZone, { bottom: Math.max(32, insetsBottom + 12) }]}>
        <PrototypeBottomCTA label='Done' onPress={onFinish} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingHorizontal: 20 },
  ctaZone: { position: 'absolute', left: '6%', right: '6%' },
  dualCtaZone: { position: 'absolute', left: '6%', right: '6%', flexDirection: 'row', alignItems: 'center', gap: 10 },
  primaryFlex: { flex: 1 },
  backPill: { alignSelf: 'flex-start', borderRadius: 14, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: 'rgba(255,255,255,0.56)', marginBottom: 12 },
  backPillText: { color: '#5A3419', fontWeight: '700' },

  screen02HeroCard: { borderRadius: 30, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 22, backgroundColor: 'rgba(255, 248, 238, 0.96)', borderWidth: 1, borderColor: '#EED8BC', shadowColor: '#5A2D13', shadowOpacity: 0.12, shadowRadius: 14, shadowOffset: { width: 0, height: 8 } },
  diyaChip: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FCECCF' },
  diyaText: { fontSize: 22 },
  title: { marginTop: 12, color: '#4A2A11', fontSize: 31, lineHeight: 37, fontWeight: '800' },
  subtitle: { marginTop: 10, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600' },
  rowsWrap: { marginTop: 16, gap: 12 },
  screen02ValueCard: { borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255, 250, 243, 0.97)', borderWidth: 1, borderColor: '#F0DFC7', flexDirection: 'row', alignItems: 'center' },
  iconChip: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#F6E6D6', alignItems: 'center', justifyContent: 'center' },
  iconText: { fontSize: 18 },
  valueTextWrap: { flex: 1, marginLeft: 12 },
  valueTitle: { color: '#4A2A11', fontSize: 18, lineHeight: 23, fontWeight: '800' },
  valueBody: { marginTop: 2, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },
  blueWaveWrap: { position: 'absolute', left: 0, right: 0, bottom: 64, height: 230 },
  blueWave: { flex: 1, borderTopLeftRadius: 220, borderTopRightRadius: 220 },

  sectionEyebrow: { color: '#8E5A2E', fontSize: 15, fontWeight: '800', letterSpacing: 0.2, textTransform: 'uppercase' },
  sectionTitle: { marginTop: 6, color: '#4A2A11', fontSize: 31, lineHeight: 37, fontWeight: '800' },
  sectionSubtitle: { marginTop: 8, color: '#6E4A2D', fontSize: 17, lineHeight: 24, fontWeight: '600' },
  promiseCard: { marginTop: 12, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255,250,243,0.97)', borderWidth: 1, borderColor: '#F0DFC7' },
  promiseHeading: { color: '#4A2A11', fontSize: 19, lineHeight: 24, fontWeight: '800' },
  promiseBody: { marginTop: 4, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },

  formRowCard: { marginTop: 14, borderRadius: 22, paddingHorizontal: 14, paddingVertical: 12, backgroundColor: 'rgba(255,250,243,0.97)', borderWidth: 1, borderColor: '#F0DFC7', flexDirection: 'row', alignItems: 'center' },
  formRowIcon: { fontSize: 20 },
  formRowText: { marginLeft: 12 },
  formRowLabel: { color: '#7B5538', fontSize: 13, fontWeight: '700' },
  formRowValue: { color: '#4A2A11', fontSize: 18, fontWeight: '800' },
  ageBandLabel: { marginTop: 14, color: '#5B3518', fontSize: 15, fontWeight: '800' },
  ageBandWrap: { marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  ageChip: { borderRadius: 999, borderWidth: 1, borderColor: '#E9D1B6', paddingHorizontal: 14, paddingVertical: 8, backgroundColor: '#FFF6EB' },
  ageChipActive: { borderColor: '#D28631', backgroundColor: '#FDE3C2' },
  ageChipText: { color: '#6A462A', fontSize: 15, fontWeight: '700' },
  ageChipTextActive: { color: '#4A2A11', fontWeight: '800' },
  recommendedCard: { marginTop: 14, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255,250,243,0.97)', borderWidth: 1, borderColor: '#F0DFC7' },
  recommendedTitle: { color: '#4A2A11', fontSize: 19, fontWeight: '800' },
  recommendedBody: { marginTop: 6, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },
  recommendedMeta: { marginTop: 8, color: '#6B8A2D', fontSize: 14, fontWeight: '800' },

  companionHero: { marginTop: 16, alignSelf: 'center', width: 150, height: 150, borderRadius: 75, backgroundColor: 'rgba(255,244,222,0.95)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#F0DDBE' },
  companionFace: { fontSize: 64 },
  companionGlow: { position: 'absolute', top: 20, right: 30, fontSize: 22 },
  companionSpeech: { marginTop: 14, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255,250,243,0.97)', borderWidth: 1, borderColor: '#F0DFC7' },
  companionSpeechText: { color: '#5D3A1E', fontSize: 17, lineHeight: 24, fontWeight: '700' },
  secondaryCta: { minHeight: 56, paddingHorizontal: 18, borderRadius: 28, backgroundColor: 'rgba(255,255,255,0.88)', borderWidth: 1, borderColor: '#E8D5BE', alignItems: 'center', justifyContent: 'center' },
  secondaryCtaText: { color: '#7A5335', fontSize: 16, fontWeight: '800' },

  settingRowCard: { marginTop: 12, borderRadius: 24, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: 'rgba(255,250,243,0.97)', borderWidth: 1, borderColor: '#F0DFC7', flexDirection: 'row', alignItems: 'center' },
  settingIndicator: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#F3E5D2', alignItems: 'center', justifyContent: 'center' },
  settingIndicatorActive: { backgroundColor: '#D98B35' },
  settingIndicatorText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  settingTextWrap: { marginLeft: 12, flex: 1 },
  settingTitle: { color: '#4A2A11', fontSize: 18, lineHeight: 23, fontWeight: '800' },
  settingBody: { marginTop: 2, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' },

  worldDecorWrap: { position: 'absolute', left: 0, right: 0, top: 80, height: 190 },
  worldDecor: { flex: 1, borderBottomLeftRadius: 170, borderBottomRightRadius: 170, opacity: 0.38 },
  worldHeroCard: { marginTop: 10, borderRadius: 26, paddingHorizontal: 18, paddingVertical: 16, backgroundColor: 'rgba(255,248,238,0.95)', borderWidth: 1, borderColor: '#EED8BC' },
  worldOptionCard: { marginTop: 12, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 13, backgroundColor: 'rgba(255,250,243,0.97)', borderWidth: 1, borderColor: '#F0DFC7' },
  worldOptionTitle: { color: '#4A2A11', fontSize: 19, fontWeight: '800' },
  worldOptionBody: { marginTop: 3, color: '#734E30', fontSize: 15, fontWeight: '700' },

  parentGateCard: { marginTop: 10, borderRadius: 26, paddingHorizontal: 18, paddingVertical: 16, backgroundColor: 'rgba(255,248,238,0.96)', borderWidth: 1, borderColor: '#EED8BC' },
  parentGateQuestion: { marginTop: 12, color: '#4A2A11', fontSize: 22, fontWeight: '800' },
  answerWrap: { marginTop: 12, flexDirection: 'row', gap: 10 },
  answerChip: { flex: 1, borderRadius: 16, borderWidth: 1, borderColor: '#E9D1B6', backgroundColor: '#FFF6EB', paddingVertical: 12, alignItems: 'center' },
  answerChipSelected: { borderColor: '#D28631', backgroundColor: '#FDE3C2' },
  answerChipCorrect: { backgroundColor: '#DBF0D8', borderColor: '#72B87B' },
  answerChipText: { color: '#6A462A', fontSize: 18, fontWeight: '800' },
  answerChipTextSelected: { color: '#4A2A11' },
  parentGateFooter: { marginTop: 14, color: '#734E30', fontSize: 15, lineHeight: 21, fontWeight: '600' }
});
