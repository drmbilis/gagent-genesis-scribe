
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface SystemStatusData {
  status: 'operational' | 'maintenance' | 'degraded' | 'outage';
  message: string;
}

const SystemStatus = () => {
  const [status, setStatus] = useState<SystemStatusData | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const { data } = await supabase
        .from('system_status')
        .select('status, message')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (data) setStatus(data);
    };

    fetchStatus();
    
    // Check status every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!status || status.status === 'operational') return null;

  const getStatusConfig = () => {
    switch (status.status) {
      case 'maintenance':
        return {
          icon: AlertTriangle,
          color: 'bg-yellow-500',
          textColor: 'text-yellow-800',
          bgColor: 'bg-yellow-50',
          label: 'Bakım'
        };
      case 'degraded':
        return {
          icon: AlertCircle,
          color: 'bg-orange-500',
          textColor: 'text-orange-800',
          bgColor: 'bg-orange-50',
          label: 'Yavaşlama'
        };
      case 'outage':
        return {
          icon: XCircle,
          color: 'bg-red-500',
          textColor: 'text-red-800',
          bgColor: 'bg-red-50',
          label: 'Kesinti'
        };
      default:
        return {
          icon: CheckCircle,
          color: 'bg-green-500',
          textColor: 'text-green-800',
          bgColor: 'bg-green-50',
          label: 'Normal'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} border-l-4 border-l-${config.color.replace('bg-', '')} p-4 mb-4`}>
      <div className="flex items-center space-x-3">
        <Icon className={`h-5 w-5 ${config.textColor}`} />
        <div>
          <Badge variant="outline" className={config.textColor}>
            {config.label}
          </Badge>
          <p className={`text-sm ${config.textColor} mt-1`}>
            {status.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
