import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/lib/supabase";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState("mezun");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!supabase) {
      setError("Supabase yapılandırması eksik.");
      return;
    }

    setIsLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoading(false);

    if (signInError) {
      setError("Giriş başarısız. Bilgileri kontrol et.");
      return;
    }

    const redirectTo = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Üye Girişi</h1>
            <p className="text-muted-foreground">Öğrenci veya mezun olarak giriş yap.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label>Üyelik Türü</Label>
              <RadioGroup
                value={role}
                onValueChange={setRole}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="ogrenci" id="role-student" />
                  <Label htmlFor="role-student">Öğrenci</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="mezun" id="role-alumni" />
                  <Label htmlFor="role-alumni">Mezun</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
