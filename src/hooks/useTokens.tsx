
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface TokenData {
  balance: number;
  total_purchased: number;
  total_used: number;
}

export const useTokens = () => {
  const [tokens, setTokens] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchTokens = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_tokens')
        .select('balance, total_purchased, total_used')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      setTokens(data);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateTokenBalance = async (amount: number) => {
    if (!user || !tokens) return;

    try {
      const newBalance = tokens.balance + amount;
      const { error } = await supabase
        .from('user_tokens')
        .update({ 
          balance: newBalance,
          total_used: amount < 0 ? tokens.total_used + Math.abs(amount) : tokens.total_used,
          total_purchased: amount > 0 ? tokens.total_purchased + amount : tokens.total_purchased
        })
        .eq('user_id', user.id);

      if (error) throw error;
      
      setTokens(prev => prev ? {
        ...prev,
        balance: newBalance,
        total_used: amount < 0 ? prev.total_used + Math.abs(amount) : prev.total_used,
        total_purchased: amount > 0 ? prev.total_purchased + amount : prev.total_purchased
      } : null);
    } catch (error) {
      console.error('Error updating token balance:', error);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, [user]);

  return {
    tokens,
    loading,
    updateTokenBalance,
    refetch: fetchTokens
  };
};
