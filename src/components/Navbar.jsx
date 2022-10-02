import React from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleOnclick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} width={120} alt="website-logo" />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Packages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">F&Q</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Sing In</Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleOnclick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
