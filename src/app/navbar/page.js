"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        Sanket<span className="dot">.</span>
      </div>

      {/* Hamburger for mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About me</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/myprojects">My Work</a></li>
        <li>
          <a href="https://wa.me/+91" target="_blank" rel="noopener noreferrer">
            Contact me
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <button className="theme-toggle">🌙</button>
        <a
          href="https://wa.me/+91"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Contact ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
