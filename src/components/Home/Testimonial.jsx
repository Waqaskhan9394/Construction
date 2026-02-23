import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    text: "Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt.",
    name: "Jessya Inn",
    role: "Co Founder"
  },
  {
    id: 2,
    text: "Construction quality is top-notch. They delivered the project on time and the attention to detail was incredible. Highly recommended.",
    name: "John Wick",
    role: "Project Manager"
  },
  {
    id: 3,
    text: "Great experience working with this team. Their professional approach and expertise in architecture is truly commendable and unique.",
    name: "Mike Ross",
    role: "Architect"
  }
];

const TestimonialSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#00235b] py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header Section with Buttons */}
        <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="relative">
            <h2 
              className="absolute -top-10 md:-top-14 left-0 text-6xl md:text-[120px] font-black opacity-10 uppercase tracking-tighter select-none pointer-events-none"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)', color: 'transparent' }}
            >
              FEEDBACK
            </h2>
            <h3 className="relative z-10 text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              TESTIMONIAL
            </h3>
          </div>

          {/* Manual Navigation Buttons */}
          <div className="flex gap-4 relative z-20">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 rounded-full border border-gray-500 text-white flex items-center justify-center hover:bg-[#ff5e13] hover:border-[#ff5e13] transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">←</span>
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 rounded-full border border-gray-500 text-white flex items-center justify-center hover:bg-[#ff5e13] hover:border-[#ff5e13] transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Swiper Slider - No Autoplay, Manual Only */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1} // Desktop aur mobile dono par slide show hoga
          loop={true}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-4xl">
                {/* Hollow Quote Icon */}
                <div className="mb-8">
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none" className="text-[#ff5e13]">
                    <path 
                      d="M15.6 0C7.02 0 0 7.02 0 15.6V40H18.8V15.6H6.4C6.4 10.5 10.5 6.4 15.6 6.4V0ZM46.8 0C38.22 0 31.2 7.02 31.2 15.6V40H50V15.6H37.6C37.6 10.5 41.7 6.4 46.8 6.4V0Z" 
                      fill="none" stroke="currentColor" strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 font-medium italic">
                  "{item.text}"
                </p>

                {/* Author Details */}
                <div className="flex items-start gap-5 border-l-4 border-[#ff5e13] pl-8 py-2">
                  <div>
                    <h4 className="text-white text-2xl font-bold tracking-wide">{item.name}</h4>
                    <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mt-1">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default TestimonialSection;