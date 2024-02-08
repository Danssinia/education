import About from "../components/About";
import Achievment from "../components/Achievment";
import Blog from "../components/blog";
import Courses from "../components/courses";
import Footer from "../components/footer";
import Home from "./Home";

function Main() {
  return (
    <div>
      <Home />
      <Courses />
      <Achievment />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default Main;
