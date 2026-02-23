import React from 'react';

const ReplyForm = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto py-10 px-4 md:px-0 bg-white">
      {/* Heading */}
      <h3 className="text-[#0f0f23] text-xl font-bold mb-8">Leave a Reply</h3>

      <form className="space-y-4">
        {/* 1. Large Message Area */}
        <div className="w-full">
          <textarea
            placeholder="Write Comment"
            className="w-full border border-gray-200 p-4 h-48 focus:outline-none focus:border-[#f15a24] text-[#707070] text-sm placeholder:text-[#999999] transition-colors"
          ></textarea>
        </div>

        {/* 2. Responsive Name & Email Row */}
        {/* 'grid-cols-1 md:grid-cols-2' isko mobile pe stack aur desktop pe side-by-side karega */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-200 p-4 h-12 focus:outline-none focus:border-[#f15a24] text-[#707070] text-sm placeholder:text-[#999999] transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-200 p-4 h-12 focus:outline-none focus:border-[#f15a24] text-[#707070] text-sm placeholder:text-[#999999] transition-colors"
          />
        </div>

        {/* 3. Website Input */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Website"
            className="w-full border border-gray-200 p-4 h-12 focus:outline-none focus:border-[#f15a24] text-[#707070] text-sm placeholder:text-[#999999] transition-colors"
          />
        </div>

        {/* 4. Custom Styled Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="border border-[#f15a24] text-[#f15a24] px-10 py-4 uppercase text-xs font-bold tracking-widest hover:bg-[#f15a24] hover:text-white transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReplyForm;