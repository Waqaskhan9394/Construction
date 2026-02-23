import React from 'react';

const Categories = () => {
  const categories = [
    { name: "Resaurant food", count: 37 },
    { name: "Travel news", count: 10 },
    { name: "Modern technology", count: "03" },
    { name: "Product", count: 11 },
    { name: "Inspiration", count: 21 },
    { name: "Health Care", count: "09" },
  ];

  return (
    <aside className="w-full flex flex-col gap-8"> {/* Gap kam kiya */}
      
      {/* Category Widget */}
      <div className="bg-[#fbf9ff] p-6 md:p-8 rounded-sm shadow-sm">
        <h3 className="text-xl font-bold text-[#0f0f23] mb-6 border-b border-gray-100 pb-3 relative">
          Category
          <span className="absolute bottom-0 left-0 w-10 h-[1.5px] bg-[#f15a24]"></span>
        </h3>

        <ul className="flex flex-col">
          {categories.map((item, index) => (
            <li key={index} className="group border-b border-gray-100 last:border-0">
              <a 
                href="#" 
                className="flex justify-between items-center py-3 text-[#707070] hover:text-[#f15a24] transition-all duration-300 text-[15px] font-normal"
              >
                {/* Text aur count ka gap aur margin kam kiya */}
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {item.name}
                </span>
                <span className="text-gray-400 group-hover:text-[#f15a24]">
                  ({item.count})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

     

    </aside>
  );
};

export default Categories;