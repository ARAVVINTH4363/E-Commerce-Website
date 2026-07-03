import React from "react";
import "../css/About.css";
// import mainImg from "./images/about-main.jpg";
// import smallImg from "./images/about-small.jpg";
import smallimage from "../image/about-small-image.jpeg"
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2023/06/06/HTPbhCYv-Sushisamba-1200x897.jpg" alt="Restaurant" className="main-img" />

          <div className="experience-box">
            <h2>12+</h2>
            <p>Years of</p>
            <p>Excellence</p>
          </div>

          <img src={smallimage} alt="Food" className="small-img" />
        </div>

        {/* Right Side */}
        <div className="about-right">
          <p className="sub-title">Our Story</p>
          <h1>
            We Invite You to Visit <br />
            Our <span>Food Restaurant</span>
          </h1>

          <div className="line"></div>

          <p className="about-text">
            Founded in 2012, Sarab began as a small corner joint with a big
            dream – to serve food that brings people together. Today we're proud
            to serve thousands of happy customers every week with the same
            passion that started it all.
          </p>

          <div className="feature">
            <div className="icon red">🍃</div>
            <div>
              <h3>100% Fresh Ingredients</h3>
              <p>
                We source locally and sustainably. Every ingredient is
                hand-picked daily for maximum freshness.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="icon yellow">🏅</div>
            <div>
              <h3>Award-Winning Recipes</h3>
              <p>
                Our signature recipes have won national culinary awards 5 years
                in a row.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="icon green">🚚</div>
            <div>
              <h3>Lightning-Fast Delivery</h3>
              <p>
                Order online and get hot, fresh food at your door in under 25
                minutes.
              </p>
            </div>
          </div>

          <button className="menu-btn">📖 View Full Menu</button>
        </div>
      </div>
    </section>
  );
}

export default About;