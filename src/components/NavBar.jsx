import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

function Navbar() {
  const { cartCount } = useContext(CartContext);
  const { handleChange, input, handleSearch } = useContext(ProductContext);
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">ShopIt</Link>
       <div>
       <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={handleChange} value={input}  type="search" id="search" class="block w-76 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" onClick={() => handleSearch()} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
       </div>
       </div>
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
