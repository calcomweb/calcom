import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container py-12 text-center text-xs">
        <div className="flex flex-col items-center gap-3">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3">
              <span className="font-semibold text-white text-sm">CAL Community</span>
            </div>
          </div>

          <div className="text-white/70">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <Link
                to="/contact"
                className="font-semibold text-white transition-colors hover:text-white"
              >
                İletişim
              </Link>
              <span className="text-white/40">|</span>
              <Link
                to="/gizlilik-politikasi"
                className="font-semibold text-white transition-colors hover:text-white"
              >
                Gizlilik Politikası
              </Link>
              <span className="text-white/40">|</span>
              <Link
                to="/kvkk"
                className="font-semibold text-white transition-colors hover:text-white"
              >
                KVKK Aydınlatma Metni
              </Link>
              <span className="text-white/40">|</span>
              <Link
                to="/cerez-politikasi"
                className="font-semibold text-white transition-colors hover:text-white"
              >
                Çerez Politikası
              </Link>
              <span className="text-white/40">|</span>
              <Link
                to="/kullanim-sartlari"
                className="font-semibold text-white transition-colors hover:text-white"
              >
                Kullanım Şartları ve Sorumluluk Reddi
              </Link>
              <span className="text-white/40">|</span>
              <Link
                to="/acik-riza"
                className="font-semibold text-white transition-colors hover:text-white"
              >
                Açık Rıza Metni
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/70 space-y-2 leading-relaxed">
          <p className="text-white/70">
            Cağaloğlu Anadolu Lisesi öğrenci ve mezunlarını bir araya getiren topluluk.
          </p>
          <p>
            Bu topluluk gayriresmidir ve CALMED veya diğer oluşumlarla bağlantılı değildir.
          </p>
          <p>KVKK sebebiyle öğrencilerimizin isimleri sadece isim ve soyisminin baş harfleri ile verilmektedir.</p>
          <p>© {new Date().getFullYear()} CAL Community. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
