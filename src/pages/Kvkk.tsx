import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Kvkk = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">KVKK Aydınlatma Metni</h1>
          <p className="text-muted-foreground">
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında topluluk
            platformumuzda yer alan öğrenci, mezun ve kulüp profillerine ilişkin kişisel veri işleme
            süreçlerini açıklamak amacıyla hazırlanmıştır.
          </p>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Veri Sorumlusu</h2>
            <p className="text-muted-foreground">
              Bu platform, CAL Community topluluğu tarafından yönetilen gayriresmi bir topluluk
              platformudur. Kurumsal bir birim veya bağlı kuruluş adına işlem yapılmamaktadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. İşlenen Veriler ve Kapsam</h2>
            <p className="text-muted-foreground">
              Platformda yalnızca amaçla sınırlı, minimum düzeyde kişisel veri işlenir. Öğrenciler
              için isim ve soyisim baş harfleri, mezuniyet yılı ve dönem bilgisi paylaşılır. Mezun
              profillerinde paylaşım tercihlerine bağlı olarak isim-soyisim, mezuniyet yılı, kısa
              bilgi ve iletişim kanalları gösterilebilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">3. İşleme Amaçları</h2>
            <p className="text-muted-foreground">
              Veriler; topluluk içi iletişim, dayanışma, kulüp ve mezun-öğrenci etkileşimi, duyuru ve
              gelişmelerin paylaşılması amaçlarıyla işlenir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Paylaşım ve Aktarım</h2>
            <p className="text-muted-foreground">
              Kişisel veriler üçüncü kişilerle paylaşılmaz ve ticari amaçla kullanılmaz. Yalnızca
              platform üzerinde sınırlı görünürlükle paylaşılır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Saklama Süresi</h2>
            <p className="text-muted-foreground">
              Veriler, platform amacı devam ettiği sürece saklanır. Kullanıcı talebi üzerine veya
              amaç ortadan kalktığında silinir ya da anonimleştirilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">6. Haklarınız</h2>
            <p className="text-muted-foreground">
              KVKK kapsamındaki haklarınızı kullanmak için platform iletişim e-postası üzerinden
              talepte bulunabilirsiniz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Güvenlik</h2>
            <p className="text-muted-foreground">
              Veri güvenliği için makul teknik ve idari tedbirler alınır; özellikle öğrenciler için
              anonimlik esas alınır ve kimlik bilgileri açık biçimde paylaşılmaz.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kvkk;
