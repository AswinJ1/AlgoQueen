'use client';

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import TrendingBanner from './TrendingBanner';
import { ArrowRight, Book, BookImage, DoorClosed, LucideTrophy, MessageCircleWarning, Pen, PenLine } from 'lucide-react';

const navigation = [
  { name: 'Home', to: 'home', type: 'section' },
  { name: 'About', to: 'about', type: 'section' },
  { name: 'Learn', to: 'learn', type: 'section' },
  // { name: 'Ranklist', to: '/ranklist', type: 'page' },
  { name: 'Leaderboard', to: '/archive/2025/leaderboard', type: 'page' },
  { name: 'FAQ', to: 'faq', type: 'section' },
  { name: 'Join Telegram', to: 'https://t.me/algoqueen2023', type: 'external' }
];

const HeroComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    );
    // Create pulse effect for the register button
    gsap.to(
      buttonRef.current,
      {
        
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut'
      }
    );
  }, []);

  const handleNavigation = (item) => {
    if (item.type === 'section') {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: item.to } });
      } else {
        const element = document.getElementById(item.to);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.type === 'page') {
      navigate(item.to);
    } else if (item.type === 'external') {
      window.open(item.to, '_blank');
    }
  };

const scrollToBottom = () => {
  const scrollPosition = window.innerWidth < 768 ? 5500 : 2500;
  
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
};

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
      {/* <TrendingBanner className="px-6"></TrendingBanner> */}
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="flex lg:flex-1 lg:ml-[-54px] ml-[-10px] md:ml-[-5px] sm:ml-0">
            <a href="/" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Algo Queen</span>
              <img
                alt=""
                src="/5.png"
                className="h-[80px] w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center mr-[-46px]">
            {/* {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-gray-900 cursor-pointer smooth={true} duration={500}">
                {item.name}
              </Link>
            ))} */}
{navigation.map((item) => {
  if (item.name === "Join Telegram") {
    return (
      <button
        key={item.name}
        onClick={() => window.open(item.to, "_blank")}
        className="px-3 py-1 text-sm bg-transparent text-black font-semibold hover:opacity-80 flex items-center"
      >
        <img src="/telegram2.png" alt="" />
        {item.name}
      </button>
    );
  } else if (item.type === 'page') {
    return (
      <RouterLink
        key={item.name}
        to={item.to}
        className="text-sm font-semibold text-gray-900 cursor-pointer"
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.name}
      </RouterLink>
    );
  } else if (item.type === 'section') {
    return (
      <ScrollLink
        key={item.name}
        to={item.to}
        className="text-sm font-semibold text-gray-900 cursor-pointer"
        smooth={true}
        duration={500}
      >
        {item.name}
      </ScrollLink>
    );
  }
})}

          </div>
         
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 cursor-pointer">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Algo Queen</span>
                <img
                  alt=""
                  src="/5.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                {navigation.map((item) =>
  item.name === "Join Telegram" ? (
    <a
      key={item.name}
      href={item.to}
      target="_blank"
      rel="noopener noreferrer"
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
    >
      {item.name}
    </a>
  ) : item.type === 'section' ? (
    <ScrollLink
      key={item.name}
      to={item.to} // Matches the `name` in HomePage
      smooth={true}
      duration={500}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
      onClick={() => setMobileMenuOpen(false)} // Close mobile menu after navigation
    >
      {item.name}
    </ScrollLink>
  ) : (
    <RouterLink
      key={item.name}
      to={item.to}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
      onClick={() => setMobileMenuOpen(false)}
    >
      {item.name}
    </RouterLink>
  )
)}

                </div>
                <div className="py-6">
                  <a
                    href="" 
                    className="block w-full rounded-lg px-3 py-2 text-center bg-indigo-600 text-white font-semibold"
                    id='register-button'
                  >
                    Registration closed
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <section className="relative bg-gradient-to-r from-white to-purple-100 px-6 pt-16 lg:px-8">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            ICPC Algo Queen - The Girl’s Programming Cup 2025


            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 text-justify ">
            ICPC Algo Queen, an initiative by Amrita Vishwa Vidyapeetham and endorsed by the ICPC Foundation and sponsored by Jane Street. It aims to empower young women by 
enhancing their problem-solving skills while fostering innovation and global recognition in 
technology.
            

            </p>
           <div className="mt-6 flex flex-wrap items-center gap-4">
  {/* Register Now Button */}
 <RouterLink
  to="/archive/2025/leaderboard"
  ref={buttonRef}
  className="relative w-auto flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-3 text-sm sm:px-4 sm:py-3 sm:text-md font-semibold text-white  hover:bg-indigo-500 transition duration-300 group overflow-hidden"
  id="register-button"
>
  <span className="relative z-10 flex items-center gap-2">
    Ranklist Published
    <LucideTrophy className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </span>
  
  <div className="absolute inset-0 bg-indigo-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
</RouterLink>
 {/* <p  className="text-lg font-semibold text-gray-900 hover:underline flex items-center">
                Algo Queen practice contest 2 coming soon 
              </p>

  {/* Practice Contest Button */}
  {/* <div 
   
    onClick={scrollToBottom}
    className="w-auto relative inline-flex items-center justify-center px-3 py-2 text-sm sm:px-4 sm:py-3 sm:text-md font-semibold text-white bg-indigo-600 rounded-md overflow-hidden group transition-all duration-300 hover:bg-indigo-700 hover:scale-105 cursor-pointer"
  >
    <div className="absolute inset-0 w-3/12 bg-white/20 skew-x-[-30deg] transform -translate-x-full animate-shimmer"></div>
    
    <div className="relative flex items-center gap-2">
      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
      <span>Finals Live Now! </span>
      <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
    </div>
  </div> */}
</div>

          </div>
          <div className="grid grid-cols-2 gap-4 mt-12" ref={imageRef}>
            {["pc-hero.jpeg", "algo-hero2.jpg", "algo-hero3.jpg", "winner.jpg"].map((img, index) => (
              <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                <img src={`/${img}`} alt="Visual" className="rounded-xl shadow-lg object-cover w-full h-40 backdrop-blur-lg bg-opacity-50" />
              </Tilt>
            ))}
          </div>
          
        </div>
        
      </section>
    </div>
  );
}

export default HeroComponent;
