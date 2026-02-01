import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="CAL Community logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-semibold text-white">CAL Community</span>
            </div>
            <p className="text-sm text-white/70">
              Cağaloğlu Anadolu Lisesi öğrenci ve mezunlarını bir araya getiren topluluk.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Sayfalar</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" className="transition-colors hover:text-white">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/news" className="transition-colors hover:text-white">Haberler</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Topluluk</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/clubs" className="transition-colors hover:text-white">Kulüpler</Link>
              </li>
              <li>
                <span className="cursor-pointer transition-colors hover:text-white">Forum</span>
              </li>
              <li>
                <span className="cursor-pointer transition-colors hover:text-white">CALMED</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">İletişim</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Cağaloğlu, İstanbul</li>
              <li>info@calcommunity.org</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} CAL Community. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
