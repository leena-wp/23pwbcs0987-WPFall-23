import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import contact from "../components/Assets/about.jpeg.jpg";
import { Link } from "react-router-dom";
import "./Contact.css"; 

const Contact = () => {
  return (
    <>
    <div className="contact-image">
    </div>
      {/* Main Container */}
      <div className="container">
        <main className="row">
          {/* Left Section */}
          <section className="col left">
            <div className="ContactTitle">
              <h2>You tell us. We listen!</h2>
              <p>
                Fill out the form with your name, email, and a brief message.
                Whether you have a question about our products, need help with an
                order, or want to share your thoughts, we’re all ears!
              </p>
              <div className="contactInfo">
                {/* Contact Info Section */}
                <div className="iconGroup">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="details">
                    <span>Phone</span>
                    <span>
                      0333-9808700 <br /> 091-223344
                    </span>
                  </div>
                </div>
                <div className="iconGroup">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="details">
                    <span>Email</span>
                    <span>Watchemporium@gmail.com</span>
                  </div>
                </div>
                <div className="iconGroup">
                  <div className="icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="details">
                    <span>Address</span>
                    <span>
                      Shop # 33 street 32 opposite <br /> fabrico tailors SADDAR
                      PESHAWAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Section: Form */}
          <section className="col right">
            <form className="messageform">
              <div className="inputgroup halfWidth">
                <label>Your Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="inputgroup halfWidth">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="inputgroup fullWidth">
                <label>Subject</label>
                <input type="text" name="subject" required />
              </div>
              <div className="inputgroup fullWidth">
                <label>Message</label>
                <textarea name="message" required></textarea>
              </div>
              <div className="inputgroup fullWidth">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
