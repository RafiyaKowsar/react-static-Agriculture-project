import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl text-green-700">VerdaAgro</span>
            </Link>
          </div>

          {/* Menu Centered */}
          <div className="flex space-x-6 text-gray-700 font-medium text-sm">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/about" className="hover:text-green-600">About Us</Link>
            <Link to="/blogs" className="hover:text-green-600">Blogs</Link>

            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="hover:text-green-600 focus:outline-none"
              >
                Shop ▼
              </button>
              {shopOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    to="/shop1"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShopOpen(false)}
                  >
                    Shop 1
                  </Link>
                  <Link
                    to="/shop2"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShopOpen(false)}
                  >
                    Shop 2
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
