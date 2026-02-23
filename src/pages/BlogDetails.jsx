import React from 'react';



import SearchBar from '../components/Blogs/BlogSidebar';
import Categories from '../components/Blogs/BlogCatogory';
import RecentPosts from '../components/Blogs/SBRecentPosts';
import TagClouds from '../components/Blogs/BlogTagCloudsSD';
import InstagramFeeds from '../components/Blogs/BlogInstagramFeedsSB';
import BlogDetailsHero from '../components/BlogDetails/BlogDetailsHero';
import BlogContent from '../components/BlogDetails/BlogContent';
import BlogFooter from '../components/BlogDetails/BlogDetailsFooter';
import BlogDetailtwo from '../components/BlogDetails/BlogDetailsecondpara';
import ReplyForm from '../components/BlogDetails/BlogDetailsForm';

const Blog = () => {
  return (
    <div className=" min-h-screen text-black">
      {/* Hero Section */}
     

<BlogDetailsHero title="Single blog" breadcrumb="singleBlog"/>
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Blog Cards (75%) */}
          <div className="w-full lg:w-3/4 space-y-12">
             
              <BlogContent/>
            <BlogDetailtwo/>
              <BlogFooter/>
              <ReplyForm/>
              
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