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
import "../App.css";

const Brands = () => {
    return (
      <div>
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
      </div>
  );
};

export default Brands;