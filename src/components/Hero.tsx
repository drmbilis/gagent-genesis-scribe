
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Yeni Nesil AI Platformu</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">GAGENT</span> ile
            <br />
            Geleceği Keşfedin
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Yapay zeka ile sınırsız yaratıcılık. Prompt'larınızı girin, 
            dosyalarınızı işleyin ve token sistemi ile güvenli ödeme yapın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-lg px-8 py-6">
              Ücretsiz Başlayın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Demo İzleyin
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
              <Zap className="h-8 w-8 gradient-primary rounded-lg p-2 mb-4 mx-auto text-white" />
              <h3 className="font-semibold mb-2">Hızlı AI Yanıtları</h3>
              <p className="text-gray-600 text-sm">Saniyeler içinde AI'dan yaratıcı ve akıllı yanıtlar alın</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
              <Shield className="h-8 w-8 gradient-primary rounded-lg p-2 mb-4 mx-auto text-white" />
              <h3 className="font-semibold mb-2">Güvenli Token Sistemi</h3>
              <p className="text-gray-600 text-sm">Blockchain tabanlı güvenli ödeme ve token yönetimi</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
              <Sparkles className="h-8 w-8 gradient-primary rounded-lg p-2 mb-4 mx-auto text-white" />
              <h3 className="font-semibold mb-2">Dosya İşleme</h3>
              <p className="text-gray-600 text-sm">Metinlerinizi yükleyin, AI ile işleyin ve sonuçları indirin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
