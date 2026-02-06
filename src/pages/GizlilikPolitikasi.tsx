import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GizlilikPolitikasi = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">GİZLİLİK POLİTİKASI</h1>

          <section className="space-y-3">
            <p className="text-muted-foreground">
              CAL Community, kullanıcı gizliliğine önem veren bir platformdur. Kişisel veriler
              yalnızca gerekli olduğu ölçüde toplanır, güvenli şekilde saklanır ve yetkisiz
              erişimlere karşı teknik ve idari önlemler uygulanır. Platform kapsamında toplanan
              veriler, hesap oluşturma süreçleri, kullanıcılar arası iletişim, topluluk etkileşimleri
              ve güvenlik loglarının tutulması amacıyla kullanılmaktadır.
            </p>
            <p className="text-muted-foreground">
              Toplanan veriler üçüncü taraflara satılmaz, ticari amaçla kullanılmaz ve reklam amacıyla
              paylaşılmaz. Platform tamamen ücretsiz ve topluluk odaklı bir yapı ile faaliyet
              göstermektedir.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GizlilikPolitikasi;
