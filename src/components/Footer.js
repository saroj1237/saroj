// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <a style = {itemStyle} href="https://www.facebook.com/profile.php?id=100088827132285" target="_blank" rel="noreferrer" >
        <img alt="facebook" style={imageStyle} src= "https://img.icons8.com/?size=100&id=118497&format=png&color=000000" /></a>
        <a style = {itemStyle} href="https://x.com/saroj1237" target="_blank" rel="noreferrer" > 
        <img alt="linkedin" style={imageStyle} src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"/> </a>
        <a style = {itemStyle} href="https://www.linkedin.com/in/saroj-basnet-54a50420b/" target="_blank" rel="noreferrer" >
        <img alt="x" style={imageStyle} src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"/>
          </a>
      </div>
      <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

const footerStyle = { textAlign: "center", padding: "1rem", background: "#f7f7f7" };
const imageStyle = {height: '40px',width: '40px'}
const itemStyle = {padding: "0 10px" }
export default Footer;
