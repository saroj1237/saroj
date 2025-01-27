import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 768) {
        setMenuIcon(true);
      } else {
        setMenuIcon(false)
      }
    };

    // Set initial padding
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {
        menuIcon ? (
          <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        ) : (
          <nav className="navbar">
            <div className={"navbar-links"}>
              <NavLink key="/" to="/">
                Home
              </NavLink>
              <NavLink key="/blogs" to="/blogs">
                Blogs
              </NavLink>
              <NavLink key="/contact" to="/contact">
                Contact
              </NavLink>
            </div>
          </nav>
        )
      }
    </div>
  );
};

export default Header;
