# Codex Task Issue 1: Create Little Dharma App Foundation

## Objective

Create the complete project foundation and install a Codex Autopilot system inside this repository.

## Product

Project name: Little Dharma.

Little Dharma is a premium, visually beautiful, Apple-like, child-safe Hindu Dharma learning universe for children aged 0–12. It teaches Hindu stories, values, festivals, characters, shlokas, sacred places, and family rituals through immersive story worlds, audio narration, daily journeys, mini-quizzes, culturally themed rewards, and parent-child prompts.

The benchmark quality should feel closer to Khan Academy Kids, Lingokids, Duolingo ABC, Kutuki, Amar Chitra Katha, and a premium Apple-designed children’s experience. It should not feel like a web catalogue, blog, or generic story app.

Core principle: children need magic; parents need trust.

## Important product constraints

- Do not continue the Lovable codebase.
- Do not port the website UI as-is.
- Use the Lovable project only as a prototype, content seed, and product reference.
- Do not build a catalogue-first UI.
- Do not build public child leaderboards.
- Do not build open child chat.
- Do not use ads.
- Do not collect unnecessary child data.
- Do not create generic placeholder screens without product thinking.
- Build mobile-native experience first.

## Tech stack

- React Native with Expo
- TypeScript
- Expo Router
- Supabase for auth, Postgres, storage, and Row Level Security
- RevenueCat placeholders for in-app subscriptions
- Razorpay placeholder for India web checkout later
- PostHog or Firebase Analytics placeholder
- Lottie/Rive-ready animation structure
- Admin CMS later
- GitHub-ready engineering workflow

## Required repo structure

```text
app/
  (child)/
    today.tsx
    worlds.tsx
    bedtime.tsx
    chant.tsx
    treasures.tsx
  (parent)/
    dashboard.tsx
    profiles.tsx
    controls.tsx
    subscription.tsx
    privacy.tsx
  auth/
    sign-in.tsx
    sign-up.tsx
  world/
    [slug].tsx
  story/
    [slug].tsx
src/
  components/
    child/
    parent/
    story/
    rewards/
    common/
  lib/
    supabase.ts
    analytics.ts
    entitlements.ts
    content.ts
    safety.ts
  design/
    tokens.ts
    theme.ts
  types/
    content.ts
    user.ts
    subscription.ts
  data/
    seed/
  services/
    journeys.ts
    progress.ts
    subscriptions.ts
    contentImport.ts
supabase/
  migrations/
  seed/
docs/
  PRODUCT_BRIEF.md
  TECHNICAL_ARCHITECTURE.md
  CONTENT_SYSTEM.md
  SAFETY_AND_PRIVACY.md
  ROADMAP.md
  CODEX_AUTOPILOT.md
  DECISION_LOG.md
  TASK_LOG.md
assets/
  images/
  audio/
  lottie/
README.md
```

## First deliverables

1. Create a fresh Expo + TypeScript app.
2. Set up Expo Router.
3. Create a premium design system with warm Indian premium palette, saffron, peacock, lotus, sandalwood, gold, moonlight bedtime colours, large child-friendly touch targets, rounded cards, soft gradients, bedtime mode tokens, and parent/child mode separation.
4. Create child-facing navigation: Today’s Journey, Explore Worlds, Bedtime Story, Chant & Sing, My Treasures.
5. Create parent-facing navigation: Parent Dashboard, Child Profiles, Content Controls, Subscription, Privacy & Safety.
6. Create Supabase client setup with environment variable placeholders.
7. Create database migrations for parent_profiles, child_profiles, worlds, characters, stories, story_age_variants, quizzes, quiz_questions, values, festivals, places, badges, child_badges, journey_templates, daily_journeys, journey_completions, parent_prompts, subscriptions, content_review_queue, analytics_events.
8. Create child onboarding: nickname, age band, preferred language, favourite character, bedtime preference.
9. Build the child home screen with five primary actions.
10. Build one world screen: Vrindavan.
11. Build one full Daily Journey: Krishna story, intro screen, story player, audio_url placeholder, 3-question quiz, peacock feather reward, parent discussion prompt, completion state.
12. Build one basic Parent Dashboard: child profile, stories completed, values learned, suggested next journey, screen time placeholder.
13. Build entitlement architecture: free tier, premium tier, RevenueCat placeholder, paywall screen.
14. Add safety foundations: parent-owned account, child profiles under parent, no public child leaderboard, no open child chat, no targeted ads, privacy policy placeholder, parental consent placeholder, delete child profile placeholder.
15. Add analytics event wrappers: app_opened, parent_signed_up, child_profile_created, journey_started, story_started, story_completed, quiz_completed, badge_earned, paywall_viewed, subscription_started.
16. Create seed content for the first vertical slice: World Vrindavan, Character Krishna, Value Kindness, Story Krishna Shares Butter With Friends, 3-question quiz, Badge Peacock Feather, Parent prompt.
17. Create all docs: PRODUCT_BRIEF.md, TECHNICAL_ARCHITECTURE.md, CONTENT_SYSTEM.md, SAFETY_AND_PRIVACY.md, ROADMAP.md, CODEX_AUTOPILOT.md, DECISION_LOG.md, TASK_LOG.md.
18. Create package scripts: npm run dev, npm run typecheck, npm run lint, npm run test, npm run seed.
19. Create README with setup instructions, environment variables, local run instructions, Supabase setup, app architecture, and next tasks.
20. After implementation: run typecheck, run lint if configured, fix errors, summarize what was built, list what still needs human setup, update TASK_LOG.md, and propose the next sprint.

## Autopilot system requirement

Create docs/CODEX_AUTOPILOT.md. Future Codex behaviour should be:

When the human says “Run next autopilot sprint,” Codex must:

1. Read PRODUCT_BRIEF.md, ROADMAP.md, TASK_LOG.md, TECHNICAL_ARCHITECTURE.md, and CODEX_AUTOPILOT.md.
2. Identify the next highest-priority task.
3. Implement it.
4. Run available checks.
5. Fix errors.
6. Update TASK_LOG.md.
7. Update DECISION_LOG.md if any architectural decision was made.
8. Summarize the PR.
9. Recommend the next sprint.

Do not ask unnecessary questions. Make sensible product and engineering decisions. If credentials or API keys are required, create placeholders and clearly document what the human needs to add.
