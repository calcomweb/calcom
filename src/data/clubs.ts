import { supabase } from "@/lib/supabase";

export type Club = {
  id: string;
  slug: string;
  name: string;
  shortInfo: string;
  longInfo: string;
  supportNeeded: boolean;
  imageUrl: string | null;
  websiteUrl: string | null;
  contactUrl: string | null;
  createdAt: string;
};

type ClubRow = {
  id: string;
  slug: string;
  name: string;
  short_info: string | null;
  long_info: string | null;
  support_needed: boolean | null;
  image_url: string | null;
  website_url: string | null;
  contact_url: string | null;
  created_at: string;
};

const fallbackClubs: Club[] = [
  {
    id: "placeholder",
    slug: "ornek-kulup",
    name: "Örnek Kulüp",
    shortInfo: "Kısa kulüp açıklaması burada yer alır.",
    longInfo:
      "Bu bir örnek kulüp profilidir. Gerçek kulüp listesi ve bilgiler veritabanından gelecektir.",
    supportNeeded: false,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    websiteUrl: "https://example.com",
    contactUrl: "mailto:info@example.com",
    createdAt: new Date().toISOString(),
  },
];

const mapClub = (club: ClubRow): Club => ({
  id: club.id,
  slug: club.slug,
  name: club.name,
  shortInfo: club.short_info ?? "",
  longInfo: club.long_info ?? "",
  supportNeeded: club.support_needed ?? false,
  imageUrl: club.image_url,
  websiteUrl: club.website_url,
  contactUrl: club.contact_url,
  createdAt: club.created_at,
});

export const fetchClubs = async (): Promise<Club[]> => {
  if (!supabase) {
    return fallbackClubs;
  }

  const { data, error } = await supabase
    .from("clubs")
    .select("id, slug, name, short_info, long_info, support_needed, image_url, website_url, contact_url, created_at")
    .order("name", { ascending: true });

  if (error || !data) {
    console.error("Kulüpler alınamadı", error);
    return fallbackClubs;
  }

  return data.map(mapClub);
};

export const fetchClubBySlug = async (slug: string): Promise<Club | null> => {
  if (!supabase) {
    return fallbackClubs.find((club) => club.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("clubs")
    .select("id, slug, name, short_info, long_info, support_needed, image_url, website_url, contact_url, created_at")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("Kulüp detayı alınamadı", error);
    return null;
  }

  return mapClub(data as ClubRow);
};
