
import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, Star } from "lucide-react";

// Mock data for freelancers
const freelancersData = [
  {
    id: "1",
    name: "Alex Johnson",
    title: "Senior Video Editor",
    avatar: "",
    rating: 4.9,
    reviewCount: 124,
    hourlyRate: 45,
    skills: ["Video Editing", "Color Grading", "After Effects"],
    verified: true,
  },
  {
    id: "2",
    name: "Sam Martinez",
    title: "Thumbnail Designer",
    avatar: "",
    rating: 4.7,
    reviewCount: 87,
    hourlyRate: 35,
    skills: ["Photoshop", "Illustrator", "UI Design"],
    verified: true,
  },
  {
    id: "3",
    name: "Jamie Wong",
    title: "Animation Specialist",
    avatar: "",
    rating: 4.8,
    reviewCount: 56,
    hourlyRate: 55,
    skills: ["2D Animation", "Motion Graphics", "Character Design"],
    verified: false,
  },
  {
    id: "4",
    name: "Chris Taylor",
    title: "Scriptwriter & Content Creator",
    avatar: "",
    rating: 4.6,
    reviewCount: 93,
    hourlyRate: 40,
    skills: ["Copywriting", "Content Strategy", "Storytelling"],
    verified: true,
  },
];

const Freelancers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Top Creative Talent</h1>
          <p className="text-gray-600">
            Connect with skilled freelancers for your content creation needs
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by skill, expertise, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setFilterVisible(!filterVisible)}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            <span>Filters</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {freelancersData.map((freelancer) => (
            <Card key={freelancer.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3">
                      <AvatarImage src={freelancer.avatar} />
                      <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{freelancer.name}</h3>
                      <p className="text-gray-600 text-sm">{freelancer.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{freelancer.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({freelancer.reviewCount})
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-brand-50">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="font-bold text-brand-600">${freelancer.hourlyRate}</span>
                    <span className="text-gray-500 text-sm">/hr</span>
                  </div>
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    View Profile
                  </Button>
                </div>

                {freelancer.verified && (
                  <div className="mt-3 flex items-center text-sm">
                    <Badge variant="secondary" className="py-0 h-5">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      Verified Pro
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline">Load More Freelancers</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Freelancers;
