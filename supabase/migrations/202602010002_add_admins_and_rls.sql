alter table public.clubs enable row level security;

create table if not exists public.club_admins (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamp with time zone default now(),
  unique (club_id, user_id)
);

alter table public.club_admins enable row level security;

-- Public read access for clubs
drop policy if exists "clubs_public_read" on public.clubs;
create policy "clubs_public_read"
  on public.clubs
  for select
  using (true);

-- Superadmin full access to clubs
drop policy if exists "clubs_superadmin_all" on public.clubs;
create policy "clubs_superadmin_all"
  on public.clubs
  for all
  using ((auth.jwt() ->> 'email') = 'ubterzioglu@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'ubterzioglu@gmail.com');

-- Club admins can update their clubs
drop policy if exists "clubs_admin_update" on public.clubs;
create policy "clubs_admin_update"
  on public.clubs
  for update
  using (
    exists (
      select 1
      from public.club_admins ca
      where ca.club_id = id
        and ca.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.club_admins ca
      where ca.club_id = id
        and ca.user_id = auth.uid()
    )
  );

-- Club admins can read their club mapping
drop policy if exists "club_admins_self_read" on public.club_admins;
create policy "club_admins_self_read"
  on public.club_admins
  for select
  using (user_id = auth.uid());

-- Superadmin full access to club_admins
drop policy if exists "club_admins_superadmin_all" on public.club_admins;
create policy "club_admins_superadmin_all"
  on public.club_admins
  for all
  using ((auth.jwt() ->> 'email') = 'ubterzioglu@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'ubterzioglu@gmail.com');
