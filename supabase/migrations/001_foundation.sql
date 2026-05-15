create extension if not exists pgcrypto;

create table if not exists parent_profiles (id uuid primary key default gen_random_uuid(), email text not null, created_at timestamptz default now());
create table if not exists child_profiles (id uuid primary key default gen_random_uuid(), parent_id uuid references parent_profiles(id), nickname text, age_band text, preferred_language text, favourite_character text, bedtime_preference text, created_at timestamptz default now());
create table if not exists worlds (id uuid primary key default gen_random_uuid(), slug text unique, title text, description text);
create table if not exists characters (id uuid primary key default gen_random_uuid(), world_id uuid references worlds(id), slug text unique, name text);
create table if not exists stories (id uuid primary key default gen_random_uuid(), world_id uuid references worlds(id), slug text unique, title text, value_id uuid, audio_url text);
create table if not exists story_age_variants (id uuid primary key default gen_random_uuid(), story_id uuid references stories(id), age_band text, content jsonb);
create table if not exists quizzes (id uuid primary key default gen_random_uuid(), story_id uuid references stories(id), title text);
create table if not exists quiz_questions (id uuid primary key default gen_random_uuid(), quiz_id uuid references quizzes(id), question text, options jsonb, answer text);
create table if not exists values (id uuid primary key default gen_random_uuid(), slug text unique, name text);
create table if not exists festivals (id uuid primary key default gen_random_uuid(), slug text unique, name text);
create table if not exists places (id uuid primary key default gen_random_uuid(), slug text unique, name text);
create table if not exists badges (id uuid primary key default gen_random_uuid(), slug text unique, name text);
create table if not exists child_badges (id uuid primary key default gen_random_uuid(), child_id uuid references child_profiles(id), badge_id uuid references badges(id), earned_at timestamptz default now());
create table if not exists journey_templates (id uuid primary key default gen_random_uuid(), slug text unique, title text, payload jsonb);
create table if not exists daily_journeys (id uuid primary key default gen_random_uuid(), child_id uuid references child_profiles(id), template_id uuid references journey_templates(id), journey_date date);
create table if not exists journey_completions (id uuid primary key default gen_random_uuid(), daily_journey_id uuid references daily_journeys(id), completed_at timestamptz);
create table if not exists parent_prompts (id uuid primary key default gen_random_uuid(), story_id uuid references stories(id), prompt text);
create table if not exists subscriptions (id uuid primary key default gen_random_uuid(), parent_id uuid references parent_profiles(id), tier text, provider text, status text);
create table if not exists content_review_queue (id uuid primary key default gen_random_uuid(), content_type text, content_id uuid, status text, reviewer text);
create table if not exists analytics_events (id uuid primary key default gen_random_uuid(), parent_id uuid references parent_profiles(id), child_id uuid references child_profiles(id), event_name text, properties jsonb, created_at timestamptz default now());

alter table parent_profiles enable row level security;
alter table child_profiles enable row level security;
alter table worlds enable row level security;
alter table characters enable row level security;
alter table stories enable row level security;
alter table story_age_variants enable row level security;
alter table quizzes enable row level security;
alter table quiz_questions enable row level security;
alter table values enable row level security;
alter table festivals enable row level security;
alter table places enable row level security;
alter table badges enable row level security;
alter table child_badges enable row level security;
alter table journey_templates enable row level security;
alter table daily_journeys enable row level security;
alter table journey_completions enable row level security;
alter table parent_prompts enable row level security;
alter table subscriptions enable row level security;
alter table content_review_queue enable row level security;
alter table analytics_events enable row level security;

-- Placeholder policies. Replace with auth.uid()-scoped rules when auth schema is finalized.
create policy if not exists "placeholder_parent_profiles_deny_all" on parent_profiles for all using (false) with check (false);
create policy if not exists "placeholder_child_profiles_deny_all" on child_profiles for all using (false) with check (false);
create policy if not exists "placeholder_worlds_read" on worlds for select using (true);
