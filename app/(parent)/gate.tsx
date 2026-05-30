import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { tokens } from '@/design/tokens';

export default function ParentGateScreen() {
  const [answer, setAnswer] = useState('');
  const router = useRouter();
  const pass = answer.trim().toLowerCase() === 'diya';

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.kicker}>For parents</Text>
        <Text style={styles.title}>Grown-up area</Text>
        <Text style={styles.sub}>This is a gentle local gate, not secure authentication.</Text>

        <TextInput
          value={answer}
          onChangeText={setAnswer}
          placeholder='Parent word'
          style={styles.input}
          accessibilityLabel='Parent word entry'
          accessibilityHint='Enter the local parent word to open parent space'
        />

        <TouchableOpacity
          onPress={() => pass && router.replace('/(parent)/dashboard')}
          style={[styles.btn, !pass && styles.disabled]}
          disabled={!pass}
          accessibilityRole='button'
          accessibilityLabel='Open Parent Space'
          accessibilityState={{ disabled: !pass }}
        >
          <Text style={styles.btnText}>Open Parent Space</Text>
        </TouchableOpacity>

        <Text style={styles.help}>Local-only placeholder check for this build. It does not create an account or provide security.</Text>

        <Link href='/(child)/today' style={styles.link} accessibilityRole='link' accessibilityLabel='Back to Child Home'>Back to child world</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F3F8FF', justifyContent: 'center', padding: tokens.spacing.lg },
  card: { backgroundColor: '#FFFCF6', borderRadius: tokens.radius.card, padding: tokens.spacing.lg, gap: tokens.spacing.sm },
  kicker: { fontSize: 13, fontWeight: '800', color: tokens.colors.peacock },
  title: { fontSize: 32, fontWeight: '900', color: '#5D3A1C' },
  sub: { fontSize: 15, lineHeight: 21, color: '#5A4A3D' },
  input: { backgroundColor: '#fff', borderRadius: tokens.radius.card, padding: tokens.spacing.md, minHeight: tokens.touchTarget },
  btn: { backgroundColor: tokens.colors.peacock, padding: tokens.spacing.md, borderRadius: tokens.radius.card, alignItems: 'center', minHeight: tokens.touchTarget, justifyContent: 'center' },
  btnText: { color: '#fff', fontWeight: '800' },
  disabled: { opacity: 0.45 },
  help: { fontSize: 12, color: '#6F5E52' },
  link: { textAlign: 'center', fontWeight: '700', color: tokens.colors.peacock }
});
