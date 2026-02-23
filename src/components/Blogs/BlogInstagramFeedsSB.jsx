import React from 'react';
import Post5 from '../../assets/image/post_5.webp'
import Post6 from '../../assets/image/post_6.webp'
import Post7 from '../../assets/image/post_7.webp'
import Post8 from '../../assets/image/post_8.webp'
import Post9 from '../../assets/image/post_9.webp'
import Post10 from '../../assets/image/post_10.webp'

const InstagramFeeds = () => {
  // Instagram images ka dummy data
  const feeds = [
    { id: 1, image: Post5 },
    { id: 2, image: Post6 },
    { id: 3, image: Post7 },
    { id: 4, image: Post8 },
    { id: 5, image: Post9 },
    { id: 6, image: Post10},
  ];

  return (
    /* Widget spacing ke liye mb-16 lg:mb-24 */
    <div className="bg-[#fbf9ff] p-6 md:p-8 rounded-sm shadow-sm mb-16 lg:mb-24">
      
      {/* 1. Heading with Bottom Line */}
      <h3 className="text-xl font-bold text-[#0f0f23] mb-8 border-b border-gray-100 pb-4 relative">
        Instagram Feeds
        <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#f15a24]"></span>
      </h3>

      {/* 2. Responsive 3-Column Grid */}
      <div className="grid grid-cols-3 gap-3">
        {feeds.map((feed) => (
          <div key={feed.id} className="overflow-hidden group cursor-pointer aspect-square">
            <img 
              src={feed.image} 
              alt={`Instagram feed ${feed.id}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeeds;