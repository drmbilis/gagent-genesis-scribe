
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Users, Target, Award, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    { name: "Ahmet Yılmaz", role: "CEO & Kurucu", image: "/placeholder.svg" },
    { name: "Fatma Demir", role: "CTO", image: "/placeholder.svg" },
    { name: "Mehmet Kaya", role: "Lead AI Engineer", image: "/placeholder.svg" },
    { name: "Ayşe Şahin", role: "Product Manager", image: "/placeholder.svg" }
  ];

  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "AI teknolojisini herkes için erişilebilir kılmak ve iş süreçlerini dönüştürmek."
    },
    {
      icon: Users,
      title: "Vizyonumuz",
      description: "AI destekli geleceğin öncüsü olmak ve toplumsal dönüşüme katkıda bulunmak."
    },
    {
      icon: Award,
      title: "Değerlerimiz",
      description: "Yenilik, güvenilirlik, şeffaflık ve müşteri odaklılık temel değerlerimizdir."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </div>
            
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ana Sayfa
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">GAGENT</span> Hakkında
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yapay zeka teknolojilerini kullanarak işletmelerin ve bireylerin 
            verimliliğini artıran yenilikçi çözümler sunuyoruz.
          </p>
        </div>

        {/* Story Section */}
        <Card className="p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hikayemiz</h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="mb-6">
                GAGENT, 2024 yılında yapay zeka teknolojilerinin günlük hayatımıza 
                entegrasyonunu kolaylaştırmak amacıyla kuruldu. Kurucu ekibimiz, 
                teknoloji ve inovasyon alanında yılların deneyimine sahip uzmanlardan oluşuyor.
              </p>
              <p className="mb-6">
                Başlangıçta küçük bir ekiple yola çıktığımız bu serüvende, 
                bugün binlerce kullanıcıya hizmet veren güçlü bir platform haline geldik. 
                AI teknolojisini herkes için erişilebilir kılma hedefimizle, 
                sürekli gelişen çözümlerimizle kullanıcılarımızın ihtiyaçlarını karşılıyoruz.
              </p>
              <p>
                Gelecekte de AI teknolojilerinin öncüsü olmaya devam ederek, 
                kullanıcılarımızın başarısına katkıda bulunmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="p-12 gradient-primary text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Rakamlarla GAGENT</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Aktif Kullanıcı</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">İşlenen Sorgu</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Destek</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
