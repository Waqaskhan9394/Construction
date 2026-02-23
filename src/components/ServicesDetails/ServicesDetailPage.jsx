import React from 'react';
// Aapki image ka path (Blueprint/Project image)
import ServiceDetailImg from '../../assets/image/services_details.webp'; 

const  ServicesDetailsPage = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* --- Main Container --- */}
      <div className="max-w-[1140px] mx-auto px-4 md:px-6 py-12 md:py-20">
        
        {/* 1. Hero Image */}
        <div className="w-full mb-12">
          <img 
            src={ServiceDetailImg} 
            alt="Service Planning" 
            className="w-full h-auto object-cover shadow-sm"
          />
        </div>

        {/* 2. Top Content Section */}
        <div className="space-y-6 mb-16">
          <p className="text-[#707070] text-[15px] leading-[28px]">
            Mollit anim laborum, Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. 
            Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore 
            mofllit anim. Mollit anim laborum, Dvcuis aute iruxvfg.
          </p>
          <p className="text-[#707070] text-[15px] leading-[28px]">
            Mollit anim laborum, Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. 
            Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore 
            mofllit anim. Mollit anim laborum, Dvcuis aute iruxvfg.
          </p>
        </div>

        {/* 3. "How can we help?" Section */}
        <div className="mb-20">
          <h2 className="text-[#002347] text-[30px] md:text-[36px] font-bold mb-8">
            How can we help?
          </h2>
          <div className="space-y-6">
            <p className="text-[#707070] text-[15px] leading-[28px]">
              Mollit anim laborum, Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. 
              Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore 
              mofllit anim. Mollit anim laborum, Dvcuis aute iruxvfg.
            </p>
            <p className="text-[#707070] text-[15px] leading-[28px]">
              Mollit anim laborum, Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. 
              Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore 
              mofllit anim. Mollit anim laborum, Dvcuis aute iruxvfg.
            </p>
          </div>
        </div>

      </div>

      {/* 4. Bottom Decorative Footer (Diagonal Pattern) */}
      <div className="w-full h-[80px] bg-[#1a1a1a] relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '10px 10px'
          }}
        ></div>
      </div>

      {/* 5. Floating Scroll Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-[#ff5a24] text-white p-4 rounded-sm shadow-lg hover:bg-[#e04a1b] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default ServicesDetailsPage;