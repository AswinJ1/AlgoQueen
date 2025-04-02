'use client';

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-scroll';
import TrendingBanner from './TrendingBanner';
import { ArrowRight } from 'lucide-react';

const navigation = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Learn', to: 'learn' },
  {name: 'FAQ', to: 'faq'},
  {name: 'Contact', to: 'contact'}
];
export default function HeroComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
      <TrendingBanner className="px-6"></TrendingBanner>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Algo Queen</span>
              <img
                alt=""
                src="/5.png"
                className="h-[70px] w-auto"
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-gray-900 cursor-pointer smooth={true} duration={500}">
                {item.name}
              </Link>
            ))}
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
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://codedrills.io/contests/icpc-algo-queen-2025/" 
                    className="block w-full rounded-lg px-3 py-2 text-center bg-indigo-600 text-white font-semibold"
                  >
                    Register now
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
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            ICPC Algo Queen - The Girl’s Programming Cup 2025


            </h1>
            <p className="mt-6 text-lg text-gray-600 text-justify">
            ICPC Algo Queen, an initiative by Amrita Vishwa Vidyapeetham and endorsed by the ICPC Foundation and sponsored by Jane Street. It aims to empower young women by 
enhancing their problem-solving skills while fostering innovation and global recognition in 
technology.
            

            </p>
            <div className="mt-6 flex gap-x-4">
            <a
  href="https://codedrills.io/contests/icpc-algo-queen-2025/" target="_blank"
  className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white text-lg font-semibold shadow-md hover:bg-indigo-500 transition duration-300 group"
>
  Register Now
  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
</a>

              {/* <a href="https://u.icpc.global/events/algo-queen/" className="text-lg font-semibold text-gray-900 hover:underline flex items-center">
                Know more  &rarr;
              </a> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12" ref={imageRef}>
            {["winner-2.jpg", "algo-hero2.jpg", "algo-hero3.jpg", "winner.jpg"].map((img, index) => (
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
