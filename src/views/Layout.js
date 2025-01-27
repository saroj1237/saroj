import React,{useEffect,useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header";
const Layout = () => {
  const [padding, setPadding] = useState("0 100px");

  useEffect(() => {
    // Function to handle padding based on window width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPadding("0 10px");
      } else {
        setPadding("0 100px");
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
      <header>
        <Header />
      </header>
      <main style={{ padding }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
