import Hero from "../components/Hero";
import Mobile from "../components/MobileMenu";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="sm:hidden">
        <Mobile />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
