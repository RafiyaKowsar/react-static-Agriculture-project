import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/Navbar.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-between">

            <div className="flex-1 flex justify-center lg:space-x-12 md:space-x-2 text-gray-700 font-medium text-sm">
              <Link to="/" className=" font-bold lg:text-xl hover:text-amber-800">Home</Link>
              <Link to="/about" className=" font-bold  lg:text-xl hover:text-amber-800">About Us</Link>
              <Link to="/blogs" className=" font-bold lg:text-xl hover:text-amber-800">Blogs</Link>
              
              <div className="relative">
                <button onClick={() => setShopOpen(!shopOpen)}
                  className="hover:text-amber-800 focus:outline-none flex items-center space-x-1" >
                  <span className='font-bold lg:text-xl'>Shop</span>
                  <HiChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`}/>
                </button>
                {shopOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10  ">
                    <Link to="/shop1" className="block px-4 py-2 text-sm hover:text-amber-800 font-bold lg:text-xl"
                      onClick={() => setShopOpen(false)} >
                      Shop 1
                    </Link>
                    <Link to="/shop2" className="block px-4 py-2 text-sm hover:text-amber-800 font-bold lg:text-xl"
                      onClick={() => setShopOpen(false)}>
                      Shop 2
                    </Link>
                    
                  </div> )}
              </div>

              <Link to="/contact" className="hover:text-amber-800 font-bold lg:text-xl">Contact Us</Link>
            </div>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="Search..."
                className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
              <button className="text-gray-600 hover:text-green-600">
                <FiSearch size={18} />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => {setMenuOpen(!menuOpen); setShopOpen(false); }}
              className="text-gray-700 focus:outline-none text-2xl">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2 text-sm font-medium text-gray-700">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)} >
              About Us
            </Link>
            <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)} >
              Blogs
            </Link>

            <div className="px-4">
              <button onClick={() => setShopOpen(!shopOpen)} className="w-full text-left py-2 hover:bg-gray-100 flex items-center justify-between">
                <span>Shop</span>
                <HiChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`}/>
              </button>
              {shopOpen && ( <div className="pl-4">
                  <Link to="/shop1" className="block py-1 hover:bg-gray-100" onClick={() => {
                      setMenuOpen(false);
                      setShopOpen(false);}} >
                    Shop 1
                  </Link>
                  <Link to="/shop2" className="block py-1 hover:bg-gray-100"  onClick={() => {
                      setMenuOpen(false);
                      setShopOpen(false);  }}>
                    Shop 2
                  </Link> </div> )}
            </div>
            <Link to="/contact"   className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)} >
              Contact Us
            </Link>
            <div className="px-4 pt-2 flex items-center space-x-2">
              <input type="text" placeholder="Search..." className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button className="text-gray-600 hover:text-green-600">
                <FiSearch size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
