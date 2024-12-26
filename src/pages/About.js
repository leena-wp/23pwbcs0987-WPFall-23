import React from "react";
import { Link } from "react-router-dom";
import aboutimage from "../components/Assets/image1.jpg";
import "./About.css";

const about = () => {
  return (
    <div className="container4">
      {/* Hero Content Section */}
      <div className="hero-content">
        <h2>Welcome to Our Website</h2>
        <p>
          Where timekeeping meets elegance and craftsmanship. Founded with a
          passion for horology and a dedication to providing you with the finest
          wristwatches, we are more than just a watch company; we are the
          custodians of moments.
        </p>
        <p>
          Our journey began in 2018 with a simple yet profound belief: that a
          wristwatch is not just a device to tell time; it’s an expression of
          one’s personality, style, and appreciation for precision.
        </p>
        <p>
          We understand that choosing a wristwatch is a deeply personal
          experience. That’s why our team is committed to guiding you through
          this journey. Whether you are seeking a statement piece for a special
          occasion or a reliable companion for everyday life, we’re here to
          assist you in finding the perfect watch that resonates with your
          unique identity.
        </p>
        <button className="btn">Learn More</button>
      </div>

      {/* Hero Image Section */}
      <div className="hero-image">
      <img src={aboutimage} alt="about us" />
      </div>
    </div>
  );
};

export default about;
