
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Settings, Zap, DollarSign, Activity, Key } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface AIServiceConfig {
  id: string;
  name: string;
  enabled: boolean;
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
  pricing: {
    inputCost: number;
    outputCost: number;
    unit: string;
  };
}

interface UsageStats {
  totalTokens: number;
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
  requestCount: number;
  lastUsed: string;
}

const AIServices = () => {
  const [services, setServices] = useState<AIServiceConfig[]>([
    {
      id: 'openai',
      name: 'OpenAI GPT',
      enabled: false,
      apiKey: '',
      model: 'gpt-4o-mini',
      maxTokens: 4000,
      temperature: 0.7,
      pricing: {
        inputCost: 0.00015,
        outputCost: 0.0006,
        unit: '1K tokens'
      }
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      enabled: false,
      apiKey: '',
      model: 'deepseek-chat',
      maxTokens: 4000,
      temperature: 0.7,
      pricing: {
        inputCost: 0.00014,
        outputCost: 0.00028,
        unit: '1K tokens'
      }
    }
  ]);

  const [usageStats, setUsageStats] = useState<Record<string, UsageStats>>({
    openai: {
      totalTokens: 15420,
      inputTokens: 8230,
      outputTokens: 7190,
      totalCost: 2.85,
      requestCount: 45,
      lastUsed: '2024-01-15 14:30'
    },
    deepseek: {
      totalTokens: 12300,
      inputTokens: 6100,
      outputTokens: 6200,
      totalCost: 1.92,
      requestCount: 32,
      lastUsed: '2024-01-15 12:15'
    }
  });

  const [activeService, setActiveService] = useState('openai');

  const handleServiceToggle = (serviceId: string, enabled: boolean) => {
    setServices(prev => 
      prev.map(service => 
        service.id === serviceId ? { ...service, enabled } : service
      )
    );
    
    if (enabled) {
      toast({
        title: "Servis Aktifleştirildi",
        description: `${services.find(s => s.id === serviceId)?.name} servisi aktif edildi.`,
      });
    }
  };

  const handleConfigUpdate = (serviceId: string, field: string, value: any) => {
    setServices(prev => 
      prev.map(service => 
        service.id === serviceId ? { ...service, [field]: value } : service
      )
    );
  };

  const testConnection = async (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service?.apiKey) {
      toast({
        title: "Hata",
        description: "API anahtarı gerekli!",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Bağlantı Test Ediliyor",
      description: `${service.name} bağlantısı kontrol ediliyor...`,
    });

    // Simulate API test
    setTimeout(() => {
      toast({
        title: "Bağlantı Başarılı",
        description: `${service.name} servisi düzgün çalışıyor.`,
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Servisleri</h2>
          <p className="text-gray-400">AI servislerinizi yapılandırın ve kullanımınızı takip edin</p>
        </div>
        <Badge variant="outline" className="text-green-400 border-green-400">
          {services.filter(s => s.enabled).length} Aktif Servis
        </Badge>
      </div>

      <Tabs defaultValue="config" className="w-full">
        <TabsList className="bg-gray-800/50">
          <TabsTrigger value="config" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            <Settings className="h-4 w-4 mr-2" />
            Yapılandırma
          </TabsTrigger>
          <TabsTrigger value="usage" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            <Activity className="h-4 w-4 mr-2" />
            Kullanım İstatistikleri
          </TabsTrigger>
          <TabsTrigger value="pricing" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            <DollarSign className="h-4 w-4 mr-2" />
            Fiyatlandırma
          </TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="space-y-4">
          {services.map(service => (
            <Card key={service.id} className="glass-effect border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-6 w-6 text-blue-400" />
                    <div>
                      <CardTitle className="text-white">{service.name}</CardTitle>
                      <p className="text-sm text-gray-400">Model: {service.model}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={service.enabled ? "default" : "secondary"}>
                      {service.enabled ? "Aktif" : "Pasif"}
                    </Badge>
                    <Switch
                      checked={service.enabled}
                      onCheckedChange={(enabled) => handleServiceToggle(service.id, enabled)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">API Anahtarı</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="password"
                        placeholder="API anahtarınızı girin"
                        value={service.apiKey}
                        onChange={(e) => handleConfigUpdate(service.id, 'apiKey', e.target.value)}
                        className="pl-9 bg-gray-800/50 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">Model</Label>
                    <Input
                      value={service.model}
                      onChange={(e) => handleConfigUpdate(service.id, 'model', e.target.value)}
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">Max Tokens</Label>
                    <Input
                      type="number"
                      value={service.maxTokens}
                      onChange={(e) => handleConfigUpdate(service.id, 'maxTokens', parseInt(e.target.value))}
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">Temperature</Label>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="2"
                      value={service.temperature}
                      onChange={(e) => handleConfigUpdate(service.id, 'temperature', parseFloat(e.target.value))}
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button
                    onClick={() => testConnection(service.id)}
                    disabled={!service.apiKey}
                    className="gradient-primary"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Bağlantıyı Test Et
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => {
              const stats = usageStats[service.id];
              if (!stats) return null;
              
              return (
                <Card key={service.id} className="glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-blue-400" />
                      <span>{service.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Toplam Token</p>
                        <p className="text-2xl font-bold text-white">{stats.totalTokens.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Toplam Maliyet</p>
                        <p className="text-2xl font-bold text-green-400">${stats.totalCost.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Input Tokens</span>
                        <span className="text-white">{stats.inputTokens.toLocaleString()}</span>
                      </div>
                      <Progress value={(stats.inputTokens / stats.totalTokens) * 100} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Output Tokens</span>
                        <span className="text-white">{stats.outputTokens.toLocaleString()}</span>
                      </div>
                      <Progress value={(stats.outputTokens / stats.totalTokens) * 100} className="h-2" />
                    </div>
                    
                    <div className="pt-2 border-t border-white/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">İstek Sayısı</span>
                        <span className="text-white">{stats.requestCount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Son Kullanım</span>
                        <span className="text-white">{stats.lastUsed}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => (
              <Card key={service.id} className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <span>{service.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Input Maliyet</span>
                      <Badge variant="outline" className="text-green-400 border-green-400">
                        ${service.pricing.inputCost} / {service.pricing.unit}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Output Maliyet</span>
                      <Badge variant="outline" className="text-blue-400 border-blue-400">
                        ${service.pricing.outputCost} / {service.pricing.unit}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 p-3 rounded-lg">
                    <p className="text-xs text-gray-400">Örnek maliyet hesaplama:</p>
                    <p className="text-sm text-white">1000 input + 1000 output token</p>
                    <p className="text-lg font-bold text-green-400">
                      ${((service.pricing.inputCost + service.pricing.outputCost)).toFixed(4)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIServices;
