
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, CreditCard, Download, Calendar, Receipt } from "lucide-react";
import { Link } from "react-router-dom";

const Billing = () => {
  const billingHistory = [
    {
      id: 1,
      date: "2024-01-20",
      amount: 29.99,
      tokens: 2500,
      status: "Paid",
      invoice: "INV-001"
    },
    {
      id: 2,
      date: "2024-01-05",
      amount: 9.99,
      tokens: 500,
      status: "Paid",
      invoice: "INV-002"
    },
    {
      id: 3,
      date: "2023-12-15",
      amount: 99.99,
      tokens: 10000,
      status: "Paid",
      invoice: "INV-003"
    }
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 gradient-text flex items-center">
              <CreditCard className="h-8 w-8 mr-3" />
              Billing & Invoices
            </h1>
            <p className="text-gray-300 text-lg">Manage your payments and download invoices</p>
          </div>

          {/* Current Plan */}
          <Card className="p-6 mb-8 glass-effect border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Current Usage</h2>
                <div className="text-gray-300">
                  <p>Total Spent This Month: <span className="text-white font-semibold">$29.99</span></p>
                  <p>Tokens Purchased: <span className="text-white font-semibold">2,500</span></p>
                </div>
              </div>
              <Link to="/pricing">
                <Button className="gradient-primary text-white border-0 hover:opacity-90">
                  Buy More Tokens
                </Button>
              </Link>
            </div>
          </Card>

          {/* Billing History */}
          <Card className="glass-effect border-white/10">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Receipt className="h-5 w-5 mr-2" />
                Billing History
              </h2>
            </div>
            
            <div className="divide-y divide-white/10">
              {billingHistory.map((transaction) => (
                <div key={transaction.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-white">{transaction.tokens.toLocaleString()} Tokens</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {transaction.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(transaction.date).toLocaleDateString()}</span>
                        </div>
                        <span>Invoice: {transaction.invoice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-semibold text-white">
                      ${transaction.amount}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-white/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {billingHistory.length === 0 && (
              <div className="p-12 text-center">
                <Receipt className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No billing history</h3>
                <p className="text-gray-400">Your transactions will appear here</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Billing;
