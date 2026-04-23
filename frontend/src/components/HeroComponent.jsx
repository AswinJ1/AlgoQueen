'use client';

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import TrendingBanner from './TrendingBanner';
import { ArrowRight, Book, BookImage, DoorClosed, LucideTrophy, MessageCircleWarning, Pen, PenLine } from 'lucide-react';

const navigation = [
  { name: 'Home', to: 'home', type: 'section' },
  { name: 'About', to: 'about', type: 'section' },
  // { name: 'Learn', to: 'learn', type: 'section' },
  // { name: 'Ranklist', to: '/ranklist', type: 'page' },
  // { name: 'Leaderboard', to: '/leaderboard', type: 'page' },
  { name: 'Winners', to: '/winners', type: 'page' },
  { name: 'Learn', to: '/learning-resources', type: 'page' },
  { name: 'FAQ', to: 'faq', type: 'section' },
  { name: 'Archive', type: 'dropdown', children: [
    { name: 'AlgoQueen 2025', to: '/archive/2025', type: 'page' }
  ]},
  { name: 'Join Telegram', to: 'https://t.me/algoqueen2023', type: 'external' }
];

const HeroComponent = ({ hideHeroContent = false }) => {
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
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Algo Queen</span>
              <img
                alt=""
                src="/2026.png"
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
  } else if (item.type === 'dropdown') {
    return (
      <div key={item.name} className="relative group">
        <button className="text-sm font-semibold text-gray-900 cursor-pointer flex items-center gap-1">
          {item.name}
          <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
        </button>
        <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
          <div className="bg-white rounded-md shadow-lg ring-1 ring-gray-900/10 py-1 min-w-[160px]">
            {item.children.map((child) => (
              <RouterLink
                key={child.name}
                to={child.to}
                className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {child.name}
              </RouterLink>
            ))}
          </div>
        </div>
      </div>
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
    if (location.pathname !== '/') {
      return (
        <button
          key={item.name}
          onClick={() => handleNavigation(item)}
          className="text-sm font-semibold text-gray-900 cursor-pointer"
        >
          {item.name}
        </button>
      );
    }
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
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Algo Queen</span>
                <img
                  alt=""
                  src="/2026.png"
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
  ) : item.type === 'dropdown' ? (
    <div key={item.name}>
      <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900">
        {item.name}
      </span>
      {item.children.map((child) => (
        <RouterLink
          key={child.name}
          to={child.to}
          className="-mx-3 block rounded-lg px-6 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          {child.name}
        </RouterLink>
      ))}
    </div>
  ) : item.type === 'section' ? (
    location.pathname !== '/' ? (
      <button
        key={item.name}
        onClick={() => {
          setMobileMenuOpen(false);
          handleNavigation(item);
        }}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 w-full text-left"
      >
        {item.name}
      </button>
    ) : (
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
    )
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
                    className="block w-full  px-3 py-2 text-center bg-indigo-600 text-white font-semibold"
                    id='register-button'
                  >
                  Coming Soon
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {!hideHeroContent && (
      <section className="relative bg-gradient-to-r from-white to-purple-100 px-6 pt-16 lg:px-8 overflow-hidden ">
        {/* Decorative background blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-pink-100/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-24 lg:mt-32 pb-16 lg:pb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6">
              {/* <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" /> */}
              {/* <span className="text-sm font-medium text-indigo-700 tracking-wide ">ICPC Foundation Endorsed</span> */}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-pink-800 leading-[1.1] tracking-tight font-bold">
            ICPC Algo Queen 2026


            </h1>
            <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              An initiative by Amrita Vishwa Vidyapeetham, endorsed by the ICPC Foundation. Empowering young women by enhancing their problem-solving skills while fostering innovation and global recognition in technology.
            </p> 
            {/* and sponsored by Jane Street */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
            <RouterLink 
                to="#"
                ref={buttonRef}
                className="relative inline-flex items-center gap-2 bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-300 group overflow-hidden "
                id="register-button"
              >
                <span className="relative z-10 flex items-center gap-2 ">
                 Coming Soon
                </span>
                <div className="absolute inset-0 bg-indigo-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
              </RouterLink>
            </div>
             {/* <button className="px-6 py-2  bg-indigo-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Coming Soon 
      </button> */}
     {/* <RouterLink
                to="/leaderboard"
                ref={buttonRef}
                className="relative inline-flex items-center gap-2 bg-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-300 group overflow-hidden rounded-md"
                id="register-button"
              >
                <span className="relative z-10 flex items-center gap-2 ">
                 Coming Soon
                </span>
                <div className="absolute inset-0 bg-indigo-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
              </RouterLink> */}
          </div>
          {/* Image Grid */}
          <div className="relative" ref={imageRef}>
            {/* Glow behind images */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-transparent rounded-3xl blur-2xl scale-105 pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {[
                { src: "photo-1.jpeg", offset: "" },
                { src: "photo.jpeg", offset: "mt-10" },
                { src: "veronica.jpeg", offset: "-mt-4" },
                { src: "photo-4.jpeg", offset: "mt-6" },
              ].map((item, index) => (
                <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={400}>
                  <div
                    className={`overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 ${item.offset}`}
                  >
                    <img
                      src={`/${item.src}`}
                      alt="AlgoQueen event"
                      className="object-cover w-full h-44 sm:h-52 lg:h-56 transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}

export default HeroComponent;
