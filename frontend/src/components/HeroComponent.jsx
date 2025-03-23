'use client';

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'participate', href: '#' },
  { name: 'learn', href: '#' },
  {name: 'FAQ', href: '#'},
  {name: 'Contact', href: '#'}
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
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Algo Queen</span>
              <img
                alt=""
                src="/logo.png"
                className="h-20 w-auto"
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
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        
             <img src="/telegram.png" className='cursor-pointer' alt="" />
         
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/logo.png"
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
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
            ICPC Algo Queen: Empowering Young Women in Competitive programming


            </h1>
            <p className="mt-6 text-lg text-gray-600">
            Amrita Vishwa Vidyapeetham's pioneering initiative, endorsed by the prestigious ICPC Foundation, inspires and equips school and college students to excel in innovative problem-solving

            </p>
            <div className="mt-6 flex gap-x-4">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-4 py-2 text-white text-lg font-semibold shadow-sm hover:bg-indigo-500"
              >
                Register now
              </a>
              <a href="https://u.icpc.global/events/algo-queen/" className="text-lg font-semibold text-gray-900 hover:underline flex items-center">
                Know more  &rarr;
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12" ref={imageRef}>
            {["algo-hero.jpg", "algo-hero2.jpg", "algo-hero3.jpg", "algo-hero4.jpg"].map((img, index) => (
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
