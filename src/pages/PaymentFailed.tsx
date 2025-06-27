
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, XCircle, RefreshCw, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentFailed = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="gradient-primary p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Ödeme Başarısız</h1>
          <p className="text-gray-600">
            Ödemeniz işlenirken bir hata oluştu. 
            Lütfen kart bilgilerinizi kontrol edin ve tekrar deneyin.
          </p>
        </div>

        <div className="space-y-3">
          <Link to="/checkout" className="block">
            <Button className="w-full gradient-primary text-white border-0">
              <RefreshCw className="h-4 w-4 mr-2" />
              Tekrar Dene
            </Button>
          </Link>
          
          <Link to="/pricing" className="block">
            <Button variant="outline" className="w-full">
              Paket Seçimine Dön
            </Button>
          </Link>
          
          <Link to="/contact" className="block">
            <Button variant="outline" className="w-full">
              <HelpCircle className="h-4 w-4 mr-2" />
              Destek Al
            </Button>
          </Link>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left">
          <h3 className="font-medium text-sm mb-2">Olası Nedenler:</h3>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Yetersiz bakiye</li>
            <li>• Kart bilgileri hatalı</li>
            <li>• Kartın kullanım süresi dolmuş</li>
            <li>• Güvenlik kodu yanlış</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default PaymentFailed;
