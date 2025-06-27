
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, CreditCard, Download, Calendar, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Billing = () => {
  const [invoices] = useState([
    {
      id: "INV-2024-001",
      date: "2024-01-15",
      amount: 49.99,
      status: "paid",
      description: "2500 Token Paketi",
      downloadUrl: "#"
    },
    {
      id: "INV-2024-002", 
      date: "2024-01-01",
      amount: 29.99,
      status: "paid",
      description: "1000 Token Paketi",
      downloadUrl: "#"
    }
  ]);

  const [paymentMethods] = useState([
    {
      id: 1,
      type: "visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true
    }
  ]);

  const [subscription] = useState({
    plan: "Pro",
    status: "active",
    nextBilling: "2024-02-15",
    amount: 49.99
  });

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
            
            <Link to="/dashboard">
              <Button variant="outline">
                Dashboard'a Dön
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <CreditCard className="h-8 w-8 mr-3" />
              Faturalama & Abonelik
            </h1>
            <p className="text-gray-600">Ödeme geçmişi ve fatura bilgilerinizi yönetin</p>
          </div>

          {/* Current Subscription */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Mevcut Abonelik</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Plan</p>
                <p className="text-2xl font-bold">{subscription.plan}</p>
                <Badge variant="outline" className="text-green-600 mt-1">Aktif</Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600">Sonraki Ödeme</p>
                <p className="text-xl font-semibold">{subscription.nextBilling}</p>
                <p className="text-sm text-gray-500">${subscription.amount}/ay</p>
              </div>
              <div className="flex items-end">
                <Button variant="outline" className="mr-2">
                  Planı Değiştir
                </Button>
                <Button variant="destructive">
                  Aboneliği İptal Et
                </Button>
              </div>
            </div>
          </Card>

          {/* Payment Methods */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Ödeme Yöntemleri</h2>
              <Button variant="outline">
                <CreditCard className="h-4 w-4 mr-2" />
                Yeni Kart Ekle
              </Button>
            </div>
            
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      {method.type.toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium">**** **** **** {method.last4}</p>
                      <p className="text-sm text-gray-600">Bitiş: {method.expiry}</p>
                    </div>
                    {method.isDefault && (
                      <Badge variant="secondary">Varsayılan</Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Düzenle</Button>
                    <Button variant="outline" size="sm">Sil</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Billing History */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Fatura Geçmişi</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Tümünü İndir
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fatura No</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead>Açıklama</TableHead>
                  <TableHead>Tutar</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>İşlem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.description}</TableCell>
                    <TableCell>${invoice.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-green-600">
                        {invoice.status === 'paid' ? 'Ödendi' : 'Beklemede'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        İndir
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Billing Alert */}
          <Card className="p-4 mt-6 border-yellow-200 bg-yellow-50">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-800">Ödeme Hatırlatması</p>
                <p className="text-sm text-yellow-700">
                  Sonraki ödemeniz 15 Şubat 2024 tarihinde otomatik olarak çekilecektir.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Billing;
