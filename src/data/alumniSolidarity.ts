import { supabase } from "@/lib/supabase";

export type SolidarityTopic = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

export type SolidarityComment = {
  id: string;
  topicId: string;
  body: string;
  createdAt: string;
};

type TopicRow = {
  id: string;
  title: string;
  description: string;
  created_at: string;
};

type CommentRow = {
  id: string;
  topic_id: string;
  body: string;
  created_at: string;
};

const fallbackTopics: SolidarityTopic[] = [
  {
    id: "placeholder-topic",
    title: "Dayanışma başlığı",
    description: "Buraya kısa bir açıklama yazılacak.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "placeholder-topic-2",
    title: "Mentorluk desteği arayanlar",
    description: "Kariyer planlaması ve sektör geçişi hakkında deneyim paylaşımı için başlık açtım.",
    createdAt: new Date().toISOString(),
  },
];

const fallbackComments: SolidarityComment[] = [
  {
    id: "placeholder-comment",
    topicId: "placeholder-topic",
    body: "İlk yorum örneği.",
    createdAt: new Date().toISOString(),
  },
];

const mapTopic = (row: TopicRow): SolidarityTopic => ({
  id: row.id,
  title: row.title,
  description: row.description,
  createdAt: row.created_at,
});

const mapComment = (row: CommentRow): SolidarityComment => ({
  id: row.id,
  topicId: row.topic_id,
  body: row.body,
  createdAt: row.created_at,
});

export const fetchSolidarityTopics = async (): Promise<SolidarityTopic[]> => {
  if (!supabase) {
    return fallbackTopics;
  }

  const { data, error } = await supabase
    .from("public_alumni_solidarity_topics")
    .select("id, title, description, created_at")
    .order("created_at", { ascending: false });

  if (error || !data) {
    console.error("Dayanışma başlıkları alınamadı", error);
    return fallbackTopics;
  }

  if (data.length === 0) {
    return fallbackTopics;
  }

  return data.map(mapTopic);
};

export const fetchSolidarityComments = async (): Promise<SolidarityComment[]> => {
  if (!supabase) {
    return fallbackComments;
  }

  const { data, error } = await supabase
    .from("public_alumni_solidarity_comments")
    .select("id, topic_id, body, created_at")
    .order("created_at", { ascending: true });

  if (error || !data) {
    console.error("Dayanışma yorumları alınamadı", error);
    return fallbackComments;
  }

  if (data.length === 0) {
    return [];
  }

  return data.map(mapComment);
};

export const createSolidarityTopic = async (title: string, description: string) => {
  if (!supabase) {
    return;
  }

  const { error } = await supabase
    .from("alumni_solidarity_topics")
    .insert({ title, description });

  if (error) {
    throw error;
  }
};

export const createSolidarityComment = async (topicId: string, body: string) => {
  if (!supabase) {
    return;
  }

  const { error } = await supabase
    .from("alumni_solidarity_comments")
    .insert({ topic_id: topicId, body });

  if (error) {
    throw error;
  }
};
