import React from 'react';
import '../css/FoodMarquee.css';

const FoodMarquee = () => {
  const foodItems = [
    'Fried Chicken',
    'Gourmet Burgers', 
    'Artisan Pizzas',
    'Fresh Wraps & Rolls',
    'Loaded Fries',
    'Ice Cream Shakes',
    'Grilled Sandwiches',
    'Crispy Tacos'
  ];

  // Duplicate items to make seamless loop
  const allItems = [...foodItems, ...foodItems];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {allItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="dot"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMarquee;