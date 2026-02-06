do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'student_profiles_graduation_year_range'
  ) then
    alter table public.student_profiles
      add constraint student_profiles_graduation_year_range
      check (graduation_year between 1990 and 2030);
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'student_profiles_graduation_year_not_2010'
  ) then
    alter table public.student_profiles
      add constraint student_profiles_graduation_year_not_2010
      check (graduation_year <> 2010);
  end if;
end $$;
