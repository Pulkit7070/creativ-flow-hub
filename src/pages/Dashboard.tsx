
import { Navigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Plus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { jobData } from "@/utils/mockData";
import JobCard from "@/components/jobs/JobCard";

const Dashboard = () => {
  const { user, loading } = useAuth();
  
  // If user is not logged in, redirect to login
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }
  
  // If user doesn't have a role yet, redirect to onboarding
  if (!loading && user && !user.role) {
    return <Navigate to="/onboarding" replace />;
  }
  
  // As a loading state while checking authentication
  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <p>Loading dashboard...</p>
        </div>
      </MainLayout>
    );
  }
  
  // We'll assume user and user.role are defined at this point
  const isInfluencer = user?.role === "influencer";
  
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {user?.name?.split(" ")[0]}
            </h1>
            <p className="text-gray-600 mt-1">
              {isInfluencer
                ? "Manage your creative projects and find top talent"
                : "Find great opportunities and manage your creative work"}
            </p>
          </div>
          
          {isInfluencer ? (
            <Button className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link to="/post-job">
                <Plus size={18} className="mr-1" /> Post a New Job
              </Link>
            </Button>
          ) : (
            <Button className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link to="/jobs">
                <Briefcase size={18} className="mr-1" /> Find Work
              </Link>
            </Button>
          )}
        </div>
        
        <DashboardStats userRole={user?.role || "freelancer"} />
        
        <div className="mt-8">
          <Tabs defaultValue={isInfluencer ? "active-jobs" : "jobs-for-you"}>
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                {isInfluencer ? (
                  <>
                    <TabsTrigger value="active-jobs">Active Jobs</TabsTrigger>
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="contracts">Contracts</TabsTrigger>
                  </>
                ) : (
                  <>
                    <TabsTrigger value="jobs-for-you">Jobs For You</TabsTrigger>
                    <TabsTrigger value="applied">Applied</TabsTrigger>
                    <TabsTrigger value="active-contracts">Active Contracts</TabsTrigger>
                  </>
                )}
              </TabsList>
              
              {isInfluencer && (
                <Button variant="ghost" size="sm" className="text-brand-600" asChild>
                  <Link to="/jobs">View All Jobs</Link>
                </Button>
              )}
            </div>
            
            {isInfluencer ? (
              <>
                <TabsContent value="active-jobs">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {jobData.slice(0, 2).map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="applications">
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center py-8">
                        <Sparkles className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
                        <p className="text-gray-500 mb-4">
                          When freelancers apply to your jobs, they'll appear here
                        </p>
                        <Button asChild>
                          <Link to="/post-job">Post a New Job</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="contracts">
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center py-8">
                        <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No active contracts</h3>
                        <p className="text-gray-500 mb-4">
                          When you hire freelancers, your contracts will appear here
                        </p>
                        <Button asChild>
                          <Link to="/freelancers">Browse Freelancers</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            ) : (
              <>
                <TabsContent value="jobs-for-you">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {jobData.slice(0, 4).map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="applied">
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center py-8">
                        <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
                        <p className="text-gray-500 mb-4">
                          Jobs you've applied to will appear here
                        </p>
                        <Button asChild>
                          <Link to="/jobs">Browse Jobs</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="active-contracts">
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center py-8">
                        <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No active contracts</h3>
                        <p className="text-gray-500 mb-4">
                          When you're hired for jobs, your contracts will appear here
                        </p>
                        <Button asChild>
                          <Link to="/jobs">Find Work</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </>
            )}
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
