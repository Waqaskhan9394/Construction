import React from 'react';

const TextSample = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-6"> {/* Ye container content ko center mein rakhega */}
        
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-[#0f0f23] mb-10 tracking-tight">
          Text Sample
        </h2>

        {/* Full Width Paragraph */}
        <div className="w-full">
          <p className="text-[#707070] text-base md:text-[17px] leading-[1.8] text-justify font-light">
            Every avid independent filmmaker has <span className="font-bold text-[#0f0f23]">Bold</span> about making that 
            <span className="italic text-[#0f0f23]"> Italic</span> interest documentary, or short film to show off their creative prowess. 
            Many have great ideas and want to "wow" the 
            <sup className="text-blue-500 text-xs font-medium px-0.5">Superscript</sup> scene, or video renters with their big project. 
            But once you have the <sub className="text-blue-500 text-[10px] font-medium px-0.5">Subscript</sub> "in the can" (no easy feat), 
            how do you move from a <del className="line-through text-[#0f0f23]">Strike</del> through of master DVDs with the 
            <a href="#" className="text-[#007bff] underline decoration-1 underline-offset-4 hover:text-[#f15a24] transition-all"> "Underline"</a> 
            marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, 
            with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. 
            Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option 
            to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for 
            good DVD replication results:
          </p>
        </div>

        {/* Niche wali separator line jo screenshot mein hai */}
        <div className="w-full h-[1px] bg-gray-100 mt-20"></div>

      </div>
    </section>
  );
};

export default TextSample;