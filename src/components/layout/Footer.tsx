import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container py-12 text-center">
        <div className="grid gap-8 sm:grid-cols-2 place-items-center">
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-sm text-white/70 whitespace-nowrap">
              Cağaloğlu Anadolu Lisesi öğrenci ve mezunlarını bir araya getiren topluluk.
            </p>
            <div className="flex items-center justify-center gap-3">
              <img
                src="/logo.png"
                alt="CAL Community logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-semibold text-white">CAL Community</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-white/70 space-y-2">
              <div>
                <Link to="/contact" className="font-semibold text-white transition-colors hover:text-white">İletişim</Link>
              </div>
              <div>
                <Link to="/kvkk" className="font-semibold text-white transition-colors hover:text-white">KVKK</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p className="mb-2">
            Bu topluluk gayriresmidir ve CALMED veya diğer oluşumlarla bağlantılı değildir.
          </p>
          <p className="mb-2">
            KVKK sebebiyle öğrencilerimizin isimleri sadece isim ve soyisminin baş harfleri ile verilmektedir.
          </p>
          <p>© {new Date().getFullYear()} CAL Community. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
