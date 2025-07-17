import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white py-10 px-6 lg:px-20">
      <h1 className="text-center font-poppins my-10 text-6xl md:text-5xl font-bold text-white">
        Privacy{" "}
        <span className="bg-gradient-to-b from-white to-cyan-900 bg-clip-text text-transparent">
          Policy
        </span>
      </h1>

      <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-700 rounded-2xl shadow-lg p-8 space-y-6 text-left text-lg text-gray-300 transition duration-300 hover:shadow-cyan-500/30">
        <p>
          This privacy policy explains how TimePods collects, uses, and protects
          any personal information you provide when visiting our website. We
          value your privacy and are committed to safeguarding your data. If we
          ask for personal information that can identify you, it will only be
          used according to this policy.
        </p>
        <p>
          We may update this policy from time to time. Please check this page
          periodically to ensure you're satisfied with any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-white">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside pl-4">
          <li>Your name</li>
          <li>Contact information (phone number, email)</li>
          <li>Gender</li>
          <li>Location, preferences, and interests</li>
          <li>Browsing and search behavior</li>
          <li>Order history</li>
          <li>Clicks and interactions on the website or app</li>
          <li>Feedback and responses to surveys or offers</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-white">
          How We Use This Information
        </h2>
        <ul className="list-disc list-inside pl-4">
          <li>Maintain internal records</li>
          <li>Customize product listings for you</li>
          <li>Share relevant offers and promotions</li>
          <li>Improve our services and user experience</li>
          <li>Occasionally send emails about new products or offers</li>
          <li>
            Conduct surveys or contact you for research via phone, email, or
            post
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-white">
          Security Measures
        </h2>
        <p>
          We take your security seriously and use proper physical and digital
          methods to protect the information we collect online.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
