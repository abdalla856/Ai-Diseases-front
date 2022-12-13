import React, { useState } from "react";
import "./nav.css";
const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="nav">
      <div className="container">
        <img
          src="assets/menu.png"
          alt="menu"
          className="menu"
          onClick={() => setIsShow(!isShow)}
        />
        <div className="logo">
          <img src="assets/logo.png" alt="" />
          <h3>AI DISEASE</h3>
        </div>

        <ul className={isShow ? "links active" : "links"}>
          <li onClick={() => setIsShow(false)}>
            <a href="#about">About Us</a>
          </li>
          <li onClick={() => setIsShow(false)}>
            <a href="#demo">Demo</a>
          </li>
          <li onClick={() => setIsShow(false)}>
            <a href="#faqs">FAQS</a>
          </li>
          <li onClick={() => setIsShow(false)}>
            <button>
              <a href="contact">Contact Us</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
