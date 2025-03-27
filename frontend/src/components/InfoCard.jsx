import React from "react";
import { motion } from "framer-motion";

const InfoCard = ({ iconSrc, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="flex items-start space-x-4 rounded-md p-6 bg-white shadow-md"
    >
      {/* Image Icon on the Left */}
      <img src={iconSrc} alt={title} className="w-12 h-12 object-contain flex-shrink-0" />
      
      {/* Title & Description stacked on the Right */}
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const InfoSection = () => {
  return (
    <div className="py-10 rounded-md shadow-md bg-gradient-to-r from-white to-purple-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
        <InfoCard
          iconSrc="/trophy1.png"  // Replace with your image path
          title="WHAT?"
          description="A global coding competition with mentorship, recognition, and career-ready skills."
          delay={500}
        />
        <InfoCard
          iconSrc="/calender2.jpg"  // Replace with your image path
          title="WHEN?"
          description="Registrations for ICPC Algo Queen 2025 open soon! Stay tuned for key dates."
          delay={300}
        />
        <InfoCard
          iconSrc="/study_enhanced.png"  // Replace with your image path
          title="FOR WHOM?"
          description="Female school (Grades 8-12) and college students passionate about coding."
          delay={100}
        />
      </div>
    </div>
  );
};

export default InfoSection;
