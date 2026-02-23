import React from 'react';
// In images ko apne assets folder ke mutabiq link karein
import ChildImg from '../../assets/image/d.webp'; 

const Elements = () => {
  return (
    <div className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        
        {/* --- 1. Left Aligned Section --- */}
        <div className="mb-20">
          <h2 className="text-[#002347] text-[24px] font-bold mb-8">Left Aligned</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-[30%] shrink-0">
              <img src={ChildImg} alt="Left Aligned" className="w-full h-auto shadow-sm" />
            </div>
            <div className="flex-1 text-[#707070] text-[15px] leading-[26px]">
              Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government.
            </div>
          </div>
        </div>

        {/* --- 2. Right Aligned Section --- */}
        <div className="mb-20 border-t border-gray-100 pt-16">
          <h2 className="text-[#002347] text-[24px] font-bold mb-8 text-left">Right Aligned</h2>
          <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
            <div className="flex-1 text-[#707070] text-[15px] leading-[26px]">
              Over time, even the most sophisticated, memory packed computer can begin to run slow if we don't do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can make our computer sluggish.
            </div>
            <div className="w-full md:w-[30%] shrink-0">
              <img src={ChildImg} alt="Right Aligned" className="w-full h-auto shadow-sm" />
            </div>
          </div>
        </div>

        {/* --- 3. Definition Section (3-Column Grid) --- */}
        <div className="mb-20 border-t border-gray-100 pt-16">
          <h2 className="text-[#002347] text-[24px] font-bold mb-10">Definition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((num) => (
              <div key={num}>
                <h4 className="text-[#002347] text-[18px] font-bold mb-4">Definition 0{num}</h4>
                <p className="text-[#707070] text-[15px] leading-[26px]">
                  Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. Block Quotes Section --- */}
        <div className="mb-10 border-t border-gray-100 pt-16">
          <h2 className="text-[#002347] text-[24px] font-bold mb-8">Block Quotes</h2>
          <div className="bg-[#f9f9ff] border-l-[3px] border-[#002347] p-8 md:p-12 italic relative">
            <p className="text-[#707070] text-[15px] leading-[28px]">
              “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Elements;