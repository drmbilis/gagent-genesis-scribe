
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Başlangıç",
      price: "Ücretsiz",
      description: "Bireysel kullanım için ideal",
      features: [
        "Günlük 50 AI sorgusu",
        "Temel dosya işleme",
        "5 GB depolama",
        "Topluluk desteği",
        "Temel analitik"
      ],
      tokens: "500 token/ay",
      buttonText: "Ücretsiz Başla",
      isPopular: false
    },
    {
      name: "Pro",
      price: "₺99",
      period: "/ay",
      description: "Profesyoneller için güçlü çözüm",
      features: [
        "Günlük 500 AI sorgusu",
        "Gelişmiş dosya işleme",
        "50 GB depolama",
        "Öncelikli destek",
        "Detaylı analitik",
        "API erişimi",
        "Takım işbirliği"
      ],
      tokens: "5,000 token/ay",
      buttonText: "Pro'ya Geç",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "₺299",
      period: "/ay",
      description: "Kurumsal çözümler",
      features: [
        "Sınırsız AI sorgusu",
        "Profesyonel dosya işleme",
        "500 GB depolama",
        "7/24 özel destek",
        "Kurumsal analitik",
        "Full API erişimi",
        "Özel entegre",
        "SLA garantisi"
      ],
      tokens: "50,000 token/ay",
      buttonText: "Enterprise Al",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Fiyatlandırma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyacınıza uygun planı seçin ve GAGENT'ın gücünü keşfedin. 
            Tüm planlar 30 gün para iade garantisi ile gelir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.isPopular 
                  ? 'ring-2 ring-blue-500 scale-105 shadow-2xl' 
                  : 'hover:scale-105'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>En Popüler</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="gradient-primary text-white p-3 rounded-lg text-center mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span className="font-medium">{plan.tokens}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 ${
                  plan.isPopular 
                    ? 'gradient-primary text-white border-0 hover:opacity-90' 
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
                variant={plan.isPopular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            Tüm planlar 30 gün ücretsiz deneme süresi ile gelir
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-500">
            <span>✓ Kredi kartı gerekmez</span>
            <span>✓ İstediğiniz zaman iptal edin</span>
            <span>✓ 30 gün para iade garantisi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
