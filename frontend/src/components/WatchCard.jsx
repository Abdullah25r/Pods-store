import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

function WatchCard({ text, path }) {
  return (
    <div className="bg-[#1a1a1a] p-3 pb-5 lg:pb-16 rounded-xl group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2 font-poppins font-semibold text-sm">
        <p className="text-base sm:text-lg text-white">{text}</p>
        <button className="transition-all duration-300 group-hover:translate-x-2 text-white">
          <FaCircleArrowRight size={28} />
        </button>
      </div>
      <div>
        <img
          src={path}
          alt={text}
          className="h-40 w-full object-contain bg-[#1a1a1a]"
        />
      </div>
    </div>
  );
}

export default WatchCard;
