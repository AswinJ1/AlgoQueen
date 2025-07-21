import React, { useState, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { AlertTriangle, Mail } from "lucide-react";

const ITEMS_PER_PAGE = 10;

export default function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [schoolData, setSchoolData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [schoolResponse, collegeResponse] = await Promise.all([
          fetch('/data/School_ranklist.json'),
          fetch('/data/College_ranklist.json')
        ]);

        if (!schoolResponse.ok || !collegeResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const schoolJson = await schoolResponse.json();
        const collegeJson = await collegeResponse.json();

        // Extract the arrays from the JSON objects
        setSchoolData(schoolJson.School_ranklist || []);
        setCollegeData(collegeJson.College_ranklist || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load leaderboard data');
        setSchoolData([]);
        setCollegeData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Combine and normalize data from both JSON files
  const getAllData = () => {
    const normalizedSchoolData = schoolData.map(user => ({
      rank: user.rank,
      countryCode: user.countryCode,
      name: user.Name,
      userHandle: user.user_handle,
      attempted: user.solved_count,
      totalTime: user.total_time,
      penalty: user.penalty,
      points: user.score,
      category: 'school',
      class: user.Class,
      institute: user.institute
    }));
    
    const normalizedCollegeData = collegeData.map(user => ({
      rank: user.rank,
      countryCode: user.countryCode,
      name: user.Name,
      userHandle: user.User_handle,
      attempted: user.Solved_count,
      totalTime: user.Total_time,
      penalty: user.Penalty,
      points: user.Score,
      category: 'college',
      institute: user.institute
    }));
    
    // Combine and sort by points
    const allData = [...normalizedSchoolData, ...normalizedCollegeData];
    return allData.sort((a, b) => b.points - a.points).map((user, index) => ({
      ...user,
      globalRank: index + 1
    }));
  };
  
  // Filter data based on selected category and re-rank
  const getFilteredAndRankedData = () => {
    const allData = getAllData();
    
    if (selectedFilter === 'all') {
      return allData; // Keep global ranks for "All"
    }
    
    // Filter by category and re-rank based on points
    const categoryData = allData.filter(user => user.category === selectedFilter);
    
    // Sort by points (descending) and assign new ranks
    const sortedData = categoryData.sort((a, b) => b.points - a.points);
    
    return sortedData.map((user, index) => ({
      ...user,
      categoryRank: index + 1
    }));
  };
  
  const filteredData = getFilteredAndRankedData();
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
    const allData = getAllData();
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
        {/* Header */}
        <div className="bg-white text-white px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold text-black text-center md:text-left">Algo Queen 2025 Ranklist</h2>
              <p className="text-gray-700 text-xs md:text-sm mt-1 text-center md:text-left">
                Showing {paginatedData.length} of {filteredData.length} participants
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                alt="Algo Queen Logo"
                src="/5.png"
                className="h-[60px] md:h-[80px] w-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="px-4 md:px-6 py-4 border-b bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center ${
                selectedFilter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All ({filterCounts.all})
            </button>
            <button
              onClick={() => handleFilterChange('college')}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center ${
                selectedFilter === 'college'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              College ({filterCounts.college})
            </button>
            <button
              onClick={() => handleFilterChange('school')}
              className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm text-center ${
                selectedFilter === 'school'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              School ({filterCounts.school})
            </button>
          </div>
        </div>
        
        {/* Desktop Table Header - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-8 bg-gray-50 text-gray-700 px-6 py-3 gap-4 text-sm">
          <div className="text-center">Rank</div>
          <div className="text-center">Country</div>
          <div className="text-center col-span-2">Name</div>
          <div className="text-center">Category</div>
          <div className="text-center">Solved</div>
          <div className="text-center">Time</div>
          <div className="text-center">Score</div>
        </div>
        
        {/* Data Rows */}
        {paginatedData.map((user, index) => (
          <div key={`${user.category}-${user.rank}`}>
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-8 items-center px-6 py-4 border-t hover:bg-gray-50 gap-4">
              <div className="text-center font-semibold text-gray-800">
                {selectedFilter === 'all' ? user.globalRank : user.categoryRank}.
              </div>
              
              {/* Country flag */}
              <div className="flex items-center justify-center gap-2">
                <span className={`fi fi-${user.countryCode} w-5 h-3 rounded-sm`}></span>
              </div>
              
              <div className="col-span-2 text-center">
                <div className='text-left'>
                <div className="font-medium ">{user.name}</div>
                <div className="text-xs text-gray-500">@{user.userHandle}</div>
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
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {user.category}
                </span>
              </div>
              
              <div className="text-center">{user.attempted}</div>
              <div className="text-center text-xs">{user.totalTime}</div>
              <div className="text-center font-semibold text-blue-600">{user.points}</div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden border-t hover:bg-gray-50 px-4 py-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold text-gray-800">
                    {selectedFilter === 'all' ? user.globalRank : user.categoryRank}.
                  </div>
                  <span className={`fi fi-${user.countryCode} w-5 h-3 rounded-sm flex-shrink-0`}></span>
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 truncate">{user.name}</div>
                    <div className="text-xs text-gray-500">@{user.userHandle}</div>
                  </div>
                </div>
                <div className="text-right font-semibold text-blue-600 text-lg">
                  {user.points}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.category === 'college' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
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
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <span className="text-gray-600">Solved:</span>
                  <span className="font-medium">{user.attempted}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium text-xs">{user.totalTime}</span>
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
                      currentPage === pageNum ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
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
      <Mail className="w-4 h-4 text-blue-600" />
      <a
        href="mailto:algoqueen@cb.amrita.edu"
        className="text-blue-700 hover:text-blue-900 font-medium underline underline-offset-2"
      >
        algoqueen@cb.amrita.edu
      </a>
    </div>
  </div>
</div>
      
    </div>
  );
}