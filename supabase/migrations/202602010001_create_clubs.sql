create table if not exists public.clubs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  short_info text,
  long_info text,
  support_needed boolean default false,
  image_url text,
  website_url text,
  contact_url text,
  created_at timestamp with time zone default now()
);

create index if not exists clubs_name_idx on public.clubs (name);
