import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MarkdownContent from "../components/MarkdownContent";
import { getPostBySlug } from "../data/blogs";
import { formatDate } from "../utils/formatDate";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    document.title = post
      ? `${post.title} — Saroj Basnet`
      : "Post not found — Saroj Basnet";
  }, [post]);

  if (!post) {
    return (
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center py-12">
          <h1 className="mb-3">Post not found</h1>
          <p className="text-muted mb-6">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link to="/blogs" className="btn-outline">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container">
      <article className="max-w-3xl mx-auto">
        <Link
          to="/blogs"
          className="text-sm text-muted hover:text-accent transition-colors duration-200"
        >
          ← Back to Blogs
        </Link>

        <header className="mt-6 mb-8 pb-6 border-b border-border">
          <p className="text-sm text-muted mb-3">
            {formatDate(post.date)} · {post.category}
          </p>
          <h1>{post.title}</h1>
        </header>

        <MarkdownContent content={post.content} />
      </article>
    </div>
  );
};

export default BlogPost;
