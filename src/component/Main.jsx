import React from "react";
import "../css/Main.css";

function Main() {
  const stats = [
    {
      number: "850+",
      label: "HAPPY CUSTOMERS",
    },
    {
      number: "120+",
      label: "MENU ITEMS",
    },
    {
      number: "15+",
      label: "EXPERT CHEFS",
    },
    {
      number: "12yr",
      label: "EXPERIENCE",
    },
  ];


  return (
    <section className="hero"  id="home">
      {/* Top Badge */}
      <div className="top-badge">
        <div className="badge-circle">⭐</div>
        <span>#1 Rated Fast Food Restaurant in New York</span>
      </div>

      <div className="hero-content">
        {/* Left */}
        <div className="hero-left">
          <h1>
            Delicious <span> Fast Food </span> for Every  Moment
          </h1>

          <p>
            Experience bold flavors crafted from premium ingredients.
            <br />
            From crispy burgers to gourmet pizzas - every bite is an
            adventure worth savoring.
          </p>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="circle-bg"></div>

          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            alt="burger"
            className="burger"
          />

          {/* Hot Deal */}
          <div className="floating1 hot">
            <div className="icon1 fire">🔥</div>
            <div>
              <h3>Hot Deal</h3>
              <p>30% off today</p>
            </div>
          </div>

          {/* Delivery */}
          <div className="floating1 delivery">
            <div className="icon1 clock">🕒</div>
            <div>
              <h3>20 min</h3>
              <p>Fast delivery</p>
            </div>
          </div>

          {/* Rating */}
          <div className="floating1 rating">
            <div className="icon1 star">⭐</div>
            <div>
              <h3>4.9/5</h3>
              <p>2k+ reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="stats">
          {stats.map((item, index) => (
        <div className="stat" key={index}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
      </div>      
    </section>
     
  );
}

export default Main;