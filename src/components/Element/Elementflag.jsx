import React from 'react';

const FlagTable = () => {
  // Table Data with Image paths
  const countryData = [
    { id: "01", name: "Canada", visits: "645032", percentage: "80%", color: "bg-[#6382e6]", flag: "https://flagcdn.com/w40/ca.png" },
    { id: "02", name: "USA", visits: "645032", percentage: "30%", color: "bg-[#e66363]", flag: "https://flagcdn.com/w40/us.png" },
    { id: "03", name: "UK", visits: "645032", percentage: "55%", color: "bg-[#f4a02e]", flag: "https://flagcdn.com/w40/gb.png" },
    { id: "04", name: "Germany", visits: "645032", percentage: "65%", color: "bg-[#4ef3ce]", flag: "https://flagcdn.com/w40/de.png" },
    { id: "05", name: "Australia", visits: "645032", percentage: "45%", color: "bg-[#4ef38d]", flag: "https://flagcdn.com/w40/au.png" },
    { id: "06", name: "China", visits: "645032", percentage: "75%", color: "bg-[#6382e6]", flag: "https://flagcdn.com/w40/cn.png" },
    { id: "07", name: "Bangladesh", visits: "645032", percentage: "35%", color: "bg-[#a97cf0]", flag: "https://flagcdn.com/w40/bd.png" },
    { id: "08", name: "Belgium", visits: "645032", percentage: "60%", color: "bg-[#f16382]", flag: "https://flagcdn.com/w40/be.png" },
  ];

  return (
    <div className="w-full max-w-[1140px] mx-auto py-10 px-4 md:px-6 bg-white font-sans">
      
      {/* Top Heading */}
      <h2 className="text-[#002347] text-[24px] font-bold mb-10">Table</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px] border-collapse">
          <thead>
            {/* Table Header */}
            <tr className="text-[#415094] text-[13px] font-semibold uppercase tracking-wider border-b border-gray-100">
              <th className="pb-5 w-16">#</th>
              <th className="pb-5">Countries</th>
              <th className="pb-5">Visits</th>
              <th className="pb-5">Percentages</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-50">
            {countryData.map((item) => (
              <tr key={item.id} className="text-[#707070] text-[14px] hover:bg-gray-50 transition-colors">
                <td className="py-5 font-medium">{item.id}</td>
                
                {/* Flag Image and Name */}
                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.flag} 
                      alt={item.name} 
                      className="w-8 h-auto shadow-sm border border-gray-100"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </td>
                
                <td className="py-5">{item.visits}</td>
                
                {/* Progress Bar */}
                <td className="py-5 w-[35%]">
                  <div className="w-full bg-[#f9f9ff] h-[5px] rounded-full overflow-hidden">
                    <div 
                      className={`${item.color} h-full transition-all duration-700`} 
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlagTable;