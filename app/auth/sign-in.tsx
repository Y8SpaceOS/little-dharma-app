import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function SignIn() {
  return <SafeAreaView style={styles.screen}><View style={styles.card}><Text style={styles.title}>Parent Sign In (Placeholder)</Text><Text style={styles.copy}>Account authentication is not enabled in this version.</Text><Text style={styles.copy}>Parent and child progress flows are currently local-first and do not require sign-in.</Text><Link href='/(parent)/dashboard' style={styles.link}>Back to Parent Dashboard</Link></View></SafeAreaView>;
}

const styles = StyleSheet.create({ screen: { flex: 1, padding: 20, backgroundColor: '#F8FAFF' }, card: { marginTop: 24, backgroundColor: '#fff', borderRadius: 16, padding: 16, gap: 8 }, title: { fontSize: 22, fontWeight: '800', color: '#1E2C50' }, copy: { fontSize: 14, color: '#42547F', lineHeight: 20 }, link: { marginTop: 8, color: '#21406C', fontWeight: '700' } });
