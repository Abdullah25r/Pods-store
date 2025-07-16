import React from "react";
import ProductCard from "./ProductCard";

const names = ["Vespor Airpuds", "Eclipse Earbuds", "Nova Buds", "Galaxy Pods", "Eclipse Earbuds","Wave Earbuds","Arcade Earbuds","Quantum Earbuds"];
const description = [
  "Experience the future of sound with Vespor Airpuds.",
  "Eclipse Earbuds: Where Style Meets Sound.",
  "Nova Buds: Your Gateway to Stellar Sound.",
  "Galaxy Pods: Explore the Universe of Sound.",
  "Eclipse Earbuds: Where Style Meets Sound.",
  "Experience the future of sound with Wave Airpuds.",
  "Arcade Earbuds: Where Style Meets Sound",
  "Quantum Buds: Your Gateway to Stellar Sound."
];

function Card() {
  const pods = ["pods1", "pods2", "pods3", "pods4", "pods2","zero-1","zero-2","zero-3"];

  return (
    <div className="w-full overflow-x-auto sm:overflow-x-visible">
      <div className="flex flex-nowrap sm:flex-wrap gap-5 px-4 my-4 scroll-smooth sm:justify-center">
        {pods.map((pod, index) => (
          <ProductCard
            key={index}
            path={`./img/${pod}.webp`}
            alt={`${pod}`}
            name={names[index]}
            desc={description[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
