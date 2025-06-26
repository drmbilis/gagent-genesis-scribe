
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
    // Password reset logic will be implemented with Supabase
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

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Şifremi Unuttum</h1>
              <p className="text-gray-600">
                E-posta adresinizi girin, şifre sıfırlama linkini gönderelim
              </p>
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

              <Button type="submit" className="w-full gradient-primary text-white border-0">
                Sıfırlama Linki Gönder
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                E-posta Gönderildi!
              </h2>
              <p className="text-green-700">
                {email} adresine şifre sıfırlama linki gönderildi. 
                E-postanızı kontrol edin.
              </p>
            </div>
            <p className="text-sm text-gray-600">
              E-posta gelmedi mi? Spam klasörünüzü kontrol edin.
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Giriş sayfasına dön
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
