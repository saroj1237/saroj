// components/Header.js
import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <a onClick={()=>console.log('Clicked')} href="#works">Works</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

const headerStyle = { display: "flex", justifyContent: "flex-end", padding: "1rem 0" };
const navStyle = { gap: "1rem", display: "flex" };

export default Header;
