
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, History as HistoryIcon, MessageSquare, Download, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const History = () => {
  const chatHistory = [
    {
      id: 1,
      title: "Marketing Strategy Discussion",
      date: "2024-01-20",
      messages: 15,
      tokens: 120,
      type: "chat"
    },
    {
      id: 2,
      title: "Code Review Session",
      date: "2024-01-19",
      messages: 8,
      tokens: 85,
      type: "chat"
    },
    {
      id: 3,
      title: "Document Analysis",
      date: "2024-01-18",
      messages: 12,
      tokens: 200,
      type: "file"
    },
    {
      id: 4,
      title: "Creative Writing Help",
      date: "2024-01-17",
      messages: 20,
      tokens: 150,
      type: "chat"
    }
  ];

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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 gradient-text flex items-center">
              <HistoryIcon className="h-8 w-8 mr-3" />
              Chat History
            </h1>
            <p className="text-gray-300 text-lg">View your previous AI interactions</p>
          </div>

          <div className="space-y-4">
            {chatHistory.map((session) => (
              <Card key={session.id} className="p-6 glass-effect border-white/10 hover:border-white/20 transition-all-smooth card-hover">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <MessageSquare className="h-5 w-5 text-blue-400" />
                      <h3 className="font-semibold text-white text-lg">{session.title}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(session.date).toLocaleDateString()}</span>
                      </div>
                      <div>
                        <span>{session.messages} messages</span>
                      </div>
                      <div>
                        <span>{session.tokens} tokens used</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-300 hover:text-white hover:bg-white/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button
                      size="sm"
                      className="gradient-primary text-white border-0 hover:opacity-90"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            
            {chatHistory.length === 0 && (
              <Card className="p-12 glass-effect border-white/10 text-center">
                <HistoryIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No chat history</h3>
                <p className="text-gray-400">Start chatting with AI to see your history here</p>
                <Link to="/dashboard" className="mt-4 inline-block">
                  <Button className="gradient-primary text-white border-0 hover:opacity-90">
                    Start Chatting
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
