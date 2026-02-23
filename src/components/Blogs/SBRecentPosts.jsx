import React from 'react';
import PostImages1 from '../../assets/image/post_1.webp'
import PostImages2 from '../../assets/image/post_2.webp'
import PostImages3 from '../../assets/image/post_3.webp'
import PostImages4 from '../../assets/image/post_4.webp'

const RecentPosts = () => {
  const posts = [
    { image: PostImages1, title: "From life was you fish...", date: "January 12, 2019" },
    { image: PostImages2, title: "The Amazing Hubble", date: "02 Hours ago" },
    { image: PostImages3, title: "Astronomy Or Astrology", date: "03 Hours ago" },
    { image: PostImages4, title: "Asteroids telescope", date: "01 Hours ago" },
  ];

  return (
    /* Responsive Margin Bottom: Mobile par mb-16 aur desktop par mb-24 tak */
    <div className="bg-[#fbf9ff] p-5 sm:p-8 rounded-sm shadow-sm mb-16 lg:mb-24">
      
      {/* Heading */}
      <h3 className="text-lg sm:text-xl font-bold text-[#0f0f23] mb-8 border-b border-gray-100 pb-4 relative">
        Recent Post
        <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#f15a24]"></span>
      </h3>

      <div className="flex flex-col gap-5 sm:gap-6">
        {posts.map((post, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-5 group cursor-pointer">
            
            {/* Thumbnail: Mobile par size halka chota kiya hai */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-sm bg-gray-200">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Post Details */}
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-[#0f0f23] group-hover:text-[#f15a24] transition-colors duration-300 leading-snug">
                {post.title}
              </h4>
              <p className="text-gray-400 text-[12px] sm:text-sm">
                {post.date}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;