
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="gradient-primary p-2 rounded-lg animate-glow">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">GAGENT</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Hoş Geldiniz</h1>
          <p className="text-gray-600">Hesabınıza giriş yapın</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Şifre</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Şifrenizi girin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full gradient-primary text-white border-0">
            Giriş Yap
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Şifremi Unuttum
          </Link>
          <div className="border-t pt-4">
            <p className="text-gray-600">
              Hesabınız yok mu?{" "}
              <Link to="/register" className="text-blue-600 hover:underline font-medium">
                Kayıt Olun
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
