import React from 'react';
import BlogDetailImg from '../../assets/image/single_blog_1.webp'
import { HiOutlineUser, HiOutlineChatAlt2 } from 'react-icons/hi';

const BlogContent = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-white py-10 px-4 md:px-0">
      {/* 1. Top Blog Card Section - 'shadow-sm' removed */}
      <div className="w-full mb-10 border border-gray-100 overflow-hidden">
        <div className="relative">
          <img 
            src={BlogDetailImg}
            alt="Construction work"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          {/* Date Overlay - 'shadow-lg' removed */}
          <div className="absolute bottom-[-20px] left-6 md:left-10 bg-[#f15a24] text-white px-6 py-4 rounded-sm text-center">
            <h3 className="text-2xl font-bold">15</h3>
            <span className="text-sm">Jan</span>
          </div>
        </div>

        <div className="p-6 md:p-12 pt-12 md:pt-16">
          {/* Main Title */}
          <h2 className="text-[#0f0f23] text-xl md:text-[28px] font-bold mb-4 leading-tight">
            Second divided from form fish beast made every of seas all gathered us saying he our
          </h2>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-8 text-[#8a8a8a] text-sm font-light">
            <div className="flex items-center gap-2 hover:text-[#f15a24] cursor-pointer">
              <HiOutlineUser className="text-lg" />
              <span>Travel, Lifestyle</span>
            </div>
            <div className="flex items-center gap-2 border-l border-gray-200 pl-6 hover:text-[#f15a24] cursor-pointer">
              <HiOutlineChatAlt2 className="text-lg" />
              <span>03 Comments</span>
            </div>
          </div>

          {/* 2. Detailed Text Body */}
          <div className="space-y-8">
            <p className="text-[#707070] text-[15px] md:text-[16px] leading-[28px] md:leading-[30px]">
              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to 
              spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. 
              However, who has the willpower
            </p>

            <p className="text-[#707070] text-[15px] md:text-[16px] leading-[28px] md:leading-[30px]">
              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to 
              spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. 
              However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to 
              actually
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;