import { experiences } from "../data/resume";

const Experience = () => {
  return (
    <section className="section-container mt-16 md:mt-20">
      <h2 className="section-title">Experience</h2>
      <div className="flex flex-col gap-5">
        {experiences.map((job, index) => (
          <article key={index} className="card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3>{job.role}</h3>
              <p className="text-sm text-muted shrink-0">{job.period}</p>
            </div>
            <p className="text-sm text-accent mb-3">
              {job.company} · {job.location}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {job.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
