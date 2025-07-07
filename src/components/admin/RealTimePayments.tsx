
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const RealTimePayments = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 9.99,
      tokens: 5000,
      features: ['5,000 AI Tokens', 'Email Support', '30 Days Validity'],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: 29.99,
      tokens: 15000,
      features: ['15,000 AI Tokens', 'Priority Support', '90 Days Validity', 'API Access'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 99.99,
      tokens: 50000,
      features: ['50,000 AI Tokens', '24/7 Support', '1 Year Validity', 'Custom Integrations'],
      popular: false
    }
  ];

  const [userPlan] = useState({
    current: 'pro',
    name: 'Pro Plan',
    price: 29.99,
    tokensRemaining: 8500,
    totalTokens: 15000,
    validUntil: '2024-02-20',
    autoRenew: true
  });

  const [recentTransactions] = useState([
    { id: '1', user: 'john@example.com', plan: 'Pro Plan', amount: 29.99, status: 'completed', date: '2024-01-20 14:30' },
    { id: '2', user: 'jane@example.com', plan: 'Basic Plan', amount: 9.99, status: 'completed', date: '2024-01-20 14:25' },
    { id: '3', user: 'bob@example.com', plan: 'Enterprise Plan', amount: 99.99, status: 'pending', date: '2024-01-20 14:20' },
    { id: '4', user: 'alice@example.com', plan: 'Pro Plan', amount: 29.99, status: 'failed', date: '2024-01-20 14:15' },
  ]);

  const handleCreatePayment = async (planId: string) => {
    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId })
      });
      
      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe checkout
        window.open(data.url, '_blank');
        toast({ title: "Ödeme Sayfası Açıldı", description: "Stripe ödeme sayfasına yönlendiriliyorsunuz." });
      }
    } catch (error) {
      toast({ title: "Ödeme Hatası", description: "Ödeme işlemi başlatılamadı.", variant: "destructive" });
    }
  };

  const handleCancelSubscription = async () => {
    try {
      const response = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        toast({ title: "Abonelik İptal Edildi", description: "Aboneliğiniz başarıyla iptal edildi." });
      }
    } catch (error) {
      toast({ title: "İptal Hatası", description: "Abonelik iptal edilemedi.", variant: "destructive" });
    }
  };

  const handleManageSubscription = () => {
    // Open Stripe customer portal
    window.open('/api/customer-portal', '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Ödeme Yönetimi</h2>
        <Button className="gradient-primary" onClick={handleManageSubscription}>
          <CreditCard className="h-4 w-4 mr-2" />
          Stripe Portal'ı Aç
        </Button>
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="bg-gray-800/50">
          <TabsTrigger value="current">Mevcut Plan</TabsTrigger>
          <TabsTrigger value="upgrade">Plan Yükselt</TabsTrigger>
          <TabsTrigger value="transactions">İşlemler</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          {/* Current Plan */}
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Mevcut Planınız
                <Badge className="bg-blue-500/20 text-blue-400">Aktif</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{userPlan.name}</h3>
                  <p className="text-3xl font-bold text-green-400 mb-4">${userPlan.price}/ay</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Token Limiti:</span>
                      <span className="text-white">{userPlan.totalTokens.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Kalan Token:</span>
                      <span className="text-green-400">{userPlan.tokensRemaining.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Yenileme Tarihi:</span>
                      <span className="text-white">{userPlan.validUntil}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Otomatik Yenileme:</span>
                      <span className={userPlan.autoRenew ? "text-green-400" : "text-red-400"}>
                        {userPlan.autoRenew ? "Aktif" : "Pasif"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800/30 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Token Kullanımı</span>
                      <span className="text-white">
                        {((userPlan.totalTokens - userPlan.tokensRemaining) / userPlan.totalTokens * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${((userPlan.totalTokens - userPlan.tokensRemaining) / userPlan.totalTokens) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full gradient-primary">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Plan Yükselt
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleManageSubscription}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Aboneliği Yönet
                    </Button>
                    <Button variant="outline" className="w-full text-red-400 border-red-400 hover:bg-red-400/10" onClick={handleCancelSubscription}>
                      <XCircle className="h-4 w-4 mr-2" />
                      Aboneliği İptal Et
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upgrade" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`glass-effect border-white/10 hover:border-white/20 transition-all cursor-pointer ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-green-500' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    En Popüler
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-white">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-400">${plan.price}</div>
                  <p className="text-gray-400">aylık</p>
                </CardHeader>
                
                <CardContent>
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-blue-400">{plan.tokens.toLocaleString()}</span>
                    <span className="text-gray-400 ml-2">Token</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.id === userPlan.current ? 'gradient-primary opacity-50' : 'gradient-primary'}`}
                    disabled={plan.id === userPlan.current}
                    onClick={() => handleCreatePayment(plan.id)}
                  >
                    {plan.id === userPlan.current ? 'Mevcut Plan' : 'Planı Seç'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Son İşlemler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-500/20' :
                        transaction.status === 'pending' ? 'bg-yellow-500/20' : 'bg-red-500/20'
                      }`}>
                        {transaction.status === 'completed' ? 
                          <CheckCircle className="h-4 w-4 text-green-400" /> :
                          transaction.status === 'pending' ?
                          <Clock className="h-4 w-4 text-yellow-400" /> :
                          <XCircle className="h-4 w-4 text-red-400" />
                        }
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.user}</p>
                        <p className="text-gray-400 text-sm">{transaction.plan}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-white font-bold">${transaction.amount}</p>
                      <p className="text-gray-400 text-sm">{transaction.date}</p>
                    </div>
                    
                    <Badge className={
                      transaction.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      transaction.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }>
                      {transaction.status === 'completed' ? 'Tamamlandı' :
                       transaction.status === 'pending' ? 'Bekliyor' : 'Başarısız'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RealTimePayments;
