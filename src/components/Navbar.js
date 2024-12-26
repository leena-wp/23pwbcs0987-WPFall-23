import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Optional CSS file for styling

const Header = () => {
  return (
    <header className="head-navbar">
      <div className="headlogo">
        <h1>WATCH EMPORIUM</h1>
      </div>
      <nav className="navbar">
        <ul>
        <li><Link to="/">HOME</Link></li>
          <li><Link to="/Brands">BRANDS</Link></li>
          <li><Link to="/About">ABOUT US</Link></li>
          <li><Link to="/Contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
