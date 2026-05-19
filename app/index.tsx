import { useEffect, useState } from 'react';
import { Redirect, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getOnboardingState, loadOnboardingState, subscribeOnboardingState } from '@/lib/onboardingState';

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
  if (done) return <Redirect href='/(child)/today' />;
  return <LinearGradient colors={['#FFF0D8','#FFE0B8','#FEE9EF']} style={styles.screen}><SafeAreaView style={styles.center}><View style={styles.card}><Text style={styles.mark}>🪔🌸☀️</Text><Text style={styles.brand}>Little Dharma</Text><Text style={styles.tag}>A gentle story world for little hearts.</Text><TouchableOpacity onPress={() => router.push('/onboarding')} style={styles.cta}><Text style={styles.ctaText}>Begin as Parent</Text></TouchableOpacity></View></SafeAreaView></LinearGradient>;
}
const styles=StyleSheet.create({screen:{flex:1},center:{flex:1,justifyContent:'center',padding:20},card:{backgroundColor:'#FFF9F0',borderRadius:28,padding:24,alignItems:'center',gap:8},mark:{fontSize:42},brand:{fontSize:34,fontWeight:'900',color:'#5B3517'},tag:{fontSize:16,color:'#6A4D37',textAlign:'center'},cta:{marginTop:10,backgroundColor:'#E38C29',borderRadius:14,paddingVertical:14,paddingHorizontal:24},ctaText:{color:'#fff',fontWeight:'800'}});
