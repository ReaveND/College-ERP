import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/nav.css";
import LogoImg from "../../assets/logocollege.jpeg";

const Nav = () => {
  return (
    <div className="navbar">
      <img src={LogoImg} alt="College Logo" className="h-16 w-16 rounded-full" />
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  );
};

export default Nav;
