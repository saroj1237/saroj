// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <a style = {itemStyle} href="#facebook">Facebook</a>
        <a style = {itemStyle} href="#twitter">Twitter</a>
        <a style = {itemStyle} href="#linkedin">LinkedIn</a>
      </div>
      <p>Copyright © 2020 All rights reserved</p>
    </footer>
  );
};

const footerStyle = { textAlign: "center", padding: "1rem", background: "#f7f7f7" };
const itemStyle = {padding: "0 10px"}
export default Footer;
