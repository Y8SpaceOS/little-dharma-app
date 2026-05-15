import { Link } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import { trackEvent } from '@/lib/analytics';

const actions = [
  { label: "Today's Journey", href: '/story/krishna-shares-butter' },
  { label: 'Explore Worlds', href: '/(child)/worlds' },
  { label: 'Bedtime Story', href: '/(child)/bedtime' },
  { label: 'Chant & Sing', href: '/(child)/chant' },
  { label: 'My Treasures', href: '/(child)/treasures' }
] as const;

export default function TodayScreen() {
  trackEvent('app_opened');
  return <SafeAreaView style={{ flex: 1, padding: 20 }}><Text style={{ fontSize: 24, fontWeight: '700' }}>Today</Text><View style={{ gap: 12, marginTop: 16 }}>{actions.map(a => <Link key={a.label} href={a.href as never}>{a.label}</Link>)}</View></SafeAreaView>;
}
