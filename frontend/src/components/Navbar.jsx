import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi'; // Cart Icon
import {Link} from 'react-router-dom'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-2 z-50 bg-gradient-to-r from-[#1a1a1a] to-[#000000] text-[#ced4da] px-4 sm:px-6 md:px-12 shadow-md rounded-xl mx-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">

        {/* Logo Wrapped in Link */}
        <Link to="/"className="flex items-center">
          <img src="logo.gif" alt="TimePods Logo" className="h-8" />
          <span className="font-kanit text-2xl ml-2 text-[#ced4da] hover:text-[#ffffff] transition tracking-wider">TimePods</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-poppins font-medium">
          <Link to="/" className="hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Home</Link>
          <Link to="/Products" className="hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Products</Link>
          <Link to="/devices" className="hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Smart Watches</Link>
          <Link to="/news" className="hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Accessories</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-1 border border-[#64748b] rounded-md hover:bg-[#ffffff] hover:text-black transition duration-300 ease-in-out font-semibold">
            Sign In
          </button>

          {/* Cart Icon */}
          <button className="text-2xl hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md" aria-label="Cart">
            <FiShoppingCart />
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden transition hover:text-[#ffffff] pointer hover:bg-[#1a1a1a] p-1 rounded-md">
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
      <div
  className={`md:hidden bg-[#111111] px-6 pt-2 pb-2 space-y-1 rounded-lg font-poppins transition-all duration-300 ease-in-out transform ${
    menuOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
  } overflow-hidden origin-top`}
>
  <Link to="/" className="block hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Home</Link>
  <Link to="/shop" className="block hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Shop</Link>
  <Link to="/devices" className="block hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">Devices</Link>
  <Link to="/news" className="block hover:text-[#ffffff] transition hover:bg-[#1a1a1a] p-2 rounded-md">News</Link>
  <button className="w-full border border-[#64748b] rounded-md py-1 hover:bg-[#ffffff] hover:text-black transition font-semibold">
    Sign In
  </button>
</div>

    </header>
  );
}

export default Navbar;
