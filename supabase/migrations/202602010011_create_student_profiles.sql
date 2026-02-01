create table if not exists public.student_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  graduation_year integer not null,
  graduation_term text not null,
  is_anonymous boolean default true,
  created_at timestamp with time zone default now()
);

create index if not exists student_profiles_graduation_year_idx on public.student_profiles (graduation_year);
create index if not exists student_profiles_full_name_idx on public.student_profiles (full_name);
