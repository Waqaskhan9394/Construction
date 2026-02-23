import React from 'react';

const SampleButtons = () => {
  const buttonColors = [
    { label: "Default", primaryBg: "bg-[#f8f9fa]", primaryText: "text-[#212529]", primaryBorder: "border-[#f8f9fa]", hoverBg: "hover:bg-gray-100", hoverText: "hover:text-gray-800" },
    { label: "Primary", primaryBg: "bg-[#212c6f]", primaryText: "text-white", primaryBorder: "border-[#212c6f]", hoverBg: "hover:bg-[#1a235b]", hoverText: "hover:text-white" },
    { label: "Success", primaryBg: "bg-[#4cd3e3]", primaryText: "text-white", primaryBorder: "border-[#4cd3e3]", hoverBg: "hover:bg-[#38c3d3]", hoverText: "hover:text-white" },
    { label: "Info", primaryBg: "bg-[#38a4ff]", primaryText: "text-white", primaryBorder: "border-[#38a4ff]", hoverBg: "hover:bg-[#208ddf]", hoverText: "hover:text-white" },
    { label: "Warning", primaryBg: "bg-[#f4e700]", primaryText: "text-[#212529]", primaryBorder: "border-[#f4e700]", hoverBg: "hover:bg-[#e0d600]", hoverText: "hover:text-[#212529]" },
    { label: "Danger", primaryBg: "bg-[#f44a40]", primaryText: "text-white", primaryBorder: "border-[#f44a40]", hoverBg: "hover:bg-[#e03a30]", hoverText: "hover:text-white" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0f0f23] mb-12">Sample Buttons</h2>

        {/* 1. Standard Square Buttons */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8">
          {buttonColors.map((btn, i) => (
            <button key={`solid-${i}`} className={`${btn.primaryBg} ${btn.primaryText} px-7 py-2.5 text-sm font-medium transition-all duration-300 ${btn.hoverBg} ${btn.hoverText} rounded-sm`}>
              {btn.label}
            </button>
          ))}
          <a href="#" className="text-[#007bff] hover:text-[#f15a24] transition-colors underline decoration-1 underline-offset-2 px-3 py-2.5 text-sm">Link</a>
          <button className="bg-[#f8f9fa] text-gray-400 px-7 py-2.5 text-sm font-medium opacity-70 cursor-not-allowed rounded-sm">Disable</button>
        </div>

        {/* 2. Outlined Square Buttons */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8">
          {buttonColors.map((btn, i) => (
            <button 
              key={`outlined-${i}`} 
              className={`bg-transparent border ${btn.primaryBorder} ${i === 0 || i === 4 ? btn.primaryText : `text-[${btn.primaryBorder.split('[')[1].replace(']', '')}]`} 
              px-7 py-2.5 text-sm font-medium hover:${btn.primaryBg} hover:text-white transition-all duration-300 rounded-sm`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* 3. Rounded Buttons (Image 1 ka last row, Image 2 ka 1st row) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8">
          {buttonColors.map((btn, i) => (
            <button key={`rounded-${i}`} className={`${btn.primaryBg} ${btn.primaryText} px-7 py-2.5 text-sm font-medium transition-all duration-300 ${btn.hoverBg} ${btn.hoverText} rounded-full`}>
              {btn.label}
            </button>
          ))}
        </div>

        {/* 4. Gradient Buttons (Image 2 ka second row, thodi niche hai) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-16">
            <button className="bg-gradient-to-r from-[#212c6f] to-[#4cd3e3] text-white px-7 py-2.5 text-sm font-medium hover:from-[#1a235b] hover:to-[#38c3d3] transition-all duration-300 rounded-sm">
                Gradient
            </button>
            <button className="bg-gradient-to-r from-[#f4e700] to-[#f44a40] text-white px-7 py-2.5 text-sm font-medium hover:from-[#e0d600] hover:to-[#e03a30] transition-all duration-300 rounded-sm">
                Gradient
            </button>
            {/* Outlined Gradient - Screenshot mein nahi hai lekin commonly hota hai */}
            <button className="border border-[#212c6f] text-[#212c6f] bg-gradient-to-r from-transparent to-transparent hover:from-[#212c6f] hover:to-[#4cd3e3] hover:text-white px-7 py-2.5 text-sm font-medium transition-all duration-300 rounded-sm">
                Outline
            </button>
        </div>


        {/* 5. Different Sizes (Solid) */}
        <h3 className="text-2xl font-bold text-[#0f0f23] mb-8">Different Sizes</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-8">
          <button className="bg-[#212c6f] text-white px-10 py-4 text-lg font-bold rounded-sm hover:bg-[#1a235b] transition-colors">Extra Large</button>
          <button className="bg-[#4cd3e3] text-white px-8 py-3 text-base rounded-sm hover:bg-[#38c3d3] transition-colors">Large</button>
          <button className="bg-[#212c6f] text-white px-6 py-2.5 text-sm rounded-sm hover:bg-[#1a235b] transition-colors">Default</button>
          <button className="bg-[#4cd3e3] text-white px-5 py-2 text-xs rounded-sm hover:bg-[#38c3d3] transition-colors">Medium</button>
          <button className="bg-[#212c6f] text-white px-4 py-1.5 text-[10px] rounded-sm hover:bg-[#1a235b] transition-colors">Small</button>
        </div>

        {/* 6. Different Sizes (Outlined) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-4 mb-16">
          <button className="border border-[#212c6f] text-[#212c6f] px-10 py-4 text-lg font-bold rounded-sm hover:bg-[#212c6f] hover:text-white transition-colors">Extra Large</button>
          <button className="border border-[#4cd3e3] text-[#4cd3e3] px-8 py-3 text-base rounded-sm hover:bg-[#4cd3e3] hover:text-white transition-colors">Large</button>
          <button className="border border-[#212c6f] text-[#212c6f] px-6 py-2.5 text-sm rounded-sm hover:bg-[#212c6f] hover:text-white transition-colors">Default</button>
          <button className="border border-[#4cd3e3] text-[#4cd3e3] px-5 py-2 text-xs rounded-sm hover:bg-[#4cd3e3] hover:text-white transition-colors">Medium</button>
          <button className="border border-[#212c6f] text-[#212c6f] px-4 py-1.5 text-[10px] rounded-sm hover:bg-[#212c6f] hover:text-white transition-colors">Small</button>
        </div>

        {/* Separator line for next section */}
        <div className="w-full h-[1px] bg-gray-100 mt-20"></div>

      </div>
    </section>
  );
};

export default SampleButtons;