import React from 'react';
import TeamImag1 from '../../assets/image/team1.webp'
import TeamImag2 from '../../assets/image/team2.webp'
import TeamImag3 from '../../assets/image/team3.webp'

const teamMembers = [
  { id: 1, name: "Ethan Welch", role: "UX Designer", image: TeamImag1 },
  { id: 2, name: "Ethan Welch", role: "UX Designer", image: TeamImag2 },
  { id: 3, name: "Ethan Welch", role: "UX Designer", image: TeamImag3 },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="relative mb-16 md:mb-24 text-left">
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-black text-gray-50 absolute -top-6 md:-top-10 left-0 z-0 uppercase tracking-tighter select-none leading-none">
            EXPERTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a202c] relative z-10 uppercase tracking-tight">
            OUR TEAM
          </h3>
        </div>

        {/* Team Cards Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-10 justify-items-center md:justify-items-start">
          {teamMembers.map((member) => (
            <div key={member.id} className="group w-full max-w-[300px] sm:max-w-full lg:max-w-[320px]">
              
              {/* Image Container - Fixed Aspect Ratio & Professional Size */}
              <div className="overflow-hidden bg-gray-100 aspect-[4/5] mb-5 shadow-sm transition-all duration-300 group-hover:shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Bottom Text Design */}
              <div className="flex flex-col px-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-[2px] bg-[#ff5e13]"></div>
                  <span className="text-[#ff5e13] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                    {member.role}
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-black text-[#1a1a1a] leading-tight ">
                  {member.name}
                </h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;