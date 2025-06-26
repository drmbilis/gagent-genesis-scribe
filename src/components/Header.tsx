
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gradient-primary p-2 rounded-lg animate-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">GAGENT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Özellikler
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Fiyatlandırma
            </a>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Hakkımızda
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Giriş Yap</Button>
            </Link>
            <Link to="/register">
              <Button className="gradient-primary text-white border-0 hover:opacity-90">
                Başlayın
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-effect rounded-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Özellikler
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Fiyatlandırma
              </a>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                Hakkımızda
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                İletişim
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full">Giriş Yap</Button>
                </Link>
                <Link to="/register">
                  <Button className="gradient-primary text-white border-0 w-full">
                    Başlayın
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
