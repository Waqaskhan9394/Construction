import React from 'react';

const TagClouds = () => {
  // Tags ka data
  const tags = [
    "project", "love", "technology", "travel", 
    "restaurant", "life style", "design", "illustration"
  ];

  return (
    /* Widget spacing ke liye mb-16 lg:mb-24 */
    <div className="bg-[#fbf9ff] p-6 md:p-8 rounded-sm shadow-sm mb-16 lg:mb-24">
      
      {/* 1. Heading with Bottom Line */}
      <h3 className="text-xl font-bold text-[#0f0f23] mb-8 border-b border-gray-100 pb-4 relative">
        Tag Clouds
        <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#f15a24]"></span>
      </h3>

      {/* 2. Tags Container (Flex Wrap for Responsiveness) */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <a
            key={index}
            href={`#${tag}`}
            className="bg-white border border-[#eeeeee] px-4 py-1.5 text-[13px] text-[#707070] capitalize transition-all duration-300 hover:bg-[#f15a24] hover:text-white hover:border-[#f15a24]"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagClouds;