import React from 'react';

const SearchBar = () => {
  return (
    // Sidebar ke sections ke darmiyan gap badhane ke liye 'mb-12' add kiya hai
    <div className="mb-10 lg:mb-14"> 
      {/* 1. Search Box Container */}
      <div className="bg-[#fbf9ff] p-6 md:p-10 rounded-sm shadow-sm">
        <div className="relative flex">
          <input 
            type="text" 
            placeholder="Search Keyword" 
            className="w-full bg-white border border-gray-200 py-3 px-4 text-sm focus:outline-none focus:border-[#f15a24] transition-all"
          />
          {/* Search Icon Button */}
          <button className="bg-[#f15a24] text-white px-5 flex items-center justify-center hover:bg-[#0f0f23] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Big Search Button: Exact like image */}
        <button className="w-full mt-4 border border-[#f15a24] text-[#f15a24] py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-[#f15a24] hover:text-white transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;