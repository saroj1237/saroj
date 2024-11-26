// components/Header.js
import React from "react";
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
  
      <nav style={navStyle}>
        <NavLink style={{}} key='/' to="/" >Home</NavLink>
        <NavLink style={{}} key='/blogs' to="/blogs" >Blogs</NavLink>
        <NavLink style={{}} key='/contact' to="/contact" >Contact</NavLink>
      </nav>

  );
};
const navStyle = {
width: '100%', display: "flex", 
  justifyContent:"end", alignItems:"end", padding: "24px 100px" , gap:'60px',
  flexWrap:'wrap'

};
export default Header;
