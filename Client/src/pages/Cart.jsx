
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { isAuthenticated } = useAuth();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, createOrder } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();


  const handleIncrease = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const handleDecrease = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      navigate('/signup');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      setIsProcessing(true);
      const response = await createOrder();
      alert(`Order placed successfully! Order ID: ${response.order.Order_ID}`);
      navigate('/');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">SHOPPING CART</h1>
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some items to get started!</p>
            <button 
              className="cart-checkout-btn" 
              onClick={() => navigate('/sportgears')}
            >
              <span>Browse Products</span>
            </button>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">SHOPPING CART</h1>

        <div className="cart-items-container">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>

        <div className="cart-divider"></div>

        <div className="cart-footer">
          <div className="cart-total">
            Total : Rs {getTotalPrice().toLocaleString()}
          </div>
          <button 
            className="cart-checkout-btn" 
            onClick={handleCheckout}
            disabled={isProcessing}
          >
            <span>
              {isProcessing ? 'Processing...' : 'Proceed to\nCheckout'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
