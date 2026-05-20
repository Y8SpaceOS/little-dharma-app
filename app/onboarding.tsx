import React, { ReactElement, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { completeOnboarding } from '@/lib/onboardingState';

type Step = { id: string; title: string; subtitle: string; render: () => ReactElement };
const ageBands = ['3-5 years', '6-8 years', '9-12 years', 'Prefer not to say'];
const comfortPrefs = ['Extra calm bedtime tone', 'Festival + culture highlights', 'Values-first stories', 'Gentle mixed path'];

const Frame = ({ children }: { children: React.ReactNode }) => <View style={styles.card}><Text style={styles.corner}>☁️🍃</Text>{children}<Text style={styles.corner}>🍃☁️</Text></View>;
const Guide = ({ copy }: { copy: string }) => <View style={styles.luvlu}><Text style={styles.luvluBird}>🦚</Text><View style={{ flex: 1 }}><Text style={styles.luvluLabel}>Luvlu helper</Text><Text style={styles.luvluText}>{copy}</Text></View></View>;
const Pill = ({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) => <TouchableOpacity onPress={onPress} style={[styles.pill, active && styles.pillActive]}><Text style={[styles.pillText, active && styles.pillTextActive]}>{label}</Text></TouchableOpacity>;

function OnboardingScreenContent() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [ageBand, setAgeBand] = useState(ageBands[0]);
  const [comfortPref, setComfortPref] = useState(comfortPrefs[0]);

  const steps: Step[] = [
    { id: 'welcome', title: 'Welcome to Little Dharma', subtitle: 'A warm beginning for your family.', render: () => <Frame><Text style={styles.brandMark}>🪔 🌸 ☀️</Text><Text style={styles.brand}>Little Dharma</Text><Text style={styles.body}>Calm, warm, and playful spiritual story moments for children and grown-ups.</Text><Guide copy='I welcome your family and help you begin softly.' /></Frame> },
    { id: 'promise', title: 'Parent promise / safe spiritual story world', subtitle: 'Calm, trusted, and respectful by design.', render: () => <Frame><Text style={styles.note}>No account setup. No login wall. No pressure loops.</Text><Text style={styles.note}>Warm cultural storytelling with parent-trusted boundaries.</Text><Text style={styles.note}>No XP, no coins, no streaks, and no leaderboards.</Text></Frame> },
    { id: 'meet-luvlu', title: 'Meet Luvlu the Peacock', subtitle: 'Guide/helper, not logo.', render: () => <Frame><Guide copy='I guide, narrate gently, and support handoff moments.' /><Text style={styles.body}>Luvlu is a helper presence and not the Little Dharma brand mark.</Text></Frame> },
    { id: 'age-band', title: 'Choose child age band, not exact DOB', subtitle: 'Broad age ranges only.', render: () => <Frame><Text style={styles.helper}>Choose one age band:</Text>{ageBands.map((a) => <Pill key={a} label={a} active={ageBand === a} onPress={() => setAgeBand(a)} />)}<Text style={styles.note}>We do not ask for exact date of birth.</Text></Frame> },
    { id: 'comfort-preferences', title: 'Choose comfort/content preferences', subtitle: 'Family comfort first.', render: () => <Frame><Text style={styles.helper}>Pick your comfort direction:</Text>{comfortPrefs.map((p) => <Pill key={p} label={p} active={comfortPref === p} onPress={() => setComfortPref(p)} />)}</Frame> },
    { id: 'preview', title: 'Preview Story World / Dharma Journeys lightly', subtitle: 'A gentle preview, not full build-out.', render: () => <Frame><Text style={styles.body}>Preview doorways: Story World, Dharma Journeys, Bedtime Calm, and Values Garden.</Text><Guide copy='I can point to one first doorway, then step back.' /></Frame> },
    { id: 'privacy', title: 'Local-first / privacy-safe trust', subtitle: 'Simple parent language.', render: () => <Frame><Text style={styles.note}>Local-first: your onboarding choices stay on this device.</Text><Text style={styles.note}>Privacy-safe: no backend account, cloud sync, CMS, analytics, or telemetry added.</Text><Text style={styles.note}>No microphone, recording, or paid lock added.</Text></Frame> },
    { id: 'handoff', title: 'Parent/grown-up handoff', subtitle: 'Continue to parent profile route.', render: () => <Frame><Guide copy='I support this handoff while parent settings remain in grown-up space.' /><Link href='/(parent)/profiles' style={styles.parentLink}>Open Parent Profiles</Link><Text style={styles.body}>Typed parent route preserved: /(parent)/profiles.</Text></Frame> }
  ];
  const current = steps[stepIndex]; const last = stepIndex === steps.length - 1;
  const finish = async () => { await completeOnboarding({ childName: '', nickname: '', ageBand: '3-5', language: 'English', favoriteCharacter: 'Krishna', bedtimePreference: 'Cozy (10 min)' }); router.replace('/(parent)/profiles'); };

  return <LinearGradient colors={['#FFF7E7', '#FFE3B7', '#F8E8F3']} style={styles.screen}><SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={styles.content}><Text style={styles.progress}>Step {stepIndex + 1} of {steps.length} • 🪔🌸☀️</Text><Text style={styles.title}>{current.title}</Text><Text style={styles.subtitle}>{current.subtitle}</Text>{current.render()}<View style={styles.row}><TouchableOpacity disabled={stepIndex === 0} onPress={() => setStepIndex((s) => Math.max(0, s - 1))} style={[styles.nav, styles.back, stepIndex === 0 && styles.disabled]}><Text style={styles.backText}>Back</Text></TouchableOpacity><TouchableOpacity onPress={() => last ? finish() : setStepIndex((s) => s + 1)} style={[styles.nav, styles.next]}><Text style={styles.nextText}>{last ? 'Continue to Parent Handoff' : 'Next'}</Text></TouchableOpacity></View></ScrollView></SafeAreaView></LinearGradient>;
}

export default function OnboardingScreen() { return <RouteErrorBoundary surfaceName='Onboarding' audience='parent'><OnboardingScreenContent /></RouteErrorBoundary>; }

const styles = StyleSheet.create({ screen:{flex:1}, safe:{flex:1}, content:{padding:16,gap:12,paddingBottom:28}, progress:{fontSize:13,fontWeight:'800',color:'#7B5B3E'}, title:{fontSize:29,lineHeight:35,fontWeight:'900',color:'#5B3517'}, subtitle:{color:'#6E5037',fontSize:15}, card:{backgroundColor:'#FFF9EF',borderRadius:28,padding:16,gap:10,borderWidth:2,borderColor:'#F6D7A9',shadowColor:'#BB6A26',shadowOpacity:0.14,shadowRadius:14,shadowOffset:{width:0,height:8},elevation:3}, corner:{textAlign:'center',color:'#8C6441'}, brandMark:{fontSize:42,textAlign:'center'}, brand:{fontSize:32,fontWeight:'900',textAlign:'center',color:'#5B3517'}, body:{color:'#6E5037',fontSize:14,lineHeight:20}, helper:{color:'#6E5037',fontWeight:'800'}, note:{backgroundColor:'#EBF3FF',borderRadius:14,padding:10,color:'#1F4E7B',fontWeight:'700'}, pill:{backgroundColor:'#FCE9CD',borderRadius:999,paddingVertical:11,paddingHorizontal:12}, pillActive:{backgroundColor:'#FFD49A'}, pillText:{color:'#6E5037',fontWeight:'700'}, pillTextActive:{color:'#44270D'}, luvlu:{backgroundColor:'#E5F1FF',borderRadius:16,padding:10,flexDirection:'row',gap:8,alignItems:'center'}, luvluBird:{fontSize:22}, luvluLabel:{fontSize:11,fontWeight:'900',color:'#2C5A83',textTransform:'uppercase'}, luvluText:{color:'#1E4B7A',fontWeight:'700',fontSize:13,lineHeight:18}, parentLink:{backgroundColor:'#EAF2FF',color:'#1E4B7A',fontWeight:'800',paddingVertical:12,borderRadius:12,textAlign:'center',overflow:'hidden'}, row:{flexDirection:'row',gap:10}, nav:{flex:1,paddingVertical:14,borderRadius:16,alignItems:'center'}, back:{backgroundColor:'#ECEFF4'}, next:{backgroundColor:'#E38C29'}, backText:{color:'#6E5037',fontWeight:'800'}, nextText:{color:'#fff',fontWeight:'900'}, disabled:{opacity:0.5} });
