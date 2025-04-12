import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { MapPin, Calendar, Languages, Clock, Star } from "lucide-react";

const Profile = () => {
  const { user, loading } = useAuth();

  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <p>Loading profile...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Profile Sidebar */}
          <Card className="w-full sm:w-1/3 text-center p-6">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-1">{user?.name || "Pulkit Saraf"}</h2>
            <p className="text-gray-500 text-sm mb-4">@{user?.name || "pulkitsaraf465"}</p>

            <div className="text-left space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Located in India
              </p>
              <p className="flex items-center gap-2">
                <Calendar size={16} /> Joined in March 2023
              </p>
              <p className="flex items-center gap-2">
                <Languages size={16} /> English (Fluent), Hindi (Native/Bilingual)
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} /> Preferred working hours: Not set
              </p>
            </div>

            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link to="/profile/public">Preview Public Profile</Link>
              </Button>
            </div>
          </Card>

          {/* Main Profile Content */}
          <div className="flex-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Hi 👋 Let’s help freelancers get to know you</h3>
                <p className="text-gray-500 mb-4 text-sm">
                  Get the most out of our platform by sharing how you prefer to work with freelancers.
                </p>

                {/* Checklist */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-1">Profile checklist</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-brand-600 h-2 rounded-full" style={{ width: "33%" }}></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Card className="border border-dashed">
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Share how you plan to use the platform</p>
                          <p className="text-gray-500 text-sm">Tell us if you're here to find services or offer them.</p>
                        </div>
                        <Button size="sm">Add</Button>
                      </CardContent>
                    </Card>

                    <Card className="border border-dashed">
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <p className="font-medium">Set your communication preferences</p>
                          <p className="text-gray-500 text-sm">Let freelancers know your collaboration preferences.</p>
                        </div>
                        <Button size="sm" variant="outline">
                          50%
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700">{user?.name || "Pulkit Saraf"} doesn't have any reviews yet.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
