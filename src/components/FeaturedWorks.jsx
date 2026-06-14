const works = [
  {
    year: "2023/2024",
    title: "Live Guru",
    category: "Susankya Global LLC",
    image: "/assets/liveguru.png",
    description:
      "Ultimate Success Platform for Medical Entrance for UG (MBBS, BDS, B.Sc. Nursing) & PG (MD/MS) with over 20,000 MCQs featuring hints and explanations, high-yield notes, question and answer discussion videos, live exams, past questions, and daily mini and snap tests.",
  },
  {
    year: "2023/2024",
    title: "CMST",
    category: "Susankya Global LLC",
    image: "/assets/cmst.png",
    description:
      "Consultancy Manager is a full-featured web portal designed to handle day-to-day activities at an educational consultancy. It helps save all the trouble of organizing and maintaining various kinds of resources that are stumbled upon on a regular basis. It enables the consultancy to go paperless and efficient with managing records and follow-ups.",
  },
];

const FeaturedWorks = () => {
  return (
    <section className="section-container mt-16 md:mt-20 pb-4">
      <h2 className="section-title">Featured Works</h2>
      <div className="flex flex-col gap-6">
        {works.map((work, index) => (
          <article
            key={index}
            className="card flex flex-col sm:flex-row gap-5 items-start"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-lg bg-bg p-2 shrink-0"
            />
            <div>
              <h3 className="mb-1">{work.title}</h3>
              <p className="text-sm text-muted mb-3">
                {work.year} · {work.category}
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {work.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
