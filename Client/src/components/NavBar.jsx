import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
	const { getTotalItems } = useCart();
	const cartItemCount = getTotalItems();
	const { isAuthenticated, logout } = useAuth();
	const navigate = useNavigate();

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<span className="navbar-title">GoPlay Gear</span>
			</div>
			<ul className="navbar-links">
				<li><a href="/" className="navbar-link">Home</a></li>
				<li><a href="/sportgears" className="navbar-link">Sport Gears</a></li>
				<li className="navbar-cart">
					<a href="/cart" className="cart-link" aria-label="Cart">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
						{cartItemCount > 0 && (
							<span className="cart-badge">{cartItemCount}</span>
						)}
					</a>
				</li>
				{!isAuthenticated && <li><a href="/signin" className="navbar-link">Sign in</a></li>}
				{!isAuthenticated && <li><a href="/signup" className="navbar-link">Sign Up</a></li>}
				{isAuthenticated && (
					<li>
						<button
							className="navbar-link logout-btn"
							onClick={() => {
								logout();
								navigate('/');
							}}
							style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0 }}
						>
							Logout
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
