
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Contact form logic will be implemented
    alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">İletişim</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Mesaj Gönder</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="ornek@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Konu</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="Mesajınızın konusu"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Mesajınızı buraya yazın..."
                  rows={6}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-primary text-white border-0">
                <Send className="h-4 w-4 mr-2" />
                Mesaj Gönder
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <p className="text-gray-600">destek@gagent.com</p>
                    <p className="text-gray-600">info@gagent.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">+90 212 555 0123</p>
                    <p className="text-gray-600">+90 532 555 0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="gradient-primary p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Teknoloji Merkezi<br />
                      Kat: 15, No: 150<br />
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Acil Destek:</strong> 7/24 online chat desteği mevcuttur
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
