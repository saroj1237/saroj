import React from "react";
import "./Hero.css";

const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/sarojbasnetCV.pdf";
    link.download = "sarojbasnetCV.pdf";
    link.click();
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I am Saroj Basnet, Mobile App Developer</h1>
        <p className="hero-text">
          Dedicated Mobile App Developer with expertise in Flutter and Dart.
          Skilled in creating dynamic, user-friendly applications with seamless
          backend integration. Passionate about crafting innovative solutions
          and delivering exceptional user experiences.
        </p>
        <button className="hero-button" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
      <img
        src="/assets/profile-image.jpg"
        alt="Saroj Basnet"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;
