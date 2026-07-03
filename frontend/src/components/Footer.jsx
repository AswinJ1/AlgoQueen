import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaTelegram, FaLinkedinIn } from "react-icons/fa6";

const FooterLink = ({ to, children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (!isHomePage) {
    return (
      <RouterLink
        to={to === "home" ? "/" : `/#${to}`}
        className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300"
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="w-full animate-fade-in bg-pink-900 text-white">
      <div className="container mx-auto px-6 py-14">
        {/* Top: Brand + Link Columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <RouterLink to="/" className="inline-block">
              <img
                alt="AlgoQueen Logo"
                src="/2026.png"
                className="h-20 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </RouterLink>
            <p className="text-sm text-pink-100 mt-4">
              An initiative by Amrita Vishwa Vidyapeetham, endorsed by the ICPC Foundation
              empowering young women in competitive programming.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <h4 className="font-semibold text-white mb-3">Explore</h4>
              <ul className="space-y-2">
                <li><FooterLink to="home">Home</FooterLink></li>
                <li><FooterLink to="about">About</FooterLink></li>
                <li><RouterLink to="/leaderboard" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Leaderboard</RouterLink></li>
                <li><RouterLink to="/schedule" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Schedule</RouterLink></li>
                 <li><RouterLink to="/prizes" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Prizes</RouterLink></li>
                <li><RouterLink to="/winners" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Winners</RouterLink></li>
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold text-white mb-3">Quest</h4>
              <ul className="space-y-2">
                <li><RouterLink to="/quest-about" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Join Quest</RouterLink></li>
                <li><RouterLink to="/quest-leaderboard" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Quest Leaderboard</RouterLink></li>
                {/* <li><RouterLink to="/prizes" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Prizes</RouterLink></li>
                <li><RouterLink to="/winners" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Winners</RouterLink></li> */}
              </ul>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><RouterLink to="/learning-resources" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">Learning Resources</RouterLink></li>
                <li><FooterLink to="faq">FAQ</FooterLink></li>
                {/* <li><FooterLink to="consent">Consent</FooterLink></li> */}
                <li><RouterLink to="/archive/2025" className="cursor-pointer text-pink-100 hover:text-white transition-colors duration-300">2025 Archive</RouterLink></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-pink-500/40" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-pink-100 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p>© {new Date().getFullYear()} AlgoQueen. All rights reserved.</p>
          <p>Email:<a href="mailto:algoqueen@cb.amrita.edu" className="text-white hover:underline"> algoqueen@cb.amrita.edu</a></p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-5">
            <a className="cursor-pointer text-pink-100 hover:text-white transition" href="https://x.com/Icpc_Amrita" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a className="cursor-pointer text-pink-100 hover:text-white transition" href="https://www.instagram.com/icpc_amrita_/" target="blank">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a className="cursor-pointer text-pink-100 hover:text-white transition" href="https://t.me/algoqueen2023" target="blank">
              <FaTelegram className="w-6 h-6" />
            </a>
            <a className="cursor-pointer text-pink-100 hover:text-white transition" href="https://www.linkedin.com/in/icpcamrita/" target="blank">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
