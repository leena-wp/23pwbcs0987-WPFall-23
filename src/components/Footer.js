import React from "react";
import { Link } from "react-router-dom";

import "../App.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; Watch Emporium 2024. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Terms of Service</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
