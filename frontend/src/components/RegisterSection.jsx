import React, { useState, useEffect } from 'react';
import { Calendar, Award, Info, Check, ArrowRight, Trophy, Zap, AwardIcon, Swords, Calendar1Icon, CalendarDays, CodeIcon, CodeXmlIcon, Timer, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-algo-primary text-black border rounded-md hover:bg-algo-dark transition ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>{children}</div>
);

const Separator = () => <hr className="border-gray-300 my-4" />;

const testimonials = [

    {
    name: "Shraddha Srivastava",
    role: "Rank 1, ICPC AlgoQueen 2025",
    company: "College Category",
    content: "I secured Global Rank 1 in the AlgoQueen competition, and it was an amazing learning experience. The problems were challenging and really tested my concepts, speed, and thinking under pressure.What helped me the most was consistent practice, focusing on problem-solving patterns, and solving questions in a timed environment. This competition improved my confidence and made me better at handling tough questions during contests.I would definitely recommend AlgoQueen to students who want to improve their DSA skills and prepare for competitive programming seriously.",
    avatar: "/winner25c-1.jpg",
   
  },
  {
    name:"Anvesha Chauhan",
    role: "Rank 3, ICPC AlgoQueen 2025",
    company: "College Category",
    content: "Hi! AlgoQueen was honestly such a great experience for me. It was both challenging and really fun, and I learned a lot while solving problems and competing alongside so many talented women coders. What I loved most was how encouraging and inspiring the whole community felt. It pushed me to challenge myself and gave me more confidence in my coding journey. Really grateful to have been a part of it!",
    avatar: "/winner25c-3.jpeg",
  },
  {
    name: "Nandini",
    role: "Rank 5, ICPC AlgoQueen 2025",
    company: "College Category",
    content: "Participating in AlgoQueen ICPC was such a fun and rewarding experience! It really pushed me to think deeper, solve problems faster, and stay calm under pressure (which was not always easy). I loved competing alongside so many talented people, it made the whole journey even more exciting and motivating.",
    avatar: "/winner25c-5.jpg",   
  },
  {
    name:"Drishti",
    role: "Rank 8, ICPC AlgoQueen 2025",
    company: "College Category",
    content: "I’m really grateful to be ranked among the top 10 in Algo Queen 2025.The experience was both challenging and fun. I especially appreciated how well the contest was organized and the quality of questions throughout.It was a great learning experience, and I’m glad I got the chance to be part of it.Thanks again for the opportunity!",
    avatar: "/winner25c-8.jpeg",
  },
  {
    name: "Aram odeh",
    role: "Rank 15, ICPC AlgoQueen 2025",
    company: "School Category",
    content: "My name is Aram Odeh, and I was proud to be one of the best students in the school category at ICPC AlgoQueen.The experience was truly inspiring. It was well-organised, and the problems were creative and hard, which made you think more deeply and grow. The organising team was also very helpful and kind, which made the event even more special. They made sure that everyone was motivated and happy during the whole competition.AlgoQueen is more than just a contest; it's a way to build confidence and passion. I can't wait to take part again, and I think every aspiring coder should do the same.",
    avatar: "/winner25s-15.jpg",
  },
  {
    name: "Yogita Singh",
    role: "Rank 20, ICPC AlgoQueen 2025",
    company: "College Category",
    content: "My experience with ICPC Algoqueen 2026 was nothing short of amazing. By putting me under a time limit and a proctored environment, it provided me with a platform to test my skills. This made me aware of my strengths and weaknesses, and hence enabled me to improve myself. The competition itself made me reflect on where I stand, and encouraged me to push myself further. I would recommend  all the female coders to take this test. It's an experience that helps you grow, no matter the outcome.",
    avatar: "/yogitasingh.jpg",
  }



];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentPage] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 10000); // slightly longer reading time
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className='py-12 sm:py-20'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        
        {/* Title for the section */}
        <div className="text-center mb-10">
          <h2 className='text-4xl  text-gray-900 tracking-tight'>
            Testimonials 
          </h2>
          <p className="text-gray-600 mt-2">Hear from our amazing competitors</p>
        </div>

        {/* Carousel Container */}
        <div className='relative overflow-hidden'>
          <div 
            className='flex transition-transform duration-500 ease-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className='w-full flex-shrink-0 px-2 sm:px-12'>
                
                {/* The pink Card matching your reference */}
                <div className='bg-[#4070f4] rounded-2xl p-8 sm:p-12 shadow-lg mx-auto relative text-white'>
                  
                  {/* Decorative Top Line */}
                  <div className="w-4/5 max-w-md mx-auto h-[2px] bg-white/40 mb-8 rounded-full"></div>

                  {/* Testimonial Text with large quotes */}
                  <div className="relative px-4 sm:px-10 text-center mb-8">
                    {/* Left Quote */}
                    <span className="text-5xl sm:text-7xl font-serif text-white/30 absolute -left-2 sm:-left-4 -top-4 leading-none">
                      "
                    </span>
                    
                    <p className="text-[17px] sm:text-[19px] leading-relaxed text-white/95 font-medium relative z-10">
                      {testimonial.content}
                    </p>

                    {/* Right Quote */}
                    <span className="text-5xl sm:text-7xl font-serif text-white/30 absolute -right-2 sm:-right-4 bottom-0 translate-y-4 leading-none">
                      "
                    </span>
                  </div>

                  {/* Profile Block */}
                  <div className='flex items-center justify-center gap-5'>
                    {testimonial.avatar ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className='w-20 h-20 rounded-full   object-cover object-center border-2 border-white/30 shadow-md'
                      />
                    ) : (
                      <div className='w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl border-2 border-white/30 shadow-md'>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}

                    <div className='text-left'>
                      <h4 className='font-bold text-white text-lg leading-tight'>{testimonial.name}</h4>
                      <p className='text-sm text-pink-100 font-medium'>
                        {testimonial.role}
                      </p>
                          <p className='text-sm text-pink-100 '>
                        {testimonial.company}
                      </p>
                    </div>

                    
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls (Arrows & Dots) */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="p-2 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#4070f4]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="p-2 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

const RegisterSection = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-white to-purple-100">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
             {/* <div className="flex items-center gap-2 mb-8 justify-center">
                <Swords size={24} className="text-indigo-600" />
                <h2 className="text-2xl font-bold">Competition Timeline</h2>
             </div> */}
  
            <Card className="mt-8">
              <h2 className="text-2xl flex items-center text-algo-primary font-semibold">
                <Award className="h-6 w-6 mr-2 text-indigo-600" /> Awards & Prizes
              </h2>
              <ul className="space-y-3 mt-4 text-left">
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-yellow-500 mr-2" />
                  <span>Gold Medals for top 5 students (Rank 1 to 5).</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-gray-400 mr-2" />
                  <span>Silver Medals for the next 5 students (Rank 6 to 10).</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-amber-700 mr-2" />
                  <span>Bronze Medals for the next 5 students (Rank 11 to 15).</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-500 mr-2" />
                  <span>Exciting gifts and Goodie Bags. **</span>
                </li>
              </ul>
           
              <p className="mt-4 text-sm text-gray-600">*Only Applicable for School Students.</p>
              <p className="mt-2 text-sm text-gray-600">**Further prize details will be announced later.</p>
            </Card>
          </div>
        </div>
        
        {/* Custom Testimonial Slider inserted here */}
        <TestimonialSlider />

      </main>
    </div>
  );
};

export default RegisterSection;