import React, { useState, useEffect } from "react";
import "../css/Review.css";

const reviews = [
  {
    text: "Catered our office party of 50 people and everything was flawless. Fresh, delicious, on time and well presented.",
    name: "David Park",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: "Honestly the best burgers I've ever had. The smash burger is incredible - perfectly crispy edges, juicy inside.",
    name: "Monica Wilber",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Ordered delivery and the food arrived hot and fresh in 22 minutes. Portions are generous.",
    name: "Cameron Fox",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Amazing ambience and quality. Highly recommended!",
    name: "Priya Sharma",
    role: "Food Enthusiast",
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  }
];

function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const visibleCards = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length]
  ];

  return (
    <section className="reviews-section" id="reviews">
      <p className="subtitle">What People Say</p>
      <h1>
        Our Customers <span>Feedback</span>
      </h1>
      <div className="line"></div>

      <div className="review-container">
        {visibleCards.map((review, i) => (
          <div className="review-card" key={i}>
            <div className="stars">★★★★★</div>

            <p className="review-text">{review.text}</p>

            <div className="profile">
              <img src={review.image} alt="" />
              <div>
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Reviews;