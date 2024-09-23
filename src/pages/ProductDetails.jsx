// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Sample product data (replace with API data as needed)
  const product = {
    id: parseInt(id),
    name: `Product ${id}`,
    price: 50 * id,
    image: 'https://via.placeholder.com/600',
    description: `This is a detailed description of Product ${id}.`,
  };

  if (!product) {
    return <p className="text-center">Product not found.</p>;
  }

  return (
    <div className="container mx-auto py-16 flex flex-col md:flex-row items-center">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
      <div className="mt-8 md:mt-0 md:ml-10">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-700 mt-4">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
