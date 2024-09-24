import React, { createContext, useState, useEffect } from "react";
export const ApiContext = createContext();
export default function ApiProvider({ children }) {
    const [products, setProducts] = useState([]);
  useEffect(()=>{
    
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(products => {
      setProducts(products);
    }).catch(e=>console.log(e.message));
  },[products])
  
  return (
    <ApiContext.Provider value={{ products, setProducts }}>
      {children}
    </ApiContext.Provider>
  );
}
