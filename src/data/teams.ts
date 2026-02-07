import { supabase } from "@/lib/supabase";

export type StudentTeam = {
  id: string;
  slug: string;
  name: string;
  shortInfo: string;
  longInfo: string;
  supportNeeded: boolean;
  supportTypes: string[];
  financialSupportInfo: string;
  financialSupportBankName: string;
  financialSupportIban: string;
  financialSupportDescription: string;
  moralSupportText: string;
  imageUrl: string | null;
  websiteUrl: string | null;
  contactEmail: string | null;
  responsiblePeople: string[];
  developments: string[];
  createdAt: string;
};

type StudentTeamRow = {
  id: string;
  slug: string;
  name: string;
  short_info: string | null;
  long_info: string | null;
  support_needed: boolean | null;
  support_types: string[] | null;
  financial_support_info: string | null;
  financial_support_bank_name: string | null;
  financial_support_iban: string | null;
  financial_support_description: string | null;
  moral_support_text: string | null;
  image_url: string | null;
  website_url: string | null;
  contact_email: string | null;
  responsible_people: string[] | null;
  developments: string[] | null;
  created_at: string;
};

const fallbackTeams: StudentTeam[] = [
  {
    id: "placeholder-team",
    slug: "ornek-takim",
    name: "Örnek Takım",
    shortInfo: "Kısa takım açıklaması burada yer alır.",
    longInfo:
      "Bu bir örnek takım profilidir. Gerçek takım listesi ve bilgiler veritabanından gelecektir.",
    supportNeeded: false,
    supportTypes: ["Maddi", "Manevi"],
    financialSupportInfo: "Hesap Bilgileri",
    financialSupportBankName: "Banka İsmi",
    financialSupportIban: "TR00 0000 0000 0000 0000 0000 00",
    financialSupportDescription: "Açıklama",
    moralSupportText: "Gönüllü katkılar ve takım desteği için bize yazabilirsiniz.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    websiteUrl: "https://example.com",
    contactEmail: "info@example.com",
    responsiblePeople: ["Ayşe Yılmaz", "Mehmet Kaya"],
    developments: ["01.02.26 Takım detayları yakında burada görünecek."],
    createdAt: new Date().toISOString(),
  },
];

const mapTeam = (team: StudentTeamRow): StudentTeam => ({
  id: team.id,
  slug: team.slug,
  name: team.name,
  shortInfo: team.short_info ?? "",
  longInfo: team.long_info ?? "",
  supportNeeded: team.support_needed ?? false,
  supportTypes: team.support_types ?? [],
  financialSupportInfo: team.financial_support_info ?? "",
  financialSupportBankName: team.financial_support_bank_name ?? "",
  financialSupportIban: team.financial_support_iban ?? "",
  financialSupportDescription: team.financial_support_description ?? "",
  moralSupportText: team.moral_support_text ?? "",
  imageUrl: team.image_url,
  websiteUrl: team.website_url,
  contactEmail: team.contact_email,
  responsiblePeople: team.responsible_people ?? [],
  developments: team.developments ?? [],
  createdAt: team.created_at,
});

export const fetchTeams = async (): Promise<StudentTeam[]> => {
  if (!supabase) {
    return fallbackTeams;
  }

  const { data, error } = await supabase
    .from("public_student_teams")
    .select(
      "id, slug, name, short_info, long_info, support_needed, support_types, financial_support_info, financial_support_bank_name, financial_support_iban, financial_support_description, moral_support_text, image_url, website_url, contact_email, responsible_people, developments, created_at",
    )
    .order("name", { ascending: true });

  if (error || !data) {
    console.error("Takımlar alınamadı", error);
    return fallbackTeams;
  }

  if (data.length === 0) {
    return fallbackTeams;
  }

  return data.map(mapTeam);
};

export const fetchTeamBySlug = async (slug: string): Promise<StudentTeam | null> => {
  if (!supabase) {
    return fallbackTeams.find((team) => team.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("public_student_teams")
    .select(
      "id, slug, name, short_info, long_info, support_needed, support_types, financial_support_info, financial_support_bank_name, financial_support_iban, financial_support_description, moral_support_text, image_url, website_url, contact_email, responsible_people, developments, created_at",
    )
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("Takım detayı alınamadı", error);
    return fallbackTeams.find((team) => team.slug === slug) ?? null;
  }

  return mapTeam(data as StudentTeamRow);
};
