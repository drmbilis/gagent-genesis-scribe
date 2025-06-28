
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, User, Save, Edit, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinDate: "2024-01-15",
    avatar: ""
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile updated:", profile);
  };

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
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Profile Settings</h1>
            <p className="text-gray-300 text-lg">Manage your account information</p>
          </div>

          <Card className="p-8 glass-effect border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <User className="h-6 w-6 mr-2" />
                Personal Information
              </h2>
              <Button
                variant="ghost"
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>

            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                {isEditing && (
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                    Change Avatar
                  </Button>
                )}
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label className="text-gray-300">Full Name</Label>
                {isEditing ? (
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                ) : (
                  <div className="p-3 bg-gray-800/30 rounded-lg border border-white/10">
                    <span className="text-white">{profile.name}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-gray-300 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address
                </Label>
                {isEditing ? (
                  <Input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="bg-gray-800/50 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                ) : (
                  <div className="p-3 bg-gray-800/30 rounded-lg border border-white/10">
                    <span className="text-white">{profile.email}</span>
                  </div>
                )}
              </div>

              {/* Join Date */}
              <div className="space-y-2">
                <Label className="text-gray-300 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Member Since
                </Label>
                <div className="p-3 bg-gray-800/30 rounded-lg border border-white/10">
                  <span className="text-white">{new Date(profile.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              {isEditing && (
                <div className="flex space-x-4 pt-4">
                  <Button
                    onClick={handleSave}
                    className="gradient-primary text-white border-0 hover:opacity-90"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setIsEditing(false)}
                    className="border border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
