
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Package, 
  BarChart3,
  Shield,
  Key,
  Globe,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data
  const stats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalRevenue: 45780,
    monthlyGrowth: 12.5
  };

  const recentUsers = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', plan: 'Pro', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Ayşe Demir', email: 'ayse@example.com', plan: 'Basic', status: 'Active', joinDate: '2024-01-14' },
    { id: 3, name: 'Mehmet Kaya', email: 'mehmet@example.com', plan: 'Enterprise', status: 'Inactive', joinDate: '2024-01-13' }
  ];

  const apiKeys = [
    { id: 1, name: 'OpenAI API Key', status: 'Active', lastUsed: '2024-01-15' },
    { id: 2, name: 'Deepseek API Key', status: 'Active', lastUsed: '2024-01-14' },
    { id: 3, name: 'Anthropic API Key', status: 'Inactive', lastUsed: '2024-01-10' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="gradient-primary p-2 rounded-lg animate-glow">
              <Brain className="h-6 w-6 text-white" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold gradient-text">GAGENT Admin</h1>
              <p className="text-gray-300">SaaS Yönetim Paneli</p>
            </div>
          </div>
          <Button className="gradient-primary">
            <Settings className="h-4 w-4 mr-2" />
            Ayarlar
          </Button>
        </div>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-gray-800/50">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="users">Kullanıcılar</TabsTrigger>
            <TabsTrigger value="sales">Satışlar</TabsTrigger>
            <TabsTrigger value="packages">Paketler</TabsTrigger>
            <TabsTrigger value="apis">API Yönetimi</TabsTrigger>
            <TabsTrigger value="reports">Raporlar</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Toplam Kullanıcı</p>
                      <p className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Aktif Kullanıcı</p>
                      <p className="text-2xl font-bold text-white">{stats.activeUsers.toLocaleString()}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Toplam Gelir</p>
                      <p className="text-2xl font-bold text-white">${stats.totalRevenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Aylık Büyüme</p>
                      <p className="text-2xl font-bold text-white">%{stats.monthlyGrowth}</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Son Kullanıcılar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentUsers.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                        <div>
                          <p className="font-medium text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">API Durumu</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {apiKeys.map((api) => (
                      <div key={api.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                        <div>
                          <p className="font-medium text-white">{api.name}</p>
                          <p className="text-sm text-gray-400">Son kullanım: {api.lastUsed}</p>
                        </div>
                        <Badge variant={api.status === 'Active' ? 'default' : 'secondary'}>
                          {api.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Kullanıcı Yönetimi</CardTitle>
                  <Button className="gradient-primary">
                    <Users className="h-4 w-4 mr-2" />
                    Yeni Kullanıcı
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-300">Ad Soyad</TableHead>
                      <TableHead className="text-gray-300">E-posta</TableHead>
                      <TableHead className="text-gray-300">Plan</TableHead>
                      <TableHead className="text-gray-300">Durum</TableHead>
                      <TableHead className="text-gray-300">Kayıt Tarihi</TableHead>
                      <TableHead className="text-gray-300">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="text-white">{user.name}</TableCell>
                        <TableCell className="text-gray-300">{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-blue-400">
                            {user.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">{user.joinDate}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="ghost" className="text-blue-400">
                            Düzenle
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Management Tab */}
          <TabsContent value="apis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    OpenAI API Ayarları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">API Key</label>
                    <Input
                      type="password"
                      placeholder="sk-..."
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Model</label>
                    <select className="w-full p-2 bg-gray-800/50 border border-white/20 rounded-md text-white">
                      <option>gpt-4o-mini</option>
                      <option>gpt-4o</option>
                      <option>gpt-3.5-turbo</option>
                    </select>
                  </div>
                  <Button className="w-full gradient-primary">
                    Kaydet
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Deepseek API Ayarları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">API Key</label>
                    <Input
                      type="password"
                      placeholder="ds-..."
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Endpoint</label>
                    <Input
                      placeholder="https://api.deepseek.com"
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                  </div>
                  <Button className="w-full gradient-primary">
                    Kaydet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sales Tab */}
          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Günlük Satış</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">$1,234</div>
                  <p className="text-gray-400">+12% önceki güne göre</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Haftalık Satış</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-400">$8,567</div>
                  <p className="text-gray-400">+8% önceki haftaya göre</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Aylık Satış</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-400">$45,780</div>
                  <p className="text-gray-400">+15% önceki aya göre</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Packages Tab */}
          <TabsContent value="packages" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Paket Yönetimi</CardTitle>
                  <Button className="gradient-primary">
                    <Package className="h-4 w-4 mr-2" />
                    Yeni Paket
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-800/30 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                    <p className="text-3xl font-bold text-blue-400 mb-4">$9.99</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 1000 Token</li>
                      <li>• Basic Support</li>
                      <li>• Standard Models</li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Düzenle
                    </Button>
                  </div>

                  <div className="p-6 bg-gray-800/30 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-3xl font-bold text-purple-400 mb-4">$29.99</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 5000 Token</li>
                      <li>• Priority Support</li>
                      <li>• All Models</li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Düzenle
                    </Button>
                  </div>

                  <div className="p-6 bg-gray-800/30 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-3xl font-bold text-green-400 mb-4">$99.99</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Unlimited Tokens</li>
                      <li>• 24/7 Support</li>
                      <li>• Custom Models</li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Düzenle
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Analitik Raporlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Kullanıcı Artışı</h4>
                    <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded flex items-center justify-center">
                      <p className="text-gray-400">Grafik alanı</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Gelir Trendi</h4>
                    <div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded flex items-center justify-center">
                      <p className="text-gray-400">Grafik alanı</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
