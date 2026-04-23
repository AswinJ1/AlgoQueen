"use client";

import { useState } from "react";
import { SpeakerIcon } from "lucide-react";
import { FcGoogle } from 'react-icons/fc'; // <-- Import the colored version

const speakers = [
  {
    name: "Jaskaran Singh",
    role: "Software Engineer",
    logo: <FcGoogle size={20} />,
    company: "Google",
    description: [
      "Former co-founder of Opendoor.",
      "Early staff at Spotify and Clearbit.",
    ],
    image:
      "/Jaskaran Singh.jpg?q=80&w=880&auto=format&fit=crop",
  },
  {
    name: "Sneha Roychowdhury",
    role: "President and Curator",
    company: "TEDxIGDTU",
    logo: <img src="/company-icons/tedx-logo.png" width={20} height={20} />,
    description: [
      "Lead engineering teams at Figma,",
      "Pitch, and Protocol Labs.",
    ],
    image:
      "/Sneha Roychowdhury.jpg?q=80&w=1025&auto=format&fit=crop",
  },
  {
    name: "Trilasha Mazumder",
    role: "Software Engineer II",
    company:"Google",
    logo: <FcGoogle size={20} />,

    image:
      "/Trilasha Mazumder.jpg?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Hetvi Bagdai",
    role: "Software Engineer Intern",
    company:"Google",
    logo: <FcGoogle size={20} />,
    image:
      "Hetvi Bagdai.jpeg?q=80&w=687&auto=format&fit=crop",
  },
   

];
const ITEMS_PER_PAGE = 8;

export default function SpeakersSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(speakers.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSpeakers = speakers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-gradient-to-r from-white to-purple-100 py-16 px-6">
      
      {/* Heading */}
      <div className="flex items-center gap-2 mb-10 justify-center">
        {/* <SpeakerIcon size={24} className="text-indigo-600" /> */}
        <h2 className="text-4xl ">Speakers</h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {currentSpeakers.map((member, index) => (
          <div key={index}>
            
            {/* Image */}
            <div className="relative w-full h-[260px] mb-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover  transition-all duration-300 "
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>

            {/* Role | Logo Company Inline */}
            <div className="flex items-center gap-2 mt-1 text-sm font-medium ">
              <p>{member.role}</p>
              
              {/* Optional delimiter if company exists */}
              {member.company && <span className="text-gray-400">|</span>}
              
              <div className="flex items-center gap-1">
                {member.logo && (
                  <div className="">
                    {member.logo}
                  </div>
                )}
                {member.company && (
                  <p>{member.company}</p>
                )}
              </div>
            </div>

            {/* Description */}
            {/* <p className="text-sm font-medium text-gray-600 mt-1">
              {member.description}
            </p> */}

          
          </div>
        ))}

      </div>

      {/* Pagination Controls */}
      {/* <div className="flex justify-center items-center gap-4 mt-10">
        
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>

      </div> */}
    </section>
  );
}