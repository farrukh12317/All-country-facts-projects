import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu after clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">GL</div>
        <span>GlobalLink</span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-items ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/country"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Country
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
