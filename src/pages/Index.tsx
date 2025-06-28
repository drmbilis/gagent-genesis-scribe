
import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIChat from "@/components/AIChat";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SystemStatus from "@/components/SystemStatus";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950">
      {/* Header */}
      <Header />

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
