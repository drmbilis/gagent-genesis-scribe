
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, User, Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Kullanıcı Adı",
    email: "kullanici@email.com",
    phone: "+90 555 123 4567",
    joinDate: "15 Ocak 2024"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    console.log("Profile updated:", profileData);
    setIsEditing(false);
    // Profile update logic will be implemented with Supabase
  };

  const handleChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
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
            
            <Link to="/dashboard">
              <Button variant="outline">
                Dashboard'a Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Profil Ayarları</h1>
            <p className="text-gray-600">Hesap bilgilerinizi yönetin</p>
          </div>

          <Card className="p-8">
            {/* Profile Avatar */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{profileData.name}</h2>
                <p className="text-gray-600">{profileData.email}</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Fotoğraf Değiştir
                </Button>
              </div>
            </div>

            {/* Profile Form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="joinDate">Üyelik Tarihi</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="joinDate"
                      value={profileData.joinDate}
                      disabled
                      className="pl-10 bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                {!isEditing ? (
                  <Button 
                    onClick={() => setIsEditing(true)}
                    className="gradient-primary text-white border-0"
                  >
                    Düzenle
                  </Button>
                ) : (
                  <>
                    <Button 
                      onClick={handleSave}
                      className="gradient-primary text-white border-0"
                    >
                      Kaydet
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      İptal
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>

          {/* Account Settings */}
          <Card className="p-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Hesap Ayarları</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Şifre Değiştir
              </Button>
              <Button variant="outline" className="w-full justify-start">
                İki Faktörlü Doğrulama
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                Hesabı Sil
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
