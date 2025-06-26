
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Upload, Download, MessageSquare, User, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const handleLogout = () => {
    console.log("Logout");
    // Logout logic will be implemented with Supabase
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
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profil
              </Button>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">GAGENT AI asistanınızla çalışmaya başlayın</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kalan Token</p>
                <p className="text-3xl font-bold">2,500</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Toplam Sohbet</p>
                <p className="text-3xl font-bold">47</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Yüklenen Dosya</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

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
              <Button className="gradient-primary text-white border-0">
                Gönder
              </Button>
            </div>
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
    </div>
  );
};

export default Dashboard;
