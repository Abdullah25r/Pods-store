import React from 'react';
import WatchCard from './WatchCard';

const names = ["w-1", "w-2", "w-3", "w-4"];
const text = ["For Fashion", "For Adventure", "For Lifestyle", "For Productivity"];

function Watches() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 px-5 py-8">
      
      {/* Main Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./img/shaheen.webp"
          alt="Main Watch"
          className="w-full max-w-md md:max-w-lg rounded-lg object-cover"
        />
      </div>

      {/* Watch Cards Section */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {names.map((name, index) => (
          <WatchCard
            key={index}
            path={`./img/${name}.webp`}
            text={text[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Watches;
