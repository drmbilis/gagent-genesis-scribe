
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Brain, Users, Gift, Copy, Share2, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Referral = () => {
  const [referralCode] = useState("GAGENT-ABC123");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://gagent.app/register?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralStats = {
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarned: 240,
    pendingRewards: 60
  };

  const recentReferrals = [
    { name: "John D.", date: "2024-01-20", status: "Active", reward: 20 },
    { name: "Sarah M.", date: "2024-01-18", status: "Active", reward: 20 },
    { name: "Mike R.", date: "2024-01-15", status: "Pending", reward: 20 },
    { name: "Lisa K.", date: "2024-01-12", status: "Active", reward: 20 }
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
              <Users className="h-8 w-8 mr-3" />
              Referral Program
            </h1>
            <p className="text-gray-300 text-lg">Earn rewards by inviting friends to GAGENT</p>
          </div>

          {/* Referral Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 glass-effect border-white/10 text-center">
              <Trophy className="h-8 w-8 mx-auto text-yellow-400 mb-2" />
              <p className="text-2xl font-bold text-white">{referralStats.totalReferrals}</p>
              <p className="text-sm text-gray-400">Total Referrals</p>
            </Card>
            
            <Card className="p-4 glass-effect border-white/10 text-center">
              <Users className="h-8 w-8 mx-auto text-green-400 mb-2" />
              <p className="text-2xl font-bold text-white">{referralStats.activeReferrals}</p>
              <p className="text-sm text-gray-400">Active Users</p>
            </Card>
            
            <Card className="p-4 glass-effect border-white/10 text-center">
              <Gift className="h-8 w-8 mx-auto text-blue-400 mb-2" />
              <p className="text-2xl font-bold text-white">{referralStats.totalEarned}</p>
              <p className="text-sm text-gray-400">Tokens Earned</p>
            </Card>
            
            <Card className="p-4 glass-effect border-white/10 text-center">
              <Gift className="h-8 w-8 mx-auto text-purple-400 mb-2" />
              <p className="text-2xl font-bold text-white">{referralStats.pendingRewards}</p>
              <p className="text-sm text-gray-400">Pending Rewards</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Referral Link */}
            <Card className="p-6 glass-effect border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Share2 className="h-5 w-5 mr-2" />
                Your Referral Link
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Referral Code</label>
                  <div className="flex space-x-2">
                    <Input
                      value={referralCode}
                      readOnly
                      className="bg-gray-800/50 border-white/20 text-white"
                    />
                    <Button
                      onClick={copyToClipboard}
                      variant="ghost"
                      className="border border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Referral Link</label>
                  <div className="flex space-x-2">
                    <Input
                      value={`https://gagent.app/register?ref=${referralCode}`}
                      readOnly
                      className="bg-gray-800/50 border-white/20 text-white text-sm"
                    />
                    <Button
                      onClick={copyToClipboard}
                      className="gradient-primary text-white border-0 hover:opacity-90"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
                
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="font-semibold text-blue-300 mb-2">How it works:</h3>
                  <ul className="text-sm text-blue-200 space-y-1">
                    <li>• Share your referral link with friends</li>
                    <li>• They sign up and make their first purchase</li>
                    <li>• You both get 20 bonus tokens!</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Recent Referrals */}
            <Card className="p-6 glass-effect border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Recent Referrals
              </h2>
              
              <div className="space-y-3">
                {recentReferrals.map((referral, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-white/10">
                    <div>
                      <p className="font-medium text-white">{referral.name}</p>
                      <p className="text-sm text-gray-400">{new Date(referral.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        referral.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {referral.status}
                      </span>
                      <p className="text-sm text-white mt-1">+{referral.reward} tokens</p>
                    </div>
                  </div>
                ))}
                
                {recentReferrals.length === 0 && (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-400">No referrals yet</p>
                    <p className="text-sm text-gray-500">Start sharing your link to earn rewards!</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
