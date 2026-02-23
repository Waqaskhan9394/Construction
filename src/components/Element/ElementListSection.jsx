import React from 'react';

const ElementListstwo = () => {
  return (
    <div className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1140px] mx-auto px-4">
        
        {/* Main Grid: Responsive layout for Desktop and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* --- Column 1: Header Variations --- */}
          <div className="space-y-4">
            <h3 className="text-[#002347] text-[18px] font-bold mb-8">Header Variations</h3>
            <div className="space-y-2">
              <h1 className="text-[#002347] text-[36px] font-bold opacity-60">This is header 01</h1>
              <h2 className="text-[#002347] text-[30px] font-bold opacity-60">This is header 02</h2>
              <h3 className="text-[#002347] text-[24px] font-bold opacity-60">This is header 03</h3>
              <h4 className="text-[#002347] text-[18px] font-bold opacity-60">This is header 04</h4>
              <h5 className="text-[#002347] text-[16px] font-bold opacity-60">This is header 05</h5>
              <h6 className="text-[#002347] text-[14px] font-bold opacity-60">This is header 06</h6>
            </div>
          </div>

          {/* --- Column 2: Unordered List (Circle Bullets) --- */}
          <div>
            <h3 className="text-[#002347] text-[18px] font-bold mb-8">Unordered List</h3>
            <ul className="space-y-4 text-[#707070] text-[14px]">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span> Fta Keys
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span> For Women Only Your Computer Usage
              </li>
              <li className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span> Facts Why Inkjet Printing Is Very Appealing
                </div>
                {/* Nested Level 1 */}
                <ul className="ml-8 space-y-4 border-none">
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 border-2 border-[#415094] rounded-full flex-shrink-0"></span> Addiction When Gambling Becomes
                  </li>
                  {/* Nested Level 2 */}
                  <li className="ml-8 flex items-center gap-3">
                    <span className="w-2 h-2 border-2 border-[#415094] rounded-full flex-shrink-0"></span> Protective Preventative Maintenance
                  </li>
                </ul>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span> Dealing With Technical Support 10 Useful Tips
              </li>
            </ul>
          </div>

          {/* --- Column 3: Ordered List (Alpha/Roman Hierarchy) --- */}
          <div>
            <h3 className="text-[#002347] text-[18px] font-bold mb-8">Ordered List</h3>
            <div className="space-y-4 text-[#707070] text-[14px]">
              <div className="flex gap-2">
                <span className="text-[#415094] font-semibold min-w-[25px]">01.</span> Fta Keys
              </div>
              <div className="flex gap-2">
                <span className="text-[#415094] font-semibold min-w-[25px]">02.</span> For Women Only Your Computer Usage
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-[#415094] font-semibold min-w-[25px]">03.</span> Facts Why Inkjet Printing Is Very Appealing
                </div>
                {/* Level 2: Alpha (a.) */}
                <div className="ml-8 space-y-4">
                  <div className="flex gap-2">
                    <span className="text-[#415094] font-semibold min-w-[20px]">a.</span> Addiction When Gambling Becomes
                  </div>
                  {/* Level 3: Roman (i.) */}
                  <div className="ml-8 flex gap-2">
                    <span className="text-[#415094] font-semibold min-w-[15px]">i.</span> Protective Preventative Maintenance
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-[#415094] font-semibold min-w-[25px]">04.</span> Dealing With Technical Support 10 Useful Tips
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ElementListstwo;