import { education, skills } from "../data/resume";

const Skills = () => {
  return (
    <section className="section-container mt-16 md:mt-20">
      <h2 className="section-title">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm rounded-lg bg-bg border border-border text-muted"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="section-title">Education</h2>
      <article className="card">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <h3 className="text-base font-medium">{education.degree}</h3>
          <p className="text-sm text-muted shrink-0">{education.period}</p>
        </div>
        <p className="text-sm text-accent mb-3">{education.school}</p>
        <p className="text-sm text-muted leading-relaxed">
          {education.description}
        </p>
      </article>
    </section>
  );
};

export default Skills;
