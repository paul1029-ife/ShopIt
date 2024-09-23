import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">ShopIt</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Search Bar & Cart */}
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 hidden md:block"
          />
          
          {/* Shopping Cart Icon */}
          <Link to="/cart" className="relative text-white">
            <FaShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">3</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 text-white flex justify-between">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/products" className="hover:text-gray-200">Products</Link>
        <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
