import { Link } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function SubscriptionScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Subscription (Placeholder)</Text>
        <Text style={styles.copy}>Paid plans and checkout are not active in this version.</Text>
        <Text style={styles.copy}>Little Dharma currently runs as a local-first parent-guided experience on this device.</Text>
        <Link href='/(parent)/dashboard' style={styles.link}>Back to Parent Dashboard</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 20, backgroundColor: '#F8FAFF' },
  card: { marginTop: 24, backgroundColor: '#fff', borderRadius: 16, padding: 16, gap: 8 },
  title: { fontSize: 22, fontWeight: '800', color: '#1E2C50' },
  copy: { fontSize: 14, color: '#42547F', lineHeight: 20 },
  link: { marginTop: 8, color: '#21406C', fontWeight: '700' }
});
