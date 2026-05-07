import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCrown, FaTabletAlt, FaKeyboard, FaHeadphones, FaAmazon, FaTrophy, FaShieldAlt, FaMedal, FaSchool, FaGraduationCap, FaGift } from 'react-icons/fa'
import { Code, Trophy, Lightbulb } from 'lucide-react'

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
        </div>

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
      <div className="w-full max-w-6xl px-4 py-16 flex flex-col gap-16 z-20 relative">
        <div className="flex flex-col items-center w-full mb-8">
          <h2 className="text-4xl md:text-5xl text-slate-800  mb-4">Prizes & Gadgets</h2>
          <div className="w-24 h-1 bg-red-500 mb-2"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-20">
          
          {/* Box 1: Overall School (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
             <div className="md:w-1/2 z-10 flex flex-col justify-center">
               <h3 className="text-3xl lg:text-4xl  text-purple-900 mb-2">Overall Champions</h3>
               <h4 className="text-xl font-light text-pink-600 mb-6 uppercase tracking-widest">School</h4>
               <div className="flex flex-col gap-3">
                 <div className="flex justify-between items-center group cursor-default">
                   <span className="text-lg font-light text-slate-400 group-hover:text-pink-500 transition-colors">1st Prize</span>
                   <span className="text-xl font-light text-slate-700 text-right">Trip to Int. Finals</span>
                 </div>
                 <div className="flex justify-between items-center group cursor-default">
                   <span className="text-lg font-light text-slate-400 group-hover:text-pink-500 transition-colors">2nd Prize</span>
                   <span className="text-xl font-light text-slate-700 text-right">300 USD <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)</span></span>
                 </div>
                 <div className="flex justify-between items-center group cursor-default">
                   <span className="text-lg font-light text-slate-400 group-hover:text-pink-500 transition-colors">3rd Prize</span>
                   <span className="text-xl font-light text-slate-700 text-right">200 USD <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)</span></span>
                 </div>
               </div>
             </div>
             <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0 z-10">
               <motion.img whileHover={{ scale: 1.05 }} src="/girlclimbs.png" alt="Overall School" className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-xl" />
             </div>
          </motion.div>

          {/* Box 2: Overall College (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-slate-50 to-purple-50 p-8 rounded-3xl relative overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
          >
             <div className="absolute top-1/2 left-1/2 w-full h-full bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
             <h3 className="text-3xl  text-purple-900 mb-2 z-10">Overall Champions</h3>
             <h4 className="text-xl font-light text-purple-600 mb-8 uppercase tracking-widest z-10">College</h4>
             
             <div className="flex flex-col gap-6 z-10 mt-auto">
                 <div className="flex flex-col group cursor-default">
                   <span className="text-lg font-light text-slate-400 group-hover:text-purple-500 transition-colors mb-1">1st Prize</span>
                   <span className="text-2xl font-light text-slate-700">100 USD</span>
                   <span className="text-xs md:text-sm text-slate-400 leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span>
                 </div>
                 <div className="flex flex-col group cursor-default">
                   <span className="text-lg font-light text-slate-400 group-hover:text-purple-500 transition-colors mb-1">2nd Prize</span>
                   <span className="text-2xl font-light text-slate-700">80 USD</span>
                   <span className="text-xs md:text-sm text-slate-400 leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span>
                 </div>
                 <div className="flex flex-col group cursor-default">
                   <span className="text-lg font-light text-slate-400 group-hover:text-purple-500 transition-colors mb-1">3rd Prize</span>
                   <span className="text-2xl font-light text-slate-700">50 USD</span>
                   <span className="text-xs md:text-sm text-slate-400 leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span>
                 </div>
             </div>
             <div className="w-full flex justify-end mt-8 z-10 opacity-70">
                <img src="/handsraising.png" alt="Decor" className="w-32 h-32 md:w-48 md:h-48 object-contain mix-blend-multiply" />
             </div>
          </motion.div>

          {/* Box 3: National School (Square) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gradient-to-tr from-rose-50 to-orange-50 p-8 rounded-3xl relative overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
          >
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 translate-x-1/4 translate-y-1/4"></div>
             <h3 className="text-2xl  text-rose-900 mb-1 z-10">National</h3>
             <h4 className="text-lg font-light text-orange-600 mb-6 uppercase tracking-widest z-10">School</h4>
             <div className="flex flex-col gap-3 z-10 mt-auto">
                 <div className="flex justify-between items-center group cursor-default border-b border-rose-100/50 pb-2">
                   <span className="text-base font-light text-slate-400 group-hover:text-rose-500 transition-colors">1st</span>
                   <span className="text-xl font-light text-slate-700 text-right">₹25K <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span></span>
                 </div>
                 <div className="flex justify-between items-center group cursor-default border-b border-rose-100/50 pb-2">
                   <span className="text-base font-light text-slate-400 group-hover:text-rose-500 transition-colors">2nd</span>
                   <span className="text-xl font-light text-slate-700 text-right">₹15K <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span></span>
                 </div>
                 <div className="flex justify-between items-center group cursor-default">
                   <span className="text-base font-light text-slate-400 group-hover:text-rose-500 transition-colors">3rd</span>
                   <span className="text-xl font-light text-slate-700 text-right">₹10K <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span></span>
                 </div>
             </div>
          </motion.div>

          {/* Box 4: National College (Square) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gradient-to-bl from-rose-50 to-orange-50 p-8 rounded-3xl relative overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
          >
             <div className="absolute top-0 left-0 w-32 h-32 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 -translate-x-1/4 -translate-y-1/4"></div>
             <h3 className="text-2xl  text-rose-900 mb-1 z-10">National</h3>
             <h4 className="text-lg font-light text-orange-600 mb-6 uppercase tracking-widest z-10">College</h4>
             <div className="flex flex-col gap-3 z-10 mt-auto">
                 <div className="flex justify-between items-center group cursor-default border-b border-rose-100/50 pb-2">
                   <span className="text-base font-light text-slate-400 group-hover:text-rose-500 transition-colors">1st</span>
                   <span className="text-xl font-light text-slate-700 text-right">₹10K <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span></span>
                 </div>
                 <div className="flex justify-between items-center group cursor-default border-b border-rose-100/50 pb-2">
                   <span className="text-base font-light text-slate-400 group-hover:text-rose-500 transition-colors">2nd</span>
                   <span className="text-xl font-light text-slate-700 text-right">₹8K <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span></span>
                 </div>
                 <div className="flex justify-between items-center group cursor-default">
                   <span className="text-base font-light text-slate-400 group-hover:text-rose-500 transition-colors">3rd</span>
                   <span className="text-xl font-light text-slate-700 text-right">₹5K <span className="text-[10px] sm:text-xs text-slate-400 block leading-tight mt-1">(worth of gadgets/vouchers)<br/>+ Medal & Certificate</span></span>
                 </div>
             </div>
          </motion.div>

          {/* Box 5: State Champions (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
          >
             <div className="absolute top-1/2 left-1/2 w-[200%] h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10 flex flex-col text-center md:text-left mb-8 md:mb-0 w-full md:w-auto">
               <h3 className="text-3xl lg:text-4xl  text-blue-900 mb-2">State Champions</h3>
               <h4 className="text-xl font-light text-blue-600 uppercase tracking-widest mb-2">School & College</h4>
               <p className="text-slate-500 font-light">3 Prizes per category</p>
             </div>
             
             <div className="relative z-10 flex flex-col items-center md:items-end w-full md:w-auto">
               <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center group cursor-default bg-white/60 p-6 rounded-2xl backdrop-blur-md border border-white w-full md:w-auto">
                  <span className="text-2xl md:text-3xl font-light text-slate-700 mb-1 text-center">Medals & Certificates</span>
                  <span className="text-base md:text-lg font-light text-slate-500 group-hover:text-blue-500 transition-colors text-center">for top performers</span>
               </motion.div>
             </div>
             
             <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none translate-x-1/4 translate-y-0 z-0">
               <img src="/cheering.avif" alt="State" className="w-80 h-80 md:w-96 md:h-96 object-contain mix-blend-multiply" />
             </div>
          </motion.div>

        </div>
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
      {/* <div className="w-full bg-[#e31e5f] text-white py-4 md:py-6 flex flex-wrap items-center justify-center gap-4 md:gap-12 font-bold tracking-widest text-xs md:text-sm lg:text-base mt-8">
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
