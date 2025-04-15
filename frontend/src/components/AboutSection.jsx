import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, MessageSquare, Users, School, Trophy, Zap, BarChart4 ,Target,Rocket,Briefcase,Medal, Brain, Quote, SwordIcon, Swords, Lightbulb, TargetIcon, RocketIcon, LightbulbIcon, StarIcon, StarsIcon, StarOffIcon, StarHalf, MoonStarIcon, ListStartIcon, Star, LucideStars} from "lucide-react";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Simple Button Component (No Shadcn UI)
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    id="register-button"
    className="px-4 py-2 bg-white opacity-80 text-black rounded-md border flex items-center gap-2 hover:bg-gray-50 transition"
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
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-r from-white to-purple-100 ">
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
          <div className="text-black font-medium mb-2 flex items-center gap-2">
            <BookOpen size={18}  className="text-indigo-600"/>
            <span>About  ICPC Algo Queen</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Empowering Women in Competitive Programming</h2>
<p className="text-gray-600 mb-6">
ICPC AlgoQueen 2025 is a premier global competitive programming competition designed to 
empower young women in tech. With participants from schools and universities worldwide, 
the competition offers a challenging yet supportive environment where competitors can 
showcase their talents and grow as problem solvers. 

</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Mission Section */}
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow justify-normal">
      {/* Icon */}
      <div className="flex justify-center mb-4 text-indigo-600">
        <Target size={40} />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>

      {/* Description */}
      <p className="text-gray-600">
      To empower female students with coding skills through mentorship, training, and competitions, fostering diversity, inclusion, and excellence for future tech leaders.

      </p>
    </div>

  {/* Vision Section */}
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow justify-normal">
      {/* Icon */}
      <div className="flex justify-center mb-4 text-indigo-600">
        <Rocket size={40} />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Our Vision</h2>

      {/* Description */}
      <p className="text-gray-600 ">
        To create an inclusive ecosystem where women lead in technology, innovation, and competitive 
        programming, breaking barriers and gaining global recognition.
      </p>
    </div>
</div>

 <br />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-500 transition" onClick={() => window.open("https://codedrills.io/contests/icpc-algo-queen-2025/", "_blank")}>
            <span>Register Now</span>
          
            <Zap size={16} />
       
          </button>
        </div>

       
      </div>
     

      {/* Why Participate Section */}
      <div className="mb-0">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <RocketIcon size={24} className="text-indigo-600" />
          <h2 className="text-2xl font-bold ">Why Participate?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
          {[
            { icon: <Award size={32} />, title: "Enhance Your Skills", text: "Enhance your coding and algorithmic skills" },
            { icon: <Zap size={32} />, title: " Compete Globally", text: "Compete with top female programmers globally" },
            { icon: <School size={32} />, title: "Expert Mentorship", text: "Gain mentorship and access to learning resources" },
            {icon: <LucideStars size={32} />, title: "Compete & Win Amazing Prizes!", text:<>
            Win exciting rewards, including a sponsored trip to ICPC World Finals
            2025 in Baku, Azerbaijan.{" "} <br />
            <span className="text-sm text-gray-500 italic ">
              *Terms and conditions apply
            </span>
          </> },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-indigo-600 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
            {/* Visual Showcase */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.2}
          className="h-64 rounded-xl overflow-hidden xl:h-96"
        >
          <img 
            src="/group.jpg" 
            alt="Students collaborating" 
            className="w-full h-full object-cover "
          />
        </Tilt>
        
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.2}
          className="h-64 rounded-xl overflow-hidden xl:h-96"
        >
          <img 
            src="/icpc_algoQ.jpeg" 
            alt="Programming competition" 
            className="w-full h-full object-cover"
          />
        </Tilt>
      </div>
        <div className="flex items-center gap-2 mb-8 justify-center">
          <LightbulbIcon size={24} className="text-indigo-600" />
          <h2 className="text-2xl font-bold ">How does it work?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <BookOpen size={32} />, title: "Learn", text: "Gain access to expert mentorship, structured training sessions, and problem-solving resources to sharpen your coding skills." },
            { icon: <Target size={32} />, title: "Compete", text: " Participate in two exciting rounds of competition, solving challenging problems and testing your abilities against top female coders worldwide." },
            { icon: <Medal size={32} />, title: "Win", text: "Gain recognition and win exciting rewards, including a sponsored trip to the ICPC World Finals 2025 in Baku, Azerbaijan" }
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
      

    
      
     

        
        
      </div>
    


     
  
  );
};

export default AboutSection;
