export const GRADUATION_START_YEAR = 1990;
export const GRADUATION_END_YEAR = 2030;
export const GRADUATION_SKIP_YEAR = 2010;
export const GRADUATION_START_TERM = 133;

export const isValidGraduationYear = (year: number) =>
  year >= GRADUATION_START_YEAR &&
  year <= GRADUATION_END_YEAR &&
  year !== GRADUATION_SKIP_YEAR;

export const getTermByYear = (year: number): number | null => {
  if (!isValidGraduationYear(year)) {
    return null;
  }

  const base = GRADUATION_START_TERM + (year - GRADUATION_START_YEAR);
  return year > GRADUATION_SKIP_YEAR ? base - 1 : base;
};

export const getYearByTerm = (term: number): number | null => {
  if (term < GRADUATION_START_TERM) {
    return null;
  }

  const term2009 = GRADUATION_START_TERM + (2009 - GRADUATION_START_YEAR);
  if (term <= term2009) {
    return GRADUATION_START_YEAR + (term - GRADUATION_START_TERM);
  }

  const year = GRADUATION_START_YEAR + (term - GRADUATION_START_TERM) + 1;
  return year <= GRADUATION_END_YEAR ? year : null;
};

export const getGraduationYears = (): number[] => {
  const years: number[] = [];
  for (let year = GRADUATION_START_YEAR; year <= GRADUATION_END_YEAR; year += 1) {
    if (year === GRADUATION_SKIP_YEAR) continue;
    years.push(year);
  }
  return years;
};

export const getGraduationTerms = (): number[] => {
  const terms: number[] = [];
  for (const year of getGraduationYears()) {
    const term = getTermByYear(year);
    if (term) terms.push(term);
  }
  return terms;
};
