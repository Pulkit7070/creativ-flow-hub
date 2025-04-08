
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-brand-600 to-secondary bg-clip-text text-transparent">
                CreativFlow
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              The trusted AI-powered platform connecting influencers with creative professionals.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-600">
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              For Influencers
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/post-job" className="text-sm text-gray-600 hover:text-gray-900">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/browse-freelancers" className="text-sm text-gray-600 hover:text-gray-900">
                  Browse Freelancers
                </Link>
              </li>
              <li>
                <Link to="/success-stories/influencers" className="text-sm text-gray-600 hover:text-gray-900">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              For Freelancers
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/find-work" className="text-sm text-gray-600 hover:text-gray-900">
                  Find Work
                </Link>
              </li>
              <li>
                <Link to="/build-portfolio" className="text-sm text-gray-600 hover:text-gray-900">
                  Build Your Portfolio
                </Link>
              </li>
              <li>
                <Link to="/freelancer-resources" className="text-sm text-gray-600 hover:text-gray-900">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {currentYear} CreativFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
