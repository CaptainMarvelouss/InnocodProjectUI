import React, { useRef } from 'react';
import './App.css'; // Ensure your CSS file is imported

const Change: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSignUpClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.add('right-panel-active');
    }
  };

  const handleSignInClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove('right-panel-active');
    }
  };

  return (
    <div className="container" ref={containerRef} id="container">
      <div className="form-container sign-up-container">
        <button id="signUp" onClick={handleSignUpClick}>Sign Up</button>
      </div>
      <div className="form-container sign-in-container">
        <button id="signIn" onClick={handleSignInClick}>Sign In</button>
      </div>
    </div>
  );
};

export default Change;
