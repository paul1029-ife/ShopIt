// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  console.log('Product passed to ProductCard:', product); // Log to see if the product is received

  // Prevent error if product is undefined
  if (!product) {
    return <p>No product data available</p>;
  }

  const { id, name, price, image } = product;

  return (
    <div key={id} className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-700 mt-2">${price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white mt-4 py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
