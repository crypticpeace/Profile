import React from 'react';
import { Search, ShoppingCart, MapPin } from 'lucide-react';
import logo from '../assets/amazon_logo.png';

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white rounded-lg">
      <div className="flex items-center justify-between px-4 py-2 mb-1 ">
        {/* Left Section - Logo and Delivery */}
        <div className="flex items-center space-x-4">
          {/* Amazon Logo */}
          <div className="flex items-center cursor-pointer">
            <img 
            src={logo} alt="" 
            className=" max-w-24 object-cover rounded-lg"
            />
          </div>
          
          {/* Delivery Location */}
          <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <MapPin size={20} />
            <div>
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="text-sm font-bold">Select Location</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex w-full max-w-3xl">
            <input 
              type="text" 
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
              placeholder="Search Amazon"
            />
            <button className="px-6 bg-orange-400 hover:bg-orange-500 text-black rounded-r-md">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Account */}
          <div className="hidden md:block cursor-pointer hover:text-gray-300">
            <div className="text-xs">Hello, sign in</div>
            <div className="text-sm font-bold">Account & Lists</div>
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:block cursor-pointer hover:text-gray-300">
            <div className="text-xs">Returns</div>
            <div className="text-sm font-bold">& Orders</div>
          </div>

          {/* Cart */}
          <div className="flex items-center cursor-pointer hover:text-gray-300">
            <div className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-orange-400 rounded-full flex items-center justify-center text-black text-xs font-bold">
                0
              </span>
            </div>
            <span className="hidden md:inline font-bold ml-2">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;