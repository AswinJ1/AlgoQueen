"use client";
import React, { useState, useEffect } from "react";
const timeline = [
  // {
  //   date: " July 10",
  //   label: "Registration Ends",
  // },
  // {
  //   date: "July 11",
  //   label: "Practice Contest 2",
  //   // time: "10:00 AM IST",
  // },
  {
    date: "July 18",
    label: "Online Finals"
  },
];
const REGISTER_END = new Date('2026-07-18T15:00:00+05:30').getTime();

export default function TimelineSection() {
       const [countdown, setCountdown] = useState(null);
        useEffect(() => {
          const updateCountdown = () => {
            const diff = REGISTER_END - Date.now();
            if (diff <= 0) {
              setCountdown(null);
              return;
            }
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setCountdown({ hours, minutes, seconds });
          };
          updateCountdown();
          const interval = setInterval(updateCountdown, 1000);
          return () => clearInterval(interval);
        }, []);

  return (
    <section className="bg-gradient-to-r from-white to-purple-100 py-12 px-6">
      
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center gap-8">
        
        {timeline.map((item, index) => (
         <div key={index}>
          <h2 className="text-3xl md:text-4xl text-gray-900">
          Online Finals:  {item.date}
          </h2>
          {/* <p className="text-gray-500 text-sm md:text-base">
           {item.label}
          </p> */}
        </div>
        ))}

          {countdown && (
              <div className=" flex items-center flex-wrap gap-4">
                <span className="text-xl text-gray-700">
                  {/* Practice Contest 1 starts in: */}
                  Algo Queen Finals Starts  in:
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center bg-white shadow-md px-4 py-2 min-w-[72px]">
                    <span className="text-3xl font-bold text-indigo-600 tabular-nums">{String(countdown.hours).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-500">Hrs</span>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">:</span>
                  <div className="flex flex-col items-center bg-white shadow-md px-4 py-2 min-w-[72px]">
                    <span className="text-3xl font-bold text-indigo-600 tabular-nums">{String(countdown.minutes).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-500">Mins</span>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">:</span>
                  <div className="flex flex-col items-center bg-white shadow-md px-4 py-2 min-w-[72px]">
                    <span className="text-3xl font-bold text-indigo-600 tabular-nums">{String(countdown.seconds).padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-wide text-gray-500">Secs</span>
                  </div>
                </div>
                {/* <span className="text-xl  text-gray-500">10:00 AM IST, July 4</span> */}
              </div>
            )}

      </div>
    </section>
  );
}