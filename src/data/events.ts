import { supabase } from "@/lib/supabase";

export type StudentEvent = {
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

type StudentEventRow = {
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

const fallbackEvents: StudentEvent[] = [
  {
    id: "placeholder-event",
    slug: "ornek-etkinlik",
    name: "Örnek Etkinlik",
    shortInfo: "Kısa etkinlik açıklaması burada yer alır.",
    longInfo:
      "Bu bir örnek etkinlik profilidir. Gerçek etkinlik listesi ve bilgiler veritabanından gelecektir.",
    supportNeeded: false,
    supportTypes: ["Maddi", "Manevi"],
    financialSupportInfo: "Hesap Bilgileri",
    financialSupportBankName: "Banka İsmi",
    financialSupportIban: "TR00 0000 0000 0000 0000 0000 00",
    financialSupportDescription: "Açıklama",
    moralSupportText: "Gönüllü katkılar ve etkinlik desteği için bize yazabilirsiniz.",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
    websiteUrl: "https://example.com",
    contactEmail: "info@example.com",
    responsiblePeople: ["Ayşe Yılmaz", "Mehmet Kaya"],
    developments: ["01.02.26 Etkinlik detayları yakında burada görünecek."],
    createdAt: new Date().toISOString(),
  },
];

const mapEvent = (event: StudentEventRow): StudentEvent => ({
  id: event.id,
  slug: event.slug,
  name: event.name,
  shortInfo: event.short_info ?? "",
  longInfo: event.long_info ?? "",
  supportNeeded: event.support_needed ?? false,
  supportTypes: event.support_types ?? [],
  financialSupportInfo: event.financial_support_info ?? "",
  financialSupportBankName: event.financial_support_bank_name ?? "",
  financialSupportIban: event.financial_support_iban ?? "",
  financialSupportDescription: event.financial_support_description ?? "",
  moralSupportText: event.moral_support_text ?? "",
  imageUrl: event.image_url,
  websiteUrl: event.website_url,
  contactEmail: event.contact_email,
  responsiblePeople: event.responsible_people ?? [],
  developments: event.developments ?? [],
  createdAt: event.created_at,
});

export const fetchEvents = async (): Promise<StudentEvent[]> => {
  if (!supabase) {
    return fallbackEvents;
  }

  const { data, error } = await supabase
    .from("public_student_events")
    .select(
      "id, slug, name, short_info, long_info, support_needed, support_types, financial_support_info, financial_support_bank_name, financial_support_iban, financial_support_description, moral_support_text, image_url, website_url, contact_email, responsible_people, developments, created_at",
    )
    .order("name", { ascending: true });

  if (error || !data) {
    console.error("Etkinlikler alınamadı", error);
    return fallbackEvents;
  }

  if (data.length === 0) {
    return fallbackEvents;
  }

  return data.map(mapEvent);
};

export const fetchEventBySlug = async (slug: string): Promise<StudentEvent | null> => {
  if (!supabase) {
    return fallbackEvents.find((event) => event.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("public_student_events")
    .select(
      "id, slug, name, short_info, long_info, support_needed, support_types, financial_support_info, financial_support_bank_name, financial_support_iban, financial_support_description, moral_support_text, image_url, website_url, contact_email, responsible_people, developments, created_at",
    )
    .eq("slug", slug)
    .single();

  if (error || !data) {
    console.error("Etkinlik detayı alınamadı", error);
    return fallbackEvents.find((event) => event.slug === slug) ?? null;
  }

  return mapEvent(data as StudentEventRow);
};
