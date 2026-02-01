import { supabase } from "@/lib/supabase";

export type StudentProfile = {
  id: string;
  fullName: string;
  graduationYear: number;
  graduationTerm: string;
  isAnonymous: boolean;
  createdAt: string;
};

type StudentRow = {
  id: string;
  full_name: string;
  graduation_year: number;
  graduation_term: string;
  is_anonymous: boolean | null;
  created_at: string;
};

const fallbackStudents: StudentProfile[] = [
  {
    id: "placeholder-student",
    fullName: "Ayşe Demir",
    graduationYear: 2026,
    graduationTerm: "168. dönem",
    isAnonymous: true,
    createdAt: new Date().toISOString(),
  },
];

const mapStudent = (row: StudentRow): StudentProfile => ({
  id: row.id,
  fullName: row.full_name,
  graduationYear: row.graduation_year,
  graduationTerm: row.graduation_term,
  isAnonymous: row.is_anonymous ?? true,
  createdAt: row.created_at,
});

export const fetchStudents = async (): Promise<StudentProfile[]> => {
  if (!supabase) {
    return fallbackStudents;
  }

  const { data, error } = await supabase
    .from("student_profiles")
    .select("id, full_name, graduation_year, graduation_term, is_anonymous, created_at")
    .order("graduation_year", { ascending: false });

  if (error || !data) {
    console.error("Öğrenci profilleri alınamadı", error);
    return fallbackStudents;
  }

  if (data.length === 0) {
    return fallbackStudents;
  }

  return data.map(mapStudent);
};
