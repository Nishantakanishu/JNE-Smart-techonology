import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import Home from "./Home"; // your existing Home component
import Products from "./Products";
import Clients from "./Clients";
import Solutions from "./Solutions";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Push content below fixed navbar */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
