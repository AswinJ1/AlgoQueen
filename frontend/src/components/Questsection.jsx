import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Target, Zap, Award, Gift, Key, ShieldCheck, Clock, ChevronRight, ChevronDown, Quote } from 'lucide-react';

const easeInOut = [0.4, 0, 0.2, 1];

const StyledButton = ({ children, to, className = '' }) => (
    <RouterLink
        to={to}
        className={`inline-flex h-12 items-center justify-center bg-indigo-700 px-8 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-indigo-800  rounded-md ${className}`}
    >
        {children}
    </RouterLink>
);

const StyledCard = ({ children, className = '' }) => (
    <div className={`bg-white border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md rounded-md ${className}`}
    >
        {children}
    </div>
);

const Questsection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } }
    };
    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
    };

    return (
        <div className="w-full flex flex-col font-sans text-slate-800 bg-transparent relative overflow-hidden pb-0">

            {/* Hero Section */}
            <section className="relative w-full max-w-6xl mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.div variants={fadeInUp} className="mb-4 inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs tracking-widest  border border-pink-200 rounded-md">
                            Algo Queen Quest
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900 mb-6">
                            The competition starts before the competition
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                            An exclusive challenge series for registered ICPC Algo Queen participants. Solve challenges, earn points, climb the leaderboard, and compete for rewards.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <StyledButton to="/quest-leaderboard">
                                View Quest Leaderboard
                            </StyledButton>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: easeInOut }}
                        src="/study_enhanced.png"
                        alt="Hero Graphic"
                        className="w-full max-w-md object-contain drop-shadow-xl"
                    />
                </div>
            </section>

            {/* Why Participate Section */}
            <section className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl leading-tight text-slate-900 mb-4">Why Participate?</h2>
                    <div className="w-16 h-1 bg-pink-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-slate-600">Your journey to the crown begins here.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Target className="w-6 h-6 text-indigo-700" />, title: "Earn Points", desc: "Gain accuracy and speed points daily." },
                        { icon: <Zap className="w-6 h-6 text-indigo-700" />, title: "Daily Challenges", desc: "Keep your problem-solving sharp." },
                        { icon: <Award className="w-6 h-6 text-indigo-700" />, title: "Leaderboards", desc: "Compete globally every week." },
                        { icon: <Gift className="w-6 h-6 text-indigo-700" />, title: "Exclusive Rewards", desc: "Win merch and certificates." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <StyledCard className="p-8 h-full flex flex-col items-start border-t-4 border-t-indigo-700">
                                <div className="mb-4 p-3">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </StyledCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl leading-tight  mb-12">How it works</h2>
                        <div className="relative">
                            {[
                                { title: "Register", desc: "Sign up for ICPC Algo Queen for free and receive your Quest ID." },
                                { title: "Solve", desc: "Follow our channels and solve the daily interconnected challenges." },
                                { title: "Submit", desc: "Use your Quest ID to submit answers and climb the weekly leaderboard." },
                            ].map((step, i) => (
                                <div key={i} className="relative flex gap-6 pb-12 last:pb-0 group">
                                    {/* Line Container */}
                                    <div className="flex flex-col items-center">
                                        {/* Icon */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ margin: "-50px" }}
                                            transition={{ duration: 0.4, delay: i * 0.3 }}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${i === 2
                                                    ? 'bg-transparent border-[3px] border-pink-700 shadow-sm'
                                                    : 'bg-pink-700'
                                                }`}
                                        >
                                            {i === 2 ? (
                                                <div className="w-2.5 h-2.5 rounded-full bg-pink-700" />
                                            ) : (
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </motion.div>

                                        {/* Line */}
                                        {i !== 2 && (
                                            <div className="absolute top-8 bottom-0 left-[15px] w-[2px] bg-slate-100">
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: '100%' }}
                                                    viewport={{ margin: "-50px" }}
                                                    transition={{ duration: 0.5, delay: i * 0.3 + 0.2 }}
                                                    className={`w-full ${i === 0 ? 'bg-pink-700' : 'bg-pink-200'}`}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ margin: "-50px" }}
                                        transition={{ duration: 0.4, delay: i * 0.3 + 0.1 }}
                                        className="pt-1"
                                    >
                                        <h4 className="text-xl text-slate-800 mb-1">{step.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed max-w-sm">{step.desc}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <StyledCard className="p-8 ">
                            {/* <Key className="w-6 h-6 text-pink-600 mb-4" /> */}
                            <h3 className="text-xl text-slate-900 mb-3  tracking-wide">The Golden Rule</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Unlike standalone challenges, many Quest challenges are interconnected. The answer to one may become a key or input for a future challenge.
                            </p>
                            <div className="p-3  flex items-start gap-2">
                                <Quote className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                                <p className="text-xs text-red-700  tracking-wide">
                                    Missing a challenge could mean missing an important clue for a future challenge.
                                </p>
                            </div>
                        </StyledCard>

                        <StyledCard className="p-8 text-slate-900 ">
                            {/* <ShieldCheck className="w-6 h-6 text-black mb-4" /> */}
                            <h3 className="text-xl text-black mb-3  tracking-wide">Your Quest ID</h3>
                            <p className="text-sm text-black leading-relaxed mb-6">
                                Every registered participant receives a unique Quest ID. Keep it safe, it's required for:
                            </p>
                            <ul className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-pink-500 shrink-0" /> Submissions</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-pink-500 shrink-0" /> Point Calculation</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-pink-500 shrink-0" /> Rankings</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-pink-500 shrink-0" /> Winner Selection</li>
                            </ul>
                        </StyledCard>
                    </div>
                </div>
            </section>

            {/* Scoring System Section */}
            <section className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl leading-tight text-slate-900 mb-4">Scoring System</h2>
                    <div className="w-16 h-1 bg-pink-600 mx-auto rounded-full"></div>
                </div>

                <ScoringInfographic />
            </section>

            {/* Schedule & FAQ */}
            <section className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24 z-10 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1 space-y-8">
                        <StyledCard className="p-8">
                            <Clock className="w-6 h-6 text-indigo-700 mb-4" />
                            <h3 className="text-lg text-slate-900 mb-6  tracking-wide">Schedule</h3>
                            <ul className="space-y-4 text-sm text-slate-600">
                                <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-indigo-700 mt-0.5 shrink-0" /> Challenges release Monday–Saturday.</li>
                                <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-indigo-700 mt-0.5 shrink-0" /> Submit until Saturday, 11:59 PM IST.</li>
                                <li className="flex gap-3 items-start"><ChevronRight className="w-4 h-4 text-indigo-700 mt-0.5 shrink-0" /> Weekly leaderboards on Monday.</li>
                            </ul>
                        </StyledCard>

                        <StyledCard className="p-8 bg-slate-50">
                            <h3 className="text-lg text-slate-900 mb-4  tracking-wide">Guidelines</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Only registered participants may participate. Multiple submissions may result in disqualification.
                            </p>
                        </StyledCard>
                    </div>

                    <div className="lg:col-span-2">
                        <StyledCard className="p-8 md:p-12 h-full">
                            <h2 className="text-2xl md:text-3xl leading-tight text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-0">
                                {[
                                    { q: "Do I need to register separately for Algo Queen Quest?", a: "No. All registered Algo Queen participants are automatically eligible." },
                                    { q: "Where will challenges be announced?", a: "Challenges will be posted on the official Algo Queen social media channels." },
                                    { q: "What happens if I miss a challenge?", a: "You can still participate in future challenges, but you may lose points and potentially miss clues needed for later challenges." },
                                    { q: "How do I check my rank?", a: "Weekly leaderboard updates will be published on this page." },
                                    { q: "Is participation free?", a: "Yes. Participation in both Algo Queen and Algo Queen Quest is completely free." }
                                ].map((faq, i) => (
                                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </StyledCard>
                    </div>

                </div>
            </section>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-5 flex justify-between items-center focus:outline-none transition-colors duration-300 hover:text-indigo-700"
            >
                <span className="text-sm text-slate-800 pr-8  tracking-wide">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-slate-400">
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }} className="overflow-hidden"
                    >
                        <div className="pb-5 pr-12 text-sm text-slate-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ScoringInfographic = () => {
    return (
        <div className="w-full">
            {/* Desktop SVG Infographic */}
            <div className="hidden lg:block w-full max-w-5xl mx-auto">
                <svg viewBox="0 0 1200 600" className="w-full h-auto drop-shadow-sm">
                    {/* Center Image/Icon */}
                    <foreignObject x="500" y="200" width="200" height="200">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center relative">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
                                <Clock className="w-32 h-32 text-indigo-600" strokeWidth={1} />
                            </motion.div>
                        </div>
                    </foreignObject>

                    {/* --- LINES --- */}
                    {/* Top Left Line */}
                    <motion.path 
                        d="M 530 230 L 450 180 L 380 180" 
                        fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                    />
                    <foreignObject x="438" y="168" width="24" height="24">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs text-slate-500 font-medium shadow-sm">1</div>
                    </foreignObject>

                    {/* Bottom Left Line */}
                    <motion.path 
                        d="M 530 370 L 450 420 L 380 420" 
                        fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }}
                    />
                    <foreignObject x="438" y="408" width="24" height="24">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs text-slate-500 font-medium shadow-sm">2</div>
                    </foreignObject>

                    {/* Top Right Line */}
                    <motion.path 
                        d="M 670 230 L 750 180 L 820 180" 
                        fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }}
                    />
                    <foreignObject x="738" y="168" width="24" height="24">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs text-slate-500 font-medium shadow-sm">3</div>
                    </foreignObject>

                    {/* Bottom Right Line */}
                    <motion.path 
                        d="M 670 370 L 750 420 L 820 420" 
                        fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="8 8"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }}
                    />
                    <foreignObject x="738" y="408" width="24" height="24">
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-6 h-6 rounded-full border border-slate-300 bg-white flex items-center justify-center text-xs text-slate-500 font-medium shadow-sm">4</div>
                    </foreignObject>

                    {/* --- TEXT BLOCKS --- */}
                    {/* Top Left */}
                    <foreignObject x="60" y="110" width="300" height="150">
                        <motion.div xmlns="http://www.w3.org/1999/xhtml" className="text-right flex flex-col items-end" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                            <h4 className="text-3xl text-slate-800 mb-2 tracking-wide">Correct Answer</h4>
                            <p className="text-base text-slate-500 leading-relaxed mb-3">
                                Earn full accuracy points by solving the challenge correctly.
                            </p>
                            <div className="text-4xl text-green-600 tracking-wide">+10 pts</div>
                        </motion.div>
                    </foreignObject>

                    {/* Bottom Left */}
                    <foreignObject x="60" y="350" width="300" height="150">
                        <motion.div xmlns="http://www.w3.org/1999/xhtml" className="text-right flex flex-col items-end" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                            <h4 className="text-3xl text-slate-800 mb-2 tracking-wide">Incorrect Answer</h4>
                            <p className="text-base text-slate-500 leading-relaxed mb-3">
                                Incorrect or unanswered challenges yield no points.
                            </p>
                            <div className="text-2xl text-slate-400 tracking-wide">0 pts</div>
                        </motion.div>
                    </foreignObject>

                    {/* Top Right */}
                    <foreignObject x="840" y="70" width="300" height="250">
                        <motion.div xmlns="http://www.w3.org/1999/xhtml" className="text-left flex flex-col items-start" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                            <h4 className="text-3xl text-slate-800 mb-2 tracking-wide">Speed Bonus</h4>
                            <p className="text-base text-slate-500 leading-relaxed mb-4">
                                The faster you solve, the more points you get.
                            </p>
                            <div className="w-full flex flex-col gap-3 mt-2">
                                {[
                                    { time: "Within 2 Hours", pts: "10" },
                                    { time: "2–4 Hours", pts: "8" },
                                    { time: "4–8 Hours", pts: "6" },
                                    { time: "8–24 Hours", pts: "4" },
                                    { time: "After 24 Hours", pts: "3" },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center text-base border-b border-slate-100 pb-2 last:border-0">
                                        <span className="text-slate-600 tracking-wide">{row.time}</span>
                                        <span className="text-indigo-600 text-lg">{row.pts} pts</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </foreignObject>

                    {/* Bottom Right */}
                    <foreignObject x="840" y="350" width="300" height="150">
                        <motion.div xmlns="http://www.w3.org/1999/xhtml" className="text-left flex flex-col items-start" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
                            <h4 className="text-3xl text-slate-800 mb-2 tracking-wide">Maximum Points</h4>
                            <p className="text-base text-slate-500 leading-relaxed mb-3">
                                Achieve the highest possible score per challenge.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-base text-slate-400 tracking-wide">10 Acc + 10 Spd</span>
                                <span className="text-3xl text-indigo-700 tracking-wide">= 20 pts</span>
                            </div>
                        </motion.div>
                    </foreignObject>
                </svg>
            </div>

            {/* Mobile Fallback */}
            <div className="lg:hidden w-full flex flex-col gap-6">
                <div className="p-6 bg-white border border-slate-200 rounded-md shadow-sm">
                    <h4 className="text-xl text-slate-800 mb-2 tracking-wide">1. Correct Answer</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">Earn full accuracy points by solving the challenge correctly.</p>
                    <div className="text-2xl text-green-600 tracking-wide">+10 pts</div>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-md shadow-sm">
                    <h4 className="text-xl text-slate-800 mb-2 tracking-wide">2. Incorrect Answer</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">Incorrect or unanswered challenges yield no points.</p>
                    <div className="text-xl text-slate-400 tracking-wide">0 pts</div>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-md shadow-sm">
                    <h4 className="text-xl text-slate-800 mb-2 tracking-wide">3. Speed Bonus</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">The faster you solve, the more points you get.</p>
                    <div className="w-full flex flex-col gap-2">
                        {[
                            { time: "Within 2 Hours", pts: "10" },
                            { time: "2–4 Hours", pts: "8" },
                            { time: "4–8 Hours", pts: "6" },
                            { time: "8–24 Hours", pts: "4" },
                            { time: "After 24 Hours", pts: "3" },
                        ].map((row, i) => (
                            <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 pb-2 last:border-0">
                                <span className="text-slate-600 tracking-wide">{row.time}</span>
                                <span className="text-indigo-600">{row.pts} pts</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-md shadow-sm">
                    <h4 className="text-xl text-slate-800 mb-2 tracking-wide">4. Maximum Points</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">Achieve the highest possible score per challenge.</p>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-400 tracking-wide">10 Acc + 10 Spd</span>
                        <span className="text-2xl text-indigo-700 tracking-wide">= 20 pts</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questsection;
