import React from 'react';

// Images Import (Aapne assets folder ka structure check kar lein)
import g1 from '../../assets/image/g1.jpg';
import g2 from '../../assets/image/g2.jpg';
import g3 from '../../assets/image/g3.jpg';
import g4 from '../../assets/image/g4.jpg';
import g5 from '../../assets/image/g5.jpg';
import g6 from '../../assets/image/g6.jpg';
import g7 from '../../assets/image/g7.jpg';
import g8 from '../../assets/image/g8.jpg';

const ElementGallery = () => {
  return (
    <div className="w-full bg-white py-20 font-sans">
      <div className="max-w-[1140px] mx-auto px-4">
        
        {/* Gallery Title */}
        <h2 className="text-[#002347] text-[24px] font-bold mb-10">Image Gallery</h2>

        {/* --- Masonry Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Row 1: Three equal sized images */}
          <div className="overflow-hidden h-[220px]">
            <img src={g1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 1" />
          </div>
          <div className="overflow-hidden h-[220px]">
            <img src={g2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 2" />
          </div>
          <div className="overflow-hidden h-[220px]">
            <img src={g3} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 3" />
          </div>

          {/* Row 2: Two wide images (Responsive Grid) */}
          <div className="md:col-span-2 overflow-hidden h-[220px]">
            <img src={g4} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 4" />
          </div>
          <div className="overflow-hidden h-[220px]">
            <img src={g5} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 5" />
          </div>

          {/* Row 3: Three equal sized images */}
          <div className="overflow-hidden h-[220px]">
            <img src={g6} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 6" />
          </div>
          <div className="overflow-hidden h-[220px]">
            <img src={g7} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 7" />
          </div>
          <div className="overflow-hidden h-[220px]">
            <img src={g8} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-zoom-in" alt="Gallery 8" />
          </div>

        </div>

        {/* Bottom Decorative Divider */}
        <div className="border-b border-gray-100 mt-20"></div>

      </div>
    </div>
  );
};

export default ElementGallery;