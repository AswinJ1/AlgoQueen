import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, StarOffIcon } from "lucide-react";

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  expert: 'Expert'
};

const SessionCard = ({
  title,
  difficulty,
  description,
  date,
  time,
  trainer,
  link,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg text-algoqueen-dark">{title}</h3>
        <span className={`difficulty-badge difficulty-${difficulty}`}>
          {difficultyLabels[difficulty]}
        </span>
      </div>
      
      <p className="text-gray-600 mb-3 text-sm">{description}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{date} • {time}</span>
        <span className='p-2'>{trainer}</span>
      </div>
     {link ? (
      <Button className="w-full bg-indigo-600 hover:bg-indigo-800 transition-colors text-white " onClick={() => window.open(link, "_blank")}>
        Join Session
      </Button>
     ) : (
      // Coming Soon...<StarOffIcon size={15} className="text-indigo-600"/>
      <p className="text-gray-600 mb-3 text-sm flex items-center gap-1"></p>
     )}
    </div>
  );
};

export default SessionCard;