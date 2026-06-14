import Hero from "../components/Hero";
import Experience from "../components/Experience";
import FeaturedWorks from "../components/FeaturedWorks";
import Skills from "../components/Skills";
import RecentPosts from "../components/RecentPosts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <FeaturedWorks />
      <Skills />
      <RecentPosts />
    </div>
  );
};

export default Home;
