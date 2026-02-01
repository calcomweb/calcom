import { supabase } from "@/lib/supabase";

export type AlumniProfile = {
  id: string;
  graduationYear: number;
  fullName: string;
  linkedinUrl: string | null;
  email: string;
  phone: string | null;
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
  email: string;
  phone: string | null;
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
    email: "deniz@example.com",
    phone: "+905551112233",
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
  email: row.email,
  phone: row.phone,
  shortBio: row.short_bio ?? "",
  supportTopics: row.support_topics ?? [],
  isAnonymous: row.is_anonymous ?? false,
  createdAt: row.created_at,
});

export const fetchAlumni = async (): Promise<AlumniProfile[]> => {
  if (!supabase) {
    return fallbackAlumni;
  }

  const { data, error } = await supabase
    .from("alumni_profiles")
    .select("id, graduation_year, full_name, linkedin_url, email, phone, short_bio, support_topics, is_anonymous, created_at")
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
    .from("alumni_profiles")
    .select("id, graduation_year, full_name, linkedin_url, email, phone, short_bio, support_topics, is_anonymous, created_at")
    .eq("id", id)
    .single();

  if (error || !data) {
    console.error("Mezun profili alınamadı", error);
    return fallbackAlumni.find((alumni) => alumni.id === id) ?? null;
  }

  return mapAlumni(data as AlumniRow);
};
