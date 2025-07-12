import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi'; // Cart Icon

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-2 z-50 bg-gradient-to-r from-[#141E30] to-[#243B55] text-[#f1f1f1] px-4 sm:px-6 md:px-12 shadow-md rounded-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">

        {/* Logo Wrapped in Link */}
        <a href="/" className="flex items-center">
          <img src="logo.gif" alt="TimePods Logo" className="h-8" />
          <span className="font-kanit text-2xl ml-2 text-[#C084FC] tracking-wider">TimePods</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-poppins font-medium">
          <a href="#" className="hover:text-[#0ff] transition">Home</a>
          <a href="#" className="hover:text-[#0ff] transition">Shop</a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="hover:text-[#0ff] transition">Devices</button>
            <ul className="absolute left-0 mt-2 w-40 bg-[#1c1c2a] rounded-md shadow-lg hidden group-hover:block z-20">
              {['AirPods & Earbuds', 'Smartwatches', 'Headphones', 'Accessories'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="block px-4 py-2 hover:bg-[#0ff] hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#" className="hover:text-[#0ff] transition">News</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-1 border border-[#64748b] rounded-md hover:bg-[#0ff] hover:text-black transition font-semibold">
            Sign In
          </button>

          {/* Cart Icon */}
          <button className="text-2xl hover:text-[#0ff] transition" aria-label="Cart">
            <FiShoppingCart />
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (same as before) */}
      {menuOpen && (
        <div className="md:hidden bg-[#1c1c2a] px-6 pb-4 pt-2 space-y-4 font-poppins">
          <a href="#" className="block hover:text-[#0ff]">Home</a>
          <a href="#" className="block hover:text-[#0ff]">Shop</a>
          <details className="group">
            <summary className="cursor-pointer hover:text-[#0ff]">Devices</summary>
            <div className="ml-4 mt-2 space-y-2 text-sm">
              <a href="#" className="block hover:text-[#0ff]">AirPods & Earbuds</a>
              <a href="#" className="block hover:text-[#0ff]">Smartwatches</a>
              <a href="#" className="block hover:text-[#0ff]">Headphones</a>
              <a href="#" className="block hover:text-[#0ff]">Accessories</a>
            </div>
          </details>
          <a href="#" className="block hover:text-[#0ff]">News</a>
          <button className="w-full border border-[#64748b] rounded-md py-1 hover:bg-[#0ff] hover:text-black transition font-semibold">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
