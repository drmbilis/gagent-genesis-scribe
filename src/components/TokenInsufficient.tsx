
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full p-6">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Token Bakiyeniz Yetersiz</h3>
          <p className="text-gray-600 mb-6">
            Bu işlemi gerçekleştirmek için yeterli token bakiyeniz bulunmuyor. 
            Token satın alarak devam edebilirsiniz.
          </p>
          
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              İptal
            </Button>
            <Link to="/pricing" className="flex-1">
              <Button className="w-full gradient-primary text-white border-0">
                <CreditCard className="h-4 w-4 mr-2" />
                Token Satın Al
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TokenInsufficient;
