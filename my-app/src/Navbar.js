import React, { useEffect, useState } from 'react';
import './css/Navbar.css';
import logoIcon from './images/logo-icon.png';
import 'bootstrap/dist/js/bootstrap.min.js';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setShowNavbar(true);
  }, []);

  return (
    <nav className={`navbar fixed-top ${showNavbar ? 'show' : ''}`}>
      <div className="navbar-container container">
        <input type="checkbox" name="toggle-menu" id="toggle-menu" />
        <label htmlFor="toggle-menu" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>
        <ul className="menu-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">Setup Pipeline</a></li>
          <li><a href="#">CV Toolbar</a></li>
          <li><a href="#">Preview Pipeline</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><button className="logout-button">Logout</button></li>
          <li><a href="#">Username</a></li>
        </ul>
        <h1 className="logo">AI / CV Pipeline    <img src={logoIcon} alt="Logo"/></h1>
      </div>
    </nav>
  );
}

export default Navbar;
