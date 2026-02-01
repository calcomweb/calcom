import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="CAL Community logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="hidden font-semibold sm:inline-block">CAL Community</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/clubs" className="text-sm font-medium hover:text-primary transition-colors">
            Kulüpler
          </Link>
          <Link to="/news" className="text-sm font-medium hover:text-primary transition-colors">
            Haberler
          </Link>
          <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            Admin
          </Link>
          <Button size="sm">Katıl</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-background p-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Ana Sayfa
          </Link>
          <Link
            to="/clubs"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Kulüpler
          </Link>
          <Link
            to="/news"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Haberler
          </Link>
          <Link
            to="/admin"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </Link>
          <Button size="sm" className="w-fit">Katıl</Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
