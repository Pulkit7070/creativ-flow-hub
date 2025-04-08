
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Edit,
  Video,
  Image as ImageIcon,
  Mic,
  PlaySquare,
  Code,
  MousePointerClick,
  Sparkles,
  Shield,
} from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-brand-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Creative Talent,</span> Verified and Ready
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              The trusted AI-powered platform connecting influencers with top creative professionals. Secure escrow payments, smart contracts, and verified talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-brand-600 hover:bg-brand-700" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-1 text-brand-600" /> Secure Escrow
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-1 text-brand-600" /> Verified Professionals
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-1 text-brand-600" /> AI-Generated Contracts
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-1 text-brand-600" /> Revision Protection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Find Creative Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Top talent for all your content creation needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="feature-card text-center hover:border-brand-300">
              <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-semibold mb-2">Video Editors</h3>
              <p className="text-sm text-gray-600">Transform raw footage into engaging stories</p>
            </div>
            
            <div className="feature-card text-center hover:border-brand-300">
              <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-semibold mb-2">Thumbnail Design</h3>
              <p className="text-sm text-gray-600">Eye-catching thumbnails that convert</p>
            </div>
            
            <div className="feature-card text-center hover:border-brand-300">
              <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlaySquare className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-semibold mb-2">Animation</h3>
              <p className="text-sm text-gray-600">Bring your ideas to life with motion</p>
            </div>
            
            <div className="feature-card text-center hover:border-brand-300">
              <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-semibold mb-2">Voiceover</h3>
              <p className="text-sm text-gray-600">Professional voices for your content</p>
            </div>
            
            <div className="feature-card text-center hover:border-brand-300">
              <div className="h-12 w-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-semibold mb-2">Scriptwriting</h3>
              <p className="text-sm text-gray-600">Compelling scripts that engage viewers</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-brand-300 text-brand-700" asChild>
              <Link to="/freelancers">Browse All Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How CreativFlow Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform makes collaboration seamless and secure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="h-14 w-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MousePointerClick className="h-7 w-7 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Post Your Job</h3>
              <p className="text-gray-600">
                Create a job with our AI assistant or post your own. Get matched with relevant professionals instantly.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="h-14 w-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-7 w-7 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work with Security</h3>
              <p className="text-gray-600">
                Our escrow protects your funds until you're satisfied. AI-generated contracts keep everyone on the same page.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="h-14 w-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-7 w-7 text-brand-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Quality Results</h3>
              <p className="text-gray-600">
                Receive high-quality work with our revision system. Rate and rehire your favorite freelancers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-brand-600 hover:bg-brand-700" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Powered by AI, Built for Creators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI tools make every step of the creative process smarter and easier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card hover:border-brand-300 flex items-start">
              <div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                <Code className="h-5 w-5 text-brand-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">AI-Generated Job Descriptions</h3>
                <p className="text-gray-600">
                  Turn your basic ideas into detailed, professional job posts that attract the right talent.
                </p>
              </div>
            </div>
            
            <div className="feature-card hover:border-brand-300 flex items-start">
              <div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                <Shield className="h-5 w-5 text-brand-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Smart Contracts & Escrow</h3>
                <p className="text-gray-600">
                  Secure payments and clear terms with AI-generated contracts customized to your project.
                </p>
              </div>
            </div>
            
            <div className="feature-card hover:border-brand-300 flex items-start">
              <div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                <Mic className="h-5 w-5 text-brand-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Voice-to-Text Feedback</h3>
                <p className="text-gray-600">
                  Record your thoughts and our AI transcribes them into clear, actionable feedback.
                </p>
              </div>
            </div>
            
            <div className="feature-card hover:border-brand-300 flex items-start">
              <div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                <ImageIcon className="h-5 w-5 text-brand-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Portfolio & Resume Analysis</h3>
                <p className="text-gray-600">
                  Our AI assesses skills from uploaded work samples for better matching and verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Creative Process?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of influencers and creative professionals already collaborating on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100" asChild>
              <Link to="/signup">Create an Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-brand-700" asChild>
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
