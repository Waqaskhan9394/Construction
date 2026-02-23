import React from 'react';

const ElementsLists = () => {
  return (
    <div className="w-full bg-white py-16 font-sans text-[#707070]">
      <div className="max-w-[1140px] mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* 1. Image Gallery / Headers Column */}
          <div>
            <h3 className="text-[#002347] text-[18px] font-bold mb-8">Image Gallery</h3>
            <div className="space-y-2">
              <h1 className="text-[#002347] text-[36px] font-bold opacity-60">This is header 01</h1>
              <h2 className="text-[#002347] text-[30px] font-bold opacity-60">This is header 02</h2>
              <h3 className="text-[#002347] text-[24px] font-bold opacity-60">This is header 03</h3>
              <h4 className="text-[#002347] text-[18px] font-bold opacity-60">This is header 04</h4>
              <h5 className="text-[#002347] text-[16px] font-bold opacity-60">This is header 01</h5>
              <h6 className="text-[#002347] text-[14px] font-bold opacity-60">This is header 01</h6>
            </div>
          </div>

          {/* 2. Unordered List Column */}
          <div>
            <h3 className="text-[#002347] text-[18px] font-bold mb-8">Unordered List</h3>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span>
                Fta Keys
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span>
                For Women Only Your Computer Usage
              </li>
              <li className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span>
                  Facts Why Inkjet Printing Is Very Appealing
                </div>
                {/* Nested List */}
                <ul className="ml-8 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 w-2.5 h-2.5 border-2 border-[#415094] rounded-full flex-shrink-0"></span>
                    Addiction When Gambling Becomes
                  </li>
                  <li className="ml-6 flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 border-2 border-[#415094] rounded-full flex-shrink-0"></span>
                    Protective Preventative Maintenance
                  </li>
                </ul>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-3 h-3 border-2 border-[#415094] rounded-full flex-shrink-0"></span>
                Dealing With Technical Support 10 Useful Tips
              </li>
            </ul>
          </div>

          {/* 3. Ordered List Column */}
          <div>
            <h3 className="text-[#002347] text-[18px] font-bold mb-8">Ordered List</h3>
            <div className="space-y-4 text-[14px]">
              <div className="flex gap-2">
                <span className="text-[#415094] font-bold">01.</span> Fta Keys
              </div>
              <div className="flex gap-2">
                <span className="text-[#415094] font-bold">02.</span> For Women Only Your Computer Usage
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <span className="text-[#415094] font-bold">03.</span> Facts Why Inkjet Printing Is Very Appealing
                </div>
                {/* Nested Ordered */}
                <div className="ml-8 space-y-2">
                   <div className="flex gap-2">
                      <span className="text-[#415094] font-bold">a.</span> Addiction When Gambling Becomes
                   </div>
                   <div className="ml-8 flex gap-2">
                      <span className="text-[#415094] font-bold">i.</span> Protective Preventative Maintenance
                   </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-[#415094] font-bold">04.</span> Dealing With Technical Support 10 Useful Tips
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ElementsLists;