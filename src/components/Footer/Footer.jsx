import React, { useState, useEffect } from 'react';
import MapfooterImag from '../../assets/image/map-footer.webp';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 50px
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-[#070b11] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none hidden lg:block">
        <img 
          src={MapfooterImag} 
          alt="map" 
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] object-contain grayscale invert" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-[#1a2b4e] pb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="text-[#ff5e13]">
                <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <h2 className="text-4xl font-black tracking-tighter uppercase italic">Construction</h2>
            </div>
            <p className="text-[#8894ab] text-[15px] leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-2xl font-bold mb-10 tracking-tight uppercase">Quick Links</h4>
            <ul className="space-y-5 text-[#8894ab] text-[15px]">
              <li><a href="#" className="hover:text-[#ff5e13] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#ff5e13] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#ff5e13] transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-[#ff5e13] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-10 tracking-tight uppercase">Contact</h4>
            <div className="space-y-4 text-[#8894ab] text-[15px] leading-relaxed">
              <p>198 West 21th Street, Suite 721 New York, NY 10010</p>
              <p className="pt-2">Phone: +95 (0) 123 456 789</p>
              <p>Cell: +95 (0) 123 456 789</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row bg-[#122e5d] rounded-sm overflow-hidden mb-8 h-auto sm:h-12 lg:h-auto xl:h-12 border border-[#223a66]">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none px-5 py-3 sm:py-0 text-sm w-full text-white placeholder:text-gray-400"
              />
              <button className="bg-[#1a2b4e] hover:bg-[#ff5e13] text-gray-300 hover:text-white px-6 py-3 sm:py-0 text-xs font-bold uppercase transition-all tracking-widest whitespace-nowrap">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8894ab] text-sm font-medium text-center md:text-left">
            Copyright ©2026 All rights reserved | This template is made with <span className="text-[#ff5e13] mx-1">❤</span> by <a href="#" className="text-[#ff5e13] hover:underline">Colorlib</a>
          </p>
        </div>
      </div>

      {/* Fixed Scroll-to-Top Button - Bottom Right */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] bg-[#ff5e13] w-12 h-12 flex items-center justify-center rounded-sm shadow-2xl hover:bg-white hover:text-[#ff5e13] transition-all duration-300 transform hover:-translate-y-2 group"
        >
          <span className="text-2xl font-bold text-white group-hover:text-[#ff5e13]">↑</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;