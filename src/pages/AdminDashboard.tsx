import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
  Filter,
  Save,
  Ban,
  CheckCircle,
  XCircle,
  Calendar,
  PieChart,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showUserModal, setShowUserModal] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingPackage, setEditingPackage] = useState(null);
  const [dateRange, setDateRange] = useState('monthly');
  const [comparisonMode, setComparisonMode] = useState(false);

  // Mock data
  const [stats] = useState({
    dailyActiveUsers: 245,
    totalTokensUsed: 1250000,
    totalRevenue: 15420.50,
    activeSubscriptions: 189,
    weeklyUsers: 1240,
    monthlyUsers: 4850,
    yearlyRevenue: 185040.60,
    quarterlyRevenue: 46260.15
  });

  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      plan: 'Pro', 
      tokens: 8500, 
      lastLogin: '2024-01-20', 
      status: 'active',
      joinDate: '2023-12-01',
      totalSpent: 299.99,
      usage: 75
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      plan: 'Enterprise', 
      tokens: 25000, 
      lastLogin: '2024-01-19', 
      status: 'active',
      joinDate: '2023-11-15',
      totalSpent: 1299.99,
      usage: 45
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      plan: 'Basic', 
      tokens: 2000, 
      lastLogin: '2024-01-18', 
      status: 'suspended',
      joinDate: '2024-01-01',
      totalSpent: 99.99,
      usage: 90
    }
  ]);

  const [packages, setPackages] = useState([
    { 
      id: 1, 
      name: 'Basic', 
      price: 9.99, 
      tokens: 5000, 
      users: 45, 
      status: 'active',
      features: ['5,000 AI Tokens', 'Email Support', 'Basic Analytics'],
      description: 'Perfect for individuals and small projects',
      billingCycle: 'monthly'
    },
    { 
      id: 2, 
      name: 'Pro', 
      price: 29.99, 
      tokens: 15000, 
      users: 120, 
      status: 'active',
      features: ['15,000 AI Tokens', 'Priority Support', 'Advanced Analytics', 'API Access'],
      description: 'Great for growing businesses and teams',
      billingCycle: 'monthly'
    },
    { 
      id: 3, 
      name: 'Enterprise', 
      price: 99.99, 
      tokens: 50000, 
      users: 24, 
      status: 'active',
      features: ['50,000 AI Tokens', '24/7 Support', 'Custom Integrations', 'White-label Options'],
      description: 'For large organizations with custom needs',
      billingCycle: 'monthly'
    }
  ]);

  const [apiIntegrations] = useState([
    { id: 1, name: 'OpenAI GPT-4', status: 'active', usage: 45000, cost: 450.00, apiKey: 'sk-....' },
    { id: 2, name: 'Anthropic Claude', status: 'active', usage: 25000, cost: 125.00, apiKey: 'sk-ant-....' },
    { id: 3, name: 'DeepSeek', status: 'active', usage: 15000, cost: 75.00, apiKey: 'sk-ds-....' }
  ]);

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'GAGENT - AI Assistant Platform',
    siteDescription: 'AI destekli asistan platformu',
    logo: '',
    supportEmail: 'support@gagent.app',
    maintenanceMode: false,
    userRegistration: true,
    emailVerification: true
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUsername: '',
    smtpPassword: '',
    fromEmail: 'noreply@gagent.app',
    fromName: 'GAGENT Team',
    enableSsl: true
  });

  const [paymentStats] = useState({
    daily: [
      { date: '2024-01-20', amount: 1250.50, transactions: 15 },
      { date: '2024-01-21', amount: 980.25, transactions: 12 },
      { date: '2024-01-22', amount: 1450.75, transactions: 18 }
    ],
    weekly: [
      { week: 'W1 2024', amount: 8750.50, transactions: 95 },
      { week: 'W2 2024', amount: 9200.25, transactions: 112 },
      { week: 'W3 2024', amount: 7800.75, transactions: 88 }
    ],
    monthly: [
      { month: 'Dec 2023', amount: 35420.50, transactions: 384 },
      { month: 'Jan 2024', amount: 42150.25, transactions: 456 },
      { month: 'Feb 2024', amount: 38750.75, transactions: 398 }
    ]
  });

  const handleCreateUser = (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData,
      joinDate: new Date().toISOString().split('T')[0],
      totalSpent: 0,
      usage: 0
    };
    setUsers([...users, newUser]);
    setShowUserModal(false);
  };

  const handleUpdateUser = (userId, userData) => {
    setUsers(users.map(user => user.id === userId ? { ...user, ...userData } : user));
    setEditingUser(null);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleBanUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: user.status === 'banned' ? 'active' : 'banned' } : user
    ));
  };

  const handleCreatePackage = (packageData) => {
    const newPackage = {
      id: packages.length + 1,
      ...packageData,
      users: 0
    };
    setPackages([...packages, newPackage]);
    setShowPackageModal(false);
  };

  const handleUpdatePackage = (packageId, packageData) => {
    setPackages(packages.map(pkg => pkg.id === packageId ? { ...pkg, ...packageData } : pkg));
    setEditingPackage(null);
  };

  const handleDeletePackage = (packageId) => {
    setPackages(packages.filter(pkg => pkg.id !== packageId));
  };

  const handleSaveSettings = () => {
    console.log('Site settings saved:', siteSettings);
    // Implementation for saving settings
  };

  const handleSendTestEmail = () => {
    console.log('Sending test email with settings:', emailSettings);
    // Implementation for sending test email
  };

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

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Date Range Selector */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                {['daily', 'weekly', 'monthly', 'quarterly', 'yearly'].map((range) => (
                  <Button
                    key={range}
                    onClick={() => setDateRange(range)}
                    variant={dateRange === range ? 'default' : 'outline'}
                    size="sm"
                    className={dateRange === range ? 'gradient-primary' : ''}
                  >
                    {range === 'daily' && 'Günlük'}
                    {range === 'weekly' && 'Haftalık'}
                    {range === 'monthly' && 'Aylık'}
                    {range === 'quarterly' && 'Çeyreklik'}
                    {range === 'yearly' && 'Yıllık'}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  checked={comparisonMode}
                  onCheckedChange={(checked) => setComparisonMode(checked === true)}
                />
                <span className="text-white text-sm">Karşılaştırma Modu</span>
              </div>
            </div>

            {/* Ana İstatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-green-400" />
                    <span>Aktif Kullanıcı</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">
                    {dateRange === 'daily' && stats.dailyActiveUsers}
                    {dateRange === 'weekly' && stats.weeklyUsers}
                    {dateRange === 'monthly' && stats.monthlyUsers}
                    {dateRange === 'quarterly' && Math.round(stats.monthlyUsers * 3)}
                    {dateRange === 'yearly' && Math.round(stats.monthlyUsers * 12)}
                  </div>
                  <p className="text-sm text-gray-400">
                    {comparisonMode ? '+12% önceki döneme göre' : `${dateRange} aktif kullanıcı`}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span>Token Kullanımı</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-400">
                    {stats.totalTokensUsed.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-400">
                    {comparisonMode ? '+18% önceki döneme göre' : 'Bu dönem toplam'}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <span>Gelir</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-400">
                    ${
                      dateRange === 'daily' && (stats.totalRevenue / 30).toFixed(2)
                      || dateRange === 'weekly' && (stats.totalRevenue / 4).toFixed(2)
                      || dateRange === 'monthly' && stats.totalRevenue.toFixed(2)
                      || dateRange === 'quarterly' && stats.quarterlyRevenue.toFixed(2)
                      || dateRange === 'yearly' && stats.yearlyRevenue.toFixed(2)
                    }
                  </div>
                  <p className="text-sm text-gray-400">
                    {comparisonMode ? '+25% önceki döneme göre' : `${dateRange} gelir`}
                  </p>
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
                  <p className="text-sm text-gray-400">
                    {comparisonMode ? '+8% önceki döneme göre' : 'Toplam aktif abonelik'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <LineChart className="h-5 w-5" />
                    Ödeme Trend Analizi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-800/30 rounded-lg p-4">
                    <div className="space-y-4">
                      {paymentStats[dateRange === 'daily' ? 'daily' : dateRange === 'weekly' ? 'weekly' : 'monthly']?.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400">{stat.date || stat.week || stat.month}</span>
                          <div className="text-right">
                            <span className="text-green-400 font-bold">${stat.amount.toLocaleString()}</span>
                            <span className="text-gray-400 ml-2">({stat.transactions} işlem)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <PieChart className="h-5 w-5" />
                    En Çok Kullanılan Modeller
                  </CardTitle>
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

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Kullanıcı Yönetimi</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Ara
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrele
                  </Button>
                  <Button 
                    className="gradient-primary" 
                    size="sm"
                    onClick={() => setShowUserModal(true)}
                  >
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
                        <th className="text-left p-4">Token</th>
                        <th className="text-left p-4">Kullanım</th>
                        <th className="text-left p-4">Toplam Harcama</th>
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
                              <p className="text-xs text-gray-500">Kayıt: {user.joinDate}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge>{user.plan}</Badge>
                          </td>
                          <td className="p-4">
                            <div>
                              <p className="text-white">{user.tokens.toLocaleString()}</p>
                              <div className="w-20 bg-gray-700 rounded-full h-2 mt-1">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full" 
                                  style={{ width: `${user.usage}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-gray-400">{user.usage}%</span>
                          </td>
                          <td className="p-4 text-green-400">${user.totalSpent}</td>
                          <td className="p-4">
                            <Badge className={
                              user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                              user.status === 'suspended' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="ghost" onClick={() => setEditingUser(user)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => handleBanUser(user.id)}
                                className={user.status === 'banned' ? 'text-green-400' : 'text-yellow-400'}
                              >
                                {user.status === 'banned' ? <CheckCircle className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="text-red-400"
                                onClick={() => handleDeleteUser(user.id)}
                              >
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

            {/* User Modal */}
            {(showUserModal || editingUser) && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card className="glass-effect border-white/10 w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingUser ? 'Kullanıcıyı Düzenle' : 'Yeni Kullanıcı Ekle'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target as HTMLFormElement);
                      const userData = Object.fromEntries(formData);
                      if (editingUser) {
                        handleUpdateUser(editingUser.id, userData);
                      } else {
                        handleCreateUser(userData);
                      }
                    }}>
                      <div className="space-y-4">
                        <Input 
                          name="name" 
                          placeholder="Ad Soyad" 
                          defaultValue={editingUser?.name || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="E-posta" 
                          defaultValue={editingUser?.email || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <select 
                          name="plan" 
                          defaultValue={editingUser?.plan || 'Basic'}
                          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
                        >
                          <option value="Basic">Basic</option>
                          <option value="Pro">Pro</option>
                          <option value="Enterprise">Enterprise</option>
                        </select>
                        <Input 
                          name="tokens" 
                          type="number" 
                          placeholder="Token Miktarı" 
                          defaultValue={editingUser?.tokens || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div className="flex space-x-2 mt-6">
                        <Button type="submit" className="gradient-primary flex-1">
                          {editingUser ? 'Güncelle' : 'Ekle'}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => {
                            setShowUserModal(false);
                            setEditingUser(null);
                          }}
                        >
                          İptal
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Packages Tab */}
          <TabsContent value="packages" className="space-y-6">
            <Card className="glass-effect border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Abonelik Paketleri</CardTitle>
                <Button 
                  className="gradient-primary"
                  onClick={() => setShowPackageModal(true)}
                >
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
                          <span>{pkg.name}</span>
                          <Badge className={pkg.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {pkg.status}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-3xl font-bold text-blue-400">${pkg.price}</p>
                            <p className="text-gray-400">{pkg.billingCycle}</p>
                          </div>
                          <div>
                            <p className="text-white font-medium">{pkg.tokens.toLocaleString()} Token</p>
                            <p className="text-gray-400">{pkg.users} aktif kullanıcı</p>
                          </div>
                          <div>
                            <p className="text-gray-300 text-sm">{pkg.description}</p>
                          </div>
                          <div className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => setEditingPackage(pkg)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Düzenle
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-red-400"
                              onClick={() => handleDeletePackage(pkg.id)}
                            >
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

            {/* Package Modal */}
            {(showPackageModal || editingPackage) && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card className="glass-effect border-white/10 w-full max-w-2xl">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {editingPackage ? 'Paketi Düzenle' : 'Yeni Paket Oluştur'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target as HTMLFormElement);
                      const packageData = {
                        name: formData.get('name') as string,
                        price: parseFloat(formData.get('price') as string),
                        tokens: parseInt(formData.get('tokens') as string),
                        description: formData.get('description') as string,
                        billingCycle: formData.get('billingCycle') as string,
                        status: formData.get('status') as string,
                        features: (formData.get('features') as string).split('\n').filter(f => f.trim())
                      };
                      if (editingPackage) {
                        handleUpdatePackage(editingPackage.id, packageData);
                      } else {
                        handleCreatePackage(packageData);
                      }
                    }}>
                      <div className="grid grid-cols-2 gap-4">
                        <Input 
                          name="name" 
                          placeholder="Paket Adı" 
                          defaultValue={editingPackage?.name || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <Input 
                          name="price" 
                          type="number" 
                          step="0.01" 
                          placeholder="Fiyat" 
                          defaultValue={editingPackage?.price || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <Input 
                          name="tokens" 
                          type="number" 
                          placeholder="Token Miktarı" 
                          defaultValue={editingPackage?.tokens || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <select 
                          name="billingCycle" 
                          defaultValue={editingPackage?.billingCycle || 'monthly'}
                          className="p-2 bg-gray-800 border border-gray-600 rounded text-white"
                        >
                          <option value="monthly">Aylık</option>
                          <option value="yearly">Yıllık</option>
                        </select>
                        <select 
                          name="status" 
                          defaultValue={editingPackage?.status || 'active'}
                          className="p-2 bg-gray-800 border border-gray-600 rounded text-white"
                        >
                          <option value="active">Aktif</option>
                          <option value="inactive">Pasif</option>
                        </select>
                      </div>
                      <div className="mt-4 space-y-4">
                        <Textarea 
                          name="description" 
                          placeholder="Paket Açıklaması" 
                          defaultValue={editingPackage?.description || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                        <Textarea 
                          name="features" 
                          placeholder="Özellikler (her satıra bir özellik)" 
                          defaultValue={editingPackage?.features?.join('\n') || ''}
                          className="bg-gray-800 border-gray-600 text-white"
                          rows={4}
                        />
                      </div>
                      <div className="flex space-x-2 mt-6">
                        <Button type="submit" className="gradient-primary flex-1">
                          {editingPackage ? 'Güncelle' : 'Oluştur'}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => {
                            setShowPackageModal(false);
                            setEditingPackage(null);
                          }}
                        >
                          İptal
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    Ödeme İstatistikleri
                  </CardTitle>
                  <div className="flex space-x-2 mt-4">
                    {['daily', 'weekly', 'monthly'].map((period) => (
                      <Button
                        key={period}
                        size="sm"
                        variant={dateRange === period ? 'default' : 'outline'}
                        onClick={() => setDateRange(period)}
                        className={dateRange === period ? 'gradient-primary' : ''}
                      >
                        {period === 'daily' && 'Günlük'}
                        {period === 'weekly' && 'Haftalık'}
                        {period === 'monthly' && 'Aylık'}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Toplam gelir:</span>
                      <span className="text-green-400 font-bold">
                        ${
                          dateRange === 'daily' ? (stats.totalRevenue / 30).toFixed(2) :
                          dateRange === 'weekly' ? (stats.totalRevenue / 4).toFixed(2) :
                          stats.totalRevenue.toFixed(2)
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Aktif abonelikler:</span>
                      <span className="text-white font-bold">{stats.activeSubscriptions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Başarılı ödeme oranı:</span>
                      <span className="text-green-400 font-bold">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ortalama sipariş değeri:</span>
                      <span className="text-blue-400 font-bold">$45.60</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">İade oranı:</span>
                      <span className="text-red-400 font-bold">1.2%</span>
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
                    {paymentStats.daily.map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Toplu Ödeme</p>
                          <p className="text-gray-400 text-sm">{payment.date}</p>
                          <p className="text-gray-400 text-xs">{payment.transactions} işlem</p>
                        </div>
                        <div className="text-right">
                          <span className="text-green-400 font-bold">${payment.amount.toLocaleString()}</span>
                          <Badge className="ml-2 bg-green-500/20 text-green-400">Başarılı</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Integration Settings */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Ödeme Entegrasyonları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="glass-effect border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Stripe</h3>
                            <p className="text-gray-400 text-sm">Kredi kartı ödemeleri</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">Aktif</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Bu ay işlemler:</span>
                          <span className="text-white">456</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Toplam hacim:</span>
                          <span className="text-green-400">$42,150</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-4">
                        Ayarları Düzenle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">PayPal</h3>
                            <p className="text-gray-400 text-sm">PayPal ödemeleri</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">Aktif</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Bu ay işlemler:</span>
                          <span className="text-white">123</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Toplam hacim:</span>
                          <span className="text-green-400">$8,750</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-4">
                        Ayarları Düzenle
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Kripto Para</h3>
                            <p className="text-gray-400 text-sm">Bitcoin, Ethereum</p>
                          </div>
                        </div>
                        <Badge className="bg-yellow-500/20 text-yellow-400">Beklemede</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Desteklenen:</span>
                          <span className="text-white">BTC, ETH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Durum:</span>
                          <span className="text-yellow-400">Test modunda</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-4">
                        Entegrasyonu Aktifleştir
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations Tab */}
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
                              <p className="text-gray-500 text-sm">API Key: {integration.apiKey}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">{integration.usage.toLocaleString()} kullanım</p>
                            <p className="text-green-400">${integration.cost} maliyet</p>
                            <p className="text-gray-400 text-sm">Bu ay</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={integration.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                              {integration.status}
                            </Badge>
                            <Button size="sm" variant="outline">
                              <Settings className="h-4 w-4 mr-2" />
                              Ayarlar
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Rate Limit:</span>
                            <p className="text-white">1000/dk</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Başarı Oranı:</span>
                            <p className="text-green-400">99.2%</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Ortalama Süre:</span>
                            <p className="text-blue-400">450ms</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Affiliate Tab */}
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
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-yellow-400">189</p>
                        <p className="text-gray-400 text-sm">Bu ay referans</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-red-400">%12.5</p>
                        <p className="text-gray-400 text-sm">Dönüşüm oranı</p>
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
                      <Input 
                        type="number" 
                        defaultValue="20"
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Minimum Ödeme Tutarı ($)</label>
                      <Input 
                        type="number" 
                        defaultValue="50"
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Ödeme Periyodu</label>
                      <select className="w-full mt-1 p-2 bg-gray-800 border border-gray-600 rounded text-white">
                        <option value="monthly">Aylık</option>
                        <option value="weekly">Haftalık</option>
                        <option value="quarterly">Üç aylık</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox defaultChecked />
                      <span className="text-gray-300 text-sm">Otomatik ödeme aktif</span>
                    </div>
                    <Button className="w-full gradient-primary">
                      <Save className="h-4 w-4 mr-2" />
                      Ayarları Kaydet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Affiliates */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">En İyi Affiliate'ler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4">Affiliate</th>
                        <th className="text-left p-4">Referanslar</th>
                        <th className="text-left p-4">Dönüşümler</th>
                        <th className="text-left p-4">Kazancı</th>
                        <th className="text-left p-4">Durum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">Alex Johnson</p>
                            <p className="text-sm text-gray-400">alex@example.com</p>
                          </div>
                        </td>
                        <td className="p-4">245</td>
                        <td className="p-4">31 (%12.7)</td>
                        <td className="p-4 text-green-400">$620</td>
                        <td className="p-4">
                          <Badge className="bg-green-500/20 text-green-400">Aktif</Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">Sarah Smith</p>
                            <p className="text-sm text-gray-400">sarah@example.com</p>
                          </div>
                        </td>
                        <td className="p-4">189</td>
                        <td className="p-4">23 (%12.2)</td>
                        <td className="p-4 text-green-400">$460</td>
                        <td className="p-4">
                          <Badge className="bg-green-500/20 text-green-400">Aktif</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Tab */}
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
                      <Input 
                        value={siteSettings.siteName}
                        onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Site Açıklaması</label>
                      <Textarea 
                        value={siteSettings.siteDescription}
                        onChange={(e) => setSiteSettings({...siteSettings, siteDescription: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white h-20"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Destek E-postası</label>
                      <Input 
                        type="email"
                        value={siteSettings.supportEmail}
                        onChange={(e) => setSiteSettings({...siteSettings, supportEmail: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          checked={siteSettings.maintenanceMode}
                          onCheckedChange={(checked) => setSiteSettings({...siteSettings, maintenanceMode: checked === true})}
                        />
                        <span className="text-gray-300 text-sm">Bakım modu</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          checked={siteSettings.userRegistration}
                          onCheckedChange={(checked) => setSiteSettings({...siteSettings, userRegistration: checked === true})}
                        />
                        <span className="text-gray-300 text-sm">Kullanıcı kayıt</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          checked={siteSettings.emailVerification}
                          onCheckedChange={(checked) => setSiteSettings({...siteSettings, emailVerification: checked === true})}
                        />
                        <span className="text-gray-300 text-sm">E-posta doğrulama</span>
                      </div>
                    </div>
                    <Button className="w-full gradient-primary" onClick={handleSaveSettings}>
                      <Save className="h-4 w-4 mr-2" />
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
                      <Input 
                        value={emailSettings.smtpServer}
                        onChange={(e) => setEmailSettings({...emailSettings, smtpServer: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">SMTP Port</label>
                      <Input 
                        type="number"
                        value={emailSettings.smtpPort}
                        onChange={(e) => setEmailSettings({...emailSettings, smtpPort: parseInt(e.target.value)})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">SMTP Kullanıcı Adı</label>
                      <Input 
                        value={emailSettings.smtpUsername}
                        onChange={(e) => setEmailSettings({...emailSettings, smtpUsername: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">SMTP Şifre</label>
                      <Input 
                        type="password"
                        value={emailSettings.smtpPassword}
                        onChange={(e) => setEmailSettings({...emailSettings, smtpPassword: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Gönderen E-posta</label>
                      <Input 
                        type="email"
                        value={emailSettings.fromEmail}
                        onChange={(e) => setEmailSettings({...emailSettings, fromEmail: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Gönderen Adı</label>
                      <Input 
                        value={emailSettings.fromName}
                        onChange={(e) => setEmailSettings({...emailSettings, fromName: e.target.value})}
                        className="mt-1 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        checked={emailSettings.enableSsl}
                        onCheckedChange={(checked) => setEmailSettings({...emailSettings, enableSsl: checked === true})}
                      />
                      <span className="text-gray-300 text-sm">SSL/TLS aktif</span>
                    </div>
                    <Button className="w-full gradient-primary" onClick={handleSendTestEmail}>
                      <Mail className="h-4 w-4 mr-2" />
                      Test E-postası Gönder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Health */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Sistem Durumu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <p className="text-white font-medium">API Servisleri</p>
                    <p className="text-green-400 text-sm">Çevrimiçi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <p className="text-white font-medium">Veritabanı</p>
                    <p className="text-green-400 text-sm">Çevrimiçi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <p className="text-white font-medium">Ödeme Sistemi</p>
                    <p className="text-green-400 text-sm">Çevrimiçi</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="h-8 w-8 text-yellow-400" />
                    </div>
                    <p className="text-white font-medium">E-posta Servisi</p>
                    <p className="text-yellow-400 text-sm">Sınırlı</p>
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
