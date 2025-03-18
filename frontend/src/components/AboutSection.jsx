import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, MessageSquare, Users, School, Trophy, Zap, BarChart4 } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Simple Button Component (No Shadcn UI)
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-gray-50 opacity-60 text-black rounded-md border flex items-center gap-2 hover:bg-white transition"
  >
    {children}
  </button>
);

const AboutSection = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.from(".stat-number", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
      },
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-white to-purple-100">
      {/* About Section */}
      <div className="mb-16 flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-1/2">
         
            <img
              src="/image-about.png"
              alt="Programmer coding on laptop"
              className="w-full h-96 object-cover lg:w-fit lg:ml-20"
            />
        
        </div>

        <div className="md:w-1/2">
          <div className="text-indigo-600 font-medium mb-2 flex items-center gap-2">
            <BookOpen size={18} />
            <span>About</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ICPC Algo Queen
          </h1>
          <p className="text-gray-600 mb-6">
            An exceptional competitive programming experience endorsed by the
            ICPC Foundation to revolutionize the coding landscape for school and
            college students.
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-500 transition">
            <span>Register Now</span>
          
            <Zap size={16} />
       
          </button>
        </div>

       
      </div>

      {/* Why Participate Section */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Trophy size={24} className="text-indigo-600" />
          <h2 className="text-2xl font-bold">Why Participate?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Award size={32} />, title: "Exciting Prizes", text: "Win amazing prizes and get recognition for your coding skills." },
            { icon: <Zap size={32} />, title: "Skill Enhancement", text: "Take on coding challenges and improve your programming abilities." },
            { icon: <School size={32} />, title: "Training & Inspiration", text: "Learn tips and tricks to excel in competitive programming." },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button onClick={() => window.open("https://t.me/algoqueen2023", "_blank")}>
            <MessageSquare size={16} />
            Join Our Telegram Channel
          </Button>
        </div>
      </div>
         {/* Visual Showcase */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.2}
          className="h-64 rounded-xl overflow-hidden"
        >
          <img 
            src="/algo-hero2.jpg" 
            alt="Students collaborating" 
            className="w-full h-full object-cover "
          />
        </Tilt>
        
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.2}
          className="h-64 rounded-xl overflow-hidden"
        >
          <img 
            src="/algo-hero.jpg" 
            alt="Programming competition" 
            className="w-full h-full object-cover"
          />
        </Tilt>
      </div>

    
      
     

        
        
      </div>
    


     
  
  );
};

export default AboutSection;
