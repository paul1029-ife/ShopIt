import React from 'react';
import ProductCard from '../components/ProductCard.jsx';

function Products() {
  // Sample product data (this can be dynamic in the future)
  const products = [
    { name: 'Product 1', price: '$50', image: 'https://via.placeholder.com/300' },
    { name: 'Product 2', price: '$75', image: 'https://via.placeholder.com/300' },
    { name: 'Product 3', price: '$100', image: 'https://via.placeholder.com/300' },
    { name: 'Product 4', price: '$125', image: 'https://via.placeholder.com/300' },
    { name: 'Product 5', price: '$150', image: 'https://via.placeholder.com/300' },
    { name: 'Product 6', price: '$150', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.name} 
            name={product.name} 
            price={product.price} 
            image={product.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
