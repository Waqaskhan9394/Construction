import React from 'react';
// Images import
import AuthorImg from '../../assets/image/author.webp';
import Commenter1 from '../../assets/image/comment_1.webp';
import Commenter2 from '../../assets/image/comment_2.webp';
import Commenter3 from '../../assets/image/comment_3.webp';

const BlogFooter = () => {
  // Images ko array mein rakha hai taaki loop mein use ho sakein
  const commenterImages = [Commenter1, Commenter2, Commenter3];

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 md:px-0 bg-white">
      
      {/* 1. Author Box Section */}
      <div className="bg-[#fbf9ff] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 mb-16">
        <div className="w-24 h-24 shrink-0">
          <img 
            src={AuthorImg} 
            alt="Author" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-[#0f0f23] font-semibold text-lg hover:text-[#f15a24] cursor-pointer transition-colors mb-2">
            Harvard milan
          </h4>
          <p className="text-[#707070] text-sm leading-[24px]">
            Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from
          </p>
        </div>
      </div>

      {/* 2. Comments Count */}
      <div className="border-t border-gray-100 pt-10 mb-10">
        <h3 className="text-[#0f0f23] text-xl font-bold">05 Comments</h3>
      </div>

      {/* 3. Comments List */}
      <div className="space-y-10 mb-16">
        
        {/* Array map use kiya hai taaki teeno images (1, 2, 3) show hon */}
        {commenterImages.map((imgSrc, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-5 group">
            <div className="w-16 h-16 shrink-0">
              <img 
                src={imgSrc} 
                alt={`User ${index + 1}`} 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-[#707070] text-[14px] md:text-[15px] leading-[26px] mb-4">
                Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
              </p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <h5 className="text-[#0f0f23] font-semibold text-[15px] hover:text-[#f15a24] cursor-pointer">
                    Emilly Blunt
                  </h5>
                  <span className="text-[#999999] text-[13px]">December 4, 2017 at 3:12 pm</span>
                </div>
                <button className="text-[#999999] text-[13px] uppercase font-bold tracking-wider hover:text-[#f15a24] transition-colors border border-gray-200 px-4 py-1.5 rounded-sm group-hover:border-[#f15a24]">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      
    </div>
  );
};

export default BlogFooter;