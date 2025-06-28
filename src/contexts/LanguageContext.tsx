
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    en: string;
    tr: string;
  };
}

const translations: Translations = {
  // Header
  features: { en: 'Features', tr: 'Özellikler' },
  pricing: { en: 'Pricing', tr: 'Fiyatlandırma' },
  about: { en: 'About', tr: 'Hakkımızda' },
  contact: { en: 'Contact', tr: 'İletişim' },
  signIn: { en: 'Sign In', tr: 'Giriş Yap' },
  getStarted: { en: 'Get Started', tr: 'Başlayın' },
  dashboard: { en: 'Dashboard', tr: 'Dashboard' },
  
  // Hero Section
  nextGenAI: { en: 'Next Generation AI Platform', tr: 'Yeni Nesil AI Platformu' },
  discoverFuture: { en: 'Discover the Future with', tr: 'Geleceği Keşfedin' },
  unlimitedCreativity: { en: 'Unlimited creativity with artificial intelligence. Enter your prompts, process your files and make secure payments with token system.', tr: 'Yapay zeka ile sınırsız yaratıcılık. Promptlarınızı girin, dosyalarınızı işleyin ve token sistemi ile güvenli ödemeler yapın.' },
  getStartedFree: { en: 'Get Started Free', tr: 'Ücretsiz Başlayın' },
  watchDemo: { en: 'Watch Demo', tr: 'Demo İzle' },
  
  // Features
  fastAI: { en: 'Fast AI Responses', tr: 'Hızlı AI Yanıtları' },
  fastAIDesc: { en: 'Get creative and intelligent responses from AI in seconds', tr: 'Saniyeler içinde AI\'dan yaratıcı ve akıllı yanıtlar alın' },
  secureToken: { en: 'Secure Token System', tr: 'Güvenli Token Sistemi' },
  secureTokenDesc: { en: 'Blockchain-based secure payment and token management', tr: 'Blockchain tabanlı güvenli ödeme ve token yönetimi' },
  fileProcessing: { en: 'File Processing', tr: 'Dosya İşleme' },
  fileProcessingDesc: { en: 'Upload your texts, process with AI and download results', tr: 'Metinlerinizi yükleyin, AI ile işleyin ve sonuçları indirin' },
  powerfulFeatures: { en: 'Powerful Features', tr: 'Güçlü Özellikler' },
  featuresDesc: { en: 'GAGENT platform will revolutionize your workflow with comprehensive features equipped with modern AI technologies', tr: 'GAGENT platformu modern AI teknolojileri ile donatılmış kapsamlı özelliklerle iş akışınızı devrim niteliğinde değiştirecek' },
  
  // Stats
  activeUsers: { en: 'Active Users', tr: 'Aktif Kullanıcı' },
  filesProcessed: { en: 'Files Processed', tr: 'İşlenen Dosya' },
  uptime: { en: 'Uptime', tr: 'Çalışma Süresi' },
  support: { en: 'Support', tr: 'Destek' },
  
  // Pricing
  choosePlan: { en: 'Choose the plan that suits your needs and discover the power of GAGENT. All plans come with a 30-day money-back guarantee.', tr: 'İhtiyaçlarınıza uygun planı seçin ve GAGENT\'ın gücünü keşfedin. Tüm planlar 30 günlük para iade garantisi ile gelir.' },
  starter: { en: 'Starter', tr: 'Başlangıç' },
  pro: { en: 'Pro', tr: 'Pro' },
  enterprise: { en: 'Enterprise', tr: 'Kurumsal' },
  mostPopular: { en: 'Most Popular', tr: 'En Popüler' },
  
  // Footer
  quickLinks: { en: 'Quick Links', tr: 'Hızlı Bağlantılar' },
  allRightsReserved: { en: 'All rights reserved.', tr: 'Tüm hakları saklıdır.' },
  privacyPolicy: { en: 'Privacy Policy', tr: 'Gizlilik Politikası' },
  termsOfService: { en: 'Terms of Service', tr: 'Hizmet Şartları' },
  cookiePolicy: { en: 'Cookie Policy', tr: 'Çerez Politikası' },
  language: { en: 'Language', tr: 'Dil' },
  english: { en: 'English', tr: 'İngilizce' },
  turkish: { en: 'Turkish', tr: 'Türkçe' }
};

interface LanguageContextType {
  language: 'en' | 'tr';
  setLanguage: (lang: 'en' | 'tr') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'tr'>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
