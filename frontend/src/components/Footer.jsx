import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-scroll"; // For smooth scrolling

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="cursor-pointer text-pink-800 hover:text-algoqueen transition-colors duration-300"
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full animate-fade-in bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <img alt="AlgoQueen Logo" src="/5.png" className="h-20 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-xs animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <FooterLink to="home">Home</FooterLink>
            <FooterLink to="about">About</FooterLink>
            <FooterLink to="learn">Learn</FooterLink>
            <FooterLink to="faq">FAQ</FooterLink>
            <FooterLink to="contact">Contact</FooterLink>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a className="cursor-pointer text-pink-800 hover:text-algoqueen transition" href="https://x.com/Icpc_Amrita" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="cursor-pointer text-pink-800 hover:text-algoqueen transition" href="https://www.instagram.com/icpc_amrita_/" target="blank">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="cursor-pointer text-pink-800 hover:text-algoqueen transition" href="https://t.me/algoqueen2023" target="blank">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21.75 3.5L1.5 11.5l6 2.5 2 5.5 3-3 5 4.5 1-17.5z"></path>
              </svg>
            </a>
            <a className="cursor-pointer text-pink-800 hover:text-algoqueen transition" href="https://www.linkedin.com/in/icpcamrita/" target="blank">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>

        <Separator className="my-4 bg-gray-200" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs p-1 text-pink-800 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p>© {new Date().getFullYear()} AlgoQueen. All rights reserved.
          </p>
          <p >Email:<a href="mailto:algoqueen@cb.amrita.edu" className="text-algoqueen hover:underline"> algoqueen@cb.amrita.edu</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
