import React from 'react';
import { Link } from 'react-router-dom';
import AboutBg from "../../assets/image/about.webp"; 

const ServicesHero = ({ title, breadcrumb }) => {
  return (
    <section 
      className="relative w-full h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      {/* 1. Heavy Dark Overlay - Screenshot jaisa exact dark tint */}
      <div className="absolute inset-0 bg-[#0f0f23]/80 z-0"></div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-20 pt-20"> 
        <div className="flex flex-col items-start">
          
          {/* MAIN HEADING: Blur/Dark shade effect using opacity */}
          <h1 className="text-7xl md:text-[110px] font-black text-white/30 uppercase tracking-tighter leading-none mb-10 select-none">
            {title}
          </h1>

          {/* Breadcrumbs Section */}
          <div className="flex items-center gap-6">
             {/* Left side Orange Line */}
             <div className="w-16 h-[2px] bg-[#f15a24]"></div>
             
             <div className="flex items-center text-[14px] md:text-[16px] font-bold tracking-[0.3em] uppercase">
               {/* Home Link (Orange Shade) */}
               <Link to="/" className="text-[#f15a24] hover:text-white transition-all duration-300">
                 Home
               </Link>
               
               {/* Separator Slash (White Blur) */}
               <span className="text-white/20 mx-4 font-light">/</span>
               
               {/* Current Page Text (Pure White) */}
               <span className="text-[#f15a24]">
                 {breadcrumb}
               </span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;