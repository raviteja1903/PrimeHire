import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../assets/primehire_no_bg.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-wrapper">
      <div className="navbar">
        {/* Left side: Hamburger + Logo */}
        <div className="brand-wrapper">
          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
            <span className={menuOpen ? "line open" : "line"}></span>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="PrimeHire Logo" />
            </Link>
          </div>
        </div>
 
        <ul className="nav-links desktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ai-agent">AI Agents</Link>
          </li>
          <li>
            <Link to="/ChatBot">AI ChatBot</Link>
          </li>
          <li className="login-btn">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
 
      <div
        className={`side-drawer ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="drawer-header">
          <p>MENU</p>
          <span className="close-btn" onClick={toggleMenu}>
            ×
          </span>
        </div>
        <ul onClick={(e) => e.stopPropagation()}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/ai-agent" onClick={toggleMenu}>
              AI Agents
            </Link>
          </li>
          <li>
            <Link to="/ChatBot" onClick={toggleMenu}>
              AI ChatBot
            </Link>
          </li>
          <li className="login-btn">
            <Link to="/login" onClick={toggleMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Navbar;
