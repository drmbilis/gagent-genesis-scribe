
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Next Generation AI Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Future with
            <br />
            <span className="gradient-text">GAGENT</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlimited creativity with artificial intelligence. Enter your prompts, 
            process your files and make secure payments with token system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link to="/auth">
              <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 text-lg px-8 py-6">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
              <Zap className="h-8 w-8 gradient-primary rounded-lg p-2 mb-4 mx-auto text-white" />
              <h3 className="font-semibold mb-2">Fast AI Responses</h3>
              <p className="text-gray-600 text-sm">Get creative and intelligent responses from AI in seconds</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
              <Shield className="h-8 w-8 gradient-primary rounded-lg p-2 mb-4 mx-auto text-white" />
              <h3 className="font-semibold mb-2">Secure Token System</h3>
              <p className="text-gray-600 text-sm">Blockchain-based secure payment and token management</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
              <Sparkles className="h-8 w-8 gradient-primary rounded-lg p-2 mb-4 mx-auto text-white" />
              <h3 className="font-semibold mb-2">File Processing</h3>
              <p className="text-gray-600 text-sm">Upload your texts, process with AI and download results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
