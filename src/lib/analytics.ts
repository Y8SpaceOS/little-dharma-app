const events = ['app_opened','parent_signed_up','child_profile_created','journey_started','story_started','story_completed','quiz_completed','badge_earned','paywall_viewed','subscription_started'] as const;
export type AnalyticsEvent = typeof events[number];

export const trackEvent = (event: AnalyticsEvent, properties: Record<string, unknown> = {}) => {
  console.log('[analytics]', event, properties);
};
