
import MainLayout from "@/components/layout/MainLayout";
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { jobData } from "@/utils/mockData";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [sortOption, setSortOption] = useState("newest");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would trigger an API call with the search query
  };

  const handleFilter = (filters: any) => {
    setActiveFilters(filters);
    // In a real app, this would trigger an API call with the filters
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Find Creative Jobs</h1>
            <p className="text-gray-600 mt-1">
              Browse opportunities from creators around the world
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2 hidden md:inline">Sort by:</span>
              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="budget-high">Budget (High to Low)</option>
                <option value="budget-low">Budget (Low to High)</option>
                <option value="deadline">Deadline (Soonest)</option>
              </select>
            </div>
          </div>
        </div>
        
        <JobFilters onFilter={handleFilter} onSearch={handleSearch} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="flex items-center gap-1">
            Load More <ChevronDown size={18} />
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;
