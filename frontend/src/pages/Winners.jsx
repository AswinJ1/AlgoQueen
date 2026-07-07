import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroComponent from '../components/HeroComponent'
import Footer from '../components/Footer'
import Winner from '../components/Winner'
import { winnersData } from '../data/WinnersData'

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const WinnersPage = () => {
  const [selectedYear, setSelectedYear] = useState(winnersData[0]?.year)
  const activeYear = winnersData.find((entry) => entry.year === selectedYear) || winnersData[0]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50/60 to-purple-100">
      <HeroComponent hideHeroContent={true} />

      <div className="pt-28 px-4 max-w-7xl mx-auto w-full mb-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl  text-slate-900 tracking-tight">
            ICPC Algo Queen Winners
          </h1>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Celebrating excellence in competitive programming, year after year.
          </p>
        </div>

        {/* Year selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {winnersData.map(({ year }) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                selectedYear === year
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-pink-600'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear?.year}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-14"
          >
            {activeYear?.college?.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6 justify-center">
                  <h2 className="text-2xl  text-slate-900">College Category</h2>
                </div>
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {activeYear.college.map((winner, index) => (
                    <Winner key={`${activeYear.year}-college-${index}`} {...winner} />
                  ))}
                </motion.div>
              </section>
            )}

            {activeYear?.school?.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6 justify-center">
                  <h2 className="text-2xl  text-slate-900">School Category</h2>
                </div>
                <motion.div
                  variants={gridContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {activeYear.school.map((winner, index) => (
                    <Winner key={`${activeYear.year}-school-${index}`} {...winner} />
                  ))}
                </motion.div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default WinnersPage
