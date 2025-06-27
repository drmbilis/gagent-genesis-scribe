
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bell, AlertCircle, Info, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "warning",
      title: "Token Bakiyeniz Azalıyor",
      message: "Kalan token sayınız 500'ün altına düştü. Yeni token paketi satın almayı düşünün.",
      date: "2 saat önce",
      isRead: false
    },
    {
      id: 2,
      type: "info",
      title: "Sistem Güncellemesi",
      message: "GAGENT AI'da yeni özellikler eklendi. Dashboard'ınızı kontrol edin.",
      date: "1 gün önce",
      isRead: false
    },
    {
      id: 3,
      type: "success", 
      title: "Ödeme Başarılı",
      message: "2500 token paketi hesabınıza başarıyla eklendi.",
      date: "3 gün önce",
      isRead: true
    },
    {
      id: 4,
      type: "error",
      title: "Planlı Bakım",
      message: "Sistemimiz yarın 02:00-04:00 arası bakım nedeniyle erişilemeyecek.",
      date: "5 gün önce",
      isRead: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case "warning": return AlertCircle;
      case "info": return Info;
      case "success": return CheckCircle;
      case "error": return AlertCircle;
      default: return Bell;
    }
  };

  const getIconColor = (type: string) => {
    switch(type) {
      case "warning": return "text-yellow-500";
      case "info": return "text-blue-500";
      case "success": return "text-green-500";
      case "error": return "text-red-500";
      default: return "text-gray-500";
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Bell className="h-8 w-8 mr-3" />
              Bildirimler
            </h1>
            <p className="text-gray-600">Sistem duyuruları ve önemli bilgilendirmeler</p>
          </div>

          {/* Notification Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{notifications.filter(n => !n.isRead).length}</p>
                <p className="text-sm text-gray-600">Okunmamış</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{notifications.length}</p>
                <p className="text-sm text-gray-600">Toplam Bildirim</p>
              </div>
            </Card>
            <Card className="p-4">
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => setNotifications(prev => prev.map(n => ({...n, isRead: true})))}
                >
                  Tümünü Okundu İşaretle
                </Button>
              </div>
            </Card>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {notifications.map((notification) => {
              const IconComponent = getIcon(notification.type);
              return (
                <Card key={notification.id} className={`p-6 ${!notification.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`p-2 rounded-lg ${getIconColor(notification.type)}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{notification.title}</h3>
                          {!notification.isRead && (
                            <Badge variant="secondary" className="text-xs">Yeni</Badge>
                          )}
                        </div>
                        <p className="text-gray-700 mb-2">{notification.message}</p>
                        <p className="text-sm text-gray-500">{notification.date}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!notification.isRead && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Okundu
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
