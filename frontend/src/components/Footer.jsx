import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTruck, FaTags, FaShieldAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white mt-20">
      {/* Top Feature Bar */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-6 border-b border-white/10 mb-10">
        <div className="flex items-center space-x-2">
          <FaTruck className="text-red-600 text-3xl" />
          <span className="font-semibold text-lg text-white">Free Shipping</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaTags className="text-red-600 text-3xl" />
          <span className="font-semibold text-lg text-white">Exclusive Deals</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaShieldAlt className="text-red-600 text-3xl" />
          <span className="font-semibold text-lg text-white">Secure Checkout</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-20 pb-6">
        {/* Grid Section */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* Subscribe */}
          <div>
            <p className="text-sm mb-2">
              Subscribe to email alerts. We promise not to spam your inbox.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-2 text-black w-full rounded-l-md outline-none"
              />
              <button className="bg-red-700 px-4 py-2 rounded-r-md hover:bg-red-800 transition">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Shop</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Deals & Discounts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Personal Audio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Speakers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Power Banks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Channel Speakers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">About Audionic</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Return Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Why buy direct?</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Support</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Customer Care Centers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Read Our Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Complaint Form</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Bulk Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Corporate Gifting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white font-medium transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons Above Bottom Line */}
        <div className="flex justify-start mt-10">
          <div className="flex space-x-4">
            <FaFacebookF className="text-xl hover:text-red-600 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-red-600 cursor-pointer" />
            <FaWhatsapp className="text-xl hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Bottom Thin Line */}
        <div className="h-[1px] w-full bg-white opacity-20 mt-5 mb-5"></div>

        {/* Centered Copyright */}
        <div className="w-full text-center text-sm">
          © 2025 TimePods. All Rights Reserved By <span className="font-semibold">TimePods</span>.
        </div>
      </div>
    </div>
  );
}

export default Footer;
