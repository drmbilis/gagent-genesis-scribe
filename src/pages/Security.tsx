
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Shield, Key, Eye, EyeOff, Smartphone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Security = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change requested");
    // Password change logic
  };

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
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 gradient-text flex items-center">
              <Shield className="h-8 w-8 mr-3" />
              Security Settings
            </h1>
            <p className="text-gray-300 text-lg">Protect your account with advanced security features</p>
          </div>

          <div className="space-y-6">
            {/* Password Change */}
            <Card className="p-6 glass-effect border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Change Password
              </h2>
              
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Current Password</Label>
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      value={passwordForm.currentPassword}
                      onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                      className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 pr-10"
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-300">New Password</Label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      value={passwordForm.newPassword}
                      onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                      className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 pr-10"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-300">Confirm New Password</Label>
                  <Input
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                    className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    placeholder="Confirm new password"
                  />
                </div>
                
                <Button type="submit" className="gradient-primary text-white border-0 hover:opacity-90">
                  Update Password
                </Button>
              </form>
            </Card>

            {/* Two-Factor Authentication */}
            <Card className="p-6 glass-effect border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Two-Factor Authentication
                  </h2>
                  <p className="text-gray-300 text-sm mt-1">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button
                  variant={twoFactorEnabled ? "destructive" : "default"}
                  onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  className={twoFactorEnabled ? "" : "gradient-primary text-white border-0 hover:opacity-90"}
                >
                  {twoFactorEnabled ? "Disable" : "Enable"}
                </Button>
              </div>
              
              {twoFactorEnabled && (
                <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-300 text-sm">
                    Two-factor authentication is enabled. Use your authenticator app to generate codes.
                  </p>
                </div>
              )}
            </Card>

            {/* Active Sessions */}
            <Card className="p-6 glass-effect border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Active Sessions
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white font-medium">Current Session</p>
                    <p className="text-sm text-gray-400">Chrome on Windows • 192.168.1.1</p>
                    <p className="text-xs text-gray-500">Active now</p>
                  </div>
                  <span className="text-green-400 text-sm">Current</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white font-medium">Mobile Device</p>
                    <p className="text-sm text-gray-400">Safari on iPhone • 10.0.0.1</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                    Revoke
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
