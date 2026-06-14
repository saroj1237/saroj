import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const BlogCard = ({ post }) => {
  return (
    <article className="card group">
      <Link to={`/blogs/${post.slug}`} className="block">
        <h3 className="mb-2 group-hover:text-accent transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-sm text-muted mb-3">
          {formatDate(post.date)} · {post.category}
        </p>
        <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
      </Link>
    </article>
  );
};

export default BlogCard;
