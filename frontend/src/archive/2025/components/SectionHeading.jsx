import React from 'react';
import { cn } from "@/lib/utils";

const SectionHeading = ({ title, subtitle, alignment = 'center', className }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn("mb-12 space-y-4", alignmentClasses[alignment], className)}>
      <div className="inline-block">
        <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider uppercase rounded-full bg-gray-100 mb-2">
          {title.split(' ')[0]}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
