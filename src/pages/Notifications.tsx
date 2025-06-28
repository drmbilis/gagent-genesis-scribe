
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Bell, Check, Trash2, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Token Purchase Successful",
      message: "Your 2,500 tokens have been added to your account",
      time: "2 hours ago",
      read: false,
      type: "success"
    },
    {
      id: 2,
      title: "AI Model Updated",
      message: "New AI model with improved performance is now available",
      time: "1 day ago",
      read: false,
      type: "info"
    },
    {
      id: 3,
      title: "Low Token Balance",
      message: "You have less than 100 tokens remaining",
      time: "2 days ago",
      read: true,
      type: "warning"
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </div>
            
            <Link to="/dashboard">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 gradient-text flex items-center">
                <Bell className="h-8 w-8 mr-3" />
                Notifications
              </h1>
              <p className="text-gray-300 text-lg">Stay updated with your account activity</p>
            </div>
            
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className={`p-6 glass-effect border-white/10 hover:border-white/20 transition-all-smooth ${!notification.read ? 'ring-1 ring-blue-500/30' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-white">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <p className="text-gray-300 mb-2">{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.time}</p>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    {!notification.read && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => markAsRead(notification.id)}
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteNotification(notification.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            
            {notifications.length === 0 && (
              <Card className="p-12 glass-effect border-white/10 text-center">
                <Bell className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No notifications</h3>
                <p className="text-gray-400">You're all caught up!</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
