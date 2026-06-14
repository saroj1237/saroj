import { Link } from "react-router-dom";

const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/sarojbasnetCV.pdf";
    link.download = "sarojbasnetCV.pdf";
    link.click();
  };

  return (
    <section className="section-container">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <p className="text-accent text-sm font-medium mb-3">
            Mobile App Developer
          </p>
          <h1 className="mb-4">
            Hi, I&apos;m{" "}
            <span className="text-accent">Saroj Basnet</span>
          </h1>
          <p className="text-muted leading-relaxed max-w-xl mb-6">
            Dedicated Mobile App Developer with expertise in Flutter and Dart.
            Skilled in creating dynamic, user-friendly applications with seamless
            backend integration. Passionate about crafting innovative solutions
            and delivering exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="btn-primary" onClick={downloadResume}>
              Download Resume
            </button>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <img
            src="/assets/profile-image.jpg"
            alt="Saroj Basnet"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-surface shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
