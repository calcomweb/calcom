import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ExternalLink, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchAlumni } from "@/data/alumni";
import { Link } from "react-router-dom";

const Alumni = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["alumni"],
    queryFn: fetchAlumni,
  });

  const alumni = data ?? [];
  const getInitials = (fullName: string) =>
    fullName
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Mezunlar</h1>
              <p className="text-muted-foreground text-lg">
                Mezun profilleri ve destek olabilecekleri alanlar.
              </p>
            </div>

            {isLoading && (
              <div className="text-center text-muted-foreground">Mezun profilleri yükleniyor...</div>
            )}
            {isError && (
              <div className="text-center text-destructive">Mezun profilleri yüklenemedi.</div>
            )}

            {!isLoading && !isError && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {alumni.map((profile) => (
                  <Card key={profile.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle>
                            {profile.isAnonymous ? getInitials(profile.fullName) : profile.fullName}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Mezuniyet Yılı {profile.graduationYear}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
