
import { Brain, Mail, Phone, MapPin, Github, Twitter, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="gradient-primary p-3 rounded-xl animate-glow">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold gradient-text">GAGENT</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
              The platform that shapes the future with artificial intelligence technology. 
              Automate your business processes, enhance your creativity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/5">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/5">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-white/5">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">{t('quickLinks')}</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors hover:underline">{t('features')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors hover:underline">{t('pricing')}</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors hover:underline">{t('about')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">{t('contact')}</h3>
            <ul className="space-y-4 text-gray-400 mb-8">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>info@gagent.ai</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>San Francisco, CA</span>
              </li>
            </ul>

            {/* Language Selector */}
            <div className="mb-4">
              <h4 className="font-semibold mb-3 text-white">{t('language')}</h4>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-white/20 text-gray-300 hover:text-white hover:bg-white/10 w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    {language === 'en' ? t('english') : t('turkish')}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900/95 border-gray-700 backdrop-blur-lg w-full">
                  <DropdownMenuItem 
                    onClick={() => setLanguage('en')}
                    className="text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
                  >
                    <span className="mr-2">🇺🇸</span>
                    {t('english')}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setLanguage('tr')}
                    className="text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
                  >
                    <span className="mr-2">🇹🇷</span>
                    {t('turkish')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GAGENT. {t('allRightsReserved')}
            </p>
            <div className="flex space-x-8 text-sm text-gray-400 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors hover:underline">
                {t('privacyPolicy')}
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors hover:underline">
                {t('termsOfService')}
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors hover:underline">
                {t('cookiePolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
