import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Settings, 
  DollarSign,
  TrendingUp,
  Brain,
  Shield,
  Mail,
  Globe,
  Database,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  Zap,
  Eye,
  Clock,
  Star,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentIntegrations from '@/components/admin/PaymentIntegrations';
import APIIntegrations from '@/components/admin/APIIntegrations';
import RealTimePayments from '@/components/admin/RealTimePayments';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showUserModal, setShowUserModal] = useState(false);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [editingPackage, setEditingPackage] = useState<any>(null);
  const [comparisonMode, setComparisonMode] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', status: 'Active', tokens: 15000 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic', status: 'Inactive', tokens: 5000 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', plan: 'Pro', status: 'Active', tokens: 15000 },
  ]);

  const [packages, setPackages] = useState([
    { id: 1, name: 'Basic', price: 9.99, tokens: 5000, description: 'Basic plan with 5000 tokens' },
    { id: 2, name: 'Pro', price: 29.99, tokens: 15000, description: 'Pro plan with 15000 tokens' },
    { id: 3, name: 'Enterprise', price: 99.99, tokens: 50000, description: 'Enterprise plan with 50000 tokens' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredUsers = users.filter(user => {
    const searchRegex = new RegExp(searchTerm, 'i');
    const statusMatch = filterStatus === 'All' || user.status === filterStatus;
    return searchRegex.test(user.name) && statusMatch;
  });

  const openUserModal = (user = null) => {
    setEditingUser(user);
    setShowUserModal(true);
  };

  const closeUserModal = () => {
    setShowUserModal(false);
    setEditingUser(null);
  };

  const openPackageModal = (pkg = null) => {
    setEditingPackage(pkg);
    setShowPackageModal(true);
  };

  const closePackageModal = () => {
    setShowPackageModal(false);
    setEditingPackage(null);
  };

  const handleCreateUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    closeUserModal();
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    closeUserModal();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleCreatePackage = (newPackage) => {
    setPackages([...packages, { ...newPackage, id: packages.length + 1 }]);
    closePackageModal();
  };

  const handleUpdatePackage = (updatedPackage) => {
    setPackages(packages.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
    closePackageModal();
  };

  const handleDeletePackage = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'payments':
        return <PaymentIntegrations />;
      case 'integrations':
        return <APIIntegrations />;
      case 'real-payments':
        return <RealTimePayments />;
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass-effect p-6 border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Toplam Kullanıcı</p>
                    <p className="text-3xl font-bold text-white">2,847</p>
                    <p className="text-xs text-green-400">+12% bu ay</p>
                  </div>
                  <div className="gradient-primary p-3 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6 border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Aylık Gelir</p>
                    <p className="text-3xl font-bold text-green-400">$42,150</p>
                    <p className="text-xs text-green-400">+8% bu ay</p>
                  </div>
                  <div className="gradient-primary p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6 border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Aktif Abonelik</p>
                    <p className="text-3xl font-bold text-blue-400">1,234</p>
                    <p className="text-xs text-green-400">+15% bu ay</p>
                  </div>
                  <div className="gradient-primary p-3 rounded-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6 border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">API Kullanımı</p>
                    <p className="text-3xl font-bold text-purple-400">85K</p>
                    <p className="text-xs text-green-400">+22% bu ay</p>
                  </div>
                  <div className="gradient-primary p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button onClick={() => setActiveTab('users')} className="gradient-primary h-16 flex flex-col">
                <Users className="h-6 w-6 mb-1" />
                Kullanıcı Yönetimi
              </Button>
              <Button onClick={() => setActiveTab('packages')} className="gradient-primary h-16 flex flex-col">
                <CreditCard className="h-6 w-6 mb-1" />
                Paket Yönetimi
              </Button>
              <Button onClick={() => setActiveTab('payments')} className="gradient-primary h-16 flex flex-col">
                <DollarSign className="h-6 w-6 mb-1" />
                Ödeme Entegrasyonları
              </Button>
              <Button onClick={() => setActiveTab('integrations')} className="gradient-primary h-16 flex flex-col">
                <Brain className="h-6 w-6 mb-1" />
                API Entegrasyonları
              </Button>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Kullanıcı Yönetimi</h2>
              <Button onClick={() => openUserModal()} className="gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Yeni Kullanıcı Ekle
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Kullanıcı ara..."
                className="bg-gray-800 border-white/20 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="bg-gray-800 border-white/20 text-white rounded-md p-2"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">Tüm Durumlar</option>
                <option value="Active">Aktif</option>
                <option value="Inactive">Pasif</option>
              </select>
            </div>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Kullanıcı Listesi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2 text-sm font-semibold text-gray-400">Ad</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">Email</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">Plan</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">Durum</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map(user => (
                        <tr key={user.id} className="border-b border-white/10">
                          <td className="py-3 text-white">{user.name}</td>
                          <td className="py-3 text-gray-300">{user.email}</td>
                          <td className="py-3 text-gray-300">{user.plan}</td>
                          <td className="py-3">
                            <Badge className={user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <Button onClick={() => openUserModal(user)} size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button onClick={() => handleDeleteUser(user.id)} size="sm" variant="ghost" className="text-red-400 hover:text-red-500">
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
            {showUserModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <Card className="max-w-md w-full p-6 glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">{editingUser ? 'Kullanıcıyı Düzenle' : 'Yeni Kullanıcı Ekle'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <UserForm
                      user={editingUser}
                      onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
                      onCancel={closeUserModal}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        );
      case 'packages':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Paket Yönetimi</h2>
              <Button onClick={() => openPackageModal()} className="gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Yeni Paket Ekle
              </Button>
            </div>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Paket Listesi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2 text-sm font-semibold text-gray-400">Ad</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">Fiyat</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">Token</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">Açıklama</th>
                        <th className="pb-2 text-sm font-semibold text-gray-400">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packages.map(pkg => (
                        <tr key={pkg.id} className="border-b border-white/10">
                          <td className="py-3 text-white">{pkg.name}</td>
                          <td className="py-3 text-gray-300">${pkg.price}</td>
                          <td className="py-3 text-gray-300">{pkg.tokens}</td>
                          <td className="py-3 text-gray-300">{pkg.description}</td>
                          <td className="py-3">
                            <div className="flex space-x-2">
                              <Button onClick={() => openPackageModal(pkg)} size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button onClick={() => handleDeletePackage(pkg.id)} size="sm" variant="ghost" className="text-red-400 hover:text-red-500">
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

            {/* Package Modal */}
            {showPackageModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <Card className="max-w-md w-full p-6 glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">{editingPackage ? 'Paketi Düzenle' : 'Yeni Paket Ekle'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PackageForm
                      package={editingPackage}
                      onSubmit={editingPackage ? handleUpdatePackage : handleCreatePackage}
                      onCancel={closePackageModal}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        );
      case 'payments':
        return <PaymentIntegrations />;
      case 'integrations':
        return <APIIntegrations />;
      case 'real-payments':
        return <RealTimePayments />;
      case 'affiliate':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Affiliate Yönetimi</h2>
            <p className="text-gray-300">Affiliate programı ayarları ve istatistikleri</p>
          </div>
        );
      case 'system':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Sistem Ayarları</h2>
            <p className="text-gray-300">Sistem genel ayarları ve yapılandırması</p>
          </div>
        );
      default:
        return <div>İçerik yükleniyor...</div>;
    }
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
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Ana Dashboard
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

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 bg-gray-800/50 p-2 rounded-lg">
            <Button
              onClick={() => setActiveTab('dashboard')}
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className={activeTab === 'dashboard' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Dashboard
            </Button>
            <Button
              onClick={() => setActiveTab('users')}
              variant={activeTab === 'users' ? 'default' : 'ghost'}
              className={activeTab === 'users' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Kullanıcılar
            </Button>
            <Button
              onClick={() => setActiveTab('packages')}
              variant={activeTab === 'packages' ? 'default' : 'ghost'}
              className={activeTab === 'packages' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Paketler
            </Button>
            <Button
              onClick={() => setActiveTab('payments')}
              variant={activeTab === 'payments' ? 'default' : 'ghost'}
              className={activeTab === 'payments' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Ödemeler
            </Button>
            <Button
              onClick={() => setActiveTab('integrations')}
              variant={activeTab === 'integrations' ? 'default' : 'ghost'}
              className={activeTab === 'integrations' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Entegrasyonlar
            </Button>
            <Button
              onClick={() => setActiveTab('real-payments')}
              variant={activeTab === 'real-payments' ? 'default' : 'ghost'}
              className={activeTab === 'real-payments' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Gerçek Ödemeler
            </Button>
            <Button
              onClick={() => setActiveTab('affiliate')}
              variant={activeTab === 'affiliate' ? 'default' : 'ghost'}
              className={activeTab === 'affiliate' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Affiliate
            </Button>
            <Button
              onClick={() => setActiveTab('system')}
              variant={activeTab === 'system' ? 'default' : 'ghost'}
              className={activeTab === 'system' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              Sistem
            </Button>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [plan, setPlan] = useState(user?.plan || 'Basic');
  const [status, setStatus] = useState(user?.status || 'Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: user?.id, name, email, plan, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label className="text-gray-300">Ad</Label>
        <Input
          type="text"
          className="bg-gray-800 border-white/20 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label className="text-gray-300">Email</Label>
        <Input
          type="email"
          className="bg-gray-800 border-white/20 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label className="text-gray-300">Plan</Label>
        <select
          className="bg-gray-800 border-white/20 text-white rounded-md p-2 w-full"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select>
      </div>
      <div>
        <Label className="text-gray-300">Durum</Label>
        <select
          className="bg-gray-800 border-white/20 text-white rounded-md p-2 w-full"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="ghost" onClick={onCancel}>
          İptal
        </Button>
        <Button type="submit" className="gradient-primary">
          Kaydet
        </Button>
      </div>
    </form>
  );
};

const PackageForm = ({ package: pkg, onSubmit, onCancel }) => {
  const [name, setName] = useState(pkg?.name || '');
  const [price, setPrice] = useState(pkg?.price || '');
  const [tokens, setTokens] = useState(pkg?.tokens || '');
  const [description, setDescription] = useState(pkg?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: pkg?.id, name, price, tokens, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label className="text-gray-300">Ad</Label>
        <Input
          type="text"
          className="bg-gray-800 border-white/20 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label className="text-gray-300">Fiyat</Label>
        <Input
          type="number"
          className="bg-gray-800 border-white/20 text-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <Label className="text-gray-300">Token</Label>
        <Input
          type="number"
          className="bg-gray-800 border-white/20 text-white"
          value={tokens}
          onChange={(e) => setTokens(e.target.value)}
          required
        />
      </div>
      <div>
        <Label className="text-gray-300">Açıklama</Label>
        <Textarea
          className="bg-gray-800 border-white/20 text-white resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="ghost" onClick={onCancel}>
          İptal
        </Button>
        <Button type="submit" className="gradient-primary">
          Kaydet
        </Button>
      </div>
    </form>
  );
};

export default AdminDashboard;
