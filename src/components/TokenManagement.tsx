
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coins, TrendingUp, AlertTriangle, CreditCard, History, Settings } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface TokenPackage {
  id: string;
  name: string;
  tokens: number;
  price: number;
  popular?: boolean;
  bonus?: number;
}

interface TokenUsage {
  service: string;
  tokens: number;
  cost: number;
  timestamp: string;
  type: 'input' | 'output';
}

const TokenManagement = () => {
  const [currentBalance, setCurrentBalance] = useState(2500);
  const [monthlyUsage, setMonthlyUsage] = useState(1850);
  const [monthlyLimit, setMonthlyLimit] = useState(5000);
  
  const packages: TokenPackage[] = [
    {
      id: 'starter',
      name: 'Starter',
      tokens: 10000,
      price: 9.99,
    },
    {
      id: 'pro',
      name: 'Professional',
      tokens: 50000,
      price: 39.99,
      popular: true,
      bonus: 5000
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tokens: 200000,
      price: 149.99,
      bonus: 30000
    }
  ];

  const recentUsage: TokenUsage[] = [
    {
      service: 'OpenAI GPT-4',
      tokens: 1250,
      cost: 0.75,
      timestamp: '2024-01-15 14:30',
      type: 'output'
    },
    {
      service: 'DeepSeek Chat',
      tokens: 890,
      cost: 0.25,
      timestamp: '2024-01-15 13:15',
      type: 'input'
    },
    {
      service: 'OpenAI GPT-4',
      tokens: 2100,
      cost: 1.26,
      timestamp: '2024-01-15 11:45',
      type: 'output'
    }
  ];

  const handlePurchase = (packageId: string) => {
    const pkg = packages.find(p => p.id === packageId);
    if (pkg) {
      toast({
        title: "Satın Alma Başlatıldı",
        description: `${pkg.name} paketi için ödeme sayfasına yönlendiriliyorsunuz...`,
      });
      // Redirect to payment
    }
  };

  const usagePercentage = (monthlyUsage / monthlyLimit) * 100;
  const balanceStatus = currentBalance < 1000 ? 'low' : currentBalance < 5000 ? 'medium' : 'high';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Token Yönetimi</h2>
          <p className="text-gray-400">Token bakiyenizi yönetin ve kullanımınızı takip edin</p>
        </div>
        <Badge 
          variant="outline" 
          className={`${
            balanceStatus === 'low' ? 'text-red-400 border-red-400' :
            balanceStatus === 'medium' ? 'text-yellow-400 border-yellow-400' :
            'text-green-400 border-green-400'
          }`}
        >
          {balanceStatus === 'low' ? 'Düşük Bakiye' :
           balanceStatus === 'medium' ? 'Orta Bakiye' : 'Yüksek Bakiye'}
        </Badge>
      </div>

      {/* Current Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <Coins className="h-5 w-5 text-yellow-400" />
              <span>Mevcut Bakiye</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">
              {currentBalance.toLocaleString()}
            </div>
            <p className="text-sm text-gray-400">Token</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              <span>Aylık Kullanım</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">
              {monthlyUsage.toLocaleString()}
            </div>
            <Progress value={usagePercentage} className="h-2 mb-2" />
            <p className="text-sm text-gray-400">
              {monthlyLimit.toLocaleString()} limitinden %{usagePercentage.toFixed(1)}
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-green-400" />
              <span>Tahmini Maliyet</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400 mb-2">
              $4.76
            </div>
            <p className="text-sm text-gray-400">Bu ay</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="packages" className="w-full">
        <TabsList className="bg-gray-800/50">
          <TabsTrigger value="packages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            <CreditCard className="h-4 w-4 mr-2" />
            Token Paketleri
          </TabsTrigger>
          <TabsTrigger value="usage" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            <History className="h-4 w-4 mr-2" />
            Kullanım Geçmişi
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            <Settings className="h-4 w-4 mr-2" />
            Ayarlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="packages" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map(pkg => (
              <Card key={pkg.id} className={`glass-effect border-white/10 relative ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    En Popüler
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-white text-center">{pkg.name}</CardTitle>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">${pkg.price}</div>
                    <div className="text-lg text-white">
                      {pkg.tokens.toLocaleString()} Token
                      {pkg.bonus && (
                        <span className="text-green-400 text-sm block">
                          +{pkg.bonus.toLocaleString()} Bonus
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Token başına</span>
                      <span className="text-white">
                        ${(pkg.price / (pkg.tokens + (pkg.bonus || 0))).toFixed(6)}
                      </span>
                    </div>
                    {pkg.bonus && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Bonus</span>
                        <span className="text-green-400">%{((pkg.bonus / pkg.tokens) * 100).toFixed(0)}</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={() => handlePurchase(pkg.id)}
                    className={`w-full ${
                      pkg.popular 
                        ? 'gradient-primary text-white border-0' 
                        : 'border border-white/20 text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    variant={pkg.popular ? 'default' : 'ghost'}
                  >
                    Satın Al
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Son Kullanımlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsage.map((usage, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        usage.type === 'input' ? 'bg-green-400' : 'bg-blue-400'
                      }`} />
                      <div>
                        <p className="text-white font-medium">{usage.service}</p>
                        <p className="text-sm text-gray-400">{usage.timestamp}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{usage.tokens.toLocaleString()} tokens</p>
                      <p className="text-sm text-green-400">${usage.cost.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Token Limitleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Aylık Limit</Label>
                <Input
                  type="number"
                  value={monthlyLimit}
                  onChange={(e) => setMonthlyLimit(parseInt(e.target.value))}
                  className="bg-gray-800/50 border-white/20 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-300">Düşük Bakiye Uyarısı</Label>
                <Input
                  type="number"
                  defaultValue={1000}
                  className="bg-gray-800/50 border-white/20 text-white"
                />
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Önemli Uyarı</span>
                </div>
                <p className="text-sm text-yellow-300 mt-2">
                  Token bakiyeniz düştüğünde AI servisleri otomatik olarak duraklatılır. 
                  Kesintisiz hizmet için bakiyenizi takip edin.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TokenManagement;
