
import { Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import RoleSelection from "@/components/auth/RoleSelection";
import { useAuth } from "@/context/AuthContext";

const Onboarding = () => {
  const { user, loading } = useAuth();
  
  // If user is not logged in, redirect to login
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }
  
  // If user already has a role set, redirect to dashboard
  if (!loading && user?.role) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <RoleSelection />
      </div>
    </MainLayout>
  );
};

export default Onboarding;
