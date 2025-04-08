
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Clock, MapPin, Mail } from "lucide-react";

// Mock data for freelancers - same as in the Freelancers page
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
    bio: "Professional video editor with 8+ years of experience working with top YouTube creators. Specialized in dynamic editing styles for entertainment and educational content.",
    memberSince: "Jan 2021",
    location: "Los Angeles, CA",
    completedProjects: 87,
    languages: ["English", "Spanish"],
    education: "B.A. in Film Production, USC"
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
    bio: "Creative thumbnail designer who specializes in eye-catching visuals that boost click-through rates. I've helped channels increase their CTR by up to 40%.",
    memberSince: "Mar 2022",
    location: "Miami, FL",
    completedProjects: 54,
    languages: ["English", "Portuguese"],
    education: "Graphic Design Certificate, RISD"
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
    bio: "Animation artist focused on bringing personality and flair to content. I create custom animations, motion graphics, and visual effects that make your videos stand out.",
    memberSince: "Oct 2021",
    location: "Toronto, Canada",
    completedProjects: 32,
    languages: ["English", "Cantonese"],
    education: "M.A. in Animation, Sheridan College"
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
    bio: "Experienced scriptwriter and content strategist who helps creators develop compelling narratives. I specialize in educational content, storytelling, and script optimization.",
    memberSince: "Feb 2020",
    location: "Chicago, IL",
    completedProjects: 75,
    languages: ["English"],
    education: "B.A. in Creative Writing, Northwestern University"
  },
];

const FreelancerProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the freelancer by ID from the mock data
  const freelancer = freelancersData.find(f => f.id === id);
  
  if (!freelancer) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Freelancer Not Found</h1>
            <p className="text-gray-600 mb-6">The freelancer profile you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-brand-600 hover:bg-brand-700">
              <a href="/freelancers">Back to Freelancers</a>
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Profile Info */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                    <AvatarFallback className="text-2xl">{freelancer.name[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h1 className="text-2xl font-bold">{freelancer.name}</h1>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Star className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{freelancer.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">
                          ({freelancer.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-3">{freelancer.title}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-brand-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                        Member since {freelancer.memberSince}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        {freelancer.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        {freelancer.completedProjects} projects completed
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-700">{freelancer.bio}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <Badge key={index} className="bg-brand-100 text-brand-800 hover:bg-brand-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <p className="text-gray-700">{freelancer.education}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Languages</h2>
                <div className="flex flex-wrap gap-2">
                  {freelancer.languages.map((language, index) => (
                    <Badge key={index} variant="outline">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact & Hire */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand-600">${freelancer.hourlyRate}</span>
                  <span className="text-gray-500">/hr</span>
                </div>
                
                <div className="space-y-4">
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Contact {freelancer.name.split(' ')[0]}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  
                  {freelancer.verified && (
                    <div className="mt-3 flex items-center text-sm">
                      <Badge variant="secondary" className="py-0 h-5">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        Verified Professional
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FreelancerProfile;
