import React from "react";
import AboutImg from "../../assets/image/safe_in.webp"; // apni image lagao

const AboutSection = () => {
  return (
    <section className="h-screen bg-gray-100">
  <div className="grid lg:grid-cols-2 h-full">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center px-8 lg:px-16 h-full">

      <h2 className="stroke-bg text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-none mb-6">
        WHO WE ARE
      </h2>

      <h3 className="text-xl md:text-2xl font-bold text-[#0e132a] mb-6">
        Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore.
      </h3>

      <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
        Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate
        velit esscillumlore eu quife nrulla parihatur.
      </p>
<div className="mt-8">
  <button className="relative px-8 py-4 bg-orange-500 uppercase text-[14px] text-white overflow-hidden group w-fit">
    
    <span className="absolute inset-0 bg-orange-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
    
    <span className="relative z-10 tracking-wider">
      Contact Now
    </span>

  </button>
</div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative h-full">

      <img
        src={AboutImg}
        alt="about"
        className="w-full h-full object-cover"
      />

      {/* Overlay Box */}
      <div className="absolute bottom-0 left-0 bg-[#1e2a78] text-white px-10 py-8">
        <h4 className="text-4xl font-bold">1994</h4>
        <p className="tracking-[5px] text-sm mt-2">SINCE</p>
      </div>

    </div>

  </div>
</section>
  );
};

export default AboutSection;