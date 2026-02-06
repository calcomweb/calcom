import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createAlumniProfile } from "@/data/alumni";

const AlumniCreate = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [shortBio, setShortBio] = useState("");
  const [supportTopics, setSupportTopics] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError("Ad Soyad zorunludur.");
      return;
    }

    const parsedYear = Number(graduationYear);
    if (!Number.isFinite(parsedYear) || parsedYear <= 0) {
      setError("Mezuniyet yılı geçerli bir sayı olmalıdır.");
      return;
    }

    if (!whatsappNumber.trim()) {
      setError("WhatsApp numarası zorunludur.");
      return;
    }

    const topics = supportTopics
      .split(",")
      .map((topic) => topic.trim())
      .filter(Boolean);

    setIsSubmitting(true);
    try {
      const created = await createAlumniProfile({
        graduationYear: parsedYear,
        fullName: fullName.trim(),
        whatsappNumber: whatsappNumber.trim(),
        email: email.trim() || null,
        linkedinUrl: linkedinUrl.trim() || null,
        instagramUrl: instagramUrl.trim() || null,
        shortBio: shortBio.trim() || null,
        supportTopics: topics,
        isAnonymous,
      });

      if (created) {
        navigate(`/alumni/${created.id}`);
      }
    } catch (submitError) {
      console.error(submitError);
      setError("Profil oluşturulamadı. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Mezun Profili Oluştur</h1>
            <p className="text-muted-foreground">
              Zorunlu alanlar: Ad Soyad, Mezuniyet Yılı, WhatsApp Numarası.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Ad Soyad *</label>
              <Input value={fullName} onChange={(event) => setFullName(event.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mezuniyet Yılı *</label>
              <Input
                type="number"
                value={graduationYear}
                onChange={(event) => setGraduationYear(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp Numarası *</label>
              <Input
                placeholder="+90 5xx xxx xx xx"
                value={whatsappNumber}
                onChange={(event) => setWhatsappNumber(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">E-posta</label>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">LinkedIn</label>
              <Input
                placeholder="https://www.linkedin.com/in/..."
                value={linkedinUrl}
                onChange={(event) => setLinkedinUrl(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Instagram</label>
              <Input
                placeholder="https://www.instagram.com/..."
                value={instagramUrl}
                onChange={(event) => setInstagramUrl(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Kısa Bilgi</label>
              <Textarea
                rows={5}
                value={shortBio}
                onChange={(event) => setShortBio(event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Destek Konuları (virgül ile ayır)</label>
              <Input
                placeholder="Kariyer, Staj, Mentorluk"
                value={supportTopics}
                onChange={(event) => setSupportTopics(event.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="isAnonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(Boolean(checked))}
              />
              <label htmlFor="isAnonymous" className="text-sm font-medium">
                Anonim kalmak istiyorum
              </label>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Kaydediliyor..." : "Profil Oluştur"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlumniCreate;
