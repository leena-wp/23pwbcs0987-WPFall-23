import React from "react";
import { Link } from "react-router-dom";
import image1 from "../components/Assets/image 1.jpeg";
import image2 from "../components/Assets/image 2.jpeg";
import image3 from "../components/Assets/image 3.jpeg";
import image4 from "../components/Assets/image 4.jpeg";
import image5 from "../components/Assets/image 5.jpeg";
import image6 from "../components/Assets/image 6.jpeg";
import image7 from "../components/Assets/image 7.jpeg";
import image8 from "../components/Assets/image 8.jpg";
import "../App.css"; // Import your CSS for styling

const Home = () => {
  return (
    <div>
      {/* Section 1: Title and Button */}
      <div className="container1">
        <div className="title">
          <h1>GREAT</h1>
          <h2>DESIGNS AT AFFORDABLE PRICES</h2>
        </div>
        <button className="btn1">SHOP NOW</button>
      </div>

      {/* Section 2: Product Listing */}
      <section className="container2">
        <h2>Our Products</h2>
        <div className="box">
          <div>
          <img src={image1} alt="Cartier Chronograph" />
            <h5>
              CARTIER CHRONOGRAPH <br />
              RS 5450
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image2} alt="Cartier Analog" />
            <h5>
              CARTIER ANALOG <br />
              RS 6600
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image3} alt="Hublot Analog" />
            <h5>
              HUBLOT ANALOG <br />
              RS 23000
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image4} alt="Hublot Chronograph" />
            <h5>
              HUBLOT CHRONOGRAPH <br />
              RS 10000
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image5} alt="Elegant Rose Gold" />
            <h5>
              ROLEX CHRONOGRAPH <br />
              RS 12500
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image6} alt="Rolex Chronograph" />
            <h5>
              ROLEX CHRONOGRAPH <br />
              RS 45000
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image7} alt="Tissot Analog" />
            <h5>
              TISSOT ANALOG <br />
              RS 8500
            </h5>
            <button>BUY NOW</button>
          </div>
          <div>
            <img src={image8} alt="Tissot Chronograph" />
            <h5>
              TISSOT CHRONOGRAPH <br />
              RS 10500
            </h5>
            <button>BUY NOW</button>
          </div>
        </div>
      </section>

      {/* Section 3: Offer */}
      <div className="offer">
        <h2 className="write">
          Get up to 30% off on our exclusive watches – Shop now and save big!
        </h2>
      </div>

      {/* Section 4: Features */}
      <div className="container3">
        <div className="txt1">
          <h3>Nationwide Delivery</h3>
          <p>
            Fast and reliable, we deliver all <br /> over Pakistan. Shop now and
            <br /> enjoy hassle-free shipping.
          </p>
        </div>
        <div className="txt2">
          <h3>Top Quality</h3>
          <p>
            Only the best for you. Our watches are <br /> crafted with precision
            and care <br /> for supreme quality.
          </p>
        </div>
        <div className="txt3">
          <h3>Incredible Offers</h3>
          <p>
            Don’t miss out! Explore our <br />
            fantastic deals designed to give <br /> you the best value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
