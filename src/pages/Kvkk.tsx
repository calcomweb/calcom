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
              yer alan kişi tarafından işlenmektedir:
            </p>
            <div className="text-muted-foreground space-y-1">
              <p>Ad Soyad: Umut Barış Terzioğlu</p>
              <p>Adres: Gutenbergstrasse 28, 44139 Dortmund, Almanya</p>
              <p>E-posta: ubterzioglu@gmail.com</p>
              <p>Telefon: +49 173 956 94 29 / +90 530 240 49 95</p>
              <p>Platform: CAL Community Web (calcom.club)</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">İşlenen Kişisel Veriler</h2>
            <p className="text-muted-foreground">
              Platforma kayıt ve kullanım kapsamında aşağıdaki veriler işlenebilir:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>ad soyad</li>
              <li>mezuniyet yılı</li>
              <li>e-posta adresi</li>
              <li>sosyal medya bağlantıları</li>
              <li>platform içi kullanıcı etkileşimleri</li>
              <li>sistem log kayıtları (IP, zaman damgası vb.)</li>
            </ul>
            <p className="text-muted-foreground">Fotoğraf verisi toplanmamaktadır.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">İşleme Amaçları</h2>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>kullanıcı hesabı oluşturulması ve yönetimi</li>
              <li>öğrenci ve mezun topluluğunun iletişiminin sağlanması</li>
              <li>platform güvenliği</li>
              <li>teknik operasyonların yürütülmesi</li>
              <li>hukuki yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Hukuki Sebep</h2>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>açık rıza</li>
              <li>sözleşmenin kurulması ve ifası</li>
              <li>veri sorumlusunun meşru menfaati</li>
              <li>kanuni yükümlülükler</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Veri Aktarımı</h2>
            <p className="text-muted-foreground">
              Veriler aşağıdaki hizmet sağlayıcılarla sınırlı olmak üzere paylaşılabilir:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>barındırma ve altyapı servisleri (Vercel, Supabase)</li>
              <li>yazılım ve kod yönetimi servisleri (GitHub)</li>
              <li>analiz servisleri (Google Analytics)</li>
              <li>yetkili resmi kurumlar (yasal talepler halinde)</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Veri Saklama Süresi</h2>
            <p className="text-muted-foreground">
              Veriler, hesap aktif olduğu sürece veya hukuki yükümlülükler kapsamında gerekli olan
              süre boyunca saklanır.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Kullanıcı Hakları</h2>
            <p className="text-muted-foreground">KVKK md.11 kapsamında:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>verilerinin işlenip işlenmediğini öğrenme</li>
              <li>düzeltilmesini isteme</li>
              <li>silinmesini isteme</li>
              <li>işlemeye itiraz etme</li>
              <li>zararın giderilmesini talep etme</li>
            </ul>
            <p className="text-muted-foreground">Başvurular: ubterzioglu@gmail.com</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">GİZLİLİK POLİTİKASI</h2>
            <p className="text-muted-foreground">CAL Community kullanıcı gizliliğine önem verir.</p>
            <p className="text-muted-foreground">
              Platform; kişisel verileri yalnızca gerekli olduğu kadar toplar, güvenli şekilde
              saklar ve yetkisiz erişime karşı teknik ve idari önlemler uygular.
            </p>
            <p className="text-muted-foreground">Toplanan veriler:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>hesap oluşturma</li>
              <li>iletişim</li>
              <li>topluluk etkileşimleri</li>
              <li>güvenlik logları</li>
            </ul>
            <p className="text-muted-foreground">Veriler:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>üçüncü taraflara satılmaz</li>
              <li>ticari amaçla kullanılmaz</li>
              <li>reklam için paylaşılmaz</li>
            </ul>
            <p className="text-muted-foreground">Platform tamamen ücretsiz ve topluluk odaklıdır.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">ÇEREZ POLİTİKASI</h2>
            <p className="text-muted-foreground">Platformda aşağıdaki amaçlarla çerezler kullanılabilir:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>oturum yönetimi</li>
              <li>güvenlik</li>
              <li>kullanıcı deneyimi</li>
              <li>analiz</li>
            </ul>
            <p className="text-muted-foreground">
              Kullanıcılar tarayıcı ayarlarından çerezleri devre dışı bırakabilir. Bu durumda bazı
              özellikler çalışmayabilir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">KULLANIM ŞARTLARI VE SORUMLULUK REDDİ</h2>
            <h3 className="text-lg font-semibold">Platform Tanımı</h3>
            <p className="text-muted-foreground">
              CAL Community, Cağaloğlu Anadolu Lisesi öğrencileri ve mezunlarının iletişim kurması
              amacıyla oluşturulmuş dijital bir topluluk platformudur.
            </p>

            <h3 className="text-lg font-semibold">Üyelik</h3>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>yalnızca öğrenciler ve mezunlar kayıt olabilir</li>
              <li>lise öğrencileri dahil olabilir</li>
              <li>kullanıcı, verdiği bilgilerin doğruluğundan sorumludur</li>
            </ul>

            <h3 className="text-lg font-semibold">Kullanıcı İçerikleri</h3>
            <p className="text-muted-foreground">
              Platformda paylaşılan tüm içeriklerden içerik sahibi kullanıcı sorumludur.
            </p>
            <p className="text-muted-foreground">Veri sorumlusu:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>kullanıcıların yazdığı içeriklerden doğan hukuki sorumluluğu kabul etmez</li>
              <li>hakaret, ifşa, telif ihlali ve yasa dışı paylaşımlardan sorumlu değildir</li>
            </ul>

            <h3 className="text-lg font-semibold">İçerik Kaldırma</h3>
            <p className="text-muted-foreground">
              Hukuka aykırı, etik dışı veya topluluk düzenini bozucu içerikler haber verilmeksizin
              kaldırılabilir.
            </p>
            <p className="text-muted-foreground">Şikayet: ubterzioglu@gmail.com</p>

            <h3 className="text-lg font-semibold">Okul Kurumu ile İlişki</h3>
            <p className="text-muted-foreground">
              Platform, resmi okul sistemi değildir. Okul yönetimi ile kurumsal bağ veya temsil
              yetkisi bulunmaz.
            </p>

            <h3 className="text-lg font-semibold">Veri Güvenliği</h3>
            <p className="text-muted-foreground">
              Tüm teknik önlemler alınmasına rağmen internet ortamında mutlak güvenlik garanti
              edilemez.
            </p>

            <h3 className="text-lg font-semibold">Üçüncü Taraf Hizmetler</h3>
            <p className="text-muted-foreground">
              Google, Vercel, Supabase, GitHub gibi servisler üzerinden yürütülen işlemler bu
              servislerin kendi politikalarına tabidir.
            </p>

            <h3 className="text-lg font-semibold">Hesap Silme</h3>
            <p className="text-muted-foreground">
              Kullanıcılar hesaplarını silebilir veya veri silme talebini e-posta ile iletebilir.
            </p>

            <h3 className="text-lg font-semibold">Sorumluluk Sınırı</h3>
            <p className="text-muted-foreground">Veri sorumlusu:</p>
            <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
              <li>sistem kesintilerinden</li>
              <li>veri kaybından</li>
              <li>üçüncü taraf servis hatalarından</li>
              <li>kullanıcılar arası iletişimden doğan zararlardan</li>
              <li>sorumlu tutulamaz.</li>
            </ul>

            <h3 className="text-lg font-semibold">Değişiklik Hakkı</h3>
            <p className="text-muted-foreground">
              Platform, bu metinleri önceden bildirim yapmadan güncelleme hakkını saklı tutar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Güncellemeler</h2>
            <div className="text-muted-foreground space-y-1">
              <p>KVKK Aydınlatma Metni güncelleme tarihi: 6 Şubat 2026</p>
              <p>Gizlilik Politikası güncelleme tarihi: 6 Şubat 2026</p>
              <p>Çerez Politikası güncelleme tarihi: 6 Şubat 2026</p>
              <p>Kullanım Şartları güncelleme tarihi: 6 Şubat 2026</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kvkk;
