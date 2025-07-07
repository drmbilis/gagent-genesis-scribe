
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  DollarSign, 
  Settings, 
  TrendingUp, 
  Activity,
  CheckCircle,
  XCircle,
  RefreshCw
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const PaymentIntegrations = () => {
  const [stripeSettings, setStripeSettings] = useState({
    enabled: true,
    publicKey: 'pk_live_...',
    secretKey: 'sk_live_...',
    webhookSecret: 'whsec_...',
    currency: 'USD'
  });

  const [paypalSettings, setPaypalSettings] = useState({
    enabled: true,
    clientId: 'AX...',
    clientSecret: 'EH...',
    environment: 'live',
    currency: 'USD'
  });

  const [cryptoSettings, setCryptoSettings] = useState({
    enabled: false,
    bitcoinAddress: '',
    ethereumAddress: '',
    acceptedCoins: ['BTC', 'ETH', 'USDT']
  });

  const [paymentStats] = useState({
    stripe: {
      thisMonth: { transactions: 456, volume: 42150 },
      lastMonth: { transactions: 398, volume: 38920 },
      successRate: 98.5,
      avgProcessingTime: '2.1s'
    },
    paypal: {
      thisMonth: { transactions: 123, volume: 8750 },
      lastMonth: { transactions: 156, volume: 9240 },
      successRate: 97.2,
      avgProcessingTime: '3.4s'
    },
    crypto: {
      thisMonth: { transactions: 45, volume: 12300 },
      lastMonth: { transactions: 32, volume: 8950 },
      successRate: 99.8,
      avgProcessingTime: '15m'
    }
  });

  const handleStripeTest = async () => {
    try {
      // Test Stripe connection
      const response = await fetch('/api/stripe/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secretKey: stripeSettings.secretKey })
      });
      
      if (response.ok) {
        toast({ title: "Stripe Bağlantısı Başarılı", description: "API anahtarları doğrulandı." });
      } else {
        throw new Error('Connection failed');
      }
    } catch (error) {
      toast({ title: "Stripe Bağlantı Hatası", description: "API anahtarları kontrol edin.", variant: "destructive" });
    }
  };

  const handlePayPalTest = async () => {
    try {
      // Test PayPal connection
      const response = await fetch('/api/paypal/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          clientId: paypalSettings.clientId,
          clientSecret: paypalSettings.clientSecret,
          environment: paypalSettings.environment
        })
      });
      
      if (response.ok) {
        toast({ title: "PayPal Bağlantısı Başarılı", description: "Kimlik bilgileri doğrulandı." });
      } else {
        throw new Error('Connection failed');
      }
    } catch (error) {
      toast({ title: "PayPal Bağlantı Hatası", description: "Kimlik bilgilerini kontrol edin.", variant: "destructive" });
    }
  };

  const saveSettings = (provider: string, settings: any) => {
    // Save settings to backend
    console.log(`Saving ${provider} settings:`, settings);
    toast({ title: "Ayarlar Kaydedildi", description: `${provider} ayarları başarıyla güncellendi.` });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Ödeme Entegrasyonları</h2>
        <Button className="gradient-primary">
          <Activity className="h-4 w-4 mr-2" />
          Gerçek Zamanlı İstatistikler
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-gray-800/50">
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="stripe">Stripe</TabsTrigger>
          <TabsTrigger value="paypal">PayPal</TabsTrigger>
          <TabsTrigger value="crypto">Kripto Para</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Stripe Overview */}
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Stripe</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Aktif
                  </Badge>
                  <CreditCard className="h-4 w-4 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{paymentStats.stripe.thisMonth.transactions}</div>
                <p className="text-xs text-gray-400">Bu ay işlemler</p>
                <div className="text-lg font-semibold text-green-400 mt-2">
                  ${paymentStats.stripe.thisMonth.volume.toLocaleString()}
                </div>
                <p className="text-xs text-gray-400">Toplam hacim</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500">Başarı: {paymentStats.stripe.successRate}%</span>
                  <Button size="sm" variant="outline" onClick={handleStripeTest}>
                    <Settings className="h-3 w-3 mr-1" />
                    Test
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PayPal Overview */}
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">PayPal</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Aktif
                  </Badge>
                  <DollarSign className="h-4 w-4 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{paymentStats.paypal.thisMonth.transactions}</div>
                <p className="text-xs text-gray-400">Bu ay işlemler</p>
                <div className="text-lg font-semibold text-green-400 mt-2">
                  ${paymentStats.paypal.thisMonth.volume.toLocaleString()}
                </div>
                <p className="text-xs text-gray-400">Toplam hacim</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500">Başarı: {paymentStats.paypal.successRate}%</span>
                  <Button size="sm" variant="outline" onClick={handlePayPalTest}>
                    <Settings className="h-3 w-3 mr-1" />
                    Test
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Crypto Overview */}
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Kripto Para</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-yellow-500/20 text-yellow-400">
                    <XCircle className="w-3 h-3 mr-1" />
                    Pasif
                  </Badge>
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{paymentStats.crypto.thisMonth.transactions}</div>
                <p className="text-xs text-gray-400">Bu ay işlemler</p>
                <div className="text-lg font-semibold text-green-400 mt-2">
                  ${paymentStats.crypto.thisMonth.volume.toLocaleString()}
                </div>
                <p className="text-xs text-gray-400">Toplam hacim</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500">Başarı: {paymentStats.crypto.successRate}%</span>
                  <Button size="sm" variant="outline">
                    <Settings className="h-3 w-3 mr-1" />
                    Ayarla
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stripe" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Stripe Yapılandırması</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={stripeSettings.enabled}
                  onCheckedChange={(checked) => setStripeSettings({...stripeSettings, enabled: checked})}
                />
                <Label className="text-gray-300">Stripe Entegrasyonunu Aktif Et</Label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Public Key</Label>
                  <Input
                    value={stripeSettings.publicKey}
                    onChange={(e) => setStripeSettings({...stripeSettings, publicKey: e.target.value})}
                    className="bg-gray-800 border-white/20 text-white"
                    placeholder="pk_live_..."
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Secret Key</Label>
                  <Input
                    type="password"
                    value={stripeSettings.secretKey}
                    onChange={(e) => setStripeSettings({...stripeSettings, secretKey: e.target.value})}
                    className="bg-gray-800 border-white/20 text-white"
                    placeholder="sk_live_..."
                  />
                </div>
              </div>

              <div>
                <Label className="text-gray-300">Webhook Secret</Label>
                <Input
                  type="password"
                  value={stripeSettings.webhookSecret}
                  onChange={(e) => setStripeSettings({...stripeSettings, webhookSecret: e.target.value})}
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="whsec_..."
                />
              </div>

              <div className="flex space-x-4">
                <Button onClick={handleStripeTest} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Bağlantıyı Test Et
                </Button>
                <Button onClick={() => saveSettings('Stripe', stripeSettings)} className="gradient-primary">
                  Ayarları Kaydet
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paypal" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">PayPal Yapılandırması</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={paypalSettings.enabled}
                  onCheckedChange={(checked) => setPaypalSettings({...paypalSettings, enabled: checked})}
                />
                <Label className="text-gray-300">PayPal Entegrasyonunu Aktif Et</Label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Client ID</Label>
                  <Input
                    value={paypalSettings.clientId}
                    onChange={(e) => setPaypalSettings({...paypalSettings, clientId: e.target.value})}
                    className="bg-gray-800 border-white/20 text-white"
                    placeholder="AX..."
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Client Secret</Label>
                  <Input
                    type="password"
                    value={paypalSettings.clientSecret}
                    onChange={(e) => setPaypalSettings({...paypalSettings, clientSecret: e.target.value})}
                    className="bg-gray-800 border-white/20 text-white"
                    placeholder="EH..."
                  />
                </div>
              </div>

              <div>
                <Label className="text-gray-300">Ortam</Label>
                <select 
                  value={paypalSettings.environment}
                  onChange={(e) => setPaypalSettings({...paypalSettings, environment: e.target.value})}
                  className="w-full p-2 bg-gray-800 border border-white/20 rounded-lg text-white"
                >
                  <option value="sandbox">Sandbox (Test)</option>
                  <option value="live">Live (Canlı)</option>
                </select>
              </div>

              <div className="flex space-x-4">
                <Button onClick={handlePayPalTest} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Bağlantıyı Test Et
                </Button>
                <Button onClick={() => saveSettings('PayPal', paypalSettings)} className="gradient-primary">
                  Ayarları Kaydet
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crypto" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Kripto Para Yapılandırması</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={cryptoSettings.enabled}
                  onCheckedChange={(checked) => setCryptoSettings({...cryptoSettings, enabled: checked})}
                />
                <Label className="text-gray-300">Kripto Para Ödemelerini Aktif Et</Label>
              </div>

              <div>
                <Label className="text-gray-300">Bitcoin Cüzdan Adresi</Label>
                <Input
                  value={cryptoSettings.bitcoinAddress}
                  onChange={(e) => setCryptoSettings({...cryptoSettings, bitcoinAddress: e.target.value})}
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="bc1..."
                />
              </div>

              <div>
                <Label className="text-gray-300">Ethereum Cüzdan Adresi</Label>
                <Input
                  value={cryptoSettings.ethereumAddress}
                  onChange={(e) => setCryptoSettings({...cryptoSettings, ethereumAddress: e.target.value})}
                  className="bg-gray-800 border-white/20 text-white"
                  placeholder="0x..."
                />
              </div>

              <div className="flex space-x-4">
                <Button onClick={() => saveSettings('Crypto', cryptoSettings)} className="gradient-primary">
                  Ayarları Kaydet
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentIntegrations;
