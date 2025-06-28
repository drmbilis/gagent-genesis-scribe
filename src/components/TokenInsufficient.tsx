
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TokenInsufficientProps {
  isVisible: boolean;
  onClose: () => void;
}

const TokenInsufficient = ({ isVisible, onClose }: TokenInsufficientProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full p-6 glass-effect border-white/10 animate-slide-in-up">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-400" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-white">Insufficient Token Balance</h3>
          <p className="text-gray-300 mb-6">
            You don't have enough tokens to perform this operation. 
            Purchase tokens to continue.
          </p>
          
          <div className="flex space-x-3">
            <Button 
              variant="ghost" 
              onClick={onClose} 
              className="flex-1 border border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Link to="/pricing" className="flex-1">
              <Button className="w-full gradient-primary text-white border-0 hover:opacity-90">
                <CreditCard className="h-4 w-4 mr-2" />
                Buy Tokens
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TokenInsufficient;
