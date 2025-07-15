import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

function WatchCard(props) {
  return (
    <div className="bg-[#1a1a1a] p-2 rounded-lg group cursor-pointer ">
      <div className="flex justify-between font-poppins font-semibold text-sm px-3">
        <p className="text-lg">{props.text}</p>
        <button className="transition-all duration-300 group-hover:translate-x-2">
          <FaCircleArrowRight size={32} className="text-2xl"/>
        </button>
      </div>
      <div>
        <img src={props.path} alt="img" className="h-[40vh] bg-[#1a1a1a]"/>
      </div>
    </div>
  );
}

export default WatchCard;
