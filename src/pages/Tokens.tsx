
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Zap, CreditCard, History, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Tokens = () => {
  const tokenPackages = [
    { tokens: 1000, price: 29, popular: false },
    { tokens: 5000, price: 99, popular: true },
    { tokens: 10000, price: 179, popular: false },
    { tokens: 25000, price: 399, popular: false }
  ];

  const purchaseHistory = [
    { date: "2024-01-15", tokens: 5000, price: 99, status: "Tamamlandı" },
    { date: "2024-01-10", tokens: 1000, price: 29, status: "Tamamlandı" },
    { date: "2024-01-05", tokens: 2000, price: 49, status: "Tamamlandı" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </div>
            
            <Link to="/dashboard">
              <Button variant="outline">
                Dashboard'a Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Token Yönetimi</h1>
          <p className="text-gray-600">Token bakiyenizi görüntüleyin ve yeni token satın alın</p>
        </div>

        {/* Current Balance */}
        <Card className="p-8 mb-8 gradient-primary text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Mevcut Token Bakiyesi</h2>
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8" />
                <span className="text-4xl font-bold">2,500</span>
                <span className="text-xl">Token</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Son Kullanım</p>
              <p className="text-lg">2024-01-20</p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Token Packages */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Plus className="h-6 w-6 mr-2" />
              Token Paketleri
            </h2>
            <div className="space-y-4">
              {tokenPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`p-6 ${pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''} transition-all duration-300 hover:scale-105`}
                >
                  {pkg.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      En Popüler
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-blue-500" />
                        <span className="text-2xl font-bold">{pkg.tokens.toLocaleString()}</span>
                        <span className="text-gray-600">Token</span>
                      </div>
                      <p className="text-3xl font-bold text-blue-600">₺{pkg.price}</p>
                    </div>
                    <Button 
                      className={pkg.popular ? 'gradient-primary text-white border-0' : 'border border-gray-300'}
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Satın Al
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>Token başına: ₺{(pkg.price / pkg.tokens * 1000).toFixed(3)}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Purchase History */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <History className="h-6 w-6 mr-2" />
              Satın Alma Geçmişi
            </h2>
            <Card className="p-6">
              <div className="space-y-4">
                {purchaseHistory.map((purchase, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Zap className="h-4 w-4 text-blue-500" />
                        <span className="font-semibold">{purchase.tokens.toLocaleString()} Token</span>
                      </div>
                      <p className="text-sm text-gray-600">{purchase.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₺{purchase.price}</p>
                      <span className="text-sm text-green-600">{purchase.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {purchaseHistory.length === 0 && (
                <div className="text-center py-8">
                  <History className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Henüz token satın alımınız yok</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
