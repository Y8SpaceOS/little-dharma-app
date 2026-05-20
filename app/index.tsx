import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getOnboardingState, loadOnboardingState, resetOnboarding, subscribeOnboardingState } from '@/lib/onboardingState';

export default function Home() {
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(getOnboardingState().onboardingComplete);
  const router = useRouter();
  useEffect(() => {
    const off = subscribeOnboardingState(() => setDone(getOnboardingState().onboardingComplete));
    loadOnboardingState().finally(() => setReady(true));
    return off;
  }, []);
  if (!ready) return <LinearGradient colors={['#FFF0D8','#FFE0B8','#FEE9EF']} style={styles.screen}><SafeAreaView style={styles.center}><Text style={styles.mark}>🪔🌸☀️</Text><Text style={styles.brand}>Little Dharma</Text><Text style={styles.tag}>A gentle story world for little hearts.</Text></SafeAreaView></LinearGradient>;
  if (done) return <LinearGradient colors={['#FFF0D8','#FFE0B8','#FEE9EF']} style={styles.screen}><SafeAreaView style={styles.center}><View style={styles.card}><Text style={styles.mark}>🪔🌸☀️</Text><Text style={styles.brand}>Little Dharma</Text><Text style={styles.tag}>You are all set. Continue your child story world, or reset onboarding for QA.</Text><TouchableOpacity onPress={() => router.replace('/(child)/today')} style={styles.cta}><Text style={styles.ctaText}>Continue to Child World</Text></TouchableOpacity><TouchableOpacity onPress={async () => { await resetOnboarding(); router.replace('/onboarding'); }} style={styles.secondary}><Text style={styles.secondaryText}>Reset Onboarding (Local QA)</Text></TouchableOpacity></View></SafeAreaView></LinearGradient>; 
  return <LinearGradient colors={['#FFF0D8','#FFE0B8','#FEE9EF']} style={styles.screen}><SafeAreaView style={styles.center}><View style={styles.card}><Text style={styles.mark}>🪔🌸☀️</Text><Text style={styles.brand}>Little Dharma</Text><Text style={styles.tag}>A gentle story world for little hearts.</Text><TouchableOpacity onPress={() => router.push('/onboarding')} style={styles.cta}><Text style={styles.ctaText}>Begin Warm Onboarding</Text></TouchableOpacity></View></SafeAreaView></LinearGradient>;
}
const styles=StyleSheet.create({screen:{flex:1},center:{flex:1,justifyContent:'center',padding:20},card:{backgroundColor:'#FFF9F0',borderRadius:28,padding:24,alignItems:'center',gap:8},mark:{fontSize:42},brand:{fontSize:34,fontWeight:'900',color:'#5B3517'},tag:{fontSize:16,color:'#6A4D37',textAlign:'center'},cta:{marginTop:10,backgroundColor:'#E38C29',borderRadius:14,paddingVertical:14,paddingHorizontal:24},ctaText:{color:'#fff',fontWeight:'800'},secondary:{marginTop:6,backgroundColor:'#E5EDF8',borderRadius:14,paddingVertical:12,paddingHorizontal:16},secondaryText:{color:'#1E4B7A',fontWeight:'800'}});
