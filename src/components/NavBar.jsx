import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">ShopIt</Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/cart" className="relative hover:text-gray-200">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FaBars size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4 text-white flex flex-col space-y-2">
        <Link to="/products" className="hover:text-gray-200">Products</Link>
        <Link to="/cart" className="hover:text-gray-200 flex items-center">
          <FaShoppingCart size={20} />
          <span className="ml-2">Cart ({cartCount})</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
