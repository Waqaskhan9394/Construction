import React from "react";
import Servicesimg1 from '../../assets/image/servicess1.webp'
import Servicesimg2 from '../../assets/image/servicess2.webp'
import Servicesimg3 from '../../assets/image/servicess3.webp'
import Servicesicon from '../../assets/image/services_icon1.webp'
const services = [
  {
    id: 1,
    title: "Engineering Techniques & Implementation",
    image: Servicesimg1,
   
  },
  {
    id: 2,
    title: "Engineering Techniques & Implementation",
    image:Servicesimg2,
    
  },
  {
    id: 3,
    title: "Engineering Techniques & Implementation",
    image:Servicesimg3,
    
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
      <div className="relative w-full 
                py-10 sm:py-14 md:py-20">



          {/* Background Stroke Text */}
     <h2 className="stroke-bg
               text-4xl sm:text-5xl md:text-7xl lg:text-9xl
               font-extrabold uppercase
               leading-none">
  SERVICES
</h2>




<h3 className="absolute
               lg:bottom-16
               bottom-0 left-0
               text-lg sm:text-xl md:text-3xl lg:text-5xl
               font-bold uppercase
               text-[#0e132a]
               font-['Teko']">
  OUR SERVICES
</h3>






        </div>

        <div className="container mx-auto px-6 lg:px-16">
        
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
  key={service.id}
  className="group relative bg-white 
             border border-gray-100
             shadow-md hover:shadow-2xl
             transition-all duration-500 
             overflow-hidden"
>
  {/* Image */}
  <div className="overflow-hidden">
    <img
      src={service.image}
      alt="service"
      className="w-full h-64 object-cover 
                 group-hover:scale-110 
                 transition duration-700"
    />
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col justify-between h-[220px]">

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-[#0e132a] mb-4 
                     group-hover:text-orange-600 transition duration-300">
        {service.title}
      </h3>

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide 
                         group-hover:text-orange-600 transition">
          Read More
        </span>

        <span className="w-9 h-9 flex items-center justify-center 
                         rounded-full border border-gray-300 
                         group-hover:bg-orange-600 
                         group-hover:text-white 
                         group-hover:border-orange-600
                         transition duration-300">
          +
        </span>
      </div>
    </div>

    {/* Bottom Image */}
    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">

      <img
        src={Servicesicon}
        alt="icon"
        className="w-14 h-14 object-contain 
                   group-hover:scale-110 
                   group-hover:rotate-6
                   transition duration-500"
      />

      {/* Animated Line */}
      <div className="relative w-20 h-[2px] bg-gray-200 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-0 bg-orange-600 
                        group-hover:w-full transition-all duration-500"></div>
      </div>

    </div>

  </div>
</div>
          ))}
          {/* <div className="">
    <img
      src={Servicesicon}
      alt="icon"
    
    />
  </div> */}
        </div>
        

      </div>
       

      </div>
    </section>
  );
};

export default ServicesSection;
