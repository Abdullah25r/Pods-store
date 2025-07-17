import React, { useEffect } from "react";

function AboutTimePods() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
      }, []);
  return (
    <div className="text-white py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-10 text-center">About TimePods</h1>

      <div className="text-lg text-gray-300 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Our Mission</h2>
          <p>
            At TimePods, our mission is to revolutionize the way people experience sound. We are committed to
            delivering premium quality earbuds and audio devices that combine cutting-edge technology with sleek,
            modern design. Whether you're at the gym, commuting, or working from home, TimePods is your perfect
            companion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">What We Offer</h2>
          <p>
            TimePods offers a variety of audio products including wireless earbuds, noise-canceling headphones,
            and smart audio accessories. Every product is carefully engineered for comfort, durability, and
            exceptional sound clarity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Why Choose Us?</h2>
          <p>
            Our products are built with the latest audio technology, ensuring a powerful listening experience with
            long battery life, seamless Bluetooth connectivity, and smart touch controls. We prioritize customer
            satisfaction through constant innovation and exceptional after-sales support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Customer Commitment</h2>
          <p>
            We take pride in our transparent return and warranty policies, responsive customer service, and a
            growing community of satisfied customers. When you choose TimePods, you're choosing quality and trust.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutTimePods;
