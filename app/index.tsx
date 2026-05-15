import { Link } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 28, fontWeight: '700' }}>Little Dharma</Text>
      <View style={{ gap: 8 }}>
        <Link href='/(child)/today'>Child Mode</Link>
        <Link href='/(parent)/dashboard'>Parent Mode</Link>
        <Link href='/auth/sign-in'>Sign In</Link>
      </View>
    </SafeAreaView>
  );
}
