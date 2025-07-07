
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/components/ui/use-toast';
import { Brain, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  
  // Login form
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  // Register form
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // Magic link form
  const [magicEmail, setMagicEmail] = useState('');

  const { signIn, signUp } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(loginData.email, loginData.password);
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Hata",
        description: "Şifreler eşleşmiyor",
        variant: "destructive"
      });
      return;
    }

    if (!registerData.agreeTerms) {
      toast({
        title: "Hata",
        description: "Lütfen kullanım koşullarını kabul edin",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(registerData.email, registerData.password, registerData.fullName);
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

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate magic link send
    setTimeout(() => {
      setMagicLinkSent(true);
      setLoading(false);
      toast({
        title: "Magic Link Gönderildi!",
        description: "E-postanızı kontrol edin",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-effect border-white/10 animate-slide-in-up">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Link to="/" className="gradient-primary p-3 rounded-lg animate-glow">
              <Brain className="h-8 w-8 text-white" />
            </Link>
          </div>
          <h1 className="text-3xl font-bold gradient-text">GAGENT</h1>
          <p className="text-gray-300 mt-2">
            Akıllı AI Asistanınızı Oluşturun
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-800/50">
              <TabsTrigger value="login" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Giriş
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Kaydol
              </TabsTrigger>
              <TabsTrigger value="magic" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Magic Link
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Şifreniz"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="pl-10 pr-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                </Button>
              </form>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Ad Soyadınız"
                    value={registerData.fullName}
                    onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                    className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Şifreniz (en az 8 karakter)"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                    className="pl-10 pr-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Şifrenizi tekrar girin"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                    className="pl-10 pr-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={registerData.agreeTerms}
                    onCheckedChange={(checked) => setRegisterData({...registerData, agreeTerms: checked as boolean})}
                    className="border-white/20"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    <Link to="/terms" className="text-blue-400 hover:text-blue-300">Kullanım Koşulları</Link>'nı ve{' '}
                    <Link to="/privacy" className="text-blue-400 hover:text-blue-300">Gizlilik Politikası</Link>'nı kabul ediyorum
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
                  disabled={loading || !registerData.agreeTerms}
                >
                  {loading ? 'Hesap oluşturuluyor...' : 'Hesap Oluştur'}
                </Button>
              </form>
            </TabsContent>

            {/* Magic Link Tab */}
            <TabsContent value="magic">
              {!magicLinkSent ? (
                <form onSubmit={handleMagicLink} className="space-y-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Şifresiz Giriş</h3>
                    <p className="text-gray-300 text-sm">Size özel bağlantı göndererek giriş yapın</p>
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="E-posta adresiniz"
                      value={magicEmail}
                      onChange={(e) => setMagicEmail(e.target.value)}
                      className="pl-10 bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
                    disabled={loading}
                  >
                    {loading ? 'Gönderiliyor...' : 'Magic Link Gönder'}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                    <h3 className="text-lg font-semibold text-green-400 mb-2">
                      E-posta Gönderildi!
                    </h3>
                    <p className="text-green-300">
                      {magicEmail} adresine giriş bağlantısı gönderildi.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setMagicLinkSent(false)}
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Tekrar Gönder
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center space-y-2">
            <Link 
              to="/forgot-password" 
              className="text-blue-400 hover:text-blue-300 hover:underline text-sm transition-colors"
            >
              Şifremi Unuttum
            </Link>
            <div className="text-gray-400 text-xs">
              <Link to="/help" className="hover:text-white transition-colors">
                Yardım & Destek
              </Link>
            </div>
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-300 text-sm">
                💡 Giriş yaptıktan sonra AI servislerinizi yapılandırabilir ve token kullanımınızı takip edebilirsiniz.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
