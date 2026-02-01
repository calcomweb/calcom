const CommunityMessage = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div id="how-it-works" className="scroll-mt-24 text-left">
            <div className="rounded-xl border border-white/10 bg-black p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Sayfamız nasıl çalışıyor?</h3>
              <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
                <p>
                  CAL Community, öğrenci ve mezunları tek bir dijital çatıda buluşturan sade bir paylaşım alanıdır.
                  Kulüpler kendi sayfalarını günceller; gelişmeler bölümünde duyuru veya etkinlik bilgileri
                  paylaşılır. Destek ihtiyaçları “maddi” ve “manevi” olarak belirtilir, varsa açıklamalar ilgili
                  alanda görülür.
                </p>
                <p>
                  Mezunlar bölümünde profiller yer alır. Mezunlar isterse anonim kalabilir; anonim profillerde yalnızca
                  isim-soyisim baş harfleri ve mezuniyet yılı görünür. Öğrenciler için de anonim profil esası geçerlidir;
                  yalnızca baş harfler, mezuniyet yılı ve dönem bilgisi paylaşılır.
                </p>
                <p>
                  Mezunlar Dayanışma, mezunlara özel bir paylaşım alanıdır. Burada mezunlar kısa başlıklar ve açıklamalarla
                  topikler oluşturabilir, diğer mezunlar da yorum ekleyebilir. Böylece bilgi ve deneyim paylaşımı düzenli
                  ve güvenli biçimde yürütülür.
                </p>
                <p>
                  Tüm içerikler KVKK prensiplerine uygun biçimde, minimum kişisel veri yaklaşımıyla sunulur. Amaç; okul
                  topluluğunu bir arada tutmak, iletişimi kolaylaştırmak ve dayanışmayı güçlendirmektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMessage;
