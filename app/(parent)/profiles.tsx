import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ParentProfilesGateScreen() {
  const [answer, setAnswer] = useState('');
  const router = useRouter();
  const pass = answer.trim().toLowerCase() === 'diya';
  return <SafeAreaView style={styles.screen}><View style={styles.card}><Text style={styles.kicker}>For parents</Text><Text style={styles.title}>Grown-up area</Text><Text style={styles.sub}>This is a gentle local gate, not secure authentication.</Text><TextInput value={answer} onChangeText={setAnswer} placeholder='Parent word' style={styles.input} /><TouchableOpacity onPress={() => pass && router.replace('/(parent)/dashboard')} style={[styles.btn, !pass && styles.disabled]} disabled={!pass}><Text style={styles.btnText}>Open Parent Space</Text></TouchableOpacity><Text style={styles.help}>Local-only placeholder check for this build. It does not create an account or provide security.</Text><Link href='/(child)/today' style={styles.link}>Back to child world</Link></View></SafeAreaView>;
}
const styles = StyleSheet.create({screen:{flex:1,backgroundColor:'#F3F8FF',justifyContent:'center',padding:20},card:{backgroundColor:'#FFFCF6',borderRadius:24,padding:18,gap:10},kicker:{fontSize:13,fontWeight:'800',color:'#2E628F'},title:{fontSize:32,fontWeight:'900',color:'#5D3A1C'},sub:{fontSize:15,lineHeight:21,color:'#5A4A3D'},input:{backgroundColor:'#fff',borderRadius:12,padding:12},btn:{backgroundColor:'#4D7AA8',padding:14,borderRadius:12,alignItems:'center'},btnText:{color:'#fff',fontWeight:'800'},disabled:{opacity:.45},help:{fontSize:12,color:'#6F5E52'},link:{textAlign:'center',fontWeight:'700',color:'#2E628F'}});
