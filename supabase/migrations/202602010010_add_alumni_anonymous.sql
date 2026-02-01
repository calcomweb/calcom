alter table public.alumni_profiles
  add column if not exists is_anonymous boolean default false;
