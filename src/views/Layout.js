import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header";
const Layout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
        <main style={{ padding: "0 100px",}}>
          <Outlet />
        </main>
       <Footer/>
    </div>
  );
};

export default Layout;
