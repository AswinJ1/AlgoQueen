import { useState, useMemo } from "react"
import { FcGoogle } from 'react-icons/fc';

const scheduleData = [
  { date: "May 23", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Jaskaran Singh", role: "Software Engineer", company: "Google", logo: <FcGoogle size={20} />, avatar: "/Jaskaran Singh.jpg?q=80&w=880&auto=format&fit=crop" },
  { date: "May 25", time: "6:00 pm - 7:00 pm  IST", title: "Competitive Programming for ICPC Roadmap, STL & Arrays Fundamentals", speaker: "Sneha Roychowdhury", role: "ICPC Regionalist 2024 & 2025, IGDTUW", avatar: "/Sneha Roychowdhury.jpg?q=80&w=1025&auto=format&fit=crop" },
  { date: "May 26", time: "6:00 pm - 7:00 pm  IST", title: "How to Get Started with DSA and Level Up to Advanced Topics like DP and Daily Contests", speaker: "Sidrah Aaishah", role: "3rd year CSE", company: "IIIT Nagpur", logo: <img src="/iiitnagpur.png" width={20} height={20} />, avatar: "/Sidrah_Aaishah.webp?q=80&w=687&auto=format&fit=crop" },
  // { date: "May 28", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "TBA", role: "", company: "", logo: null, avatar: "" },
  // { date: "May 29", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "TBA", role: "", company: "", logo: null, avatar: "" },
  { date: "May 30", time: "6:00 pm - 7:00 pm  IST", title: "Breaking the CP Myth, like a practical roadmap for girls to start, stay, and succeed", speaker: "Trilasha Mazumder", role: "Software Engineer II", company: "Google", logo: <FcGoogle size={20} />, avatar: "/Trilasha Mazumder.jpg?q=80&w=687&auto=format&fit=crop" },
  { date: "June 1", time: "6:00 pm - 7:00 pm  IST", title: "Graphs: Basic Traversal & Shortest Path", speaker: "Hetvi Bagdai", role: "Software Engineer Intern", company: "Google", logo: <FcGoogle size={20} />, avatar: "/Hetvi Bagdai.jpeg?q=80&w=687&auto=format&fit=crop" },
  // { date: "June 4", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "TBA", role: "", company: "", logo: null, avatar: "" },
  { date: "June 6", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Yogita Singh", role: "Final Year, M.Tech (M&C)", company: "IIT(ISM) Dhanbad", logo: <img src="/IIT_(ISM)_Dhanbad_Logo.svg" width={20} height={20} />, avatar: "/yogitasingh.jpg?q=80&w=687&auto=format&fit=crop" },
  { date: "June 8", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Aatira Menon", role: "High School Student", company: "", logo: null, avatar: "/Aatira Menon.jpg" },
  // { date: "June 9", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "TBA", role: "", company: "", logo: null, avatar: "" },
  { date: "June 11", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Khushbu Khemchandani", role: "CSE Student ", company: "IIT (ISM) Dhanbad", logo:<img src="/IIT_(ISM)_Dhanbad_Logo.svg" width={20} height={20} />, avatar: "/Khushbu Khemchandani.png" },
  { date: "June 13", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Shinjan Chaturvedi", role: "Software Engineer", company: "Rubrik", logo: <img src="/company-icons/rubrik.jpg" width={20} height={20} />, avatar: "/Shinjana_chaturvedi.webp?q=80&w=687&auto=format&fit=crop" },
  { date: "June 15", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Jyotsna Telgote", role: "", company: "", logo: null, avatar: "" },
  { date: "June 18", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "Shraddha Gulati", role: "Software Engineer", company: "Google", logo: <FcGoogle size={20} />, avatar: "/Shraddha_Gulati.jpg?q=80&w=687&auto=format&fit=crop" },
  // { date: "June 20", time: "6:00 pm - 7:00 pm  IST", title: "TBA", speaker: "TBA", role: "", company: "", logo: null, avatar: "" },
];

export default function ScheduleSection() {
  return (
    <section className="w-full bg-gradient-to-r from-white to-purple-100 pt-36 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-4xl text-[#0d1b2e] font-light tracking-tight">
            Schedule
          </h2>
        </div>

        {/* Schedule list */}
        <div className="bg-white/80 rounded-xl shadow-sm border border-purple-100 overflow-hidden">
          {scheduleData.length === 0 ? (
            <p className="py-20 text-center text-gray-400 text-lg font-light">
              Schedule coming soon.
            </p>
          ) : (
            scheduleData.map((talk, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-10 px-6 sm:px-10 py-8 border-b border-purple-50 hover:bg-purple-50/50 transition-colors items-start"
              >
                {/* Date & Time */}
                <div className="md:w-64 flex-shrink-0 flex flex-col gap-1 items-start">
                  {/* <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                    Day {index + 1}
                  </span> */}
                  <span className="text-3xl font-light text-pink-600 whitespace-nowrap">
                    {talk.date}
                  </span>
                  <time className="text-lg text-gray-500 font-light whitespace-nowrap mt-1">
                    {talk.time}
                  </time>
                </div>

                {/* Talk Info */}
                <div className="flex flex-col gap-4 flex-grow">
                  <p className="text-xl md:text-2xl  text-[#0d1b2e] font-medium leading-snug">
                    {talk.title}
                  </p>
                  
                  {talk.speaker && talk.speaker !== "TBA" ? (
                    <div className="flex items-center gap-5 mt-2">
                      {talk.avatar ? (
                        <img
                          src={talk.avatar}
                          alt={talk.speaker}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0 shadow-sm"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      ) : (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-100 flex-shrink-0 flex items-center justify-center text-pink-600 text-3xl font-light">
                          {talk.speaker.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="text-xl sm:text-2xl text-pink-600 font-medium leading-tight">
                          {talk.speaker}
                        </p>
                        {talk.role && (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 text-sm sm:text-base text-gray-600 font-light">
                            <p>{talk.role}</p>
                            {talk.company && <span className="hidden sm:inline text-gray-400">|</span>}
                            <div className="flex items-center gap-2">
                              {talk.logo && <div className="flex-shrink-0">{talk.logo}</div>}
                              {talk.company && <p>{talk.company}</p>}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                     <div className="flex items-center gap-3 mt-2">
                        <p className="text-lg text-gray-400 font-light leading-tight ">
                           Speaker: TBA
                        </p>
                     </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}