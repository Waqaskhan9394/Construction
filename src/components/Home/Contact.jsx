import React from "react";
import BgImage from "../../assets/image/section-bg2.webp"; 

const ContactSection = () => {
  return (
    <div className="relative md:-mt-24 mt-0 z-20">
    <section
     className="relative   bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
    

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-24 md:py-32">

        {/* Stroke Background Text */}
        <h1 className="absolute top-16 left-6 md:left-16 text-[50px] md:text-9xl font-extrabold uppercase text-transparent opacity-10 pointer-events-none select-none stroke-text">
          LET'S CHAT
        </h1>

        {/* Main Content */}
        <div className="relative z-10 max-w-2xl">

          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase leading-tight mb-6">
            LET'S TALK WITH US
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10 text-lg">
            Mollit anim laborum.Dvcuis aute iruxvfg dhjkolhor in re voluptate velit 
            esscillumore eu quife nrulla pariatur. Exghcepteur sfwsignjnt occa cupidatat 
            non aute iruxvfg dhjinulpadeserunt mollittemnth incididunt ut;05tu layjobore mollit anim.
          </p>

        <button className="relative px-8 py-4 bg-white uppercase text-[14px] text-black overflow-hidden group w-fit">

  {/* Top to Bottom Background Layer */}
  <span className="absolute inset-0 bg-orange-600 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0"></span>

  {/* Text */}
  <span className="relative z-10 tracking-wider transition-colors duration-300 group-hover:text-white">
    Contact Now
  </span>

</button>

        </div>

      </div>
    </section>



<div className="relative md:-mt-24 -mt-32 z-20">

  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-orange-600 py-12 text-white text-center">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <p className="uppercase text-sm mb-2">Machinery</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            34 <span className="text-xl ml-2">Tools</span>
          </h2>
        </div>

        <div>
          <p className="uppercase text-sm mb-2">Machinery</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            76 <span className="text-xl ml-2">Tools</span>
          </h2>
        </div>

        <div>
          <p className="uppercase text-sm mb-2">Machinery</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            08 <span className="text-xl ml-2">Tools</span>
          </h2>
        </div>

      </div>

    </div>

  </div>

</div>


    </div>
  );
};

export default ContactSection;