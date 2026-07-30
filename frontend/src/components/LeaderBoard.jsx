import React, { useState, useEffect, useMemo } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { AlertTriangle, Mail } from "lucide-react";
import { getCountryIso2 } from '../utils/countryCodes';

const ITEMS_PER_PAGE = 10;

const parsePenaltyTime = (value) => {
  if (!value) return Number.POSITIVE_INFINITY;

  const parts = String(value).split(':').map(Number);
  if (parts.some(Number.isNaN)) return Number.POSITIVE_INFINITY;

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return (hours * 60 + minutes) * 60 + seconds;
  }

  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return minutes * 60 + seconds;
  }

  return Number.POSITIVE_INFINITY;
};

export default function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('college');
  const [schoolData, setSchoolData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- NEW API IMPLEMENTATION ---
    // Replace 'API_URL_HERE' with your actual endpoint. 
    // This assumes the API returns data in the same format as the JSON files.
    const fetchApiData = async () => {
      try {
        setLoading(true);
        // Example: If using two separate endpoints
        const [schoolResponse, collegeResponse] = await Promise.all([
          fetch('YOUR_SCHOOL_API_ENDPOINT_HERE'), 
          fetch('YOUR_COLLEGE_API_ENDPOINT_HERE')
        ]);

        if (!schoolResponse.ok || !collegeResponse.ok) {
          throw new Error('Failed to fetch data from API');
        }

        const schoolJson = await schoolResponse.json();
        const collegeJson = await collegeResponse.json();

        // Adjust based on actual API response structure (e.g., if it returns the array directly)
        setSchoolData(schoolJson.School_ranklist || schoolJson || []);
        setCollegeData(collegeJson.College_ranklist || collegeJson || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching API data:', error);
        setError('Failed to load leaderboard data');
        setSchoolData([]);
        setCollegeData([]);
      } finally {
        setLoading(false);
      }
    };

    // To use the API, uncomment the line below and comment out the JSON fetch block:
    // fetchApiData();

    // --- FALLBACK ALTERNATIVE (JSON FILES) ---
    // Currently active. Comment this block out when switching to the API above.
    const fetchJsonData = async () => {
      try {
        setLoading(true);
        const [schoolResponse, collegeResponse] = await Promise.all([
          fetch('data/AlgoSchool_ranklist.json'),
          fetch('data/AlgoCollege_ranklist.json')
        ]);

        if (!schoolResponse.ok || !collegeResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const schoolJson = await schoolResponse.json();
        const collegeJson = await collegeResponse.json();

        // Extract the arrays from the JSON objects
        setSchoolData(schoolJson.AlgoSchool_ranklist || schoolJson.School_ranklist || []);
        setCollegeData(collegeJson.AlgoCollege_ranklist || collegeJson.College_ranklist || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
        setError('Failed to load leaderboard data');
        setSchoolData([]);
        setCollegeData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJsonData();
  }, []);
  
  // Combine and normalize data from both JSON files (memoized)
  const allData = useMemo(() => {
    const normalizedSchoolData = schoolData.map(user => ({
      rank: user.rank,
      countryCode: getCountryIso2(user.countryCode),
      name: user.Name,
      penaltyTime: user.penalty_time || user.Penalty_time || '',
      penalty: Number(user.penalty ?? user.Penalty ?? 0),
      points: Number(user.score) || Number(user.Score) || 0,
      category: 'school',
      class: user.Class,
      institute: user.institute
    }));

    const normalizedCollegeData = collegeData.map(user => ({
      rank: user.rank,
      countryCode: getCountryIso2(user.countryCode),
      name: user.Name,
      penaltyTime: user.penalty_time || user.Penalty_time || '',
      penalty: Number(user.penalty ?? user.Penalty ?? 0),
      points: Number(user.Score) || Number(user.score) || 0,
      category: 'college',
      institute: user.institute
    }));

    const combined = [...normalizedSchoolData, ...normalizedCollegeData];
    return combined
      .sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (a.penalty !== b.penalty) return a.penalty - b.penalty;
        const timeDiff = parsePenaltyTime(a.penaltyTime) - parsePenaltyTime(b.penaltyTime);
        if (timeDiff !== 0) return timeDiff;
        return Number(a.rank) - Number(b.rank);
      })
      .map((user, index) => ({ ...user, globalRank: index + 1 }));
  }, [schoolData, collegeData]);

  // Filter data based on selected category and re-rank (memoized)
  const filteredData = useMemo(() => {
    if (selectedFilter === 'all') return allData;
    const categoryData = allData.filter(user => user.category === selectedFilter);
    const sortedData = [...categoryData].sort((a, b) => b.points - a.points);
    return sortedData.map((user, index) => ({ ...user, categoryRank: index + 1 }));
  }, [allData, selectedFilter]);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };
  
  const getFilterCounts = () => {
    const collegeCount = allData.filter(user => user.category === 'college').length;
    const schoolCount = allData.filter(user => user.category === 'school').length;
    return { college: collegeCount, school: schoolCount, all: allData.length };
  };

  // Loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 px-2 md:px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden text-sm font-medium">
          <div className="text-center py-8">
            <div className="text-gray-600 text-center">Loading leaderboard data...</div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto mt-4 md:mt-8 px-2 md:px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden text-sm font-medium">
          <div className="text-center py-8">
            <div className="text-red-600 text-center">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  const filterCounts = getFilterCounts();
  
  return (
    <div className="max-w-7xl mx-auto mt-4 md:mt-8 px-2 md:px-4">

      <div className="bg-white shadow-md rounded-lg overflow-hidden text-sm font-medium">
        {/* Important Notice */}
        <div className="bg-amber-50 border-b-2 border-amber-400 px-4 md:px-6 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-600 w-5 h-5 mt-0.5 shrink-0" />
            <div className="text-amber-900 leading-relaxed">
              <h3 className="font-bold text-sm md:text-base mb-1">Important Notice</h3>
              <p className="text-xs md:text-sm mb-2">
                The <span className="font-semibold">tentative results</span> for{' '}
                <span className="font-semibold">AlgoQueen 2026</span> have been published following
                the preliminary evaluation process. These results are provisional and are subject to
                verification.
              </p>
              <p className="text-xs md:text-sm mb-2">
                Participants who wish to raise any queries, seek clarification, or submit an appeal
                regarding the tentative results are requested to do so{' '}
                <span className="font-semibold">on or before 5th August 2026</span>.
              </p>
              <p className="text-xs md:text-sm mb-1">All queries and appeals should be sent to:</p>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a
                  href="mailto:algoqueen@cb.amrita.edu"
                  className="text-amber-800 hover:text-amber-950 font-medium underline underline-offset-2 text-xs md:text-sm"
                >
                  algoqueen@cb.amrita.edu
                </a>
              </div>
              <p className="text-xs md:text-sm italic">
                Appeals received after the above deadline may not be considered.
              </p>
            </div>
          </div>
        </div>

        <div className="h-4 md:h-6 bg-white" />

        {/* Header */}
        <div className="bg-white text-white px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold text-black text-center md:text-left">Algo Queen 2026 Ranklist</h2>
              <p className="text-gray-700 text-xs md:text-sm mt-1 text-center md:text-left">
                Showing {paginatedData.length} of {filteredData.length} participants
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                alt="Algo Queen Logo"
                src="/2026.png"
                className="h-[60px] md:h-[80px] w-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="px-4 md:px-6 py-4 border-b bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {/* <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center ${
                selectedFilter === 'all'
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All ({filterCounts.all})
            </button> */}
            <button
              onClick={() => handleFilterChange('college')}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center ${
                selectedFilter === 'college'
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              College ({filterCounts.college})
            </button>
            <button
              onClick={() => handleFilterChange('school')}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center ${
                selectedFilter === 'school'
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              School ({filterCounts.school})
            </button>
          </div>
        </div>
        
        {/* Desktop Table Header - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-9 bg-gray-50 text-gray-700 px-6 py-3 gap-4 text-sm">
          <div className="text-center">Rank</div>
          <div className="text-center">Country</div>
          <div className="text-center col-span-2">Name</div>
          <div className="text-center">Category</div>
          <div className="text-center">Penalty Time</div>
          <div className="text-center">Penalty</div>
          <div className="text-center">Score</div>
        </div>
        
        {/* Data Rows */}
        {paginatedData.map((user, index) => (
          <div key={`${user.category}-${user.rank}`}>
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-9 items-center px-6 py-4 border-t hover:bg-gray-50 gap-4">
              <div className="text-center font-semibold text-gray-800">
                {selectedFilter === 'all' ? user.globalRank : user.categoryRank}.
              </div>
              
              {/* Country flag */}
              <div className="flex items-center justify-center gap-2">
                {user.countryCode && (
                  <span className={`fi fi-${user.countryCode} w-5 h-3 rounded-sm`}></span>
                )}
              </div>
              
              <div className="col-span-2 text-center">
                <div className='text-left'>
                <div className="font-medium ">{user.name}</div>
                {user.class && (
                  <div className="text-xs text-gray-500">Class {user.class}</div>
                )}
                {user.institute && (
                  <div className="text-xs text-gray-500">{user.institute}</div>
                )}
                </div>
              </div>
              
              {/* Category badge */}
              <div className="text-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.category === 'college' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-pink-100 text-pink-800'
                }`}>
                  {user.category}
                </span>
              </div>
              
              <div className="text-center text-xs">{user.penaltyTime || '-'}</div>
              <div className="text-center text-xs font-medium text-gray-700">{user.penalty ?? '-'}</div>
              <div className="text-center font-semibold text-pink-600">{user.points}</div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden border-t hover:bg-gray-50 px-4 py-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold text-gray-800">
                    {selectedFilter === 'all' ? user.globalRank : user.categoryRank}.
                  </div>
                  {user.countryCode && (
                    <span className={`fi fi-${user.countryCode} w-5 h-3 rounded-sm flex-shrink-0`}></span>
                  )}
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 truncate">{user.name}</div>
                  </div>
                </div>
                <div className="text-right font-semibold text-pink-600 text-lg">
                  {user.points}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.category === 'college' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-pink-100 text-pink-800'
                }`}>
                  {user.category}
                </span>
                {user.class && (
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    Class {user.class}
                  </span>
                )}
              </div>
              
              {user.institute && (
                <div className="text-xs text-gray-600 mb-2 text-center">{user.institute}</div>
              )}
              
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="text-center">
                  <span className="text-gray-600 block text-xs">Penalty Time</span>
                  <span className="font-medium text-xs">{user.penaltyTime || '-'}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-600 block text-xs">Penalty</span>
                  <span className="font-medium text-xs">{user.penalty ?? '-'}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-600 block text-xs">Score</span>
                  <span className="font-medium text-xs text-pink-600">{user.points}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* No results message */}
        {paginatedData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No participants found for the selected filter.
          </div>
        )}
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 py-4 bg-gray-50 border-t px-4">
            {/* Mobile pagination - show fewer buttons */}
            <div className="flex items-center gap-1 sm:hidden">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 border rounded text-sm disabled:opacity-40 hover:bg-gray-100 text-center"
              >
                Prev
              </button>
              <span className="px-3 py-1 text-sm text-center">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 py-1 border rounded text-sm disabled:opacity-40 hover:bg-gray-100 text-center"
              >
                Next
              </button>
            </div>

            {/* Desktop pagination - show all buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm disabled:opacity-40 hover:bg-gray-100 text-center"
              >
                Prev
              </button>
              {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => changePage(pageNum)}
                    className={`px-3 py-1 border rounded text-sm text-center ${
                      currentPage === pageNum ? 'bg-pink-500 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded text-sm disabled:opacity-40 hover:bg-gray-100 text-center"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Results Disclaimer */}
      {/*
      <div className="mt-8 bg-yellow-100 border border-yellow-300 rounded-xl p-6 shadow-sm flex items-start gap-4">
        <AlertTriangle className="text-yellow-600 w-6 h-6 mt-1 shrink-0" />

        <div className="text-sm text-yellow-900 leading-relaxed">
          <h3 className="font-semibold text-base mb-2">Important Notice</h3>

          <p className="mb-3">
            The <span className="font-semibold">Algoqueen 2025</span> results have been published after a thorough evaluation process. The organizing committee reserves the right to review, update, or withdraw the published ranklist and announce a revised one, should any form of malpractice, unfair means, or technical discrepancies be identified at any stage.
          </p>

          <p className="mb-2">
            For any queries or clarifications regarding the results, please contact us at:
          </p>

          <div className="flex items-center gap-2 mt-2">
            <Mail className="w-4 h-4 text-pink-600" />
            <a
              href="mailto:algoqueen@cb.amrita.edu"
              className="text-pink-700 hover:text-pink-900 font-medium underline underline-offset-2"
            >
              algoqueen@cb.amrita.edu
            </a>
          </div>
        </div>
      </div>
      */}
      
    </div>
  );
}