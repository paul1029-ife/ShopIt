import React from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Welcome to ShopIt</h1>
          <p className="mt-4 text-xl">Your one-stop shop for the best products</p>
          <a href="/products">
            <button className="mt-6 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
              Shop Now
            </button>
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product Cards */}
            <ProductCard
              name="Product 1"
              price="$50"
              image="https://via.placeholder.com/300"
            />
            <ProductCard
              name="Product 2"
              price="$75"
              image="https://via.placeholder.com/300"
            />
            <ProductCard
              name="Product 3"
              price="$100"
              image="https://via.placeholder.com/300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;