alter table public.clubs
  add column if not exists financial_support_info text,
  add column if not exists financial_support_iban text,
  add column if not exists financial_support_description text,
  add column if not exists moral_support_text text;
