import React from "react";
import { Trophy, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const InfoCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="flex flex-col items-center text-center space-y-3 rounded-md p-6 bg-white shadow-md"
    >
      <div className="text-primary">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const InfoSection = () => {
  return (
    <div className="  py-10 rounded-md shadow-md bg-gradient-to-r from-white to-purple-100">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
     
      <InfoCard
        icon={<Users className="h-18 text-indigo-600" />} 
        title="WHAT?" 
        description="A global coding competition with mentorship, recognition, and career-ready skills." 
        delay={500} 
      />
       <InfoCard
        icon={<Calendar className="h-18 text-indigo-600" />} 
        title="WHEN?" 
        description="Registrations for ICPC Algo Queen 2025 open soon! Stay tuned for key dates." 
        delay={300} 
      />
       <InfoCard 
        icon={<Trophy className="h-18  text-indigo-600" />} 
        title="FOR WHOM?" 
        description="Female school (Grades 8-12) and college students passionate about coding." 
        delay={100} 
      />
    </div>
    </div>
  );
};

export default InfoSection;
