
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  TrendingUp, 
  XCircle, 
  CheckCircle,
  DollarSign,
  Calendar,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

interface UserPlan {
  name: string;
  price: number;
  tokensRemaining: number;
  totalTokens: number;
  validUntil: string;
  autoRenew: boolean;
  status: 'active' | 'inactive' | 'cancelled';
}

const UserPaymentManagement = () => {
  const { t } = useLanguage();
  const [userPlan, setUserPlan] = useState<UserPlan>({
    name: 'Pro Plan',
    price: 29.99,
    tokensRemaining: 8500,
    totalTokens: 15000,
    validUntil: '2024-02-20',
    autoRenew: true,
    status: 'active'
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserPlan = async () => {
    try {
      setIsLoading(true);
      // Call check-subscription edge function
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        console.error('Error fetching subscription:', error);
        return;
      }
      
      if (data) {
        // Update user plan based on response
        setUserPlan(prev => ({
          ...prev,
          status: data.subscribed ? 'active' : 'inactive',
          name: data.subscription_tier || 'Basic Plan',
          validUntil: data.subscription_end || prev.validUntil
        }));
      }
    } catch (error) {
      console.error('Error in fetchUserPlan:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPlan();
  }, []);

  const handleUpgradePlan = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planId: 'pro' }
      });
      
      if (error) {
        toast({
          title: "Hata",
          description: "Ödeme sayfası açılamadı.",
          variant: "destructive"
        });
        return;
      }
      
      if (data?.url) {
        window.open(data.url, '_blank');
        toast({
          title: "Yönlendiriliyor",
          description: "Stripe ödeme sayfasına yönlendiriliyorsunuz."
        });
      }
    } catch (error) {
      console.error('Error in handleUpgradePlan:', error);
      toast({
        title: "Hata",
        description: "Bir hata oluştu.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) {
        toast({
          title: "Hata",
          description: "Portal açılamadı.",
          variant: "destructive"
        });
        return;
      }
      
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error in handleManageSubscription:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('cancel-subscription');
      
      if (error) {
        toast({
          title: "Hata",
          description: "Abonelik iptal edilemedi.",
          variant: "destructive"
        });
        return;
      }
      
      toast({
        title: "Başarılı",
        description: "Aboneliğiniz iptal edildi."
      });
      
      await fetchUserPlan(); // Refresh plan data
    } catch (error) {
      console.error('Error in handleCancelSubscription:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const tokenUsagePercentage = ((userPlan.totalTokens - userPlan.tokensRemaining) / userPlan.totalTokens) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{t('payment.management')}</h2>
        <Button 
          className="gradient-primary" 
          onClick={handleManageSubscription}
          disabled={isLoading}
        >
          <CreditCard className="h-4 w-4 mr-2" />
          {t('payment.openStripePortal')}
        </Button>
      </div>

      {/* Current Plan */}
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            {t('payment.yourCurrentPlan')}
            <Badge className={userPlan.status === 'active' ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}>
              {userPlan.status === 'active' ? (
                <>
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {t('payment.active')}
                </>
              ) : (
                <>
                  <XCircle className="w-3 h-3 mr-1" />
                  İnaktif
                </>
              )}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{userPlan.name}</h3>
              <p className="text-3xl font-bold text-green-400 mb-4">
                ${userPlan.price}{t('payment.monthlyPayment')}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">{t('payment.tokenLimit')}:</span>
                  <span className="text-white">{userPlan.totalTokens.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t('payment.remainingTokens')}:</span>
                  <span className="text-green-400">{userPlan.tokensRemaining.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t('payment.renewalDate')}:</span>
                  <span className="text-white">{userPlan.validUntil}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">{t('payment.autoRenewal')}:</span>
                  <span className={userPlan.autoRenew ? "text-green-400" : "text-red-400"}>
                    {userPlan.autoRenew ? t('payment.active') : "Pasif"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">{t('payment.tokenUsage')}</span>
                  <span className="text-white">{tokenUsagePercentage.toFixed(1)}%</span>
                </div>
                <Progress value={tokenUsagePercentage} className="h-2" />
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full gradient-primary"
                  onClick={handleUpgradePlan}
                  disabled={isLoading}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {t('payment.upgradePlan')}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleManageSubscription}
                  disabled={isLoading}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  {t('payment.manageSubscription')}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-red-400 border-red-400 hover:bg-red-400/10" 
                  onClick={handleCancelSubscription}
                  disabled={isLoading}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {t('payment.cancelSubscription')}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">{t('tokens.remaining')}</p>
              <p className="text-3xl font-bold text-green-400">{userPlan.tokensRemaining.toLocaleString()}</p>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">{t('tokens.used')}</p>
              <p className="text-3xl font-bold text-blue-400">{(userPlan.totalTokens - userPlan.tokensRemaining).toLocaleString()}</p>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
        
        <Card className="glass-effect p-6 border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">{t('tokens.monthlyCost')}</p>
              <p className="text-3xl font-bold text-green-400">${userPlan.price}</p>
            </div>
            <div className="gradient-primary p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserPaymentManagement;
