import { parseFrontmatter } from "../utils/parseFrontmatter";

const modules = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const posts = Object.values(modules).map((raw) => {
  const { data, content } = parseFrontmatter(raw);

  return {
    slug: data.slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    content,
  };
});

const sortByDate = (a, b) => new Date(b.date) - new Date(a.date);

export const getAllPosts = () => [...posts].sort(sortByDate);

export const getPostBySlug = (slug) =>
  posts.find((post) => post.slug === slug);

export const getRecentPosts = (limit = 2) => getAllPosts().slice(0, limit);
