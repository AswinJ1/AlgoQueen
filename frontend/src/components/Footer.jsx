import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-algoqueen transition-colors duration-300"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full animate-fade-in">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-sm text-algoqueen font-medium">AlgoQueen</p>
            </div>
            
            <div className="flex gap-4 text-xs animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <FooterLink href="#">Resources</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </div>
            
            <div className="flex space-x-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a href="#" className="text-gray-600 hover:text-algoqueen transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-algoqueen transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-algoqueen transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-algoqueen transition-colors" aria-label="Website">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          <Separator className="my-4 bg-gray-200" />
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p>© {new Date().getFullYear()} AlgoQueen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;