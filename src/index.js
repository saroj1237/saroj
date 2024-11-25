import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Routes>
      <Route path="/blogs" element={<p>Blog</p>} />
    </Routes>
    <Routes>
      <Route path="/contact" element={<p>Contact Page</p>} />
    </Routes>
  </BrowserRouter>
);

