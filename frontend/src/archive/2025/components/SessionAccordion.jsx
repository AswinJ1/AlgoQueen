import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SessionCard from './SessionCard';

const SessionAccordion = ({ 
  sessions, 
  openSessionIds = [],
  onToggle
}) => {
  const [openItems, setOpenItems] = useState(openSessionIds);
  
  // Update local state when props change
  useEffect(() => {
    setOpenItems(openSessionIds);
  }, [openSessionIds]);

  const handleToggle = (itemId) => {
    const newOpenItems = openItems.includes(itemId)
      ? openItems.filter(id => id !== itemId)
      : [...openItems, itemId];
    
    setOpenItems(newOpenItems);
    
    // Notify parent component about the change
    if (onToggle) {
      onToggle(newOpenItems);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion 
        type="multiple" 
        value={openItems}
        className="w-full"
      >
        {sessions.map((session) => (
          <AccordionItem 
            key={session.id} 
            value={session.id}
            className="border-b border-algoqueen-light mb-2 last:mb-0 rounded-md overflow-hidden"
          >
            <AccordionTrigger 
              className="px-4 py-3 hover:bg-algoqueen-light/30 transition-colors"
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior
                handleToggle(session.id);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-medium text-algoqueen-primary">{session.title}</span>
                <span className={`difficulty-badge difficulty-${session.difficulty} mr-2`}>
                  {session.difficulty.charAt(0).toUpperCase() + session.difficulty.slice(1)}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2">
              <SessionCard
                title={session.title}
                difficulty={session.difficulty}
                description={session.description}
                date={session.date}
                time={session.time}
                trainer={session.trainer}
                link={session.link}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SessionAccordion;