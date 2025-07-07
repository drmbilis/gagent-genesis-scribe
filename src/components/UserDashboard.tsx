
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Brain, 
  CreditCard, 
  Settings, 
  Key,
  History,
  Share2,
  Copy,
  Download,
  Play,
  Bookmark,
  Star,
  Users,
  DollarSign,
  Calendar,
  MessageSquare,
  FileText,
  Zap,
  TrendingUp,
  Eye,
  BarChart3
} from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [promptText, setPromptText] = useState('');
  
  // Mock user data
  const [userPlan] = useState({
    name: 'Pro Plan',
    tokensRemaining: 8500,
    totalTokens: 15000,
    validUntil: '2024-02-20',
    price: 29.99
  });

  const [recentUsage] = useState([
    { date: '2024-01-20', prompt: 'Blog yazısı oluştur', tokens: 450, model: 'GPT-4' },
    { date: '2024-01-19', prompt: 'Kod review yap', tokens: 320, model: 'Claude' },
    { date: '2024-01-18', prompt: 'E-posta şablonu', tokens: 180, model: 'GPT-3.5' }
  ]);

  const [promptHistory, setPromptHistory] = useState([
    { 
      id: 1, 
      title: 'Blog Post Generator', 
      prompt: 'SEO optimized blog post about AI trends...', 
      model: 'GPT-4', 
      tokens: 450, 
      favorite: true,
      date: '2024-01-20'
    },
    { 
      id: 2, 
      title: 'Code Review', 
      prompt: 'Review this React component for best practices...', 
      model: 'Claude', 
      tokens: 320, 
      favorite: false,
      date: '2024-01-19'
    }
  ]);

  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: 'Production API', key: 'gag-sk-...abcd1234', created: '2024-01-15', lastUsed: '2024-01-20' },
    { id: 2, name: 'Development API', key: 'gag-sk-...efgh5678', created: '2024-01-10', lastUsed: '2024-01-18' }
  ]);

  const [paymentHistory] = useState([
    { date: '2024-01-01', amount: 29.99, plan: 'Pro Plan', status: 'Paid', invoice: 'INV-001' },
    { date: '2023-12-01', amount: 29.99, plan: 'Pro Plan', status: 'Paid', invoice: 'INV-002' }
  ]);

  const [affiliateStats] = useState({
    referralLink: 'https://gagent.app/ref/user123',
    totalReferrals: 12,
    earnings: 145.80,
    pendingPayment: 45.60,
    conversionRate: 8.3
  });

  const handleRunPrompt = () => {
    if (!promptText.trim()) return;
    
    // Simulate API call
    console.log('Running prompt:', promptText);
    console.log('Selected model:', selectedModel);
    
    // Add to history
    const newPrompt = {
      id: promptHistory.length + 1,
      title: promptText.substring(0, 30) + '...',
      prompt: promptText,
      model: selectedModel,
      tokens: Math.floor(Math.random() * 500) + 100,
      favorite: false,
      date: new Date().toISOString().split('T')[0]
    };
    
    setPromptHistory([newPrompt, ...promptHistory]);
    setPromptText('');
  };

  const toggleFavorite = (id) => {
    setPromptHistory(promptHistory.map(p => 
      p.id === id ? { ...p, favorite: !p.favorite } : p
    ));
  };

  const generateApiKey = () => {
    const newKey = {
      id: apiKeys.length + 1,
      name: `API Key ${apiKeys.length + 1}`,
      key: `gag-sk-...${Math.random().toString(36).substr(2, 8)}`,
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never'
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Mevcut Plan</p>
              <p className="text-2xl font-bold text-white">{userPlan.name}</p>
              <p className="text-xs text-blue-400">Geçerli: {userPlan.validUntil}</p>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Kalan Token</p>
              <p className="text-2xl font-bold text-green-400">{userPlan.tokensRemaining.toLocaleString()}</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(userPlan.tokensRemaining / userPlan.totalTokens) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Bu Ay Kullanım</p>
              <p className="text-2xl font-bold text-blue-400">6,500</p>
              <p className="text-xs text-gray-400">Token kullanıldı</p>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Toplam Prompt</p>
              <p className="text-2xl font-bold text-purple-400">142</p>
              <p className="text-xs text-gray-400">Bu ay çalıştırıldı</p>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-800/50 mb-8">
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="ai-services">AI Servisleri</TabsTrigger>
          <TabsTrigger value="api-access">API Erişimi</TabsTrigger>
          <TabsTrigger value="prompt-history">Prompt Geçmişi</TabsTrigger>
          <TabsTrigger value="billing">Ödemeler</TabsTrigger>
          <TabsTrigger value="affiliate">Affiliate</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Usage Chart */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Son 7 Gün Kullanım</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-800/30 rounded-lg p-4">
                  <div className="space-y-3">
                    {recentUsage.map((usage, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-white text-sm">{usage.prompt}</p>
                          <p className="text-gray-400 text-xs">{usage.date} - {usage.model}</p>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-400">{usage.tokens} token</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Hızlı İşlemler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <Brain className="h-4 w-4 mr-2" />
                    Yeni Prompt Çalıştır
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20">
                    <Key className="h-4 w-4 mr-2" />
                    API Anahtarı Oluştur
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Plan Yükselt
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/20">
                    <Users className="h-4 w-4 mr-2" />
                    Arkadaş Davet Et
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AI Services Tab */}
        <TabsContent value="ai-services" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">AI Prompt Studio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Model Seçimi</label>
                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-white/20 rounded-lg text-white"
                  >
                    <option value="gpt-4">GPT-4 (Premium - 10 token/request)</option>
                    <option value="gpt-3.5">GPT-3.5 Turbo (5 token/request)</option>
                    <option value="claude">Claude (8 token/request)</option>
                    <option value="deepseek">DeepSeek (3 token/request)</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Prompt</label>
                  <Textarea
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="AI'ya vereceğiniz görevi buraya yazın..."
                    className="min-h-32 bg-gray-800 border-white/20 text-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Tahmini maliyet: ~{Math.ceil(promptText.length / 4)} token
                  </div>
                  <Button 
                    onClick={handleRunPrompt}
                    disabled={!promptText.trim()}
                    className="gradient-primary"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Çalıştır
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Access Tab */}
        <TabsContent value="api-access" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">API Anahtarları</CardTitle>
              <Button className="gradient-primary" onClick={generateApiKey}>
                <Key className="h-4 w-4 mr-2" />
                Yeni Anahtar Oluştur
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{apiKey.name}</p>
                        <p className="text-gray-400 font-mono text-sm">{apiKey.key}</p>
                        <p className="text-gray-500 text-xs">
                          Oluşturulma: {apiKey.created} | Son kullanım: {apiKey.lastUsed}
                        </p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyToClipboard(apiKey.key)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">API Kullanım İstatistikleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">1,245</p>
                  <p className="text-gray-400 text-sm">Bu ay istek</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">99.2%</p>
                  <p className="text-gray-400 text-sm">Başarı oranı</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">450ms</p>
                  <p className="text-gray-400 text-sm">Ortalama süre</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Prompt History Tab */}
        <TabsContent value="prompt-history" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Prompt Geçmişi</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Sadece Favoriler
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Dışa Aktar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {promptHistory.map((prompt) => (
                  <div key={prompt.id} className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-white font-medium">{prompt.title}</h3>
                          <Badge className="bg-blue-500/20 text-blue-400">{prompt.model}</Badge>
                          <Badge className="bg-gray-500/20 text-gray-400">{prompt.tokens} token</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{prompt.prompt}</p>
                        <p className="text-gray-500 text-xs">{prompt.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => toggleFavorite(prompt.id)}
                          className={prompt.favorite ? 'text-yellow-400' : 'text-gray-400'}
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Mevcut Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{userPlan.name}</h3>
                    <p className="text-3xl font-bold text-green-400">${userPlan.price}/ay</p>
                  </div>
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
                  </div>
                  <Button className="w-full gradient-primary">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Plan Yükselt
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Ödeme Geçmişi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <div>
                        <p className="text-white text-sm">{payment.plan}</p>
                        <p className="text-gray-400 text-xs">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">${payment.amount}</p>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-500/20 text-green-400">{payment.status}</Badge>
                          <Button size="sm" variant="ghost">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Affiliate Tab */}
        <TabsContent value="affiliate" className="space-y-6">
          <Card className="glass-effect border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Affiliate Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">{affiliateStats.totalReferrals}</p>
                  <p className="text-gray-400 text-sm">Toplam Referans</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">${affiliateStats.earnings}</p>
                  <p className="text-gray-400 text-sm">Toplam Kazanç</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-400">${affiliateStats.pendingPayment}</p>
                  <p className="text-gray-400 text-sm">Bekleyen Ödeme</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">{affiliateStats.conversionRate}%</p>
                  <p className="text-gray-400 text-sm">Dönüşüm Oranı</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Referans Linkiniz</label>
                  <div className="flex space-x-2">
                    <Input 
                      value={affiliateStats.referralLink}
                      readOnly
                      className="bg-gray-800 border-white/20 text-white"
                    />
                    <Button 
                      variant="outline"
                      onClick={() => copyToClipboard(affiliateStats.referralLink)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="gradient-primary">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Ödeme Talep Et
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Detaylı Rapor
                  </Button>
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
