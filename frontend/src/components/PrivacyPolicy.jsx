import React, { useEffect } from "react"; // ✅ fixed missing useEffect import

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white py-10 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <div className="text-left space-y-5 text-lg text-gray-300">
        <p>
          This privacy policy explains how TimePods ("the Store") collects, uses, and protects any personal information you provide when visiting our website. We value your privacy and are committed to safeguarding your data. If we ask for personal information that can identify you, it will only be used according to this policy.
        </p>
        <p>
          We may update this policy from time to time. Please check this page periodically to ensure you're satisfied with any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
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

        <h2 className="text-2xl font-semibold mt-6">How We Use This Information</h2>
        <ul className="list-disc list-inside pl-4">
          <li>Maintain internal records</li>
          <li>Customize product listings for you</li>
          <li>Share relevant offers and promotions</li>
          <li>Improve our services and user experience</li>
          <li>Occasionally send emails about new products or offers</li>
          <li>Conduct surveys or contact you for research via phone, email, or post</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Security Measures</h2>
        <p>
          We take your security seriously and use proper physical and digital methods to protect the information we collect online.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
