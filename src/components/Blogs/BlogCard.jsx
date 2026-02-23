import React from 'react';
import { FaUser, FaComments } from 'react-icons/fa'; 

const BlogCard = ({ image, date, month, title, comments, description }) => {
  return (
    <div className="group w-full bg-white shadow-sm hover:shadow-2xl transition-all duration-500 mb-8 md:mb-12">
      
      {/* 1. Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Responsive Date Box */}
        <div className="absolute bottom-0 left-4 sm:left-8 bg-[#f15a24] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-t-md text-center shadow-lg transform transition-transform group-hover:-translate-y-1">
          <span className="block text-xl sm:text-2xl font-black leading-none">{date}</span>
          <span className="block text-[10px] sm:text-xs font-bold uppercase">{month}</span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-5 sm:p-8 md:p-10 pt-10 sm:pt-12">
        
        {/* Title: Mobile par size chota rakha hai */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0f0f23] hover:text-[#f15a24] transition-colors duration-300 cursor-pointer mb-4 leading-tight uppercase">
          {title}
        </h2>

        {/* Description: Leading (line-height) responsive hai */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 line-clamp-3 md:line-clamp-none">
          {description || "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."}
        </p>

        {/* Meta Info Section */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-gray-100 text-gray-400 text-[12px] sm:text-sm font-medium">
          <div className="flex items-center gap-2 hover:text-[#f15a24] cursor-pointer transition-colors">
            <FaUser className="text-[#f15a24]" />
            <span className="truncate">Travel, Lifestyle</span>
          </div>
          
          <span className="hidden sm:block text-gray-200">|</span>
          
          <div className="flex items-center gap-2 hover:text-[#f15a24] cursor-pointer transition-colors">
            <FaComments className="text-[#f15a24]" />
            <span>{comments || "03"} Comments</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;