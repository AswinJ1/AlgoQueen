import React, { useState } from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Footer from '../components/Footer'
import { Link as RouterLink } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const ARCHIVE_BASE = '/archive/2025';

const Board = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
    { name: 'Home', to: ARCHIVE_BASE, type: 'page' },
    { name: 'About', to: `${ARCHIVE_BASE}/#about`, type: 'section' },
    { name: 'Learn', to: `${ARCHIVE_BASE}/#learn`, type: 'section' },
    { name: 'Leaderboard', to: `${ARCHIVE_BASE}/leaderboard`, type: 'page' },
    { name: 'FAQ', to: `${ARCHIVE_BASE}/#faq`, type: 'section'},
    { name: 'Join Telegram', to: 'https://t.me/algoqueen2023', type: 'external' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100">
      <section className="relative px-6 pt-16 lg:px-8">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="flex lg:flex-1 lg:ml-[-54px] ml-[-10px] md:ml-[-5px] sm:ml-0">
              <RouterLink to={ARCHIVE_BASE} className="-m-1.5 p-1.5">
                <span className="sr-only">Algo Queen</span>
                <img
                  alt="Algo Queen Logo"
                  src="/5.png"
                  className="h-[80px] w-auto"
                />
              </RouterLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="size-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-12 items-center mr-[-46px]">
              {navigation.map((item) => {
                if (item.name === "Join Telegram") {
                  return (
                    <button
                      key={item.name}
                      onClick={() => window.open(item.to, "_blank")}
                      className="px-3 py-1 text-sm bg-transparent text-black font-semibold hover:opacity-80 flex items-center"
                    >
                      <img src="/telegram2.png" alt="" className="" />
                      {item.name}
                    </button>
                  );
                }
                if (item.type === 'section') {
                  return (
                    <RouterLink
                      key={item.name}
                      to={item.to.split('#')[0]}
                      className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          const element = document.getElementById(item.to.split('#')[1]);
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      {item.name}
                    </RouterLink>
                  );
                }
                return (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </RouterLink>
                );
              })}
            </div>
          </nav>

          {/* Mobile menu */}
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                      Registration Closed
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </section>

      <main className="flex-grow flex flex-col">
        <section className="flex-grow px-6 py-24 lg:px-8">
          <LeaderBoard />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Board
