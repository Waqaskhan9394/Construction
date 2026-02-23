import React from 'react';
import SinglBlogImag1 from'../assets/image/single_blog_1.webp'
import SinglBlogImag2 from'../assets/image/single_blog_2.webp'
import SinglBlogImag3 from'../assets/image/single_blog_3.webp'
import SinglBlogImag4 from'../assets/image/single_blog_4.webp'
import SinglBlogImag5 from'../assets/image/single_blog_5.webp'

import BlogHero from '../components/Blogs/BlogHero';
import BlogCard from '../components/Blogs/BlogCard';
import Sidebar from '../components/Blogs/BlogSidebar';
import SearchBar from '../components/Blogs/BlogSidebar';
import Categories from '../components/Blogs/BlogCatogory';
import RecentPosts from '../components/Blogs/SBRecentPosts';
import TagClouds from '../components/Blogs/BlogTagCloudsSD';
import InstagramFeeds from '../components/Blogs/BlogInstagramFeedsSB';

const Blog = () => {
  return (
    <div className=" min-h-screen text-black">
      {/* Hero Section */}
     
<BlogHero title="Our Blog" breadcrumb="Blog"/>
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Blog Cards (75%) */}
          <div className="w-full lg:w-3/4 space-y-12">
          <BlogCard  image={SinglBlogImag1} 
              date="15 Jan 2024" 
              title="Modern Construction Techniques"/>
          <BlogCard  image={SinglBlogImag2} 
              date="15 Jan 2024" 
              title="Modern Construction Techniques"/>
          <BlogCard  image={SinglBlogImag3} 
              date="15 Jan 2024" 
              title="Modern Construction Techniques"/>
          <BlogCard  image={SinglBlogImag4} 
              date="15 Jan 2024" 
              title="Modern Construction Techniques"/>
          <BlogCard  image={SinglBlogImag5} 
              date="15 Jan 2024" 
              title="Modern Construction Techniques"/>
          </div>

          {/* Right Side: Sidebar (25%) */}
          <div className="w-full lg:w-1/4">
           <SearchBar/>
           <Categories/>
           <RecentPosts/>
           <TagClouds/>
           <InstagramFeeds/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;