
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { BadgeCheck, Users, Video, Mic, Edit, Image, Code } from "lucide-react";

type Role = "influencer" | "freelancer";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleContinue = async () => {
    if (!selectedRole) return;
    
    setIsLoading(true);
    
    try {
      setRole(selectedRole);
      navigate("/dashboard");
    } catch (error) {
      console.error("Role selection failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">How will you use CreativFlow?</h1>
        <p className="text-gray-600">
          Choose your account type to get started with the right experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Influencer Card */}
        <Card 
          className={`cursor-pointer transition-all ${
            selectedRole === "influencer" 
              ? "border-brand-500 shadow-md shadow-brand-100" 
              : "hover:border-brand-300"
          }`}
          onClick={() => setSelectedRole("influencer")}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-xl">
              <Users className="mr-2 h-6 w-6 text-brand-600" />
              I'm an Influencer
              {selectedRole === "influencer" && (
                <BadgeCheck className="ml-auto h-5 w-5 text-brand-600" />
              )}
            </CardTitle>
            <CardDescription>I want to hire creative professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="bg-brand-50 p-1.5 rounded-full mr-2 mt-0.5">
                  <Video className="h-4 w-4 text-brand-600" />
                </div>
                <span>Looking for video editors, thumbnail designers & other creatives</span>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-50 p-1.5 rounded-full mr-2 mt-0.5">
                  <Mic className="h-4 w-4 text-brand-600" />
                </div>
                <span>Need help with podcast editing, intros, or voice overs</span>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-50 p-1.5 rounded-full mr-2 mt-0.5">
                  <Image className="h-4 w-4 text-brand-600" />
                </div>
                <span>Seek professional graphics, animations, or visual effects</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Freelancer Card */}
        <Card 
          className={`cursor-pointer transition-all ${
            selectedRole === "freelancer" 
              ? "border-brand-500 shadow-md shadow-brand-100" 
              : "hover:border-brand-300"
          }`}
          onClick={() => setSelectedRole("freelancer")}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-xl">
              <Edit className="mr-2 h-6 w-6 text-brand-600" />
              I'm a Freelancer
              {selectedRole === "freelancer" && (
                <BadgeCheck className="ml-auto h-5 w-5 text-brand-600" />
              )}
            </CardTitle>
            <CardDescription>I want to offer my creative services</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="bg-brand-50 p-1.5 rounded-full mr-2 mt-0.5">
                  <Video className="h-4 w-4 text-brand-600" />
                </div>
                <span>Offer video editing, animation, or cinematography services</span>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-50 p-1.5 rounded-full mr-2 mt-0.5">
                  <Code className="h-4 w-4 text-brand-600" />
                </div>
                <span>Provide technical expertise in effects, color grading, or scripting</span>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-50 p-1.5 rounded-full mr-2 mt-0.5">
                  <Image className="h-4 w-4 text-brand-600" />
                </div>
                <span>Create thumbnails, graphics, or other visual content</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          onClick={handleContinue}
          disabled={!selectedRole || isLoading}
          className="w-full max-w-md bg-brand-600 hover:bg-brand-700"
        >
          {isLoading ? "Processing..." : "Continue as " + (selectedRole || "...")}
        </Button>
      </div>
    </div>
  );
};

export default RoleSelection;
