
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
    starter: { name: 'Starter', tokens: 500, price: 9.99 },
    pro: { name: 'Professional', tokens: 2500, price: 29.99 },
    enterprise: { name: 'Enterprise', tokens: 10000, price: 99.99 }
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
        title: "Payment Successful!",
        description: `${selectedPackage?.tokens} tokens have been added to your account.`,
      });
      navigate('/payment-success');
    }, 2000);
  };

  if (!selectedPackage) {
    return null;
  }

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
            
            <Link to="/pricing">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Back to Pricing
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 gradient-text">Checkout</h1>
            <p className="text-gray-300">Secure payment to purchase tokens</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="p-6 glass-effect border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">{selectedPackage.name} Package</span>
                  <span className="text-white">${selectedPackage.price}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{selectedPackage.tokens.toLocaleString()} Tokens</span>
                </div>
                
                <hr className="border-white/20" />
                
                <div className="flex justify-between items-center font-semibold text-lg">
                  <span className="text-white">Total</span>
                  <span className="text-white">${selectedPackage.price}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-green-300">
                    Secure payment with 256-bit SSL
                  </span>
                </div>
              </div>
            </Card>

            {/* Payment Form */}
            <Card className="p-6 glass-effect border-white/10">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Cardholder Name
                  </label>
                  <Input
                    name="cardholderName"
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-300">
                    Card Number
                  </label>
                  <Input
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    maxLength={19}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      Expiry Date
                    </label>
                    <Input
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                      maxLength={5}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-300">
                      CVV
                    </label>
                    <Input
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white border-0 mt-6 hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Pay $${selectedPackage.price}`}
                </Button>
              </form>

              <p className="text-xs text-gray-400 mt-4 text-center">
                By making payment, you agree to our terms of service.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
