import React, { useState, useMemo, useEffect } from 'react';
import * as XLSX from "xlsx";

const WEEKS = ["Week 1", "Week 2", "Week 3", "Week 4"];
const CURRENT_WEEK = "Week 1"; // Setting Week 2 as current

// Use * for current week in the UI as requested
const displayWeek = (week) => week === CURRENT_WEEK ? `${week} *` : week;

export default function QuestLeaderboard() {
  const [selectedWeek, setSelectedWeek] = useState(CURRENT_WEEK);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataByWeek, setDataByWeek] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const parsedData = { "Week 1": [], "Week 2": [], "Week 3": [], "Week 4": [] };
        
        const fetchWeek = async (week, fileIndex) => {
          try {
            const res = await fetch(`/data/quest_week${fileIndex}.xlsx?t=${new Date().getTime()}`);
            if (!res.ok) return; // File might not exist yet, leave empty (TBA)
            
            const buf = await res.arrayBuffer();
            const wb = XLSX.read(buf, { type: "array" });
            const ws = wb.Sheets[wb.SheetNames[0]]; // Just read the first sheet of that file
            const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });
            
            parsedData[week] = rows.map(row => {
              // Helper to get value ignoring case/spaces
              const get = (...keys) => {
                for (const k of keys) {
                  const m = Object.keys(row).find(rk => rk.trim().toLowerCase() === k.toLowerCase());
                  if (m !== undefined) return String(row[m]).trim();
                }
                return "";
              };
              
              return {
                questId: get("quest id", "questid", "id"),
                name: get("name", "participant name"),
                c1: get("challenge 1", "c1", "1"),
                c2: get("challenge 2", "c2", "2"),
                c3: get("challenge 3", "c3", "3"),
                c4: get("challenge 4", "c4", "4"),
                c5: get("challenge 5", "c5", "5"),
                total: get("total", "score", "total score")
              };
            }).filter(d => d.questId || d.name); // Filter empty rows
          } catch (e) {
            console.error(`Error processing ${week} file:`, e);
          }
        };

        // Fetch all 4 files in parallel
        await Promise.all([
          fetchWeek("Week 1", 1),
          fetchWeek("Week 2", 2),
          fetchWeek("Week 3", 3),
          fetchWeek("Week 4", 4)
        ]);
        
        setDataByWeek(parsedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching quest leaderboard:", err);
        setError("Failed to load leaderboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const currentData = dataByWeek[selectedWeek] || [];

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return [...currentData].sort((a, b) => (parseFloat(b.total) || 0) - (parseFloat(a.total) || 0));
    }
    const q = searchQuery.toLowerCase();
    return currentData
      .filter(row => row.questId.toLowerCase().includes(q) || row.name.toLowerCase().includes(q))
      .sort((a, b) => (parseFloat(b.total) || 0) - (parseFloat(a.total) || 0));
  }, [currentData, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-8 font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-4">
          Quest Leaderboard
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto font-light">
          Track your progress across all challenges and weeks.
        </p>
      </div>

      {/* Toggles & Search */}
      <div className="bg-white rounded-none shadow-sm border border-slate-200 p-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-wrap gap-2 justify-center">
            {WEEKS.map((week) => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-5 py-2.5 rounded-none font-normal transition-all duration-200 ${
                  selectedWeek === week
                    ? 'bg-pink-600 text-white shadow-sm translate-y-[-1px]'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200'
                }`}
              >
                {displayWeek(week)}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by Quest ID or Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2.5 w-full bg-slate-50 border border-slate-200 rounded-none focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all text-slate-700 font-light"
            />
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-none shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className="w-8 h-8 border-2 border-slate-200 border-t-pink-600 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-light">Loading leaderboard data...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <h3 className="text-lg font-medium text-red-800 mb-2">Error</h3>
            <p className="text-red-500 font-light">{error}</p>
          </div>
        ) : currentData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            {/* <div className="w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl text-slate-400">TBA</span>
            </div> */}
            <h3 className="text-lg font-medium text-slate-800 mb-2">To Be Announced</h3>
            <p className="text-slate-500 font-light">The leaderboard for this week will be published soon.</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="py-20 text-center text-slate-500 font-light">
            No participants found matching your search.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider">Rank</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider">Quest ID</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Challenge 1</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Challenge 2</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Challenge 3</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Challenge 4</th>
                  <th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Challenge 5</th>
                  <th className="py-4 px-6 text-xs font-medium text-pink-600 uppercase tracking-wider text-center">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.map((row, index) => (
                  <tr key={row.questId} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center w-8 h-8 text-sm font-normal text-slate-700">
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-normal text-slate-900">{row.questId}</td>
                    <td className="py-4 px-6 text-sm text-slate-700 font-light">{row.name}</td>
                    <td className="py-4 px-6 text-sm text-center text-slate-600 font-light">{row.c1}</td>
                    <td className="py-4 px-6 text-sm text-center text-slate-600 font-light">{row.c2}</td>
                    <td className="py-4 px-6 text-sm text-center text-slate-600 font-light">{row.c3}</td>
                    <td className="py-4 px-6 text-sm text-center text-slate-600 font-light">{row.c4}</td>
                    <td className="py-4 px-6 text-sm text-center text-slate-600 font-light">{row.c5}</td>
                    <td className="py-4 px-6 text-sm text-center font-medium text-pink-600 bg-pink-50/30 rounded-none">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
