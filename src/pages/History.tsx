
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, MessageSquare, Upload, Download, Clock, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const History = () => {
  const [chatHistory] = useState([
    {
      id: 1,
      prompt: "Pazarlama stratejisi için bir metin yaz",
      response: "Başarılı bir pazarlama stratejisi...",
      tokens: 150,
      date: "2024-01-15 14:30",
      status: "completed"
    },
    {
      id: 2,
      prompt: "E-ticaret sitesi için ürün açıklaması",
      response: "Bu ürün modern tasarım ile...",
      tokens: 200,
      date: "2024-01-15 13:15",
      status: "completed"
    }
  ]);

  const [fileHistory] = useState([
    {
      id: 1,
      fileName: "rapor_2024.pdf",
      fileSize: "2.5 MB",
      action: "upload",
      date: "2024-01-15 14:25",
      status: "success"
    },
    {
      id: 2,
      fileName: "analiz_sonucu.docx",
      fileSize: "1.8 MB", 
      action: "download",
      date: "2024-01-15 13:45",
      status: "success"
    }
  ]);

  const [tokenHistory] = useState([
    {
      id: 1,
      action: "AI Chat",
      tokens: -150,
      remaining: 2350,
      date: "2024-01-15 14:30"
    },
    {
      id: 2,
      action: "Token Satın Alma",
      tokens: +2500,
      remaining: 2500,
      date: "2024-01-15 10:00"
    }
  ]);

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
              <Clock className="h-8 w-8 mr-3" />
              Aktivite Geçmişi
            </h1>
            <p className="text-gray-600">Tüm işlemlerinizi ve geçmişinizi görüntüleyin</p>
          </div>

          <Tabs defaultValue="chats" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="chats">AI Sohbetler</TabsTrigger>
              <TabsTrigger value="files">Dosya İşlemleri</TabsTrigger>
              <TabsTrigger value="tokens">Token Geçmişi</TabsTrigger>
            </TabsList>

            <TabsContent value="chats">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    AI Chat Geçmişi
                  </h2>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrele
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {chatHistory.map((chat) => (
                    <div key={chat.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{chat.prompt}</h3>
                        <Badge variant="secondary">{chat.tokens} token</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{chat.response}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{chat.date}</span>
                        <Badge variant="outline" className="text-green-600">Tamamlandı</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="files">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Upload className="h-5 w-5 mr-2" />
                    Dosya İşlem Geçmişi
                  </h2>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrele
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Dosya Adı</TableHead>
                      <TableHead>Boyut</TableHead>
                      <TableHead>İşlem</TableHead>
                      <TableHead>Tarih</TableHead>
                      <TableHead>Durum</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fileHistory.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell className="font-medium">{file.fileName}</TableCell>
                        <TableCell>{file.fileSize}</TableCell>
                        <TableCell>
                          <Badge variant={file.action === 'upload' ? 'default' : 'secondary'}>
                            {file.action === 'upload' ? 'Yükleme' : 'İndirme'}
                          </Badge>
                        </TableCell>
                        <TableCell>{file.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-green-600">Başarılı</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            <TabsContent value="tokens">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    Token Kullanım Geçmişi
                  </h2>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrele
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>İşlem</TableHead>
                      <TableHead>Token Değişimi</TableHead>
                      <TableHead>Kalan Token</TableHead>
                      <TableHead>Tarih</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokenHistory.map((token) => (
                      <TableRow key={token.id}>
                        <TableCell className="font-medium">{token.action}</TableCell>
                        <TableCell>
                          <span className={token.tokens > 0 ? 'text-green-600' : 'text-red-600'}>
                            {token.tokens > 0 ? '+' : ''}{token.tokens}
                          </span>
                        </TableCell>
                        <TableCell>{token.remaining.toLocaleString()}</TableCell>
                        <TableCell>{token.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default History;
