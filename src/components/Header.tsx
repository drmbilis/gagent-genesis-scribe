
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import SystemStatus from "./SystemStatus";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        {/* System Status */}
        <SystemStatus />
        
        <div className="flex items-center justify-between mt-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="gradient-primary p-2 rounded-xl animate-glow group-hover:scale-110 transition-all-smooth">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">GAGENT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="nav-link text-gray-300 hover:text-white transition-all-smooth"
            >
              {t('features')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="nav-link text-gray-300 hover:text-white transition-all-smooth"
            >
              {t('pricing')}
            </button>
            <Link to="/about" className="nav-link text-gray-300 hover:text-white transition-all-smooth">
              {t('about')}
            </Link>
            <Link to="/contact" className="nav-link text-gray-300 hover:text-white transition-all-smooth">
              {t('contact')}
            </Link>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900/95 border-gray-700 backdrop-blur-lg">
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  {t('english')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('tr')}
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  {t('turkish')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Auth Buttons */}
            {user ? (
              <Link to="/dashboard">
                <Button className="btn-modern gradient-primary text-white border-0 hover:opacity-90">
                  {t('dashboard')}
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
                    {t('signIn')}
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="btn-modern gradient-primary text-white border-0 hover:opacity-90">
                    {t('getStarted')}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 p-6 glass-effect rounded-xl animate-slide-in-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                {t('features')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                {t('pricing')}
              </button>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              
              {/* Mobile Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                    className="text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'TR' : 'EN'}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleTheme}
                    className="text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full btn-modern gradient-primary text-white border-0">
                      {t('dashboard')}
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
                        {t('signIn')}
                      </Button>
                    </Link>
                    <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full btn-modern gradient-primary text-white border-0">
                        {t('getStarted')}
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
