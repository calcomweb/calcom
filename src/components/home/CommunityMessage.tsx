import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommunityMessage = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div id="how-it-works" className="scroll-mt-24">
            <div className="rounded-xl border border-white/10 bg-black p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-center text-white">Sayfamız nasıl çalışıyor?</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    CAL Community nasıl çalışır?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    CAL Community; öğrenci ve mezunları tek bir dijital çatı altında buluşturan sade bir paylaşım alanıdır. Kulüpler kendi sayfalarını günceller, gelişmeler bölümünde duyuru ve etkinlik bilgileri paylaşılır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Kulüpler ve gelişmeler bölümü ne işe yarar?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Kulüpler kendi faaliyetlerini ve güncellemelerini burada paylaşır. “Gelişmeler” alanı ise duyurular, etkinlikler ve önemli bilgilendirmeler için kullanılır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Destek ihtiyaçları nasıl belirtilir?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Destek talepleri “maddi” ve “manevi” olarak sınıflandırılır. Gerekli açıklamalar ilgili başlık altında yer alır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Mezunlar bölümü nedir?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mezunlar bölümünde profiller bulunur. İsteyen mezunlar anonim kalabilir; anonim profillerde yalnızca isim-soyisim baş harfleri ve mezuniyet yılı görünür.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Öğrenciler anonim kalabilir mi?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Evet. Öğrenciler için de anonim profil esası geçerlidir. Sadece baş harfler, mezuniyet yılı ve dönem bilgisi paylaşılır.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Mezunlar Dayanışma alanı nedir?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mezunlara özel bir paylaşım alanıdır. Mezunlar kısa başlıklar ve açıklamalarla konular açabilir, diğer mezunlar yorum ekleyebilir. Böylece bilgi ve deneyim paylaşımı düzenli ve güvenli şekilde ilerler.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Kişisel veriler nasıl korunur?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Tüm içerikler KVKK prensiplerine uygun, minimum kişisel veri yaklaşımıyla sunulur.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-b-0">
                  <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline font-medium">
                    Amaç nedir?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Okul topluluğunu bir arada tutmak, iletişimi kolaylaştırmak ve dayanışmayı güçlendirmek.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMessage;
