
import { Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import SignupForm from "@/components/auth/SignupForm";
import { useAuth } from "@/context/AuthContext";

const Signup = () => {
  const { user, loading } = useAuth();
  
  // If user is already logged in, redirect to dashboard
  if (user && !loading) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Signup;
