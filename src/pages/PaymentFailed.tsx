
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, XCircle, RefreshCw, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentFailed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 glass-effect border-white/10 animate-slide-in-up">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <XCircle className="h-8 w-8 text-red-400" />
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="gradient-primary p-2 rounded-lg animate-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2 text-white">Payment Failed</h1>
            <p className="text-gray-300">
              An error occurred while processing your payment. 
              Please check your card details and try again.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Link to="/checkout" className="block">
            <Button className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </Link>
          
          <Link to="/pricing" className="block">
            <Button variant="ghost" className="w-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
              Back to Pricing
            </Button>
          </Link>
          
          <Link to="/contact" className="block">
            <Button variant="ghost" className="w-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
              <HelpCircle className="h-4 w-4 mr-2" />
              Get Support
            </Button>
          </Link>
        </div>

        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg text-left border border-white/10">
          <h3 className="font-medium text-sm mb-2 text-white">Possible Reasons:</h3>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• Insufficient balance</li>
            <li>• Incorrect card details</li>
            <li>• Expired card</li>
            <li>• Wrong security code</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default PaymentFailed;
