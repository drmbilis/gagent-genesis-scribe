
import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIChat from "@/components/AIChat";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SystemStatus from "@/components/SystemStatus";

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          {/* System Status */}
          <SystemStatus />
          
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">GAGENT</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <Link to="/dashboard">
                  <Button className="gradient-primary text-white border-0">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="outline">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="gradient-primary text-white border-0">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Hero />
      
      {/* Features */}
      <Features />
      
      {/* AI Chat Demo */}
      <AIChat />
      
      {/* Pricing */}
      <Pricing />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
