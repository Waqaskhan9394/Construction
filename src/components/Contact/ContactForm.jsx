import React from 'react';
import { HiOutlineHome, HiOutlineDeviceMobile, HiOutlineMail } from 'react-icons/hi';

const ContactSection = () => {
  return (
    /* 1. Main Section: Overflow-hidden ensures no horizontal scroll on mobile */
    <section className="w-full bg-white py-10 md:py-20 overflow-x-hidden">
      
      {/* 2. Responsive Container: Padding changes based on screen size */}
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-[24px] md:text-[27px] font-bold text-[#0f0f23] mb-8 md:mb-12">
          Get in Touch
        </h2>

        {/* 3. Main Flexbox: Column on mobile, Row on Large Screens */}
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-12 xl:gap-x-20">
          
          {/* Left Side: Form Container - 100% width on mobile */}
          <div className="w-full lg:flex-1 order-2 lg:order-1">
            <form className="w-full flex flex-col gap-4 md:gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <textarea 
                placeholder="Enter Message" 
                rows="6" 
                className="w-full border border-gray-100 p-4 text-sm focus:outline-none focus:border-[#f15a24] transition-all placeholder:text-gray-400 bg-[#fbf9ff] rounded-none shadow-sm"
              ></textarea>
              
              {/* Responsive Grid: 1 col on mobile, 2 cols on tablet+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full border border-gray-100 p-4 text-sm focus:outline-none focus:border-[#f15a24] bg-[#fbf9ff] rounded-none shadow-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full border border-gray-100 p-4 text-sm focus:outline-none focus:border-[#f15a24] bg-[#fbf9ff] rounded-none shadow-sm"
                />
              </div>

              <input 
                type="text" 
                placeholder="Enter Subject" 
                className="w-full border border-gray-100 p-4 text-sm focus:outline-none focus:border-[#f15a24] bg-[#fbf9ff] rounded-none shadow-sm"
              />

              {/* Button: Fixed width to prevent stretching on mobile */}
              <button 
                type="submit" 
                className="w-[120px] border border-[#f15a24] text-[#f15a24] py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#f15a24] hover:text-white transition-all duration-300 active:scale-95"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Side: Info Container - Takes only needed space on desktop */}
          <div className="w-full lg:w-[320px] flex flex-col gap-6 md:gap-9 order-1 lg:order-2">
            
            {/* Address Item */}
            <div className="flex items-start gap-4">
              <HiOutlineHome className="text-2xl md:text-3xl text-[#8a8a8a] shrink-0 mt-1" />
              <div className="min-w-0 flex-1">
                <h4 className="text-[#2a2a2a] font-medium text-[16px] truncate md:whitespace-normal">Buttonwood, California.</h4>
                <p className="text-[#999999] text-[14px]">Rosemead, CA 91770</p>
              </div>
            </div>

            {/* Mobile Item */}
            <div className="flex items-start gap-4">
              <HiOutlineDeviceMobile className="text-2xl md:text-3xl text-[#8a8a8a] shrink-0 mt-1" />
              <div className="min-w-0 flex-1">
                <h4 className="text-[#2a2a2a] font-medium text-[16px]">+1 253 565 2365</h4>
                <p className="text-[#999999] text-[14px]">Mon to Fri 9am to 6pm</p>
              </div>
            </div>

            {/* Email Item */}
            <div className="flex items-start gap-4">
              <HiOutlineMail className="text-2xl md:text-3xl text-[#8a8a8a] shrink-0 mt-1" />
              <div className="min-w-0 flex-1">
                <h4 className="text-[#2a2a2a] font-medium text-[16px] break-all">support@colorlib.com</h4>
                <p className="text-[#999999] text-[14px]">Send us your query anytime!</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;