import React, { useState } from 'react';
import { prizeWinnersData, PRIZE_NOTE } from '../data/PrizeWinnersData';

export default function PrizeLeaderboard() {
  const [activeCategory, setActiveCategory] = useState("Overall Champions");
  const [activeLevel, setActiveLevel] = useState("School");
  const [selectedStateFilter, setSelectedStateFilter] = useState("All");
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedStateFilter("All");
  };

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setSelectedStateFilter("All");
  };

  // Filter data based on selected category and level
  const activeData = prizeWinnersData.find(
    (data) => data.category === activeCategory && data.level === activeLevel
  );

  let displayedWinners = activeData?.winners || [];
  let availableStates = [];

  if (activeCategory === "State Champions" && activeData) {
    availableStates = Array.from(new Set(activeData.winners.map(w => w.state))).filter(Boolean);
    if (selectedStateFilter !== "All") {
      displayedWinners = displayedWinners.filter(w => w.state === selectedStateFilter);
    }
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className="flex w-full flex-col items-start overflow-hidden rounded-sm border border-solid border-neutral-border">
        
        {/* Filters Section (Wraps on small screens) */}
        <div className="flex flex-wrap items-center justify-between w-full border-b border-solid border-neutral-border">
          <div className="flex flex-wrap gap-2 px-4 py-3 sm:px-6">
            {["Overall Champions", "National Champions", "State Champions"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`p-2 text-sm sm:text-base transition-colors ${
                  activeCategory === cat
                    ? 'bg-pink-800 text-white'
                    : 'bg-neutral-100 text-default-font hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 px-4 py-3 sm:px-6">
            {["School", "College"].map((level) => (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`p-2 text-sm sm:text-base transition-colors ${
                  activeLevel === level
                    ? 'bg-pink-800 text-white'
                    : 'bg-neutral-100 text-default-font hover:bg-neutral-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        
        {/* Heading Section */}
        <div className="flex w-full flex-col items-start justify-center px-4 py-4 sm:px-6 border-b border-solid border-neutral-border">
          <h2 className="text-lg sm:text-xl  text-default-font">
            {activeCategory} - {activeLevel}
          </h2>
          <p className="text-subtext-color text-xs sm:text-sm mt-1">
            {activeData?.description}
          </p>
        </div>

        {/* Scrollable Table Area */}
        <div className="w-full overflow-x-auto">
          <div className="flex w-full flex-col min-w-[700px]">
            
            {/* Table Header */}
            <div className="flex w-full items-center border-b border-solid border-neutral-border bg-white">
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Prize</span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Name</span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Score</span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Institution</span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6 items-center relative">
                {activeCategory === "State Champions" ? (
                  <>
                    <div 
                      className="flex items-center gap-2 cursor-pointer group" 
                      onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                    >
                      <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase group-hover:text-pink-800 transition-colors">
                        State
                      </span>
                      <svg className="w-4 h-4 text-subtext-color group-hover:text-pink-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      
                      {/* {selectedStateFilter !== "All" && (
                        <span className="bg-pink-100 text-pink-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full truncate max-w-[80px]">
                          {selectedStateFilter}
                        </span>
                      )} */}
                    </div>

                    {isStateDropdownOpen && (
                      <>
                        <div 
                           className="fixed inset-0 z-40" 
                           onClick={(e) => { e.stopPropagation(); setIsStateDropdownOpen(false); }} 
                        />
                        <div className="absolute top-full left-4 sm:left-6 mt-1 w-56 bg-white border border-neutral-200 rounded-md shadow-lg z-50 overflow-hidden flex flex-col">
                          <div className="max-h-60 overflow-y-auto w-full">
                            <button 
                              className={`w-full text-left px-4 py-3 text-sm hover:bg-neutral-100 ${selectedStateFilter === 'All' ? 'bg-pink-50 text-pink-800 font-medium' : 'text-default-font'}`}
                              onClick={(e) => { e.stopPropagation(); setSelectedStateFilter('All'); setIsStateDropdownOpen(false); }}
                            >
                              All States
                            </button>
                            {availableStates.map(st => (
                              <button 
                                key={st}
                                className={`w-full text-left px-4 py-3 text-sm hover:bg-neutral-100 border-t border-neutral-100 ${selectedStateFilter === st ? 'bg-pink-50 text-pink-800 font-medium' : 'text-default-font'}`}
                                onClick={(e) => { e.stopPropagation(); setSelectedStateFilter(st); setIsStateDropdownOpen(false); }}
                              >
                                {st}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Country</span>
                )}
              </div>
            </div>

            {/* Table Body */}
            <div className="flex w-full flex-col">
              {displayedWinners.length > 0 ? (
                displayedWinners.map((winner, index) => {
                  // Compute which prize this winner is getting
                  // For Overall/National, index determines prize 1st, 2nd, 3rd.
                  // For State Champions, since we generated 3 winners per state, the index inside the displayedWinners tells us the prize if filtered.
                  // But if NOT filtered (All), the index goes 0..83.
                  // The prizes array has 3 elements. We can do index % 3 to map to 1st, 2nd, 3rd.
                  const prizeIndex = index % 3;
                  const prizeLabel = prizeIndex === 0 ? '1st Prize' : prizeIndex === 1 ? '2nd Prize' : '3rd Prize';

                  return (
                    <div
                      key={index}
                      className="flex w-full items-center border-b border-solid border-neutral-border last:border-b-0"
                    >
                      <div className="flex grow shrink-0 basis-0 min-w-0 flex-col items-start gap-1 px-4 py-4 sm:px-6">
                        <span className="text-sm sm:text-base  text-pink-800 break-words">
                          {prizeLabel}
                        </span>
                        <span className="text-xs sm:text-sm text-subtext-color break-words">
                          {activeData.prizes[prizeIndex]}
                        </span>
                      </div>
                      <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                      <div className="flex grow shrink-0 basis-0 min-w-0 items-center gap-6 px-4 py-4 sm:px-6">
                        <span className="line-clamp-2 grow shrink-0 basis-0 text-sm sm:text-base font-body text-default-font break-words">
                          {winner.name}
                        </span>
                      </div>
                      <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                      <div className="flex grow shrink-0 basis-0 min-w-0 flex-col items-start gap-6 px-4 py-4 sm:px-6">
                        <span className="line-clamp-1 w-full text-sm sm:text-base font-body text-default-font break-words">
                          {winner.score}
                        </span>
                      </div>
                      <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                      <div className="flex grow shrink-0 basis-0 min-w-0 items-center gap-6 px-4 py-4 sm:px-6">
                        <span className="line-clamp-2 grow shrink-0 basis-0 text-sm sm:text-base font-body text-default-font break-words">
                          {winner.institution}
                        </span>
                      </div>
                      <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                      <div className="flex grow shrink-0 basis-0 min-w-0 items-center gap-6 px-4 py-4 sm:px-6">
                        {activeCategory === "State Champions" ? (
                          <span className="line-clamp-2 uppercase grow shrink-0 basis-0 text-sm sm:text-base font-body text-default-font break-words">
                            {winner.state}
                          </span>
                        ) : (
                          winner.country && (
                            <span className="line-clamp-1 uppercase grow shrink-0 basis-0 text-sm sm:text-base font-body text-default-font break-words">
                              {winner.country}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex w-full items-center justify-center p-8 text-subtext-color text-sm sm:text-base">
                  No data available for this selection.
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-xs sm:text-sm font-caption text-subtext-color italic w-full">
        {PRIZE_NOTE}
      </div>
    </div>
  );
}