import React from "react";
import { MdVerified, MdReplay } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";

function Extras() {
  const icons = [
    { icon: MdVerified, label: "1 Year Warranty" },
    { icon: MdReplay, label: "7 Days Return" },
    { icon: FaTruck, label: "Free Delivery" },
    { icon: HiThumbUp, label: "1000+ Customers" },
  ];

  return (
    <div className=" py-10 px-4 sm:px-6 md:px-10 rounded-lg shadow-lg w-full">
      <div className="flex flex-wrap justify-evenly items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 text-white">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32 sm:w-36 md:w-40 p-4  rounded-md hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              <IconComponent size={44} className="text-gray-300 mb-2" />
              <p className="text-sm font-poppins font-medium text-gray-200 tracking-wide">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Extras;
