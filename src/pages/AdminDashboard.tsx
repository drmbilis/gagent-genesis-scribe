
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Users, 
  CreditCard, 
  Settings, 
  BarChart3,
  Package,
  UserCheck,
  TrendingUp,
  DollarSign,
  Activity,
  Key,
  Mail,
  Shield,
  Zap,
  FileText,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const [stats] = useState({
    dailyActiveUsers: 245,
    totalTokensUsed: 1250000,
    totalRevenue: 15420.50,
    activeSubscriptions: 189
  });

  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', tokens: 8500, lastLogin: '2024-01-20', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Enterprise', tokens: 25000, lastLogin: '2024-01-19', status: 'active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', plan: 'Basic', tokens: 2000, lastLogin: '2024-01-18', status: 'suspended' }
  ]);

  const [packages] = useState([
    { id: 1, name: 'Basic', price: 9.99, tokens: 5000, users: 45, status: 'active' },
    { id: 2, name: 'Pro', price: 29.99, tokens: 15000, users: 120, status: 'active' },
    { id: 3, name: 'Enterprise', price: 99.99, tokens: 50000, users: 24, status: 'active' }
  ]);

  const [apiIntegrations] = useState([
    { id: 1, name: 'OpenAI GPT-4', status: 'active', usage: 45000, cost: 450.00 },
    { id: 2, name: 'Anthropic Claude', status: 'active', usage: 25000, cost: 125.00 },
    { id: 3, name: 'DeepSeek', status: 'active', usage: 15000, cost: 75.00 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
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
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                Admin Panel
              </Badge>
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Kullanıcı Paneli
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Admin Dashboard</h1>
          <p className="text-gray-300 text-lg">Sistem yönetimi ve kontrolü</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-gray-800/50 mb-8 flex-wrap">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Users className="h-4 w-4 mr-2" />
              Kullanıcılar
            </TabsTrigger>
            <TabsTrigger value="packages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Package className="h-4 w-4 mr-2" />
              Paketler
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <CreditCard className="h-4 w-4 mr-2" />
              Ödemeler
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Key className="h-4 w-4 mr-2" />
              Entegrasyonlar
            </TabsTrigger>
            <TabsTrigger value="affiliate" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <UserCheck className="h-4 w-4 mr-2" />
              Affiliate
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Settings className="h-4 w-4 mr-2" />
              Sistem
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Genel Bakış */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Ana İstatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-green-400" />
                    <span>Günlük Aktif Kullanıcı</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">{stats.dailyActiveUsers}</div>
                  <p className="text-sm text-gray-400">+12% önceki güne göre</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span>Toplam Token Kullanımı</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-400">{stats.totalTokensUsed.toLocaleString()}</div>
                  <p className="text-sm text-gray-400">Bu ay</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <span>Toplam Gelir</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">${stats.totalRevenue.toLocaleString()}</div>
                  <p className="text-sm text-gray-400">Bu ay</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <UserCheck className="h-5 w-5 text-blue-400" />
                    <span>Aktif Abonelik</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-400">{stats.activeSubscriptions}</div>
                  <p className="text-sm text-gray-400">Toplam kullanıcı</p>
                </CardContent>
              </Card>
            </div>

            {/* Grafikler ve Detaylar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">API Kullanım Trafiği</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-800/30 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">API kullanım grafiği</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">En Çok Kullanılan Modeller</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiIntegrations.map((api) => (
                      <div key={api.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{api.name}</p>
                          <p className="text-gray-400 text-sm">{api.usage.toLocaleString()} token</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400">${api.cost}</p>
                          <Badge className={api.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {api.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Kullanıcı Yönetimi */}
          <TabsContent value="users" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Kullanıcı Listesi</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Ara
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrele
                  </Button>
                  <Button className="gradient-primary" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Yeni Kullanıcı
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4">Kullanıcı</th>
                        <th className="text-left p-4">Plan</th>
                        <th className="text-left p-4">Kalan Token</th>
                        <th className="text-left p-4">Son Giriş</th>
                        <th className="text-left p-4">Durum</th>
                        <th className="text-left p-4">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-white/5">
                          <td className="p-4">
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-400">{user.email}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge>{user.plan}</Badge>
                          </td>
                          <td className="p-4">{user.tokens.toLocaleString()}</td>
                          <td className="p-4 text-gray-400">{user.lastLogin}</td>
                          <td className="p-4">
                            <Badge className={user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-400">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Paket Yönetimi */}
          <TabsContent value="packages" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Abonelik Paketleri</CardTitle>
                <Button className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Yeni Paket Oluştur
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <Card key={pkg.id} className="glass-effect border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center justify-between">
                          {pkg.name}
                          <Badge className={pkg.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {pkg.status}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-3xl font-bold text-blue-400">${pkg.price}</p>
                            <p className="text-gray-400">aylık</p>
                          </div>
                          <div>
                            <p className="text-white">{pkg.tokens.toLocaleString()} Token</p>
                            <p className="text-gray-400">{pkg.users} aktif kullanıcı</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              Düzenle
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-400">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ödeme ve Faturalandırma */}
          <TabsContent value="billing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Ödeme İstatistikleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bu ay toplam gelir:</span>
                      <span className="text-green-400 font-bold">${stats.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Aktif abonelikler:</span>
                      <span className="text-white font-bold">{stats.activeSubscriptions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Başarılı ödeme oranı:</span>
                      <span className="text-green-400 font-bold">98.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Son Ödemeler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <div>
                        <p className="text-white">John Doe - Pro Plan</p>
                        <p className="text-gray-400 text-sm">2024-01-20</p>
                      </div>
                      <span className="text-green-400">$29.99</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                      <div>
                        <p className="text-white">Jane Smith - Enterprise</p>
                        <p className="text-gray-400 text-sm">2024-01-19</p>
                      </div>
                      <span className="text-green-400">$99.99</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Entegrasyon Yönetimi */}
          <TabsContent value="integrations" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">API Entegrasyonları</CardTitle>
                <Button className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Yeni Entegrasyon
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apiIntegrations.map((integration) => (
                    <Card key={integration.id} className="glass-effect border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                              <Brain className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{integration.name}</h3>
                              <p className="text-gray-400">API Entegrasyonu</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">{integration.usage.toLocaleString()} kullanım</p>
                            <p className="text-green-400">${integration.cost} maliyet</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={integration.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                              {integration.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              Ayarlar
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Affiliate Yönetimi */}
          <TabsContent value="affiliate" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Affiliate İstatistikleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-400">$2,450</p>
                      <p className="text-gray-400">Toplam komisyon ödemesi</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-blue-400">45</p>
                        <p className="text-gray-400 text-sm">Aktif Affiliate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-purple-400">%15</p>
                        <p className="text-gray-400 text-sm">Ortalama Komisyon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Komisyon Ayarları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm">Standart Komisyon Oranı (%)</label>
                      <input 
                        type="number" 
                        defaultValue="20"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Minimum Ödeme Tutarı ($)</label>
                      <input 
                        type="number" 
                        defaultValue="50"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                      />
                    </div>
                    <Button className="w-full gradient-primary">
                      Ayarları Kaydet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sistem Ayarları */}
          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Site Ayarları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm">Site Başlığı</label>
                      <input 
                        type="text" 
                        defaultValue="GAGENT - AI Assistant Platform"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Site Açıklaması</label>
                      <textarea 
                        defaultValue="AI destekli asistan platformu"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white h-20"
                      />
                    </div>
                    <Button className="w-full gradient-primary">
                      Kaydet
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">E-posta Ayarları</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm">SMTP Server</label>
                      <input 
                        type="text" 
                        placeholder="smtp.gmail.com"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">E-posta Adresi</label>
                      <input 
                        type="email" 
                        placeholder="noreply@gagent.app"
                        className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
                      />
                    </div>
                    <Button className="w-full gradient-primary">
                      Test E-postası Gönder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
