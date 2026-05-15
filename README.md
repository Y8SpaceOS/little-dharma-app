# Little Dharma App

## Setup
1. `npm install`
2. Create `.env` with:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - `EXPO_PUBLIC_REVENUECAT_KEY`
   - `EXPO_PUBLIC_RAZORPAY_KEY_ID`
3. `npm run dev`

## Scripts
- `npm run dev`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run seed`

## Architecture
- Expo Router app routes in `app/`
- Domain logic in `src/services`
- Platform adapters in `src/lib`
- Supabase migrations in `supabase/migrations`

## Supabase setup
Run `supabase db push` and then `npm run seed` for content JSON artifact.

## Next tasks
- Wire onboarding persistence.
- Add real audio player.
- Implement real auth + RLS policies.
