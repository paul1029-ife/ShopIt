import React from 'react'

export default function ProductCard({name, price, image}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="mt-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-700 mt-2">{price}</p>
      <a href={`/products/${name}`} className="block mt-4 bg-blue-600 text-white py-2 text-center rounded-lg hover:bg-blue-700">
        View Product
      </a>
    </div>
  </div>
  )
}
