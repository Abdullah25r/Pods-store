import React, { useState, useEffect } from 'react';

// Placeholder images for demonstration. Replace with your actual image paths.
const images = [
    "./img/main.jpg",
    "./img/carousal2.jpg",
    "./img/carousal3.jpg",
  "./img/4183738.jpg",
  "./img/heroimage.webp",
];

const Carousel = () => {
  // State to keep track of the current active slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Function to go to a specific slide by index
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentSlide]); // Re-run effect when currentSlide changes to reset timer

  return (
    <div className="mx-2">
      <div id="default-carousel" className="relative w-full h-full cursor-pointer mx-auto rounded-xl shadow-lg my-8 overflow-hidden">
        <img src="./img/hero-image-3.webp" alt="img" className='' />
      </div>
    </div>
  );
};
export default Carousel