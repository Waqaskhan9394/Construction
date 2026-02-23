import React from 'react';
import { HiOutlineUser, HiOutlineChatAlt2, HiHeart, HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import BlogImg from '../../assets/image/single_blog_1.webp';
// In images ko aap apne assets folder ke mutabiq change kar sakte hain
import PrevPostImg from '../../assets/image/preview.webp'; 
import NextPostImg from '../../assets/image/next.webp';

const BlogDetailtwo = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-[800px] mx-auto px-4 md:px-0">
        
        

       

        {/* 3. Description & Blockquote */}
        <div className="text-[#707070] text-[15px] md:text-[16px] leading-[30px] space-y-8 mb-10">
          
          
          <div className="bg-[#fbf9ff] border-l-4 border-[#888888] p-6 md:p-10">
            <p className="italic">“MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp...”</p>
            <p className="italic">“MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp...”</p>
          </div>

          <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp...</p>
          <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp...</p>
        </div>

        {/* 4. Likes & Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-gray-100 gap-4">
          <div className="flex items-center gap-2 text-[#8a8a8a] text-sm">
            <HiHeart className="text-lg cursor-pointer hover:text-red-500 transition-colors" />
            <span>Lily and 4 people like this</span>
          </div>
          <div className="flex items-center gap-5 text-[#8a8a8a]">
            <FaFacebookF className="hover:text-[#f15a24] cursor-pointer" />
            <FaTwitter className="hover:text-[#f15a24] cursor-pointer" />
            <FaDribbble className="hover:text-[#f15a24] cursor-pointer" />
            <FaBehance className="hover:text-[#f15a24] cursor-pointer" />
          </div>
        </div>

        {/* 5. NEW: Post Navigation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100 pt-10 mt-6">
          
          {/* Previous Post */}
          <div className="flex items-center gap-4 group cursor-pointer pb-8 md:pb-0 md:border-r md:border-gray-100">
            <div className="relative overflow-hidden w-16 h-16 shrink-0">
              <img src={PrevPostImg} alt="Prev" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <HiArrowNarrowLeft className="text-white text-xl" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#8a8a8a] text-sm mb-1">Prev Post</span>
              <h4 className="text-[#0f0f23] font-medium text-[16px] group-hover:text-[#f15a24] transition-colors line-clamp-1">Space The Final Frontier</h4>
            </div>
          </div>

          {/* Next Post */}
          <div className="flex items-center justify-end gap-4 group cursor-pointer pt-8 md:pt-0">
            <div className="flex flex-col text-right">
              <span className="text-[#8a8a8a] text-sm mb-1">Next Post</span>
              <h4 className="text-[#0f0f23] font-medium text-[16px] group-hover:text-[#f15a24] transition-colors line-clamp-1">Telescopes 101</h4>
            </div>
            <div className="relative overflow-hidden w-16 h-16 shrink-0">
              <img src={NextPostImg} alt="Next" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <HiArrowNarrowRight className="text-white text-xl" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogDetailtwo;