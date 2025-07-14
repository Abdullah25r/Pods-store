import React, { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <label key={starValue}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              className="hidden"
              onClick={() => setRating(starValue)}
            />
            <span
              className={`text-2xl cursor-pointer transition-colors duration-200 ${
                (hover || rating) >= starValue
                  ? 'text-[#ffa723]'
                  : 'text-gray-500'
              }`}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Star;
