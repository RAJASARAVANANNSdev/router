import React, { useState } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <nav className="container">
      <Link to="/" className="nav-logo">
        Navbar
      </Link>
      <div className="nav-icons" onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-items" onClick={closeMenu}>
          <Link to="/" className="nav-link">
            {" "}
            Home
          </Link>
        </li>

        <li className="nav-items" onClick={closeMenu}>
          {" "}
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-items" onClick={closeMenu}>
          {" "}
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
