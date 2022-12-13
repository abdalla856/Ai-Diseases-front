import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="heroLeft">
          <h1>SMART DIAGNOSIS WITH SMART AI</h1>
          <p>
            A WEB APP THAT CAN DIAGNOSE A DISEASE AUTOMATICALLY BASE ON IMAGE
            PROCESSING
          </p>
          <Link to="/prediction">
          
          <button>Get it now!</button>
          
          </Link>
        </div>
        <div className="heroRight">
          <img src="assets/Vector HERO.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
