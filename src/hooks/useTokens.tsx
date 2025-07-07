
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface TokenData {
  balance: number;
  total_used: number;
  last_updated: string;
}

export const useTokens = () => {
  const { user } = useAuth();
  const [tokens, setTokens] = useState<TokenData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTokens = async () => {
    if (!user) {
      setTokens(null);
      setIsLoading(false);
      return;
    }

    try {
      // Fetch from payment_history or create mock data
      const { data: paymentData, error } = await supabase
        .from('payment_history')
        .select('tokens_purchased, created_at')
        .eq('user_id', user.id)
        .eq('status', 'completed')
        .order('created_at', { ascending: false });

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('Error fetching tokens:', error);
      }

      // Calculate token balance (this would normally be stored in a separate table)
      const totalPurchased = paymentData?.reduce((sum, payment) => sum + payment.tokens_purchased, 0) || 15000;
      const totalUsed = Math.floor(Math.random() * 6500); // Mock usage
      const balance = totalPurchased - totalUsed;

      setTokens({
        balance: Math.max(0, balance),
        total_used: totalUsed,
        last_updated: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error in fetchTokens:', error);
      // Set default values for demo
      setTokens({
        balance: 8500,
        total_used: 6500,
        last_updated: new Date().toISOString()
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refreshTokens = async () => {
    await fetchTokens();
  };

  useEffect(() => {
    fetchTokens();
  }, [user]);

  return {
    tokens,
    isLoading,
    refreshTokens
  };
};
