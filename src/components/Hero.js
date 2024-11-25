import React from "react";

const HeroSection = () => {
  
  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <h1>Hi, I am Saroj Basnet, Mobile App Developer</h1>
        <p style={textStyle}>
        Dedicated Mobile App Developer with expertise in Flutter and Node.js.
        Skilled in creating dynamic, user-friendly applications with seamless backend integration.
        Passionate about crafting innovative solutions and delivering exceptional user experiences.
        </p>
        <button style={buttonStyle} onClick={()=>downloadResme()} >Download Resume</button>
      </div>
      <img 
        src="/assets/profile-image.jpg" 
        alt="Saroj Basnet" 
        style={imageStyle}
      />
    </section>
  );
};
const downloadResme=()=>{
  const link = document.createElement("a");
    link.href = "/assets/sarojbasnetCV.pdf"; 
    link.download = "sarojbasnetCV.pdf"; 
    link.click();
}

const heroStyle = { 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  padding: "2rem 0" 
};

const contentStyle = { 
  flex: "1", 
  maxWidth: "70%", 
  marginRight: "2rem" 
};

const textStyle = { 
  marginBottom: "1rem", 
  lineHeight: "1.6" 
};

const buttonStyle = { 
  backgroundColor: "#ff5a5f", 
  color: "white", 
  border: "none", 
  padding: "0.5rem 1rem", 
  borderRadius: "5px", 
  cursor: "pointer" 
};

const imageStyle = { 
  borderRadius: "50%", 
  width: "180px", 
  height: "180px", 
  objectFit: "cover" 
};

export default HeroSection;
