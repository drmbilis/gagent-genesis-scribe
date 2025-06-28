
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
    // Password reset logic will be implemented with Supabase
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-gray-950 dark:via-purple-950 dark:to-violet-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 glass-effect border-white/10 animate-slide-in-up">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="gradient-primary p-2 rounded-lg animate-glow">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">GAGENT</span>
        </div>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2 text-white">Forgot Password</h1>
              <p className="text-gray-300">
                Enter your email address and we'll send you a password reset link
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
                Send Reset Link
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
              <h2 className="text-lg font-semibold text-green-400 mb-2">
                Email Sent!
              </h2>
              <p className="text-green-300">
                A password reset link has been sent to {email}. 
                Please check your email.
              </p>
            </div>
            <p className="text-sm text-gray-400">
              Didn't receive the email? Check your spam folder.
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="inline-flex items-center text-blue-400 hover:text-blue-300 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
