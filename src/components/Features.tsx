
import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  Upload, 
  Download, 
  Coins, 
  Shield, 
  Zap, 
  FileText, 
  Brain,
  Users,
  BarChart3,
  Lock,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Gelişmiş AI Modeli",
      description: "En son teknoloji AI modelleri ile doğal dil işleme ve yaratıcı içerik üretimi"
    },
    {
      icon: MessageSquare,
      title: "Akıllı Sohbet",
      description: "Gerçek zamanlı AI sohbet sistemi ile anında yanıtlar ve etkileşim"
    },
    {
      icon: Upload,
      title: "Dosya Yükleme",
      description: "Metin, PDF ve çeşitli formatlarda dosyalarınızı yükleyin ve işletin"
    },
    {
      icon: Download,
      title: "Sonuç İndirme",
      description: "AI'ın işlediği dosyalarınızı istediğiniz formatta indirin"
    },
    {
      icon: Coins,
      title: "Token Sistemi",
      description: "Adil kullanım için token bazlı ödeme sistemi ve esnek paketler"
    },
    {
      icon: Shield,
      title: "Güvenlik",
      description: "End-to-end şifreleme ile verileriniz tamamen güvende"
    },
    {
      icon: FileText,
      title: "Çoklu Format",
      description: "PDF, DOCX, TXT ve daha birçok dosya formatını destekliyoruz"
    },
    {
      icon: Zap,
      title: "Hızlı İşlem",
      description: "Yüksek performanslı sunucularla saniyeler içinde sonuç"
    },
    {
      icon: Users,
      title: "Takım Çalışması",
      description: "Ekibinizle birlikte çalışın ve projeleri paylaşın"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Detaylı kullanım istatistikleri ve analitik raporlar"
    },
    {
      icon: Lock,
      title: "Gizlilik",
      description: "Verileriniz hiçbir zaman üçüncü taraflarla paylaşılmaz"
    },
    {
      icon: Globe,
      title: "24/7 Erişim",
      description: "Dünyanın her yerinden, her zaman platform erişimi"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Güçlü Özellikler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GAGENT platformu, modern AI teknolojileri ile donatılmış kapsamlı 
            özellikleriyle iş akışınızı devrim niteliğinde değiştirecek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-center">
                <div className="gradient-primary p-3 rounded-lg inline-block mb-4 group-hover:animate-pulse">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">50K+</div>
            <div className="text-gray-600">Aktif Kullanıcı</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">1M+</div>
            <div className="text-gray-600">İşlenen Dosya</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">24/7</div>
            <div className="text-gray-600">Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
