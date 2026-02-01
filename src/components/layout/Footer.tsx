import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                CAL
              </div>
              <span className="font-semibold">CAL Community</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cağaloğlu Anadolu Lisesi öğrenci ve mezunlarını bir araya getiren topluluk.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Sayfalar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary transition-colors">Haberler</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold">Topluluk</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">Kulüpler</span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">Forum</span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">CALMED</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">İletişim</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cağaloğlu, İstanbul</li>
              <li>info@calcommunity.org</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CAL Community. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
