import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchClubBySlug } from "@/data/clubs";
import { Link, useParams } from "react-router-dom";

const ClubDetail = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["club", slug],
    queryFn: () => fetchClubBySlug(slug ?? ""),
    enabled: Boolean(slug),
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/clubs">
                <ArrowLeft />
                Kulüplere dön
              </Link>
            </Button>

            {isLoading && (
              <div className="text-center text-muted-foreground">Kulüp bilgisi yükleniyor...</div>
            )}

            {isError && (
              <div className="text-center text-destructive">Kulüp bilgisi alınamadı.</div>
            )}

            {!isLoading && !isError && data && (
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                    <img
                      src={data.imageUrl ?? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"}
                      alt={`${data.name} görseli`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.name}</h1>
                    <p className="text-lg text-muted-foreground">{data.shortInfo}</p>
                    {data.supportNeeded ? (
                      <Badge variant="destructive">Destek gerekiyor</Badge>
                    ) : (
                      <Badge variant="secondary">Destek yok</Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Uzun Bilgi</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {data.longInfo || "Henüz uzun bilgi eklenmedi."}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border p-6">
                  <h3 className="text-lg font-semibold">İletişim & Linkler</h3>
                  <div className="flex flex-col gap-3">
                    {data.websiteUrl && (
                      <Button asChild variant="outline">
                        <a href={data.websiteUrl} target="_blank" rel="noreferrer">
                          <ExternalLink />
                          Website
                        </a>
                      </Button>
                    )}
                    {data.contactUrl && (
                      <Button asChild variant="secondary">
                        <a href={data.contactUrl}>
                          <Mail />
                          İletişim
                        </a>
                      </Button>
                    )}
                    {!data.websiteUrl && !data.contactUrl && (
                      <p className="text-sm text-muted-foreground">Henüz iletişim bilgisi eklenmedi.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClubDetail;
