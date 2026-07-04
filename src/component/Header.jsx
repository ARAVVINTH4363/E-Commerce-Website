import React, { useState } from "react";
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
  FaTimes,
} from "react-icons/fa";

export const Header = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
}) => {

  const [showSearch, setShowSearch] = useState(false);


  const handleCategoryClick = (cat) => {
  setCategory(cat);
  setShowSearch(false);

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
  });
};

const handleSearch = () => {
  setShowSearch(false);

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    setSearchTerm("");
  }, 3000);
};


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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservation">Reservation</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <FaSearch
  className="search-icon"
  onClick={() => setShowSearch(true)}
/>


          <button className="order-btn" onClick={() => document.getElementById("menu").scrollIntoView
          ({
             behavior: "smooth",
          })}>
             <FaShoppingBag /> Order Now
          </button>
        </div>
      </nav>


      {showSearch && (
  <div className="search-overlay">
    <button
      className="close-btn"
      onClick={() => setShowSearch(false)}
    >
      <FaTimes />
    </button>

    <div className="search-content">
      <h2>What are you craving today?</h2>

      <div className="search-box">
        <input
            type="text"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
           
            placeholder="Search burgers, pizza..."
        />

        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className="category-list">
        {/* <span onClick={()=>setCategory("ALL")}>🍔 All Items</span> */}
        <span className={category === "ALL" ? "active" : ""}onClick={() => handleCategoryClick("ALL")}>🍕 All Items</span>
        {/* <span onClick={()=>setCategory("BURGERS")}>🍔 Burgers</span> */}
        <span className={category === "BURGERS" ? "active" : ""}onClick={() => handleCategoryClick("BURGERS")}>🍔 Burgers</span>
        <span className={category === "CHICKEN" ? "active" : ""}onClick={() => handleCategoryClick("CHICKEN")}>🍗 Chicken</span>
        <span className={category === "WRAPS" ? "active" : ""}onClick={() => handleCategoryClick("WRAPS")}>🌯 Wraps</span>
        <span className={category === "PASTA" ? "active" : ""}onClick={() => handleCategoryClick("PASTA")}>🍝 Pasta</span>
        <span className={category === "DESSERTS" ? "active" : ""}onClick={() => handleCategoryClick("DESSERTS")}>🍩 Desserts</span>
      </div>

      <div className="trending">
        <p>🔥 Trending Searches</p>

        <div className="tags">
          <span className={category === "Classic Smash Burger" ? "active" : ""}onClick={() => handleCategoryClick("Classic Smash Burger")}>SMASH BURGER</span>
          <span className={category === "Nashville Hot Chicken" ? "active" : ""}onClick={() => handleCategoryClick("Nashville Hot Chicken")}>NASHVILLE CHICKEN</span>
          <span className={category === "Truffle Mushroom Pasta" ? "active" : ""}onClick={() => handleCategoryClick("Truffle Mushroom Pasta")}>TRUFFLE PASTA</span>
          <span className={category === "Nutella Lava Cake" ? "active" : ""}onClick={() => handleCategoryClick("Nutella Lava Cake")}>LAVA CAKE</span>
          <span className={category === "Grilled Herb Chicken" ? "active" : ""}onClick={() => handleCategoryClick("Grilled Herb Chicken")}>Grilled HERB</span>
          <span className={category === "Iced Caramel Latte" ? "active" : ""}onClick={() => handleCategoryClick("Iced Caramel Latte")}>ICED LATTE</span>
        </div>
      </div>
    </div>
  </div>
)}
    
    </>
  );
};

export default Header;