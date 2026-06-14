const posts = [
  {
    title: "AdMob Monetization in Flutter",
    date: "12 Feb 2024",
    category: "Flutter App",
  },
  {
    title: "Integrating Alibaba Video Player SDK in Flutter App",
    date: "02 Oct 2024",
    category: "Flutter App",
  },
];

const RecentPosts = () => {
  return (
    <section className="section-container mt-16 md:mt-20">
      <h2 className="section-title">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post, index) => (
          <article key={index} className="card group">
            <h3 className="mb-2 group-hover:text-accent transition-colors duration-200">
              {post.title}
            </h3>
            <p className="text-sm text-muted mb-3">
              {post.date} · {post.category}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
