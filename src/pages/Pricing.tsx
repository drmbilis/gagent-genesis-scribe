
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      id: 'starter',
      name: 'Başlangıç',
      tokens: 500,
      price: 9.99,
      popular: false,
      features: [
        '500 AI Token',
        'Temel Dosya Yükleme',
        'E-posta Desteği',
        '30 Gün Geçerlilik'
      ]
    },
    {
      id: 'pro',
      name: 'Profesyonel',
      tokens: 2500,
      price: 29.99,
      popular: true,
      features: [
        '2,500 AI Token',
        'Gelişmiş Dosya Yükleme',
        'Öncelikli Destek',
        '90 Gün Geçerlilik',
        'API Erişimi'
      ]
    },
    {
      id: 'enterprise',
      name: 'Kurumsal',
      tokens: 10000,
      price: 99.99,
      popular: false,
      features: [
        '10,000 AI Token',
        'Sınırsız Dosya Yükleme',
        '7/24 Destek',
        '1 Yıl Geçerlilik',
        'API Erişimi',
        'Özel Entegrasyonlar'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </Link>
            
            <Link to="/dashboard">
              <Button variant="outline">
                Dashboard'a Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Token Paketleri</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun token paketini seçin ve AI asistanınızla limitless çalışın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`p-8 relative ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  <Star className="h-3 w-3 mr-1" />
                  En Popüler
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  ${pkg.price}
                </div>
                <p className="text-gray-600">{pkg.tokens.toLocaleString()} Token</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/checkout?package=${pkg.id}`} className="block">
                <Button 
                  className={`w-full ${pkg.popular ? 'gradient-primary text-white border-0' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Paketi Seç
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Daha fazla token'a mı ihtiyacınız var?
          </p>
          <Link to="/contact">
            <Button variant="outline">
              Bizimle İletişime Geçin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
