import { EntitlementTier } from '@/types/subscription';

export const getTier = (isPremium: boolean): EntitlementTier => (isPremium ? 'premium' : 'free');
export const revenueCatPlaceholder = { sdkKey: process.env.EXPO_PUBLIC_REVENUECAT_KEY ?? 'REPLACEME' };
export const razorpayPlaceholder = { keyId: process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID ?? 'REPLACEME' };
