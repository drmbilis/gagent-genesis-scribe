
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Brain, CreditCard, Shield } from 'lucide-react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const packageId = searchParams.get('package');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const packages = {
    starter: { name: 'Başlangıç', tokens: 500, price: 9.99 },
    pro: { name: 'Profesyonel', tokens: 2500, price: 29.99 },
    enterprise: { name: 'Kurumsal', tokens: 10000, price: 99.99 }
  };

  const selectedPackage = packageId ? packages[packageId as keyof typeof packages] : null;

  useEffect(() => {
    if (!selectedPackage) {
      navigate('/pricing');
    }
  }, [selectedPackage, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Ödeme Başarılı!",
        description: `${selectedPackage?.tokens} token hesabınıza eklendi.`,
      });
      navigate('/payment-success');
    }, 2000);
  };

  if (!selectedPackage) {
    return null;
  }

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
            
            <Link to="/pricing">
              <Button variant="outline">
                Geri Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Ödeme</h1>
            <p className="text-gray-600">Güvenli ödeme ile token satın alın</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{selectedPackage.name} Paketi</span>
                  <span>${selectedPackage.price}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{selectedPackage.tokens.toLocaleString()} Token</span>
                </div>
                
                <hr />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span>Toplam</span>
                  <span>${selectedPackage.price}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-green-800">
                    256-bit SSL ile güvenli ödeme
                  </span>
                </div>
              </div>
            </Card>

            {/* Payment Form */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Ödeme Bilgileri
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Kart Sahibinin Adı
                  </label>
                  <Input
                    name="cardholderName"
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Kart Numarası
                  </label>
                  <Input
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength={19}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Son Kullanma
                    </label>
                    <Input
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      maxLength={5}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      CVV
                    </label>
                    <Input
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength={3}
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white border-0 mt-6"
                  disabled={loading}
                >
                  {loading ? 'İşleniyor...' : `$${selectedPackage.price} Öde`}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Ödeme yaparak hizmet şartlarını kabul etmiş olursunuz.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
