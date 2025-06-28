
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Play, Stars } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-grid-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-primary rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8 animate-slide-in-up">
            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
            <span className="text-purple-200 font-medium">{t('nextGenAI')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-in-up">
            <span className="block text-white mb-4">{t('discoverFuture')}</span>
            <span className="gradient-text animate-glow">GAGENT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
            {t('unlimitedCreativity')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16 animate-slide-in-up">
            <Link to="/auth">
              <Button size="lg" className="btn-modern gradient-primary text-white border-0 hover:opacity-90 text-lg px-10 py-6 rounded-full group">
                {t('getStartedFree')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm group">
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t('watchDemo')}
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-in-up">
            <div className="glass-effect p-8 rounded-2xl card-hover group">
              <div className="gradient-primary p-4 rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-all-smooth">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{t('fastAI')}</h3>
              <p className="text-gray-300 leading-relaxed">{t('fastAIDesc')}</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl card-hover group">
              <div className="gradient-primary p-4 rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-all-smooth">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{t('secureToken')}</h3>
              <p className="text-gray-300 leading-relaxed">{t('secureTokenDesc')}</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl card-hover group">
              <div className="gradient-primary p-4 rounded-2xl mb-6 mx-auto w-fit group-hover:scale-110 transition-all-smooth">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-white">{t('fileProcessing')}</h3>
              <p className="text-gray-300 leading-relaxed">{t('fileProcessingDesc')}</p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 hidden lg:block">
            <Stars className="h-6 w-6 text-purple-400 animate-pulse opacity-60" />
          </div>
          <div className="absolute bottom-40 left-20 hidden lg:block">
            <Stars className="h-4 w-4 text-blue-400 animate-pulse opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
