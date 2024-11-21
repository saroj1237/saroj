// components/FeaturedWorks.js
import React from "react";

const works = [
  { year: 2020, title: "Designing Dashboards", category: "Dashboard", image: "logo192.png" },
  { year: 2018, title: "Live Guru", category: "Illustration", image: "/assets/liveguru.png" },
  { year: 2018, title: "CMST", category: "Typography", image: "/assets/CMST.png" },
];

const FeaturedWorks = () => {
  return (
    <section>
      <h2>Featured works</h2>
      {works.map((work, index) => (
        <div key={index} style={workStyle}>
          <img src={work.image} alt={work.title} style={{ width: "150px", height:"150px", borderRadius: "8px" }} />
          <div>
            <h3>{work.title}</h3>
            <p>{work.year} | {work.category}</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const workStyle = { display: "flex", gap: "1rem", margin: "1rem 0" };

export default FeaturedWorks;
