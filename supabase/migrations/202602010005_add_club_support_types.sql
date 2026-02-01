alter table public.clubs
  add column if not exists support_types text[] default '{}';
