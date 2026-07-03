import React from "react";
import '../index.css'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";

export const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span><FaPhoneAlt /> +1 (800) 123-4567</span>
          <span><FaEnvelope /> hello@sarabfood.com</span>
          <span><FaMapMarkerAlt /> 42 Flavor Street, NY</span>
        </div>

        <div className="top-right">
          <button className="delivery-btn">🔥 FREE DELIVERY TODAY!</button>
          <FaFacebookF />
          <FaInstagram />
          <FaTiktok />
          <FaYoutube />
        </div>
      </div>


      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">🍴</div>
          <div>
            <h1>Tasty Treat</h1>
            <p>FAST FOOD & RESTAURANT</p>
          </div>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>

        <div className="nav-actions">
          <FaSearch className="search-icon" />
          <button className="order-btn">
            <FaShoppingBag /> Order Now
          </button>
        </div>
      </nav>
    
    </>
  );
};

export default Header;