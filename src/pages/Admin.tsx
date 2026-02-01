import { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/lib/supabase";
import type { Club } from "@/data/clubs";

const SUPERADMIN_EMAIL = "ubterzioglu@gmail.com";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSuperAdmin = useMemo(() => sessionEmail === SUPERADMIN_EMAIL, [sessionEmail]);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSessionEmail(data.session?.user.email ?? null);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionEmail(session?.user.email ?? null);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase || !sessionEmail) return;

    const loadClubs = async () => {
      setError(null);
      setIsLoading(true);
      if (isSuperAdmin) {
        const { data, error: fetchError } = await supabase
          .from("clubs")
          .select("id, slug, name, short_info, long_info, support_needed, image_url, website_url, contact_url, created_at")
          .order("name");

        if (fetchError) {
          setError("Kulüpler yüklenemedi.");
        } else {
          const mapped = (data ?? []).map((club) => ({
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
          }));
          setClubs(mapped);
        }
        setIsLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("club_admins")
        .select("club:clubs(id, slug, name, short_info, long_info, support_needed, image_url, website_url, contact_url, created_at)")
        .order("created_at", { ascending: false });

      if (fetchError) {
        setError("Kulüp yetkileri alınamadı.");
        setIsLoading(false);
        return;
      }

      const mapped = (data ?? [])
        .map((item: any) => item.club)
        .filter(Boolean)
        .map((club: any) => ({
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
        }));
      setClubs(mapped);
      setIsLoading(false);
    };

    loadClubs();
  }, [sessionEmail, isSuperAdmin]);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!supabase) return;
    setIsLoading(true);
    setError(null);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      setError("Giriş başarısız. Bilgileri kontrol et.");
    }
    setIsLoading(false);
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSelectedClub(null);
  };

  const handleUpdateClub = async () => {
    if (!supabase || !selectedClub) return;
    setIsSaving(true);
    setError(null);

    const { error: updateError } = await supabase
      .from("clubs")
      .update({
        name: selectedClub.name,
        short_info: selectedClub.shortInfo,
        long_info: selectedClub.longInfo,
        support_needed: selectedClub.supportNeeded,
        image_url: selectedClub.imageUrl,
        website_url: selectedClub.websiteUrl,
        contact_url: selectedClub.contactUrl,
      })
      .eq("id", selectedClub.id);

    if (updateError) {
      setError("Kulüp güncellenemedi.");
    }

    setIsSaving(false);
  };

  const updateSelectedClub = (patch: Partial<Club>) => {
    setSelectedClub((prev) => (prev ? { ...prev, ...patch } : prev));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="mb-10 flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Kulüp Yönetimi</h1>
            <p className="text-muted-foreground">
              {sessionEmail ? "Kulüp bilgilerini düzenleyebilirsin." : "Panel için giriş yap."}
            </p>
          </div>

          {!supabase && (
            <Card>
              <CardHeader>
                <CardTitle>Supabase yapılandırması eksik</CardTitle>
                <CardDescription>.env içindeki VITE_SUPABASE_URL ve VITE_SUPABASE_ANON_KEY kontrol et.</CardDescription>
              </CardHeader>
            </Card>
          )}

          {error && (
            <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {!sessionEmail && supabase && (
            <Card className="max-w-lg">
              <CardHeader>
                <CardTitle>Giriş</CardTitle>
                <CardDescription>Yetkili kulüp hesabı ile giriş yap.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSignIn}>
                  <Input
                    type="email"
                    placeholder="E-posta"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {sessionEmail && (
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Kulüpler</CardTitle>
                  <CardDescription>
                    {isSuperAdmin ? "Tüm kulüpler" : "Yetkili olduğun kulüpler"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isLoading && <div className="text-sm text-muted-foreground">Yükleniyor...</div>}
                  {!isLoading && clubs.length === 0 && (
                    <div className="text-sm text-muted-foreground">Henüz yetkili kulüp bulunamadı.</div>
                  )}
                  <div className="space-y-3">
                    {clubs.map((club) => (
                      <button
                        key={club.id}
                        type="button"
                        onClick={() => setSelectedClub(club)}
                        className={`w-full rounded-lg border px-4 py-3 text-left transition ${
                          selectedClub?.id === club.id
                            ? "border-primary bg-primary/5"
                            : "hover:border-primary/40"
                        }`}
                      >
                        <div className="font-medium">{club.name}</div>
                        <div className="text-sm text-muted-foreground">{club.shortInfo || "Kısa bilgi yok"}</div>
                      </button>
                    ))}
                  </div>
                  <Button variant="secondary" onClick={handleSignOut}>
                    Çıkış yap
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kulüp Düzenle</CardTitle>
                  <CardDescription>Seçili kulübün bilgilerini güncelle.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!selectedClub && (
                    <div className="text-sm text-muted-foreground">Soldan bir kulüp seç.</div>
                  )}

                  {selectedClub && (
                    <div className="space-y-4">
                      <Input
                        value={selectedClub.name}
                        onChange={(event) => updateSelectedClub({ name: event.target.value })}
                        placeholder="Kulüp adı"
                      />
                      <Input
                        value={selectedClub.imageUrl ?? ""}
                        onChange={(event) => updateSelectedClub({ imageUrl: event.target.value || null })}
                        placeholder="Görsel URL"
                      />
                      <Input
                        value={selectedClub.websiteUrl ?? ""}
                        onChange={(event) => updateSelectedClub({ websiteUrl: event.target.value || null })}
                        placeholder="Website URL"
                      />
                      <Input
                        value={selectedClub.contactUrl ?? ""}
                        onChange={(event) => updateSelectedClub({ contactUrl: event.target.value || null })}
                        placeholder="İletişim URL (e-posta veya sosyal)"
                      />
                      <Textarea
                        value={selectedClub.shortInfo}
                        onChange={(event) => updateSelectedClub({ shortInfo: event.target.value })}
                        placeholder="Kısa bilgi"
                        rows={3}
                      />
                      <Textarea
                        value={selectedClub.longInfo}
                        onChange={(event) => updateSelectedClub({ longInfo: event.target.value })}
                        placeholder="Uzun bilgi"
                        rows={6}
                      />
                      <div className="flex items-center justify-between rounded-lg border px-3 py-2">
                        <div>
                          <div className="font-medium">Destek ihtiyacı</div>
                          <div className="text-sm text-muted-foreground">Kulübün desteğe ihtiyacı var mı?</div>
                        </div>
                        <Switch
                          checked={selectedClub.supportNeeded}
                          onCheckedChange={(value) => updateSelectedClub({ supportNeeded: value })}
                        />
                      </div>
                      <Button onClick={handleUpdateClub} disabled={isSaving}>
                        {isSaving ? "Kaydediliyor..." : "Kaydet"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
