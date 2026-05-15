import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
import { getWorldBySlug } from '@/lib/content';

export default function WorldScreen() {
  const { slug } = useLocalSearchParams<{slug: string}>();
  const world = getWorldBySlug(slug ?? '');
  return <SafeAreaView style={{flex:1,padding:20}}><Text>{world?.title ?? 'World not found'}</Text><Text>{world?.description}</Text></SafeAreaView>;
}
