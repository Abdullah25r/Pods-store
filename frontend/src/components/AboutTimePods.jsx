import React, { useEffect } from "react";

function AboutTimePods() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white py-10 px-6 md:px-16">
      <h1 className="text-center font-poppins my-20 text-6xl md:text-5xl font-bold text-white">
        About <span className="bg-gradient-to-b from-white to-cyan-900 bg-clip-text text-transparent">TimePods</span>
      </h1>

      <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-700 rounded-2xl shadow-lg p-8 space-y-6 text-left text-lg text-gray-300 transition duration-300 hover:shadow-cyan-500/30">
        <p>
          <span className="block text-2xl font-semibold text-white mb-2">Our Mission</span>
          At TimePods, our mission is to revolutionize the way people experience sound. We are committed to
          delivering premium quality earbuds and audio devices that combine cutting-edge technology with sleek,
          modern design. Whether you're at the gym, commuting, or working from home, TimePods is your perfect
          companion.
        </p>

        <p>
          <span className="block text-2xl font-semibold text-white mb-2">What We Offer</span>
          TimePods offers a variety of audio products including wireless earbuds, noise-canceling headphones,
          and smart audio accessories. Every product is carefully engineered for comfort, durability, and
          exceptional sound clarity.
        </p>

        <p>
          <span className="block text-2xl font-semibold text-white mb-2">Why Choose Us?</span>
          Our products are built with the latest audio technology, ensuring a powerful listening experience with
          long battery life, seamless Bluetooth connectivity, and smart touch controls. We prioritize customer
          satisfaction through constant innovation and exceptional after-sales support.
        </p>

        <p>
          <span className="block text-2xl font-semibold text-white mb-2">Customer Commitment</span>
          We take pride in our transparent return and warranty policies, responsive customer service, and a
          growing community of satisfied customers. When you choose TimePods, you're choosing quality and trust.
        </p>
      </div>
    </div>
  );
}

export default AboutTimePods;
