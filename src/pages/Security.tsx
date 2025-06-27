
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, Shield, Smartphone, Monitor, MapPin, Calendar, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Security = () => {
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [activeSessions] = useState([
    {
      id: 1,
      device: "Chrome - Windows",
      location: "İstanbul, Türkiye",
      lastActive: "Şimdi",
      ip: "192.168.1.1",
      current: true
    },
    {
      id: 2,
      device: "Safari - iPhone",
      location: "İstanbul, Türkiye", 
      lastActive: "2 saat önce",
      ip: "192.168.1.45",
      current: false
    }
  ]);

  const [loginHistory] = useState([
    {
      id: 1,
      date: "2024-01-15 14:30",
      location: "İstanbul, Türkiye",
      device: "Chrome - Windows",
      status: "success"
    },
    {
      id: 2,
      date: "2024-01-15 08:15",
      location: "İstanbul, Türkiye",
      device: "Safari - iPhone", 
      status: "success"
    },
    {
      id: 3,
      date: "2024-01-14 22:45",
      location: "Bilinmeyen Konum",
      device: "Firefox - Linux",
      status: "failed"
    }
  ]);

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
            
            <Link to="/dashboard">
              <Button variant="outline">
                Dashboard'a Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Shield className="h-8 w-8 mr-3" />
              Güvenlik Ayarları
            </h1>
            <p className="text-gray-600">Hesap güvenliğinizi yönetin</p>
          </div>

          {/* Password Change */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Şifre Değiştir</h2>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="current-password">Mevcut Şifre</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Yeni Şifre</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Yeni Şifre Tekrar</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="gradient-primary text-white border-0">
                Şifreyi Güncelle
              </Button>
            </div>
          </Card>

          {/* Two-Factor Authentication */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  İki Faktörlü Doğrulama (2FA)
                </h2>
                <p className="text-gray-600">Hesabınızı ekstra güvenlik katmanı ile koruyun</p>
              </div>
              <Badge variant={twoFAEnabled ? "default" : "secondary"}>
                {twoFAEnabled ? "Aktif" : "Pasif"}
              </Badge>
            </div>
            
            {!twoFAEnabled ? (
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <p className="font-medium text-yellow-800">2FA Önerilir</p>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Hesap güvenliği için iki faktörlü doğrulamayı etkinleştirmenizi öneriyoruz.
                  </p>
                </div>
                <Button 
                  onClick={() => setTwoFAEnabled(true)}
                  className="gradient-primary text-white border-0"
                >
                  2FA'yı Etkinleştir
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">✓ İki faktörlü doğrulama aktif</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">Yedek Kodları Görüntüle</Button>
                  <Button variant="destructive" onClick={() => setTwoFAEnabled(false)}>
                    2FA'yı Devre Dışı Bırak
                  </Button>
                </div>
              </div>
            )}
          </Card>

          {/* Active Sessions */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Monitor className="h-5 w-5 mr-2" />
                Aktif Oturumlar
              </h2>
              <Button variant="destructive">
                Diğer Oturumları Sonlandır
              </Button>
            </div>

            <div className="space-y-4">
              {activeSessions.map((session) => (
                <div key={session.id} className={`p-4 border rounded-lg ${session.current ? 'border-green-200 bg-green-50' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Monitor className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{session.device}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{session.location}</span>
                          <span>•</span>
                          <span>{session.ip}</span>
                        </div>
                        <p className="text-xs text-gray-500">Son aktivite: {session.lastActive}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {session.current && (
                        <Badge variant="outline" className="text-green-600">Mevcut</Badge>
                      )}
                      {!session.current && (
                        <Button variant="outline" size="sm">Sonlandır</Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Login History */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Giriş Geçmişi
            </h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tarih</TableHead>
                  <TableHead>Konum</TableHead>
                  <TableHead>Cihaz</TableHead>
                  <TableHead>Durum</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loginHistory.map((login) => (
                  <TableRow key={login.id}>
                    <TableCell>{login.date}</TableCell>
                    <TableCell>{login.location}</TableCell>
                    <TableCell>{login.device}</TableCell>
                    <TableCell>
                      <Badge variant={login.status === 'success' ? 'default' : 'destructive'}>
                        {login.status === 'success' ? 'Başarılı' : 'Başarısız'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Security;
