
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 glass-effect border-white/10 animate-slide-in-up">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="gradient-primary p-2 rounded-lg animate-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2 text-white">Payment Successful!</h1>
            <p className="text-gray-300">
              Your tokens have been successfully added to your account. 
              You can now start working with your AI assistant.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Link to="/dashboard" className="block">
            <Button className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
              Go to Dashboard
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          
          <Link to="/pricing" className="block">
            <Button variant="ghost" className="w-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10">
              Buy More Tokens
            </Button>
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6 text-center">
          Invoice details have been sent to your email address.
        </p>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
