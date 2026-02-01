import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "2024-2025 Eğitim Yılı Açılış Töreni",
    summary: "Yeni eğitim yılı heyecanla başladı! Açılış töreninde okul müdürümüz gelecek döneme ilişkin hedeflerimizi paylaştı.",
    date: "15 Eylül 2024"
  },
  {
    id: 2,
    title: "Almanca Dil Olimpiyatları Başarısı",
    summary: "Öğrencilerimiz Almanca Dil Olimpiyatları'nda üstün başarı göstererek okumuzun gururu oldular.",
    date: "10 Eylül 2024"
  },
  {
    id: 3,
    title: "CALMED Mentorluk Programı Başvuruları Açıldı",
    summary: "Mezunlarımızın öğrencilerimize rehberlik ettiği mentorluk programı için başvurular başladı.",
    date: "5 Eylül 2024"
  },
  {
    id: 4,
    title: "Yeni Kulüp Kayıtları Başlıyor",
    summary: "Müzik, spor, bilim ve sanat kulüplerine kayıtlar 20 Eylül'de başlayacak. Formları doldurmayı unutmayın!",
    date: "1 Eylül 2024"
  },
  {
    id: 5,
    title: "Mezunlar Buluşması 2024",
    summary: "Her yıl geleneksel olarak düzenlenen mezunlar buluşması bu yıl 15 Kasım'da gerçekleşecek.",
    date: "25 Ağustos 2024"
  },
  {
    id: 6,
    title: "Yaz Okulu Programı Tamamlandı",
    summary: "Akademik destek ve sosyal aktivitelerle dolu yaz okulu programımız başarıyla sona erdi.",
    date: "20 Ağustos 2024"
  }
];

const News = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Haberler & Duyurular
              </h1>
              <p className="text-lg text-muted-foreground">
                CAL topluluğundan en güncel haberler ve duyurular.
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-6">
              {newsItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="transition-all duration-300 hover:shadow-md hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <time>{item.date}</time>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.summary}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
