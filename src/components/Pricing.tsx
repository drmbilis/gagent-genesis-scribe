
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('starter'),
      price: "Free",
      description: "Perfect for individual use",
      features: [
        "50 AI queries per day",
        "Basic file processing",
        "5 GB storage",
        "Community support",
        "Basic analytics"
      ],
      tokens: "500 tokens/month",
      buttonText: t('getStarted'),
      isPopular: false
    },
    {
      name: t('pro'),
      price: "$29",
      period: "/month",
      description: "Powerful solution for professionals",
      features: [
        "500 AI queries per day",
        "Advanced file processing",
        "50 GB storage",
        "Priority support",
        "Detailed analytics",
        "API access",
        "Team collaboration"
      ],
      tokens: "5,000 tokens/month",
      buttonText: "Go Pro",
      isPopular: true
    },
    {
      name: t('enterprise'),
      price: "$99",
      period: "/month",
      description: "Enterprise solutions",
      features: [
        "Unlimited AI queries",
        "Professional file processing",
        "500 GB storage",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Full API access",
        "Custom integrations",
        "SLA guarantee"
      ],
      tokens: "50,000 tokens/month",
      buttonText: "Get Enterprise",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-gray-950/50 backdrop-blur-sm relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            <span className="gradient-text">{t('pricing')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('choosePlan')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-10 card-hover group border-white/10 bg-gray-900/40 backdrop-blur-sm ${
                plan.isPopular 
                  ? 'ring-2 ring-purple-500 scale-105 shadow-2xl shadow-purple-500/20' 
                  : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-6 py-3 rounded-full text-white text-sm font-bold flex items-center space-x-2 shadow-lg">
                    <Star className="h-4 w-4" />
                    <span>{t('mostPopular')}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-xl">{plan.period}</span>}
                </div>
                <p className="text-gray-300 text-lg">{plan.description}</p>
              </div>

              <div className="gradient-primary text-white p-4 rounded-xl text-center mb-8 group-hover:scale-105 transition-all-smooth">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span className="font-bold text-lg">{plan.tokens}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/auth" className="block">
                <Button 
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all-smooth ${
                    plan.isPopular 
                      ? 'btn-modern gradient-primary text-white border-0 hover:opacity-90 shadow-lg hover:shadow-purple-500/25' 
                      : 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-purple-400 bg-transparent'
                  }`}
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-gray-300 text-lg">
            All plans come with a 30-day free trial period
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400">
            <span className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>No credit card required</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Cancel anytime</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>30-day money-back guarantee</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
