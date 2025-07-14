import React from "react";
import ProductCard from "./ProductCard";

const names = ["Vespor Airpuds", "Eclipse Earbuds", "Nova Buds", "Galaxy Pods","Eclipse Earbuds"];
const description = [
  "Experience the future of sound with Vespor Airpuds.",
  "Eclipse Earbuds: Where Style Meets Sound.",
  "Nova Buds: Your Gateway to Stellar Sound.",
  "Galaxy Pods: Explore the Universe of Sound.",
  "Eclipse Earbuds: Where Style Meets Sound."
];
function Card() {
  const pods = ["pods1", "pods2", "pods3", "pods4","pods2"];

  return (
   <div className="flex gap-5 flex-nowrap overflow-x-auto sm:overflow-x-hidden px-4 my-4 scroll-smooth">


      {pods.map((pod, index) => (
        <ProductCard
          path={`./img/${pod}.webp`}
          key={index}
          alt={`${pod}`}
          name={names[index]}
          desc = {description[index]}
        />
      ))}
    </div>
  );
}

export default Card;
