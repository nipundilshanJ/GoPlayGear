import React from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-bg">
      <div className="signup-container">
        <div className="signup-title">GoPlay Gear</div>
        <div className="signup-input fake-input">Full Name</div>
        <div className="signup-input fake-input">Email</div>
        <div className="signup-input fake-input">Password</div>
        <div className="signup-input fake-input">Confirm Password</div>
        <div className="signup-btn">Sign Up</div>
      </div>
    </div>
  );
};

export default SignUp;
