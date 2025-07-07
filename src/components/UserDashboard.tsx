
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  CreditCard, 
  History, 
  Settings, 
  Key, 
  Users,
  Download,
  Share,
  Star,
  TrendingUp,
  Zap,
  Calendar,
  BarChart3
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const UserDashboard = () => {
  const [currentPlan, setCurrentPlan] = useState({
    name: 'Pro Plan',
    tokensLeft: 8500,
    totalTokens: 10000,
    expiryDate: '2024-02-15',
    price: 29.99
  });

  const [recentUsage] = useState([
    { date: '2024-01-20', service: 'GPT-4', tokens: 1200, cost: 0.024 },
    { date: '2024-01-19', service: 'Claude-3', tokens: 800, cost: 0.016 },
    { date: '2024-01-18', service: 'DALL-E 3', tokens: 400, cost: 0.008 }
  ]);

  const [savedPrompts] = useState([
    { id: 1, title: 'Blog Yazısı Şablonu', category: 'Content', favorite: true },
    { id: 2, title: 'SEO Meta Açıklama', category: 'Marketing', favorite: false },
    { id: 3, title: 'E-posta Yanıtı', category: 'Business', favorite: true }
  ]);

  const [apiKeys] = useState([
    { id: 1, name: 'Production API', key: 'sk-proj-***', created: '2024-01-15', lastUsed: '2024-01-20' },
    { id: 2, name: 'Development API', key: 'sk-test-***', created: '2024-01-10', lastUsed: '2024-01-18' }
  ]);

  const usagePercentage = (currentPlan.tokensLeft / currentPlan.totalTokens) * 100;

  return (
    <div className="space-y-6">
      {/* Ana Durum Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span>Kalan Token</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">
              {currentPlan.tokensLeft.toLocaleString()}
            </div>
            <Progress value={usagePercentage} className="h-2 mb-2" />
            <p className="text-sm text-gray-400">
              {currentPlan.totalTokens.toLocaleString()} toplam
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-400" />
              <span>Aktif Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400 mb-2">
              {currentPlan.name}
            </div>
            <p className="text-sm text-gray-400">
              ${currentPlan.price}/ay
            </p>
            <p className="text-xs text-gray-500">
              Bitiş: {currentPlan.expiryDate}
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <span>Aylık Kullanım</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400 mb-2">
              1,500
            </div>
            <p className="text-sm text-gray-400">token bu ay</p>
          </CardContent>
        </Card>

        <Card className="glass-effect border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-purple-400" />
              <span>Toplam Maliyet</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-400 mb-2">
              $4.76
            </div>
            <p className="text-sm text-gray-400">bu ay</p>
          </CardContent>
        </Card>
      </div>

      {/* Ana İçerik Sekmeleri */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-gray-800/50">
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="ai-services">AI Servisleri</TabsTrigger>
          <TabsTrigger value="api">API Erişimi</TabsTrigger>
          <TabsTrigger value="prompts">Prompt Geçmişi</TabsTrigger>
          <TabsTrigger value="billing">Ödemeler</TabsTrigger>
          <TabsTrigger value="affiliate">Affiliate</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Son Kullanımlar */}
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <History className="h-5 w-5" />
                <span>Son Kullanımlar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsage.map((usage, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Brain className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-white font-medium">{usage.service}</p>
                        <p className="text-sm text-gray-400">{usage.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white">{usage.tokens} token</p>
                      <p className="text-sm text-green-400">${usage.cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Kullanım Grafikleri */}
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Haftalık Kullanım</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-800/30 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Kullanım grafiği burada görünecek</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-services" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">AI Servis Kullanımı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Text Generation</h3>
                  <p className="text-gray-400 text-sm mb-4">GPT-4, Claude, Mistral modelleri</p>
                  <Button className="w-full gradient-primary">
                    <Brain className="h-4 w-4 mr-2" />
                    Prompt Çalıştır
                  </Button>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Image Generation</h3>
                  <p className="text-gray-400 text-sm mb-4">DALL-E, Midjourney, Stable Diffusion</p>
                  <Button className="w-full gradient-primary">
                    <Brain className="h-4 w-4 mr-2" />
                    Görsel Oluştur
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center space-x-2">
                <Key className="h-5 w-5" />
                <span>API Anahtarları</span>
              </CardTitle>
              <Button className="gradient-primary">
                Yeni Anahtar Oluştur
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{key.name}</p>
                      <p className="text-gray-400 text-sm">{key.key}</p>
                      <p className="text-gray-500 text-xs">
                        Oluşturulma: {key.created} | Son kullanım: {key.lastUsed}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400">
                        Kopyala
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400">
                        Sil
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prompts" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Kayıtlı Promptlar</CardTitle>
              <Button className="gradient-primary">
                Yeni Prompt Ekle
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedPrompts.map((prompt) => (
                  <div key={prompt.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {prompt.favorite && <Star className="h-5 w-5 text-yellow-400" />}
                      <div>
                        <p className="text-white font-medium">{prompt.title}</p>
                        <Badge variant="outline" className="mt-1">
                          {prompt.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400">
                        Çalıştır
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Plan Yükseltme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-blue-500 rounded-lg bg-blue-500/10">
                    <h3 className="text-white font-semibold">Pro Plan</h3>
                    <p className="text-gray-400">Mevcut planınız</p>
                    <p className="text-2xl font-bold text-blue-400 mt-2">$29.99/ay</p>
                  </div>
                  <div className="p-4 border border-white/20 rounded-lg">
                    <h3 className="text-white font-semibold">Enterprise Plan</h3>
                    <p className="text-gray-400">Sınırsız kullanım</p>
                    <p className="text-2xl font-bold text-white mt-2">$99.99/ay</p>
                    <Button className="w-full mt-4 gradient-primary">
                      Yükselt
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Fatura Geçmişi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <div>
                      <p className="text-white">Ocak 2024</p>
                      <p className="text-gray-400 text-sm">Pro Plan</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white">$29.99</span>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                    <div>
                      <p className="text-white">Aralık 2023</p>
                      <p className="text-gray-400 text-sm">Pro Plan</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white">$29.99</span>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="affiliate" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Affiliate Programı</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">$124.50</p>
                  <p className="text-gray-400">Toplam Kazanç</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">8</p>
                  <p className="text-gray-400">Referans Sayısı</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">%20</p>
                  <p className="text-gray-400">Komisyon Oranı</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
                <p className="text-white font-medium mb-2">Referans Linkiniz:</p>
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    value="https://gagent.app/ref/ABC123"
                    readOnly
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                  />
                  <Button variant="outline">Kopyala</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
