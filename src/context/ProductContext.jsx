import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [fProducts, setfProducts] = useState([]); // State for filtered products

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setfProducts(data); // Initially show all products
      })
      .catch(e => console.log(e.message));
  }, []);

  console.log("Products in context: ", products);

  // Handles input changes
  function handleChange(e) {
    setInput(e.target.value);
  }

  // Filters products when the search button is clicked
  function handleSearch() {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setfProducts(filtered); 
    setInput("")
    // Update the filtered products
  }

  return (
    <ProductContext.Provider value={{ handleChange, handleSearch, input, fProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
