import React from "react";

function TermsConditions() {
  return (
    <div className="text-white py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

      <p className="text-gray-400 mb-4">
        Your product includes a warranty card valid for 1 week. To claim the warranty, please present this card. If the card is lost, the original purchase invoice may be required. Without either document, the warranty will be considered void.
      </p>

      <p className="text-gray-400 mb-4">
        Warranty claims will not be accepted for the following reasons:
      </p>
      <ul className="list-disc list-inside text-gray-400 mb-4">
        <li>Water or moisture damage</li>
        <li>Physical damage or broken parts</li>
        <li>Damage caused by overcharging or high voltage</li>
        <li>Repairs done outside of authorized service centers</li>
        <li>Removed or broken safety seal on the product</li>
      </ul>

      <p className="text-gray-400 mb-4">
        While we aim to return your product by the committed date, unexpected delays may occur. Please understand that batteries in battery-operated products are not covered under warranty. Similarly, accessories such as microphones, remotes, or cables are not included in the warranty.
      </p>

      <p className="text-gray-400 mb-4">
        In case the original product is unavailable, the company reserves the right to provide an alternative product, subject to any price difference.
      </p>

      <p className="text-gray-400">
        To verify your product’s E-Warranty, please visit:{" "}
        <a
          href="https://TimePods.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          www.TimePods.com
        </a>
      </p>
    </div>
  );
}

export default TermsConditions;
