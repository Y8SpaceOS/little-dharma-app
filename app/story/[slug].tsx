import { SafeAreaView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getTodaysJourney } from '@/services/journeys';

export default function StoryScreen() {
  const { slug } = useLocalSearchParams<{slug: string}>();
  const journey = getTodaysJourney();
  if (slug !== journey.story.slug) return <SafeAreaView><Text>Story not found.</Text></SafeAreaView>;
  return <SafeAreaView style={{flex:1,padding:20,gap:10}}>
    <Text style={{fontSize:24,fontWeight:'700'}}>{journey.story.title}</Text>
    <Text>Intro: Krishna learns kindness through sharing.</Text>
    <Text>Audio URL placeholder: {journey.story.audioUrl}</Text>
    <Text>Quiz:</Text>
    <View>{journey.quiz.map(q => <Text key={q.id}>• {q.question}</Text>)}</View>
    <Text>Reward: {journey.badge.name}</Text>
    <Text>Parent prompt: {journey.parentPrompt}</Text>
    <Text>Completion: Ready for celebration state.</Text>
  </SafeAreaView>;
}
