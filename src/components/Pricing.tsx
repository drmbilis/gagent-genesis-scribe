
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
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
      buttonText: "Start Free",
      isPopular: false
    },
    {
      name: "Pro",
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
      name: "Enterprise",
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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that suits your needs and discover the power of GAGENT. 
            All plans come with a 30-day money-back guarantee.
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
                    <span>Most Popular</span>
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

              <Link to="/auth" className="block">
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
              </Link>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            All plans come with a 30-day free trial period
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-500">
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
