alter table public.student_profiles
  add constraint if not exists student_profiles_graduation_year_range
  check (graduation_year between 1990 and 2030);

alter table public.student_profiles
  add constraint if not exists student_profiles_graduation_year_not_2010
  check (graduation_year <> 2010);
