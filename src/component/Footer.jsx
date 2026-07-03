import React from 'react';
import '../css/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sf-wrapper">
      <div className="sf-main">
        <div className="sf-container">
          
     
          <div className="sf-col sf-brand-wrap">
            <h2 className="sf-logo">Tasty Treat</h2>
            <p className="sf-brand-text">
              We bring the world's finest flavors together in a fast, friendly, and affordable experience. Every meal crafted with love.
            </p>
            <div className="sf-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Youtube"><FaYoutube /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>

      
          <div className="sf-col">
            <h3 className="sf-heading">Quick Links</h3>
            <ul className="sf-link-list">
              <li><MdKeyboardArrowRight /><a href="#">Home</a></li>
              <li><MdKeyboardArrowRight /><a href="#">About Us</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Our Menu</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Reservation</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Blog</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Contact</a></li>
            </ul>
          </div>

          
          <div className="sf-col">
            <h3 className="sf-heading">Our Menu</h3>
            <ul className="sf-link-list">
              <li><MdKeyboardArrowRight /><a href="#">Burgers</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Pizza</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Fried Chicken</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Wraps & Rolls</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Pasta</a></li>
              <li><MdKeyboardArrowRight /><a href="#">Desserts</a></li>
            </ul>
          </div>

     
          <div className="sf-col">
            <h3 className="sf-heading">Get In Touch</h3>
            <div className="sf-contact-block">
              <div className="sf-contact-icon"><FaLocationDot /></div>
              <div>
                <h4>Address</h4>
                <p>42 Flavor Street, Manhattan, NY 10001</p>
              </div>
            </div>
            <div className="sf-contact-block">
              <div className="sf-contact-icon"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="sf-contact-block">
              <div className="sf-contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>hello@sarabfood.com</p>
              </div>
            </div>
            <div className="sf-contact-block">
              <div className="sf-contact-icon"><FaClock /></div>
              <div>
                <h4>Hours</h4>
                <p>Wed - Sun: 09 AM - 11 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="sf-bottom">
        <div className="sf-bottom-inner">
          <p className="sf-copyright">
            © 2026 <span className="sf-text-red">Tasty Treat Restaurant</span>. All Rights Reserved by <span className="sf-text-green">A2S</span>. Made with ❤ Distributed by <span className="sf-text-green">A2S Team</span>
          </p>
          <div className="sf-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <button className="sf-to-top" onClick={scrollToTop} aria-label="Scroll to top">
              <IoIosArrowUp /> ^
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;