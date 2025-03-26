import React from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-scroll"; // For smooth scrolling

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="cursor-pointer text-gray-600 hover:text-algoqueen transition-colors duration-300"
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full animate-fade-in">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {/* Logo */}
            <img
                  alt=""
                  src="/5.png"
                  className="h-8 w-auto"
                />
              {/* <p className="text-sm text-algoqueen font-medium">AlgoQueen</p> */}
            </div>
            
            {/* Internal Page Navigation */}
            <div className="flex gap-4 text-xs animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="learn">Learn</FooterLink>
              <FooterLink to="faq">FAQ</FooterLink>
              <FooterLink to="contact">Contact</FooterLink>
            </div>
            
            {/* Social Media Links */}
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

          {/* Contact Information */}
          <div className="justify-start text-sm text-gray-700 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="font-medium">Aravind B. L.</p>
            <p>Event Manager – ICPC Algo Queen 2025</p>
            <p>Email: <a href="mailto:aravindbnl@am.amrita.edu" className="text-algoqueen hover:underline">aravindbnl@am.amrita.edu</a></p>
            <p>WhatsApp: <a href="https://wa.me/7034182923" className="text-algoqueen hover:underline">7034182923</a></p>
            <p>If you have any queries, email us: <a href="mailto:algoqueen@cb.amrita.edu" className="text-algoqueen hover:underline">algoqueen@cb.amrita.edu</a></p>
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
