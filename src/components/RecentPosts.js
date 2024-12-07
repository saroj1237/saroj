// components/RecentPosts.js
import React from "react";

const posts = [
  { title: "AdMob Monetization in Flutter", date: "12 Feb 2024", category: "Flutter App" },
  { title: "Integrating Alibaba Video Player Sdk in Flutter App", date: "02 Oct 2024", category: "Flutter App" },
];

const RecentPosts = () => {
  return (
    <section>
      <h2>Recent posts</h2>
      <div style={postContainerStyle}>
        {posts.map((post, index) => (
          <div key={index} style={postStyle}>
            <h3>{post.title}</h3>
            <p>{post.date} | {post.category}</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const postContainerStyle = { display: "flex", gap: "1rem"};
const postStyle = { padding: "1rem", background: "#f7f7f7", borderRadius: "8px", flex: 1, border: "1px solid #e0e0e0" };

export default RecentPosts;
