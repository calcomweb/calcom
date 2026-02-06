import { supabase } from "@/lib/supabase";

export type AlumniProfile = {
  id: string;
  graduationYear: number;
  fullName: string;
  linkedinUrl: string | null;
  instagramUrl: string | null;
  email: string | null;
  whatsappNumber: string;
  shortBio: string;
  supportTopics: string[];
  isAnonymous: boolean;
  createdAt: string;
};

type AlumniRow = {
  id: string;
  graduation_year: number;
  full_name: string;
  linkedin_url: string | null;
  instagram_url: string | null;
  email: string | null;
  whatsapp_number: string;
  short_bio: string | null;
  support_topics: string[] | null;
  is_anonymous: boolean | null;
  created_at: string;
};

const fallbackAlumni: AlumniProfile[] = [
  {
    id: "placeholder-alumni",
    graduationYear: 2018,
    fullName: "Deniz Yılmaz",
    linkedinUrl: "https://www.linkedin.com",
    instagramUrl: "https://www.instagram.com/deniz.yilmaz",
    email: "deniz@example.com",
    whatsappNumber: "+905551112233",
    shortBio: "Teknoloji sektöründe ürün yönetimi alanında çalışıyorum. Öğrencilere kariyer planlama desteği sunabilirim.",
    supportTopics: ["Kariyer", "Staj", "Ürün Yönetimi"],
    isAnonymous: false,
    createdAt: new Date().toISOString(),
  },
];

const mapAlumni = (row: AlumniRow): AlumniProfile => ({
  id: row.id,
  graduationYear: row.graduation_year,
  fullName: row.full_name,
  linkedinUrl: row.linkedin_url,
  instagramUrl: row.instagram_url,
  email: row.email,
  whatsappNumber: row.whatsapp_number,
  shortBio: row.short_bio ?? "",
  supportTopics: row.support_topics ?? [],
  isAnonymous: row.is_anonymous ?? false,
  createdAt: row.created_at,
});

export type AlumniProfileInput = {
  graduationYear: number;
  fullName: string;
  whatsappNumber: string;
  email?: string | null;
  linkedinUrl?: string | null;
  instagramUrl?: string | null;
  shortBio?: string | null;
  supportTopics?: string[];
  isAnonymous?: boolean;
};

export const fetchAlumni = async (): Promise<AlumniProfile[]> => {
  if (!supabase) {
    return fallbackAlumni;
  }

  const { data, error } = await supabase
    .from("public_alumni_profiles")
    .select(
      "id, graduation_year, full_name, linkedin_url, instagram_url, email, whatsapp_number, short_bio, support_topics, is_anonymous, created_at",
    )
    .order("graduation_year", { ascending: false });

  if (error || !data) {
    console.error("Mezun profilleri alınamadı", error);
    return fallbackAlumni;
  }

  if (data.length === 0) {
    return fallbackAlumni;
  }

  return data.map(mapAlumni);
};

export const fetchAlumniById = async (id: string): Promise<AlumniProfile | null> => {
  if (!supabase) {
    return fallbackAlumni.find((alumni) => alumni.id === id) ?? null;
  }

  const { data, error } = await supabase
    .from("public_alumni_profiles")
    .select(
      "id, graduation_year, full_name, linkedin_url, instagram_url, email, whatsapp_number, short_bio, support_topics, is_anonymous, created_at",
    )
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Mezun profili alınamadı", error);
    return fallbackAlumni.find((alumni) => alumni.id === id) ?? null;
  }

  return mapAlumni(data as AlumniRow);
};

export const createAlumniProfile = async (input: AlumniProfileInput): Promise<AlumniProfile | null> => {
  if (!supabase) {
    return fallbackAlumni[0] ?? null;
  }

  const payload = {
    graduation_year: input.graduationYear,
    full_name: input.fullName,
    whatsapp_number: input.whatsappNumber,
    email: input.email ?? null,
    linkedin_url: input.linkedinUrl ?? null,
    instagram_url: input.instagramUrl ?? null,
    short_bio: input.shortBio ?? null,
    support_topics: input.supportTopics ?? [],
    is_anonymous: input.isAnonymous ?? false,
  };

  const { data, error } = await supabase
    .from("alumni_profiles")
    .insert(payload)
    .select(
      "id, graduation_year, full_name, linkedin_url, instagram_url, email, whatsapp_number, short_bio, support_topics, is_anonymous, created_at",
    )
    .single();

  if (error || !data) {
    console.error("Mezun profili oluşturulamadı", error);
    throw error ?? new Error("Mezun profili oluşturulamadı");
  }

  return mapAlumni(data as AlumniRow);
};
