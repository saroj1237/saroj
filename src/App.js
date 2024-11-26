import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import Layout from "./views/Layout";
import Blogs from "./views/Blogs";
import Contact from "./views/Contact";
import Home from "./views/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>  
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs/>} />      
        <Route path="/contact" element={<Contact/>} />      
        </Route>
      </Routes>
    </Router>
  );
};


export default App;
