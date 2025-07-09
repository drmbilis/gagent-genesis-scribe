
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Upload, Download, MessageSquare, User, Settings, LogOut, Bell, History, CreditCard, Shield, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useTokens } from "@/hooks/useTokens";
import { useState, useEffect } from "react";
import SystemStatus from "@/components/SystemStatus";
import TokenInsufficient from "@/components/TokenInsufficient";
import AIServices from "@/components/AIServices";
import TokenManagement from "@/components/TokenManagement";
import UserDashboard from "@/components/UserDashboard";
import UserPaymentManagement from "@/components/UserPaymentManagement";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { tokens, refreshTokens } = useTokens();
  const { t, language, setLanguage } = useLanguage();
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [realTimeData, setRealTimeData] = useState({
    systemStatus: 'operational',
    activeUsers: 0,
    totalTokensUsed: 0
  });

  // Real-time data updates
  useEffect(() => {
    const fetchRealTimeData = async () => {
      try {
        // Fetch system status and stats
        const { data: systemData } = await supabase
          .from('system_status')
          .select('status, message')
          .order('updated_at', { ascending: false })
          .limit(1)
          .single();

        if (systemData && systemData.status) {
          setRealTimeData(prev => ({
            ...prev,
            systemStatus: systemData.status
          }));
        }
      } catch (error) {
        console.error('Error fetching real-time data:', error);
      }
    };

    fetchRealTimeData();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('dashboard-updates')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'system_status'
      }, (payload) => {
        console.log('System status update:', payload);
        if (payload.new && typeof payload.new === 'object' && 'status' in payload.new) {
          setRealTimeData(prev => ({
            ...prev,
            systemStatus: (payload.new as any).status
          }));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Refresh tokens periodically
  useEffect(() => {
    const interval = setInterval(() => {
      refreshTokens();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [refreshTokens]);

  const handleLogout = async () => {
    await signOut();
  };

  const handleSendMessage = async () => {
    if (!tokens || tokens.balance < 10) {
      setShowTokenModal(true);
      return;
    }
    
    try {
      // Call AI service (placeholder for now)
      toast({
        title: t('common.success'),
        description: "AI mesajınız işleniyor..."
      });
      
      // Refresh tokens after usage
      await refreshTokens();
    } catch (error) {
      console.error("Error processing AI message:", error);
      toast({
        title: t('common.error'),
        description: "AI mesajı işlenirken hata oluştu.",
        variant: "destructive"
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'ai-services':
        return <AIServices />;
      case 'tokens':
        return <TokenManagement />;
      case 'user-panel':
        return <UserDashboard />;
      case 'payment-management':
        return <UserPaymentManagement />;
      default:
        return (
          <>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="glass-effect p-6 border-white/10 hover:border-white/20 transition-all-smooth card-hover">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{t('tokens.remaining')}</p>
                    <p className="text-3xl font-bold text-white">{tokens?.balance?.toLocaleString() || '0'}</p>
                    {(tokens?.balance || 0) < 100 && (
                      <button 
                        onClick={() => setActiveTab('payment-management')}
                        className="text-xs text-red-400 hover:text-red-300 hover:underline"
                      >
                        {t('tokens.addTokens')} →
                      </button>
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
                    <p className="text-sm text-gray-400">{t('tokens.used')}</p>
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
                    <p className="text-sm text-gray-400">{t('tokens.monthlyCost')}</p>
                    <p className="text-3xl font-bold text-green-400">$4.76</p>
                  </div>
                  <div className="gradient-primary p-3 rounded-lg animate-glow">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="glass-effect p-6 mb-8 border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">{t('quick.actions')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Button 
                  onClick={() => setActiveTab('ai-services')}
                  variant="ghost" 
                  className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                >
                  <Brain className="h-5 w-5 mr-3" />
                  {t('dashboard.aiServices')}
                </Button>
                <Button 
                  onClick={() => setActiveTab('tokens')}
                  variant="ghost" 
                  className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                >
                  <History className="h-5 w-5 mr-3" />
                  {t('dashboard.tokenManagement')}
                </Button>
                <Button 
                  onClick={() => setActiveTab('user-panel')}
                  variant="ghost" 
                  className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                >
                  <User className="h-5 w-5 mr-3" />
                  {t('dashboard.userPanel')}
                </Button>
                <Button 
                  onClick={() => setActiveTab('payment-management')}
                  variant="ghost" 
                  className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  {t('payment.management')}
                </Button>
                <Link to="/billing">
                  <Button variant="ghost" className="w-full justify-start h-12 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20">
                    <CreditCard className="h-5 w-5 mr-3" />
                    {t('quick.billing')}
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
                  {t('ai.chat')}
                </h2>
                <div className="bg-gray-800/50 rounded-lg p-4 h-64 mb-4 overflow-y-auto border border-white/10">
                  <p className="text-gray-400 text-center mt-20">
                    {t('ai.startConversation')}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder={t('ai.sendMessage')}
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                  <Button 
                    className="gradient-primary text-white border-0 hover:opacity-90"
                    onClick={handleSendMessage}
                    disabled={!tokens || tokens.balance < 10}
                  >
                    {t('ai.send')}
                  </Button>
                </div>
                {tokens && tokens.balance < 10 && (
                  <p className="text-xs text-red-400 mt-2">
                    {t('tokens.insufficient')}. 
                    <Button 
                      onClick={() => setActiveTab('payment-management')}
                      variant="link" 
                      className="text-red-400 hover:text-red-300 p-0 ml-1 h-auto underline"
                    >
                      {t('tokens.buy')}
                    </Button>
                  </p>
                )}
              </Card>

              {/* File Management */}
              <Card className="glass-effect p-6 border-white/10">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <Upload className="h-5 w-5 mr-2" />
                  {t('files.management')}
                </h2>
                
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center mb-4 hover:border-white/30 transition-colors">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-300 mb-2">{t('files.dragDrop')}</p>
                  <Button variant="outline" className="border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
                    {t('files.selectFile')}
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-white">{t('files.recentFiles')}</h3>
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
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
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleLanguage}
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>
              <Link to="/admin">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Shield className="h-4 w-4 mr-2" />
                  {t('admin.panel')}
                </Button>
              </Link>
              <Link to="/notifications">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <Bell className="h-4 w-4 mr-2" />
                  {t('admin.notifications')}
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                  <User className="h-4 w-4 mr-2" />
                  {t('admin.profile')}
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Settings className="h-4 w-4 mr-2" />
                {t('admin.settings')}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-300 hover:text-white hover:bg-white/10">
                <LogOut className="h-4 w-4 mr-2" />
                {t('admin.logout')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* System Status */}
        <SystemStatus />
        
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap space-x-1 bg-gray-800/50 p-1 rounded-lg w-fit">
            <Button
              onClick={() => setActiveTab('overview')}
              variant={activeTab === 'overview' ? 'default' : 'ghost'}
              className={activeTab === 'overview' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              {t('dashboard.overview')}
            </Button>
            <Button
              onClick={() => setActiveTab('ai-services')}
              variant={activeTab === 'ai-services' ? 'default' : 'ghost'}
              className={activeTab === 'ai-services' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              {t('dashboard.aiServices')}
            </Button>
            <Button
              onClick={() => setActiveTab('tokens')}
              variant={activeTab === 'tokens' ? 'default' : 'ghost'}
              className={activeTab === 'tokens' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              {t('dashboard.tokenManagement')}
            </Button>
            <Button
              onClick={() => setActiveTab('user-panel')}
              variant={activeTab === 'user-panel' ? 'default' : 'ghost'}
              className={activeTab === 'user-panel' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              {t('dashboard.userPanel')}
            </Button>
            <Button
              onClick={() => setActiveTab('payment-management')}
              variant={activeTab === 'payment-management' ? 'default' : 'ghost'}
              className={activeTab === 'payment-management' ? 'gradient-primary text-white' : 'text-gray-300 hover:text-white'}
            >
              {t('payment.management')}
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">{t('dashboard.title')}</h1>
          <p className="text-gray-300 text-lg">
            {t('dashboard.welcome')} {user?.email}! GAGENT AI asistanınızla çalışmaya başlayın
          </p>
        </div>

        {renderContent()}
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
