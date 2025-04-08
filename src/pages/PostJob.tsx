
import { Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { useAuth } from "@/context/AuthContext";
import JobPostForm from "@/components/jobs/JobPostForm";

const PostJob = () => {
  const { user, loading } = useAuth();
  
  // If user is not logged in, redirect to login
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }
  
  // If user is not an influencer, redirect to dashboard
  if (!loading && user?.role !== "influencer") {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <JobPostForm />
      </div>
    </MainLayout>
  );
};

export default PostJob;
