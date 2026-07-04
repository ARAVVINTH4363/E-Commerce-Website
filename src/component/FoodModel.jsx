import React, { useState } from "react";
import "../css/FoodModal.css";
import { FaStar, FaPlus, FaMinus, FaTimes, FaShoppingCart } from "react-icons/fa";

const FoodModal = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="food-modal">

        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-left">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="modal-right">

          <p className="category">{item.category}</p>

          <h1>{item.title}</h1>

          <div className="rating1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>4.8 ({item.rating} reviews)</span>
          </div>

          <p className="description">
            {item.desc}
          </p>

          <div className="price-box">
            <span className="price1">{item.price}</span>

            {item.oldPrice && (
              <span className="old-price">{item.oldPrice}</span>
            )}
          </div>

          <div className="info-boxes">
            <div>
              <h3>480 kcal</h3>
              <p>Calories</p>
            </div>

            <div>
              <h3>18 min</h3>
              <p>Prep Time</p>
            </div>

            <div>
              <h3>4.8/5</h3>
              <p>Rating</p>
            </div>
          </div>

          <div className="quantity">
            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
            >
              <FaMinus />
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
            >
              <FaPlus />
            </button>
          </div>

          <button className="cart-btn">
            <FaShoppingCart /> Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default FoodModal;