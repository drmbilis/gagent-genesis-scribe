
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Upload, Download, MessageSquare, User, Settings, LogOut, Bell, History, CreditCard, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useTokens } from "@/hooks/useTokens";
import { useState } from "react";
import SystemStatus from "@/components/SystemStatus";
import TokenInsufficient from "@/components/TokenInsufficient";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { tokens } = useTokens();
  const [showTokenModal, setShowTokenModal] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  const handleSendMessage = () => {
    if (!tokens || tokens.balance < 10) {
      setShowTokenModal(true);
      return;
    }
    // Process AI message (this will be implemented later)
    console.log("Processing AI message...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/notifications">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Bildirimler
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profil
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Ayarlar
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Çıkış
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* System Status */}
        <SystemStatus />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Hoş geldin {user?.email}! GAGENT AI asistanınızla çalışmaya başlayın
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kalan Token</p>
                <p className="text-3xl font-bold">{tokens?.balance?.toLocaleString() || '0'}</p>
                {(tokens?.balance || 0) < 100 && (
                  <Link to="/pricing" className="text-xs text-red-600 hover:underline">
                    Token ekle →
                  </Link>
                )}
              </div>
              <div className="gradient-primary p-3 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Toplam Kullanılan</p>
                <p className="text-3xl font-bold">{tokens?.total_used?.toLocaleString() || '0'}</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Toplam Satın Alınan</p>
                <p className="text-3xl font-bold">{tokens?.total_purchased?.toLocaleString() || '0'}</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Hızlı Erişim</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/tokens">
              <Button variant="outline" className="w-full justify-start h-12">
                <Brain className="h-5 w-5 mr-3" />
                Token Yönetimi
              </Button>
            </Link>
            <Link to="/history">
              <Button variant="outline" className="w-full justify-start h-12">
                <History className="h-5 w-5 mr-3" />
                Geçmiş
              </Button>
            </Link>
            <Link to="/billing">
              <Button variant="outline" className="w-full justify-start h-12">
                <CreditCard className="h-5 w-5 mr-3" />
                Faturalama
              </Button>
            </Link>
            <Link to="/security">
              <Button variant="outline" className="w-full justify-start h-12">
                <Shield className="h-5 w-5 mr-3" />
                Güvenlik
              </Button>
            </Link>
            <Link to="/referral">
              <Button variant="outline" className="w-full justify-start h-12">
                <Users className="h-5 w-5 mr-3" />
                Referans
              </Button>
            </Link>
            <Link to="/notifications">
              <Button variant="outline" className="w-full justify-start h-12">
                <Bell className="h-5 w-5 mr-3" />
                Bildirimler
              </Button>
            </Link>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Chat Section */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              AI Sohbet
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 h-64 mb-4 overflow-y-auto">
              <p className="text-gray-600 text-center mt-20">
                AI asistanınızla sohbete başlayın...
              </p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                className="gradient-primary text-white border-0"
                onClick={handleSendMessage}
                disabled={!tokens || tokens.balance < 10}
              >
                Gönder
              </Button>
            </div>
            {tokens && tokens.balance < 10 && (
              <p className="text-xs text-red-600 mt-2">
                Mesaj göndermek için en az 10 token gerekli. 
                <Link to="/pricing" className="underline ml-1">Token satın al</Link>
              </p>
            )}
          </Card>

          {/* File Management */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Dosya Yönetimi
            </h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Dosyalarınızı sürükleyin veya seçin</p>
              <Button variant="outline">
                Dosya Seç
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Son Yüklenen Dosyalar</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">document.pdf</span>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm">data.xlsx</span>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Token Insufficient Modal */}
      <TokenInsufficient 
        isVisible={showTokenModal}
        onClose={() => setShowTokenModal(false)}
      />
    </div>
  );
};

export default Dashboard;
