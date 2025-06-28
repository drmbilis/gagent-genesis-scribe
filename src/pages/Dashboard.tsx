
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
    console.log("Processing AI message...");
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
            
            <div className="flex items-center space-x-4">
              <Link to="/notifications">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-300 hover:text-white hover:bg-white/10">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* System Status */}
        <SystemStatus />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Dashboard</h1>
          <p className="text-gray-300 text-lg">
            Welcome {user?.email}! Start working with your GAGENT AI assistant
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-effect p-6 border-white/10 hover:border-white/20 transition-all-smooth card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Remaining Tokens</p>
                <p className="text-3xl font-bold text-white">{tokens?.balance?.toLocaleString() || '0'}</p>
                {(tokens?.balance || 0) < 100 && (
                  <Link to="/pricing" className="text-xs text-red-400 hover:text-red-300 hover:underline">
                    Add tokens →
                  </Link>
                )}
              </div>
              <div className="gradient-primary p-3 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="glass-effect p-6 border-white/10 hover:border-white/20 transition-all-smooth card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Used</p>
                <p className="text-3xl font-bold text-white">{tokens?.total_used?.toLocaleString() || '0'}</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg animate-glow">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
          
          <Card className="glass-effect p-6 border-white/10 hover:border-white/20 transition-all-smooth card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Purchased</p>
                <p className="text-3xl font-bold text-white">{tokens?.total_purchased?.toLocaleString() || '0'}</p>
              </div>
              <div className="gradient-primary p-3 rounded-lg animate-glow">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="glass-effect p-6 mb-8 border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/tokens">
              <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                <Brain className="h-5 w-5 mr-3" />
                Token Management
              </Button>
            </Link>
            <Link to="/history">
              <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                <History className="h-5 w-5 mr-3" />
                History
              </Button>
            </Link>
            <Link to="/billing">
              <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                <CreditCard className="h-5 w-5 mr-3" />
                Billing
              </Button>
            </Link>
            <Link to="/security">
              <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                <Shield className="h-5 w-5 mr-3" />
                Security
              </Button>
            </Link>
            <Link to="/referral">
              <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                <Users className="h-5 w-5 mr-3" />
                Referral
              </Button>
            </Link>
            <Link to="/notifications">
              <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </Button>
            </Link>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Chat Section */}
          <Card className="glass-effect p-6 border-white/10">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              AI Chat
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-4 h-64 mb-4 overflow-y-auto border border-white/10">
              <p className="text-gray-400 text-center mt-20">
                Start chatting with your AI assistant...
              </p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <Button 
                className="gradient-primary text-white border-0 hover:opacity-90"
                onClick={handleSendMessage}
                disabled={!tokens || tokens.balance < 10}
              >
                Send
              </Button>
            </div>
            {tokens && tokens.balance < 10 && (
              <p className="text-xs text-red-400 mt-2">
                At least 10 tokens required to send a message. 
                <Link to="/pricing" className="underline ml-1 hover:text-red-300">Buy tokens</Link>
              </p>
            )}
          </Card>

          {/* File Management */}
          <Card className="glass-effect p-6 border-white/10">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
              <Upload className="h-5 w-5 mr-2" />
              File Management
            </h2>
            
            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center mb-4 hover:border-white/30 transition-colors">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-300 mb-2">Drag your files here or select them</p>
              <Button variant="outline" className="border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
                Select Files
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-white">Recently Uploaded Files</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-800/30 rounded border border-white/10">
                  <span className="text-sm text-gray-300">document.pdf</span>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-800/30 rounded border border-white/10">
                  <span className="text-sm text-gray-300">data.xlsx</span>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
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
