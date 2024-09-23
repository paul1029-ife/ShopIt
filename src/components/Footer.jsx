import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/products" className="hover:text-gray-200">Products</a>
          <a href="/cart" className="hover:text-gray-200">Cart</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="hover:text-gray-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-gray-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-gray-200" />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} ShopIt. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
