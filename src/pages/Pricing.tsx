
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      tokens: 500,
      price: 9.99,
      popular: false,
      features: [
        '500 AI Tokens',
        'Basic File Upload',
        'Email Support',
        '30 Days Validity'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      tokens: 2500,
      price: 29.99,
      popular: true,
      features: [
        '2,500 AI Tokens',
        'Advanced File Upload',
        'Priority Support',
        '90 Days Validity',
        'API Access'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tokens: 10000,
      price: 99.99,
      popular: false,
      features: [
        '10,000 AI Tokens',
        'Unlimited File Upload',
        '24/7 Support',
        '1 Year Validity',
        'API Access',
        'Custom Integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </Link>
            
            <Link to="/dashboard">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Token Packages</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the token package that fits your needs and work limitlessly with your AI assistant
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`p-8 relative glass-effect border-white/10 hover:border-white/20 transition-all-smooth card-hover ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-2 gradient-text">
                  ${pkg.price}
                </div>
                <p className="text-gray-300">{pkg.tokens.toLocaleString()} Tokens</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/checkout?package=${pkg.id}`} className="block">
                <Button 
                  className={`w-full transition-all-smooth ${pkg.popular ? 'gradient-primary text-white border-0 hover:opacity-90' : 'border border-white/20 text-gray-300 hover:text-white hover:bg-white/10'}`}
                  variant={pkg.popular ? 'default' : 'ghost'}
                >
                  Select Package
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Need more tokens?
          </p>
          <Link to="/contact">
            <Button variant="ghost" className="border border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
