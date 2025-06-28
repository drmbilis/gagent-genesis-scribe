
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
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Model",
      description: "Natural language processing and creative content generation with latest AI technology"
    },
    {
      icon: MessageSquare,
      title: "Smart Chat",
      description: "Real-time AI chat system with instant responses and interaction"
    },
    {
      icon: Upload,
      title: "File Upload",
      description: "Upload and process your files in text, PDF and various formats"
    },
    {
      icon: Download,
      title: "Result Download",
      description: "Download AI-processed files in your desired format"
    },
    {
      icon: Coins,
      title: "Token System",
      description: "Token-based payment system and flexible packages for fair usage"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your data is completely safe with end-to-end encryption"
    },
    {
      icon: FileText,
      title: "Multiple Formats",
      description: "We support PDF, DOCX, TXT and many more file formats"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Results in seconds with high-performance servers"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with your team and share projects together"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Detailed usage statistics and analytical reports"
    },
    {
      icon: Lock,
      title: "Privacy",
      description: "Your data is never shared with third parties"
    },
    {
      icon: Globe,
      title: "24/7 Access",
      description: "Platform access anytime, anywhere in the world"
    }
  ];

  return (
    <section id="features" className="py-32 bg-gray-900/50 backdrop-blur-sm relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            <span className="gradient-text">{t('powerfulFeatures')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('featuresDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-effect p-8 card-hover group border-white/10 bg-gray-900/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="gradient-primary p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 group-hover:animate-pulse transition-all-smooth">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-4 text-white group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid md:grid-cols-4 gap-12 text-center">
          {[
            { number: "50K+", label: t('activeUsers') },
            { number: "1M+", label: t('filesProcessed') },
            { number: "99.9%", label: t('uptime') },
            { number: "24/7", label: t('support') }
          ].map((stat, index) => (
            <div key={index} className="space-y-4 group">
              <div className="text-5xl md:text-6xl font-bold gradient-text group-hover:scale-110 transition-all-smooth">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
