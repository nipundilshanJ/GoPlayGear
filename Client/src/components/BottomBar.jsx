import React from 'react';
import '../styles/BottomBar.css';

const BottomBar = () => {
	return (
		<footer className="bottombar">
			<div className="bottombar-section bottombar-contact">Contact us</div>
			<div className="bottombar-section bottombar-phone-icon">
				<div className="bottombar-icon phone"></div>
			</div>
			<div className="bottombar-section bottombar-phone">Tele : +94785755559</div>
			<div className="bottombar-section bottombar-mail-icon">
				<div className="bottombar-icon mail"></div>
			</div>
			<div className="bottombar-section bottombar-mail">GoPlay_Gear445@gmail.com</div>
					<div className="bottombar-section bottombar-socials">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bottombar-social-icon" aria-label="Facebook">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/></svg>
						</a>
						<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bottombar-social-icon" aria-label="YouTube">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bottombar-social-icon" aria-label="Twitter">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
						</a>
					</div>
			<div className="bottombar-section bottombar-copyright">Copyright © GoPlay Gears</div>
		</footer>
	);
};

export default BottomBar;
