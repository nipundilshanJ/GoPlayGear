
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Cricket ball',
      price: 3500,
      quantity: 2
    },
    {
      id: 2,
      name: 'Cricket Pads',
      price: 50000,
      quantity: 2
    }
  ]);

  const handleIncrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
    // Add checkout logic here
  };

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
            Total : Rs {calculateTotal().toLocaleString()}
          </div>
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            <span>Proceed to<br/>Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
