
// import './App.css';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import RecentPosts from "./components/RecentPosts";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div style={mainStyle}>
      <Header />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};
const mainStyle ={
  padding: "0 100px"
}
export default App;
