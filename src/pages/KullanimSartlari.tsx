import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const KullanimSartlari = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">KULLANIM ŞARTLARI VE SORUMLULUK REDDİ</h1>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Platform Tanımı</h2>
            <p className="text-muted-foreground">
              CAL Community, Cağaloğlu Anadolu Lisesi öğrencileri ve mezunlarının iletişim kurması
              amacıyla oluşturulmuş dijital bir topluluk platformudur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Üyelik</h2>
            <p className="text-muted-foreground">
              Platforma yalnızca öğrenciler ve mezunlar kayıt olabilir ve lise öğrencileri de üyelik
              oluşturabilir. Kullanıcılar kayıt sırasında verdikleri bilgilerin doğruluğundan bizzat
              sorumludur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Kullanıcı İçerikleri</h2>
            <p className="text-muted-foreground">
              Platformda paylaşılan her türlü içerikten ilgili kullanıcı sorumludur. Veri sorumlusu,
              kullanıcıların oluşturduğu içeriklerden doğabilecek hukuki sorumluluğu kabul etmez ve
              hakaret, ifşa, telif ihlali veya yasa dışı paylaşımlardan sorumlu tutulamaz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">İçerik Kaldırma</h2>
            <p className="text-muted-foreground">
              Hukuka aykırı, etik dışı veya topluluk düzenini bozucu nitelikte olduğu değerlendirilen
              içerikler herhangi bir bildirim yapılmaksızın platformdan kaldırılabilir.
            </p>
            <p className="text-muted-foreground">Şikayet ve bildirimler ubterzioglu@gmail.com adresine iletilebilir.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Okul Kurumu ile İlişki</h2>
            <p className="text-muted-foreground">
              Platform resmi okul sistemi değildir ve okul yönetimi ile kurumsal bir bağ veya temsil
              ilişkisi bulunmamaktadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Veri Güvenliği</h2>
            <p className="text-muted-foreground">
              Platformda gerekli teknik ve idari güvenlik önlemleri alınmakla birlikte internet
              ortamında veri güvenliğinin mutlak şekilde garanti edilemeyeceği kullanıcı tarafından
              kabul edilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Üçüncü Taraf Hizmetler</h2>
            <p className="text-muted-foreground">
              Platform kapsamında kullanılan Google, Vercel, Supabase ve GitHub gibi hizmet
              sağlayıcıların kendi gizlilik ve kullanım politikaları geçerlidir ve bu hizmetlerden
              kaynaklanan süreçler ilgili sağlayıcıların sorumluluğundadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Hesap Silme</h2>
            <p className="text-muted-foreground">
              Kullanıcılar diledikleri zaman hesaplarını silebilir veya kişisel verilerinin
              silinmesini talep edebilir. Bu talepler e-posta yoluyla iletilebilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Sorumluluk Sınırı</h2>
            <p className="text-muted-foreground">
              Veri sorumlusu; sistem kesintileri, veri kaybı, üçüncü taraf hizmet sağlayıcıların
              hataları ve kullanıcılar arası iletişimden doğabilecek zararlar nedeniyle sorumlu
              tutulamaz.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Değişiklik Hakkı</h2>
            <p className="text-muted-foreground">
              Platform, bu metinleri önceden bildirim yapmaksızın güncelleme hakkını saklı tutar.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KullanimSartlari;
