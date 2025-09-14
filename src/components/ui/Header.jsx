import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <div className="logo">
        <div className="logo-icon">GL</div>
        <span>GlobalLink</span>
      </div>

      <ul className="nav-items">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/country"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Country
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
      </ul>

      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
