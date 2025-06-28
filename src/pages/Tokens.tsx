
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Zap, CreditCard, History, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Tokens = () => {
  const tokenPackages = [
    { tokens: 1000, price: 29, popular: false },
    { tokens: 5000, price: 99, popular: true },
    { tokens: 10000, price: 179, popular: false },
    { tokens: 25000, price: 399, popular: false }
  ];

  const purchaseHistory = [
    { date: "2024-01-15", tokens: 5000, price: 99, status: "Completed" },
    { date: "2024-01-10", tokens: 1000, price: 29, status: "Completed" },
    { date: "2024-01-05", tokens: 2000, price: 49, status: "Completed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </div>
            
            <Link to="/dashboard">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Token Management</h1>
          <p className="text-gray-300 text-lg">View your token balance and purchase new tokens</p>
        </div>

        {/* Current Balance */}
        <Card className="p-8 mb-8 gradient-primary text-white border-0 animate-glow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Current Token Balance</h2>
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8" />
                <span className="text-4xl font-bold">2,500</span>
                <span className="text-xl">Tokens</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Last Used</p>
              <p className="text-lg">2024-01-20</p>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Token Packages */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <Plus className="h-6 w-6 mr-2" />
              Token Packages
            </h2>
            <div className="space-y-4">
              {tokenPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`p-6 glass-effect border-white/10 hover:border-white/20 transition-all-smooth card-hover ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {pkg.popular && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-blue-400" />
                        <span className="text-2xl font-bold text-white">{pkg.tokens.toLocaleString()}</span>
                        <span className="text-gray-300">Tokens</span>
                      </div>
                      <p className="text-3xl font-bold text-blue-400">${pkg.price}</p>
                    </div>
                    <Button 
                      className={pkg.popular ? 'gradient-primary text-white border-0' : 'border border-white/20 text-gray-300 hover:text-white hover:bg-white/10'}
                      variant={pkg.popular ? 'default' : 'ghost'}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Purchase
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-400">
                    <p>Per token: ${(pkg.price / pkg.tokens).toFixed(4)}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Purchase History */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-white">
              <History className="h-6 w-6 mr-2" />
              Purchase History
            </h2>
            <Card className="p-6 glass-effect border-white/10">
              <div className="space-y-4">
                {purchaseHistory.map((purchase, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-white/10">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Zap className="h-4 w-4 text-blue-400" />
                        <span className="font-semibold text-white">{purchase.tokens.toLocaleString()} Tokens</span>
                      </div>
                      <p className="text-sm text-gray-400">{purchase.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">${purchase.price}</p>
                      <span className="text-sm text-green-400">{purchase.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {purchaseHistory.length === 0 && (
                <div className="text-center py-8">
                  <History className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-400">No token purchases yet</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
