// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart.length === 0 ? (
          <p className="text-center text-lg">
            Your cart is empty.
          </p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-700 mt-2">${product.price}</p>
                <p className="text-gray-700 mt-2">Qty: {product.quantity}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-600 hover:text-red-800 mt-2"
                >
                  Remove
                </button>
                <input type="number" className="bg-slate-100 w-8 relative left-4" value={product.quantity}/>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total Price and Checkout */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-right">Total: ${totalPrice}</h2>
        {cart.length > 0 && (
          <button
            className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 float-right"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
