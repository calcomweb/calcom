import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Kvkk = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">KVKK AYDINLATMA METNİ</h1>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Veri Sorumlusu</h2>
            <p className="text-muted-foreground">
              Bu platform kapsamında kişisel verileriniz, veri sorumlusu sıfatıyla aşağıda bilgileri
              yer alan kişi tarafından işlenmektedir. Veri sorumlusu Umut Barış Terzioğlu'dur. Adres
              bilgisi Gutenbergstrasse 28, 44139 Dortmund, Almanya'dır. İletişim için
              ubterzioglu@gmail.com e-posta adresi ile +49 173 956 94 29 ve +90 530 240 49 95 numaralı
              telefonlar kullanılabilir. Platform CAL Community Web (calcom.club) üzerinden faaliyet
              göstermektedir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">İşlenen Kişisel Veriler</h2>
            <p className="text-muted-foreground">
              Platforma kayıt ve kullanım kapsamında kullanıcıların ad soyad bilgileri, mezuniyet
              yılı, e-posta adresi, sosyal medya bağlantıları, platform içi etkileşimleri ve sistem
              log kayıtları (IP adresi, zaman damgası gibi teknik veriler) işlenebilmektedir.
              Platform kapsamında fotoğraf verisi toplanmamaktadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">İşleme Amaçları</h2>
            <p className="text-muted-foreground">
              Kişisel veriler; kullanıcı hesabının oluşturulması ve yönetilmesi, öğrenci ve mezun
              topluluğu arasındaki iletişimin sağlanması, platform güvenliğinin sağlanması, teknik
              operasyonların yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla
              işlenmektedir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Hukuki Sebep</h2>
            <p className="text-muted-foreground">
              Veriler, açık rıza, sözleşmenin kurulması ve ifası, veri sorumlusunun meşru menfaati ve
              yürürlükteki kanuni yükümlülüklerin yerine getirilmesi hukuki sebeplerine dayanılarak
              işlenmektedir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Veri Aktarımı</h2>
            <p className="text-muted-foreground">
              Kişisel veriler; barındırma ve altyapı hizmetleri sağlayan Vercel ve Supabase, yazılım
              ve kod yönetimi hizmetleri sunan GitHub, analiz hizmetleri kapsamında Google Analytics
              ve yasal talepler doğrultusunda yetkili resmi kurumlarla sınırlı olmak üzere
              paylaşılabilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Veri Saklama Süresi</h2>
            <p className="text-muted-foreground">
              Kişisel veriler, kullanıcı hesabı aktif olduğu sürece ve hukuki yükümlülükler
              kapsamında gerekli olan süre boyunca saklanmaktadır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Kullanıcı Hakları</h2>
            <p className="text-muted-foreground">
              Kullanıcılar KVKK'nın 11. maddesi kapsamında kişisel verilerinin işlenip işlenmediğini
              öğrenme, düzeltilmesini talep etme, silinmesini isteme, işlenmesine itiraz etme ve
              zararın giderilmesini talep etme haklarına sahiptir. Bu kapsamda yapılacak başvurular
              ubterzioglu@gmail.com adresine iletilebilir.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kvkk;
