
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Settings, 
  Activity,
  CheckCircle,
  XCircle,
  RefreshCw,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const APIIntegrations = () => {
  const [openaiSettings, setOpenaiSettings] = useState({
    enabled: true,
    apiKey: 'sk-proj-...',
    model: 'gpt-4',
    rateLimit: 1000,
    maxTokens: 4000,
    temperature: 0.7
  });

  const [anthropicSettings, setAnthropicSettings] = useState({
    enabled: true,
    apiKey: 'sk-ant-...',
    model: 'claude-3-opus',
    rateLimit: 1000,
    maxTokens: 4000,
    temperature: 0.7
  });

  const [deepseekSettings, setDeepseekSettings] = useState({
    enabled: true,
    apiKey: 'sk-ds-...',
    model: 'deepseek-chat',
    rateLimit: 500,
    maxTokens: 4000,
    temperature: 0.7
  });

  const [apiStats] = useState({
    openai: {
      usage: 45000,
      cost: 450,
      successRate: 99.2,
      avgResponseTime: 450,
      requests: 2847,
      errors: 23,
      monthlyQuota: 100000,
      rateLimit: 1000
    },
    anthropic: {
      usage: 25000,
      cost: 125,
      successRate: 99.2,
      avgResponseTime: 680,
      requests: 1654,
      errors: 13,
      monthlyQuota: 50000,
      rateLimit: 1000
    },
    deepseek: {
      usage: 15000,
      cost: 75,
      successRate: 98.8,
      avgResponseTime: 320,
      requests: 945,
      errors: 11,
      monthlyQuota: 30000,
      rateLimit: 500
    }
  });

  const handleAPITest = async (provider: string, apiKey: string) => {
    try {
      const response = await fetch(`/api/${provider}/test`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey })
      });
      
      if (response.ok) {
        toast({ title: `${provider} Bağlantısı Başarılı`, description: "API anahtarı doğrulandı." });
      } else {
        throw new Error('Connection failed');
      }
    } catch (error) {
      toast({ title: `${provider} Bağlantı Hatası`, description: "API anahtarını kontrol edin.", variant: "destructive" });
    }
  };

  const saveAPISettings = (provider: string, settings: any) => {
    console.log(`Saving ${provider} settings:`, settings);
    toast({ title: "API Ayarları Kaydedildi", description: `${provider} ayarları başarıyla güncellendi.` });
  };

  const APICard = ({ name, icon: Icon, stats, settings, onSettingsChange, onTest, enabled }: any) => (
    <Card className="glass-effect border-white/10">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-white flex items-center">
          <Icon className="h-5 w-5 mr-2" />
          {name}
        </CardTitle>
        <Badge className={enabled ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}>
          {enabled ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
          {enabled ? 'Aktif' : 'Pasif'}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Usage Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold text-white">{stats.usage.toLocaleString()}</div>
            <p className="text-xs text-gray-400">Kullanım</p>
            <Progress value={(stats.usage / stats.monthlyQuota) * 100} className="mt-1 h-2" />
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">${stats.cost}</div>
            <p className="text-xs text-gray-400">Maliyet (Bu ay)</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-gray-800/30 p-2 rounded">
            <div className="text-sm font-semibold text-white">{stats.successRate}%</div>
            <div className="text-xs text-gray-400">Başarı</div>
          </div>
          <div className="bg-gray-800/30 p-2 rounded">
            <div className="text-sm font-semibold text-white">{stats.avgResponseTime}ms</div>
            <div className="text-xs text-gray-400">Süre</div>
          </div>
          <div className="bg-gray-800/30 p-2 rounded">
            <div className="text-sm font-semibold text-white">{stats.rateLimit}/dk</div>
            <div className="text-xs text-gray-400">Limit</div>
          </div>
        </div>

        {/* API Settings */}
        <div className="space-y-3 pt-2 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <Switch 
              checked={settings.enabled}
              onCheckedChange={(checked) => onSettingsChange({...settings, enabled: checked})}
            />
            <Label className="text-gray-300 text-sm">API Aktif</Label>
          </div>

          <div>
            <Label className="text-gray-300 text-xs">API Anahtarı</Label>
            <Input
              type="password"
              value={settings.apiKey}
              onChange={(e) => onSettingsChange({...settings, apiKey: e.target.value})}
              className="bg-gray-800/50 border-white/20 text-white text-sm h-8"
              placeholder="API anahtarını girin..."
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-gray-300 text-xs">Rate Limit</Label>
              <Input
                type="number"
                value={settings.rateLimit}
                onChange={(e) => onSettingsChange({...settings, rateLimit: parseInt(e.target.value)})}
                className="bg-gray-800/50 border-white/20 text-white text-sm h-8"
              />
            </div>
            <div>
              <Label className="text-gray-300 text-xs">Max Tokens</Label>
              <Input
                type="number"
                value={settings.maxTokens}
                onChange={(e) => onSettingsChange({...settings, maxTokens: parseInt(e.target.value)})}
                className="bg-gray-800/50 border-white/20 text-white text-sm h-8"
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <Button size="sm" variant="outline" onClick={() => onTest(name.toLowerCase(), settings.apiKey)} className="flex-1">
              <RefreshCw className="h-3 w-3 mr-1" />
              Test
            </Button>
            <Button size="sm" onClick={() => saveAPISettings(name, settings)} className="gradient-primary flex-1">
              <Settings className="h-3 w-3 mr-1" />
              Kaydet
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">API Entegrasyonları</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Activity className="h-4 w-4 mr-2" />
            Gerçek Zamanlı İzleme
          </Button>
          <Button className="gradient-primary">
            <Brain className="h-4 w-4 mr-2" />
            Yeni Entegrasyon
          </Button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="glass-effect border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Toplam Kullanım</p>
              <p className="text-2xl font-bold text-white">85K</p>
            </div>
            <Zap className="h-8 w-8 text-blue-400" />
          </div>
        </Card>
        
        <Card className="glass-effect border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Toplam Maliyet</p>
              <p className="text-2xl font-bold text-green-400">$650</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-400" />
          </div>
        </Card>
        
        <Card className="glass-effect border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Ortalama Başarı</p>
              <p className="text-2xl font-bold text-blue-400">99.1%</p>
            </div>
            <CheckCircle className="h-8 w-8 text-blue-400" />
          </div>
        </Card>
        
        <Card className="glass-effect border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Ortalama Süre</p>
              <p className="text-2xl font-bold text-purple-400">485ms</p>
            </div>
            <Clock className="h-8 w-8 text-purple-400" />
          </div>
        </Card>
      </div>

      {/* API Integrations */}
      <div className="grid lg:grid-cols-3 gap-6">
        <APICard
          name="OpenAI GPT-4"
          icon={Brain}
          stats={apiStats.openai}
          settings={openaiSettings}
          onSettingsChange={setOpenaiSettings}
          onTest={handleAPITest}
          enabled={openaiSettings.enabled}
        />
        
        <APICard
          name="Anthropic Claude"
          icon={Brain}
          stats={apiStats.anthropic}
          settings={anthropicSettings}
          onSettingsChange={setAnthropicSettings}
          onTest={handleAPITest}
          enabled={anthropicSettings.enabled}
        />
        
        <APICard
          name="DeepSeek"
          icon={Brain}
          stats={apiStats.deepseek}
          settings={deepseekSettings}
          onSettingsChange={setDeepseekSettings}
          onTest={handleAPITest}
          enabled={deepseekSettings.enabled}
        />
      </div>

      {/* Usage Analytics */}
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Kullanım Analitikleri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-800/30 rounded-lg p-4 flex items-center justify-center">
            <div className="text-center">
              <Activity className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-400">Gerçek zamanlı API kullanım grafikleri burada görüntülenecek</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default APIIntegrations;
