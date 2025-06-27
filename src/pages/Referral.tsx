
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, Users, Gift, Share2, Copy, Trophy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Referral = () => {
  const [referralCode] = useState("GAGENT-ABC123");
  const [referralStats] = useState({
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarnings: 480,
    pendingRewards: 120
  });

  const [referralHistory] = useState([
    {
      id: 1,
      email: "ahmet@example.com",
      joinDate: "2024-01-10",
      status: "active",
      reward: 50,
      level: "Pro"
    },
    {
      id: 2,
      email: "ayse@example.com", 
      joinDate: "2024-01-08",
      status: "active",
      reward: 30,
      level: "Basic"
    },
    {
      id: 3,
      email: "mehmet@example.com",
      joinDate: "2024-01-05",
      status: "pending",
      reward: 0,
      level: "-"
    }
  ]);

  const copyReferralLink = () => {
    const referralLink = `https://gagent.ai/register?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    // Toast notification can be added here
  };

  const shareOnSocial = (platform: string) => {
    const referralLink = `https://gagent.ai/register?ref=${referralCode}`;
    const message = `GAGENT AI ile tanışın! Güçlü AI asistanı ile işlerinizi kolaylaştırın. Bu linkten kayıt olun: ${referralLink}`;
    
    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Users className="h-8 w-8 mr-3" />
              Referans Sistemi
            </h1>
            <p className="text-gray-600">Arkadaşlarınızı davet edin, ödüller kazanın!</p>
          </div>

          {/* Referral Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Toplam Referans</p>
                  <p className="text-3xl font-bold">{referralStats.totalReferrals}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Aktif Referans</p>
                  <p className="text-3xl font-bold">{referralStats.activeReferrals}</p>
                </div>
                <Trophy className="h-8 w-8 text-green-500" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Toplam Kazanç</p>
                  <p className="text-3xl font-bold">${referralStats.totalEarnings}</p>
                </div>
                <Gift className="h-8 w-8 text-purple-500" />
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Bekleyen Ödül</p>
                  <p className="text-3xl font-bold">${referralStats.pendingRewards}</p>
                </div>
                <Gift className="h-8 w-8 text-orange-500" />
              </div>
            </Card>
          </div>

          {/* Referral Program Info */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <h2 className="text-xl font-semibold mb-4">🎉 Referans Programı Nasıl Çalışır?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Share2 className="h-8 w-8 mx-auto text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">1. Davet Et</h3>
                <p className="text-sm text-gray-600">Arkadaşlarınızı özel referans linkinizle davet edin</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Users className="h-8 w-8 mx-auto text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">2. Kayıt Olsun</h3>
                <p className="text-sm text-gray-600">Arkadaşınız GAGENT'e kayıt olup plan satın alsın</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                  <Gift className="h-8 w-8 mx-auto text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">3. Ödül Kazan</h3>
                <p className="text-sm text-gray-600">Her başarılı referans için %20 komisyon kazanın</p>
              </div>
            </div>
          </Card>

          {/* Referral Link */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Referans Linkiniz</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  value={`https://gagent.ai/register?ref=${referralCode}`}
                  readOnly
                  className="bg-gray-50"
                />
                <Button onClick={copyReferralLink} variant="outline">
                  <Copy className="h-4 w-4 mr-2" />
                  Kopyala
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Button onClick={() => shareOnSocial('twitter')} className="bg-blue-500 hover:bg-blue-600 text-white">
                  Twitter'da Paylaş
                </Button>
                <Button onClick={() => shareOnSocial('facebook')} className="bg-blue-700 hover:bg-blue-800 text-white">
                  Facebook'ta Paylaş  
                </Button>
                <Button onClick={() => shareOnSocial('linkedin')} className="bg-blue-600 hover:bg-blue-700 text-white">
                  LinkedIn'de Paylaş
                </Button>
              </div>
            </div>
          </Card>

          {/* Referral History */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Referans Geçmişi</h2>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>E-posta</TableHead>
                  <TableHead>Katılım Tarihi</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Kazanç</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referralHistory.map((referral) => (
                  <TableRow key={referral.id}>
                    <TableCell className="font-medium">{referral.email}</TableCell>
                    <TableCell>{referral.joinDate}</TableCell>
                    <TableCell>
                      {referral.level !== '-' && (
                        <Badge variant="outline">{referral.level}</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={referral.status === 'active' ? 'default' : 'secondary'}>
                        {referral.status === 'active' ? 'Aktif' : 'Beklemede'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-green-600">
                        {referral.reward > 0 ? `$${referral.reward}` : '-'}
                      </span>
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

export default Referral;
