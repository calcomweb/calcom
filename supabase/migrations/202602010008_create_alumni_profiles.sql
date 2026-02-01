create table if not exists public.alumni_profiles (
  id uuid primary key default gen_random_uuid(),
  graduation_year integer not null,
  full_name text not null,
  linkedin_url text,
  email text not null,
  short_bio text,
  support_topics text[] default '{}',
  created_at timestamp with time zone default now()
);

create index if not exists alumni_profiles_graduation_year_idx on public.alumni_profiles (graduation_year);
create index if not exists alumni_profiles_full_name_idx on public.alumni_profiles (full_name);
