
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Login logic will be implemented with Supabase
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 glass-effect border-white/10 animate-slide-in-up">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="gradient-primary p-2 rounded-lg animate-glow">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">GAGENT</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-white">Welcome Back</h1>
          <p className="text-gray-300">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 hover:underline">
            Forgot Password?
          </Link>
          <div className="border-t border-white/10 pt-4">
            <p className="text-gray-300">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-400 hover:text-blue-300 hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
