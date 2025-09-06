import React from 'react';
import '../styles/SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-bg">
      <div className="signin-container">
        <div className="signin-title">GoPlay Gear</div>
        <div className="signin-input fake-input">Email</div>
        <div className="signin-input fake-input">Password</div>
        <div className="signin-btn">Sign In</div>
      </div>
    </div>
  );
};

export default SignIn;
