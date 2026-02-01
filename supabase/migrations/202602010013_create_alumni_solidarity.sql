create table if not exists public.alumni_solidarity_topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  created_at timestamp with time zone default now()
);

create table if not exists public.alumni_solidarity_comments (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.alumni_solidarity_topics(id) on delete cascade,
  body text not null,
  created_at timestamp with time zone default now()
);

create index if not exists alumni_solidarity_topics_created_at_idx on public.alumni_solidarity_topics (created_at desc);
create index if not exists alumni_solidarity_comments_topic_id_idx on public.alumni_solidarity_comments (topic_id);
