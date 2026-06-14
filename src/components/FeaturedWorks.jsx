import { projects } from "../data/resume";

const FeaturedWorks = () => {
  return (
    <section className="section-container mt-16 md:mt-20">
      <h2 className="section-title">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="card flex flex-col sm:flex-row gap-5 items-start"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg bg-bg p-2 shrink-0"
              />
            )}
            <div className="flex-1">
              <h3 className="mb-1">{project.title}</h3>
              <p className="text-sm text-muted mb-3">
                {project.period} · {project.company}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  View on Play Store →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
