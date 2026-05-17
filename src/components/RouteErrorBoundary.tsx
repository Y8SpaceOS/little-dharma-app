import React, { Component, ReactNode } from 'react';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Audience = 'child' | 'parent' | 'neutral';

type Props = {
  children: ReactNode;
  surfaceName?: string;
  audience?: Audience;
  fallbackTitle?: string;
  fallbackMessage?: string;
  primaryActionLabel?: string;
  primaryActionHref?: '/(child)/today' | '/(parent)/dashboard' | '/onboarding';
  onRetry?: () => void;
};

type State = { hasError: boolean };

const defaultCopy: Record<Audience, { title: string; message: string; safeHref: '/(child)/today' | '/(parent)/dashboard' }> = {
  child: { title: 'Let’s pause for a moment.', message: 'You can return to your journey safely whenever you are ready.', safeHref: '/(child)/today' },
  parent: { title: 'This section needs a quick reset.', message: 'Your current local journey can still be accessed from the main screens.', safeHref: '/(parent)/dashboard' },
  neutral: { title: 'This page needs a fresh start.', message: 'Please try again or return safely.', safeHref: '/(child)/today' }
};

export class RouteErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }
  componentDidCatch(): void {}
  private reset = () => { this.setState({ hasError: false }); this.props.onRetry?.(); };

  render() {
    if (!this.state.hasError) return this.props.children;
    const audience = this.props.audience ?? 'neutral';
    const defaults = defaultCopy[audience];
    const title = this.props.fallbackTitle ?? defaults.title;
    const message = this.props.fallbackMessage ?? defaults.message;
    const safeHref = this.props.primaryActionHref ?? defaults.safeHref;
    const safeLabel = this.props.primaryActionLabel ?? (audience === 'parent' ? 'Go to Parent Dashboard' : 'Go to Child Home');

    return (
      <View style={styles.container} accessibilityRole='alert' accessibilityLabel={`${this.props.surfaceName ?? 'This section'} needs a reset`}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Pressable onPress={this.reset} style={styles.retryButton} accessibilityRole='button' accessibilityLabel='Try again'>
            <Text style={styles.retryText}>Try again</Text>
          </Pressable>
          <Link href={safeHref} style={styles.safeLink} accessibilityRole='link' accessibilityLabel={safeLabel}>{safeLabel}</Link>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F8F2EA' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, borderWidth: 1, borderColor: '#E7DCCF', padding: 18, gap: 10 },
  title: { fontSize: 24, fontWeight: '800', color: '#3E2E1F' },
  message: { fontSize: 15, lineHeight: 22, color: '#5C4A3B' },
  retryButton: { backgroundColor: '#E78739', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 10, alignSelf: 'flex-start' },
  retryText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  safeLink: { alignSelf: 'flex-start', color: '#2A4E8A', fontWeight: '700', fontSize: 15 }
});

export default RouteErrorBoundary;
