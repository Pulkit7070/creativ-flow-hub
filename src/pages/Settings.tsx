import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const Settings = () => {
  const { user, loading } = useAuth();

  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <p>Loading settings...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        {/* Account Settings */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Account Settings</h2>
              <p className="text-sm text-gray-500">Update your account info and preferences.</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Pulkit Saraf" defaultValue={user?.name} />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="p********9@gmail.com" defaultValue={user?.email} disabled />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-sm text-gray-600">Online Status: Visible in search</p>
              </div>

              <div className="pt-4">
                <Button>Save Changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Deactivation */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Account Deactivation</h2>
              <p className="text-sm text-gray-500">Deactivate your account and remove your profile from public listings.</p>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Your profile and gigs won't be shown anymore.</li>
              <li>Active orders will be cancelled.</li>
              <li>You won’t be able to re-activate your gigs.</li>
            </ul>

            <div className="space-y-2">
              <Label htmlFor="reason">I'm leaving because...</Label>
              <Select>
                <SelectTrigger id="reason">
                  <SelectValue placeholder="Choose a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-getting-orders">Not getting enough orders</SelectItem>
                  <SelectItem value="found-other-platform">Found another platform</SelectItem>
                  <SelectItem value="temporary-break">Taking a temporary break</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button variant="destructive" disabled>
                Deactivate Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
