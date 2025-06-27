
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="gradient-primary p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Ödeme Başarılı!</h1>
          <p className="text-gray-600">
            Token'larınız hesabınıza başarıyla eklendi. 
            Artık AI asistanınızla çalışmaya başlayabilirsiniz.
          </p>
        </div>

        <div className="space-y-3">
          <Link to="/dashboard" className="block">
            <Button className="w-full gradient-primary text-white border-0">
              Dashboard'a Git
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          
          <Link to="/pricing" className="block">
            <Button variant="outline" className="w-full">
              Daha Fazla Token Satın Al
            </Button>
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Fatura bilgileriniz e-posta adresinize gönderildi.
        </p>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
