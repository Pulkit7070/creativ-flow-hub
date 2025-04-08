
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CircleCheck, 
  FileEdit, 
  FileSearch, 
  Handshake, 
  MessageSquare, 
  Search, 
  Shield, 
  Star, 
  Upload 
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How CreativFlow Works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A simple, secure, and efficient way to connect influencers with creative professionals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-brand-600 hover:bg-brand-700 text-lg px-6 py-6 h-auto">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" className="text-lg px-6 py-6 h-auto" asChild>
              <Link to="#for-creators">For Creators</Link>
            </Button>
            <Button variant="outline" className="text-lg px-6 py-6 h-auto" asChild>
              <Link to="#for-freelancers">For Freelancers</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works For Everyone</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <FileEdit className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Post or Find Work</h3>
              <p className="text-gray-600">
                Create a detailed job post or browse available opportunities with our AI-powered matching system.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Connect & Collaborate</h3>
              <p className="text-gray-600">
                Use our secure messaging platform to discuss project details and finalize contracts with built-in payment protection.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Complete & Review</h3>
              <p className="text-gray-600">
                Deliver completed work through our platform, release payment, and build your reputation with reviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="for-creators" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">For Influencers & Content Creators</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Find the perfect creative professional to enhance your content and grow your channel
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-brand-600">Your Journey on CreativFlow</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <Search className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Find Top Creative Talent</h4>
                    <p className="text-gray-600">Browse profiles of verified professionals with portfolios and ratings</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <FileSearch className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Detailed Briefs</h4>
                    <p className="text-gray-600">Our AI helps you craft precise job briefs to attract the right talent</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure Payment Protection</h4>
                    <p className="text-gray-600">Money is held in escrow until you approve the final deliverables</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                      <CircleCheck className="h-4 w-4 text-brand-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Guaranteed</h4>
                    <p className="text-gray-600">Request revisions and only pay when you're satisfied with the work</p>
                  </div>
                </li>
              </ul>
              
              <Button className="mt-8 bg-brand-600 hover:bg-brand-700" asChild>
                <Link to="/signup">Start Hiring <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6">Why Influencers Choose CreativFlow</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>Access to pre-vetted creative professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>AI-powered matching with the perfect freelancer</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>File watermarking for copyright protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>Secure payment system with milestone releases</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>AI tools for better briefs and feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>One-click rehiring for recurring projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-200" />
                  <span>Dedicated support for high-profile creators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="for-freelancers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-4">For Creative Professionals</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Showcase your skills, find well-paid work, and build long-term relationships with top creators
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6">Why Freelancers Choose CreativFlow</h3>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>Connect with established content creators</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>AI-enhanced portfolio creation tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>Secure contracts with payment protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>Transparent revision process with clear limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>Build a verified profile with authentic reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>Lower fees than other freelance platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-purple-200" />
                  <span>Opportunity for repeat business and referrals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-purple-600">Your Journey on CreativFlow</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Upload className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Your Portfolio</h4>
                    <p className="text-gray-600">Showcase your work with our AI-enhanced portfolio builder</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Search className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Find Relevant Projects</h4>
                    <p className="text-gray-600">Our matching algorithm connects you with perfect-fit opportunities</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Handshake className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Work With Clear Terms</h4>
                    <p className="text-gray-600">AI-generated contracts protect both parties with fair terms</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Build Your Reputation</h4>
                    <p className="text-gray-600">Get verified reviews to showcase your skills and reliability</p>
                  </div>
                </li>
              </ul>
              
              <Button className="mt-8 bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/signup">Join as Freelancer <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowItWorks;
