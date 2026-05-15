import { useState, useMemo, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "flag-icons/css/flag-icons.min.css";
import Lottie from "lottie-react";

const COUNTRY_CODE = {
  india: "in", usa: "us", "united states": "us", "united states of america": "us",
  china: "cn", egypt: "eg", australia: "au", argentina: "ar", nigeria: "ng",
  japan: "jp", singapore: "sg", pakistan: "pk", "saudi arabia": "sa",
  france: "fr", uk: "gb", "united kingdom": "gb", uae: "ae",
  "united arab emirates": "ae", oman: "om", kuwait: "kw", qatar: "qa",
  bahrain: "bh", nepal: "np", bangladesh: "bd", "sri lanka": "lk",
  malaysia: "my", canada: "ca", germany: "de", indonesia: "id",
  russia: "ru", brazil: "br", "south africa": "za", italy: "it",
  georgia: "ge", mexico: "mx", spain: "es", "south korea": "kr",
  netherlands: "nl", sweden: "se", switzerland: "ch", "new zealand": "nz",
  philippines: "ph", vietnam: "vn", thailand: "th", turkey: "tr",
  kenya: "ke", ghana: "gh", ukraine: "ua", poland: "pl",
  syria: "sy", angola: "ao", jordan: "jo", kyrgyzstan: "kg", uzbekistan: "uz",
  aleppo: "sy", tunisia: "tn", "costa rica": "cr", kirgisistan: "kg",
  chile: "cl", peru: "pe", algeria: "dz"
  // add any other mappings as needed
};

function CountryFlag({ country, className = "" }) {
  const normalizedCountry = (country || "").trim().toLowerCase();
  const code = COUNTRY_CODE[normalizedCountry];
  
  if (!code) return <span className={className} title={country}>🌐</span>;
  return <span className={`fi fi-${code} ${className}`} title={country} />;
}

/* ── Animated counter ── */
function AnimatedNumber({ value, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1200;
    const startTime = performance.now() + delay;

    const step = (now) => {
      const elapsed = now - startTime;
      if (elapsed < 0) { requestAnimationFrame(step); return; }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, isInView, delay]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

/* ── Podium card ── */
function PodiumCard({ entry, place, delay }) {
  const heights = { 1: "h-36 md:h-44", 2: "h-24 md:h-28", 3: "h-20 md:h-24" };
  const sizes = {
    1: "text-5xl md:text-7xl",
    2: "text-4xl md:text-5xl",
    3: "text-4xl md:text-5xl",
  };
  const numColor = {
    1: "text-[#e31e5f]",
    2: "text-slate-400",
    3: "text-amber-400",
  };
  const barBg = {
    1: "bg-[#e31e5f]",
    2: "bg-slate-300",
    3: "bg-amber-300",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex-1 max-w-[240px] ${place === 1 ? "-mt-6 md:-mt-10 z-10" : ""}`}
    >
      {/* Card */}
      <div
        className={`bg-white border border-slate-100 p-5 md:p-7 text-center
          ${place === 1 ? "shadow-xl shadow-pink-100/40" : "shadow-sm"}
          transition-shadow duration-500 hover:shadow-lg`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-4 font-light">
            {entry.type}
          </p>
          <h3 className="text-base md:text-lg font-normal text-slate-900 leading-snug mb-2 tracking-tight">
            {entry.name}
          </h3>
          <p className="text-[11px] text-slate-500 tracking-wider mb-5 font-light">
            <CountryFlag country={entry.country} className="mr-1 opacity-80" /> {entry.country}
          </p>
          <p className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            <AnimatedNumber value={entry.registrations} delay={delay * 1000 + 400} />
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1 font-light">
            registrations
          </p>
        </motion.div>
      </div>

      {/* Pedestal Trophy */}
      <div className="flex flex-col items-center justify-center mt-4">
        <img
          src={
            place === 1
              ? "/trophies/gold1.png"
              : place === 2
              ? "/trophies/silver1.png"
              : "/trophies/bronze1.png"
          }
          alt={`${place} rank`}
          className="h-20 md:h-24 object-contain"
        />
        <span className="text-xs text-slate-400 font-light mt-2 tracking-widest">#{place}</span>
      </div>
    </motion.div>
  );
}

export default function LeaderboardSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [typeFilter, setTypeFilter] = useState("College");
  const [countryFilter, setCountryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [lottieData, setLottieData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const tableRef = useRef(null);

  /* ── Load Excel on mount ── */
  useEffect(() => {
    (async () => {
      try {
        // Fetch Lottie JSON in parallel
        fetch("/json/Error 404.json")
          .then(res => res.json())
          .then(data => setLottieData(data))
          .catch(e => console.error("Error loading Lottie:", e));

        const res = await fetch("/data/Leaderboard Data.xlsx");
        const buf = await res.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { defval: "" });

        const get = (row, ...keys) => {
          for (const k of keys) {
            const m = Object.keys(row).find(rk => rk.trim().toLowerCase() === k.toLowerCase());
            if (m !== undefined) return String(row[m]).trim();
          }
          return "";
        };

        const parsed = rows
          .map((row, i) => ({
            rank: parseInt(get(row, "rank")) || i + 1,
            name: get(row, "institution name", "institution", "name"),
            type: get(row, "type"),
            registrations: parseInt(get(row, "total registrations", "registrations")) || 0,
            country: get(row, "country"),
            state: get(row, "state"),
          }))
          .filter(d => d.name);

        if (!parsed.length) setError("No data found.");
        else setData(parsed);
      } catch {
        setError("Failed to load leaderboard data.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ── Derived data ── */
  const types = useMemo(() => (data ? [...new Set(data.map(d => d.type).filter(Boolean))].sort() : []), [data]);
  const countries = useMemo(() => (data ? [...new Set(data.map(d => d.country))].sort() : []), [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter(d => {
      if (typeFilter && d.type !== typeFilter) return false;
      if (countryFilter && d.country !== countryFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!d.name.toLowerCase().includes(q) && !d.country.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [data, typeFilter, countryFilter, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [typeFilter, countryFilter, searchQuery]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedData = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const maxReg = Math.max(...(filtered.length ? filtered.map(d => d.registrations) : [1]));
  const totalReg = filtered.reduce((s, d) => s + d.registrations, 0);

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-32">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border border-slate-200 border-t-[#e31e5f] rounded-full mb-6"
        />
        <p className="text-slate-300 text-sm tracking-[0.15em] uppercase font-light">Loading</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-32">
        {lottieData ? (
          <div className="w-64 h-64 mb-4 opacity-80">
            <Lottie animationData={lottieData} loop={true} />
          </div>
        ) : (
          <img src="/404.svg" alt="No data available" className="mb-4 object-contain opacity-80" />
        )}
        <p className="text-slate-400 text-lg font-light">{error || "No data available."}</p>
      </div>
    );
  }

  const top3 = filtered.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* ════════ Header ════════ */}
      <div className="text-center mb-16 md:mb-20">
        <p className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#e31e5f] mb-5 font-medium">
          Registration Leaderboard
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.05] mb-5">
          Top Institutions
        </h1>
        <div className="w-12 h-[1px] bg-[#e31e5f] mx-auto mb-5" />
        <p className="text-sm md:text-base text-slate-600 font-light tracking-wide max-w-lg mx-auto">
          Ranked by total registrations across the globe
        </p>
      </div>
        {/* ════════ Filters ════════ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl px-4 mb-10"
      >
        <div className="bg-white/60 backdrop-blur-sm border border-slate-100 p-5 md:p-6 flex flex-col md:flex-row flex-wrap gap-4 items-start md:items-end">
          {/* Search */}
          <div className="flex flex-col gap-1.5 w-full md:flex-1 md:min-w-[180px]">
            <label className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-light">
              Search
            </label>
            <input
              type="text"
              placeholder="Institution, country, or state…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent border-b border-slate-200 text-slate-800 text-sm px-0 py-2 outline-none focus:border-[#e31e5f] transition-colors placeholder:text-slate-400 font-light tracking-wide w-full"
            />
          </div>

          {/* Type */}
          <div className="flex flex-col gap-1.5 w-full md:w-auto md:min-w-[180px]">
            <label className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-light">
              Type
            </label>
            <div className="flex gap-0 border-b border-slate-200 w-full">
              {types.map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-4 py-2 text-sm font-light tracking-wide transition-all relative flex-1 text-center
                    ${typeFilter === t
                      ? "text-[#e31e5f] font-medium"
                      : "text-slate-500 hover:text-slate-700"
                    }`}
                >
                  {t}
                  {typeFilter === t && (
                    <motion.div
                      layoutId="typeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#e31e5f]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:flex-1">
            {/* Country */}
            <div className="flex flex-col gap-1.5 flex-1 min-w-[140px]">
              <label className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-light">
                Country
              </label>
              <select
                value={countryFilter}
                onChange={e => { setCountryFilter(e.target.value); }}
                className="bg-transparent border-b border-slate-200 text-slate-800 text-sm px-0 py-2 outline-none focus:border-[#e31e5f] transition-colors cursor-pointer appearance-none font-light tracking-wide w-full"
              >
                <option value="">All Countries</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ════════ Podium ════════ */}
      <div className="w-full max-w-3xl mb-20 md:mb-28 px-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-2 md:gap-4 mt-12 sm:mt-0">
          <div className="hidden sm:block flex-1 max-w-[240px]">
            {top3[1] && <PodiumCard entry={top3[1]} place={2} delay={0.5} />}
          </div>
          <div className="sm:hidden w-full max-w-[240px] order-2">
             {top3[1] && <PodiumCard entry={top3[1]} place={2} delay={0.5} />}
          </div>
          
          <div className="w-full max-w-[240px] order-1 sm:order-none z-10">
            {top3[0] && <PodiumCard entry={top3[0]} place={1} delay={0.3} />}
          </div>
          
          <div className="hidden sm:block flex-1 max-w-[240px]">
            {top3[2] && <PodiumCard entry={top3[2]} place={3} delay={0.7} />}
          </div>
           <div className="sm:hidden w-full max-w-[240px] order-3">
             {top3[2] && <PodiumCard entry={top3[2]} place={3} delay={0.7} />}
          </div>
        </div>
      </div>

      {/* ════════ Stats ════════ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl px-4 mb-8 flex flex-wrap gap-6 md:gap-10 justify-center"
      >
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            <AnimatedNumber value={filtered.length} />
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1 font-light">
            Institutions
          </p>
        </div>
        <div className="w-[1px] h-12 bg-slate-100 self-center hidden md:block" />
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            <AnimatedNumber value={totalReg} />
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1 font-light">
            Total Registrations
          </p>
        </div>
        <div className="w-[1px] h-12 bg-slate-100 self-center hidden md:block" />
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            <AnimatedNumber value={countries.length} />
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1 font-light">
            Countries
          </p>
        </div>
      </motion.div>

     

      {/* ════════ Table ════════ */}
      <motion.div
        ref={tableRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl px-4"
      >
        <div className="bg-white border border-slate-100 shadow-sm overflow-hidden">
          <div
            className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-4 px-6 text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium text-center w-[60px]">
                    #
                  </th>
                  <th className="py-4 px-6 text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium">
                    Institution
                  </th>
                  <th className="py-4 px-6 text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium text-center w-[100px]">
                    Type
                  </th>
                  <th className="py-4 px-6 text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium text-center w-[160px]">
                    Registrations
                  </th>
                  <th className="py-4 px-6 text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium w-[200px]">
                    Location
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* <AnimatePresence mode="popLayout"> */}
                  {paginatedData.length === 0 ? (
                    <tr key="empty">
                      <td colSpan={5}>
                        <div className="flex flex-col items-center justify-center py-20 text-slate-500 font-light tracking-wide">
                          {lottieData ? (
                            <div className="w-64 h-64 mb-4 opacity-80">
                              <Lottie animationData={lottieData} loop={true} />
                            </div>
                          ) : (
                            <img src="/404.svg" alt="No results found" className="mb-4 object-contain opacity-80" />
                          )}
                          <p>No results match your filters.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((d, i) => {
                      const currentRank = (currentPage - 1) * itemsPerPage + i + 1;
                      const pct = Math.round((d.registrations / maxReg) * 100);
                      const isTop3 = currentRank <= 3;

                      return (
                        <motion.tr
                          key={d.name + currentRank}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          exit={{ opacity: 0, x: 12 }}
                          transition={{ duration: 0.35, delay: (i % 10) * 0.04 }}
                          className={`border-b border-slate-50 transition-colors duration-300
                            ${isTop3 ? "bg-slate-50/50" : ""}
                            hover:bg-slate-50`}
                        >
                          {/* Rank */}
                          <td className="py-5 px-6 text-center">
                            {isTop3 ? (
                              <img
                                src={
                                  currentRank === 1
                                    ? "/trophies/gold1.png"
                                    : currentRank === 2
                                    ? "/trophies/silver1.png"
                                    : "/trophies/bronze1.png"
                                }
                                alt={`Rank ${currentRank}`}
                                className="w-8 h-8 object-contain mx-auto"
                              />
                            ) : (
                              <span className="text-sm text-slate-500 font-light">{currentRank}</span>
                            )}
                          </td>

                          {/* Name */}
                          <td className="py-5 px-6">
                            <div className="flex items-center gap-4">
                              <img
                                src={d.type === "School" ? "/school.webp" : "/collegeicon.webp"}
                                alt=""
                                className="w-7 h-7 object-contain opacity-80 flex-shrink-0"
                              />
                              <span className={`text-sm tracking-wide ${isTop3 ? "text-slate-900 font-normal" : "text-slate-800 font-light"}`}>
                                {d.name}
                              </span>
                            </div>
                          </td>

                          {/* Type */}
                          <td className="py-5 px-6 text-center">
                            <span className="text-[11px] tracking-[0.15em] uppercase text-slate-500 font-light">
                              {d.type}
                            </span>
                          </td>

                          {/* Registrations */}
                          <td className="py-5 px-6 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <span className={`text-base font-normal tracking-wide ${isTop3 ? "text-[#e31e5f]" : "text-slate-800"}`}>
                                {d.registrations.toLocaleString()}
                              </span>
                              <div className="w-full max-w-[80px] h-[2px] bg-slate-100 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${pct}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
                                  className="h-full bg-[#e31e5f]/40"
                                />
                              </div>
                            </div>
                          </td>

                          {/* Location */}
                          <td className="py-5 px-6">
                            <span className="text-sm text-slate-600 font-light tracking-wide flex items-center gap-1.5">
                              <CountryFlag country={d.country} className="opacity-80" />
                              <span>{d.country}</span>
                            </span>
                          </td>
                        </motion.tr>
                      );
                    })
                  )}
                {/* </AnimatePresence> */}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center px-6 py-4 bg-slate-50/50 border-t border-slate-100">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-light tracking-wide rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex gap-1.5 items-center">
                {getPageNumbers().map((pageNum, idx) => (
                  pageNum === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 py-1 text-slate-400 font-light">...</span>
                  ) : (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 flex items-center justify-center rounded-md text-sm transition-colors ${
                        currentPage === pageNum
                          ? "bg-[#e31e5f] text-white font-medium shadow-sm"
                          : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 font-light"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-light tracking-wide rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
