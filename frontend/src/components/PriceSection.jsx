import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCrown, FaTabletAlt, FaKeyboard, FaHeadphones, FaAmazon, FaTrophy, FaShieldAlt, FaMedal, FaSchool, FaGraduationCap, FaGift } from 'react-icons/fa'
import { Code, Trophy, Lightbulb, Plane, PlaneTakeoff } from 'lucide-react'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
const Sparkle = ({ className, delay = 0 }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.5, 1, 0.5],
      filter: ["drop-shadow(0px 0px 0px rgba(255,255,255,0))", "drop-shadow(0px 0px 8px currentColor)", "drop-shadow(0px 0px 0px rgba(255,255,255,0))"]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  >
    <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
  </motion.svg>
)

const TypewriterText = ({ text, className, delay = 0 }) => {
  const characters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
        hidden: {}
      }}
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const RotatingText = ({ words, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className={`relative inline-block overflow-hidden align-bottom ${className}`} style={{ height: '1.2em' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </div>
  );
};

const PrizeCell = ({ value, subtext }) => (
  <td className="p-5 align-middle">
    <div className="flex flex-col items-center justify-center text-center gap-1.5 w-full">
      <div className="flex items-center justify-center gap-2">
        <img src="/trophyicons.png" alt="Trophy" className="w-4 h-4 object-contain" />
        <span className="text-sm font-semibold text-slate-600">Prizes Worth</span>
      </div>
      <div className="bg-[#fff0f5] text-[#e31e5f] font-bold text-xl py-1.5 px-5 rounded-xl w-max shadow-sm mt-1 mb-1">
        {value}
      </div>
      {subtext && (
        <div className="text-sm text-slate-600 font-semibold whitespace-nowrap mt-1">
          {subtext}
        </div>
      )}
    </div>
  </td>
);

const PriceSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center font-sans text-slate-800  overflow-hidden pb-0">

      {/* Hero Section */}
      <div className="w-full max-w-6xl px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* Decorative Sparkles */}
        <Sparkle delay={0} className="absolute top-8 left-[30%] w-5 h-5 text-pink-300 hidden md:block opacity-80" />
        <Sparkle delay={0.8} className="absolute top-24 left-1/2 w-4 h-4 text-pink-400 opacity-60" />
        <Sparkle delay={1.5} className="absolute bottom-12 left-[35%] w-6 h-6 text-blue-300 opacity-70" />
        <Sparkle delay={0.4} className="absolute top-1/4 right-[40%] w-8 h-8 text-pink-300 opacity-80" />
        <Sparkle delay={1.2} className="absolute bottom-1/4 right-1/4 w-5 h-5 text-purple-300 hidden lg:block opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-yellow-300 opacity-80"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 rounded-full bg-pink-400 opacity-70"></div>

        {/* Left text */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-16 md:mb-0 relative z-20">
          <div className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-widest text-sm mb-4">
            <FaCrown className="text-2xl" /> ALGOQUEEN REWARDS
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Big Rewards for <br />
            <RotatingText
              words={["Exceptional Minds", "Brilliant Coders", "Future Leaders", "Tech Innovators"]}
              className="text-pink-600 font-medium"
            />
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-pink-600 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-xl  max-w-md"
          >
            Compete, showcase your skills and win <span className="text-pink-600 font-bold">exciting prizes</span> and premium gadgets as the next <span className="text-pink-600 font-bold">AlgoQueen!</span>
          </motion.p>
               {/* <div 
               
                className="relative flex md:inline-flex items-center justify-center gap-2 mt-6 bg-indigo-600 w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:shadow-indigo-500/40 transition-all duration-300 group overflow-hidden "
                id="register-button"
              >
                <span className="relative z-10 flex items-center gap-2 ">
                 REGISTER NOW
                </span>
                <div className="absolute inset-0 bg-indigo-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
              </div>         */}
              
              </div>
                 {/* to="https://www.codechef.com/register/algoqueen-2026" */}

        {/* Right image & floating box */}
        <div className="w-full md:w-1/2 relative flex flex-col md:flex-row items-center justify-center mt-12 md:mt-0 z-20">
          {/* Background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-pink-100 rounded-full -z-10 blur-xl opacity-60"></div>

          <motion.img
            src="/girlcheering.png"
            alt="AlgoQueen Girl"
            className="w-72 md:w-96 lg:w-[38rem] z-10 relative drop-shadow-2xl mix-blend-multiply"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating Prizes Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative md:absolute mt-8 md:mt-0 md:top-1/2 md:-translate-y-1/2 right-0 md:-right-8 lg:-right-16 bg-white shadow-xl p-4 md:p-6 z-20 flex flex-col items-center border border-pink-50 rounded-xl md:rounded-none"
          >
            <div className="absolute -top-3 md:-top-4 bg-pink-50 text-pink-600 font-medium uppercase text-[10px] md:text-xs px-4 md:px-6 py-1 md:py-1.5 rounded-full shadow-sm tracking-wider">
              PRIZES INCLUDE
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              <div className="flex flex-row items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-8 h-8 md:w-10 md:h-10"><img src="/tablet.jpg" alt="Tablet" className="w-full h-full object-contain drop-shadow-sm" /></div>
                <span className="text-[10px] md:text-xs text-left leading-tight text-slate-800 uppercase font-semibold">TABLETS</span>
              </div>
              <div className="flex flex-row items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-8 h-8 md:w-10 md:h-10"><img src="/keyboard.jpg" alt="Keyboard" className="w-full h-full object-contain drop-shadow-sm" /></div>
                <span className="text-[10px] md:text-xs text-left leading-tight text-slate-800 uppercase font-semibold">MECHANICAL KEYBOARDS</span>
              </div>
              <div className="flex flex-row items-center gap-3 border-b border-slate-100 pb-2">
                <div className="w-8 h-8 md:w-10 md:h-10"><img src="/headphone.jpg" alt="Headset" className="w-full h-full object-contain drop-shadow-sm" /></div>
                <span className="text-[10px] md:text-xs text-left leading-tight text-slate-800 uppercase font-semibold">HEADSETS</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10"><img src="/amazon.png" alt="Amazon" className="w-full h-full object-contain drop-shadow-sm" /></div>
                <span className="text-[10px] md:text-xs text-left leading-tight text-slate-800 uppercase font-semibold">AMAZON GIFT CARDS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tables Section (Animated Cards) */}
      <div className="w-full max-w-7xl px-4 py-16 flex flex-col gap-16 z-20 relative rounded-md">
        <div className="flex flex-col items-center w-full mb-8">
          <h2 className="text-4xl md:text-5xl text-slate-800  mb-4">Prizes & Gadgets</h2>
          <div className="w-24 h-1 bg-red-500 mb-2"></div>
        </div>

        {/* Attractive Table Area */}
        <div className="w-full relative z-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full overflow-x-auto shadow-lg bg-white border border-slate-200 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#e31e5f] text-white">
                  <th className="p-5 text-xl font-normal whitespace-nowrap">Award Category</th>
                  <th className="p-5 text-xl font-normal whitespace-nowrap">Level</th>
                  <th className="p-5 text-xl font-normal whitespace-nowrap text-center">1st Prize</th>
                  <th className="p-5 text-xl font-normal whitespace-nowrap text-center">2nd Prize</th>
                  <th className="p-5 text-xl font-normal whitespace-nowrap text-center">3rd Prize</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {/* Row 1 */}
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="p-5 align-middle border-r border-slate-100" rowSpan={2}>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="relative inline-block">
                        <img src="/4959279.png" alt="Overall Champions" className="w-16 h-16 object-contain drop-shadow-md relative z-10" />
                        <Sparkle delay={0} className="absolute -top-1 -right-2 w-4 h-4 text-pink-400 z-0" />
                        <Sparkle delay={0.5} className="absolute bottom-0 -left-2 w-5 h-5 text-yellow-400 z-0" />
                      </div>
                      <div>
                        <span className="block text-2xl text-slate-900 font-normal whitespace-nowrap">Overall Champions</span>
                        <span className="block text-base text-slate-500 mt-1 font-normal">Top performers across all regions</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 align-middle text-[#e31e5f]">
                    <div className="flex items-center gap-3">
                      <img src="/school.webp" alt="School" className="w-12 h-12 object-contain" />
                      <span className="text-xl font-normal">School</span>
                    </div>
                  </td>
                  <PrizeCell value="Trip to International Finals"/>
                  <PrizeCell value="300 USD" />
                  <PrizeCell value="200 USD" />
                </motion.tr>
                {/* Row 2 */}
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="border-b border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <td className="p-5 align-middle text-purple-600">
                    <div className="flex items-center gap-3">
                      <img src="/collegeicon.webp" alt="College" className="w-10 h-10 object-contain" />
                      <span className="text-xl font-normal">College</span>
                    </div>
                  </td>
                  <PrizeCell value="100 USD" subtext="+ Medal & Certificate" />
                  <PrizeCell value="80 USD" subtext="+ Medal & Certificate" />
                  <PrizeCell value="50 USD" subtext="+ Medal & Certificate" />
                </motion.tr>
                {/* Row 3 */}
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <td className="p-5 align-middle border-r border-slate-100" rowSpan={2}>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="relative inline-block">
                        <img src="/trophy_861506.png" alt="National" className="w-16 h-16 object-contain drop-shadow-md relative z-10" />
                        <Sparkle delay={0.2} className="absolute -top-2 left-0 w-4 h-4 text-blue-400 z-0" />
                        <Sparkle delay={0.8} className="absolute -bottom-1 -right-1 w-5 h-5 text-yellow-400 z-0" />
                      </div>
                      <div>
                        <span className="block text-2xl text-slate-900 font-normal whitespace-nowrap">National Champions</span>
                        <span className="block text-base text-slate-500 mt-1 font-normal">Top performers nationwide</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 align-middle text-[#e31e5f]">
                    <div className="flex items-center gap-3">
                      <img src="/school.webp" alt="School" className="w-10 h-10 object-contain" />
                      <span className="text-xl font-normal">School</span>
                    </div>
                  </td>
                  <PrizeCell value="₹25,000" subtext="+ Medal & Certificate" />
                  <PrizeCell value="₹15,000" subtext="+ Medal & Certificate" />
                  <PrizeCell value="₹10,000" subtext="+ Medal & Certificate" />
                </motion.tr>
                {/* Row 4 */}
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="border-b border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <td className="p-5 align-middle text-purple-600">
                    <div className="flex items-center gap-3">
                      <img src="/collegeicon.webp" alt="College" className="w-10 h-10 object-contain" />
                      <span className="text-xl font-normal">College</span>
                    </div>
                  </td>
                  <PrizeCell value="₹10,000" subtext="+ Medal & Certificate" />
                  <PrizeCell value="₹8,000" subtext="+ Medal & Certificate" />
                  <PrizeCell value="₹5,000" subtext="+ Medal & Certificate" />
                </motion.tr>
                {/* Row 5 */}
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="p-5 align-middle border-r border-slate-100">
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="relative inline-block">
                        <img src="/trophy_1661851.png" alt="State Champions" className="w-16 h-16 object-contain drop-shadow-md relative z-10" />
                        <Sparkle delay={0.4} className="absolute top-1 -right-3 w-5 h-5 text-purple-400 z-0" />
                        <Sparkle delay={1.1} className="absolute -bottom-2 left-1 w-4 h-4 text-yellow-400 z-0" />
                      </div>
                      <div>
                        <span className="block text-2xl text-slate-900 font-normal whitespace-nowrap">State Champions</span>
                        <span className="block text-base text-slate-500 mt-1 font-normal">Statewise top 3 performers</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 align-middle text-[#e31e5f]">
                    <div className="flex items-center gap-3">
                   
                      <span className="text-xl font-normal whitespace-nowrap">School & College</span>
                    </div>
                  </td>
                  <td colSpan={3} className="p-5 align-middle">
                    <div>
                      <span className="block text-xl text-slate-900 font-normal">Medals & Certificates</span>
                      <span className="block text-base text-slate-500 mt-1 font-normal">Awarded to the top 3 performers in each category per state</span>
                    </div>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </div>
       <p className='text-md'> Note <span className='text-red-700'>*</span>:Participants will receive the prize of the <span className='font-medium'>highest prize category</span> achieved and will not receive multiple prizes across overlapping categories. However, they will continue to be officially recognized across all qualifying levels and ranking</p>
      </div>

      {/* Bottom Text Section */}
      <div className="w-full max-w-4xl px-4 py-16 flex items-center justify-between mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block drop-shadow-2xl"
        >
          <img src="/gifticon.png" alt="Gift Box" className="w-24 md:w-32 lg:w-40 object-contain" />
        </motion.div>

        <div className="text-center px-4">
          <h3 className="text-3xl md:text-3xl mb-3 tracking-wide">
            <TypewriterText text="Recognizing talent. Rewarding passion." delay={0.2} />
          </h3>
          <p className="text-2xl">
            <TypewriterText text="Compete, code and conquer " delay={1.5} />
            <TypewriterText text="amazing rewards!" className="text-pink-600" delay={2.3} />
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block drop-shadow-2xl"
        >
          <img src="/trophyicons.png" alt="Trophy" className="w-24 md:w-32 lg:w-40 object-contain" />
        </motion.div>
      </div>

      {/* Banner Strip */}
      {/* <div className="w-full bg-[#e31e5f] text-white py-4 md:py-6 flex flex-wrap items-center justify-center gap-4 md:gap-12 font-bold tracking-widest text-md md:text-sm lg:text-base mt-8">
        <span className="flex items-center gap-2"><Code size={20} className="md:w-6 md:h-6" /> CODE</span>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="flex items-center gap-2"><Trophy size={20} className="md:w-6 md:h-6" /> COMPETE</span>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="flex items-center gap-2"><Lightbulb size={20} className="md:w-6 md:h-6" /> INSPIRE</span>
      </div> */}

    </div>
  )
}

export default PriceSection
