// components/FeaturedWorks.js
import React from "react";

const works = [
  {
    year: "2023/2024", title: "Live Guru", category: "Susankya Global LLC",
    image: "/assets/liveguru.png",
    description: "Ultimate Success Platform for Medical Entrance for UG (MBBS, BDS, B.Sc. Nursing) & PG (MD/MS) with over 20,000 MCQs featuring hints and explanations, high-yield notes, question and answer discussion videos, live exams, past questions, and daily mini and snap tests."
  },
  {
    year: "2023/2024", title: "CMST", category: "Susankya Global LLC",
    image: "/assets/CMST.png",
    description: "Consultancy Manager is a full-featured web portal designed to handle day-to-day activities at an educational consultancy. It helps save all the trouble of organizing and maintaining various kinds of resources that are stumbled upon on a regular basis. It enables the consultancy to go paperless and efficient with managing records and follow-ups.",
  },
];

const FeaturedWorks = () => {
  return (
    <section>
      <h2>Featured works</h2>
      {works.map((work, index) => (
        <div key={index} style={workStyle}>
          <img src={work.image} alt={work.title} style={{ width: "150px", height: "150px",objectFit: "contain", borderRadius: "8px" }} />
          <div>
            <h3>{work.title}</h3>
            <p>{work.year} | {work.category}</p>
            <p>
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const workStyle = { display: "flex", gap: "1rem", margin: "1rem 0" };

export default FeaturedWorks;
