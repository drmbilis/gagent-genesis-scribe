
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/components/ui/use-toast';
import { Brain, Mail, Lock, User } from 'lucide-react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Giriş Hatası",
            description: error.message === 'Invalid login credentials' 
              ? 'E-posta veya şifre hatalı' 
              : error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Başarılı!",
            description: "Giriş yapıldı",
          });
        }
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          toast({
            title: "Kayıt Hatası",
            description: error.message === 'User already registered'
              ? 'Bu e-posta adresi zaten kayıtlı'
              : error.message,
            variant: "destructive"
          });
        } else {
          toast({
            title: "Başarılı!",
            description: "Hesap oluşturuldu! E-postanızı kontrol edin.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 glass-effect border-white/10 animate-slide-in-up">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="gradient-primary p-3 rounded-lg animate-glow">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold gradient-text">GAGENT</h1>
          <p className="text-gray-300 mt-2">
            {isLogin ? 'Hesabınıza giriş yapın' : 'Yeni hesap oluşturun'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Ad Soyad"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
            disabled={loading}
          >
            {loading ? 'Yükleniyor...' : (isLogin ? 'Giriş Yap' : 'Kayıt Ol')}
          </Button>
        </form>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            {isLogin 
              ? 'Hesabınız yok mu? Kayıt olun' 
              : 'Zaten hesabınız var mı? Giriş yapın'
            }
          </button>
        </div>
      </Card>
    </div>
  );
};

export default AuthForm;
