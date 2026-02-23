import React from 'react';
import ProjectdetailImg from '../../assets/image/project_details.webp';

const ProjectDetailsBG = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-20 overflow-x-hidden relative">
      
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Hero Image Section --- */}
        <div className="w-full mb-10 md:mb-16">
          <img 
            src={ProjectdetailImg} 
            alt="Modern Construction Project"
            className="w-full h-auto object-cover shadow-sm"
          />
        </div>

        {/* --- 2. Main Text Section --- */}
        <div className="w-full space-y-12">
          
          {/* Section: Our main goal */}
          <div>
            <h3 className="text-[#002347] text-[28px] md:text-[36px] font-bold mb-6">
              Our main goal
            </h3>
            <p className="text-[#707070] text-[15px] leading-[28px] md:leading-[30px]">
              Mollit anim laborum, Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore 
              eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg 
              dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. 
              Mollit anim laborum, Dvcuis aute iruxvfg.
            </p>
          </div>

          {/* Section: Take a look to our challenges */}
          <div className="pb-20">
            <h3 className="text-[#002347] text-[28px] md:text-[36px] font-bold mb-6">
              Take a look to our challenges
            </h3>
            <p className="text-[#707070] text-[15px] leading-[28px] md:leading-[30px]">
              Mollit anim laborum, Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore 
              eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg 
              dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. 
              Mollit anim laborum, Dvcuis aute iruxvfg.
            </p>
          </div>
        </div>
      </div>

      {/* --- 3. Decorative Bottom Footer (Diagonal Lines) --- */}
      <div className="w-full h-20 bg-[#1a1a1a] relative overflow-hidden">
        {/* CSS Pattern for diagonal lines */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, #555 0, #555 1px, transparent 0, transparent 50%)', 
               backgroundSize: '10px 10px' 
             }}>
        </div>
      </div>

      {/* --- 4. Floating Scroll-to-Top Button (Orange) --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#ff5a24] text-white p-4 rounded-sm shadow-lg hover:bg-[#e04a1b] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default ProjectDetailsBG;