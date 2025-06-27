
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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GAGENT platform will revolutionize your workflow with comprehensive 
            features equipped with modern AI technologies
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
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">1M+</div>
            <div className="text-gray-600">Files Processed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
