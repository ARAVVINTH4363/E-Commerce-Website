import React from "react";
import "../css/Menu.css";
import { FaHeart, FaPlus, FaStar, FaThLarge } from "react-icons/fa";



function Menu() {
  const menuItems = [
    {
      category: "BURGERS",
      title: "Classic Smash Burger",
      desc: "Double smashed patty, cheddar, caramelized onions, pickles & special sauce",
      price: "$14.99",
      oldPrice: "$18.99",
      rating: 128,
      image: "https://www.tasteofhome.com/wp-content/uploads/2020/03/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
      badge: "Hot"
    },
    {
      category: "PIZZA",
      title: "Margherita Royale",
      desc: "San Marzano tomatoes, buffalo mozzarella, basil & truffle oil",
      price: "$19.99",
      oldPrice: "$24.99",
      rating: 95,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBHard5mAX9QPLcbfut7J6FD7qpjE9mTUkAwx4_JR_GK9AloBcBaUK7_j&s=10",
      badge: "New"
    },
    {
      category: "CHICKEN",
      title: "Nashville Hot Chicken",
      desc: "Crispy fried chicken in fiery Nashville spice blend",
      price: "$12.99",
      oldPrice: "$16.99",
      rating: 210,
      image: "https://i0.wp.com/flavoursofmykitchen.com/wp-content/uploads/2023/01/Snapshot-drumsticks2.png?fit=1920%2C1080&ssl=1",
      badge: "Best Seller"
    },
    {
      category: "WRAPS",
      title: "Loaded Fajita Wrap",
      desc: "Grilled chicken, peppers, sour cream & guacamole",
      price: "$10.99",
      oldPrice: "",
      rating: 74,
      image: "https://tse2.mm.bing.net/th/id/OIP.Tw7QS4PCraV1OatVf08THgHaEK?pid=Api&P=0&h=180",
      badge: ""
    },
    {
      category: "DESSERTS",
      title: "Nutella Lava Cake",
      desc: "Molten chocolate cake with Nutella center",
      price: "$8.99",
      oldPrice: "$11.99",
      rating: 56,
      image: "https://tse4.mm.bing.net/th/id/OIP.DOhD4ajkGIG6KBqBX41IpAHaJQ?cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
      badge: "New"
    },
    {
      category: "PASTA",
      title: "Truffle Mushroom Pasta",
      desc: "Al dente tagliatelle, wild mushrooms, black truffle",
      price: "$16.99",
      oldPrice: "",
      rating: 88,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfp7mxCAzrEqgcDBFhi0Wv0OuBOMwgEb_6i0Hp5fgkyLcg7KwH2wy464&s=10",
      badge: "Chef’s Pick"
    }
  ];

  return (
    <section className="menu-section">
      <p className="menu-subtitle">What's Cooking</p>
      <h1 className="menu-title">
        Our Delicious <span>Menu</span>
      </h1>


     

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="image-box">
              <img src={item.image} alt="" />

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

                <button className="add-btn">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="view-btn">
        <FaThLarge /> View Full Menu
      </button>
    </section>
  );
}

export default Menu;