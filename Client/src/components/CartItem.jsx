
const CartItem = ({ id, name, price, quantity, onRemove, onIncrease, onDecrease }) => {
	return (
		<div className="cart-item">
			<div className="cart-item-info">
				<div className="cart-item-name">{name}</div>
				<div className="cart-item-price">Rs {price.toLocaleString()}</div>
			</div>
			
			<div className="cart-item-controls">
				<div className="quantity-controls">
					<button className="quantity-btn minus-btn" onClick={onDecrease}>-</button>
					<span className="quantity-value">{quantity}</span>
					<button className="quantity-btn plus-btn" onClick={onIncrease}>+</button>
				</div>
				<button className="remove-btn" onClick={onRemove}>Remove</button>
			</div>
		</div>
	);
};

export default CartItem;
