import React, { useState, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';

export default function PrizeLeaderboard() {
  const [prizeWinnersData, setPrizeWinnersData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Overall Champions");
  const [activeLevel, setActiveLevel] = useState("School");
  const [selectedState, setSelectedState] = useState("All");

  // Load data from JSON files
  useEffect(() => {
    const loadJsonData = async () => {
      try {
        const data = [];

        // Load Overall School Champions
        const overallSchoolData = await fetch('/data/Prize_Overall_School.json').then(r => r.json());
        data.push(overallSchoolData);

        // Load Overall College Champions
        const overallCollegeData = await fetch('/data/Prize_Overall_College.json').then(r => r.json());
        data.push(overallCollegeData);

        // Load National Champions - School
        const nationalSchoolData = await fetch('/data/Prize_National_School.json').then(r => r.json());
        data.push(nationalSchoolData);

        // Load State Champions - School
        const stateSchoolData = await fetch('/data/Prize_State_School.json').then(r => r.json());
        data.push(stateSchoolData);

        // Load State Champions - College
        const stateCollegeData = await fetch('/data/Prize_State_College.json').then(r => r.json());
        data.push(stateCollegeData);

        setPrizeWinnersData(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    loadJsonData();
  }, []);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedState("All");
    setActiveLevel("School");
  };

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setSelectedState("All");
  };

  // Determine available levels based on category
  const getAvailableLevels = () => {
    if (activeCategory === "National Champions") {
      return ["School"];
    }
    return ["School", "College"];
  };

  const availableLevels = getAvailableLevels();

  // Filter data based on selected category and level
  const activeData = prizeWinnersData.find(
    (data) => data.category === activeCategory && data.level === activeLevel
  );

  let displayedWinners = activeData?.winners || [];
  let availableStates = [];

  if (activeCategory === "State Champions" && activeData) {
    availableStates = Array.from(new Set(activeData.winners.map(w => w.state))).filter(Boolean).sort();
    if (selectedState !== "All") {
      displayedWinners = displayedWinners.filter(w => w.state === selectedState);
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
            {availableLevels.map((level) => (
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

        {/* State Tabs for State Champions */}
        {activeCategory === "State Champions" && (
          <div className="w-full border-b border-solid border-neutral-border overflow-x-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 px-4 py-3 sm:px-6">
              <button
                onClick={() => setSelectedState("All")}
                className={`px-3 py-2 text-sm whitespace-nowrap transition-colors rounded ${
                  selectedState === "All"
                    ? 'bg-pink-800 text-white'
                    : 'bg-neutral-100 text-default-font hover:bg-neutral-200'
                }`}
              >
                All States
              </button>
              {availableStates.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-3 py-2 text-sm whitespace-nowrap transition-colors rounded text-center ${
                    selectedState === state
                      ? 'bg-pink-800 text-white'
                      : 'bg-neutral-100 text-default-font hover:bg-neutral-200'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Scrollable Table Area */}
        <div className="w-full overflow-x-auto">
          <div className="flex w-full flex-col min-w-[700px]">
            
            {/* Table Header */}
            <div className="flex w-full items-center border-b border-solid border-neutral-border bg-white">
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Rank</span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Name</span>
              </div>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
              <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Institution</span>
              </div>
              {activeCategory === "Overall Champions" && (
                <>
                  <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                  <div className="flex grow shrink-0 basis-0 min-w-0 px-4 py-3 sm:px-6">
                    <span className="text-xs sm:text-sm font-caption text-subtext-color uppercase">Country</span>
                  </div>
                </>
              )}
            </div>

            {/* Table Body */}
            <div className="flex w-full flex-col">
              {displayedWinners.length > 0 ? (
                displayedWinners.map((winner, index) => {
                  // Determine rank label
                  let rankLabel = winner.prize || 'Rank';
                  
                  // For Overall/National without prize field, use index-based calculation
                  if (!winner.prize && (activeCategory === 'Overall Champions' || activeCategory === 'National Champions')) {
                    const rankIndex = index % 3;
                    rankLabel = rankIndex === 0 ? '1st Rank' : rankIndex === 1 ? '2nd Rank' : '3rd Rank';
                  }

                  return (
                    <div
                      key={index}
                      className="flex w-full items-center border-b border-solid border-neutral-border last:border-b-0"
                    >
                      <div className="flex grow shrink-0 basis-0 min-w-0 flex-col items-start gap-1 px-4 py-4 sm:px-6">
                        <span className="text-sm sm:text-base  text-pink-800 break-words">
                          {rankLabel}
                        </span>
                      </div>
                      <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                      <div className="flex grow shrink-0 basis-0 min-w-0 items-center gap-6 px-4 py-4 sm:px-6">
                        <span className="line-clamp-2 grow shrink-0 basis-0 text-sm sm:text-base font-body text-default-font break-words">
                          {winner.name}
                        </span>
                      </div>
                      <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                      <div className="flex grow shrink-0 basis-0 min-w-0 items-center gap-6 px-4 py-4 sm:px-6">
                        <span className="line-clamp-2 grow shrink-0 basis-0 text-sm sm:text-base font-body text-default-font break-words">
                          {winner.institution}
                        </span>
                      </div>
                      {activeCategory === "Overall Champions" && (
                        <>
                          <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-200" />
                          <div className="flex grow shrink-0 basis-0 min-w-0 items-center gap-2 px-4 py-4 sm:px-6">
                            {winner.countryCode && winner.countryCode !== 'xx' ? (
                              <div className="flex items-center gap-2">
                                <span className={`fi fi-${winner.countryCode.toLowerCase()} rounded-sm shadow-sm text-lg`} />
                                <span className="line-clamp-1 uppercase text-sm sm:text-base font-body text-default-font">
                                  {winner.countryCode}
                                </span>
                              </div>
                            ) : (
                              <span className="text-sm sm:text-base font-body text-default-font">N/A</span>
                            )}
                          </div>
                        </>
                      )}
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
        {/* Prize note section - add note here if needed */}
      </div>
    </div>
  );
}