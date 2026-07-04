import React, { useState } from "react";
import "../css/Menu.css";
import { FaHeart, FaPlus, FaStar, FaThLarge } from "react-icons/fa";
import { menuItems } from "../product";
import FoodModal from "./FoodModel";

function Menu({searchTerm,category,setCategory}) {
  const categories = [
            "ALL",
            "BURGERS",
            "PIZZA",
            "CHICKEN",
            "WRAPS",
            "DESSERTS",
            "PASTA",
          ];
          
  const [showAll, setShowAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const filteredItems = menuItems.filter((item)=>{

    



    const matchCategory =
        category === "ALL" ||
        item.category === category || item.title === category;

    const matchSearch =
        item.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) || item.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
});


const displayedItems = showAll
    ? filteredItems
    : filteredItems.slice(0,6);

  return (
    <section className="menu-section" id="menu">
      <div className="menu-title1">
       <p className="menu-subtitle">What's Cooking</p>
      <h1 className="menu-title">
        Our Delicious <span>Menu</span>
      </h1>
      </div>
      
      

<div className="category-tabs">
  {categories.map((cat) => (
    <button
      key={cat}
      className={category === cat ? "tab active" : "tab"}
      onClick={() => setCategory(cat)}
    >
      {cat === "ALL"
        ? "All"
        : cat.charAt(0) + cat.slice(1).toLowerCase()}
    </button>
  ))}
</div>


      <div className="menu-grid">
        {displayedItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />

              {item.badge && <span className="badge">{item.badge}</span>}

              <div className="heart-icon">
                <FaHeart />
              </div>
            </div>

            <div className="menu-content">
              <p className="category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>

              <div className="bottom">
                <div>
                  <span className="price">{item.price}</span>

                  {item.oldPrice && (
                    <span className="old-price">{item.oldPrice}</span>
                  )}

                  <div className="rating">
                    <FaStar />
                    <span>({item.rating})</span>
                  </div>
                </div>

                <button
                  className="add-btn"
                   onClick={() => setSelectedItem(item)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {menuItems.length > 6 && (
        <button
          className="view-btn"
          onClick={() => {setShowAll(!showAll)
            setCategory("ALL")}}
  
        >
          <FaThLarge />
          {showAll ? " Show Less" : " View Full Menu"}
        </button>
      )}

      {selectedItem && (
          <FoodModal item={selectedItem}
            onClose={() => setSelectedItem(null)} />
        )}
    </section>
  );
}

export default Menu;