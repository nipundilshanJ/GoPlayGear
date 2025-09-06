import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import Item from '../components/Item';
import '../styles/SportGears.css';

const SportGears = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [addedProductName, setAddedProductName] = useState('');
  const { isAuthenticated } = useAuth();
  const { addToCart, getTotalItems, cartItems } = useCart();
  const navigate = useNavigate();

  const categories = ['All', 'Cricket', 'Football', 'Rugby', 'Athletic'];

  // Static product data - no database needed
  const allProducts = [
    {
      id: 1,
      name: 'Cricket hard ball',
      price: 3500,
      category: 'Cricket',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=191&h=126&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Cricket Bat',
      price: 99000,
      category: 'Cricket',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=145&h=148&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Batting Gloves',
      price: 50000,
      category: 'Cricket',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=158&h=158&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Batting Pads',
      price: 50000,
      category: 'Cricket',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=131&h=159&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Helmet',
      price: 100000,
      category: 'Cricket',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=146&h=144&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Shoes',
      price: 25000,
      category: 'Athletic',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=197&h=162&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Football',
      price: 15000,
      category: 'Football',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=191&h=126&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'Rugby Ball',
      price: 12000,
      category: 'Rugby',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=191&h=126&fit=crop&crop=center'
    },
    {
      id: 9,
      name: 'Tennis Racket',
      price: 35000,
      category: 'Athletic',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=191&h=126&fit=crop&crop=center'
    }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      navigate('/signup');
      return;
    }
    
    addToCart(product);
    
    // Show success message with product name
    setAddedProductName(product.name);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setAddedProductName('');
    }, 3000);
    
    // Don't redirect to cart - let user add multiple items first
  };

  return (
    <div className="sportgears-page">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="success-message">
          <div className="success-content">
            <span className="success-icon">✅</span>
            <span className="success-text">{addedProductName} added to cart successfully!</span>
            <span className="continue-text">Continue shopping or <a href="/cart" className="go-to-cart-link">view cart</a></span>
          </div>
        </div>
      )}
      
      {/* Cart Status */}
      {getTotalItems() > 0 && (
        <div className="cart-status">
          <div className="cart-status-content">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">{getTotalItems()} item(s) in cart</span>
            <a href="/cart" className="view-cart-btn">View Cart</a>
          </div>
        </div>
      )}
      
      
      
      
      {/* Filters Sidebar */}
      <div className="filters-sidebar">
        <h2 className="filters-title">FILTERS</h2>

        <div className="filter-section">
          <h3 className="filter-heading">Categories</h3>
          <div className="category-list">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <Item
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportGears;
