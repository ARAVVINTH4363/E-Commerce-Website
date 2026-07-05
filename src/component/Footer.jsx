import React from "react";
import "../css/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

export default function Footer({setCategory}){
  const scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"});

  const handleMenuClick = (category) => {
  setCategory(category);

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
  });
};


  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <h2 className="logo1">Tasty <span>Treat</span></h2>
            <p>We bring the world's finest flavors together in a fast, friendly and affordable experience. Every meal crafted with love.</p>
            <div className="social">
              {[FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaTiktok].map((I,i)=><button key={i}><I/></button>)}
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <MdKeyboardArrowRight />
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>

              <li>
                <MdKeyboardArrowRight />
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>

              <li>
                <MdKeyboardArrowRight />
                <Link to="menu" smooth={true} duration={500}>
                  Menu
                </Link>
              </li>

              <li>
                <MdKeyboardArrowRight />
                <Link to="reservation" smooth={true} duration={500}>
                  Reservation
                </Link>
              </li>

              <li>
                <MdKeyboardArrowRight />
                <Link to="reviews" smooth={true} duration={500}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Our Menu</h3>
            <ul>
              {[
                  ["BURGERS", "Burgers"],
                  ["PIZZA", "Pizza"],
                  ["CHICKEN", "Chicken"],
                  ["WRAPS", "Wraps"],
                  ["PASTA", "Pasta"],
                  ["DESSERTS", "Desserts"],
                ].map(([value, label]) => (
                  <li key={value}>
                    <MdKeyboardArrowRight />
                    <span
                      onClick={() => handleMenuClick(value)}
                      style={{ cursor: "pointer" }}
                    >
                      {label}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3>Get In Touch</h3>
            <div className="contact">
              <div className="box">
                <div className="icon2"><FaLocationDot/></div><div><h4>Address</h4><p>42,Flavor Street, NY</p>
                </div>
                </div>
            <div className="box">
              <div className="icon2"><FaPhone/></div><div><h4>Phone</h4><p>+1 (800) 123-4567</p></div></div>
            <div className="box"><div className="icon2"><FaEnvelope/></div><div><h4>Email</h4><p>tastytreat@gmail.com</p></div></div>
            <div className="box"><div className="icon2"><FaClock/></div><div><h4>Hours</h4><p>Wed-Sun : 09AM-11PM</p></div></div></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>© 2026 <span>Tasty Treat</span>. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="/">Privacy Policy</a><a href="/">Terms</a><a href="/">Cookies</a>
          </div>
        </div>
      </div>
      <button className="scrollTop" onClick={scrollToTop}><IoIosArrowUp/></button>
    </footer>
  )
}
