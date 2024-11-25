// components/Header.js
import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <NavLink key='/blogs' to="/blogs" >Blogs</NavLink>
        <NavLink key='/contact' to="/contact" >Contact</NavLink>
      </nav>
    </header>
  );
};

const headerStyle = { display: "flex", justifyContent: "flex-end", padding: "1rem 0" };
const navStyle = { gap: "1rem", display: "flex" };

export default Header;
