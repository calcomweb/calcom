alter table public.clubs
  add column if not exists developments text[] default '{}';
