import React from "react";

function ProductsHeader() {
  const categories = [
    { name: "Watches", image: "./img/w-7.webp" },
    { name: "Headphone", image: "./img/headphone-1.webp" },
    { name: "Airpods", image: "./img/pods1.webp" },
  ];
  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      <h2 className="text-6xl font-semibold font-poppins pb-3 mb-14 md:mb-10 sm:mb-10 bg-gradient-to-b from-white to-cyan-900 bg-clip-text text-transparent">
        Categories
      </h2>
      <div className="flex justify-center gap-20">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="flex cursor-pointer group flex-col items-center gap-4  "
            >
              <div className="w-20 h-20 bg-[#1a1a1a] flex items-center justify-center rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 transition-all duration-300 group-hover:-translate-y-2 rounded-full"
                />
              </div>
              <p className="text-lg font-medium transition-all duration-200 group-hover:text-[#ced4da]">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsHeader;
