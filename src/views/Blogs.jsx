import { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { getAllPosts } from "../data/blogs";

const Blogs = () => {
  const posts = getAllPosts();

  useEffect(() => {
    document.title = "Blogs — Saroj Basnet";
  }, []);

  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-2">Blogs</h1>
        <p className="text-muted mb-10">
          Articles on Flutter, mobile development, and lessons from building
          real-world apps.
        </p>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-12">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
