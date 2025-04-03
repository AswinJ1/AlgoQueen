import React from "react";
import { motion } from "framer-motion";
import { Pin } from "lucide-react"; // Importing Lucide icon

const InfoCard = ({ iconSrc, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="flex items-start space-x-4 rounded-md p-6 bg-white shadow-md xl:max-w-lg mx-auto  "
    >
      {/* Image Icon on the Left */}
      <img src={iconSrc} alt={title} className="w-12 h-12 object-contain flex-shrink-0" />

      {/* Title & Description stacked on the Right */}
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{title}</h3>
        {Array.isArray(description) ? (
          <div className="text-gray-600">
           {description.map((item, index) => (
  <div key={index} className="flex items-start space-x-2 mt-1">
    <Pin className="w-3 h-3 min-w-[16px] text-indigo-600 flex-shrink-0 mt-1" />
    <span className="text-gray-600 leading-tight">{item}</span>
  </div>
))}
          </div>
        ) : (
          <p className="text-gray-600">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

const InfoSection = () => {
  return (

    <div className="py-10 rounded-md shadow-md bg-gradient-to-r from-white to-purple-100 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
        <InfoCard
          iconSrc="/trophy1.png"
          title="WHAT?"
          description={[
            "A global competitive programming competition with mentorship, and recognition",
           ,
          ]}
          delay={500}
        />
        <InfoCard
          iconSrc="/calender2.jpg"
          title="WHEN?"
          description={[
            "Registrations for ICPC Algo Queen 2025 will be open soon! Stay tuned for keydates",
           ,
          ]}
          delay={300}
        />
        <InfoCard
          iconSrc="/study_enhanced.png"
          title="FOR WHOM?"
          description={[
            "School Girls: Grades 8 - 12",
            "College Girls: currently pursuing graduation / post-graduation",
          ]}
          delay={100}
        />
      </div>
    </div>
  );
};

export default InfoSection;
