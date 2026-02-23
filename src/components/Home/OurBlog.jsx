import React from 'react';
import BlogImag1 from '../../assets/image/david_1.webp'
import BlogImag2 from '../../assets/image/david_2.webp'

const blogPosts = [
  {
    id: 1,
    date: "24",
    month: "Nov",
    category: "Properties",
    title: "Footprints in Time is perfect House in Kurashiki",
    image: BlogImag1,
  },
  {
    id: 2,
    date: "24",
    month: "Nov",
    category: "Properties",
    title: "Footprints in Time is perfect House in Kurashiki",
    image: BlogImag2,
  }
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section - Inspired by Captureblog.jpg */}
        <div className="relative mb-20">
          <h2 className="absolute -top-10 md:-top-16 left-0 text-7xl md:text-9xl font-black text-gray-50 uppercase tracking-tighter select-none z-0">
            OUR BLOG
          </h2>
          <h3 className="relative z-10 text-4xl md:text-5xl font-black text-[#1a202c] uppercase tracking-tight">
            LATEST NEWS
          </h3>
        </div>

        {/* Blog Grid - Only 2 Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col group h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
              
              {/* Image Section with Date Badge */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 "
                />
                {/* Orange Date Badge */}
                <div className="absolute top-0 left-0 bg-[#ff5e13] text-white px-6 py-4 text-center z-10">
                  <span className="block text-2xl font-bold leading-none">{post.date}</span>
                  <span className="block text-sm font-medium uppercase">{post.month}</span>
                </div>
              </div>

              {/* Bottom Content Part (Dark Blue #00235b) */}
              <div className="bg-[#00235b] p-8 md:p-12 flex-grow">
                <div className="flex items-center gap-3 mb-4 text-gray-300">
                  <span className="text-[#ff5e13] font-black text-xl">|</span>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">
                    {post.category}
                  </span>
                </div>
                
                <h4 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-8 hover:text-[#ff5e13] transition-colors cursor-pointer">
                  {post.title}
                </h4>
                
                <a href="#" className="text-[#ff5e13] text-sm font-black uppercase tracking-widest hover:text-white transition-all inline-flex items-center gap-2">
                  READ MORE <span className="text-lg">»</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;