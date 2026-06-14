import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getRecentPosts } from "../data/blogs";

const RecentPosts = () => {
  const posts = getRecentPosts(2);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="section-container mt-16 md:mt-20">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
        <Link
          to="/blogs"
          className="text-sm text-muted hover:text-accent transition-colors duration-200"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
