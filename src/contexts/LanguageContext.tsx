
import React, { createContext, useContext, useState } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Dashboard
    'dashboard.welcome': 'Hoş geldin',
    'dashboard.title': 'Dashboard',
    'dashboard.overview': 'Genel Bakış',
    'dashboard.aiServices': 'AI Servisleri',
    'dashboard.tokenManagement': 'Token Yönetimi',
    'dashboard.userPanel': 'Kullanıcı Paneli',
    
    // Payment Management
    'payment.management': 'Ödeme Yönetimi',
    'payment.openStripePortal': 'Stripe Portal\'ı Aç',
    'payment.currentPlan': 'Mevcut Plan',
    'payment.upgradePlan': 'Plan Yükselt',
    'payment.transactions': 'İşlemler',
    'payment.yourCurrentPlan': 'Mevcut Planınız',
    'payment.active': 'Aktif',
    'payment.tokenLimit': 'Token Limiti',
    'payment.remainingTokens': 'Kalan Token',
    'payment.renewalDate': 'Yenileme Tarihi',
    'payment.autoRenewal': 'Otomatik Yenileme',
    'payment.tokenUsage': 'Token Kullanımı',
    'payment.manageSubscription': 'Aboneliği Yönet',
    'payment.cancelSubscription': 'Aboneliği İptal Et',
    'payment.monthlyPayment': '/ay',
    
    // Tokens
    'tokens.remaining': 'Kalan Token',
    'tokens.used': 'Toplam Kullanılan',
    'tokens.monthlyCost': 'Aylık Maliyet',
    'tokens.addTokens': 'Token ekle',
    'tokens.insufficient': 'Yetersiz token',
    'tokens.buy': 'Token satın al',
    
    // AI Services
    'ai.chat': 'AI Sohbet',
    'ai.sendMessage': 'Mesajınızı yazın...',
    'ai.send': 'Gönder',
    'ai.startConversation': 'AI asistanınızla sohbete başlayın...',
    
    // File Management
    'files.management': 'Dosya Yönetimi',
    'files.dragDrop': 'Dosyalarınızı buraya sürükleyin veya seçin',
    'files.selectFile': 'Dosya Seç',
    'files.recentFiles': 'Son Yüklenen Dosyalar',
    
    // Quick Actions
    'quick.actions': 'Hızlı Erişim',
    'quick.billing': 'Faturalandırma',
    
    // Admin
    'admin.panel': 'Admin Panel',
    'admin.notifications': 'Bildirimler',
    'admin.profile': 'Profil',
    'admin.settings': 'Ayarlar',
    'admin.logout': 'Çıkış',
    
    // System Status
    'system.operational': 'Sistem Çalışıyor',
    'system.issues': 'Sorunlar Tespit Edildi',
    
    // Common
    'common.save': 'Kaydet',
    'common.cancel': 'İptal',
    'common.edit': 'Düzenle',
    'common.delete': 'Sil',
    'common.loading': 'Yükleniyor...',
    'common.error': 'Hata',
    'common.success': 'Başarılı',
  },
  en: {
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.title': 'Dashboard',
    'dashboard.overview': 'Overview',
    'dashboard.aiServices': 'AI Services',
    'dashboard.tokenManagement': 'Token Management',
    'dashboard.userPanel': 'User Panel',
    
    // Payment Management
    'payment.management': 'Payment Management',
    'payment.openStripePortal': 'Open Stripe Portal',
    'payment.currentPlan': 'Current Plan',
    'payment.upgradePlan': 'Upgrade Plan',
    'payment.transactions': 'Transactions',
    'payment.yourCurrentPlan': 'Your Current Plan',
    'payment.active': 'Active',
    'payment.tokenLimit': 'Token Limit',
    'payment.remainingTokens': 'Remaining Tokens',
    'payment.renewalDate': 'Renewal Date',
    'payment.autoRenewal': 'Auto Renewal',
    'payment.tokenUsage': 'Token Usage',
    'payment.manageSubscription': 'Manage Subscription',
    'payment.cancelSubscription': 'Cancel Subscription',
    'payment.monthlyPayment': '/month',
    
    // Tokens
    'tokens.remaining': 'Remaining Tokens',
    'tokens.used': 'Total Used',
    'tokens.monthlyCost': 'Monthly Cost',
    'tokens.addTokens': 'Add tokens',
    'tokens.insufficient': 'Insufficient tokens',
    'tokens.buy': 'Buy tokens',
    
    // AI Services
    'ai.chat': 'AI Chat',
    'ai.sendMessage': 'Type your message...',
    'ai.send': 'Send',
    'ai.startConversation': 'Start conversation with your AI assistant...',
    
    // File Management
    'files.management': 'File Management',
    'files.dragDrop': 'Drag your files here or select them',
    'files.selectFile': 'Select File',
    'files.recentFiles': 'Recent Files',
    
    // Quick Actions
    'quick.actions': 'Quick Access',
    'quick.billing': 'Billing',
    
    // Admin
    'admin.panel': 'Admin Panel',
    'admin.notifications': 'Notifications',
    'admin.profile': 'Profile',
    'admin.settings': 'Settings',
    'admin.logout': 'Logout',
    
    // System Status
    'system.operational': 'System Operational',
    'system.issues': 'Issues Detected',
    
    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
