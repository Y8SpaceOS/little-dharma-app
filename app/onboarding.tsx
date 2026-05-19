import { ReactElement, useEffect, useMemo, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { tokens } from '@/design/tokens';
import { visualTokens } from '@/design/visualSystem';
import { AgeBand, completeOnboarding, loadOnboardingState, OnboardingProfile } from '@/lib/onboardingState';
import { ChildAgeBand, ChildProfile, ParentIntent, getChildProfile, saveChildProfile, skipChildProfileSetup } from '@/lib/childProfile';

type Step = { id: string; title: string; subtitle: string; render: () => ReactElement };
const ageBands: ChildAgeBand[] = ['3-5', '6-8', '9-12', 'prefer-not-to-say'];
const parentIntents: ParentIntent[] = ['bedtime-calm', 'values-learning', 'festival-culture-learning', 'daily-story-habit', 'just-exploring'];
const defaultProfile: OnboardingProfile = { childName: '', nickname: '', ageBand: '3-5' as AgeBand, language: 'English', favoriteCharacter: 'Krishna', bedtimePreference: 'Cozy (10 min)' };

function OnboardingScreenContent() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [profile, setProfile] = useState<OnboardingProfile>(defaultProfile);
  const [nickname, setNickname] = useState('');
  const [ageBand, setAgeBand] = useState<ChildAgeBand>('3-5');
  const [parentIntent, setParentIntent] = useState<ParentIntent>('just-exploring');
  const [savedChildProfile, setSavedChildProfile] = useState<ChildProfile | null>(null);
  const [showSourceNotes, setShowSourceNotes] = useState(true);
  const [bedtimeFriendly, setBedtimeFriendly] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    loadOnboardingState().then((s) => s.profile && setProfile(s.profile));
    getChildProfile().then((saved) => {
      setSavedChildProfile(saved);
      if (saved.childNameOrNickname) setNickname(saved.childNameOrNickname);
      if (saved.ageBand) setAgeBand(saved.ageBand);
      if (saved.parentIntent) setParentIntent(saved.parentIntent);
    }).finally(() => setIsHydrated(true));
  }, []);

  const steps: Step[] = useMemo(() => [
    { id: 'philosophy', title: 'A gentle spiritual story world for children.', subtitle: 'Warm stories, not fear. Private by design. Gentle progress, no pressure.', render: () => <View style={styles.stack}><PromiseCard emoji='🪔' title='Warm stories, not fear.' copy='Calm, child-safe storytelling that centers kindness and wonder.' /><PromiseCard emoji='🔒' title='Private by design.' copy='Family-first local experience with no public child profile in v1.' /><PromiseCard emoji='🌱' title='Gentle progress, no pressure.' copy='No score race. Just a steady, loving pace.' /></View> },
    { id: 'promise', title: 'Parent Promise', subtitle: 'For parents: calm, trustworthy, culturally respectful guidance.', render: () => <View style={styles.stack}><TrustLine text='No public child profile.' /><TrustLine text='No microphone in v1.' /><TrustLine text='No ads or leaderboards.' /><TrustLine text='No fear-based religious framing.' /><TrustLine text='Parent can adjust comfort settings.' /></View> },
    { id: 'profile', title: 'Child Profile Setup', subtitle: 'A warm local profile card. No exact date of birth needed.', render: () => <View style={styles.stack}><Text style={styles.helper}>Nickname (local on this device)</Text><TextInput style={styles.input} value={nickname} onChangeText={setNickname} placeholder='Little name or nickname' /><Text style={styles.helper}>Choose broad age band</Text><ChoiceList items={ageBands} selected={ageBand} onPick={setAgeBand} /><Text style={styles.helper}>Parent intent (optional)</Text><ChoiceList items={parentIntents} selected={parentIntent} onPick={setParentIntent} /></View> },
    { id: 'luvlu', title: 'Meet Luvlu', subtitle: 'Luvlu is your optional helper guide, not the Little Dharma logo.', render: () => <View style={styles.stack}><View style={styles.luvluBubble}><Text style={styles.luvluText}>🦚 Luvlu can help choose stories and explain gentle prompts whenever your family wants support.</Text></View><Text style={styles.body}>You can keep guidance light-touch and parent-led.</Text></View> },
    { id: 'comfort', title: 'Content Comfort Settings', subtitle: 'Preference preview for parent comfort (local-first).', render: () => <View style={styles.stack}><SettingRow title='Gentle story mode' subtitle='Always prioritize calm narration tone.' enabled /><SettingRow title='Show parent source notes' subtitle='Preview: transparency notes for caregivers.' enabled={showSourceNotes} onToggle={setShowSourceNotes} /><SettingRow title='Bedtime-friendly stories' subtitle='Prefer softer evening pacing.' enabled={bedtimeFriendly} onToggle={setBedtimeFriendly} /><SettingRow title='Festival reminders' subtitle='Coming later.' comingSoon /><SettingRow title='Shloka learning' subtitle='Coming later.' comingSoon /></View> },
    { id: 'world', title: 'Your Story World is ready', subtitle: 'Choose a doorway and begin gently.', render: () => <View style={styles.grid}><Doorway title='Krishna Stories' /><Doorway title='Ganesha Stories' /><Doorway title='Bedtime Stories' /><Doorway title='Values Journeys' /></View> },
    { id: 'gate', title: 'For parents', subtitle: 'Grown-up area is protected with a simple parent gate.', render: () => <View style={styles.stack}><Text style={styles.body}>Parent controls are inside the grown-up area. Children should not easily enter those settings.</Text><Link href='/(parent)/profiles' style={styles.secondaryCta}>Open Grown-up Area</Link></View> }
  ], [nickname, ageBand, parentIntent, showSourceNotes, bedtimeFriendly]);

  const current = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;
  const finishFlow = async (skip = false) => {
    if (!isHydrated) return;
    await completeOnboarding({ ...profile, nickname });
    if (skip) await skipChildProfileSetup();
    else await saveChildProfile({ childNameOrNickname: nickname.trim() || savedChildProfile?.childNameOrNickname, ageBand, parentIntent });
    router.replace('/(child)/today');
  };

  return <SafeAreaView style={styles.screen}><ScrollView contentContainerStyle={styles.content}><View style={styles.brandMark}><Text style={styles.logo}>🪔🌸☀️</Text><Text style={styles.brand}>Little Dharma</Text><Text style={styles.tagline}>A gentle story world for little hearts.</Text></View><View style={styles.card}><Text style={styles.count}>Screen {stepIndex + 1} of {steps.length}</Text><Text style={styles.title}>{current.title}</Text><Text style={styles.subtitle}>{current.subtitle}</Text><View style={styles.panel}>{current.render()}</View><View style={styles.row}><TouchableOpacity onPress={() => setStepIndex((s) => Math.max(0, s - 1))} disabled={stepIndex === 0} style={[styles.navBtn, styles.back, stepIndex === 0 && styles.disabled]}><Text style={styles.backText}>Back</Text></TouchableOpacity><TouchableOpacity onPress={() => isLast ? finishFlow(false) : setStepIndex((s) => s + 1)} disabled={isLast && !isHydrated} style={[styles.navBtn, styles.next, isLast && !isHydrated && styles.disabled]}><Text style={styles.nextText}>{isLast ? 'Open Story World' : 'Next'}</Text></TouchableOpacity></View>{isLast && <TouchableOpacity onPress={() => finishFlow(true)}><Text style={styles.skip}>Skip profile details for now</Text></TouchableOpacity>}</View></ScrollView></SafeAreaView>;
}

const ChoiceList = <T extends string,>({ items, selected, onPick }: { items: T[]; selected: T; onPick: (item: T) => void; }) => <View style={styles.choiceWrap}>{items.map((item) => <TouchableOpacity key={item} onPress={() => onPick(item)} style={[styles.choice, selected === item && styles.choiceSelected]}><Text style={[styles.choiceText, selected === item && styles.choiceTextSel]}>{item}</Text></TouchableOpacity>)}</View>;
const PromiseCard = ({ emoji, title, copy }: { emoji: string; title: string; copy: string }) => <View style={styles.promise}><Text style={styles.emoji}>{emoji}</Text><View><Text style={styles.promiseTitle}>{title}</Text><Text style={styles.body}>{copy}</Text></View></View>;
const TrustLine = ({ text }: { text: string }) => <View style={styles.trust}><Text style={styles.body}>✓ {text}</Text></View>;
const Doorway = ({ title }: { title: string }) => <View style={styles.door}><Text style={styles.promiseTitle}>{title}</Text><Text style={styles.body}>Warm entry path</Text></View>;
const SettingRow = ({ title, subtitle, enabled, onToggle, comingSoon }: { title: string; subtitle: string; enabled?: boolean; onToggle?: (v: boolean) => void; comingSoon?: boolean }) => <View style={styles.setting}><View style={{ flex: 1 }}><Text style={styles.promiseTitle}>{title}</Text><Text style={styles.body}>{subtitle}</Text></View>{comingSoon ? <Text style={styles.coming}>Later</Text> : <Switch value={!!enabled} onValueChange={onToggle} />}</View>;

const styles = StyleSheet.create({ screen:{flex:1,backgroundColor:'#FFF3E2'},content:{padding:16,gap:12},brandMark:{alignItems:'center',paddingVertical:16},logo:{fontSize:34},brand:{fontSize:28,fontWeight:'900',color:visualTokens.color.warmBrown},tagline:{fontSize:14,color:visualTokens.color.mutedBrown},card:{backgroundColor:'#FFF9F1',borderRadius:28,padding:16,gap:10},count:{color:tokens.colors.peacock,fontWeight:'800'},title:{fontSize:31,lineHeight:35,fontWeight:'900',color:visualTokens.color.warmBrown},subtitle:{fontSize:15,lineHeight:21,color:visualTokens.color.mutedBrown},panel:{paddingVertical:8,gap:10},stack:{gap:10},promise:{backgroundColor:'#FFF0DA',borderRadius:20,padding:12,flexDirection:'row',gap:10},emoji:{fontSize:24},promiseTitle:{fontSize:16,fontWeight:'800',color:visualTokens.color.warmBrown},body:{fontSize:14,lineHeight:20,color:visualTokens.color.mutedBrown},input:{backgroundColor:'#fff',borderRadius:14,paddingHorizontal:14,paddingVertical:12},helper:{fontSize:13,fontWeight:'700',color:visualTokens.color.mutedBrown},choiceWrap:{gap:8},choice:{padding:12,borderRadius:14,backgroundColor:'#FCE9CD'},choiceSelected:{backgroundColor:'#FFD9A4'},choiceText:{fontWeight:'700',color:visualTokens.color.mutedBrown},choiceTextSel:{color:'#44270D'},luvluBubble:{backgroundColor:'#DDEEFF',borderRadius:18,padding:12},luvluText:{fontSize:14,fontWeight:'700',color:'#254B75',lineHeight:19},setting:{flexDirection:'row',alignItems:'center',backgroundColor:'#F4FAF3',borderRadius:16,padding:12,gap:10},coming:{fontWeight:'700',color:'#557A5D'},grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:8},door:{width:'48%',backgroundColor:'#F7ECD7',padding:12,borderRadius:16,gap:6},secondaryCta:{backgroundColor:'#E5EDF8',paddingVertical:12,textAlign:'center',borderRadius:12,color:'#1E4B7A',fontWeight:'700',overflow:'hidden'},row:{flexDirection:'row',gap:10},navBtn:{flex:1,paddingVertical:14,borderRadius:14,alignItems:'center'},back:{backgroundColor:'#EDEFF5'},next:{backgroundColor:tokens.colors.saffron},backText:{fontWeight:'800',color:visualTokens.color.mutedBrown},nextText:{fontWeight:'800',color:'#fff'},skip:{marginTop:8,textAlign:'center',color:'#2C5D8E',fontWeight:'700'},disabled:{opacity:.45},trust:{backgroundColor:'#EEF7FF',borderRadius:14,padding:12} });

export default function OnboardingScreen() { return <RouteErrorBoundary surfaceName='Onboarding' audience='parent'><OnboardingScreenContent /></RouteErrorBoundary>; }
