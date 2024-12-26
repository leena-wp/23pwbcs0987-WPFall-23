import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path based on your folder structure
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from './pages/About'; 
import Brands from './pages/Brands'; 

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar is displayed on all pages */}
        <Navbar />

        {/* Routes to different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Brands" element={<Brands />} />
        </Routes>

        {/* Footer is displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
