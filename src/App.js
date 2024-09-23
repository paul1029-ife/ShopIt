import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />
            
            {/* Products Route */}
            <Route path="/products" element={<Products />} />
            
            {/* Add more routes for other pages like Cart and Contact */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
