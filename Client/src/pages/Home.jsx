
import '../styles/Home.css';

const Home = () => {
	return (
		<div className="home-page">
			{/* Main Content Section - Full Layout */}
			<section className="main-content">
				{/* Left Side - Runner Image */}
				<div className="content-left">
					<div className="runner-image">
						<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=775&h=775&fit=crop&crop=center" alt="Runner silhouette" />
					</div>
					<div className="runner-quote">"Run Faster. Lift Stronger. Play Harder."</div>
				</div>

				{/* Center Content Area */}
				<div className="content-center">
					{/* Hero Title */}
					<h1 className="hero-title">From Street to Stadium – We've Got You Covered</h1>
					
					{/* Brand Box */}
					<div className="brand-box">
						<h2 className="brand-title">GoPlay Gear</h2>
					</div>

					{/* Description Text */}
					<div className="description-text">
						<p>Level up your game with top-quality sports gear designed for<br />
						performance, comfort, and style.</p>
						<p>Whether you're hitting the gym, the field, or the streets,<br />
						we've got the essentials to keep you moving.</p>
						<p className="highlight-text">
							<strong>Train smart.</strong><br />
							<strong>Play hard.</strong><br />
							<strong>Shop like a pro.</strong>
						</p>
					</div>
				</div>

				{/* Right Side - Cricket Gear Image */}
				<div className="content-right">
					<div className="cricket-image">
						<img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=508&h=762&fit=crop&crop=center" alt="Cricket gear" />
						<div className="cricket-quote">"Fuel Your Passion. Own the Game"</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;

// ...existing code...
