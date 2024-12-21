import React from 'react';
import './MenuPage.css'; // Menu page styles

const MenuPage = ({ addToCart }) => {
  // Menu items categorized into Starters, Main Course, and Desserts
  const menuItems = {
    starters: [
      { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 80, image: '/images/pizza.jpeg' },
      { id: 2, name: 'Burger', description: 'Juicy grilled burger', price: 50, image: '/images/burger.jpeg' },
      { id: 3, name: 'Tacos', description: 'Spicy chicken tacos', price: 70, image: '/images/tacos.jpeg' },
      { id: 4, name: 'Fries', description: 'Crispy golden fries', price: 40, image: '/images/fries.jpg' },
    ],
    mainCourse: [
      { id: 5, name: 'Pasta', description: 'Pasta with marinara sauce', price: 90, image: '/images/pasta.jpg' },
      { id: 6, name: 'Sushi', description: 'Fresh sushi rolls with wasabi', price: 150, image: '/images/sushi.jpeg' },
      { id: 7, name: 'Steak', description: 'Grilled tofu steak', price: 200, image: '/images/steak.jpeg' },
      { id: 8, name: 'Sandwich', description: 'Grilled chicken sandwich', price: 60, image: '/images/sandwich.jpeg' },
    ],
    desserts: [
      { id: 9, name: 'Juice', description: 'Healthy fresh juice', price: 140, image: '/images/juice.jpg' },
      { id: 10, name: 'Ice Cream', description: 'Cool and creamy ice cream', price: 50, image: '/images/ice-cream.jpeg' },
    ]
  };

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      
      {/* Starters Section */}
      <div className="menu-category">
        <h3>Starters</h3>
        {menuItems.starters.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">Rs {item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* Main Course Section */}
      <div className="menu-category">
        <h3>Main Course</h3>
        {menuItems.mainCourse.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">Rs {item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Desserts Section */}
      <div className="menu-category">
        <h3>Desserts</h3>
        {menuItems.desserts.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">Rs {item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
