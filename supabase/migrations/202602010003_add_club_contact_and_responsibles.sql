alter table public.clubs
  add column if not exists contact_email text,
  add column if not exists responsible_people text[] default '{}';
